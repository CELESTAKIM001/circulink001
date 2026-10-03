# Security notes

Production secrets must never be committed. Rotate any real credentials that have been exposed in source control or chat.

Use HTTPS, server-only environment variables, MongoDB least privilege, a Google App Password for SMTP, strong random JWT secrets, OTP attempt limits, rate limiting at the edge, and authenticated/authorized admin routes.

Payment callbacks must be treated as external input and reconciled with the payment/order records stored before the request.
