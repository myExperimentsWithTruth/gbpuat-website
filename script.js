// Minimal progressive enhancement. No framework.

// =============================================================
// LINK_MAP — central registry of every link on the homepage
// =============================================================
// Add or update URLs here in one place. Every anchor in index.html
// carrying `data-link="key"` will have its href, target and form
// marker set automatically on page load.
//
// value:
//   string   — an absolute or relative URL (external, opens new tab)
//   { url, form: true } — same but marked as a page with a form
// -------------------------------------------------------------
const GBPUAT = 'https://gbpuat.ac.in/';
const LINK_MAP = {
  // Utility bar
  // NOTE: the live gbpuat.ac.in does not currently expose these items in its top bar.
  // Each points to the closest live page that exists today; the university's team can
  // wire the real destinations when they add a formal webmail portal, alumni site, and
  // agri-met weather advisory service.
  'webmail':          { url: 'https://mail.gbpuat.ac.in/', form: true },  // page redirects to https://mail.gbpuat.ac.in
  'weather':          'https://gbpuat.ac.in/agromet/index.html',
  'alumni':           'https://www.pantnagar4a.in/',
  'success-stories':  'https://gbpuat.ac.in/success_story/index.html',
  'nav-home':          '#',
  'nav-administration': 'pages/administration.html',
  'nav-colleges':      '#colleges',
  'nav-directorates':  'pages/experiment-station.html',
  'nav-cells':         'https://gbpuat.ac.in/facility/cells/sc-st.html',
  'nav-tenders':       'https://gbpuat.ac.in/tendernotice/index.html',
  'nav-jobs':          'https://gbpuat.ac.in/employments/index.html',
  'nav-contact':       'https://gbpuat.ac.in/contact/index.html',
  'admissions':        { url: 'https://gbpuat.org.in', form: true },
  'prospectus':        GBPUAT + 'academics/admissions/24-03-26Prospectus-2026.pdf',
  'entrance-result':   'https://gbpuat.ac.in/awards/index.html',
  'notices':           '#notices',

  // Leadership — migrated to our redesign
  'chancellor-msg':    'pages/chancellor-message.html',
  'cm-profile':        'https://uk.gov.in/',
  'minister-profile':  'https://uk.gov.in/',
  'vc-msg':            'pages/vc-message.html',

  // Quick access
  'apply-2026':        { url: 'https://gbpuat.org.in', form: true },
  'check-result':      'https://gbpuat.ac.in/awards/index.html',
  'anti-ragging':      'pages/anti-ragging.html',
  // Academic Management System is a separate external portal.
  'ams':               { url: 'https://gbpuat.auams.in/', form: true },
  'academic-calendar': 'https://gbpuat.ac.in/calendar.html',
  'scholarships':      'https://gbpuat.ac.in/academics/academics.html?id=4',
  'placement':         'https://gbpuat.ac.in/directorates/placement_counselling/index.html',
  'library':           'pages/library.html',
  'hospital':          'https://gbpuat.ac.in/facility/hospital/index.html',
  'grievance':         'https://gbpuat.ac.in/facility/Student_Grievance_Redressal/student_grievance_redressal.html',
  'she-box':           { url: 'https://shebox.wcd.gov.in/', form: true },

  // Colleges — all use /index.html on the live site (research.html exists too, but index is the home)
  'college-agri':      'pages/college-agriculture.html',
  'college-vet':       'pages/college-veterinary.html',
  'college-tech':      'pages/college-technology.html',
  'college-basic':     'pages/college-basic-sciences.html',
  'college-community': 'pages/college-community-science.html',
  'college-fisheries': 'pages/college-fisheries.html',
  'college-cabm':      'pages/college-agribusiness.html',
  // No CPGS index on the live site — the university lists PG programmes on the main academics page.
  'college-pg':        'pages/postgraduate-studies.html',

  // Signatures
  'museum':            'https://gbpuat.ac.in/pantnagar_museum/index.html',
  'journal':           'https://gbpuat.ac.in/directorates/publication/index.html',
  'this-week':         GBPUAT + '25-05-26Pantnagar%20This%20Week.pdf',

  // Research — Directorate main is migrated locally; tab links to specific sections use the migrated anchors
  'directorate-experiment': 'pages/experiment-station.html',
  'research-highlights':    GBPUAT + 'directorates/directorate_experiment/index.html?id=4',
  'new-tech':               GBPUAT + 'directorates/directorate_experiment/index.html?id=8',
  'patents':                GBPUAT + 'directorates/directorate_experiment/index.html?id=9',
  'varieties':              GBPUAT + 'directorates/directorate_experiment/index.html?id=6',
  'demo-videos':            GBPUAT + 'videos/technology_video.html',

  // Extension (Extension_Edu tabs)
  'extension-ed':           'pages/extension-education.html',
  'kvk':                    'pages/extension-education.html#kvk',
  'sameti':                 'pages/extension-education.html#sameti',
  'atic':                   'pages/extension-education.html#atic',
  'crop-advisory':          'pages/extension-education.html#advisory',
  'kisan-mela':             GBPUAT + '09-01-2026-KM%20Letter.pdf',

  // Placement page
  'placement-cell':         'https://gbpuat.ac.in/directorates/placement_counselling/index.html',
  'fac-library':   'pages/library.html',
  'fac-hospital':  'https://gbpuat.ac.in/facility/hospital/index.html',
  'fac-ccf':       'https://gbpuat.ac.in/facility/CCF/index.html',
  'fac-guest':     'https://gbpuat.ac.in/guest_house/index.html',
  'fac-garden':    'https://gbpuat.ac.in/facility/garden/index.html',
  'fac-estate':    'https://gbpuat.ac.in/facility/estate_office/index.html',
  'fac-security':  'https://gbpuat.ac.in/facility/security_office/index.html',
  'fac-farm':      'https://gbpuat.ac.in/directorates/farm/index.html',
  'fac-store':     'https://gbpuat.ac.in/facility/store_office/index.html',
  'image-gallery': 'https://gbpuat.ac.in/gallery/kisan_mela/index.html',
  'video-gallery': 'https://gbpuat.ac.in/videos/technology_video.html',
  'cir-antirag':   'pages/anti-ragging.html',
  'cir-grievance': 'https://gbpuat.ac.in/facility/Student_Grievance_Redressal/student_grievance_redressal.html',
  'cir-icc':       GBPUAT + 'directorates/DAM/28.11.2023_committee.pdf',
  'cir-sports':    GBPUAT + '13-05-2025.pdf',
  'cir-sh':        GBPUAT + 'directorates/DAM/28.11.2023_committee.pdf',
  'cir-all':       'https://gbpuat.ac.in/circulars/index.html',
  'notice-admission':  { url: 'https://gbpuat.org.in', form: true },
  'notice-result':     'https://gbpuat.ac.in/awards/index.html',
  'notice-reporting':  GBPUAT + 'academics/admissions/Reporting%20Instructions%20B%20Tech_%20B%20Tech%20(LE)_M%20Tech%20Candidates_Final.pdf',
  'notice-deans':      GBPUAT + 'employments/adv-22-05-26.pdf',
  'notice-prospectus': GBPUAT + 'academics/admissions/24-03-26Prospectus-2026.pdf',
  'notices-all':       'https://gbpuat.ac.in/circulars/index.html',
  'news-lead':         'https://gbpuat.ac.in/',
  'news-more':         'https://gbpuat.ac.in/',
  'foot-song':      'https://www.youtube.com/watch?v=JviCg400JBI',
  'foot-map':       'https://gbpuat.ac.in/contact/contact.html',
  'foot-rti':       'https://gbpuat.ac.in/rti/index.html',
  'foot-ugc':       'https://www.ugc.gov.in/',
  'foot-samadhan':  'https://samadhaan.ugc.ac.in/',

  // Footer — community
  'foot-alumni':    'https://www.pantnagar4a.in/',
  'foot-gian':      'https://gbpuat.ac.in/gian/index.html',
  'foot-ipmc':      'https://gbpuat.ac.in/ipmc/index.html',
  'foot-antirag':   'pages/anti-ragging.html',
  'foot-grievance': 'https://gbpuat.ac.in/facility/Student_Grievance_Redressal/student_grievance_redressal.html',
  'foot-prospectus': GBPUAT + 'academics/admissions/24-03-26Prospectus-2026.pdf',
  'foot-forms':      'https://gbpuat.ac.in/forms/index.html',
  'foot-ordinances': 'https://gbpuat.ac.in/forms/index.html',
  'foot-annual':     'https://gbpuat.ac.in/',
  // these point to searches on each platform, safer than guessing handles.
  'social-facebook':  'https://facebook.com/gbpantuniversity',
  'social-twitter':   'https://twitter.com/dcpantnagar',
  'social-youtube':   'https://www.youtube.com/@pantnagartv',
  'social-instagram': 'https://www.instagram.com/explore/search/?q=GBPUAT%20Pantnagar',
  'social-linkedin':  'https://www.linkedin.com/school/gbpuat-pantnagar/',

  // Newly migrated pages from the audit
  'org-structure':    'https://gbpuat.ac.in/administratives/structure/index.html',
  'vc-secretariat':   'https://gbpuat.ac.in/administratives/secretariat/index.html',
  'registrar':        'https://gbpuat.ac.in/academics/registrar/index.html',
  'dam':              'https://gbpuat.ac.in/directorates/DAM/index.html',
  'cgg':              'https://gbpuat.ac.in/CGG/index.html',
  'communication':    'https://gbpuat.ac.in/directorates/Directorate_communication/index.html',
  'international':    'https://gbpuat.ac.in/directorates/international_affairs/index.html',
  'student-welfare':  'https://gbpuat.ac.in/directorates/student_welfare/index.html',
  'legal-dir':        'https://gbpuat.ac.in/directorates/directorate_legal/index.html',
  'sc-st-cell':       'https://gbpuat.ac.in/facility/cells/sc-st.html',
  'nad-cell':         'https://gbpuat.ac.in/NAD/NAD_Cell.html',
  'abc-cell':         'https://gbpuat.ac.in/ABC/abc.html',
  'test-selection':   'https://gbpuat.ac.in/test_selection/index.html',
  'design-cell':      'https://gbpuat.ac.in/facility/desgin_cell/index.html',
  'ipmc':             'https://gbpuat.ac.in/ipmc/index.html',
  'gian':             'https://gbpuat.ac.in/gian/index.html',
  'bis':              'https://gbpuat.ac.in/BIS/index.html',
  'balnilyam':        'https://gbpuat.ac.in/school/index.html',
  'legal-disclaimer': 'https://gbpuat.ac.in/Legal/legal.html',
  'upload-guide':     'https://gbpuat.ac.in/miscellaneous/upload/index.html',
  'complaints-discrim': { url: 'https://gbpuat.ac.in/miscellaneous/ugc/index.html', form: true },
  'circulars-index':  'https://gbpuat.ac.in/circulars/index.html',
  'agri-history':     'https://www.asianagrihistory.org/',
  'student-feedback': { url: 'https://forms.gle/ey4HP4ScidjFf26JA', form: true },
};

// Wire every [data-link] anchor to its LINK_MAP entry.
(function () {
  document.querySelectorAll('[data-link]').forEach(a => {
    const key = a.getAttribute('data-link');
    const entry = LINK_MAP[key];
    if (!entry) return;
    const url = typeof entry === 'string' ? entry : entry.url;
    const isForm = typeof entry === 'object' && entry.form;
    a.setAttribute('href', url);
    // External if it starts with http and points off our origin (not an anchor / relative)
    const isExternal = /^https?:/.test(url) && !url.startsWith(location.origin);
    if (isExternal) {
      a.setAttribute('target', '_blank');
      a.setAttribute('rel', 'noopener noreferrer');
      a.classList.add('ext');
    }
    if (isForm) a.classList.add('has-form');
  });
})();

// Progressive reveals on scroll — Apple-style
(function () {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Selector map: what gets revealed, and how.
  // - Section headings, kickers, single blocks → `.reveal`
  // - Grids of cards → parent gets `.reveal-group` (children stagger)
  // - Large images → `.reveal-img`
  const groupSelectors = [
    '.stat-grid', '.quick-grid', '.col-grid', '.news-grid',
    '.sig-grid', '.pl-brands', '.stu-grid', '.fac-grid',
    '.lead-grid', '.accred-logos', '.mosaic-grid',
    '.link-list', '.cir-list', '.trust-row'
  ];
  const soloSelectors = [
    '.section-head', '.welcome-row', '.two-col > *',
    '.accred-lede', '.pull', '.event-card', '.pl-lede',
    '.gal-two > *', '.foot-grid > *'
  ];

  document.querySelectorAll(groupSelectors.join(',')).forEach(el => el.classList.add('reveal-group'));
  document.querySelectorAll(soloSelectors.join(',')).forEach(el => el.classList.add('reveal'));
  // Hero gets its own scripted line-by-line rise
  const hero = document.querySelector('.hero');
  if (hero) hero.classList.add('reveal-hero');

  const all = document.querySelectorAll('.reveal, .reveal-group, .reveal-hero');

  if (reduced) {
    all.forEach(el => el.classList.add('in'));
    return;
  }

  // 1. Reveal immediately anything already visible in — or above — the viewport
  //    (handles page reloads mid-scroll, in-page anchor jumps, back-forward cache).
  const revealIfAboveOrIn = () => {
    const vh = window.innerHeight;
    all.forEach(el => {
      const r = el.getBoundingClientRect();
      if (r.top < vh * 0.9) el.classList.add('in');
    });
  };
  revealIfAboveOrIn();

  // 2. Observe the rest and fire on entry.
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });

  all.forEach(el => { if (!el.classList.contains('in')) io.observe(el); });

  // 3. Safety net: any element that hasn't revealed after 2s of interaction gets forced in.
  //    Prevents stuck opacity: 0 on fast scrolls, hash jumps, or edge cases.
  window.addEventListener('scroll', () => {
    clearTimeout(window.__revSafe);
    window.__revSafe = setTimeout(revealIfAboveOrIn, 250);
  }, { passive: true });
  setTimeout(revealIfAboveOrIn, 1600);
})();

// Back-to-top visibility
(function () {
  const top = document.querySelector('.top');
  if (!top) return;
  const on = () => {
    if (window.scrollY > 500) top.classList.add('on');
    else top.classList.remove('on');
  };
  window.addEventListener('scroll', on, { passive: true });
  top.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();

// A+/A- text size (persists in localStorage)
(function () {
  const KEY = 'gbpuat-text-scale';
  const min = 0.9, max = 1.25, step = 0.05;
  const root = document.documentElement;
  let scale = parseFloat(localStorage.getItem(KEY)) || 1;
  const apply = () => { root.style.fontSize = (17 * scale) + 'px'; };
  apply();
  document.querySelectorAll('.txtsize').forEach(btn => {
    btn.addEventListener('click', () => {
      const dir = btn.dataset.size === '+' ? 1 : -1;
      scale = Math.min(max, Math.max(min, scale + step * dir));
      localStorage.setItem(KEY, scale);
      apply();
    });
  });
})();

// Hero carousel — fade, autoplay, arrows, dots, keyboard, reduced-motion, pause-on-hover
(function () {
  const root = document.querySelector('[data-carousel]');
  if (!root) return;
  const slides = Array.from(root.querySelectorAll('.car-slide'));
  const dotsWrap = document.querySelector('[data-car-dots]');
  const progressBar = document.querySelector('[data-car-progress] > span');
  const prevBtn = document.querySelector('[data-car-prev]');
  const nextBtn = document.querySelector('[data-car-next]');
  const carousel = root.closest('.carousel');
  const INTERVAL = 6500;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  let i = 0, timer = null, paused = false;

  // Build dot indicators
  slides.forEach((_, idx) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.setAttribute('aria-label', `Go to slide ${idx + 1}`);
    if (idx === 0) b.classList.add('on');
    b.addEventListener('click', () => go(idx));
    dotsWrap.appendChild(b);
  });
  const dots = Array.from(dotsWrap.children);

  function go(next) {
    slides[i].classList.remove('on');
    dots[i].classList.remove('on');
    i = (next + slides.length) % slides.length;
    slides[i].classList.add('on');
    dots[i].classList.add('on');
  }
  const nextSlide = () => go(i + 1);
  const prevSlide = () => go(i - 1);

  // Autoplay and progress bar disabled — user-driven navigation only.
  if (progressBar) progressBar.style.display = 'none';

  nextBtn.addEventListener('click', nextSlide);
  prevBtn.addEventListener('click', prevSlide);

  // Keyboard support on the carousel
  carousel.tabIndex = -1;
  carousel.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') { e.preventDefault(); nextSlide(); }
    if (e.key === 'ArrowLeft')  { e.preventDefault(); prevSlide(); }
  });

  // Touch swipe (basic)
  let sx = 0;
  carousel.addEventListener('touchstart', (e) => { sx = e.touches[0].clientX; }, { passive: true });
  carousel.addEventListener('touchend', (e) => {
    const dx = e.changedTouches[0].clientX - sx;
    if (Math.abs(dx) > 40) (dx < 0 ? nextSlide() : prevSlide());
  });
})();

// Language toggle (EN / Hindi) — swaps document lang for shown-text rules
(function () {
  const btns = document.querySelectorAll('.lang button');
  if (!btns.length) return;
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      document.documentElement.setAttribute('data-lang', lang);
      document.documentElement.setAttribute('lang', lang);
      btns.forEach(b => b.classList.toggle('on', b === btn));
    });
  });
})();
