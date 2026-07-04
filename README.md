# GBPUA&T Pantnagar — website demonstration

A modern static redesign of the Govind Ballabh Pant University of Agriculture & Technology homepage, built as a **personal alumnus contribution** by an alumnus. It exists to show the university what a contemporary, heritage-appropriate site could look like — nothing more.

The university remains free to adopt any technology stack it prefers. This is a **possibility**, not a specification.

## What this is

- A single homepage (`index.html`) with the same content areas as the current gbpuat.ac.in home page.
- Plain HTML + CSS + a small `script.js`. No build step, no dependencies, no server.
- Editorial-heritage design language — institutional maroon, warm off-white paper, wheat-gold accents, serif display with characterful sans body, and Devanagari at typographic parity via Noto Serif/Sans Devanagari.
- Bilingual toggle (EN / हिन्दी), accessible text-size controls, keyboard-friendly navigation, respects `prefers-reduced-motion`.
- Mobile-first, fully responsive.

## How to view

Open `index.html` directly in any modern browser. That is the entire runtime.

For a quick local server (optional):

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deployment

Any static host works — GitHub Pages, Cloudflare Pages, Netlify, or the university's existing web server. There is no back-end to configure.

## Design decisions worth calling out

- **Not a generic AI-template look.** No Inter/Roboto/Arial, no purple-indigo gradients, no cookie-cutter SaaS hero. The type pairing is Fraunces (display serif) + Instrument Sans (body) with Noto Serif/Sans Devanagari for Hindi. Palette is warm-earth: maroon, rust, wheat-gold, paper.
- **Editorial spacing.** Generous whitespace, strong hierarchy, section rules and kickers — closer to a museum publication than a corporate site.
- **Hindi at parity.** Devanagari headings share weight and prominence with the Latin script rather than being an afterthought.
- **All content is preserved.** Every section from the current homepage — utility bar, ticker, colleges, news, research, extension, galleries, footer — is present. Only presentation, structure and technology are changed.

## What is not here (yet)

- Inner-page templates (college pages, article pages, department pages).
- Search — a static-site option like Pagefind can be added later.
- Real content pulled from gbpuat.ac.in. Placeholder text is used where the live site would be quoted verbatim; figures must be verified against university records before any use beyond demonstration.

## Files

```
index.html           — homepage markup
style.css            — design tokens and full stylesheet
script.js            — text-size, language toggle, back-to-top
logo_small.png       — official crest (optimised)
logo_src.png         — official crest (full resolution)
CLAUDE.md            — guidance for future AI-assisted edits
CLAUDE-CODE-BUILD-BRIEF.md — the original build brief
```

## Notes for the university

If any element of this demonstration is useful, the team is welcome to adapt it in whichever stack fits internal practice — WordPress, Drupal, a custom framework, or the current infrastructure. The intent is to make the direction visible, not to prescribe an implementation.
