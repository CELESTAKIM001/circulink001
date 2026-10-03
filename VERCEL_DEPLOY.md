# CIRCULINK — Vercel deployment

## 1. Repository root
This archive is intentionally flattened: `package.json`, `app/`, `components/`, `lib/`, and `public/` are at the repository root. Set Vercel **Root Directory** to `.`.

## 2. Environment variables
Copy `.env.example` into Vercel Environment Variables and replace every placeholder. Never commit `.env`.

Required production variables include MongoDB, Daraja, SMTP, JWT secret and admin password.

## 3. Daraja callback
Use:
`https://YOUR-VERCEL-DOMAIN/api/mpesa/callback`

The STK service also constructs the callback from the live request origin when the configured callback does not contain `/api/mpesa/callback`.

## 4. First deployment
Run the build command automatically through Vercel: `npm run build`.

After deployment, seed the admin from a secure terminal:
`npm run seed:admin`

Then create MongoDB indexes:
`npm run db:indexes`

## 5. Production checks
- Register a source, collector and company account.
- Confirm OTP email delivery.
- Sign in after verification.
- Add a material.
- Open the Leaflet pickup map.
- Create an order and test Daraja in the intended environment.
- Confirm callback updates the payment/order records.
- Confirm receipt email contains the verification QR.
- Open `/verify-receipt?receipt=...` and verify the recorded receipt.
- Confirm admin-only metrics are unavailable to non-admin users.
