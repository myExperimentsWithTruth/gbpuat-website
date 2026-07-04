// Shared shell for every migrated interior page.
// Injects the full site header (utility bar + masthead + main nav) and
// the full site footer, matching the homepage.
//
// Safety model:
//  - The header and footer HTML are static string literals authored in
//    this file. No user input or fetched content is interpolated into
//    them, so parsing them via createContextualFragment is safe by
//    construction. If a future contributor moves either into a fetched
//    or user-editable source, replace with programmatic DOM building.
//  - Interpolated values from <meta> tags (title, kicker, crumbs, source)
//    are inserted with textContent / setAttribute only, never as HTML.

(function () {
  const meta = name => document.querySelector(`meta[name="${name}"]`)?.content || '';
  const pageTitle   = meta('page-title')   || document.title.split('—')[0].trim();
  const pageKicker  = meta('page-kicker');
  const pageDek     = meta('page-dek');
  const crumbTrail  = meta('page-crumbs')  || 'Home';
  const srcUrl      = meta('source-url');
  const template    = meta('page-template') || 'article';

  const HOME = '../';
  const LIVE = 'https://gbpuat.ac.in/';

  // ---------- Programmatic DOM helper (for interpolated content) ----------
  const el = (tag, attrs = {}, children = []) => {
    const n = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) {
      if (k === 'text') n.textContent = v;
      else if (v !== undefined && v !== null) n.setAttribute(k, v);
    }
    (Array.isArray(children) ? children : [children]).forEach(c => c && n.appendChild(c));
    return n;
  };

  // ---------- Full site header (utility bar + masthead + main nav) ----------
  // Static literal, no interpolation of user data.
  const headerHTML = `
    <div class="utility">
      <div class="wrap util-row">
        <ul class="util-left" aria-label="Accessibility and quick links">
          <li><button class="txtsize" data-size="+" aria-label="Increase text size">A+</button></li>
          <li><button class="txtsize" data-size="-" aria-label="Decrease text size">A&minus;</button></li>
          <li><a href="https://mail.gbpuat.ac.in/" target="_blank" rel="noopener">Web Mail</a></li>
          <li><a href="${LIVE}agromet/index.html" target="_blank" rel="noopener">Weather Advisory</a></li>
          <li><a href="https://www.pantnagar4a.in/" target="_blank" rel="noopener">Alumni</a></li>
          <li><a href="${LIVE}success_story/index.html" target="_blank" rel="noopener">Success Stories</a></li>
        </ul>
        <div class="util-right">
          <div class="lang" role="group" aria-label="Language">
            <button data-lang="en" class="on">EN</button>
            <span aria-hidden="true">/</span>
            <button data-lang="hi">हिन्दी</button>
          </div>
        </div>
      </div>
    </div>
    <header class="masthead">
      <div class="wrap head-row">
        <a class="brand" href="${HOME}" aria-label="GBPUA&amp;T Home">
          <img src="${HOME}logo_small.png" alt="" width="72" height="72" />
          <div class="brand-txt">
            <div class="brand-en">Govind Ballabh Pant University of<br />Agriculture &amp; Technology</div>
            <div class="brand-hi">गोविंद बल्लभ पंत कृषि एवं प्रौद्योगिक विश्वविद्यालय</div>
            <div class="brand-loc">Pantnagar &middot; Uttarakhand &middot; India</div>
          </div>
        </a>
        <div class="head-right">
          <a class="cta" href="https://gbpuat.org.in" target="_blank" rel="noopener">
            <span>Admissions 2026&ndash;27</span>
            <span class="cta-arrow" aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
      <nav class="mainnav" aria-label="Primary">
        <div class="wrap">
          <ul>
            <li><a href="${HOME}">Home</a></li>
            <li><a href="administration.html">Administration</a></li>
            <li><a href="${HOME}#colleges">Colleges</a></li>
            <li><a href="experiment-station.html">Directorates</a></li>
            <li><a href="${LIVE}facility/cells/sc-st.html" target="_blank" rel="noopener">Cells</a></li>
            <li><a href="${LIVE}tendernotice/index.html" target="_blank" rel="noopener">Tenders</a></li>
            <li><a href="${LIVE}employments/index.html" target="_blank" rel="noopener">Job Opportunities</a></li>
            <li><a href="${LIVE}contact/index.html" target="_blank" rel="noopener">Contact</a></li>
          </ul>
        </div>
      </nav>
    </header>
  `;

  // ---------- Full site footer ----------
  const footerHTML = `
    <footer class="foot">
      <div class="wrap foot-grid">
        <div class="foot-brand">
          <img src="${HOME}logo_small.png" alt="" width="64" height="64" />
          <div class="foot-name">Govind Ballabh Pant University of Agriculture &amp; Technology</div>
          <div class="foot-name-hi" lang="hi">गोविंद बल्लभ पंत कृषि एवं प्रौद्योगिक विश्वविद्यालय</div>
          <address>
            Pantnagar, Udham Singh Nagar<br />
            Uttarakhand 263145, India<br />
            Telephone: 05944&ndash;233349 / 233350<br />
            registrar<span aria-hidden="true">[at]</span>gbpuat<span aria-hidden="true">[dot]</span>ac<span aria-hidden="true">[dot]</span>in
          </address>
        </div>
        <div>
          <h4>Institution</h4>
          <ul>
            <li><a href="https://www.youtube.com/watch?v=JviCg400JBI" target="_blank" rel="noopener">University Song</a></li>
            <li><a href="${LIVE}contact/contact.html" target="_blank" rel="noopener">Location on map</a></li>
            <li><a href="${LIVE}rti/index.html" target="_blank" rel="noopener">RTI</a></li>
            <li><a href="https://www.ugc.gov.in/" target="_blank" rel="noopener">UGC</a></li>
            <li><a href="https://samadhaan.ugc.ac.in/" target="_blank" rel="noopener">e-Samadhan</a></li>
          </ul>
        </div>
        <div>
          <h4>Community</h4>
          <ul>
            <li><a href="https://www.pantnagar4a.in/" target="_blank" rel="noopener">Alumni</a></li>
            <li><a href="${LIVE}gian/index.html" target="_blank" rel="noopener">GIAN</a></li>
            <li><a href="${LIVE}ipmc/index.html" target="_blank" rel="noopener">IPMC</a></li>
            <li><a href="anti-ragging.html">Anti-Ragging</a></li>
            <li><a href="${LIVE}facility/Student_Grievance_Redressal/student_grievance_redressal.html" target="_blank" rel="noopener">Grievance Redressal</a></li>
          </ul>
        </div>
        <div>
          <h4>Downloads</h4>
          <ul>
            <li><a href="${LIVE}academics/admissions/24-03-26Prospectus-2026.pdf" target="_blank" rel="noopener">Prospectus 2026&ndash;27</a></li>
            <li><a href="${LIVE}forms/index.html" target="_blank" rel="noopener">Forms &amp; formats</a></li>
            <li><a href="${LIVE}forms/index.html" target="_blank" rel="noopener">Ordinances</a></li>
            <li><a href="${LIVE}" target="_blank" rel="noopener">Annual report</a></li>
          </ul>
        </div>
      </div>
      <div class="wrap foot-social">
        <ul>
          <li><a href="https://facebook.com/gbpantuniversity" target="_blank" rel="noopener">Facebook</a></li>
          <li><a href="https://twitter.com/dcpantnagar" target="_blank" rel="noopener">X (Twitter)</a></li>
          <li><a href="https://www.youtube.com/@pantnagartv" target="_blank" rel="noopener">YouTube</a></li>
        </ul>
      </div>
      <div class="wrap foot-mini">
        <div>&copy; 1960&ndash;2026 GBPUA&amp;T, Pantnagar.</div>
        <div class="foot-note">This is a demonstration redesign built by an alumnus as a personal contribution. It is not an official university communication.</div>
      </div>
    </footer>
  `;

  // Prepend header
  const headerFrag = document.createRange().createContextualFragment(headerHTML);
  document.body.prepend(headerFrag);

  // ---------- Breadcrumbs — programmatic (values from meta tags) ----------
  const linkOf = label => {
    if (label === 'Home') return HOME;
    if (label === 'Colleges') return HOME + '#colleges';
    if (label === 'Administration') return 'administration.html';
    if (label === 'Research') return 'experiment-station.html';
    if (label === 'Extension') return 'extension-education.html';
    return null;
  };
  const parts = crumbTrail.split('/').map(s => s.trim());
  const last = parts.pop();
  const crumbs = el('nav', { class: 'crumbs', 'aria-label': 'Breadcrumb' });
  const crumbsWrap = el('div', { class: 'wrap' });
  parts.forEach(p => {
    const href = linkOf(p);
    if (href) crumbsWrap.appendChild(el('a', { href, text: p }));
    else       crumbsWrap.appendChild(el('span', { text: p }));
    crumbsWrap.appendChild(el('span', { text: '/' }));
  });
  crumbsWrap.appendChild(el('strong', { text: last }));
  crumbs.appendChild(crumbsWrap);
  const mastEl = document.querySelector('.masthead');
  if (mastEl) mastEl.insertAdjacentElement('afterend', crumbs);

  // ---------- Hero — programmatic ----------
  if (!document.querySelector('.page-hero, .college-hero, .fac-hero')) {
    const heroClass = template === 'college' ? 'college-hero' : 'page-hero';
    const hero = el('section', { class: heroClass });
    const heroWrap = el('div', { class: 'wrap' });
    if (pageKicker) heroWrap.appendChild(el('div', { class: 'kicker', text: pageKicker }));
    heroWrap.appendChild(el('h1', { text: pageTitle }));
    if (pageDek)    heroWrap.appendChild(el('p', { class: 'dek', text: pageDek }));
    hero.appendChild(heroWrap);
    crumbs.insertAdjacentElement('afterend', hero);
  }

  // ---------- Migrated-page note — programmatic ----------
  const note = el('div', { class: 'migrated-note' });
  const noteWrap = el('div', { class: 'wrap' });
  noteWrap.appendChild(document.createTextNode(`Migrated page · ${template} template`));
  if (srcUrl) {
    noteWrap.appendChild(document.createTextNode(' · '));
    noteWrap.appendChild(el('a', { href: srcUrl, target: '_blank', rel: 'noopener', text: 'Source on gbpuat.ac.in' }));
  }
  note.appendChild(noteWrap);
  document.body.appendChild(note);

  // ---------- Full footer ----------
  const footerFrag = document.createRange().createContextualFragment(footerHTML);
  document.body.appendChild(footerFrag);

  // ---------- Wire A+/A- text size buttons ----------
  const KEY = 'gbpuat-text-scale';
  const min = 0.9, max = 1.25, step = 0.05;
  let scale = parseFloat(localStorage.getItem(KEY)) || 1;
  const apply = () => { document.documentElement.style.fontSize = (17 * scale) + 'px'; };
  apply();
  document.querySelectorAll('.txtsize').forEach(btn => {
    btn.addEventListener('click', () => {
      const dir = btn.dataset.size === '+' ? 1 : -1;
      scale = Math.min(max, Math.max(min, scale + step * dir));
      localStorage.setItem(KEY, scale);
      apply();
    });
  });

  // ---------- Language toggle (mirror homepage behaviour) ----------
  document.querySelectorAll('.lang button').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      document.documentElement.setAttribute('data-lang', lang);
      document.documentElement.setAttribute('lang', lang);
      document.querySelectorAll('.lang button').forEach(b => b.classList.toggle('on', b === btn));
    });
  });
})();
