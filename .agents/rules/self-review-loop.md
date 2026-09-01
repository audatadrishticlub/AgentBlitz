---
trigger: always_on
---

SELF-REVIEW LOOP — MANDATORY BEFORE CALLING THIS DONE

Do not present the final walkthrough until you have completed this loop and it passes cleanly.

After every implementation pass:

Run the build and open it in a browser subagent. Capture screenshots at three widths: 375px (mobile), 768px (tablet), 1440px (desktop).
Switch persona and self-review as a senior front-end developer and design supervisor with 15+ years of experience looking at those screenshots plus the code. Grade against this checklist — be harsh, not agreeable:
Visual direction match: Is the background actually dark (not white/light)? Is the accent color cyan/teal and used consistently? Does the hero headline have the glow effect? Is the nav a pill shape, not a full-width bar?
Component completeness: Are the navbar, hero, info chips, badge row, agenda section, prerequisites/FAQ accordions, and footer ALL present and populated with the real copy — no lorem ipsum, no placeholder section titles left in?
Responsiveness: Does the layout actually adapt at all three widths, or does something overflow, clip, or overlap? Does the agenda table/cards degrade sensibly on mobile?
Accessibility: Sufficient contrast for accent-on-dark and body text on dark background? Alt text on images? Visible focus outlines on the CTA button and accordion summaries when tabbed to?
Content accuracy: Does every piece of copy match what was specified, word for word? Are the two placeholder TODOs (registration link, university logo) still clearly marked and not accidentally filled with fake data?
Functional correctness: Does npm run build succeed with no errors? Does npm run preview show a working page? Are there console errors in the browser subagent's session?
Score each item pass/fail. If everything passes, write a short verdict artifact stating "APPROVED — ready to deploy" and proceed to the walkthrough. If anything fails, list the specific failures with the specific element/file involved (not vague notes like "looks off"), fix them, rebuild, and repeat this loop from step 1.
Only after an "APPROVED" verdict should you generate the final walkthrough Artifact and tell me it's done. Include the last-pass screenshots and the verdict in that walkthrough so I can see the review, not just the result.