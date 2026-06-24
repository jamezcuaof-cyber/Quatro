/* ===== LIGHTBOX ===== */
(function () {
  const lightbox = document.getElementById('lightbox');
  const lbImg    = document.getElementById('lb-img');
  const lbTitle  = document.getElementById('lb-title');
  const lbSub    = document.getElementById('lb-sub');
  const lbPrev   = document.getElementById('lb-prev');
  const lbNext   = document.getElementById('lb-next');
  const lbClose  = document.getElementById('lb-close');
  const lbDots   = document.getElementById('lb-dots');
  if (!lightbox) return;

  const items = [...document.querySelectorAll('.gallery-item[data-src]')];
  let current = 0;

  function open(idx) {
    current = idx; render();
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function close() {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  }
  function render() {
    const el = items[current];
    lbImg.src = el.dataset.src;
    lbTitle.textContent = el.dataset.title || '';
    lbSub.textContent   = el.dataset.sub   || '';
    lbDots.innerHTML = items.map((_, i) =>
      `<div class="lightbox-dot${i === current ? ' active' : ''}" data-i="${i}"></div>`
    ).join('');
    lbDots.querySelectorAll('.lightbox-dot').forEach(d => {
      d.addEventListener('click', () => { current = +d.dataset.i; render(); });
    });
  }
  function prev() { current = (current - 1 + items.length) % items.length; render(); }
  function next() { current = (current + 1) % items.length; render(); }

  items.forEach((el, i) => el.addEventListener('click', () => open(i)));
  if (lbPrev) lbPrev.addEventListener('click', prev);
  if (lbNext) lbNext.addEventListener('click', next);
  if (lbClose) lbClose.addEventListener('click', close);
  lightbox.addEventListener('click', e => { if (e.target === lightbox) close(); });
  document.addEventListener('keydown', e => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'ArrowLeft')  prev();
    if (e.key === 'ArrowRight') next();
    if (e.key === 'Escape')     close();
  });
})();

/* ===== INTERACTIVE MAP ===== */
(function () {
  const destItems = document.querySelectorAll('.map-dest-item');
  const mapPins   = document.querySelectorAll('.map-pin');
  const infoCard  = document.getElementById('map-info-card');
  if (!destItems.length) return;

  const data = {
    bacalar: {
      tag: 'Hotels',
      title: 'Bacalar, Quintana Roo',
      desc: 'Destino emergente de alto crecimiento en el Caribe mexicano. Proyecto flagship: Wayak Bacalar, resort boutique a orillas del Lago de los 7 Colores.',
    },
    loscabos: {
      tag: 'Residential · Retail',
      title: 'Los Cabos, BCS',
      desc: 'Mercado de lujo con demanda internacional. Proyectos activos: Oasis, La Noria, Tortuga Bay, Casa Nima y la plaza comercial Casa Victoria.',
    },
    cdmx: {
      tag: 'Airbnb',
      title: 'Ciudad de México',
      desc: 'Oficina principal y hub operativo. Propiedades Airbnb: Casa Oliva y Casa Miravalle, diseñadas para el viajero urbano contemporáneo.',
    },
  };

  function activate(id) {
    destItems.forEach(el => el.classList.toggle('active', el.dataset.dest === id));
    mapPins.forEach(p => p.classList.toggle('active', p.dataset.dest === id));
    if (infoCard && data[id]) {
      const d = data[id];
      infoCard.innerHTML = `<span class="proj-tag">${d.tag}</span><h4>${d.title}</h4><p>${d.desc}</p>`;
      infoCard.classList.add('visible');
    }
  }

  destItems.forEach(el => el.addEventListener('click', () => activate(el.dataset.dest)));
  mapPins.forEach(p => p.addEventListener('click', () => activate(p.dataset.dest)));
  activate('bacalar');
})();

/* ===== PROJECT FILTER ===== */
(function () {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const sections   = document.querySelectorAll('[data-category]');
  if (!filterBtns.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      sections.forEach(s => {
        const show = filter === 'all' || s.dataset.category === filter;
        s.style.display = show ? '' : 'none';
      });
    });
  });
})();
