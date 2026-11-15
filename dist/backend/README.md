# Instakross backend

Серверный слой рассчитан на Cloudflare Workers:

- D1 — товары, категории, остатки и заказы;
- R2 — фотографии товаров;
- вход администратора — через identity Sites и allowlist `ADMIN_EMAIL`;
- уведомления — через Resend HTTP API, потому что Cloudflare Workers не поддерживает прямое SMTP-соединение.

Для запуска нужно создать D1/R2 bindings в `.openai/hosting.json`, применить `schema.sql` и добавить секреты из `.env.example` через Sites runtime environment variables. Ключ `RESEND_API_KEY` не хранится в исходниках.
