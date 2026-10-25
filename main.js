'use strict';
/* ═══════════════════════════════════════════════════════
   SMILEINDIA — main.js
   Pure Vanilla JavaScript · Dynamic & Interactive
═══════════════════════════════════════════════════════ */

/* ── LOADER ─────────────────────────────────────────── */
window.addEventListener('load', () => {
  setTimeout(() => {
    const loader = document.getElementById('loader');
    if (loader) loader.classList.add('hidden');
  }, 1900);
});

/* ── CUSTOM CURSOR ──────────────────────────────────── */
const cursor   = document.getElementById('custom-cursor');
const follower = document.getElementById('cursor-follower');
let mouseX = 0, mouseY = 0, followerX = 0, followerY = 0;

if (window.matchMedia('(hover: hover)').matches) {
  document.addEventListener('mousemove', e => {
    mouseX = e.clientX; mouseY = e.clientY;
    cursor.style.left = mouseX + 'px';
    cursor.style.top  = mouseY + 'px';
  });
  function animateFollower() {
    followerX += (mouseX - followerX) * 0.14;
    followerY += (mouseY - followerY) * 0.14;
    follower.style.left = followerX + 'px';
    follower.style.top  = followerY + 'px';
    requestAnimationFrame(animateFollower);
  }
  animateFollower();
}

/* ── SCROLL PROGRESS ────────────────────────────────── */
const progressBar = document.getElementById('scroll-progress');
window.addEventListener('scroll', () => {
  const pct = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
  if (progressBar) progressBar.style.width = pct + '%';
}, { passive: true });

/* ── NAVBAR SCROLL ──────────────────────────────────── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 30);
}, { passive: true });

/* ── MOBILE MENU ────────────────────────────────────── */
const menuBtn = document.getElementById('menu-btn');
const mainNav = document.getElementById('main-nav');
menuBtn.addEventListener('click', () => {
  const open = mainNav.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', open);
  const [l1, l2, l3] = menuBtn.querySelectorAll('i');
  if (open) {
    l1.style.transform = 'translateY(7px) rotate(45deg)';
    l2.style.opacity = '0';
    l3.style.transform = 'translateY(-7px) rotate(-45deg)';
  } else {
    l1.style.transform = l2.style.opacity = l3.style.transform = '';
    l2.style.opacity = '';
  }
});
mainNav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  mainNav.classList.remove('open');
  menuBtn.querySelectorAll('i').forEach(i => { i.style.transform = ''; i.style.opacity = ''; });
}));

/* ── REVEAL ON SCROLL ───────────────────────────────── */
const revealEls = document.querySelectorAll('.reveal');
const revealObs = new IntersectionObserver(entries => {
  entries.forEach((entry, i) => {
    if (!entry.isIntersecting) return;
    setTimeout(() => entry.target.classList.add('visible'), i * 60);
    revealObs.unobserve(entry.target);
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
revealEls.forEach(el => revealObs.observe(el));

/* ── FLOATING PARTICLES ─────────────────────────────── */
function createParticles() {
  const container = document.getElementById('particles');
  if (!container) return;
  for (let i = 0; i < 18; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const size = Math.random() * 10 + 4;
    p.style.cssText = `
      width:${size}px; height:${size}px;
      left:${Math.random() * 100}%;
      bottom:-${size}px;
      animation-duration:${Math.random() * 12 + 8}s;
      animation-delay:${Math.random() * 8}s;
      opacity:${Math.random() * 0.2 + 0.05};
    `;
    container.appendChild(p);
  }
}
createParticles();

/* ── TYPEWRITER EFFECT ──────────────────────────────── */
(function typewriter() {
  const el = document.getElementById('typed-word');
  if (!el) return;
  const words = ['Confident', 'Beautiful', 'Radiant', 'Dazzling', 'Perfect', 'Stunning'];
  let wi = 0, ci = 0, deleting = false;
  function type() {
    const word = words[wi];
    el.textContent = deleting ? word.slice(0, ci--) : word.slice(0, ci++);
    el.style.borderRight = '3px solid #F4A62A';
    if (!deleting && ci > word.length) {
      setTimeout(() => { deleting = true; type(); }, 1800);
      return;
    }
    if (deleting && ci < 0) {
      deleting = false; ci = 0; wi = (wi + 1) % words.length;
    }
    setTimeout(type, deleting ? 55 : 100);
  }
  setTimeout(type, 2200);
})();

/* ── COUNTER ANIMATION ──────────────────────────────── */
function animateCounter(el, target, suffix = '') {
  const dur = 2000, start = performance.now();
  function update(now) {
    const t = Math.min((now - start) / dur, 1);
    const ease = 1 - Math.pow(1 - t, 3);
    const val = Math.round(target * ease);
    el.textContent = val >= 1000 ? val.toLocaleString('en-IN') + suffix : val + suffix;
    if (t < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

const statsStrip = document.querySelector('.stats-strip');
if (statsStrip) {
  const counters = [
    { el: statsStrip.querySelectorAll('strong')[0], target: 18, suffix: '+' },
    { el: statsStrip.querySelectorAll('strong')[1], target: 28000, suffix: '+' },
    { el: statsStrip.querySelectorAll('strong')[2], target: 15, suffix: '+' },
    { el: statsStrip.querySelectorAll('strong')[3], target: 150, suffix: '+' },
  ];
  let started = false;
  new IntersectionObserver(entries => {
    if (entries[0].isIntersecting && !started) {
      started = true;
      counters.forEach(({ el, target, suffix }) => el && animateCounter(el, target, suffix));
    }
  }, { threshold: 0.5 }).observe(statsStrip);
}

/* ── BEFORE / AFTER SLIDER ──────────────────────────── */
const compareRange = document.getElementById('compare-range');
const beforeDiv    = document.getElementById('before-div');
const compareLine  = document.getElementById('compare-line');

function setSlider(val) {
  const pct = val + '%';
  if (beforeDiv)   beforeDiv.style.width  = pct;
  if (compareLine) compareLine.style.left = pct;
}
if (compareRange) {
  compareRange.addEventListener('input', e => setSlider(e.target.value));
  const compareEl = document.getElementById('compare-slider');
  let drag = false;
  const getVal = x => {
    const r = compareEl.getBoundingClientRect();
    return Math.round(Math.max(0, Math.min((x - r.left) / r.width, 1)) * 100);
  };
  compareEl.addEventListener('mousedown',  e => { drag = true; setSlider(getVal(e.clientX)); compareRange.value = getVal(e.clientX); });
  window.addEventListener('mousemove',     e => { if (drag) { setSlider(getVal(e.clientX)); compareRange.value = getVal(e.clientX); } });
  window.addEventListener('mouseup',       ()  => { drag = false; });
  compareEl.addEventListener('touchstart', ()  => { drag = true; }, { passive: true });
  compareEl.addEventListener('touchmove',  e  => {
    if (!drag) return;
    const v = getVal(e.touches[0].clientX);
    setSlider(v); compareRange.value = v;
  }, { passive: true });
  compareEl.addEventListener('touchend',   ()  => { drag = false; });
}

/* ── ACCORDION ──────────────────────────────────────── */
function toggleAccordion(btn) {
  const item = btn.closest('.accordion-item');
  const accordion = item.closest('.accordion');
  const isOpen = item.classList.contains('open');
  accordion.querySelectorAll('.accordion-item.open').forEach(el => {
    el.classList.remove('open');
    const b = el.querySelector('b'); if (b) b.textContent = '+';
  });
  if (!isOpen) {
    item.classList.add('open');
    const b = btn.querySelector('b'); if (b) b.textContent = '−';
  }
}

/* ── CAROUSEL SCROLL ────────────────────────────────── */
function scrollCarousel(id, dir) {
  const el = document.getElementById(id);
  if (!el) return;
  const card = el.querySelector('*');
  const w = card ? card.offsetWidth + 20 : 340;
  el.scrollBy({ left: dir * w, behavior: 'smooth' });
}

/* ── AUTO-SCROLL REVIEWS ────────────────────────────── */
(function () {
  const rc = document.getElementById('review-carousel');
  if (!rc) return;
  let paused = false;
  rc.addEventListener('mouseenter', () => paused = true);
  rc.addEventListener('mouseleave', () => paused = false);
  setInterval(() => {
    if (paused) return;
    if (rc.scrollLeft >= rc.scrollWidth - rc.clientWidth - 10)
      rc.scrollTo({ left: 0, behavior: 'smooth' });
    else rc.scrollBy({ left: 310, behavior: 'smooth' });
  }, 3800);
})();

/* ── COUNTDOWN TIMER ────────────────────────────────── */
(function countdown() {
  const end = new Date();
  end.setDate(end.getDate() + 5); // 5 days from now
  end.setHours(23, 59, 59, 0);

  function tick() {
    const diff = end - Date.now();
    if (diff <= 0) return;
    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    const fmt = n => String(n).padStart(2, '0');
    const days = document.getElementById('cd-days');
    const hrs  = document.getElementById('cd-hrs');
    const min  = document.getElementById('cd-min');
    const sec  = document.getElementById('cd-sec');
    if (days) days.textContent = fmt(d);
    if (hrs)  hrs.textContent  = fmt(h);
    if (min)  min.textContent  = fmt(m);
    if (sec)  sec.textContent  = fmt(s);
  }
  tick();
  setInterval(tick, 1000);
})();

/* ── CARD TILT EFFECT ───────────────────────────────── */
document.querySelectorAll('[data-tilt]').forEach(card => {
  card.addEventListener('mousemove', e => {
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left - r.width / 2) / r.width;
    const y = (e.clientY - r.top - r.height / 2) / r.height;
    card.style.transform = `perspective(900px) rotateY(${x * 4}deg) rotateX(${-y * 4}deg) translateY(-6px)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});

/* ── MODAL ──────────────────────────────────────────── */
const modalBackdrop = document.getElementById('modal-backdrop');
function openModal() {
  modalBackdrop.style.display = 'grid';
  document.body.style.overflow = 'hidden';
}
function closeModal() {
  modalBackdrop.style.display = 'none';
  document.body.style.overflow = '';
}
function closeModalOnBackdrop(e) {
  if (e.target === modalBackdrop) closeModal();
}
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && modalBackdrop.style.display !== 'none') closeModal();
});

/* ── WHATSAPP ───────────────────────────────────────── */
function openWhatsApp() {
  const msg = encodeURIComponent('Namaste! 🙏 I would like to book a FREE dental consultation at SmileIndia.');
  window.open('https://wa.me/919876543210?text=' + msg, '_blank');
}

/* ── FORM SUBMISSIONS ───────────────────────────────── */
function handleFormSubmit(e) { e.preventDefault(); showToast(); }
function handleModalSubmit(e) { e.preventDefault(); closeModal(); showToast(); }

function showToast() {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.style.display = 'block';
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transition = 'opacity .5s';
    setTimeout(() => { toast.style.display = 'none'; toast.style.opacity = ''; toast.style.transition = ''; }, 500);
  }, 4000);
}

/* ── SMOOTH ANCHOR SCROLL ───────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const offset = (navbar ? navbar.offsetHeight : 78) + 16;
    window.scrollTo({ top: target.getBoundingClientRect().top + scrollY - offset, behavior: 'smooth' });
  });
});

/* ── PARALLAX HERO ──────────────────────────────────── */
const hero = document.querySelector('.hero');
if (hero && window.matchMedia('(min-width:760px)').matches) {
  window.addEventListener('scroll', () => {
    hero.style.backgroundPositionY = `calc(28% + ${scrollY * 0.25}px)`;
  }, { passive: true });
}

/* ── ACTIVE NAV LINK ON SCROLL ──────────────────────── */
const sections = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('nav a[href^="#"]');
const sectionObs = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + entry.target.id));
  });
}, { rootMargin: '-40% 0px -55% 0px' });
sections.forEach(s => sectionObs.observe(s));

/* ── INIT ───────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  // Open first accordion items
  document.querySelectorAll('.accordion').forEach(acc => {
    const first = acc.querySelector('.accordion-item');
    if (first && !first.classList.contains('open')) {
      first.classList.add('open');
      const b = first.querySelector('b'); if (b) b.textContent = '−';
    }
  });
  console.log('🦷 SmileIndia — भारत का सबसे भरोसेमंद Dental Studio — Loaded');
});
