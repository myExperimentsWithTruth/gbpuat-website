# Page migration plan

## Inventory of internal HTML pages on gbpuat.ac.in

Grouped by shape so a **small number of templates** can cover a large number of pages.

### 1. Institutional article pages (14 pages)

Single-topic pages, mostly text with a portrait or hero photograph.

- `about/index.html` — About the university
- `administratives/setup/index.html` — Administrative setup
- `administratives/vc/index.html` — Vice-Chancellor's message
- `administratives/chancellor/msg.html` — Chancellor's message
- `calendar.html` — Academic calendar
- `rank.html` — Ranking
- `awards/index.html` — Awards
- `NIRF/index.html` — NIRF disclosure
- `pantnagar_museum/index.html` — Pantnagar Museum
- `research/index.html` — Research overview
- `patents/index.html` — Patents
- `mela/index.html` — Kisan Mela
- `events.html` — Events
- `news/index.html` — News archive

### 2. Tabbed directorate/programme pages (5 URL groups, ~40 tabs)

Same URL with a `?id=N` query for each tab. Extension_Edu alone has 9 tabs.

- `directorates/directorate_experiment/index.html?id=1..9`
- `directorates/Extension_Edu/index.html?id=1..9`
- `academics/academics.html?id=0,4,5,6`
- `student_life/student_life.html?id=0..9`
- `directorates/publication/index.html`
- `directorates/farm/index.html`
- `directorates/placement_notice/index.html`

### 3. College home pages (7 pages)

Each college has an index + research + typically internal navigation.

- `colleges/COA/index.html` — Agriculture
- `colleges/COV/index.html` — Veterinary
- `colleges/COT/index.html` — Technology
- `colleges/CBSH/index.html` — Basic Sciences & Humanities
- `colleges/COH/index.html` — Community Science
- `colleges/COF/index.html` — Fisheries
- `colleges/CABM/index.html` — Agribusiness Management

### 4. Facility pages (9 pages)

Short pages: photo + purpose + contact.

- `facility/library/index.html`
- `facility/hospital/index.html`
- `facility/CCF/index.html`
- `facility/estate_office/index.html`
- `facility/store_office/index.html`
- `facility/garden/index.html`
- `facility/security_office/index.html`
- `guest_house/index.html`
- `directorates/farm/index.html`

### 5. Pages with forms — **RISK**

These need special handling in any migration because they involve authentication, submissions, or personal data.

| Page | Risk type | Reason |
|---|---|---|
| B.Tech_Reporting/reporting.html | **Data entry** | Student submits reporting details |
| Admissions (external `gbpuat.org.in`) | **Auth + payment + data entry** | Full admission cycle |
| AMS (external `gbpuat.auams.in`) | **Auth** | Student / faculty portal |
| Anti-Ragging page | **Complaint submission** | Sensitive PII, legal implications |
| SHe-Box (external) | **Complaint submission** | Sensitive PII, statutory |
| Grievance redressal | **Complaint submission** | PII, university record |
| BIS internship application | **Application form** | PII, transcripts |
| Study in India (external) | **Registration** | International student PII |
| Web Mail | **Auth** | Credentials |

**Rule of thumb.** All form pages remain **link-out** in this demonstration — we should not attempt to re-implement authentication, submission or storage. The right answer for any of these in a real migration is to keep the existing portal running behind the new frontend, or replace with a dedicated identity + form platform.

---

## Template strategy

Four templates cover ~90% of the 74 pages we would need to migrate:

| Template | Covers | Example |
|---|---|---|
| **article** | Single-topic institutional pages | `pages/vc-message.html` |
| **tabbed** | Multi-tab directorate & academic pages | `pages/directorate-experiment.html` |
| **college** | The seven college homes | `pages/college-agriculture.html` |
| **facility** | Short facility pages with photo + text | `pages/library.html` |

A fifth **form-risk** template is used only for pages we deliberately do not migrate; it lands the visitor on a page that names the risk and directs them to the live portal.

## Pages migrated in this demonstration

To showcase **capability, not completeness**, six pages representing each template have been migrated. The remaining 68 pages follow the same patterns and can be produced by a content team using the templates below.

- **article**: `pages/vc-message.html`, `pages/chancellor-message.html`
- **tabbed**: `pages/experiment-station.html`
- **college**: `pages/college-agriculture.html`
- **facility**: `pages/library.html`
- **form-risk**: `pages/anti-ragging.html` (a redirect-with-context page)

Every migrated page:

- Reuses the shared brand tokens and typography from `style.css`.
- Carries the same masthead, ticker-strip principle, and footer as the homepage.
- Links back to the homepage and to related pages using absolute paths.
- Preserves the university's textual content verbatim (institutional facts are the university's authoritative record, not this demonstration's).
- Sets its `<title>` and meta description for indexing.

## Order of migration when a real project runs

1. **Institutional identity** — About, VC, Chancellor, Setup (4 pages, 2 days)
2. **Colleges** — 7 college homes (2 days each = 2 weeks)
3. **Directorates** — Experiment Station and Extension Education, tabbed (1 week)
4. **Facilities** — 9 pages, template-driven (3 days)
5. **Academics** — tabbed pages, integrated with a CMS (1 week)
6. **Student Life** — tabbed page (2 days)
7. **News archive + Events** — needs a real CMS-backed listing (separate scope)
8. **Forms** — left as link-out to the existing portals; a dedicated identity + forms workstream if the university wants to unify them (separate scope, months)

Total for the pure content pages (excluding forms and CMS): ~5–6 weeks of one designer + one engineer.
