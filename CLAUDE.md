# CLAUDE.md — SignalWorks Website

## IMPORTANT: Use Claude Opus for this project
This project requires Opus-class reasoning for design decisions, copy refinement, and quality evaluation. Do not use a faster/smaller model for build work on this project.

## Read these files before starting ANY work
1. `PROJECT.md` — who this is for, all page copy, brand personality
2. `DESIGN.md` — the visual contract (colors, fonts, spacing, do/don'ts)
3. `AGENTS.md` — agent ordering and the evaluator loop
4. `.interface-design/system.md` — persistent design decisions (if it exists)

## Stack
- Framework: Astro 4
- Styling: Tailwind CSS (tokens from DESIGN.md are in tailwind.config.mjs)
- Animation: IntersectionObserver + CSS transitions for scroll-driven reveals. No animation libraries in the stack (earlier drafts used Motion and GSAP ScrollTrigger; both were removed after the hinge-fold kill).
- No component library. Build from scratch following DESIGN.md.

## Code Standards
- TypeScript over JavaScript
- Tailwind classes only, no inline styles
- CSS custom properties for design tokens (match DESIGN.md values exactly)
- No `any` types
- Component files: PascalCase. Utilities: camelCase.
- Astro components for layout and static sections
- No React/Vue/Svelte islands unless interactivity genuinely requires it

## The Evaluator-Optimizer Loop (NON-NEGOTIABLE)
Every section must pass a double-pass review before moving to the next section.

**After building each section:**
1. Re-read the relevant copy in PROJECT.md — does the implementation match exactly?
2. Run the full AI Fingerprint Checklist from DESIGN.md against the section
3. Check the section against the DESIGN.md Do's and Don'ts
4. Fix every flagged item before proceeding
5. Only after zero flags: move to the next section

This is not optional. A section that fails the checklist gets rebuilt, not patched.

**Full-page pass before deploy:**
After all sections are complete, run the entire fingerprint checklist against the full page. Fix everything before deploying.

## Design Enforcement
- NEVER use Inter without explicit instruction from the user
- No nested cards
- No glassmorphism (no backdrop-filter on content surfaces)
- No purple-to-blue gradients
- Animate only `transform` and `opacity`
- Respect `prefers-reduced-motion` — wrap all scroll-triggered and load animations in `@media (prefers-reduced-motion: no-preference)`
- Cabinet Grotesk for all headlines, Plus Jakarta Sans for body, Instrument Serif for editorial accents only

## Build Order (do not deviate)
1. Design tokens (tailwind.config.mjs) — already done
2. Global CSS (fonts, base reset, CSS custom properties, grain texture utility)
3. Layout shell (Layout.astro)
4. Navigation component
5. Hero section
6. Problem section
7. Services section
8. Process section
9. About section
10. Final CTA section
11. Footer
12. Scroll-triggered animations (add AFTER all content is correct)
13. Metadata, OG tags, favicon
14. Performance audit (Lighthouse target: 95+)

## Before Writing Code
1. State what section you're building and which copy from PROJECT.md you're implementing
2. If a design decision isn't in DESIGN.md, ask — don't invent
3. If spacing/sizing deviates from the 4px grid, flag it
4. Use copy from PROJECT.md verbatim — do not paraphrase or "improve" it

## What NOT to Do
- Don't add sections or features not in PROJECT.md
- Don't use lorem ipsum — all copy is in PROJECT.md
- Don't pick fonts not in DESIGN.md
- Don't add scroll animations until content structure is finalized
- Don't assume what "looks good" — follow DESIGN.md exactly
- Don't add features "while you're at it" — scope is fixed

## Deployment
- Deploy to Vercel
- Domain: signalworks.live
- Run `npm run build` and verify zero errors before deploying
- Check Core Web Vitals: LCP < 2.5s, CLS < 0.1, INP < 200ms
