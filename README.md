# CIRCULINK — TUNA TAKA TAKA

A Vercel-ready circular-economy marketplace connecting recoverable materials with people and businesses that can reuse, repair, transform, or recycle them.

## Core flows
- Registration as Source / Individual with Trash / Company
- Email OTP verification
- Material listing and marketplace discovery
- Map-enabled pickup locations using OpenStreetMap/Leaflet
- Add-to-cart and checkout
- Daraja Buy Goods payment initialization + callback recording
- Receipt QR verification + email delivery
- Collector pickup scheduling
- Admin command center with operational, payments, messaging, sustainability and system controls
- Contact and notification workflows

## Deployment
1. Import the repository into Vercel.
2. Add variables from `.env.example` in Vercel Project Settings.
3. Set `SMTP_PASSWORD` to a Google App Password.
4. Use production Daraja credentials only in Vercel server-side environment variables.
5. Ensure the Daraja callback points to `/api/mpesa/callback`.
6. Allow the Vercel deployment host in MongoDB Atlas Network Access.

The application uses a Segoe UI system font stack and Microsoft Fluent UI icons; no AI-themed typography or emoji UI is used.
