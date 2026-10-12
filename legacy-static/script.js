/* Dharmendra Sharma · Portfolio
   Small, dependency-free interactions. */
(function () {
  'use strict';

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- theme ---------- */
  const root = document.documentElement;
  const toggle = $('#themeToggle');
  const stored = (() => { try { return localStorage.getItem('theme'); } catch (e) { return null; } })();
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const applyTheme = (t) => {
    root.setAttribute('data-theme', t);
    $('meta[name="theme-color"]').setAttribute('content', t === 'dark' ? '#121317' : '#f3eee4');
  };
  applyTheme(stored || (prefersDark ? 'dark' : 'light'));
  toggle.addEventListener('click', () => {
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    try { localStorage.setItem('theme', next); } catch (e) { /* ignore */ }
  });

  /* ---------- mobile nav ---------- */
  const burger = $('#navBurger');
  const links = $('#navLinks');
  const closeNav = () => { links.classList.remove('is-open'); burger.setAttribute('aria-expanded', 'false'); };
  burger.addEventListener('click', () => {
    const open = links.classList.toggle('is-open');
    burger.setAttribute('aria-expanded', String(open));
  });
  $$('a', links).forEach(a => a.addEventListener('click', closeNav));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeNav(); });

  /* ---------- reveal on scroll ---------- */
  const revealEls = $$('.reveal');
  if ('IntersectionObserver' in window && !reduceMotion) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(en => {
        if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    revealEls.forEach((el, i) => { el.style.transitionDelay = `${Math.min(i % 6, 5) * 60}ms`; io.observe(el); });
  } else {
    revealEls.forEach(el => el.classList.add('is-in'));
  }

  /* ---------- route: draw the line, drive the parcel ---------- */
  const route = $('#routeMap');
  const routeLine = $('#routeLine');
  const routePath = $('#routePath');
  const parcel = $('#routeParcel');
  if (route && routeLine && routePath && parcel) {
    const len = routePath.getTotalLength();
    routeLine.style.strokeDasharray = len;
    routeLine.style.strokeDashoffset = reduceMotion ? 0 : len;
    const place = (t) => {
      const pt = routePath.getPointAtLength(len * t);
      parcel.setAttribute('transform', `translate(${pt.x.toFixed(1)} ${pt.y.toFixed(1)})`);
    };
    const play = () => {
      route.classList.add('is-in');
      if (reduceMotion) { place(1); return; }
      const dur = 2200, delay = 200, start = performance.now() + delay;
      const ease = (p) => p < .5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2;
      const tick = (now) => {
        const p = Math.max(0, Math.min(1, (now - start) / dur));
        const e = ease(p);
        routeLine.style.strokeDashoffset = len * (1 - e);
        place(e);
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };
    if ('IntersectionObserver' in window) {
      const rio = new IntersectionObserver((entries) => {
        entries.forEach(en => { if (en.isIntersecting) { play(); rio.disconnect(); } });
      }, { threshold: 0.35 });
      rio.observe(route);
    } else { play(); }
  }

  /* ---------- counters ---------- */
  const counters = $$('[data-count]');
  const runCounter = (el) => {
    const target = parseInt(el.dataset.count, 10);
    const suffix = el.dataset.suffix || '';
    if (reduceMotion) { el.textContent = target + suffix; return; }
    const dur = 1100; const start = performance.now();
    const tick = (now) => {
      const p = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };
  if ('IntersectionObserver' in window) {
    const cio = new IntersectionObserver((entries) => {
      entries.forEach(en => { if (en.isIntersecting) { runCounter(en.target); cio.unobserve(en.target); } });
    }, { threshold: 0.5 });
    counters.forEach(c => cio.observe(c));
  } else {
    counters.forEach(runCounter);
  }

  /* ---------- nav scroll-spy ---------- */
  const navAnchors = $$('.nav__links a:not(.nav__cta)');
  const sections = navAnchors.map(a => $(a.getAttribute('href'))).filter(Boolean);
  if ('IntersectionObserver' in window && sections.length) {
    const sio = new IntersectionObserver((entries) => {
      entries.forEach(en => {
        if (!en.isIntersecting) return;
        navAnchors.forEach(a => a.classList.toggle('is-active', a.getAttribute('href') === '#' + en.target.id));
      });
    }, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });
    sections.forEach(s => sio.observe(s));
  }

  /* ---------- tracking: one open stop at a time on small screens ---------- */
  const stops = $$('.stop__card');
  stops.forEach(d => d.addEventListener('toggle', () => {
    if (d.open && window.innerWidth < 700) stops.forEach(o => { if (o !== d) o.open = false; });
  }));

  /* ---------- footer year ---------- */
  $('#year').textContent = new Date().getFullYear();
})();
