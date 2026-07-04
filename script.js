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
  'webmail':          { url: 'https://mail.google.com/', form: true },
  'weather':          GBPUAT + 'directorates/Extension_Edu/index.html?id=8',
  'alumni':           GBPUAT,
  'success-stories':  GBPUAT + 'awards/index.html',

  // Primary nav
  'nav-home':          '#',
  'nav-administration': GBPUAT + 'administratives/setup/index.html',
  'nav-colleges':      '#colleges',
  'nav-directorates':  GBPUAT + 'directorates/directorate_experiment/index.html?id=1',
  'nav-cells':         GBPUAT,
  'nav-tenders':       GBPUAT,
  'nav-jobs':          GBPUAT,
  'nav-contact':       GBPUAT,

  // Hero — admissions on live site is a dedicated external portal
  'admissions':        { url: 'https://gbpuat.org.in', form: true },
  'prospectus':        GBPUAT + 'academics/admissions/24-03-26Prospectus-2026.pdf',
  'entrance-result':   GBPUAT + 'awards/index.html',
  'notices':           '#notices',

  // Leadership
  'chancellor-msg':    GBPUAT + 'administratives/chancellor/msg.html',
  'cm-profile':        'https://uk.gov.in/',
  'minister-profile':  'https://uk.gov.in/',
  'vc-msg':            GBPUAT + 'administratives/vc/index.html',

  // Quick access
  'apply-2026':        { url: 'https://gbpuat.org.in', form: true },
  'check-result':      GBPUAT + 'awards/index.html',
  // Anti-ragging on the live site points to an internal page, not the central portal.
  'anti-ragging':      GBPUAT + 'academics/academics.html?id=6',
  // Academic Management System is a separate external portal.
  'ams':               { url: 'https://gbpuat.auams.in/', form: true },
  'academic-calendar': GBPUAT + 'calendar.html',
  // Scholarships is academics id=4 on the live site (id=5 is Academic Programme).
  'scholarships':      GBPUAT + 'academics/academics.html?id=4',
  'placement':         GBPUAT + 'directorates/placement_notice/index.html',
  'library':           GBPUAT + 'facility/library/index.html',
  'hospital':          GBPUAT + 'facility/hospital/index.html',
  'grievance':         GBPUAT,
  'she-box':           { url: 'https://shebox.wcd.gov.in/', form: true },

  // Colleges — all use /index.html on the live site (research.html exists too, but index is the home)
  'college-agri':      GBPUAT + 'colleges/COA/index.html',
  'college-vet':       GBPUAT + 'colleges/COV/index.html',
  'college-tech':      GBPUAT + 'colleges/COT/index.html',
  'college-basic':     GBPUAT + 'colleges/CBSH/index.html',
  'college-community': GBPUAT + 'colleges/COH/index.html',
  'college-fisheries': GBPUAT + 'colleges/COF/index.html',
  'college-cabm':      GBPUAT + 'colleges/CABM/index.html',
  // No CPGS index on the live site — the university lists PG programmes on the main academics page.
  'college-pg':        GBPUAT + 'academics/academics.html?id=0',

  // Signatures
  'museum':            GBPUAT + 'pantnagar_museum/index.html',
  'journal':           GBPUAT + 'directorates/publication/index.html',
  'this-week':         GBPUAT + '25-05-26Pantnagar%20This%20Week.pdf',

  // Research (Directorate of Experiment Station tabs)
  'directorate-experiment': GBPUAT + 'directorates/directorate_experiment/index.html?id=1',
  'research-highlights':    GBPUAT + 'directorates/directorate_experiment/index.html?id=4',
  'new-tech':               GBPUAT + 'directorates/directorate_experiment/index.html?id=8',
  'patents':                GBPUAT + 'directorates/directorate_experiment/index.html?id=9',
  'varieties':              GBPUAT + 'directorates/directorate_experiment/index.html?id=6',
  'demo-videos':            GBPUAT + 'videos/technology_video.html',

  // Extension (Extension_Edu tabs)
  'extension-ed':           GBPUAT + 'directorates/Extension_Edu/index.html?id=1',
  'kvk':                    GBPUAT + 'directorates/Extension_Edu/index.html?id=4',
  'sameti':                 GBPUAT + 'directorates/Extension_Edu/index.html?id=3',
  'atic':                   GBPUAT + 'directorates/Extension_Edu/index.html?id=3',
  'crop-advisory':          GBPUAT + 'directorates/Extension_Edu/index.html?id=8',
  'kisan-mela':             GBPUAT + '09-01-2026-KM%20Letter.pdf',

  // Placement page
  'placement-cell':         GBPUAT + 'directorates/placement_notice/index.html',

  // Facilities
  'fac-library':   GBPUAT + 'facility/library/index.html',
  'fac-hospital':  GBPUAT + 'facility/hospital/index.html',
  'fac-ccf':       GBPUAT + 'facility/CCF/index.html',
  'fac-guest':     GBPUAT + 'guest_house/index.html',
  'fac-garden':    GBPUAT + 'facility/garden/index.html',
  'fac-estate':    GBPUAT + 'facility/estate_office/index.html',
  'fac-security':  GBPUAT + 'facility/security_office/index.html',
  'fac-farm':      GBPUAT + 'directorates/farm/index.html',
  'fac-store':     GBPUAT + 'facility/store_office/index.html',

  // Galleries — the live site lists them under the Kisan Mela / Ag Congress galleries
  'image-gallery': GBPUAT + 'gallery/kisan_mela/index.html',
  'video-gallery': GBPUAT + 'videos/technology_video.html',

  // Circulars
  'cir-antirag':   GBPUAT + 'academics/academics.html?id=6',
  'cir-grievance': GBPUAT,
  'cir-icc':       GBPUAT + 'directorates/DAM/28.11.2023_committee.pdf',
  'cir-sports':    GBPUAT + '13-05-2025.pdf',
  'cir-sh':        GBPUAT + 'directorates/DAM/28.11.2023_committee.pdf',
  'cir-all':       GBPUAT,

  // Notices (top strip)
  'notice-admission':  { url: 'https://gbpuat.org.in', form: true },
  'notice-result':     GBPUAT + 'awards/index.html',
  'notice-reporting':  GBPUAT + 'academics/admissions/Reporting%20Instructions%20B%20Tech_%20B%20Tech%20(LE)_M%20Tech%20Candidates_Final.pdf',
  'notice-deans':      GBPUAT + 'employments/adv-22-05-26.pdf',
  'notice-prospectus': GBPUAT + 'academics/admissions/24-03-26Prospectus-2026.pdf',
  'notices-all':       GBPUAT,

  // News — the live site does not expose per-article pages; all rail links land on the homepage
  'news-lead':         GBPUAT,
  'news-more':         GBPUAT,

  // Footer — institution
  'foot-song':      GBPUAT,
  'foot-map':       'https://maps.google.com/?q=GBPUAT+Pantnagar',
  'foot-rti':       GBPUAT,
  'foot-ugc':       'https://www.ugc.gov.in/',
  'foot-samadhan':  'https://esamadhan.uk.gov.in/',

  // Footer — community
  'foot-alumni':    GBPUAT,
  'foot-gian':      'https://www.gian.iitkgp.ac.in/',
  'foot-ipmc':      GBPUAT,
  'foot-antirag':   GBPUAT + 'academics/academics.html?id=6',
  'foot-grievance': GBPUAT,

  // Footer — downloads
  'foot-prospectus': GBPUAT + 'academics/admissions/24-03-26Prospectus-2026.pdf',
  'foot-forms':      GBPUAT,
  'foot-ordinances': GBPUAT,
  'foot-annual':     GBPUAT,

  // Social — the university does not run verified branded accounts on all networks;
  // these point to searches on each platform, safer than guessing handles.
  'social-facebook':  'https://www.facebook.com/search/top?q=GBPUAT%20Pantnagar',
  'social-twitter':   'https://x.com/search?q=GBPUAT%20Pantnagar',
  'social-youtube':   'https://www.youtube.com/results?search_query=GBPUAT+Pantnagar',
  'social-instagram': 'https://www.instagram.com/explore/search/?q=GBPUAT%20Pantnagar',
  'social-linkedin':  'https://www.linkedin.com/search/results/all/?keywords=GBPUAT%20Pantnagar',
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
    // External if it starts with http (not an anchor / relative)
    if (/^https?:/.test(url)) {
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
    restart();
  }
  const nextSlide = () => go(i + 1);
  const prevSlide = () => go(i - 1);

  function restart() {
    if (reduced) return;
    clearInterval(timer);
    if (progressBar) {
      progressBar.style.transition = 'none';
      progressBar.style.width = '0%';
      // Force reflow so the next transition takes hold
      void progressBar.offsetWidth;
      progressBar.style.transition = `width ${INTERVAL}ms linear`;
      progressBar.style.width = paused ? '0%' : '100%';
    }
    timer = setInterval(() => { if (!paused) nextSlide(); }, INTERVAL);
  }

  nextBtn.addEventListener('click', nextSlide);
  prevBtn.addEventListener('click', prevSlide);

  // Keyboard support on the carousel
  carousel.tabIndex = -1;
  carousel.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') { e.preventDefault(); nextSlide(); }
    if (e.key === 'ArrowLeft')  { e.preventDefault(); prevSlide(); }
  });

  // Pause on hover / focus
  const pause = () => { paused = true; if (progressBar) progressBar.style.width = getComputedStyle(progressBar).width; };
  const resume = () => { paused = false; restart(); };
  carousel.addEventListener('mouseenter', pause);
  carousel.addEventListener('mouseleave', resume);
  carousel.addEventListener('focusin', pause);
  carousel.addEventListener('focusout', resume);

  // Touch swipe (basic)
  let sx = 0;
  carousel.addEventListener('touchstart', (e) => { sx = e.touches[0].clientX; }, { passive: true });
  carousel.addEventListener('touchend', (e) => {
    const dx = e.changedTouches[0].clientX - sx;
    if (Math.abs(dx) > 40) (dx < 0 ? nextSlide() : prevSlide());
  });

  restart();
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
