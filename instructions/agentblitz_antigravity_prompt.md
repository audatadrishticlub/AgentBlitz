# AntiGravity IDE Build Prompt — "Agent Blitz" GitHub Pages Site

Paste everything below into AntiGravity as your build instructions. It references the event content inline so the IDE has everything it needs in one shot.

---

## TASK

Build a responsive, dark-themed, visually striking website for the "Agent Blitz" event using **React + Vite**, deployable to GitHub Pages. This is NOT a plain HTML/CSS page — use a proper React component structure with Vite as the build tool, matching the quality and feel of the reference dark-theme build (glowing hero text, pill-shaped nav bar, bordered outline buttons, icon-based info chips).

## TECH & STRUCTURE

- **React + Vite** project (`npm create vite@latest . -- --template react`), component-based structure: `Navbar`, `Hero`, `About`, `Agenda`, `Prerequisites`, `FAQ`, `Footer` as separate components under `src/components/`.
- Styling: plain CSS Modules or a single well-organized `index.css` with `:root` custom properties for the color palette (do NOT use Tailwind CDN — this caused the previous build to lose the dark theme and revert to generic light defaults).
- Fully responsive: mobile-first, test breakpoints at 375px, 768px, 1024px+.
- **GitHub Pages deployment setup is required**, since this is a Vite build (not plain static files):
  - Install `gh-pages` as a dev dependency.
  - Set `base: '/<repo-name>/'` in `vite.config.js` (use a placeholder repo name and flag it with a comment for me to update).
  - Add `"predeploy": "npm run build"` and `"deploy": "gh-pages -d dist"` scripts to `package.json`.
  - Document the two commands (`npm run build`, `npm run deploy`) in a short `DEPLOY.md`.

## BRAND / VISUAL DIRECTION

**Match this exact aesthetic direction (this is the look that already existed and worked well — don't deviate from it):**

- **Dark theme.** Near-black/deep navy background (`#0A0E14`–`#0D1117` range), NOT off-white.
- **Cyan/teal accent** (`#2DE1D0`-ish) for headings, links, borders, and highlights — used sparingly and confidently against the dark base.
- **Glowing hero text:** the main headline uses a soft text-shadow/glow effect in white or cyan, large and bold, filling most of the viewport width.
- **Pill-shaped navbar:** rounded-full container, dark grey fill, logo/event name on the left, club name on the right, sitting inside a max-width container with margin around it (not full-bleed).
- **Outlined buttons, not solid fills:** primary CTA is a bordered/outline button in the accent color with a transparent or near-transparent background, uppercase letter-spaced text (e.g., "SECURE YOUR SPOT" style) — not a filled solid-color button.
- **Icon + label info chips:** small rounded dark cards with an icon (emoji or simple icon) plus a label/value pair (e.g., a calendar icon with "DATE" / "10th Sep 2026", a pin icon with "VENUE" / value) — used for date/venue and reused for the badge row (No Coding Needed, 100% Hands-On, etc.).
- Typography: bold, modern, geometric sans-serif for headings; comfortable readable sans for body text at slightly muted white/grey (not pure white) for reduced eye strain on dark backgrounds.
- Generous vertical spacing between sections; let the dark background breathe.
- Section backgrounds can alternate between two close dark shades (e.g., `#0A0E14` and `#10141C`) to create subtle separation without hard borders.
- Structure the CSS with `:root` custom properties for every color, so future theme tweaks are single-line changes.

## HEADER & BRANDING

Navbar Setup: A clean, full-width header with a subtle bottom border. Ensure it is sticky on scroll (`position: sticky`, `top: 0`). Use a dark glassmorphism background (`rgba(10, 14, 20, 0.85)` + `backdrop-filter: blur(16px)`) and a high `z-index` so it seamlessly matches the dark theme. The text inside should remain white. Keep the padding reasonably small so the sticky header doesn't consume too much vertical space when scrolling.

Left side: Include the University logo. Since the logo has black text, wrap it inside a small white pill/badge background (`bg-white` with padding and rounded corners) so it is perfectly legible against the dark header. Scale the logo height to roughly 45px. Follow this with the event wordmark "Agent Blitz 2026" (with the year highlighted in accent color).

Right side: Use the Data Drishti Club logo. Since this logo has light text, it will be perfectly legible against the dark header without any glow or backing. Scale it to roughly 60px in height.

## HERO / ABOUT SECTION

Map this to an introductory `<section id="about">`, styled per the dark-theme direction above (glowing large headline, centered layout):


- **Headline (large, glowing, centered):** "Agent Blitz — Automating Intelligence" — split across 2–3 lines, bold, with the soft glow/text-shadow treatment described above.
- **Subhead (muted grey, centered, one short paragraph):** a condensed one-liner version, e.g. "Join us for an interactive, no-code workshop on building real AI agents — no experience needed."
- **Info chip row** below the subhead (icon + label/value, dark rounded cards, side by side): 📅 DATE → September 10, 2026    📍 VENUE → dropping soon 👀
- **CTA button:** outline style (bordered, transparent fill, accent color, uppercase, letter-spaced) — e.g., "SECURE YOUR SPOT". `href="#"` placeholder — I will supply the final registration link.
Badge row: Place below or near the CTA, styled as dark icon-chip components. The exact badges are: No Coding Needed, 100% Hands-On, Free Entry, Activity Points. (Ensure "Free Food" is completely removed).

- **Body copy** (use verbatim, in a dedicated content block below the hero — can sit in a slightly lighter dark card/section for contrast):

> AI agents are everywhere on your feed right now — everyone's talking about them, but ask someone how they actually *work* and you mostly get buzzwords and blank stares. Same energy here, ngl. That's exactly the gap Agent Blitz is here to close. No boring lecture, no death-by-slides. Just an interactive, peer-led session where you go from "wait, what even is an API" to actually building your own AI agents by the end of the day. It's all hands-on, all beginner-friendly, and you don't need to know how to code to show up.

- Visually call out the phrases **"peer-led"**, **"hands-on"**, and **"beginner-friendly"** in the accent color so the "this is actually for me, not just CS majors" message pops for a skimming reader.

The Text Glow: The glowing effect on "Agent Blitz — Automating Intelligence" is currently too diffuse and uniform, making it look a bit hazy rather than crisp. Instead of glowing the entire headline, restrict the heavy cyan glow to a single focal word (like "Intelligence") and keep the rest of the text a crisp, solid white. This creates better typographic hierarchy and reduces eye strain.

Logo Constraint: The Alliance University logo in the top left is currently too small; the text inside the crest is unreadable. When you enlarge this (and add the club logo as instructed above), you may find the "pill-shaped" navbar feels too cramped. If that happens, ditch the pill container and opt for a clean, full-width transparent header with a subtle bottom border.

Badge Grouping: The bottom badges ("No Coding Needed", etc.) are floating a bit too far down the page. Cluster them closer to the "SECURE YOUR SPOT" button so they act as immediate reassurance right where the user is making the decision to click.

## AGENDA SECTION

Map to a schedule `<section id="agenda">`. Convert this into a responsive HTML table (or a stacked card layout on mobile) with columns **Time | Session | What's Happening**. Keep bullet points inside the third column; ensure text wraps cleanly on narrow viewports (consider switching to stacked cards under ~640px instead of a horizontal scroll table).

Session names get a casual/punchy treatment; the bullets underneath stay clear about what's actually covered so people know what they're signing up for.

| Time | Session | What's Happening |
|---|---|---|
| 10:00 AM – 10:25 AM | Kickoff & Hot Takes ☕ | • Let's talk AI agents — open floor, no dumb questions, come with opinions.<br>• Quick intro to Data Drishti and what we've got planned this year.<br>• Group activity to bust some common AI myths together. |
| 10:25 AM – 11:00 AM | How Agents Actually Work | • The real breakdown of what's going on under the hood of an AI agent.<br>• How agents pull in outside data and talk to APIs.<br>• Live Q&A to map out how "tool-calling" actually works, step by step. |
| 11:00 AM – 12:00 PM | Build Sprint #1: Money Moves Agent 💸 | • Build your own AI agent that reads the market for you.<br>• Set it up to check on portfolio health monthly.<br>• Get it spitting out actual trend reports you can use. |
| 12:00 PM – 1:00 PM | Lunch + Vibes 🍕 | • Food, breather, meet people, no agenda — just recharge. |
| 1:00 PM – 1:40 PM | Fixing Your Chaotic Student Life | • Group discussion: what's actually eating up your time as a student.<br>• Sketch out what an AI system to fix that could look like. |
| 1:40 PM – 2:30 PM | Build Sprint #2: Your Personal Task Bot 🤖 | • Build an agent that keeps your life together.<br>• Feed it your syllabus, deadlines, and project milestones.<br>• Get it auto-scheduling and prioritizing your to-dos. |
| 2:30 PM – 3:00 PM | Wrap-Up & Real Talk | • Group reflection — what clicked, what you're taking home.<br>• Open floor for any last troubleshooting or questions.<br>• Quick feedback form (help us make the next one even better). |

## PREREQUISITES & FAQ

Render **Prerequisites** and **FAQ** as visually distinct cards, or as collapsible accordions using native `<details>`/`<summary>` elements (styled to match the theme, with a rotating chevron icon on open/close) to keep the page compact. Section header for prerequisites: "What to Bring" (more inviting than "Prerequisites").

**"What to Bring" content:**
- Your laptop, charged (or bring the charger). Grab VS Code or AntiGravity IDE beforehand if you can — if not, no stress, we'll get you set up live at the start.
- Stable Wi-Fi/internet on your laptop — you'll need it for the build sprints.
- Zero coding background required. Seriously. If you can follow instructions and aren't afraid to click around, you're set.

**FAQ content** (section header: "Questions You're Probably Asking"):
- **Do I get activity points?** Yup — 10 points just for showing up and participating, 12 if you volunteer. Confirmation lands in your inbox 3–5 working days after.
- **Is this free?** 100%. Free entry, no hidden catch.
- **Who's actually running this?** Bharadwaj N — a fellow student (B.Tech Aerospace Engineering) who's just as into this stuff as you are, not some outside expert talking down at you.

## FOOTER

Icon Color Clash: The neon pink/red phone icons clash heavily with the cyan and dark navy theme. Swap these out for muted grey or cyan icons to maintain a cohesive color palette.

Logo Visibility: The Data Drishti logo on the bottom left is extremely dark and getting entirely lost against the background. If you don't have a high-contrast (all-white) version of the logo for dark themes, place a subtle, very soft radial gradient (like a dim white spotlight) directly behind the logo to help it pop off the background.

Typographic Hierarchy: In the "Student Leads" and "Faculty Leads" columns, the names, titles, emails, and phone numbers are competing for attention. Keep the names bold and white, but dim the emails, titles, and phone numbers to a lower-opacity grey. This allows the user to scan the names first, then read the contact details if needed.

## BUILD NOTES FOR THE IDE

1. Keep all copy exactly as given above — don't paraphrase or invent additional marketing copy.
2. **Do not default to a plain light HTML/Tailwind-CDN template.** This is a React + Vite project, dark theme, matching the glow/pill-nav/outline-button/icon-chip aesthetic described above — that visual direction is a hard requirement, not a suggestion.
3. Structure the CSS with `:root` custom properties for colors, fonts, and spacing scale so a future theme/design pass only requires changing variables, not rewriting components.
4. Make the "Secure Your Spot" href and the university logo `src` easy to find (add a `// TODO` comment next to each in the component code).
5. Ensure the page passes basic accessibility checks: alt text on images, sufficient color contrast (check accent-on-dark contrast ratios), visible focus states on interactive elements (buttons, accordion summaries) — dark themes make focus states easy to forget.
6. `<details>`/`<summary>` still work fine inside JSX for the FAQ/Prerequisites accordions — style them to match the dark chip aesthetic, with a rotating chevron icon on open/close.
7. Confirm the final `npm run build && npm run deploy` flow actually produces a working GitHub Pages site before considering this done — test locally with `npm run preview` first.
