import nodemailer from 'nodemailer'

const OUTLOOK_SCOPE = 'https://outlook.office.com/SMTP.Send offline_access'

function requiredEnv(name: string) {
  const value = process.env[name]?.trim()
  if (!value) throw new Error(`Missing required environment variable: ${name}`)
  return value
}

async function getAccessToken() {
  const tenantId = process.env.OUTLOOK_TENANT_ID?.trim() || 'consumers'
  const response = await fetch(
    `https://login.microsoftonline.com/${encodeURIComponent(tenantId)}/oauth2/v2.0/token`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        client_id: requiredEnv('OUTLOOK_CLIENT_ID'),
        client_secret: requiredEnv('OUTLOOK_CLIENT_SECRET'),
        refresh_token: requiredEnv('OUTLOOK_REFRESH_TOKEN'),
        grant_type: 'refresh_token',
        scope: OUTLOOK_SCOPE,
      }),
      cache: 'no-store',
    },
  )

  const token = (await response.json()) as { access_token?: string; error?: string }
  if (!response.ok || !token.access_token) {
    throw new Error(`Microsoft OAuth token request failed: ${token.error || response.status}`)
  }
  return token.access_token
}

export async function sendFormEmail(input: {
  subject: string
  text: string
  html: string
  replyTo?: string
}) {
  const user = process.env.OUTLOOK_SMTP_USER?.trim() || 'aureuslawmv@outlook.com'
  const recipient = process.env.FORM_NOTIFICATION_EMAIL?.trim() || user
  const accessToken = await getAccessToken()

  const transport = nodemailer.createTransport({
    host: 'smtp-mail.outlook.com',
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
      type: 'OAuth2',
      user,
      accessToken,
    },
  })

  await transport.sendMail({
    from: `Aureus Law Website <${user}>`,
    to: recipient,
    replyTo: input.replyTo,
    subject: input.subject.replace(/[\r\n]+/g, ' ').slice(0, 180),
    text: input.text,
    html: input.html,
  })
}
