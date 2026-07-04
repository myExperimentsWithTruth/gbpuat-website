// Minimal progressive enhancement. No framework.

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
