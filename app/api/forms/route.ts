import { NextResponse } from 'next/server'
import { sendFormEmail } from '@/lib/outlook-mailer'

export const runtime = 'nodejs'
export const maxDuration = 15

type FormPayload = Record<string, unknown>

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function field(payload: FormPayload, name: string, maxLength = 2_000) {
  return typeof payload[name] === 'string' ? payload[name].trim().slice(0, maxLength) : ''
}

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => {
    const entities: Record<string, string> = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;',
    }
    return entities[character]
  })
}

function emailContent(title: string, rows: Array<[string, string]>) {
  const presentRows = rows.filter(([, value]) => Boolean(value))
  return {
    text: [title, '', ...presentRows.map(([label, value]) => `${label}: ${value}`)].join('\n'),
    html: `
      <div style="font-family:Arial,sans-serif;color:#172033;line-height:1.5">
        <h2 style="margin-bottom:20px">${escapeHtml(title)}</h2>
        <table style="border-collapse:collapse;width:100%;max-width:680px">
          ${presentRows
            .map(
              ([label, value]) => `
                <tr>
                  <th style="text-align:left;vertical-align:top;padding:9px 14px 9px 0;border-bottom:1px solid #e5e7eb;width:160px">${escapeHtml(label)}</th>
                  <td style="padding:9px 0;border-bottom:1px solid #e5e7eb;white-space:pre-wrap">${escapeHtml(value)}</td>
                </tr>`,
            )
            .join('')}
        </table>
      </div>`,
  }
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as FormPayload

    // Honeypot: silently accept automated submissions without sending mail.
    if (field(payload, 'website', 200)) return NextResponse.json({ ok: true })

    const kind = field(payload, 'kind', 30)
    const email = field(payload, 'email', 254)
    if (!emailPattern.test(email)) {
      return NextResponse.json({ ok: false, error: 'Please enter a valid email address.' }, { status: 400 })
    }

    if (kind === 'contact') {
      const firstName = field(payload, 'firstName', 100)
      const lastName = field(payload, 'lastName', 100)
      const message = field(payload, 'message', 5_000)
      if (!firstName || !lastName || !message) {
        return NextResponse.json({ ok: false, error: 'Please complete all required fields.' }, { status: 400 })
      }
      const content = emailContent('New website contact message', [
        ['Name', `${firstName} ${lastName}`],
        ['Email', email],
        ['Phone', field(payload, 'phone', 100)],
        ['Subject', field(payload, 'subject', 200)],
        ['Message', message],
      ])
      await sendFormEmail({ subject: `Website enquiry — ${firstName} ${lastName}`, replyTo: email, ...content })
    } else if (kind === 'consultation') {
      const fullName = field(payload, 'fullName', 200)
      if (!fullName || !field(payload, 'message', 5_000)) {
        return NextResponse.json({ ok: false, error: 'Please complete all required fields.' }, { status: 400 })
      }
      const content = emailContent('New consultation request', [
        ['Name', fullName],
        ['Email', email],
        ['Phone', field(payload, 'phone', 100)],
        ['Client type', field(payload, 'clientType', 100)],
        ['Company', field(payload, 'companyName', 200)],
        ['Practice area', field(payload, 'practiceArea', 200)],
        ['Preferred lawyer', field(payload, 'preferredLawyer', 200)],
        ['Preferred date', field(payload, 'preferredDate', 100)],
        ['Preferred time', field(payload, 'preferredTime', 100)],
        ['Notes', field(payload, 'message', 5_000)],
      ])
      await sendFormEmail({ subject: `Consultation request — ${fullName}`, replyTo: email, ...content })
    } else if (kind === 'newsletter') {
      const content = emailContent('New newsletter subscription', [['Email', email]])
      await sendFormEmail({ subject: `Newsletter subscription — ${email}`, replyTo: email, ...content })
    } else {
      return NextResponse.json({ ok: false, error: 'Unsupported form type.' }, { status: 400 })
    }

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('Form email delivery failed', error instanceof Error ? error.message : error)
    return NextResponse.json(
      { ok: false, error: 'We could not send your message. Please try again or contact us directly.' },
      { status: 503 },
    )
  }
}
