# Fortify Pest Control Inc. — Website

A modern, responsive marketing website for Fortify Pest Control Inc., a locally
owned pest control company serving Winnipeg and Southern Manitoba.

Built with **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS 4**, and
**lucide-react** icons. Brand palette (green `#56B351` + navy `#033562`) is
derived from the company logo.

## Pages

| Route          | Description                                                       |
| -------------- | ---------------------------------------------------------------- |
| `/`            | Home — hero, stats, services, about, why-us, process, areas, CTA |
| `/services`    | All 10 services with full descriptions                           |
| `/about`       | Company story, mission, values, guarantee                        |
| `/contact`     | Booking form + contact details, hours, service areas             |
| `/api/contact` | Handles booking form submissions                                 |

Also includes `sitemap.xml`, `robots.txt`, and a custom 404 page.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

Other scripts:

```bash
npm run build    # production build
npm run start    # serve the production build
npm run lint     # ESLint
```

## Booking form email delivery

The contact form works out of the box — submissions are validated and logged
server-side. To deliver booking requests to **info@fortifypest.ca**, configure
an email provider via environment variables (see `.env.example`):

1. Create an account at [resend.com](https://resend.com) and verify the
   `fortifypest.ca` domain.
2. Copy `.env.example` to `.env.local` and set:
   - `RESEND_API_KEY`
   - `CONTACT_FROM_EMAIL` (a verified sender, e.g. `noreply@fortifypest.ca`)

No other code changes are needed — the API route in
`src/app/api/contact/route.ts` will start sending emails automatically.

## Editing content

Most site content (services, service areas, phone, email, hours, slogan) lives
in a single file: **`src/lib/site.ts`**. Update it there and it propagates
across the whole site.

## Project structure

```
src/
  app/                 # routes (home, services, about, contact, api, seo)
  components/          # Header, Footer, ServiceCard, PageHero, BookingForm
    sections/          # homepage sections (Hero, Stats, Process, …)
    ui/                # Container, Button, SectionHeading, Reveal
  lib/                 # site.ts (content/config), cn.ts (helper)
public/
  logo.svg             # company logo
```
