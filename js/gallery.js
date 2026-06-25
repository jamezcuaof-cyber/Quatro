/* ===== PROJECT DATA ===== */
const PROJECTS = [
  {
    id: 'wayak',
    category: 'hotel',
    tag: 'Hotel · Bacalar, QR',
    title: 'Wayak Bacalar',
    thumb: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=900&q=80',
    desc: 'Boutique resort a orillas del Lago de Bacalar — el Lago de los 7 Colores. Arquitectura que dialoga con el entorno natural caribeño, diseñada para el viajero contemporáneo que busca lujo genuino y conexión con la naturaleza.',
    specs: [
      { label: 'Superficie', value: '33 hectáreas' },
      { label: 'Frente al lago', value: '500 metros' },
      { label: 'Destino', value: 'Bacalar, Quintana Roo' },
      { label: 'Estatus', value: 'En desarrollo · 2024–2028' },
    ],
    images: [
      { src: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1400&q=90', sub: 'Vista al Lago de los 7 Colores' },
      { src: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1400&q=90', sub: 'Alberca infinita' },
      { src: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=1400&q=90', sub: 'Suite lago' },
      { src: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1400&q=90', sub: 'Restaurante' },
      { src: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1400&q=90', sub: 'Embarcadero privado' },
    ],
  },
  {
    id: 'cabo-blanco',
    category: 'residencial',
    tag: 'Residencial & Hotel · East Cape, BCS',
    title: 'Cabo Blanco East Cape',
    thumb: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=80',
    desc: 'Desarrollo maestro de 150 hectáreas con 700 metros de frente de playa en East Cape, Baja California. Uno de los últimos frentes costeros vírgenes de México, integrando residencias de lujo, hotelería y experiencias de naturaleza.',
    specs: [
      { label: 'Superficie', value: '150 hectáreas' },
      { label: 'Frente de playa', value: '700 metros' },
      { label: 'Destino', value: 'East Cape, BCS' },
      { label: 'Estatus', value: 'En desarrollo · 2022–2030' },
    ],
    images: [
      { src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1400&q=90', sub: 'Frente de playa virgen' },
      { src: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1400&q=90', sub: 'Vista al Mar de Cortés' },
      { src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&q=90', sub: 'Concepto residencial' },
    ],
  },
  {
    id: 'tortuga-bay',
    category: 'residencial',
    tag: 'Departamentos · San José del Cabo',
    title: 'Tortuga Bay',
    thumb: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=900&q=80',
    desc: '92 departamentos beachfront en San José del Cabo. Desarrollo residencial de 27,650 m² frente al Pacífico, con amenidades de resort y acceso directo a la playa.',
    specs: [
      { label: 'Unidades', value: '92 departamentos' },
      { label: 'Superficie', value: '27,650 m²' },
      { label: 'Destino', value: 'San José del Cabo, BCS' },
      { label: 'Estatus', value: 'En construcción · 2023–2026' },
    ],
    images: [
      { src: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=1400&q=90', sub: 'Fachada beachfront' },
      { src: 'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=1400&q=90', sub: 'Interiores' },
      { src: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1400&q=90', sub: 'Vista al Pacífico' },
    ],
  },
  {
    id: 'casa-nima',
    category: 'residencial',
    tag: 'Departamentos · San José del Cabo',
    title: 'Casa Nima',
    thumb: 'images/casa-nima/photo-7.webp',
    desc: '147 condominios de alta gama en San José del Cabo. Desarrollo de 18,250 m² en el corredor turístico-residencial más dinámico de Los Cabos.',
    specs: [
      { label: 'Unidades', value: '147 condominios' },
      { label: 'Superficie', value: '18,250 m²' },
      { label: 'Destino', value: 'San José del Cabo, BCS' },
      { label: 'Estatus', value: 'Entregado · 2022–2026' },
    ],
    images: [
      { src: 'images/casa-nima/photo-7.webp', sub: 'Vista exterior · alberca' },
      { src: 'images/casa-nima/photo-6.webp', sub: 'Vista aérea' },
      { src: 'images/casa-nima/photo-5.webp', sub: 'Interior · sala' },
      { src: 'images/casa-nima/photo-8.webp', sub: 'Terraza rooftop' },
    ],
  },
  {
    id: 'oasis',
    category: 'residencial',
    tag: 'Casa · Los Cabos, BCS',
    title: 'Oasis 17',
    thumb: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80',
    desc: 'Casa de autor en Los Cabos con acceso privado al mar. Arquitectura que responde al paisaje desértico del Mar de Cortés: materiales locales, vistas a 180 grados y una alberca que se funde con el horizonte.',
    specs: [
      { label: 'Tipo', value: 'Casa residencial' },
      { label: 'Acceso', value: 'Playa privada' },
      { label: 'Destino', value: 'Los Cabos, BCS' },
      { label: 'Estatus', value: 'Activo' },
    ],
    images: [
      { src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&q=90', sub: 'Fachada principal' },
      { src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1400&q=90', sub: 'Piscina infinita' },
      { src: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1400&q=90', sub: 'Vista al mar' },
    ],
  },
  {
    id: 'la-noria-116',
    category: 'residencial',
    tag: 'Casa · Los Cabos, BCS',
    title: 'La Noria 116',
    thumb: 'images/la-noria-116/photo-1.webp',
    desc: 'Residencia de diseño contemporáneo en Los Cabos. Espacios interiores que fluyen hacia el exterior, conectando cada ambiente con el paisaje natural del desierto y el mar.',
    specs: [
      { label: 'Tipo', value: 'Casa residencial' },
      { label: 'Estilo', value: 'Contemporáneo' },
      { label: 'Destino', value: 'Los Cabos, BCS' },
      { label: 'Estatus', value: 'Activo' },
    ],
    images: [
      { src: 'images/la-noria-116/photo-1.webp', sub: 'Fachada principal' },
      { src: 'images/la-noria-116/photo-3.webp', sub: 'Vista lateral' },
      { src: 'images/la-noria-116/photo-4.webp', sub: 'Vista al Mar de Cortés' },
      { src: 'images/la-noria-116/photo-2.png', sub: 'Planta arquitectónica' },
    ],
  },
  {
    id: 'la-noria-129',
    category: 'residencial',
    tag: 'Casa · Los Cabos, BCS',
    title: 'La Noria 129',
    thumb: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900&q=80',
    desc: 'Segunda residencia en el mismo corredor premium de Los Cabos. Arquitectura que responde al entorno desértico con materiales naturales, patios interiores y vistas al paisaje del Mar de Cortés.',
    specs: [
      { label: 'Tipo', value: 'Casa residencial' },
      { label: 'Estilo', value: 'Contemporáneo' },
      { label: 'Destino', value: 'Los Cabos, BCS' },
      { label: 'Estatus', value: 'Activo' },
    ],
    images: [
      { src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1400&q=90', sub: 'Exterior' },
      { src: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1400&q=90', sub: 'Alberca' },
      { src: 'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=1400&q=90', sub: 'Sala principal' },
    ],
  },
  {
    id: 'victoria-san-jose',
    category: 'hotel',
    tag: 'Hotel Boutique · San José del Cabo, BCS',
    title: 'Casa Victoria',
    thumb: 'images/victoria-san-jose/photo-1.jpeg',
    desc: 'Hotel boutique de arquitectura colonial en San José del Cabo. Diseñado por Gomez Crespo Arquitectos, integra residencias, retail y espacios de hospitalidad en el corazón del pueblo.',
    specs: [
      { label: 'Arquitectos', value: 'Gomez Crespo Arquitectos' },
      { label: 'Tipo', value: 'Hotel boutique' },
      { label: 'Destino', value: 'San José del Cabo, BCS' },
      { label: 'Estatus', value: 'En desarrollo' },
    ],
    images: [
      { src: 'images/victoria-san-jose/photo-1.jpeg', sub: 'Corredor principal' },
      { src: 'images/victoria-san-jose/photo-2.jpeg', sub: 'Fachada lateral' },
      { src: 'images/victoria-san-jose/photo-3.jpeg', sub: 'Entrada' },
      { src: 'images/victoria-san-jose/photo-4.jpeg', sub: 'Calle interior' },
      { src: 'images/victoria-san-jose/photo-5.jpeg', sub: 'Vista esquina' },
    ],
  },
  {
    id: 'casa-oliva',
    category: 'hotel',
    tag: 'Hotel · Ciudad de México',
    title: 'Casa Oliva',
    thumb: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&q=80',
    desc: 'Casa de diseño con carácter propio. Espacios amplios y luminosos que combinan materiales naturales con comodidades de primera. Una experiencia de hospedaje que va más allá del hotel convencional.',
    specs: [
      { label: 'Tipo', value: 'Airbnb' },
      { label: 'Capacidad', value: 'Hasta 8 personas' },
      { label: 'Destino', value: 'Ciudad de México' },
      { label: 'Estatus', value: 'Activo' },
    ],
    images: [
      { src: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1400&q=90', sub: 'Fachada' },
      { src: 'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=1400&q=90', sub: 'Sala' },
      { src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1400&q=90', sub: 'Terraza' },
    ],
  },
  {
    id: 'casa-miravalle',
    category: 'hotel',
    tag: 'Hotel · Ciudad de México',
    title: 'Casa Miravalle',
    thumb: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=900&q=80',
    desc: 'Vista y privacidad como protagonistas. Casa aislada con panoramas que abren la mente. Diseñada para quienes buscan desconexión sin renunciar al confort urbano.',
    specs: [
      { label: 'Tipo', value: 'Airbnb' },
      { label: 'Característica', value: 'Vistas panorámicas' },
      { label: 'Destino', value: 'Ciudad de México' },
      { label: 'Estatus', value: 'Activo' },
    ],
    images: [
      { src: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1400&q=90', sub: 'Vista exterior' },
      { src: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1400&q=90', sub: 'Sala con vistas' },
      { src: 'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=1400&q=90', sub: 'Recámara principal' },
    ],
  },
  {
    id: 'casa-del-parque',
    category: 'hotel',
    tag: 'Hotel · Ciudad de México',
    title: 'Casa del Parque',
    thumb: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&q=80',
    desc: 'Casa frente a un parque en la Ciudad de México. Combina la vida urbana con la tranquilidad de los espacios verdes. Diseño interior cuidado, luz natural abundante y ubicación inmejorable.',
    specs: [
      { label: 'Tipo', value: 'Airbnb' },
      { label: 'Entorno', value: 'Frente a parque' },
      { label: 'Destino', value: 'Ciudad de México' },
      { label: 'Estatus', value: 'Activo' },
    ],
    images: [
      { src: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1400&q=90', sub: 'Fachada al parque' },
      { src: 'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=1400&q=90', sub: 'Interiores' },
      { src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1400&q=90', sub: 'Jardín' },
    ],
  },
  {
    id: 'luis-cabrera-7',
    category: 'retail',
    tag: 'Plaza Comercial · Roma Norte, CDMX',
    title: 'Luis Cabrera 7',
    thumb: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=900&q=80',
    desc: 'Plaza comercial de barrio en uno de los corredores más vibrantes de la Ciudad de México. Espacios diseñados para el comercio local de carácter en la Colonia Roma.',
    specs: [
      { label: 'Tipo', value: 'Retail' },
      { label: 'Ubicación', value: 'Roma Norte, CDMX' },
      { label: 'Estilo', value: 'Comercio de barrio' },
      { label: 'Estatus', value: 'Activo' },
    ],
    images: [
      { src: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=1400&q=90', sub: 'Fachada Luis Cabrera 7' },
      { src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1400&q=90', sub: 'Local comercial' },
      { src: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1400&q=90', sub: 'Calle Roma Norte' },
    ],
  },
  {
    id: 'amsterdam',
    category: 'retail',
    tag: 'Restaurante · Condesa, CDMX',
    title: 'Amsterdam 76',
    thumb: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=900&q=80',
    desc: 'Restaurante en la icónica Avenida Ámsterdam de la Colonia Condesa. Un espacio gastronómico íntimo con identidad propia en uno de los rincones más queridos de la ciudad.',
    specs: [
      { label: 'Tipo', value: 'Restaurante' },
      { label: 'Ubicación', value: 'Av. Ámsterdam, Condesa' },
      { label: 'Destino', value: 'Ciudad de México' },
      { label: 'Estatus', value: 'Activo' },
    ],
    images: [
      { src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1400&q=90', sub: 'Salón principal' },
      { src: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=1400&q=90', sub: 'Terraza exterior' },
      { src: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1400&q=90', sub: 'Cocina abierta' },
    ],
  },
  {
  {
    id: 'north-enclaves',
    category: 'residencial',
    tag: 'Residencial · Puerto Los Cabos, BCS',
    title: 'North Enclaves',
    thumb: 'images/north-enclaves/photo-3.jpeg',
    desc: 'Residencias de lujo en Puerto Los Cabos bajo la marca Ritz-Carlton. Arquitectura contemporánea de múltiples niveles con terrazas privadas y vistas directas al Mar de Cortés.',
    specs: [
      { label: 'Marca', value: 'Ritz-Carlton' },
      { label: 'Tipo', value: 'Residencial de lujo' },
      { label: 'Destino', value: 'Puerto Los Cabos, BCS' },
      { label: 'Estatus', value: 'En desarrollo' },
    ],
    images: [
      { src: 'images/north-enclaves/photo-3.jpeg', sub: 'Vista aérea · Mar de Cortés' },
      { src: 'images/north-enclaves/photo-1.jpeg', sub: 'Vista frontal' },
      { src: 'images/north-enclaves/photo-2.jpeg', sub: 'Vista lateral' },
    ],
  },
  {
    id: 'student-housing',
    category: 'residencial',
    tag: 'Co-inversión · Estados Unidos',
    title: 'Student Housing EUA',
    thumb: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=900&q=80',
    desc: 'Quatro participa como co-inversionista en un portafolio de vivienda estudiantil en Estados Unidos. 4,721 unidades en 6 estados: Iowa, Mississippi, Georgia, Texas, Washington y Florida. Clase de activo con demanda estructural, alta ocupación y flujos de renta en dólares.',
    specs: [
      { label: 'Total unidades', value: '4,721 unidades' },
      { label: 'Estados', value: 'Iowa · Mississippi · Georgia · Texas · Washington · Florida' },
      { label: 'Rol', value: 'Co-inversionista' },
      { label: 'Moneda', value: 'USD' },
    ],
    images: [
      { src: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1400&q=90', sub: 'Campus universitario' },
      { src: 'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=1400&q=90', sub: 'Unidades residenciales' },
      { src: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1400&q=90', sub: 'Áreas comunes' },
    ],
  },
];

/* ===== RENDER PROJECT LIST ===== */
(function () {
  const list = document.getElementById('projects-list');
  if (!list) return;

  PROJECTS.forEach((p, i) => {
    const even = i % 2 === 1;
    const el = document.createElement('article');
    el.className = 'project-entry reveal';
    el.dataset.project = p.id;
    el.dataset.category = p.category;
    el.innerHTML = `
      <div class="project-entry-img">
        <span class="project-entry-num">${String(i + 1).padStart(2, '0')}</span>
        <img src="${p.thumb}" alt="${p.title}" loading="lazy" />
        <div class="project-entry-overlay"></div>
      </div>
      <div class="project-entry-info">
        <span class="proj-tag">${p.tag}</span>
        <h2>${p.title}</h2>
        <p>${p.desc.slice(0, 160)}${p.desc.length > 160 ? '…' : ''}</p>
        <div class="proj-meta" style="margin-top:0.9rem;">
          ${p.specs[3] ? `<span>${p.specs[3].value}</span>` : ''}
        </div>
        <button class="project-entry-cta">Ver proyecto</button>
      </div>
    `;
    el.addEventListener('click', () => openModal(p.id));
    list.appendChild(el);
  });

  // trigger reveal for newly added elements
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
    });
  }, { threshold: 0.08 });
  list.querySelectorAll('.project-entry').forEach(el => io.observe(el));
})();

/* ===== PROJECT MODAL ===== */
(function () {
  const modal   = document.getElementById('project-modal');
  const pmImg   = document.getElementById('pm-img');
  const pmTag   = document.getElementById('pm-tag');
  const pmTitle = document.getElementById('pm-title');
  const pmDesc  = document.getElementById('pm-desc');
  const pmSpecs = document.getElementById('pm-specs');
  const pmClose = document.getElementById('pm-close');
  const pmPrev  = document.getElementById('pm-prev');
  const pmNext  = document.getElementById('pm-next');
  const pmDots  = document.getElementById('pm-dots');
  if (!modal) return;

  let current = 0;
  let images = [];

  window.openModal = function (id) {
    const p = PROJECTS.find(x => x.id === id);
    if (!p) return;
    images = p.images;
    current = 0;

    pmTag.textContent   = p.tag;
    pmTitle.textContent = p.title;
    pmDesc.textContent  = p.desc;
    pmSpecs.innerHTML = p.specs.map(s => `
      <div>
        <div class="pm-spec-label">${s.label}</div>
        <div class="pm-spec-val">${s.value}</div>
      </div>
    `).join('');

    renderImg();
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  function closeModal() {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  function renderImg() {
    pmImg.classList.add('fading');
    setTimeout(() => {
      pmImg.src = images[current].src;
      pmImg.alt = images[current].sub || '';
      pmImg.classList.remove('fading');
    }, 180);
    pmDots.innerHTML = images.map((_, i) =>
      `<div class="pm-dot${i === current ? ' active' : ''}"></div>`
    ).join('');
    pmDots.querySelectorAll('.pm-dot').forEach((d, i) => {
      d.addEventListener('click', () => { current = i; renderImg(); });
    });
    pmPrev.style.display = images.length > 1 ? '' : 'none';
    pmNext.style.display = images.length > 1 ? '' : 'none';
  }

  pmClose.addEventListener('click', closeModal);
  modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
  pmPrev.addEventListener('click', e => { e.stopPropagation(); current = (current - 1 + images.length) % images.length; renderImg(); });
  pmNext.addEventListener('click', e => { e.stopPropagation(); current = (current + 1) % images.length; renderImg(); });
  document.addEventListener('keydown', e => {
    if (!modal.classList.contains('open')) return;
    if (e.key === 'Escape')      closeModal();
    if (e.key === 'ArrowLeft')  { current = (current - 1 + images.length) % images.length; renderImg(); }
    if (e.key === 'ArrowRight') { current = (current + 1) % images.length; renderImg(); }
  });
})();

/* ===== PROJECT FILTER ===== */
(function () {
  const filterBtns = document.querySelectorAll('.filter-btn');
  if (!filterBtns.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      document.querySelectorAll('.project-entry').forEach(el => {
        const show = filter === 'all' || el.dataset.category === filter;
        el.style.display = show ? '' : 'none';
      });
    });
  });
})();

/* ===== INTERACTIVE MAP ===== */
(function () {
  const destItems = document.querySelectorAll('.map-dest-item');
  const mapPins   = document.querySelectorAll('.map-pin');
  const infoCard  = document.getElementById('map-info-card');
  if (!destItems.length) return;

  const data = {
    bacalar:  { tag: 'Hotels', title: 'Bacalar, Quintana Roo', desc: 'Destino emergente de alto crecimiento. Proyecto flagship: Wayak Bacalar — 33 ha, 500 m frente al Lago de los 7 Colores.' },
    loscabos: { tag: 'Residential · Retail · Hotel', title: 'Los Cabos, BCS', desc: 'Mercado de lujo con demanda internacional sostenida. Proyectos: Oasis, La Noria, Tortuga Bay (92 deptos), Casa Nima (147 deptos), Victoria San José y Cabo Blanco East Cape (150 ha).' },
    cdmx:     { tag: 'Airbnb · Retail · Restaurante', title: 'Ciudad de México', desc: 'Hub operativo principal. Airbnb: Casa Oliva, Casa Miravalle, Casa del Parque. Retail: Luis Cabrera 7 (Roma Norte). Restaurante: Amsterdam (Condesa).' },
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
