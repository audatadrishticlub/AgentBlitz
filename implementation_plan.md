# Implementation Plan: Agent Blitz Website V3 (Return to React + Vite Dark Theme)

## Goal Description
Rebuild the Agent Blitz website using the updated instructions. We are moving **away** from the plain HTML/Tailwind setup and **back** to the original Vite + React architecture to restore the premium dark theme (glowing text, pill-shaped nav, outline buttons). We will implement a strict component-based structure (`src/components/`) and set up proper GitHub Pages deployment scripts (`gh-pages`).

## Open Questions
> [!WARNING]
> Regarding the missing logos: Since you haven't provided the actual image files for the University and Club logos yet, I will create sleek CSS-styled placeholders (or text-based fallbacks) for now so the site doesn't display broken image icons. Once you have the real images, you can drop them into the `public/assets/` folder. Is that acceptable?

## Proposed Changes

### 1. Project Initialization & Cleanup
- **[DELETE]** `index.html` and `styles.css` from the root (the plain HTML version).
- **[NEW]** Re-scaffold the Vite + React project (`npm create vite@latest . -- --template react --force`).
- **[NEW]** Install `gh-pages` as a dev dependency.

### 2. Configuration & Deployment
#### **[MODIFY]** `package.json`
- Add `"predeploy": "npm run build"` and `"deploy": "gh-pages -d dist"` scripts.
#### **[MODIFY]** `vite.config.js`
- Set `base: '/Agent-Blitz/'` (placeholder repo name).
#### **[NEW]** `DEPLOY.md`
- Short markdown file documenting the deployment commands.

### 3. Component Architecture (`src/components/`)
- **[NEW]** `Navbar.jsx`: Pill-shaped container, logo placeholders on the left, "DATA DRISHTI CLUB" on the right.
- **[NEW]** `Hero.jsx`: Glowing headline, subhead, info chips (Date/Venue), "SECURE YOUR SPOT" outline button (with your Microsoft Forms link), and the badge row.
- **[NEW]** `About.jsx`: Exact body copy highlighting "peer-led", "hands-on", and "beginner-friendly".
- **[NEW]** `Agenda.jsx`: Responsive table (falling back to stacked cards) with the provided schedule.
- **[NEW]** `Prerequisites.jsx` & `FAQ.jsx`: Native `<details>`/`<summary>` accordions styled to match the dark theme.
- **[NEW]** `Footer.jsx`: Including the student/faculty lead contact details you provided earlier.

### 4. Global Styling
#### **[MODIFY]** `src/index.css`
- Restore the deep navy/indigo dark theme (`#0A0E14` background, `#2DE1D0` accent).
- Define all colors and typography in `:root`.
- Build classes for the glow effects, outline buttons, and icon chips.

## Verification Plan
### Automated Tests
- Run `npm run build` and `npm run preview` to ensure the Vite build successfully compiles and renders the exact dark theme requested.
### Manual Verification
- Verify the layout on mobile viewport sizes to ensure the Agenda table wraps properly and the pill navbar scales down.
- Verify the "SECURE YOUR SPOT" button routes to the correct Microsoft Form.
