# The Baseline

Clinical Optimization Studio website — Woodway, TX. Built with Next.js 15, React 19, and TypeScript.

A cash-pay clinical practice offering GLP-1 metabolic therapy, hormone replacement, IV infusion protocols, and behavioral health integration — managed by a board-certified FNP-C.

## Tech Stack

| Layer          | Technology                    |
| -------------- | ----------------------------- |
| Framework      | Next.js 15.3 (App Router)     |
| UI             | React 19                      |
| Language       | TypeScript 5                  |
| Styling        | CSS Modules / Global CSS      |
| Fonts          | Cormorant Garamond, IBM Plex Mono, Outfit (Google Fonts via next/font) |
| Linting        | ESLint 9 (flat config)        |
| Package Manager| npm                           |

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout (fonts, metadata, Nav, Footer)
│   ├── page.tsx            # Homepage
│   ├── globals.css         # All styles
│   ├── services/page.tsx   # Services + IV menu + process
│   ├── programs/page.tsx   # Membership pricing
│   ├── provider/page.tsx   # Provider bio + behavioral health
│   └── faq/page.tsx        # FAQ accordion
├── components/
│   ├── Nav.tsx             # Fixed navbar with mobile menu
│   ├── Footer.tsx          # Site footer
│   ├── ServiceCards.tsx    # Service line cards (home + services)
│   ├── BookingCTA.tsx      # Reusable booking call-to-action
│   ├── FaqAccordion.tsx    # Expandable FAQ
│   └── ScrollAnimations.tsx# Intersection Observer fade-up
├── public/
│   └── provider.jpg        # Provider photo
├── package.json
├── next.config.ts
├── tsconfig.json
└── eslint.config.mjs
```

## Routes

| Path         | Page                              |
| ------------ | --------------------------------- |
| `/`          | Home (hero, manifesto, services, why, CTA) |
| `/services`  | Service lines, process steps, IV menu |
| `/programs`  | Membership tiers + All-Access bundle |
| `/provider`  | Provider bio, certs, behavioral health |
| `/faq`       | Frequently asked questions        |

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Install & Run

```bash
# Clone the repo
git clone https://github.com/hpv0925/The-Baseline.git
cd The-Baseline

# Install dependencies
npm install

# Start dev server (runs on http://localhost:3000)
npm run dev

# Production build
npm run build

# Start production server
npm run start

# Run linter
npm run lint
```

> **Note:** If you are behind a corporate proxy that intercepts SSL certificates, the project includes a `.npmrc` with `strict-ssl=false` and uses `cross-env` with `NODE_TLS_REJECT_UNAUTHORIZED=0` in all npm scripts. On Vercel or a clean network these have no effect.

---

## Deploying to Vercel

### Step 1: Push to GitHub

Make sure the code is pushed to your GitHub repo:

```bash
git remote -v
# origin  https://github.com/hpv0925/The-Baseline.git
```

### Step 2: Sign Up / Log In to Vercel

Go to [vercel.com](https://vercel.com) and sign up with your GitHub account (recommended). This gives Vercel access to your repositories.

### Step 3: Import the Project

1. From the Vercel dashboard, click **Add New…** → **Project**
2. Find and select **The-Baseline** from your GitHub repository list
3. If you don't see it, click **Adjust GitHub App Permissions** and grant access to the repo

### Step 4: Configure the Project

Vercel auto-detects Next.js. The defaults are usually correct:

| Setting        | Value                     |
| -------------- | ------------------------- |
| Framework      | Next.js (auto-detected)   |
| Build Command  | `npm run build` (default) |
| Output Directory| `.next` (default)         |
| Install Command| `npm install` (default)   |

No environment variables are required unless you add third-party services later.

### Step 5: Deploy

Click **Deploy**. Vercel will:

1. Clone the repo
2. Install dependencies
3. Run `next build`
4. Deploy the output to a `.vercel.app` domain

Your site will be live at `https://the-baseline-XXXXX.vercel.app` (Vercel gives you a preview URL).

### Step 6: Redeploy on Changes

Once connected, Vercel automatically redeploys when you push to `main`. For pull requests, Vercel creates preview deployments automatically.

---

## Connecting a Custom Domain on Vercel

### Prerequisites

- A domain you own (e.g., from Namecheap, GoDaddy, Google Domains, Cloudflare)
- Your site already deployed on Vercel

### Step 1: Add Domain in Vercel

1. Go to your project dashboard on Vercel
2. Click **Settings** → **Domains**
3. Enter your domain (e.g., `thebaselinetx.com`) and click **Add**
4. Vercel will show recommended DNS records to configure

### Step 2: Configure DNS at Your Domain Registrar

Log in to your domain registrar (where you bought the domain) and add the DNS records Vercel gave you:

#### For the apex domain (e.g., `thebaselinetx.com`):

| Type  | Name | Value                  | TTL   |
| ----- | ---- | ---------------------- | ----- |
| A     | @    | `76.76.21.21`          | Auto  |

Alternatively, if you want to use CNAME (only works for subdomains, not apex on some registrars):

#### For the `www` subdomain:

| Type  | Name  | Value                          | TTL   |
| ----- | ----- | ------------------------------ | ----- |
| CNAME | www   | `cname.vercel-dns.com`         | Auto  |

> **Vercel's recommendation:** Use a single A record pointing to `76.76.21.21` for the apex domain. Vercel handles the rest.

### Step 3: Redirect `www` to apex (or vice versa)

In the Vercel Domains settings, after adding both `thebaselinetx.com` and `www.thebaselinetx.com`:

1. Choose which one is your primary (e.g., `thebaselinetx.com`)
2. Vercel will offer to set up a redirect from the other one automatically — accept it

### Step 4: Wait for DNS Propagation

DNS changes can take anywhere from a few minutes to 48 hours (usually 5–30 minutes). Vercel shows a green checkmark when your domain is verified and SSL is provisioned.

### Step 5: SSL Certificate

Vercel automatically provisions a free Let's Encrypt SSL certificate for your domain. No manual setup needed — it just works once DNS is verified.

### Step 6: Verify

Visit your domain. You should see the site with HTTPS enabled.

---

## Environment Variables (Optional)

No environment variables are required out of the box. If you add third-party services later (analytics, booking API, etc.), add them in Vercel under **Settings** → **Environment Variables** and reference them with `NEXT_PUBLIC_` prefix for client-side access:

```bash
NEXT_PUBLIC_SITE_URL=https://thebaselinetx.com
```

---

## License

Private — all rights reserved.
