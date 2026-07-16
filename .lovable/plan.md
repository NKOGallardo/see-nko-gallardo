# Recreate nkocoding.codes

A single-page marketing site for NKO CODING — dark navy theme, slate-blue gradient accents, bold display headings with italic emphasis words, minimal nav.

## Sections (top to bottom, matching source)

1. **Nav** — `NKO`CODING logo left; Services / Pricing / Projects / About links + Get Started button right.
2. **Hero** — "Build Websites That *Stand Out*" (italic slate-blue gradient on "Stand Out"), tagline, Get Started + View Work buttons.
3. **Services** — 6 cards: Web Development, SEO & Performance, UI/UX Design, Custom Branding, Web Apps, Maintenance (each with 3 bullet points).
4. **Pricing** — 3 plans (Basic R500–1,000, Standard R1,500–3,000 [Most Popular], Premium R5,000–10,000+) with feature lists.
5. **Projects** — 2 cards: Portfolio (nkogallardo.link) + Study Buddy, external links.
6. **About** — "Craftsmanship Meets *Technology*" copy, four value chips (Speed-first, Goal-driven, Secure by default, Accessible), 3 highlight cards (Fast Delivery, Strategy-Led, Post-Launch Support).
7. **Testimonials** — 3 quotes (Hloniphile S., City Soul, Learners).
8. **Contact** — heading, contact details (email, WhatsApp, location, Instagram), and a form (first/last name, email, plan select, message, Send).
9. **Footer** — minimal.

Smooth-scroll anchor navigation within the single page (matches source's `#pricing`, `#projects`, `#contact` behavior).

## Design system

- Dark navy background (`#0b1220`-ish), lighter panel surfaces.
- Slate-blue → light-steel gradient for emphasis words and primary buttons.
- Display serif or bold sans for headings with italic accent words; clean sans for body.
- All colors defined as semantic tokens in `src/styles.css` under `@theme`.
- Subtle top-left radial glow behind hero.

## Technical

- Rewrite `src/routes/index.tsx` as the full page (replace placeholder).
- Update `src/routes/__root.tsx` head: title "NKO CODING — Premium Web Development", matching description and OG tags.
- Components under `src/components/site/`: `Nav`, `Hero`, `Services`, `Pricing`, `Projects`, `About`, `Testimonials`, `Contact`, `Footer`.
- Tokens + gradient/shadow definitions in `src/styles.css`.
- Contact form is presentation-only (no backend) — submit shows a toast. Can wire to Lovable Cloud later if you want real submissions.

## Not included (ask if you want them)

- Real backend for the contact form
- Actual client logos/testimonial photos
- Blog or CMS
