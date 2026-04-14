# AGENTS.md — SignalWorks Website

## Mission
Build a single-page marketing website for SignalWorks that looks like it cost $50,000 to design. Every section passes the AI fingerprint checklist before the next section begins.

## Agent Ordering

This project uses the evaluator-optimizer loop. No agent advances past their section until the evaluator clears it.

### Sequential Protocol

**Phase 1: Foundation (completed pre-build)**
- design-system-architect → produced DESIGN.md ✓
- content-strategist → produced all copy in PROJECT.md ✓
- planner → implementation.md ✓

**Phase 2: Build (one section at a time)**
For each section below, the builder implements, then the evaluator runs the fingerprint checklist:

| Section | Build | Evaluate | Status |
|---------|-------|----------|--------|
| Global CSS + fonts | main session | evaluator | pending |
| Layout shell | main session | evaluator | pending |
| Navigation | main session | evaluator | pending |
| Hero | main session | evaluator | pending |
| Problem | main session | evaluator | pending |
| Services | main session | evaluator | pending |
| Process | main session | evaluator | pending |
| About | main session | evaluator | pending |
| Final CTA | main session | evaluator | pending |
| Footer | main session | evaluator | pending |
| Scroll animations | main session | evaluator | pending |
| Metadata + SEO | main session | evaluator | pending |

**Phase 3: Final gates**
- Full-page fingerprint checklist sweep
- accessibility-reviewer → WCAG audit
- performance-optimizer → Lighthouse 95+
- Deploy to Vercel

## Evaluator Instructions

When acting as evaluator for a section:
1. Re-read DESIGN.md Do's and Don'ts
2. Run the complete AI Fingerprint Checklist (DESIGN.md bottom section)
3. Check copy matches PROJECT.md verbatim
4. Report: PASS or NEEDS_WORK with specific line-level issues
5. Do NOT pass a section with open issues

## Key Context for Any Agent Entering This Project

- This is a warm cream / deep navy design — not dark, not SaaS blue
- Fonts: Cabinet Grotesk (headlines), Plus Jakarta Sans (body), Instrument Serif (editorial accent only)
- Single page, single CTA: Book the $500 AI Opportunity Audit
- Copy is final — it lives in PROJECT.md. Do not rewrite it.
- The fingerprint checklist has 25 items across 5 categories. All 25 must pass.
