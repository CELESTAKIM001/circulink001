# CIRCULINK — TUNA TAKA TAKA

Vercel-ready Next.js marketplace for matching reusable, recyclable, repairable and recoverable materials with people and organizations that can use them.

## Included
- Microsoft Fluent-inspired interface and Fluent UI icons
- CIRCULINK logo splash/startup experience
- Source / Individual with Trash / Company registration
- Email OTP verification
- Marketplace and material submission
- Bottle tops, paper, textiles, construction materials, electronics, laptops, machines and parts
- Leaflet + OpenStreetMap pickup mapping
- Cart and checkout
- Safaricom Daraja CustomerBuyGoodsOnline STK Push architecture
- Dynamic `/api/mpesa/callback` callback
- MongoDB transaction/payment/receipt records
- QR receipt verification
- PDF receipt generation
- Gmail SMTP receipt/contact/OTP delivery
- Admin command center and protected admin metrics
- 88 documented architecture areas
- SDG and sustainability documentation
- Vercel deployment documentation

## Deployment
1. Upload this repository to GitHub.
2. Deploy the repository with Vercel using the repository root (`.`).
3. Add the variables from `.env.example` in Vercel.
4. Set `MPESA_CALLBACK_URL` to `https://YOUR-DOMAIN/api/mpesa/callback`.
5. After MongoDB is configured, run the index and admin seed scripts from a secure environment.

Never commit `.env`, real Daraja credentials, MongoDB passwords, SMTP passwords or JWT secrets.
