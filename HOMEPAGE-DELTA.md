# Homepage delta — live gbpuat.ac.in vs our redesign

Source of truth: live gbpuat.ac.in homepage (both the raw HTML and the JS-loaded nav/footer).


## 1. Sections on the live homepage — carried by us?

| # | Live section | Our state |
|---|---|---|

| 1 | **slider** — JSSOR carousel with 12+ slide images and captions | yes — 12 slides + filmstrip in our redesign, matches live active set |
| 2 | **marquee-top** — Announcement/news marquee at top (scrolling text with dated news items) | partial — replaced with static notices strip; the marquee content itself is available on live |
| 3 | **marquee-bottom** — Scrolling news band near bottom of live homepage — dated news headlines | MISSING — user flagged this |
| 4 | **modal-admission** — Modal that fires on page load (admission / NAAS ASC 2025 notice) | not carried — decision needed; modals in demo can be intrusive |
| 5 | **vc-and-chancellor-photo** — Leadership photo block (Chancellor, CM, VC) | yes — leadership grid on our homepage |
| 6 | **kisan-mela-strip** — Kisan Mela announcement / rotating banner | partial — Kisan Mela event card exists in Extension section |
| 7 | **directorate-experiment** — Directorate of Experiment Station links block (About, Highlights, Achievements, New Tech, Patents, Videos, Call for Projects) | partial — 6 of these covered in research section |
| 8 | **directorate-extension** — Directorate of Extension Education links block (About, Structure, ATIC, KVK, T&V, Crop Advisory) | partial — covered in Extension section, 5 of 6 sub-items |
| 9 | **events-forthcoming** — Events / Forthcoming Events tab | MISSING |
| 10 | **news-widget** — News: दिनांक / date-wise headlines with Read More PDFs (recent items) | partial — News section exists, uses editorial hero + 4 rail items rather than a full dated list |
| 11 | **academics-block** — Admission, AMS, Academic Calendar, Scholarships, Academic Programme, Anti-Ragging | yes — 3 primary + secondary link row in Quick Access |
| 12 | **placement-notices** — Recent placement notice PDFs (AIS, Shree Shyam, ScaNxt, Mahindra) | partial — recruiter names in marquee; individual notice PDFs are only on live |
| 13 | **student-life** — Student Life tabbed links (Hostels, Sports, Societies, Achievements, NSS, NCC, Spic Macay, Liberal Education, Cultural) | yes — Student Life grid with 6 items; missing Liberal Education and Extra Curricular subcategories |
| 14 | **facilities-band** — Facility icons/photo row (Library, Hospital, CCF, Estate, Store, Garden, Security, Guest House, Farm) | yes — Facilities section carries 6 hero + 6 compact link list = all 9 facilities named on live but simplified |
| 15 | **important-links** — Important Links section with logos row (ICAR, NIRF, NAAC, patents, journal, mela, etc.) | partial — Accreditation strip carries NAAC/NIRF/ICAR/Patents; some other logos on live are omitted |
| 16 | **gallery-image** — Kisan Mela / Ag Science Congress gallery link tile | yes — Galleries section carries both |
| 17 | **gallery-video** — Video gallery tile | yes |
| 18 | **signature-museum** — Pantnagar Museum tile | yes — Signatures section |
| 19 | **signature-journal** — Pantnagar Journal tile | yes — Signatures section |
| 20 | **signature-this-week** — Pantnagar This Week newsletter PDF | yes — Signatures section |
| 21 | **external-schemes** — myScheme + Meri Yojana + SHe-Box tiles (Government scheme banners) | partial — SHe-Box in Quick Access secondary; myScheme + Meri Yojana were in ticker earlier, dropped after ticker rewrite |
| 22 | **study-in-india** — Study in India registration link | MISSING from homepage |
| 23 | **circulars-and-notices** — Circulars section with dated items (staff sports form, SH committee) | yes — Circulars section |
| 24 | **footer-contact** — Contact block (address, phone, registrar email) | yes — footer contact |
| 25 | **footer-important-links** — Footer link groups: University Song, Google Map, Download Forms, IPMC, e-Samadhan, Alumni, GIAN, RTI, Circulars, Complaints, Feedback, Legal, BIS, Balnilyam School | partial — our footer has University Song, Location on map, RTI, UGC, e-Samadhan, Alumni, GIAN, IPMC, Anti-Ragging, Grievance, Prospectus, Forms, Ordinances, Annual report. MISSING: Legal Disclaimer, BIS Activities, Balnilyam School, Complaints for Discrimination, Student Feedback, Asian Agri History Foundation, Guidelines for Upload |
| 26 | **social-icons** — Facebook, Twitter, YouTube icons in header top-right | yes — social row in footer with correct handles |
| 27 | **accessibility-controls** — A+ / A- font size buttons | yes — utility bar |
| 28 | **search-box** — Search input in header | yes — search button; input drawer not implemented (would be Phase 2) |


## 2. Content on OUR homepage that lacks a verifiable source

| # | Element | Provenance / action |
|---|---|---|

| 1 | **welcome-1960-note** — Big "1960" numeral with founding paragraph starting "After Independence, development of the rural sector..." | MY WRITING — cut or replace with a direct verifiable Nehru quote / press citation |
| 2 | **mosaic-captions** — Editorial captions on the 4 mosaic photos | MY WRITING — cut or reduce to factual labels (place, year, event) |
| 3 | **quick-access-headline** — "The three tasks most visitors come to do" | MY WRITING — replace with plain "Common actions" |
| 4 | **news-lead-headline** — Rewritten news lead: "The Union Minister for Agriculture names digital agriculture and AI as the direction of the next decade — from Pantnagar." | MY WRITING — replace with live headline verbatim |
| 5 | **placement-marquee-lede** — "Graduates go to industry, research, and public service — in roughly that order." | MY WRITING — cut |
| 6 | **signatures-h2** — "Institutions within the institution" | MY WRITING — cut |
| 7 | **pantnagar-signatures-body** — Museum/Journal/Newsletter descriptions | MY WRITING — replace with live-page short descriptions or drop to just titles |
| 8 | **stats-hero-tagline** — "The measure of the work" + "276 varieties" body | 276 is verifiable (Wikipedia + live); the tagline is my writing — cut or reword to plain "Varieties released" |
| 9 | **hero-tagline** — "A university of the land, for the land." | MY WRITING — cut or use verifiable motto "Uttistha Jagrata Prapya Varanibodhata" translation |


## 3. Rules for closing the delta

1. Every MISSING section either gets added (as its live-equivalent form, using live content) OR is explicitly dropped with a one-line rationale in a follow-up file.

2. Every MY WRITING element on our homepage either (a) is replaced with content that traces to live gbpuat.ac.in, Wikipedia, or a public government source; or (b) is cut entirely. No paraphrase.

3. All images on the migrated homepage use gbpuat.ac.in URLs directly (no re-hosting) except the ones already in our repo (crest, downloaded slider set which was verified against live).
