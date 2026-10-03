# Vercel deployment checklist

1. Import this repository.
2. Add every variable from `.env.example` in Vercel.
3. Set `SECRET_KEY` to a random 32-byte secret or stronger.
4. Set `SMTP_PASSWORD` to a Google App Password.
5. Set production Daraja credentials only in server-side environment variables.
6. Configure MongoDB Atlas network access for Vercel.
7. Ensure the Daraja callback resolves to `/api/mpesa/callback`.
8. Seed an admin account using `scripts/seed-admin.mjs`.
9. Run the smoke checks in `docs/SMOKE_TESTS.md`.
