# Link audit — gbpuat.ac.in vs. our redesign

**Source of truth:** the live navigation JS files on gbpuat.ac.in
- `js/hnavbar.js` — utility bar (top strip)
- `js/navbar.js`  — main navigation
- `js/footer.js`  — footer links

Every link below is quoted **exactly** as declared in those source files, verified as HTTP 200 on the live site on 4 July 2026.

Legend:
- **INT** = internal page on gbpuat.ac.in — should be migrated to our redesign
- **EXT** = external URL — should link out, not be migrated
- **FORM** = involves authentication, submission or personal data — marked as risk, not migrated

---

## A. Utility bar — from `js/hnavbar.js`

| # | Label | Live URL | Kind | Current LINK_MAP | Status |
|---|---|---|---|---|---|
| A1 | Facebook | `https://facebook.com/gbpantuniversity` | EXT | `social-facebook` = search URL | **FIX** — use official handle |
| A2 | Twitter (X) | `https://twitter.com/dcpantnagar` | EXT | `social-twitter` = search URL | **FIX** — use official handle |
| A3 | YouTube | `https://www.youtube.com/@pantnagartv` | EXT | `social-youtube` = search URL | **FIX** — use official handle |
| A4 | Alumni | `https://www.pantnagar4a.in/` | EXT | `alumni` = pages/alumni.html | **KEEP LOCAL** (our alumni page is richer) but note the real external portal exists |
| A5 | Success Stories | `success_story/index.html` | INT | `success-stories` = pages/success-stories.html | **OK** — verify content parity |
| A6 | Web mail | `https://mail.gbpuat.ac.in/` | EXT + FORM | `webmail` = pages/webmail.html (routes to mail.google.com) | **FIX** — real domain is `mail.gbpuat.ac.in`, not `mail.google.com` |
| A7 | Weather Advisory | `agromet/index.html` | INT | `weather` = pages/weather-advisory.html (source pointed to Extension_Edu?id=8) | **FIX** — source is `agromet/index.html`, a distinct page; migrate content from there |

## B. Main navigation — from `js/navbar.js`

### Home
| # | Label | Live URL | Kind | Current LINK_MAP | Status |
|---|---|---|---|---|---|
| B1 | Home | `index.html` | INT | `nav-home` = `#` | **OK** — anchor to redesign homepage |

### Administration (5 items)
| # | Label | Live URL | Kind | Current | Status |
|---|---|---|---|---|---|
| B2 | Administrative Setup | `administratives/setup/index.html` | INT | `nav-administration` = pages/administration.html | **OK** — migrated |
| B3 | Organizational Structure | `administratives/structure/index.html` | INT | *not in map* | **MISSING** — migrate |
| B4 | VC Secretariat | `administratives/secretariat/index.html` | INT | *not in map* | **MISSING** — migrate |
| B5 | Registrar | `academics/registrar/index.html` | INT | *not in map* | **MISSING** — migrate |

### Colleges (8 items)
| # | Label | Live URL | Kind | Current | Status |
|---|---|---|---|---|---|
| B6 | Agribusiness Management | `colleges/CABM/index.html` | INT | pages/college-agribusiness.html | **OK** |
| B7 | Agriculture | `colleges/COA/index.html` | INT | pages/college-agriculture.html | **OK** |
| B8 | Basic Sciences & Humanities | `colleges/CBSH/index.html` | INT | pages/college-basic-sciences.html | **OK** |
| B9 | Fisheries | `colleges/COF/index.html` | INT | pages/college-fisheries.html | **OK** |
| B10 | Community Science | `colleges/COH/index.html` | INT | pages/college-community-science.html | **OK** |
| B11 | Technology | `colleges/COT/index.html` | INT | pages/college-technology.html | **OK** |
| B12 | Veterinary & Animal Sciences | `colleges/COV/index.html` | INT | pages/college-veterinary.html | **OK** |
| B13 | Post Graduate Studies | `colleges/COPS/index.html` | INT | pages/postgraduate-studies.html (source claimed academics.html?id=0) | **FIX SOURCE** — real URL is COPS/index.html |

### Directorates (11 items)
| # | Label | Live URL | Kind | Current | Status |
|---|---|---|---|---|---|
| B14 | Administration & Monitoring | `directorates/DAM/index.html` | INT | *not in map* | **MISSING** |
| B15 | Centre for Good Governance | `CGG/index.html` | INT | *not in map* | **MISSING** |
| B16 | Experiment Station | `directorates/directorate_experiment/index.html` | INT | pages/experiment-station.html | **OK** |
| B17 | Communication | `directorates/Directorate_communication/index.html` | INT | *not in map* | **MISSING** |
| B18 | Extension Education | `directorates/Extension_Edu/index.html` | INT | pages/extension-education.html | **OK** |
| B19 | International Affairs | `directorates/international_affairs/index.html` | INT | *not in map* | **MISSING** |
| B20 | Student Welfare | `directorates/student_welfare/index.html` | INT | *not in map* | **MISSING** |
| B21 | Placement & Counselling | `directorates/placement_counselling/index.html` | INT | `placement` = pages/placement.html (source: `directorates/placement_notice/index.html`) | **FIX SOURCE** — real live URL is `placement_counselling/`, not `placement_notice/` |
| B22 | Legal | `directorates/directorate_legal/index.html` | INT | *not in map* | **MISSING** |
| B23 | Publication | `directorates/publication/index.html` | INT | `journal` = pages/journal.html | **OK** — but our label is "Journal" vs their "Publication" |
| B24 | University Farm | `directorates/farm/index.html` | INT | `fac-farm` = pages/farm.html | **OK** |

### Cells (6 items)
| # | Label | Live URL | Kind | Current | Status |
|---|---|---|---|---|---|
| B25 | SC/ST Cell | `facility/cells/sc-st.html` | INT | *not in map, referenced in cells.html* | **MISSING** as own page |
| B26 | NAD Cell | `NAD/NAD_Cell.html` | INT | *not in map* | **MISSING** |
| B27 | ABC Cell | `ABC/abc.html` | INT | *not in map* | **MISSING** |
| B28 | Student Grievance Redressal | `facility/Student_Grievance_Redressal/student_grievance_redressal.html` | INT | pages/grievance.html | **OK** but should reflect live URL |
| B29 | Test and Selection | `test_selection/index.html` | INT | *not in map* | **MISSING** |
| B30 | Design Cell | `facility/desgin_cell/index.html` | INT | *not in map* | **MISSING** |

### Tenders / Jobs / Contact
| # | Label | Live URL | Kind | Current | Status |
|---|---|---|---|---|---|
| B31 | Tenders | `tendernotice/index.html` | INT | pages/tenders.html (source pointed to root) | **FIX SOURCE** |
| B32 | Job Opportunities | `employments/index.html` | INT | pages/jobs.html (source pointed to root) | **FIX SOURCE** |
| B33 | Contact Us | `contact/index.html` | INT | pages/contact.html (source pointed to `miscellaneous/how_to_reach/index.html`) | **FIX SOURCE** |

## C. Footer — from `js/footer.js`

| # | Label | Live URL | Kind | Current | Status |
|---|---|---|---|---|---|
| C1 | University Song | `https://www.youtube.com/watch?v=JviCg400JBI` | EXT | pages/university-song.html | **FIX** — real is external YouTube link |
| C2 | Google Map | `contact/contact.html` | INT | maps.google.com | **FIX** — real is internal contact page |
| C3 | Download Forms | `forms/index.html` | INT | pages/downloads.html | **OK** — consolidated in downloads |
| C4 | Guidelines For upload | `miscellaneous/upload/index.html` | INT | *not in map* | **MISSING** |
| C5 | IPMC | `ipmc/index.html` | INT | `foot-ipmc` = pages/cells.html | **FIX** — should be its own migrated page |
| C6 | UGC e-Samadhan | `https://samadhaan.ugc.ac.in/` | EXT | `foot-samadhan` = esamadhan.uk.gov.in | **FIX** — wrong URL, real is samadhaan.ugc.ac.in |
| C7 | Asian Agri History Foundation | `https://www.asianagrihistory.org/` | EXT | *not in map* | **MISSING** |
| C8 | Alumni | `https://www.pantnagar4a.in/` | EXT | pages/alumni.html | Same as A4 |
| C9 | GIAN | `gian/index.html` | INT | `foot-gian` = gian.iitkgp.ac.in | **FIX** — real is internal `gian/index.html`, not IIT KGP |
| C10 | Right To Information | `rti/index.html` | INT | pages/rti.html | **OK** |
| C11 | Internal Notices & Circulars | `circulars/index.html` | INT | *not migrated to dedicated page* | **MISSING** dedicated migration |
| C12 | Complaints for Discrimination | `miscellaneous/ugc/index.html` | INT + FORM | *not in map* | **MISSING** — mark as form-risk |
| C13 | Student Feedback | `https://forms.gle/ey4HP4ScidjFf26JA` | EXT + FORM | *not in map* | **MISSING** |
| C14 | Legal Disclaimer | `Legal/legal.html` | INT | *not in map* | **MISSING** |
| C15 | BIS Activities | `BIS/index.html` | INT | *not in map* | **MISSING** |
| C16 | Balnilyam School | `school/index.html` | INT | *not in map* | **MISSING** |

## D. Social handles (from utility bar / footer JS)

| # | Platform | Live URL | Current LINK_MAP | Status |
|---|---|---|---|---|
| D1 | Facebook | `https://facebook.com/gbpantuniversity` | search URL | **FIX** |
| D2 | Twitter (X) | `https://twitter.com/dcpantnagar` | search URL | **FIX** |
| D3 | YouTube | `https://www.youtube.com/@pantnagartv` | search URL | **FIX** |

---

## Summary of gaps

**Wrong URLs in LINK_MAP (must fix):** 12
- weather → `agromet/index.html` (not Extension_Edu?id=8)
- webmail → `mail.gbpuat.ac.in` (not mail.google.com)
- university-song → external YouTube (not internal)
- google-map → `contact/contact.html` (not maps.google.com)
- foot-samadhan → `samadhaan.ugc.ac.in` (not esamadhan)
- foot-gian → internal `gian/index.html` (not iitkgp)
- foot-ipmc → dedicated ipmc page (not cells)
- placement source URL → `directorates/placement_counselling/index.html`
- tenders source URL → `tendernotice/index.html`
- jobs source URL → `employments/index.html`
- contact source URL → `contact/index.html`
- college-pg source URL → `colleges/COPS/index.html`
- 3 social handles → real accounts

**Missing pages to migrate:** ~18
- Organizational Structure, VC Secretariat, Registrar
- 6 directorates: DAM, CGG, Communication, International Affairs, Student Welfare, Legal
- 5 cells: SC/ST, NAD, ABC, Test & Selection, Design
- Legal Disclaimer, Guidelines for Upload
- IPMC (dedicated page)
- BIS Activities
- Balnilyam School
- Complaints for Discrimination (**form-risk**)
- Internal Notices & Circulars (proper page)

**Forms identified — mark as RISK:**
- Web mail (auth)
- Complaints for Discrimination (`miscellaneous/ugc/index.html`) — sensitive submissions
- Student Feedback (Google Forms external)
- Test and Selection — may involve test entry, verify content
- Admissions portal (external `gbpuat.org.in`) — already known
- AMS portal (external `gbpuat.auams.in`) — already known
- Anti-Ragging & Grievance — content pages, complaints go to external portals
- SHe-Box (external statutory) — already known
