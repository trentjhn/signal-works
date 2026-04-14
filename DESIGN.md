# Design System: SignalWorks

## Overview
SignalWorks presents as a boutique strategy firm that happens to be built on AI — editorial warmth and precision over tech startup energy. Every decision prioritizes the feeling of a hand-crafted premium consultancy: the kind of site where the negative space does as much work as the content.

---

## Colors

- **Background**: `#FAFAF8` — Default page canvas. All full-width sections. Never pure white.
- **Surface**: `#F0EAD8` — Cards, callout sections, testimonial blocks, light alternating rows. Warm parchment feel.
- **Surface elevated**: `#E8DFC8` — Subtle distinction within surface-level elements. Use sparingly — secondary callouts, hover states on surface items.
- **Border**: `#DDD5C0` — All dividers, input strokes, card outlines. Warm not gray.
- **Border subtle**: `#EDE6D4` — Section separators, internal component dividers. Barely-there lines.
- **Text primary**: `#1C1B19` — Body copy, headlines, labels. Near-black, not pure black.
- **Text secondary**: `#6B6355` — Subheadings, captions, metadata, supporting copy. Warm taupe, not cool gray.
- **Text tertiary**: `#9C9182` — Footnotes, timestamps, placeholder text.
- **Accent**: `#1B2B4B` — Primary CTAs, active nav states, icon fills, emphasis underlines. Deep navy. Max 10% visual weight across any given viewport.
- **Accent hover**: `#243A60` — Slightly lighter navy for interactive hover feedback on accent elements.
- **Accent light**: `#E8EDF5` — Tinted background behind accent-colored UI regions. Use for stat callout backgrounds, selected states, info banners.
- **Accent light border**: `#C8D4E8` — Border treatment paired with accent-light backgrounds.
- **Error**: `#B04040` — Form validation, error states only.
- **Success**: `#3A6B4A` — Confirmation states only.

---

## Typography

All fonts load from Google Fonts or Fontshare. Load order: Cabinet Grotesk, Plus Jakarta Sans, Instrument Serif.

- **Display**: Cabinet Grotesk, weights 700 + 800, size: clamp(64px, 8vw, 120px), tracking: `-0.04em`, line-height: `0.95`. Usage: hero headline, single above-the-fold statement, section anchors with maximum visual weight. Never more than 2 lines at this scale.

- **Headline**: Cabinet Grotesk, weight 600, size: clamp(32px, 4vw, 52px), tracking: `-0.03em`, line-height: `1.1`. Usage: section headers, service names, case study titles. Use regularly throughout the page.

- **Subheading**: Cabinet Grotesk, weight 500, size: clamp(20px, 2.5vw, 28px), tracking: `-0.02em`, line-height: `1.25`. Usage: supporting context beneath headlines, second-level hierarchy within sections.

- **Body**: Plus Jakarta Sans, weight 400, size: `clamp(16px, 1.2vw, 18px)`, line-height: `1.65`, max-width: `65ch`. Usage: all paragraph copy. Weight 500 for inline emphasis — never bold entire paragraphs.

- **Body large**: Plus Jakarta Sans, weight 400, size: `clamp(18px, 1.6vw, 22px)`, line-height: `1.6`, max-width: `60ch`. Usage: lead paragraph beneath section headlines, intro descriptions. Not for extended reading blocks.

- **Label**: Plus Jakarta Sans, weight 600, size: `13px`, tracking: `0.08em`, text-transform: uppercase, line-height: `1`. Usage: category tags, nav links, button text, form labels, eyebrow labels above headlines.

- **Label small**: Plus Jakarta Sans, weight 500, size: `11px`, tracking: `0.10em`, text-transform: uppercase, line-height: `1`. Usage: metadata, timestamps, footer legal copy.

- **Editorial accent**: Instrument Serif, weight 400 (italic variant available), size: clamp(22px, 2.8vw, 36px), tracking: `0`, line-height: `1.4`. Usage: pull quotes, key statistics with surrounding context, section intro statements that need warmth. Never for body copy. Pairs with display text to break visual monotony.

---

## Spacing

Base unit: `4px`

Scale: `4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 192px`

- **Section vertical padding**: `96px` top/bottom on desktop (`padding: 96px 0`), `64px` on mobile
- **Section horizontal container**: max-width `1200px`, horizontal padding `32px` desktop / `20px` mobile, `margin: 0 auto`
- **Column gutter**: `32px` standard, `48px` for wider editorial layouts
- **Component internal padding**: `32px` for cards and callout blocks, `24px` for compact components
- **Inline spacing between icon and label**: `8px`
- **Stack spacing within a text block** (headline → subhead → body → CTA): `8px, 16px, 32px` following the natural step-down

---

## Border Radius

**System: Soft-sharp.** Slightly rounded for warmth, never pill-shaped or fully square.

- **Buttons**: `6px`
- **Inputs**: `6px`
- **Cards**: `8px`
- **Image containers**: `8px`
- **Tags / chips**: `4px`
- **Modals / drawers**: `12px` (top corners only if bottom-anchored)
- **Rule**: Do not mix radius values within a single component. A card's internal image uses the card's own radius minus 1px.

---

## Shadows / Depth

Depth is achieved through **layering warm tones**, not heavy box shadows. The shadow system is minimal and warm-tinted.

- **Elevation 1** (default card resting state): `0 1px 3px rgba(28, 27, 25, 0.06), 0 1px 2px rgba(28, 27, 25, 0.04)`
- **Elevation 2** (hovered card, focused input, floating nav): `0 4px 16px rgba(28, 27, 25, 0.08), 0 2px 6px rgba(28, 27, 25, 0.05)`
- **Elevation 3** (modals, dropdowns): `0 12px 40px rgba(28, 27, 25, 0.12), 0 4px 12px rgba(28, 27, 25, 0.07)`
- **Never use**: blue-tinted shadows, colored glow shadows, inset shadows for decoration, stacking more than 2 shadow layers on one element
- **Borders over shadows**: When in doubt, use a `1px solid #DDD5C0` border instead of elevation. Most surface-level components need only a border.

---

## Motion

All animation values are intentional. Do not add animation unless it serves the user's comprehension.

- **Interaction feedback** (hover, focus, active): `150ms ease-out`
- **Scroll-triggered reveals** (fade + translate into view): `600ms cubic-bezier(0.16, 1, 0.3, 1)`, stagger sibling elements by `80ms`
- **Page load hero entrance**: `800ms cubic-bezier(0.16, 1, 0.3, 1)`, delay `100ms` after DOM ready
- **Navigation state transitions** (active link, mobile menu): `200ms ease-out`
- **Accordion / expand**: `250ms ease-in-out` on height, `200ms` on opacity
- **Animate**: `transform` and `opacity` ONLY. Never animate `width`, `height`, `margin`, `padding`, `top`, `left`.
- **Enter state**: elements start at `opacity: 0; transform: translateY(20px)`. End at `opacity: 1; transform: translateY(0)`.
- **Respect prefers-reduced-motion**: Wrap all scroll-triggered and page-load animations in `@media (prefers-reduced-motion: no-preference)`. Interaction feedback (hover) is exempt — it is functional, not decorative.

---

## Components

### Button (primary)
- Height: `48px` desktop, `44px` mobile
- Padding: `0 28px`
- Border radius: `6px`
- Background: `#1B2B4B`
- Text: `#FAFAF8`, Plus Jakarta Sans, weight 600, 13px, tracking `0.08em`, uppercase
- Border: none
- Hover: background `#243A60`, transition `150ms ease-out`
- Active: background `#142038`
- Focus visible: `outline: 2px solid #1B2B4B; outline-offset: 3px`
- Disabled: opacity `0.45`, cursor `not-allowed`

### Button (ghost / secondary)
- Height: `48px` desktop, `44px` mobile
- Padding: `0 28px`
- Border radius: `6px`
- Background: transparent
- Text: `#1B2B4B`, Plus Jakarta Sans, weight 600, 13px, tracking `0.08em`, uppercase
- Border: `1.5px solid #1B2B4B`
- Hover: background `#E8EDF5`, border-color `#243A60`, transition `150ms ease-out`
- Active: background `#DDE4F0`
- Focus visible: `outline: 2px solid #1B2B4B; outline-offset: 3px`

### Button (text link)
- No border, no background
- Text: `#1B2B4B`, Plus Jakarta Sans, weight 600, inherits size from context
- Underline: `text-decoration: underline; text-underline-offset: 3px; text-decoration-color: rgba(27,43,75,0.35)`
- Hover: `text-decoration-color: #1B2B4B`, transition `150ms ease-out`

### Input
- Height: `48px`
- Padding: `0 16px`
- Border: `1.5px solid #DDD5C0`
- Border radius: `6px`
- Background: `#FAFAF8`
- Text: `#1C1B19`, Plus Jakarta Sans, weight 400, 16px
- Placeholder text: `#9C9182`
- Focus state: border `1.5px solid #1B2B4B`, outline: none, box-shadow `0 0 0 3px rgba(27,43,75,0.12)`
- Error state: border `1.5px solid #B04040`, box-shadow `0 0 0 3px rgba(176,64,64,0.10)`
- Textarea: same styles, min-height `120px`, padding `12px 16px`, resize vertical only

### Navigation
- Position: `sticky`, top `0`, z-index `100`
- Background: `#FAFAF8` at `opacity: 1`. On scroll past `80px`: add `border-bottom: 1px solid #DDD5C0` and `backdrop-filter: blur(0)` (no blur — no glassmorphism)
- Height: `68px` desktop, `60px` mobile
- Logo: Cabinet Grotesk, weight 700, 20px, `#1C1B19`
- Nav links: Plus Jakarta Sans, weight 600, 13px, tracking `0.08em`, uppercase, `#6B6355`
- Nav link hover: `#1C1B19`, transition `150ms ease-out`
- Active/current: `#1B2B4B`
- CTA button: Button (primary) at reduced height `40px` with same spec
- Mobile: hamburger icon opens full-screen overlay with `background: #FAFAF8`, large stacked nav links in Cabinet Grotesk weight 700 at `clamp(32px, 6vw, 48px)`

### Card
**Use cards only when content is genuinely distinct and needs visual isolation** — case studies, individual team members, testimonials. Do not use cards to lay out features or benefits (use editorial rows instead).

- Background: `#F0EAD8`
- Border: `1px solid #DDD5C0`
- Border radius: `8px`
- Padding: `32px`
- Shadow: Elevation 1 at rest, Elevation 2 on hover
- Hover transition: `150ms ease-out`
- Internal hierarchy: eyebrow label (Label style, `#6B6355`) → headline (Subheading style) → body (Body style) → optional CTA link
- Rule: No card nesting. No card inside a card. If a card contains an image, the image sits at the top with radius `7px` (card radius minus 1px) and `margin: -32px -32px 24px -32px` to bleed to edges.

---

## Grain Texture

Applied as a pseudo-element overlay to add tactile depth to flat areas — specifically the hero section, any `#F0EAD8` full-width sections, and the footer.

```
/* Apply to parent element */
.grain::after {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
  opacity: 0.025;
  pointer-events: none;
  mix-blend-mode: multiply;
  border-radius: inherit;
  z-index: 1;
}
```

- Opacity on `#FAFAF8` background: `0.025`
- Opacity on `#F0EAD8` surface: `0.020` (surface already has warmth — less grain needed)
- Mix blend mode: `multiply`
- Never apply to interactive elements (buttons, inputs, links)
- Always `pointer-events: none` — grain must never capture clicks

---

## Do's

1. **Use negative space deliberately.** Let headlines breathe. A section with one headline, two sentences, and a CTA is a complete section. Resist filling space.
2. **Break the grid asymmetrically on desktop.** Editorial rows work best at 55/45 or 60/40 splits, not 50/50. Reserve 50/50 for intentional symmetry moments.
3. **Use Instrument Serif to signal depth.** Drop a key metric or pull quote in Instrument Serif italic to break a block of Plus Jakarta Sans. The contrast is the design.
4. **Let the accent color earn its presence.** Navy `#1B2B4B` should appear on the one CTA button in the viewport and one or two emphasis moments. If it appears everywhere, it means nothing.
5. **Alternate section backgrounds.** `#FAFAF8` → `#F0EAD8` → `#FAFAF8` keeps the page moving without adding color complexity. Never use more than these two backgrounds on the main page.
6. **Make type do the heavy lifting.** A Cabinet Grotesk headline at 96px IS the visual. You rarely need an image to compete with it.
7. **Use thin horizontal rules (`1px solid #DDD5C0`) as breathing separators.** Not decorative dividers — quiet punctuation between ideas.
8. **Keep motion invisible to the conscious mind.** If someone notices the animation, it's too much. Reveals should feel like the content was already there.

---

## Don'ts

- **Never use Inter, Roboto, Open Sans, Lato, or Montserrat.** These are immediate signals of template work. Cabinet Grotesk and Plus Jakarta Sans are the system — do not substitute.
- **No nested cards.** A card cannot contain a card. A card cannot sit inside a card-like container. Elevation 1 inside Elevation 1 collapses meaning.
- **No gradient text.** No `background-clip: text` gradients. No shimmer effects on type. Headlines are rendered in solid color.
- **No purple-to-blue or cyan-to-blue gradients anywhere on the page.** Not in backgrounds, not in buttons, not in illustrations.
- **No glassmorphism.** No `backdrop-filter: blur()` on content surfaces. The nav does not blur. Cards do not blur. This is a clean paper site, not a macOS UI.
- **Accent color at max 10% visual weight.** Count the accent-colored pixels in a viewport. If navy touches more than 10% of the screen, something is wrong.
- **No pure black (#000000) or pure white (#FFFFFF) for backgrounds or large text blocks.** `#1C1B19` for dark, `#FAFAF8` for light. These are the poles.
- **No three-card feature grid as the default layout pattern.** Features, services, and differentiators are editorial rows, not card grids. Reserve cards for distinct content units (case studies, testimonials, team bios).
- **No stock photo aesthetics.** Avoid directing toward generic laptop/office/handshake imagery. If photography is used, it should be specific to Trenton and Jahleel or genuine client work. Abstract or typographic visuals are preferred over generic business photography.
- **No generic SaaS micro-copy.** Words like "Supercharge," "Seamless," "Leverage," and "Unlock" are banned from this site. Copy should read like two smart people wrote it, not a marketing platform.

---

## AI Fingerprint Checklist (run before shipping any section)

Run this before finalizing any section, component, or copy block.

### Typography Fingerprints
- [ ] No Inter, Roboto, Open Sans, Lato, or Montserrat anywhere in the stack
- [ ] Headlines use tight tracking (`-0.03em` to `-0.05em`) — not default 0
- [ ] No gradient text (`background-clip: text` pattern)
- [ ] Display type is at least `64px` on desktop — not a timid `40px` that calls itself a hero
- [ ] Instrument Serif appears in fewer places than Cabinet Grotesk (it's an accent, not a workhorse)

### Color Fingerprints
- [ ] No `#6C63FF`, `#7C3AED`, `#3B82F6`, or any purple-to-blue gradient
- [ ] No cyan-on-dark accent scheme
- [ ] Background is `#FAFAF8`, not `#FFFFFF`
- [ ] Navy accent `#1B2B4B` does not appear more than 3–4 times in a single viewport
- [ ] No `rgba(255,255,255,0.1)` overlay patterns (glassmorphism signal)

### Layout Fingerprints
- [ ] Hero section is not: headline + subhead + two buttons + hero image, all centered
- [ ] Feature section is not: three equal-width cards with icon, title, body
- [ ] At least one section uses editorial asymmetry (not 50/50 or centered)
- [ ] Negative space is intentional — no section feels "padded to fill"
- [ ] No `grid-template-columns: repeat(3, 1fr)` as the default feature layout

### Motion Fingerprints
- [ ] No `transform: scale(1.05)` hover on every card (overused)
- [ ] No infinite looping animations on the hero
- [ ] Scroll reveals use `translateY(20px)` only — not `translateY(40px)` or more (overblown)
- [ ] `prefers-reduced-motion` is respected on all scroll-triggered and load animations
- [ ] No animated gradient backgrounds

### Copy Fingerprints
- [ ] No "Supercharge," "Seamless," "Leverage," "Unlock," "Transform," or "Empower"
- [ ] No "AI-powered" used more than once on the page (or zero times)
- [ ] Claims reference specific results (e.g. "140M users," "52% lift") not vague scale descriptors
- [ ] CTA copy is specific ("See how we work" not "Get started")
- [ ] No rhetorical questions as section openers ("What if you could...?")

### Component Fingerprints
- [ ] No card nested inside a card
- [ ] No glassmorphic surfaces
- [ ] Primary button does not have a gradient background
- [ ] Navigation does not blur on scroll
- [ ] No floating chat widget (not appropriate for this brand tier)
