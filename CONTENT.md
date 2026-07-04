# Content editor's guide

This page has clearly marked **injection slots** where new items can be added, removed, or updated without touching the visual layout. Each slot is:

- Marked in `index.html` with an HTML comment beginning `<!-- SLOT: name — description -->`.
- Designed to accept a variable number of items — grids reflow, lists wrap.
- Independent — editing one slot does not affect any other.

The eleven editable slots on the homepage are listed below, in reading order down the page.

## 1. Hero carousel

`<!-- SLOT: (carousel slides) -->` inside `<div class="car-track">`

**What it is.** The full-width photograph rotator at the top.

**Recommended count.** 4–6 slides.

**Add a slide.** Add a new `<figure class="car-slide">` inside `.car-track`:

```html
<figure class="car-slide" data-focus="top">
  <img src="images/<your-photo>.jpg" alt="..." />
  <figcaption>
    <span class="car-kicker">Kicker (2–3 words)</span>
    <span class="car-title">One-line editorial headline.</span>
  </figcaption>
</figure>
```

`data-focus` is optional — use `top`, `bottom`, `left`, or `right` if the subject sits off-centre in the photograph.

## 2. Campus mosaic

`<!-- SLOT: campus mosaic -->`

Four captioned photographs immediately after the hero. Add or remove `<li><figure class="mo-card">...</figure></li>` blocks. The grid wraps automatically.

## 3. Live notices strip

`<!-- SLOT: notices -->`

The dark maroon band with tagged notices. Recommended 3–6 items. Each item is one `<li>` with a tag (one word), a short title, and a link:

```html
<li><a href="..."><span class="nl-tag">Tag</span><span class="nl-t">Title here</span></a></li>
```

## 4. Leadership

`<!-- SLOT: leadership -->`

Four portrait cards: Chancellor, Chief Minister, Minister, Vice-Chancellor. To change a portrait, update the image path. To change a name/role, edit the text inside `<figcaption>`. The card grid reflows for 2, 3, 4 or 5 items.

## 5. Quick access — primary

`<!-- SLOT: quick-primary -->`

The three headline actions (Apply, Check a result, Report ragging). Add a fourth if a new headline action arrives — the grid uses `auto-fit`, so it will adapt gracefully.

## 6. Quick access — secondary

`<!-- SLOT: quick-secondary -->`

The dot-separated line of quieter links below the primary cards. Any number of items. They wrap to multiple lines if needed.

## 7. News

`<!-- SLOT: news -->`

One **lead story** on the left (big photograph + dek + headline) and a **rail** of four support headlines on the right. To promote a story to the lead position, move it into the `<article class="news-lead">` block. To update the rail, edit `<li>` items inside `<aside class="news-rail">`.

## 8. Colleges directory

`<!-- SLOT: colleges -->`

One `<li>` per college. Each has a two-digit number, a title and a one-line description. Any number of colleges — the list just gets longer.

## 9. Pantnagar signatures

`<!-- SLOT: Pantnagar signatures -->`

The three things unique to Pantnagar (Museum, Journal, "This Week" newsletter). Add a fourth signature card if a new one emerges — the grid auto-fits.

## 10. Placements marquee

`<!-- SLOT: placements marquee -->`

A single flowing line of recruiter names in serif. Add or remove `<span>` entries. Keep the `<span>&mdash;</span>` separators between entries.

## 11. Facilities

Two slots:

- `<!-- SLOT: facilities-hero -->` — three headline facilities with photographs. Add a fourth and the grid adapts.
- `<!-- SLOT: facilities-more -->` — quiet list of remaining facilities as a dot-separated line.

## 12. Circulars

`<!-- SLOT: circulars -->`

Standing notices and statutory committees. Each `<li>` has a `<time>` (a date or the word "Standing") and a link. Any number of items.

---

## Adding a real CMS on top of this

Every slot is a plain HTML block that a headless CMS can render into. The three simplest paths for the university's team:

1. **Decap CMS** — free, runs on GitHub, gives editors a visual form. No server needed. Add a `admin/config.yml` mapping each slot to a form; editors log in with a GitHub account.
2. **WordPress (headless)** — if the team already runs WordPress, expose collections via the REST API and render into these slots at build time.
3. **Sanity or Contentful** — a hosted headless CMS with a polished editor UI. More setup, most polished result.

For the university's team, the pragmatic first step is **Decap CMS** — because the repository is already on GitHub and no additional infrastructure is required. This site is designed so that switching from static HTML to CMS-rendered content is a mechanical change, not a redesign.

## Images

All photographs live under `/images/`. To replace a photograph, drop a new file into that folder and update the `src` in the corresponding slot. There is no image build pipeline yet; if the university's team wants automatic optimisation later, adding `sharp` or a Netlify/Cloudflare image CDN is a two-hour change.
