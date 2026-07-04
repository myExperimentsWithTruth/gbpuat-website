// Shared shell for every migrated interior page.
// All values come from <meta> tags in the page file itself (author-set static
// content, not user input). We still assign via textContent / setAttribute
// rather than innerHTML so the shell is safe by construction if a future
// generator ever pipes in dynamic data.

(function () {
  const meta = name => document.querySelector(`meta[name="${name}"]`)?.content || '';
  const pageTitle   = meta('page-title')   || document.title.split('—')[0].trim();
  const pageKicker  = meta('page-kicker');
  const pageDek     = meta('page-dek');
  const crumbTrail  = meta('page-crumbs')  || 'Home';
  const srcUrl      = meta('source-url');
  const template    = meta('page-template') || 'article';

  const el = (tag, attrs = {}, children = []) => {
    const n = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) {
      if (k === 'text') n.textContent = v;
      else n.setAttribute(k, v);
    }
    (Array.isArray(children) ? children : [children]).forEach(c => c && n.appendChild(c));
    return n;
  };

  // ---------- Masthead ----------
  const mast = el('header', { class: 'page-mast' });
  const mastWrap = el('div', { class: 'wrap' });
  const brand = el('a', { class: 'brand', href: '../' });
  brand.appendChild(el('img', { src: '../logo_small.png', alt: '' }));
  const brandTxt = el('div');
  brandTxt.appendChild(el('div', { class: 'brand-en', text: 'Govind Ballabh Pant University of Agriculture & Technology' }));
  brandTxt.appendChild(el('div', { class: 'brand-hi', lang: 'hi', text: 'गोविंद बल्लभ पंत कृषि एवं प्रौद्योगिक विश्वविद्यालय' }));
  brand.appendChild(brandTxt);
  const navEl = el('nav');
  ['Home:../', 'Administration:administration.html', 'Colleges:../#colleges'].forEach(pair => {
    const [label, href] = pair.split(':');
    navEl.appendChild(el('a', { href, text: label }));
  });
  mastWrap.appendChild(brand);
  mastWrap.appendChild(navEl);
  mast.appendChild(mastWrap);
  document.body.insertBefore(mast, document.body.firstChild);

  // ---------- Breadcrumbs ----------
  const linkOf = label => {
    if (label === 'Home') return '../';
    if (label === 'Colleges') return '../#colleges';
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
    else crumbsWrap.appendChild(el('span', { text: p }));
    crumbsWrap.appendChild(el('span', { text: '/' }));
  });
  crumbsWrap.appendChild(el('strong', { text: last }));
  crumbs.appendChild(crumbsWrap);
  mast.insertAdjacentElement('afterend', crumbs);

  // ---------- Hero (skipped if page provides its own) ----------
  if (!document.querySelector('.page-hero, .college-hero, .fac-hero')) {
    const hero = el('section', { class: template === 'college' ? 'college-hero' : 'page-hero' });
    const heroWrap = el('div', { class: 'wrap' });
    if (pageKicker) heroWrap.appendChild(el('div', { class: 'kicker', text: pageKicker }));
    heroWrap.appendChild(el('h1', { text: pageTitle }));
    if (pageDek) heroWrap.appendChild(el('p', { class: 'dek', text: pageDek }));
    hero.appendChild(heroWrap);
    crumbs.insertAdjacentElement('afterend', hero);
  }

  // ---------- Migrated-page footer note ----------
  const note = el('div', { class: 'migrated-note' });
  const noteWrap = el('div', { class: 'wrap' });
  noteWrap.appendChild(document.createTextNode(`Migrated page · ${template} template`));
  if (srcUrl) {
    noteWrap.appendChild(document.createTextNode(' · '));
    noteWrap.appendChild(el('a', { href: srcUrl, target: '_blank', rel: 'noopener', text: 'Source on gbpuat.ac.in' }));
  }
  note.appendChild(noteWrap);
  document.body.appendChild(note);
})();
