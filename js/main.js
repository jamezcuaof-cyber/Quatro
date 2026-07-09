/* ── Custom Cursor ── */
const cursorDot  = document.getElementById('cursor-dot');
const cursorRing = document.getElementById('cursor-ring');

if (cursorDot && cursorRing) {
  let rx = 0, ry = 0;
  document.addEventListener('mousemove', e => {
    cursorDot.style.transform  = `translate(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%))`;
    rx += (e.clientX - rx) * 0.12;
    ry += (e.clientY - ry) * 0.12;
  });
  (function loop() {
    cursorRing.style.transform = `translate(${rx}px,${ry}px)`;
    requestAnimationFrame(loop);
  })();
  document.querySelectorAll('a,button,[data-cursor]').forEach(el => {
    el.addEventListener('mouseenter', () => { cursorRing.classList.add('expand'); });
    el.addEventListener('mouseleave', () => { cursorRing.classList.remove('expand'); });
  });
}

/* ── Scroll Progress Bar ── */
const progressBar = document.querySelector('.progress-bar');
if (progressBar) {
  window.addEventListener('scroll', () => {
    const pct = window.scrollY / (document.body.scrollHeight - window.innerHeight);
    progressBar.style.transform = `scaleX(${pct})`;
  }, { passive: true });
}

/* ── Navbar ── */
const navbar = document.querySelector('.navbar');
if (navbar) {
  const alwaysScrolled = navbar.classList.contains('scrolled');
  const onScroll = () => {
    navbar.classList.toggle('scrolled', alwaysScrolled || window.scrollY > 40);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ── Mobile Hamburger ── */
const hamburger = document.querySelector('.hamburger');
const navLinks  = document.querySelector('.nav-links');
if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
  });
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
    });
  });
}

/* ── Scroll Reveal ── */
const revealEls = document.querySelectorAll('.reveal, .reveal-left');
if (revealEls.length) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  revealEls.forEach(el => io.observe(el));
}

/* ── Hero Parallax ── */
const heroMedia = document.querySelector('.hero-media');
if (heroMedia) {
  window.addEventListener('scroll', () => {
    heroMedia.style.transform = `scale(1.08) translateY(${window.scrollY * 0.25}px)`;
  }, { passive: true });
}

/* ── Animated Counters ── */
function animateCounter(el) {
  const target = parseFloat(el.dataset.target);
  const suffix = el.dataset.suffix || '';
  const duration = 1800;
  const start = performance.now();
  const isFloat = String(target).includes('.');
  (function tick(now) {
    const p = Math.min((now - start) / duration, 1);
    const ease = 1 - Math.pow(1 - p, 4);
    const val = target * ease;
    const num = isFloat ? val.toFixed(1) : Math.round(val).toLocaleString('es-MX');
    el.textContent = num + suffix;
    if (p < 1) requestAnimationFrame(tick);
  })(start);
}

const counterEls = document.querySelectorAll('.stat-num[data-target]');
if (counterEls.length) {
  const cio = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        animateCounter(e.target);
        cio.unobserve(e.target);
      }
    });
  }, { threshold: 0.5 });
  counterEls.forEach(el => cio.observe(el));
}

/* ── Project Filter ── */
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('[data-category]');
if (filterBtns.length) {
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      projectCards.forEach(card => {
        const show = filter === 'all' || card.dataset.category === filter;
        card.style.opacity = show ? '1' : '0.2';
        card.style.pointerEvents = show ? '' : 'none';
      });
    });
  });
}

/* ── Contact Form ── */
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    const btn = contactForm.querySelector('[type=submit]');
    const msg = contactForm.querySelector('.success-msg');
    btn.disabled = true;
    btn.textContent = 'Enviando…';
    setTimeout(() => {
      btn.textContent = 'Enviado ✓';
      if (msg) msg.classList.add('show');
    }, 1200);
  });
}

/* ── Magnetic Buttons ── */
document.querySelectorAll('.btn-primary').forEach(btn => {
  btn.addEventListener('mousemove', e => {
    const r = btn.getBoundingClientRect();
    const dx = e.clientX - (r.left + r.width / 2);
    const dy = e.clientY - (r.top  + r.height / 2);
    btn.style.transform = `translate(${dx * 0.18}px, ${dy * 0.18}px)`;
  });
  btn.addEventListener('mouseleave', () => {
    btn.style.transform = '';
  });
});
