# Outlook email through Vercel Functions

The public contact, consultation, and newsletter forms post to `POST /api/forms`. That route runs on Vercel's Node.js runtime and sends the notification through Outlook SMTP. No Resend service is used.

## Microsoft setup

1. In Microsoft Entra, create an app registration that supports **personal Microsoft accounts**.
2. Add a Web redirect URI for the one-time OAuth authorization-code flow.
3. Create a client secret.
4. Request delegated consent for `https://outlook.office.com/SMTP.Send` and `offline_access` while signed in as `aureuslawmv@outlook.com`.
5. Exchange the returned authorization code for tokens and retain the `refresh_token`. Do not commit the token or client secret.

For a personal Outlook.com mailbox, use the `consumers` tenant. Microsoft requires OAuth 2.0/Modern Authentication for this SMTP connection.

## Vercel environment variables

Add these values in **Project → Settings → Environment Variables**, for Production and any Preview environments that should send mail:

```text
OUTLOOK_SMTP_USER=aureuslawmv@outlook.com
FORM_NOTIFICATION_EMAIL=aureuslawmv@outlook.com
OUTLOOK_TENANT_ID=consumers
OUTLOOK_CLIENT_ID=<Microsoft app client ID>
OUTLOOK_CLIENT_SECRET=<Microsoft app client secret>
OUTLOOK_REFRESH_TOKEN=<refresh token from the OAuth consent flow>
```

Redeploy after adding or changing environment variables. The Vercel Function exchanges the refresh token for a short-lived access token for every delivery, then connects to `smtp-mail.outlook.com` on port 587 using STARTTLS.

## Local testing

Copy `.env.example` to `.env.local`, add the OAuth values locally, run the site, and submit a form. Never commit `.env.local`.
