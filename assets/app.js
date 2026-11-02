/* ZEWÁ · demo — datos y comportamiento compartidos */
const ZEWA = {
  wa: '34641486231',
  waTxt: '+34 641 48 62 31',
  tel: '+34641486231',
  telTxt: '+34 641 48 62 31',
  tel2: '+34641486331',
  tel2Txt: '+34 641 48 63 31',
  mail: 'zewareformas@gmail.com'
};

/* Líneas de servicio */
const GROUPS = [
  { id:'reformas', name:'Reformas y construcción', short:'Reformas', desc:'Transformamos tu espacio desde la estructura.',
    icon:'<path d="M3 21h18M5 21V9l7-5 7 5v12"/><path d="M9 21v-6h6v6"/>' },
  { id:'instalaciones', name:'Instalaciones y servicios', short:'Instalaciones', desc:'Todo lo que hace funcionar tu casa.',
    icon:'<path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.4-.6-.6-2.4z"/>' },
  { id:'pintura', name:'Pintura y decoración', short:'Pintura', desc:'El arte en cada rincón.',
    icon:'<rect x="3" y="3" width="15" height="6" rx="1"/><path d="M18 6h2v5h-8v3"/><rect x="10" y="14" width="4" height="7" rx="1"/>' },
  { id:'cocinas', name:'Cocinas a medida', short:'Cocinas', desc:'Tu cocina, llave en mano.',
    icon:'<rect x="3" y="4" width="18" height="16" rx="1"/><path d="M3 10h18M8 14h2M14 14h2M7 7h.01M11 7h.01"/>' },
  { id:'acabados', name:'Acabados e interiorismo', short:'Acabados', desc:'La belleza de los detalles.',
    icon:'<path d="M12 2l2.5 6.5L21 9l-5 4.5L17.5 21 12 17l-5.5 4 1.5-7.5L3 9l6.5-.5z"/>' }
];

/* Servicios (lista validada por ZEWÁ; textos del portafolio cuando existen). Sin `img` = foto pendiente. */
const SERVICES = [
  /* ---- Reformas y construcción ---- */
  { slug:'reformas-integrales', group:'reformas', name:'Reformas integrales o parciales', img:'integral.jpg', featured:true,
    lead:'Reformas integrales o parciales de alta calidad.',
    desc:'Reformamos tu vivienda o negocio completo, o solo la parte que necesitas, con diseño personalizado y un único equipo propio de todos los oficios.',
    points:['Reforma completa o por estancias','Diseño personalizado','Equipo propio: paletas, electricistas, fontaneros, pladuristas, carpinteros e interioristas'] },
  { slug:'obra', group:'reformas', name:'Obra',
    lead:'Trabajos de obra con equipo propio.',
    desc:'Albañilería y trabajos de obra para tu reforma, con orden, limpieza y en el plazo acordado.',
    points:['Albañilería','Viviendas, locales y oficinas','Orden y limpieza en cada jornada'] },
  { slug:'construccion', group:'reformas', name:'Construcción',
    lead:'Construimos contigo, de principio a fin.',
    desc:'Proyectos de construcción con un único equipo que se encarga de todos los oficios.',
    points:['Un solo interlocutor','Equipo propio de todos los oficios','Plazos acordados'] },
  { slug:'reformas-estructurales', group:'reformas', name:'Reformas estructurales', img:'despues.jpg', featured:true,
    lead:'Transformamos la estructura.',
    desc:'Refuerzo, apertura de espacios y recuperación de elementos originales para que tu vivienda gane amplitud sin perder su carácter.',
    points:['Vigas metálicas de refuerzo','Apertura de espacios','Restauración de vigas de madera originales'],
    ba:{ before:'antes.jpg', after:'despues.jpg' },
    extra:[{img:'estructural-antes-1.jpg',t:'Antes · pasillo'},{img:'estructural-antes-2.jpg',t:'Antes · estancia'},{img:'despues.jpg',t:'Después'}] },
  { slug:'pladur', group:'reformas', name:'Divisiones y diseños en pladur', img:'pladur.jpg', featured:true,
    lead:'Pladur: la libertad de diseñar.',
    desc:'Divisiones, techos, paredes y soluciones personalizadas: hornacinas, falsos techos e iluminación integrada.',
    points:['Divisiones','Techos y paredes','Diseños personalizados'] },
  { slug:'aislamiento', group:'reformas', name:'Aislamiento térmico y acústico',
    lead:'Más confort y menos ruido en tu espacio.',
    desc:'Aislamos paredes, techos y suelos para mejorar el confort térmico y reducir el ruido.',
    points:['Aislamiento térmico','Aislamiento acústico','Paredes, techos y suelos'] },
  { slug:'steel-framing', group:'reformas', name:'Steel Framing', img:'steel.jpg',
    lead:'Construye el futuro. Steel Framing: innovación y resistencia.',
    desc:'Estructuras livianas y resistentes con diseños personalizados e instalación rápida y segura.',
    points:['Estructuras livianas y resistentes','Diseños personalizados','Instalación rápida y segura'] },

  /* ---- Instalaciones y servicios ---- */
  { slug:'fontaneria', group:'instalaciones', name:'Fontanería', img:'fontaneria.jpg',
    lead:'Instalación y mantenimiento de redes hidráulicas.',
    desc:'Abastecimiento de agua potable y evacuación de aguas residuales, así como instalaciones de calefacción en viviendas y otras edificaciones.',
    points:['Abastecimiento de agua potable','Evacuación de aguas residuales','Instalaciones de calefacción'] },
  { slug:'electricidad', group:'instalaciones', name:'Electricidad',
    lead:'Instalaciones eléctricas para tu reforma.',
    desc:'Instalaciones y mejoras eléctricas en viviendas, locales y oficinas, a cargo de nuestros electricistas.',
    points:['Instalaciones nuevas','Renovación de instalaciones','Conexión de iluminación y electrodomésticos'] },
  { slug:'carpinteria', group:'instalaciones', name:'Carpintería',
    lead:'Carpintería a medida para tu espacio.',
    desc:'Trabajos de carpintería hechos por nuestros carpinteros e integrados en tu reforma.',
    points:['Trabajos a medida','Integrada en tu reforma','Equipo propio'] },
  { slug:'interiorismo', group:'instalaciones', name:'Interiorismo',
    lead:'Espacios pensados para ti.',
    desc:'Nuestros interioristas te ayudan a definir la distribución, los materiales, los colores y la iluminación de tu espacio.',
    points:['Distribución del espacio','Materiales y colores','Iluminación'] },
  { slug:'decoracion', group:'instalaciones', name:'Decoración',
    lead:'El toque final de cada espacio.',
    desc:'Decoración de hogares y negocios para que cada espacio tenga carácter propio.',
    points:['Hogares','Negocios','Espacios especiales'] },
  { slug:'mobiliario', group:'instalaciones', name:'Mobiliario a medida',
    lead:'Muebles hechos para tu espacio.',
    desc:'Muebles diseñados a la medida de tu espacio y de tu forma de vivir o trabajar.',
    points:['Diseño a medida','Aprovechamiento del espacio','Integrado en tu reforma'] },
  { slug:'transporte', group:'instalaciones', name:'Transporte',
    lead:'Nos encargamos del transporte.',
    desc:'Servicio de transporte para tu proyecto. Cuéntanos qué necesitas mover y te preparamos un presupuesto.',
    points:['Transporte para tu proyecto','Coordinado con la obra','Presupuesto sin compromiso'] },
  { slug:'embalaje-custodia', group:'instalaciones', name:'Embalaje, custodia y reposición de pertenencias',
    lead:'Tus pertenencias, protegidas mientras trabajamos.',
    desc:'Servicio de embalaje, custodia y reposición fiel de pertenencias para espacios completos o parciales que serán intervenidos: pisos, oficinas, locales, etc. amueblados.',
    points:['Embalaje','Custodia durante la obra','Reposición fiel de cada pertenencia'] },
  { slug:'impermeabilizacion', group:'instalaciones', name:'Impermeabilización',
    lead:'Impermeabilización con todas las técnicas.',
    desc:'Protegemos tu espacio frente al agua y la humedad con la técnica adecuada para cada caso.',
    points:['Todas las técnicas','Protección frente a la humedad','Técnica adecuada a cada caso'] },
  { slug:'polarizado', group:'instalaciones', name:'Polarizados', img:'polarizado.jpg',
    lead:'Evita los excesos de calor y deslumbramientos.',
    desc:'Las láminas de protección solar aportan un gran confort interior y se aplican sin obras ni molestias sobre todo tipo de acristalamientos.',
    points:['Excelente protección solar','Visión clara y sin distorsiones hacia el exterior','Notable ahorro en climatización','Reducen la entrada de calor hasta en un 91 % (según producto)','Sin obras ni molestias','Para todo tipo de acristalamientos'] },
  { slug:'aire-acondicionado', group:'instalaciones', name:'Aire acondicionado',
    lead:'Confort todo el año.',
    desc:'Instalación de aire acondicionado coordinada con el resto de tu reforma.',
    points:['Instalación de equipos','Coordinada con la obra','Presupuesto sin compromiso'] },

  /* ---- Pintura y decoración ---- */
  { slug:'pintura', group:'pintura', name:'Pintura general', img:'pintura.jpg', featured:true,
    lead:'Espacios y ambientes más amplios, protegidos y acogedores.',
    desc:'Pintamos espacios vacíos o totalmente amueblados (pisos, casas y naves) cuidando tus bienes al máximo. Más allá de la estética:',
    points:['Actúa como barrera protectora contra la humedad','Protege de la corrosión','Extiende la vida útil de la estructura'] },
  { slug:'pinturas-decorativas', group:'pintura', name:'Pinturas decorativas', img:'decorativa.jpg', featured:true,
    lead:'Diseños de pintura decorativa.',
    desc:'Técnicas decorativas que convierten una pared en protagonista. ¡Y muchísimo más!',
    points:['Acabados artísticos a medida','Para hogares y negocios','Asesoramiento en la elección de la técnica'],
    subtypes:[['Óleo','Clásico y elegante'],['Veneciano','Sofisticado y luminoso'],['Barroco','Opulento y dramático'],['Mandala 3D','Geométrico y moderno'],['Terciopelo','Ideal para una pared especial'],['Pinturas industriales','Resistentes y versátiles']],
    extra:[{img:'barroco.jpg',t:'Estuco barroco'},{img:'terciopelo.jpg',t:'Pintura terciopelo'},{img:'decorativa.jpg',t:'Relieves decorativos'}] },
  { slug:'pintura-anticondensacion', group:'pintura', name:'Pintura anticondensación',
    lead:'Menos condensación y humedad en tus paredes.',
    desc:'Pintura especial para zonas propensas a la condensación, como baños, cocinas y paredes frías.',
    points:['Baños y cocinas','Paredes frías','Acabado limpio'] },
  { slug:'pintura-ignifuga', group:'pintura', name:'Pintura ignífuga según normativa',
    lead:'Protección frente al fuego, según normativa.',
    desc:'Aplicamos pintura ignífuga según la normativa vigente en los espacios que lo requieren.',
    points:['Según normativa','Locales, naves y oficinas','Aplicación profesional'] },
  { slug:'pintura-exterior', group:'pintura', name:'Pintura exterior',
    lead:'Fachadas y exteriores renovados.',
    desc:'Pintura para fachadas, muros y exteriores, preparada para soportar la intemperie.',
    points:['Fachadas','Muros y exteriores','Protección frente a la intemperie'] },
  { slug:'pintura-epoxica', group:'pintura', name:'Pintura epóxica',
    lead:'Suelos y superficies resistentes.',
    desc:'Pintura epóxica para suelos y superficies de mucho uso: naves, garajes y locales.',
    points:['Naves y garajes','Locales','Zonas de mucho uso'] },

  /* ---- Cocinas a medida ---- */
  { slug:'cocinas', group:'cocinas', name:'Cocinas a medida', img:'cocina2.jpg', featured:true, kitchen:true,
    lead:'Cocinas completas o parciales, a medida y con diseño.',
    desc:'Creamos cocinas funcionales y con estilo, adaptadas a tu espacio, a tu forma de cocinar y a tu presupuesto. Te acompañamos desde el primer boceto hasta la última pieza instalada.',
    points:['Cocinas completas o parciales','Diseño 3D previo','Montaje completo, listo para usar'],
    extra:[{img:'cocina1.jpg',t:'Cocina en U · vista lateral'},{img:'cocina2.jpg',t:'Cocina en U · vista frontal'}] },

  /* ---- Acabados e interiorismo ---- */
  { slug:'microcemento', group:'acabados', name:'Microcemento',
    lead:'Industrial y contemporáneo.',
    desc:'Revestimiento continuo para suelos, paredes y baños, con un acabado moderno y sin juntas.',
    points:['Suelos','Paredes','Baños y cocinas'] },
  { slug:'revestimientos', group:'acabados', name:'Revestimientos', img:'revestimiento.jpg',
    lead:'La belleza de los detalles.',
    desc:'Revestimientos de alta calidad y diseños personalizados para tu hogar o negocio.',
    points:['Paredes','Suelos','Techos'] },
  { slug:'estuco-veneciano', group:'acabados', name:'Estuco veneciano', img:'veneciano.jpg', featured:true,
    lead:'¡Descubre el arte en cada rincón! Ahora con nuevas técnicas.',
    desc:'El estuco veneciano, originario de Venecia en el Renacimiento, combina lo clásico y lo moderno. Su técnica ancestral aporta brillo y elegancia, y hoy lo aplicamos también con nuevas técnicas.',
    points:['Brillo y elegancia','Nuevas técnicas','Combina lo clásico y lo moderno'] },
  { slug:'iluminacion', group:'acabados', name:'Iluminación', img:'iluminacion.jpg',
    lead:'Genera ambientes más amenos y cálidos.',
    desc:'Variedad y diferentes tipos de iluminación para cada espacio.',
    points:['Según la incidencia','Según la tonalidad de la luz','Decorativas'] },
  { slug:'alicatados', group:'acabados', name:'Alicatado', img:'alicatado.jpg',
    lead:'Estancias más limpias y con mayor higiene.',
    desc:'Cerámica con muchas opciones según tus gustos, necesidades y el estilo de tu hogar.',
    points:['Variedad de diseños','Fácil limpieza','Amigable con el medio ambiente','Alta resistencia a golpes y rayones','Fácil instalación'] },
  { slug:'montaje', group:'acabados', name:'Montaje', img:'montaje.jpg',
    lead:'Lugares conceptualizados. Una experiencia cada día.',
    desc:'Embellece tu hogar o negocio con montajes conceptuales que marcarán la diferencia en tus espacios especiales.',
    points:['Montajes conceptuales','Hogares y negocios','Espacios especiales'] },
  { slug:'papel-impreso', group:'acabados', name:'Papel impreso',
    lead:'Paredes con personalidad.',
    desc:'Papel impreso para vestir las paredes de hogares y negocios con el diseño que elijas.',
    points:['Diseño a elegir','Hogares y negocios','Colocación en pared'] },
  { slug:'impresion-digital', group:'acabados', name:'Impresión digital', img:'impresion.jpg',
    lead:'Personaliza tus espacios.',
    desc:'La impresión digital se adapta a múltiples aplicaciones: publicidad, promoción de marcas, decoración de habitaciones y otras ideas creativas para vestir una pared.',
    points:['Marcas comerciales','Interiores de empresas y decoración de hogares','Publicidad y marketing','Galerías, museos y exhibiciones de arte'] },
  { slug:'cornisas', group:'acabados', name:'Cornisas', img:'cornisas.jpg',
    lead:'¡Decora tus espacios con un estilo clásico embellecido con lo contemporáneo!',
    desc:'Además de decorar, disimulan grietas y fisuras y esconden rieles de cortinas o la luz indirecta perimetral.',
    points:['Disimulan grietas y fisuras','Esconden rieles de cortinas','Integran luz indirecta perimetral'] }
];

/* Enlaces antiguos que ahora forman parte de otro servicio */
const ALIASES = { 'pintura-terciopelo':'pinturas-decorativas', 'estuco-barroco':'pinturas-decorativas' };

const byGroup = g => SERVICES.filter(s => s.group === g);
const media = s => s.img
  ? `<img src="img/${s.img}" alt="${s.name}" loading="lazy">`
  : `<div class="ph-media" role="img" aria-label="${s.name}: fotografía próximamente"><svg viewBox="0 0 24 24" aria-hidden="true">${groupOf(s.group).icon}</svg><span>Fotos próximamente</span></div>`;
const groupOf = id => GROUPS.find(g => g.id === id);
const url = s => `servicio.html?s=${s.slug}`;

/* Iconos */
const IC = {
  wa:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .1-3.3-.8-2.7-1.1-4.5-3.9-4.6-4-.1-.2-1.1-1.5-1.1-2.8s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.9 2.1c.1.2.1.4 0 .5l-.3.5-.4.5c-.2.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.3 2.4 1.5.3.1.5.1.6-.1l.9-1c.2-.3.4-.2.6-.1l2 1c.3.1.5.2.5.3.1.2.1.7-.1 1.3z"/></svg>',
  tel:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1z"/></svg>',
  mail:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5z"/></svg>',
  fb:'<svg viewBox="0 0 24 24"><path d="M14 8V6c0-.9.6-1 1-1h2V1.5h-3C10.8 1.5 10 4 10 5.7V8H7.5v3.6H10V22h4V11.6h3l.5-3.6z"/></svg>',
  ig:'<svg viewBox="0 0 24 24"><path d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 8.2a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4zM17.3 5.5a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4zM12 2.2c-2.7 0-3 0-4 .06C4.8 2.4 3 4.2 2.3 7.9 2.2 9 2.2 9.3 2.2 12s0 3 .06 4c.14 3.2 1.9 5 5.6 5.7 1 .06 1.4.06 4.1.06s3 0 4-.06c3.2-.14 5-1.9 5.7-5.6.06-1 .06-1.4.06-4.1s0-3-.06-4C21.6 4.8 19.8 3 16.1 2.3 15 2.2 14.7 2.2 12 2.2z"/></svg>',
  tt:'<svg viewBox="0 0 24 24"><path d="M16.6 5.8A4.3 4.3 0 0 1 15.5 3h-3.2v12.4a2.6 2.6 0 1 1-2.6-2.6c.3 0 .5 0 .8.1V9.6a5.8 5.8 0 1 0 5 5.8V9.1a7.4 7.4 0 0 0 4.3 1.4V7.3a4.3 4.3 0 0 1-3.2-1.5z"/></svg>',
  check:'<svg viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5"/></svg>',
  arrow:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  chev:'<svg viewBox="0 0 24 24"><path d="m6 9 6 6 6-6"/></svg>',
  cam:'<svg viewBox="0 0 24 24"><path d="M4 7h3l2-3h6l2 3h3a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1z"/><circle cx="12" cy="13" r="4"/></svg>'
};
const LOGO = fill => `<svg viewBox="152 32 108 114" style="fill:${fill}" aria-hidden="true"><path d="M156.73 36.38L222.88 62.25L220.07 64.22L168.22 49.59L168.22 134.25L156.73 142.69Z"/><path d="M172.43 125.25L177.47 124.12L195.41 142.69L191.77 142.69Z"/><path d="M180.28 122.72L186.16 121.59L227.36 142.69L222.04 142.69Z"/><path d="M187.84 120.19L194.29 119.06L255.95 142.69L249.5 142.69Z"/><path fill="url(#gDoor)" d="M193 69.5L213.3 67.6L213.3 124.7L193 125Z"/><rect x="213.3" y="67.6" width="2.8" height="57.1" fill="#A0692F"/><rect x="218" y="63" width="5" height="63" fill="url(#gDoor)"/></svg>`;
const BRAND = (light) => `<a href="index.html" class="brand${light ? ' light' : ''}" aria-label="ZEWÁ Reformas, ir al inicio">${LOGO(light ? 'var(--white)' : 'var(--navy)')}<span class="txt"><span class="word">ZEWÁ</span><span class="sub" aria-hidden="true">${[...'REFORMAS'].map(c => `<span>${c}</span>`).join('')}</span></span></a>`;

/* WhatsApp */
function waLink(text){ return `https://wa.me/${ZEWA.wa}?text=${encodeURIComponent(text)}`; }
function serviceOptions(selected){
  return GROUPS.map(g => `<optgroup label="${g.name}">${byGroup(g.id).map(s => `<option${s.name===selected?' selected':''}>${s.name}</option>`).join('')}</optgroup>`).join('') + `<option${selected==='Otro'?' selected':''}>Otro</option>`;
}

/* Cabecera, CTA y pie */
function renderChrome(){
  const page = document.body.dataset.page;
  const h = document.getElementById('chrome-header');
  if (h) h.outerHTML = `
  <a class="skip" href="#contenido">Saltar al contenido</a>
  <svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs><linearGradient id="gDoor" x1="0" x2="1"><stop offset="0" stop-color="#DDB482"/><stop offset=".6" stop-color="#C39059"/><stop offset="1" stop-color="#A0692F"/></linearGradient></defs></svg>
  <header class="site" id="site-header"><div class="wrap">
    ${BRAND()}
    <nav class="mainnav" aria-label="Principal"><ul>
      <li class="has-mega"><button class="drop-btn" aria-expanded="false">Servicios ${IC.chev}</button>
        <div class="mega"><div class="wrap">
          ${GROUPS.map(g => `<div><h4><a href="index.html#linea-${g.id}">${g.name}</a></h4><ul>${byGroup(g.id).map(s => `<li><a href="${url(s)}">${s.name}</a></li>`).join('')}</ul></div>`).join('')}
          <div class="mega-foot"><span>¿No encuentras lo que buscas? Cuéntanos tu proyecto.</span><a class="link-more" href="${waLink('Hola ZEWÁ, quiero información sobre un proyecto.')}" target="_blank" rel="noopener">Escríbenos por WhatsApp</a></div>
        </div></div>
      </li>
      <li><a href="index.html#proyectos">Proyectos</a></li>
      <li><a href="index.html#proceso">Cómo trabajamos</a></li>
      <li><a href="#contacto">Contacto</a></li>
      <li class="menu-cta"><a class="btn btn-primary" href="${waLink('Hola ZEWÁ, quiero solicitar un presupuesto.')}" target="_blank" rel="noopener">${IC.wa}Solicitar presupuesto</a></li>
    </ul></nav>
    <div class="head-actions">
      <a class="head-tel" href="tel:${ZEWA.tel}" aria-label="Llamar al ${ZEWA.telTxt}">${IC.tel}<span>${ZEWA.telTxt}</span></a>
      <a href="${waLink('Hola ZEWÁ, quiero solicitar un presupuesto.')}" target="_blank" rel="noopener" class="btn btn-primary btn-sm">${IC.wa}Pedir presupuesto</a>
    </div>
    <button class="menu-btn" aria-label="Abrir menú" aria-expanded="false"><span></span><span></span><span></span></button>
  </div></header>`;

  const c = document.getElementById('chrome-cta');
  if (c){
    const pre = c.dataset.service || '';
    c.outerHTML = `
  <section class="cta on-dark" id="contacto"><div class="wrap">
    <div class="reveal">
      <span class="eyebrow">Presupuesto sin compromiso</span>
      <h2>Un solo equipo.<br>Todo resuelto.</h2>
      <p class="lead">Cuéntanos tu idea y te preparamos un presupuesto claro y detallado. Te respondemos por WhatsApp o por teléfono, como prefieras.</p>
      <div class="btns"><a class="btn btn-light" href="${waLink('Hola ZEWÁ, quiero cotizar '+(pre||'un proyecto')+'.')}" target="_blank" rel="noopener">${IC.wa}Escribir por WhatsApp</a><a class="btn btn-ghost" href="tel:${ZEWA.tel}">${IC.tel}${ZEWA.telTxt}</a></div>
      <div class="cat-links">${GROUPS.map(g => `<a href="index.html#linea-${g.id}">${g.name}</a>`).join('')}</div>
    </div>
    <form class="lead-form reveal" data-wa-form>
      <h3>Solicita tu presupuesto</h3>
      <p class="note">Rellena los datos y se abrirá WhatsApp con tu solicitud lista para enviar.</p>
      <div class="row2">
        <div class="field"><label for="cf-n">Nombre</label><input id="cf-n" name="nombre" required placeholder="Tu nombre"></div>
        <div class="field"><label for="cf-t">Teléfono</label><input id="cf-t" name="telefono" type="tel" placeholder="+34 ..."></div>
      </div>
      <div class="row2">
        <div class="field"><label for="cf-s">¿Qué necesitas?</label><select id="cf-s" name="servicio">${serviceOptions(pre)}</select></div>
        <div class="field"><label for="cf-z">Población o zona</label><input id="cf-z" name="zona" placeholder="Ej.: tu municipio"></div>
      </div>
      <div class="field"><label for="cf-m">Cuéntanos tu proyecto</label><textarea id="cf-m" name="mensaje" rows="3" placeholder="Tipo de espacio, metros aproximados, ideas..."></textarea></div>
      <button class="btn btn-primary" type="submit">${IC.wa}Enviar por WhatsApp</button>
      <p class="legal"><label><input type="checkbox" required>Acepto la política de privacidad.</label></p>
    </form>
  </div></section>`;
  }

  const f = document.getElementById('chrome-footer');
  if (f) f.outerHTML = `
  <footer class="site"><div class="wrap">
    <div class="f-grid">
      <div class="f-brand">${BRAND(true)}
        <p>Más de 20 años en reformas integrales y pintura profesional, con un equipo propio de todos los oficios.</p>
        <div class="socials"><a href="#" aria-label="Facebook">${IC.fb}</a><a href="#" aria-label="Instagram">${IC.ig}</a><a href="#" aria-label="TikTok">${IC.tt}</a></div>
      </div>
      <div><h4>Líneas de servicio</h4><ul>${GROUPS.map(g => `<li><a href="index.html#linea-${g.id}">${g.name}</a></li>`).join('')}</ul></div>
      <div><h4>Servicios destacados</h4><ul>${SERVICES.filter(x => x.featured).map(x => `<li><a href="${url(x)}">${x.name}</a></li>`).join('')}</ul></div>
      <div><h4>Contacto</h4><ul class="f-contact">
        <li>${IC.wa}<a href="${waLink('Hola ZEWÁ')}" target="_blank" rel="noopener">WhatsApp ${ZEWA.waTxt}</a></li>
        <li>${IC.tel}<span><a href="tel:${ZEWA.tel}">${ZEWA.telTxt}</a> · <a href="tel:${ZEWA.tel2}">${ZEWA.tel2Txt}</a></span></li>
        <li>${IC.mail}<a href="mailto:${ZEWA.mail}">${ZEWA.mail}</a></li>
      </ul></div>
    </div>
    <div class="f-bottom"><span>© 2026 ZEWÁ Reformas · Reformas · Decoración · Servicios</span><nav aria-label="Legal"><a href="#">Aviso legal</a><a href="#">Privacidad</a><a href="#">Cookies</a><span>Versión demo</span></nav></div>
  </div></footer>
  <a class="wa" href="${waLink('Hola ZEWÁ, quiero información.')}" target="_blank" rel="noopener" aria-label="Escríbenos por WhatsApp">${IC.wa}<span>Escríbenos</span></a>
  <div class="lightbox" id="lightbox" role="dialog" aria-modal="true" aria-label="Imagen ampliada">
    <button class="lb-btn lb-close" aria-label="Cerrar">✕</button><button class="lb-btn lb-prev" aria-label="Anterior">‹</button><button class="lb-btn lb-next" aria-label="Siguiente">›</button>
    <figure><img alt=""><figcaption></figcaption></figure>
  </div>`;
}

/* Comportamientos */
function initBehaviors(){
  const header = document.getElementById('site-header');
  // menú móvil
  const mb = header.querySelector('.menu-btn');
  mb.addEventListener('click', () => { const o = header.classList.toggle('menu-open'); mb.setAttribute('aria-expanded', o); });
  // megamenú (clic en móvil / teclado)
  const hm = header.querySelector('.has-mega'), db = hm.querySelector('.drop-btn');
  db.addEventListener('click', e => { e.stopPropagation(); const o = hm.classList.toggle('open'); db.setAttribute('aria-expanded', o); });
  document.addEventListener('click', e => { if (!hm.contains(e.target)) { hm.classList.remove('open'); db.setAttribute('aria-expanded', false); } });
  header.querySelectorAll('.mainnav a').forEach(a => a.addEventListener('click', () => { header.classList.remove('menu-open'); hm.classList.remove('open'); }));

  // formularios → WhatsApp
  document.querySelectorAll('[data-wa-form]').forEach(form => form.addEventListener('submit', e => {
    e.preventDefault();
    const d = Object.fromEntries(new FormData(form));
    let t = `Hola ZEWÁ, soy ${d.nombre || ''}.`;
    if (d.servicio) t += `\nNecesito: ${d.servicio}.`;
    if (d.zona) t += `\nZona: ${d.zona}.`;
    if (d.telefono) t += `\nMi teléfono: ${d.telefono}.`;
    if (d.mensaje) t += `\n${d.mensaje}`;
    window.open(waLink(t), '_blank', 'noopener');
  }));

  // aparición (solo se ocultan elementos si este script se ejecuta)
  document.documentElement.classList.add('js');
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold:.12 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  // contadores
  const co = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return; const el = e.target, t = +el.dataset.count, s = performance.now();
    (function f(n){ const p = Math.min((n - s) / 1400, 1); el.textContent = Math.round(t * (1 - Math.pow(1 - p, 3))); if (p < 1) requestAnimationFrame(f); })(s);
    co.unobserve(el);
  }), { threshold:.6 });
  document.querySelectorAll('[data-count]').forEach(el => co.observe(el));

  // antes / después
  document.querySelectorAll('.compare').forEach(cmp => {
    const r = cmp.querySelector('input');
    r.addEventListener('input', () => { const v = r.value; cmp.querySelector('.before').style.clipPath = `inset(0 ${100 - v}% 0 0)`; cmp.querySelector('.bar').style.left = v + '%'; cmp.querySelector('.knob').style.left = v + '%'; });
  });

  // filtros de galería
  document.querySelectorAll('.filters').forEach(fl => fl.addEventListener('click', e => {
    const b = e.target.closest('button'); if (!b) return;
    fl.querySelectorAll('button').forEach(x => x.classList.toggle('on', x === b));
    const cat = b.dataset.f;
    document.querySelectorAll(fl.dataset.target + ' .gitem').forEach(it => it.classList.toggle('hide', cat !== 'all' && it.dataset.cat !== cat));
  }));

  // lightbox
  const lb = document.getElementById('lightbox'), lbImg = lb.querySelector('img'), lbCap = lb.querySelector('figcaption');
  let list = [], idx = 0;
  const show = i => { idx = (i + list.length) % list.length; const it = list[idx]; lbImg.src = it.dataset.full; lbImg.alt = it.dataset.title; lbCap.innerHTML = `<small>${it.dataset.label || ''}</small>${it.dataset.title}`; };
  document.addEventListener('click', e => {
    const it = e.target.closest('.gitem'); if (!it) return;
    list = [...it.parentElement.querySelectorAll('.gitem:not(.hide)')]; show(list.indexOf(it)); lb.classList.add('on'); document.body.style.overflow = 'hidden';
  });
  const close = () => { lb.classList.remove('on'); document.body.style.overflow = ''; };
  lb.querySelector('.lb-close').onclick = close;
  lb.querySelector('.lb-prev').onclick = () => show(idx - 1);
  lb.querySelector('.lb-next').onclick = () => show(idx + 1);
  lb.addEventListener('click', e => { if (e.target === lb) close(); });
  document.addEventListener('keydown', e => { if (!lb.classList.contains('on')) return; if (e.key === 'Escape') close(); if (e.key === 'ArrowLeft') show(idx - 1); if (e.key === 'ArrowRight') show(idx + 1); });
}

/* Piezas reutilizables */
const pcard = s => `<a class="pcard reveal" href="${url(s)}"><div class="img">${media(s)}</div><div class="b"><small>${groupOf(s.group).name}</small><h3>${s.name}</h3><p>${s.lead}</p><span class="more">Ver servicio ${IC.arrow}</span></div></a>`;
const fcard = pcard;
const gitem = (img, title, label, cat, big) => `<button class="gitem reveal${big?' big':''}" data-cat="${cat||''}" data-full="img/${img}" data-title="${title}" data-label="${label||''}"><img src="img/${img}" alt="${title}" loading="lazy"><span class="cap"><small>${label||''}</small>${title}</span></button>`;
const compareHTML = (b, a) => `<div class="compare reveal"><img src="img/${a}" alt="Después"><img class="before" src="img/${b}" alt="Antes"><span class="lbl l">ANTES</span><span class="lbl r">DESPUÉS</span><div class="bar"></div><div class="knob"><svg viewBox="0 0 24 24"><path d="M8 7l-5 5 5 5V7zm8 0v10l5-5-5-5z"/></svg></div><input type="range" min="0" max="100" value="50" aria-label="Comparar antes y después"></div>`;
