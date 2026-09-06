# Fix Mobile Layout & Optimize Content Display

The current mobile experience is cramped, and several components overlap or shrink awkwardly. To fulfill your request to "get display info from browser" and "optimise content display", we will create a custom React hook (`useMobile`) that dynamically reads the browser's display properties via `window.matchMedia`. We will then use this hook across all components to render specific mobile-optimized layouts and styles instead of relying solely on hacky CSS overrides.

## Open Questions
> [!IMPORTANT]
> The browser subagent encountered an installation error when trying to preview the dev server, which is a known temporary issue. Are you able to resize your browser window or check on your phone after we implement these changes to verify it looks perfect?

> [!NOTE]
> For the Navbar on mobile, would you prefer the university logo to completely disappear to save space, or just wrap to a new line? (The plan assumes hiding it completely on very small screens to keep it clean, but let me know if you prefer otherwise).

## Proposed Changes

### Core Hook

#### [NEW] [useMobile.js](file:///c:/Users/bhara/Downloads/Data%20Drishti/Agent%20Blitz/src/hooks/useMobile.js)
Create a React hook `useMobile` that uses `window.matchMedia('(max-width: 768px)')`. It will attach an event listener to the browser window and return a boolean `isMobile`.

---

### Components

#### [MODIFY] [Hero.jsx](file:///c:/Users/bhara/Downloads/Data%20Drishti/Agent%20Blitz/src/components/Hero.jsx)
- Use `useMobile()` to conditionally reduce the massive `clamp()` font-size on mobile so it doesn't overflow.
- Switch the "icon-chip" layouts from horizontal flex to a tighter grid or stacked layout on mobile.

#### [MODIFY] [Navbar.jsx](file:///c:/Users/bhara/Downloads/Data%20Drishti/Agent%20Blitz/src/components/Navbar.jsx)
- Use `useMobile()` to clean up the `justifyContent`.
- If `isMobile` is true, we will stack the content slightly differently or shrink the logo sizes explicitly via JS inline styles so it doesn't bleed out of the sticky pill container.

#### [MODIFY] [Agenda.jsx](file:///c:/Users/bhara/Downloads/Data%20Drishti/Agent%20Blitz/src/components/Agenda.jsx)
- Instead of using CSS to forcibly display a `table` as block elements (which is currently brittle), we will use `useMobile()` to conditionally render a list of beautifully styled `div` "cards" on mobile, while keeping the standard HTML `table` for desktop.

#### [MODIFY] [Footer.jsx](file:///c:/Users/bhara/Downloads/Data%20Drishti/Agent%20Blitz/src/components/Footer.jsx)
- The footer grid is currently breaking because of overlapping CSS grid logic.
- We will conditionally render the footer blocks so they perfectly stack with proper padding using the JS `isMobile` flag, rather than relying on `!important` CSS overrides.

---

### Styles

#### [MODIFY] [index.css](file:///c:/Users/bhara/Downloads/Data%20Drishti/Agent%20Blitz/src/index.css)
- Clean up the hacky `.agenda-table td { display: block }` CSS since we are moving the mobile logic to React.
- Remove `!important` flags in the media query that were fighting with the inline styles in `Footer.jsx`.

## Verification Plan
### Manual Verification
- Run `npm run dev` and resize the browser window to mobile width (e.g., iPhone dimensions: 375px wide).
- Verify the Hero text scales down properly without overflowing.
- Verify the Agenda renders as clean cards instead of a squashed table.
- Verify the Navbar remains a neat pill shape without overlapping logos.
