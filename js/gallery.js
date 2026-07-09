/* ===== PROJECT DATA ===== */
const PROJECTS = [
  /* ── TORRES / EDIFICIOS DE DEPARTAMENTOS ── */
  {
    id: 'north-enclaves',
    category: 'residencial',
    tag: { es: 'Residencial · Puerto Los Cabos, BCS', en: 'Residential · Puerto Los Cabos, BCS' },
    title: 'North Enclaves',
    thumb: 'images/north-enclaves/photo-3.jpeg',
    desc: {
      es: 'Residencias de lujo en Puerto Los Cabos bajo la marca Ritz-Carlton. Arquitectura contemporánea de múltiples niveles con terrazas privadas y vistas directas al Mar de Cortés.',
      en: 'Luxury residences in Puerto Los Cabos under the Ritz-Carlton brand. Multi-level contemporary architecture with private terraces and direct views of the Sea of Cortez.',
    },
    specs: [
      { label: 'Marca', value: { es: 'Ritz-Carlton', en: 'Ritz-Carlton' } },
      { label: 'Tipo', value: { es: 'Residencial de lujo', en: 'Luxury residential' } },
      { label: 'Destino', value: { es: 'Puerto Los Cabos, BCS', en: 'Puerto Los Cabos, BCS' } },
      { label: 'Estatus', value: { es: 'En construcción · 2022–2026', en: 'Under construction · 2022–2026' } },
    ],
    images: [
      { src: 'images/north-enclaves/photo-3.jpeg', sub: { es: 'Vista aérea · Mar de Cortés', en: 'Aerial view · Sea of Cortez' } },
      { src: 'images/north-enclaves/photo-1.jpeg', sub: { es: 'Vista frontal', en: 'Front view' } },
      { src: 'images/north-enclaves/photo-2.jpeg', sub: { es: 'Vista lateral', en: 'Side view' } },
    ],
  },
  {
    id: 'tortuga-bay',
    category: 'residencial',
    tag: { es: 'Departamentos · San José del Cabo', en: 'Apartments · San José del Cabo' },
    title: 'Tortuga Bay',
    thumb: 'images/tortuga-bay/photo-v2-1.jpeg',
    desc: {
      es: '92 departamentos beachfront en San José del Cabo. Desarrollo residencial de 27,650 m² frente al Pacífico, con amenidades de resort y acceso directo a la playa.',
      en: '92 beachfront apartments in San José del Cabo. A 27,650 m² residential development facing the Pacific, with resort-style amenities and direct beach access.',
    },
    specs: [
      { label: 'Unidades', value: { es: '92 departamentos', en: '92 apartments' } },
      { label: 'Superficie', value: { es: '27,650 m²', en: '27,650 m²' } },
      { label: 'Destino', value: { es: 'San José del Cabo, BCS', en: 'San José del Cabo, BCS' } },
      { label: 'Estatus', value: { es: 'En construcción · 2024–2027', en: 'Under construction · 2024–2027' } },
    ],
    images: [
      { src: 'images/tortuga-bay/photo-v2-1.jpeg', sub: { es: 'Alberca y amenidades', en: 'Pool and amenities' } },
      { src: 'images/tortuga-bay/photo-v2-2.jpeg', sub: { es: 'Vista aérea frente al mar', en: 'Aerial view facing the sea' } },
      { src: 'images/tortuga-bay/photo-new-3.jpeg', sub: { es: 'Recámara con vista al mar', en: 'Bedroom with ocean view' } },
      { src: 'images/tortuga-bay/photo-new-4.jpeg', sub: { es: 'Terraza', en: 'Terrace' } },
    ],
  },
  {
    id: 'casa-nima',
    category: 'residencial',
    tag: { es: 'Departamentos · San José del Cabo', en: 'Apartments · San José del Cabo' },
    title: 'Casa Nima',
    thumb: 'images/casa-nima/photo-7.webp',
    desc: {
      es: '147 condominios de alta gama en San José del Cabo. Desarrollo de 18,250 m² en el corredor turístico-residencial más dinámico de Los Cabos.',
      en: '147 high-end condominiums in San José del Cabo. An 18,250 m² development in the most dynamic tourist-residential corridor of Los Cabos.',
    },
    specs: [
      { label: 'Unidades', value: { es: '147 condominios', en: '147 condominiums' } },
      { label: 'Superficie', value: { es: '18,250 m²', en: '18,250 m²' } },
      { label: 'Destino', value: { es: 'San José del Cabo, BCS', en: 'San José del Cabo, BCS' } },
      { label: 'Estatus', value: { es: 'Entregado · 2022–2026', en: 'Delivered · 2022–2026' } },
    ],
    images: [
      { src: 'images/casa-nima/photo-7.webp', sub: { es: 'Vista exterior · alberca', en: 'Exterior view · pool' } },
      { src: 'images/casa-nima/photo-6.webp', sub: { es: 'Vista aérea', en: 'Aerial view' } },
      { src: 'images/casa-nima/photo-5.webp', sub: { es: 'Interior · sala', en: 'Interior · living room' } },
      { src: 'images/casa-nima/photo-8.webp', sub: { es: 'Terraza rooftop', en: 'Rooftop terrace' } },
    ],
  },
  {
    id: 'cortes-residences',
    category: 'residencial',
    tag: { es: 'Residencial · Madrid, España', en: 'Residential · Madrid, Spain' },
    title: 'Cortes Residences',
    thumb: 'images/cortes-residences/photo-1-landscape.jpeg',
    desc: {
      es: 'Edificio histórico de 1880 meticulosamente rehabilitado en el Barrio de Las Letras, corazón de Madrid. Solo cuatro residencias exclusivas —una por planta— de tres o cuatro recámaras, con acabados contemporáneos que preservan la esencia del Madrid más clásico. A pasos del Paseo del Prado, el Congreso de los Diputados y la mejor oferta cultural y gastronómica de la ciudad.',
      en: "A meticulously restored 1880 historic building in the Barrio de Las Letras, in the heart of Madrid. Just four exclusive residences —one per floor— with three or four bedrooms, featuring contemporary finishes that preserve the essence of classic Madrid. Steps from Paseo del Prado, the Congress of Deputies, and the city's best cultural and dining scene.",
    },
    specs: [
      { label: 'Tipo', value: { es: 'Edificio residencial rehabilitado', en: 'Restored residential building' } },
      { label: 'Unidades', value: { es: '4 residencias (1 por planta)', en: '4 residences (1 per floor)' } },
      { label: 'Recámaras', value: { es: '3 – 4 recámaras', en: '3 – 4 bedrooms' } },
      { label: 'Amenidades', value: { es: 'Sauna · Gimnasio · Masajes · Conserjería 24h', en: 'Sauna · Gym · Massages · 24h Concierge' } },
      { label: 'Destino', value: { es: 'Madrid, España', en: 'Madrid, Spain' } },
      { label: 'Estatus', value: { es: 'Entregado · 2023–2026', en: 'Delivered · 2023–2026' } },
    ],
    images: [
      { src: 'images/cortes-residences/photo-1-landscape.jpeg', sub: { es: 'Fachada del edificio', en: 'Building façade' } },
      { src: 'images/cortes-residences/photo-10.jpeg', sub: { es: 'Sala principal', en: 'Main living room' } },
      { src: 'images/cortes-residences/photo-11.jpeg', sub: { es: 'Espacios interiores', en: 'Interior spaces' } },
      { src: 'images/cortes-residences/photo-14.jpeg', sub: { es: 'Acabados y detalles', en: 'Finishes and details' } },
      { src: 'images/cortes-residences/photo-17.jpeg', sub: { es: 'Espacios de calma', en: 'Spaces for calm' } },
      { src: 'images/cortes-residences/photo-19.jpeg', sub: { es: 'Detalle arquitectónico', en: 'Architectural detail' } },
    ],
  },
  {
    id: 'student-housing',
    category: 'residencial',
    tag: { es: 'Co-inversión · Estados Unidos', en: 'Co-investment · United States' },
    title: 'Student Housing EUA',
    thumb: 'images/student-housing/photo-new-1.jpeg',
    desc: {
      es: 'Quatro participa como co-inversionista en un portafolio de vivienda estudiantil en Estados Unidos. 4,721 unidades en 6 estados: Iowa, Mississippi, Georgia, Texas, Washington y Florida. Clase de activo con demanda estructural, alta ocupación y flujos de renta en dólares.',
      en: 'Quatro participates as a co-investor in a student housing portfolio in the United States. 4,721 units across 6 states: Iowa, Mississippi, Georgia, Texas, Washington, and Florida. An asset class with structural demand, high occupancy, and USD-denominated rental income.',
    },
    specs: [
      { label: 'Total unidades', value: { es: '4,721 unidades', en: '4,721 units' } },
      { label: 'Estados', value: { es: 'Iowa · Mississippi · Georgia · Texas · Washington · Florida', en: 'Iowa · Mississippi · Georgia · Texas · Washington · Florida' } },
      { label: 'Rol', value: { es: 'Co-inversionista', en: 'Co-investor' } },
      { label: 'Moneda', value: { es: 'USD', en: 'USD' } },
      { label: 'Estatus', value: { es: 'Activo · 2020–2026', en: 'Active · 2020–2026' } },
    ],
    images: [
      { src: 'images/student-housing/photo-new-1.jpeg', sub: { es: 'Complejo residencial', en: 'Residential complex' } },
      { src: 'images/student-housing/photo-new-2.jpeg', sub: { es: 'Vista aérea', en: 'Aerial view' } },
      { src: 'images/student-housing/photo-new-3.jpeg', sub: { es: 'Edificio universitario', en: 'University building' } },
    ],
  },
  {
    id: 'cabo-blanco',
    category: 'residencial',
    tag: { es: 'Residencial & Hotel · East Cape, BCS', en: 'Residential & Hotel · East Cape, BCS' },
    title: 'Cabo Blanco East Cape',
    thumb: 'images/cabo-blanco/photo-2.jpeg',
    desc: {
      es: 'Desarrollo maestro de 150 hectáreas con 700 metros de frente de playa en East Cape, Baja California. Colindante con Six Senses, Aman y Four Seasons. Uno de los últimos frentes costeros vírgenes de México, integrando residencias de lujo, hotelería y experiencias de naturaleza.',
      en: 'A 150-hectare master development with 700 meters of beachfront in East Cape, Baja California. Adjacent to Six Senses, Aman, and Four Seasons. One of the last pristine coastlines in Mexico, integrating luxury residences, hospitality, and nature experiences.',
    },
    specs: [
      { label: 'Superficie', value: { es: '150 hectáreas', en: '150 hectares' } },
      { label: 'Frente de playa', value: { es: '700 metros', en: '700 meters' } },
      { label: 'Destino', value: { es: 'East Cape, BCS', en: 'East Cape, BCS' } },
      { label: 'Estatus', value: { es: 'Land Development', en: 'Land Development' } },
    ],
    images: [
      { src: 'images/cabo-blanco/photo-2.jpeg', sub: { es: 'Frente de playa — vista aérea', en: 'Beachfront — aerial view' } },
      { src: 'images/cabo-blanco/photo-1.jpeg', sub: { es: 'Terreno con vistas al mar', en: 'Land with ocean views' } },
    ],
  },
  /* ── HOTELES ── */
  {
    id: 'wayak',
    category: 'hotel',
    tag: { es: 'Hotel · Bacalar, QR', en: 'Hotel · Bacalar, QR' },
    title: 'Wayak Bacalar',
    thumb: 'images/wayak/photo-1.jpeg',
    desc: {
      es: 'Boutique resort a orillas del Lago de Bacalar — el Lago de los 7 Colores. Arquitectura que dialoga con el entorno natural caribeño, diseñada para el viajero contemporáneo que busca lujo genuino y conexión con la naturaleza.',
      en: 'A boutique resort on the shores of Lake Bacalar — the Lake of Seven Colors. Architecture that engages with the Caribbean natural surroundings, designed for the contemporary traveler seeking genuine luxury and a connection with nature.',
    },
    specs: [
      { label: 'Superficie', value: { es: '33 hectáreas', en: '33 hectares' } },
      { label: 'Frente al lago', value: { es: '500 metros', en: '500 meters' } },
      { label: 'Destino', value: { es: 'Bacalar, Quintana Roo', en: 'Bacalar, Quintana Roo' } },
      { label: 'Estatus', value: { es: 'Land Development', en: 'Land Development' } },
    ],
    images: [
      { src: 'images/wayak/photo-1.jpeg', sub: { es: 'Vista aérea — frente al lago', en: 'Aerial view — lakefront' } },
      { src: 'images/wayak/photo-2.jpeg', sub: { es: 'Lago de Bacalar al atardecer', en: 'Lake Bacalar at sunset' } },
    ],
  },
  {
    id: 'casa-oliva',
    category: 'hotel',
    tag: { es: 'Hotel · Ciudad de México', en: 'Hotel · Mexico City' },
    title: 'Casa Oliva',
    thumb: 'images/casa-oliva/photo-2.jpeg',
    desc: {
      es: 'Hotel boutique Art Déco en la Ciudad de México. Edificio histórico restaurado con identidad propia: fachada salmón, herrería artesanal, arte en cada habitación y una terraza que conecta todos los niveles.',
      en: 'An Art Déco boutique hotel in Mexico City. A restored historic building with its own identity: a salmon-colored façade, handcrafted ironwork, art in every room, and a terrace that connects every level.',
    },
    specs: [
      { label: 'Tipo', value: { es: 'Hotel boutique', en: 'Boutique hotel' } },
      { label: 'Estilo', value: { es: 'Art Déco restaurado', en: 'Restored Art Déco' } },
      { label: 'Destino', value: { es: 'Ciudad de México', en: 'Mexico City' } },
      { label: 'Estatus', value: { es: 'Activo', en: 'Active' } },
    ],
    images: [
      { src: 'images/casa-oliva/photo-2.jpeg', sub: { es: 'Fachada Art Déco', en: 'Art Déco façade' } },
      { src: 'images/casa-oliva/photo-1.jpeg', sub: { es: 'Terraza corredor', en: 'Corridor terrace' } },
      { src: 'images/casa-oliva/photo-3.jpeg', sub: { es: 'Habitación', en: 'Room' } },
    ],
  },
  {
    id: 'casa-miravalle',
    category: 'hotel',
    tag: { es: 'Hotel · Ciudad de México', en: 'Hotel · Mexico City' },
    title: 'Casa Miravalle',
    thumb: 'images/casa-miravalle/photo-1.jpeg',
    desc: {
      es: 'Airbnb boutique en la Ciudad de México. Diseño ecléctico con carácter propio: colores vibrantes, patio interior, terraza con pergola de cristal y una sala que invita a quedarse.',
      en: 'A boutique Airbnb in Mexico City. Eclectic design with a character of its own: vibrant colors, an interior courtyard, a terrace with a glass pergola, and a living room that invites you to stay.',
    },
    specs: [
      { label: 'Tipo', value: { es: 'Airbnb', en: 'Airbnb' } },
      { label: 'Característica', value: { es: 'Terraza · Patio interior', en: 'Terrace · Interior courtyard' } },
      { label: 'Destino', value: { es: 'Ciudad de México', en: 'Mexico City' } },
      { label: 'Estatus', value: { es: 'Activo', en: 'Active' } },
    ],
    images: [
      { src: 'images/casa-miravalle/photo-1.jpeg', sub: { es: 'Fachada', en: 'Façade' } },
      { src: 'images/casa-miravalle/photo-4.jpeg', sub: { es: 'Terraza rooftop', en: 'Rooftop terrace' } },
      { src: 'images/casa-miravalle/photo-3.jpeg', sub: { es: 'Sala y cocina', en: 'Living room and kitchen' } },
      { src: 'images/casa-miravalle/photo-2.jpeg', sub: { es: 'Recámara', en: 'Bedroom' } },
    ],
  },
  {
    id: 'casa-del-parque',
    category: 'hotel',
    tag: { es: 'Hotel · Ciudad de México', en: 'Hotel · Mexico City' },
    title: 'Casa del Parque',
    thumb: 'images/casa-del-parque/photo-4.jpeg',
    desc: {
      es: 'Casa frente a un parque en la Ciudad de México. Combina la vida urbana con la tranquilidad de los espacios verdes. Diseño interior cuidado, luz natural abundante y ubicación inmejorable.',
      en: 'A house facing a park in Mexico City. It combines urban life with the tranquility of green spaces. Thoughtful interior design, abundant natural light, and an unbeatable location.',
    },
    specs: [
      { label: 'Tipo', value: { es: 'Airbnb', en: 'Airbnb' } },
      { label: 'Entorno', value: { es: 'Frente a parque', en: 'Facing a park' } },
      { label: 'Destino', value: { es: 'Ciudad de México', en: 'Mexico City' } },
      { label: 'Estatus', value: { es: 'Activo', en: 'Active' } },
    ],
    images: [
      { src: 'images/casa-del-parque/photo-4.jpeg', sub: { es: 'Terraza', en: 'Terrace' } },
      { src: 'images/casa-del-parque/photo-1.jpeg', sub: { es: 'Recámara', en: 'Bedroom' } },
      { src: 'images/casa-del-parque/photo-2.jpeg', sub: { es: 'Patio interior', en: 'Interior courtyard' } },
      { src: 'images/casa-del-parque/photo-3.jpeg', sub: { es: 'Sala', en: 'Living room' } },
    ],
  },
  /* ── CASAS ── */
  {
    id: 'oasis',
    category: 'residencial',
    tag: { es: 'Casa · Los Cabos, BCS', en: 'House · Los Cabos, BCS' },
    title: 'Oasis 17',
    thumb: 'images/oasis-17/photo-2.jpeg',
    desc: {
      es: 'Casa de autor en Los Cabos ubicada sobre uno de los hoyos de golf del campo de Palmilla. Arquitectura que responde al paisaje desértico del Mar de Cortés: materiales locales, vistas a 180 grados y una alberca que se funde con el horizonte.',
      en: 'A signature house in Los Cabos, located on one of the golf holes at the Palmilla course. Architecture that responds to the desert landscape of the Sea of Cortez: local materials, 180-degree views, and a pool that merges with the horizon.',
    },
    specs: [
      { label: 'Tipo', value: { es: 'Casa residencial', en: 'Residential house' } },
      { label: 'Acceso', value: { es: 'Playa privada', en: 'Private beach' } },
      { label: 'Destino', value: { es: 'Los Cabos, BCS', en: 'Los Cabos, BCS' } },
      { label: 'Estatus', value: { es: 'En desarrollo · 2025–2028', en: 'In development · 2025–2028' } },
    ],
    images: [
      { src: 'images/oasis-17/photo-2.jpeg', sub: { es: 'Alberca y acceso', en: 'Pool and access' } },
      { src: 'images/oasis-17/photo-1.jpeg', sub: { es: 'Fachada principal', en: 'Main façade' } },
      { src: 'images/oasis-17/photo-3.jpeg', sub: { es: 'Recámara principal', en: 'Main bedroom' } },
      { src: 'images/oasis-17/photo-4.jpeg', sub: { es: 'Sala y comedor', en: 'Living and dining room' } },
    ],
  },
  {
    id: 'la-noria-116',
    category: 'residencial',
    tag: { es: 'Casa · Los Cabos, BCS', en: 'House · Los Cabos, BCS' },
    title: 'La Noria 116',
    thumb: 'images/la-noria-116/photo-v2-1.jpeg',
    desc: {
      es: 'Residencia de diseño contemporáneo en Los Cabos. Espacios interiores que fluyen hacia el exterior, conectando cada ambiente con el paisaje natural del desierto y el mar.',
      en: 'A contemporary-design residence in Los Cabos. Interior spaces that flow outward, connecting every room with the natural desert and sea landscape.',
    },
    specs: [
      { label: 'Tipo', value: { es: 'Casa residencial', en: 'Residential house' } },
      { label: 'Estilo', value: { es: 'Contemporáneo', en: 'Contemporary' } },
      { label: 'Destino', value: { es: 'Los Cabos, BCS', en: 'Los Cabos, BCS' } },
      { label: 'Estatus', value: { es: 'En construcción · 2024–2027', en: 'Under construction · 2024–2027' } },
    ],
    images: [
      { src: 'images/la-noria-116/photo-v2-1.jpeg', sub: { es: 'Vista aérea', en: 'Aerial view' } },
      { src: 'images/la-noria-116/photo-v2-4.jpeg', sub: { es: 'Jardín y alberca', en: 'Garden and pool' } },
      { src: 'images/la-noria-116/photo-v2-2.jpeg', sub: { es: 'Terraza', en: 'Terrace' } },
      { src: 'images/la-noria-116/photo-v2-3.jpeg', sub: { es: 'Fachada', en: 'Façade' } },
    ],
  },
  {
    id: 'la-noria-129',
    category: 'residencial',
    tag: { es: 'Casa · Los Cabos, BCS', en: 'House · Los Cabos, BCS' },
    title: 'La Noria 129',
    thumb: 'images/la-noria-129/photo-4.jpeg',
    desc: {
      es: 'Segunda residencia en el mismo corredor premium de Los Cabos. Arquitectura que responde al entorno desértico con materiales naturales, patios interiores y vistas al paisaje del Mar de Cortés.',
      en: 'A second residence in the same premium corridor of Los Cabos. Architecture that responds to the desert setting with natural materials, interior courtyards, and views of the Sea of Cortez landscape.',
    },
    specs: [
      { label: 'Tipo', value: { es: 'Casa residencial', en: 'Residential house' } },
      { label: 'Estilo', value: { es: 'Contemporáneo', en: 'Contemporary' } },
      { label: 'Destino', value: { es: 'Los Cabos, BCS', en: 'Los Cabos, BCS' } },
      { label: 'Estatus', value: { es: 'En desarrollo · 2026–2028', en: 'In development · 2026–2028' } },
    ],
    images: [
      { src: 'images/la-noria-129/photo-4.jpeg', sub: { es: 'Fachada principal', en: 'Main façade' } },
      { src: 'images/la-noria-129/photo-3.jpeg', sub: { es: 'Alberca y terraza', en: 'Pool and terrace' } },
      { src: 'images/la-noria-129/photo-2.jpeg', sub: { es: 'Recámara principal', en: 'Main bedroom' } },
      { src: 'images/la-noria-129/photo-1.jpeg', sub: { es: 'Sala interior', en: 'Interior living room' } },
    ],
  },
  /* ── COMERCIAL ── */
  {
    id: 'victoria-san-jose',
    category: 'retail',
    tag: { es: 'Comercial · San José del Cabo, BCS', en: 'Commercial · San José del Cabo, BCS' },
    title: 'Casa Victoria',
    thumb: 'images/victoria-san-jose/photo-new-1.jpeg',
    desc: {
      es: 'Plaza boutique de arquitectura colonial en San José del Cabo. Integra comercios, restaurantes y espacios de hospitalidad en el corazón del pueblo mágico, con jardín central que funciona como espacio para eventos.',
      en: 'A boutique plaza with colonial architecture in San José del Cabo. It integrates shops, restaurants, and hospitality spaces in the heart of the pueblo mágico, with a central garden that doubles as an event space.',
    },
    specs: [
      { label: 'Tipo', value: { es: 'Plaza comercial', en: 'Commercial plaza' } },
      { label: 'Destino', value: { es: 'San José del Cabo, BCS', en: 'San José del Cabo, BCS' } },
      { label: 'Estatus', value: { es: 'En construcción · 2022–2028', en: 'Under construction · 2022–2028' } },
    ],
    images: [
      { src: 'images/victoria-san-jose/photo-new-1.jpeg', sub: { es: 'Fachada principal', en: 'Main façade' } },
      { src: 'images/victoria-san-jose/photo-new-2.jpeg', sub: { es: 'Vista exterior', en: 'Exterior view' } },
      { src: 'images/victoria-san-jose/photo-new-3.jpeg', sub: { es: 'Planta maestra', en: 'Master plan' } },
    ],
  },
  {
    id: 'luis-cabrera-7',
    category: 'retail',
    tag: { es: 'Plaza Comercial · Roma Norte, CDMX', en: 'Commercial Plaza · Roma Norte, CDMX' },
    title: 'Luis Cabrera 7',
    thumb: 'images/proximamente.svg',
    desc: {
      es: 'Plaza comercial de barrio en uno de los corredores más vibrantes de la Ciudad de México. Espacios diseñados para el comercio local de carácter en la Colonia Roma.',
      en: 'A neighborhood commercial plaza on one of the most vibrant corridors in Mexico City. Spaces designed for local, character-driven retail in the Roma neighborhood.',
    },
    specs: [
      { label: 'Tipo', value: { es: 'Comercial', en: 'Commercial' } },
      { label: 'Ubicación', value: { es: 'Roma Norte, CDMX', en: 'Roma Norte, CDMX' } },
      { label: 'Estilo', value: { es: 'Comercio de barrio', en: 'Neighborhood retail' } },
      { label: 'Estatus', value: { es: 'En construcción · 2023–2026', en: 'Under construction · 2023–2026' } },
    ],
    images: [
      { src: 'images/proximamente.svg', sub: { es: 'Próximamente', en: 'Coming soon' } },
    ],
  },
  /* ── RESTAURANTES ── */
  {
    id: 'amsterdam',
    category: 'retail',
    tag: { es: 'Restaurante · Condesa, CDMX', en: 'Restaurant · Condesa, CDMX' },
    title: 'Amsterdam 76',
    thumb: 'images/proximamente.svg',
    desc: {
      es: 'Restaurante en la icónica Avenida Ámsterdam de la Colonia Condesa. Un espacio gastronómico íntimo con identidad propia en uno de los rincones más queridos de la ciudad.',
      en: 'A restaurant on the iconic Avenida Ámsterdam in the Condesa neighborhood. An intimate dining space with its own identity in one of the city\'s most beloved corners.',
    },
    specs: [
      { label: 'Tipo', value: { es: 'Restaurante', en: 'Restaurant' } },
      { label: 'Ubicación', value: { es: 'Av. Ámsterdam, Condesa', en: 'Av. Ámsterdam, Condesa' } },
      { label: 'Destino', value: { es: 'Ciudad de México', en: 'Mexico City' } },
      { label: 'Estatus', value: { es: 'En construcción · 2024–2026', en: 'Under construction · 2024–2026' } },
    ],
    images: [
      { src: 'images/proximamente.svg', sub: { es: 'Próximamente', en: 'Coming soon' } },
    ],
  },
  {
    id: 'san-jose-criollo',
    category: 'retail',
    tag: { es: 'Restaurante · San José del Cabo, BCS', en: 'Restaurant · San José del Cabo, BCS' },
    title: 'San José del Criollo',
    thumb: 'images/san-jose-criollo/photo-2.jpeg',
    desc: {
      es: 'Restaurante de lujo en San José del Cabo, creado en colaboración con el chef Enrique Olvera — fundador de Pujol (Ciudad de México), reconocido entre los mejores restaurantes del mundo, y Cosme (Nueva York) — junto con el chef Luis Arellano, quien se desempeñó como head chef en Criollo antes de sumarse a este proyecto. El concepto explora la cocina mexicana de autor en un destino de clase mundial, fusionando ingredientes locales de Baja California Sur con la visión creativa de dos de los chefs más influyentes de México.',
      en: "A luxury restaurant in San José del Cabo, created in collaboration with chef Enrique Olvera — founder of Pujol (Mexico City), recognized among the world's best restaurants, and Cosme (New York) — together with chef Luis Arellano, who served as head chef at Criollo before joining this project. The concept explores signature Mexican cuisine in a world-class destination, blending local ingredients from Baja California Sur with the creative vision of two of Mexico's most influential chefs.",
    },
    specs: [
      { label: 'Tipo', value: { es: 'Restaurante de lujo', en: 'Luxury restaurant' } },
      { label: 'Chef', value: { es: 'Enrique Olvera · Luis Arellano', en: 'Enrique Olvera · Luis Arellano' } },
      { label: 'Destino', value: { es: 'San José del Cabo, BCS', en: 'San José del Cabo, BCS' } },
      { label: 'Estatus', value: { es: 'Activo', en: 'Active' } },
    ],
    images: [
      { src: 'images/san-jose-criollo/photo-2.jpeg', sub: { es: 'Fachada exterior', en: 'Exterior façade' } },
      { src: 'images/san-jose-criollo/photo-1.jpeg', sub: { es: 'Salón principal', en: 'Main hall' } },
      { src: 'images/san-jose-criollo/photo-3.jpeg', sub: { es: 'Salón privado', en: 'Private hall' } },
      { src: 'images/san-jose-criollo/photo-5.jpeg', sub: { es: 'Terraza exterior', en: 'Exterior terrace' } },
      { src: 'images/san-jose-criollo/photo-4.jpeg', sub: { es: 'San José del Criollo', en: 'San José del Criollo' } },
    ],
  },
];

/* ===== i18n HELPERS ===== */
function galleryLang() {
  return (window.QUATRO_getLang && window.QUATRO_getLang()) || 'es';
}
function bi(field) {
  if (field == null) return '';
  return field[galleryLang()] !== undefined ? field[galleryLang()] : field.es;
}
function specLabel(label) {
  const lang = galleryLang();
  if (lang === 'en' && window.QUATRO_SPEC_LABELS_EN && window.QUATRO_SPEC_LABELS_EN[label]) {
    return window.QUATRO_SPEC_LABELS_EN[label];
  }
  return label;
}
function t(key) {
  return (window.QUATRO_t && window.QUATRO_t(key)) || key;
}

/* ===== RENDER PROJECT LIST ===== */
(function () {
  const list = document.getElementById('projects-list');
  if (!list) return;

  function renderList() {
    list.innerHTML = '';
    PROJECTS.forEach((p, i) => {
      const el = document.createElement('article');
      el.className = 'project-entry reveal visible';
      el.dataset.project = p.id;
      el.dataset.category = p.category;
      const desc = bi(p.desc);
      el.innerHTML = `
        <div class="project-entry-img">
          <span class="project-entry-num">${String(i + 1).padStart(2, '0')}</span>
          <img src="${p.thumb}" alt="${p.title}" loading="lazy" />
          <div class="project-entry-overlay"></div>
        </div>
        <div class="project-entry-info">
          <span class="proj-tag">${bi(p.tag)}</span>
          <h2>${p.title}</h2>
          <p>${desc.slice(0, 160)}${desc.length > 160 ? '…' : ''}</p>
          <div class="proj-meta" style="margin-top:0.9rem;">
            ${p.specs[3] ? `<span>${bi(p.specs[3].value)}</span>` : ''}
          </div>
          <button class="project-entry-cta">${t('gallery.viewproject')}</button>
        </div>
      `;
      el.addEventListener('click', () => openModal(p.id));
      list.appendChild(el);
    });
  }

  renderList();
  window.addEventListener('quatro:langchange', renderList);
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
  let activeId = null;

  function renderInfo() {
    const p = PROJECTS.find(x => x.id === activeId);
    if (!p) return;
    pmTag.textContent   = bi(p.tag);
    pmTitle.textContent = p.title;
    pmDesc.textContent  = bi(p.desc);
    pmSpecs.innerHTML = p.specs.map(s => `
      <div>
        <div class="pm-spec-label">${specLabel(s.label)}</div>
        <div class="pm-spec-val">${bi(s.value)}</div>
      </div>
    `).join('');
  }

  window.openModal = function (id) {
    const p = PROJECTS.find(x => x.id === id);
    if (!p) return;
    activeId = id;
    images = p.images;
    current = 0;

    renderInfo();
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
      pmImg.alt = bi(images[current].sub) || '';
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

  window.addEventListener('quatro:langchange', () => {
    if (modal.classList.contains('open') && activeId) {
      renderInfo();
      renderImg();
    }
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
    bacalar:  {
      tag: { es: 'Hoteles', en: 'Hotels' },
      title: { es: 'Bacalar, Quintana Roo', en: 'Bacalar, Quintana Roo' },
      desc: { es: 'Destino emergente de alto crecimiento. Proyecto flagship: Wayak Bacalar — 33 ha, 500 m frente al Lago de los 7 Colores.', en: 'A high-growth emerging destination. Flagship project: Wayak Bacalar — 33 ha, 500 m of frontage on the Lake of Seven Colors.' },
    },
    loscabos: {
      tag: { es: 'Residencial · Comercial · Hotel', en: 'Residential · Commercial · Hotel' },
      title: { es: 'Los Cabos, BCS', en: 'Los Cabos, BCS' },
      desc: { es: 'Mercado de lujo con demanda internacional sostenida. Proyectos: Oasis, La Noria, Tortuga Bay (92 deptos), Casa Nima (147 deptos), Victoria San José y Cabo Blanco East Cape (150 ha).', en: 'A luxury market with sustained international demand. Projects: Oasis, La Noria, Tortuga Bay (92 units), Casa Nima (147 units), Victoria San José, and Cabo Blanco East Cape (150 ha).' },
    },
    cdmx:     {
      tag: { es: 'Airbnb · Comercial · Restaurante', en: 'Airbnb · Commercial · Restaurant' },
      title: { es: 'Ciudad de México', en: 'Mexico City' },
      desc: { es: 'Hub operativo principal. Airbnb: Casa Oliva, Casa Miravalle, Casa del Parque. Comercial: Luis Cabrera 7 (Roma Norte). Restaurante: Amsterdam (Condesa).', en: 'Main operations hub. Airbnb: Casa Oliva, Casa Miravalle, Casa del Parque. Commercial: Luis Cabrera 7 (Roma Norte). Restaurant: Amsterdam (Condesa).' },
    },
    madrid:   {
      tag: { es: 'Residencial · España', en: 'Residential · Spain' },
      title: { es: 'Madrid, España', en: 'Madrid, Spain' },
      desc: { es: 'Expansión internacional. Cortes Residences — edificio histórico de 1880 rehabilitado en el Barrio de Las Letras, a pasos del Paseo del Prado.', en: 'International expansion. Cortes Residences — a restored 1880 historic building in the Barrio de Las Letras, steps from Paseo del Prado.' },
    },
    usa:      {
      tag: { es: 'Co-inversión · Residencial', en: 'Co-investment · Residential' },
      title: { es: 'Estados Unidos', en: 'United States' },
      desc: { es: 'Co-inversión en vivienda estudiantil. Student Housing EUA — 4,721 unidades en 6 estados, con demanda estructural y flujos de renta en dólares.', en: 'Co-investment in student housing. Student Housing USA — 4,721 units across 6 states, with structural demand and USD-denominated rental income.' },
    },
  };

  let activeDest = 'bacalar';

  function render() {
    if (infoCard && data[activeDest]) {
      const d = data[activeDest];
      infoCard.innerHTML = `<span class="proj-tag">${bi(d.tag)}</span><h4>${bi(d.title)}</h4><p>${bi(d.desc)}</p>`;
      infoCard.classList.add('visible');
    }
  }

  function activate(id) {
    activeDest = id;
    destItems.forEach(el => el.classList.toggle('active', el.dataset.dest === id));
    mapPins.forEach(p => p.classList.toggle('active', p.dataset.dest === id));
    render();
  }

  destItems.forEach(el => el.addEventListener('click', () => activate(el.dataset.dest)));
  mapPins.forEach(p => p.addEventListener('click', () => activate(p.dataset.dest)));
  activate('bacalar');

  window.addEventListener('quatro:langchange', render);
})();
