# Acceptance criteria

Machine-checkable where possible. Human-check items marked *H*.

## Global

- [ ] Every anchor with `data-link` on the homepage has a defined LINK_MAP entry.
- [ ] Every LINK_MAP entry resolves — either to a file in `pages/` OR to a live URL that returns 2xx / 3xx in a real browser.
- [ ] Zero anchors on the homepage have `href="#"` at page-load time (except the language toggle, the in-page anchors, and the notice-more link).
- [ ] Zero broken `<img src>` on any page — either the file exists in `/images/` or the URL is a live gbpuat.ac.in URL that resolves.
- [ ] No file in `pages/` contains the phrase "structural placeholder" (indicates the previous fake-content passes have been cleaned up).
- [ ] No file in `pages/` contains fabricated proper nouns. *H*
- [ ] Every migrated page has: masthead, breadcrumb, hero, prose, sidebar, migrated-note footer.

## Homepage

- [ ] Every visible section on our homepage traces to (a) live gbpuat.ac.in, (b) a Wikipedia / gov.in / Wikimedia public source, or (c) a documented founding-era fact. *H*
- [ ] Every missing-live section listed in HOMEPAGE-DELTA is either represented or explicitly decided-cut with a one-line reason.
- [ ] Every MY-WRITING element listed in HOMEPAGE-DELTA is either (a) removed, (b) replaced with a verifiable source, or (c) explicitly kept and moved to the "Content marked as demo scaffolding" list with a justification.
- [ ] Carousel has all 12 live-active slides (already verified).
- [ ] Filmstrip is functional (12 thumbs, click-to-jump). *H*

## Inner pages — kept

For each page kept in `pages/`:
- [ ] Page returns HTTP 200 locally.
- [ ] Every proper noun on the page appears on the live source URL. *H*
- [ ] Every h1/h2/h3 heading is either a live-source heading or a standard editorial heading (About / Departments / Programmes / etc.).
- [ ] No paragraph on the page exceeds 500 words (indicates single-blob extraction that must be split).
- [ ] Sidebar boxes contain either a direct extract from live or standard navigation (never fabricated data).

## Inner pages — linked out

For each internal live URL that we do NOT migrate:
- [ ] The homepage anchor's `data-link` resolves to the live gbpuat.ac.in URL, not to a local file.
- [ ] The URL returns 2xx / 3xx in a real browser. *H*

## Form pages (has-persistent-form = yes)

- [ ] We never re-implement the form.
- [ ] Every form page linked from the homepage carries a form-risk marker (visible pill or banner).
- [ ] Clicking the anchor opens the live external portal.

## Independent audit

- [ ] An adversarial subagent has been invoked with this ACCEPTANCE.md + the pair (our URL, live URL) for at least the ~15 flagship pages, and has returned pass on each.

## Ship gate

- [ ] All checkboxes above are ticked.
- [ ] All commits pushed to GitHub main.
- [ ] Live GitHub Pages URL walked once on desktop and once on mobile — no visible friction.
