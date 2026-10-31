# Nyloteum

**Buy better. Wear longer.**

Nyloteum is an interactive web application and early-access landing page for a sustainable fashion-tech companion app that decodes clothing composition & care tags in seconds—helping everyday shoppers, hikers, and athletes choose durable pieces made to last.

## Tech Stack
- **React 18 + TypeScript** (Vite)
- **Tailwind CSS v4**
- **Framer Motion** (scroll-triggered animations & interactive previews)
- **Lucide React** & custom vector icons
- **React Router** (`/` main landing page and `/early-access` smoke-test flow)

## Getting Started

```bash
npm install
npm run dev
```

Open `http://localhost:5173` in your browser.

## Production Build

```bash
npm run build
npm run preview
```

## Configuring Validation Links
Edit `GOOGLE_FORMS_URL`, `BUY_ME_A_COFFEE_URL`, and `FOUNDER_CONTACTS` at the top of `src/pages/EarlyAccessPage.tsx`.
