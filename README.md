# Madina Batoshova — Portfolio

A professional, multi-page portfolio for frontend software engineer Madina Batoshova.

## Pages

- Home
- Work and project case studies
- Experience
- About
- Resume
- Contact

## Run locally

Requires Node.js 22.13 or newer.

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal.

## Validate a production build

```bash
npm run build
```

The portfolio is public and does not use accounts or sign-in.

## Vercel

The default scripts use Next.js. Deploy with `npx vercel --prod`. Vercel uses `vercel.json` and builds with `npm run build`. The site has no database or secret requirements. Production social metadata uses `VERCEL_PROJECT_PRODUCTION_URL`; set `NEXT_PUBLIC_SITE_URL` to override it for a custom domain.

Original Cloudflare development scripts remain available as `npm run dev:sites` and `npm run build:sites`, using local `.openai/hosting.json`.
