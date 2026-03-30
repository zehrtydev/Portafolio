/**
 * ============================================================================
 * NAVBAR — Portafolio Manuel Amado
 * ============================================================================
 * 
 * Funcionalidades:
 * 1. Background más opaco al hacer scroll
 * 2. Hamburger menu toggle (mobile)
 * 3. Smooth scroll a secciones con offset de navbar
 * 4. Active link highlighting según posición de scroll
 * 5. Cierra mobile menu al clickear link
 * ============================================================================
 */

/**
 * Inicializa todas las funcionalidades del navbar.
 * Se llama desde main.js cuando el DOM está listo.
 */
export function initNavbar() {
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  /* ── 1. Scroll listener: cambiar opacidad del navbar ── */
  function handleScroll() {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    /* Actualizar link activo según scroll position */
    updateActiveLink(sections, navLinks);
  }

  window.addEventListener('scroll', handleScroll, { passive: true });

  /* ── 2. Hamburger toggle ── */
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      mobileMenu.classList.toggle('active');
      /* Prevenir scroll del body cuando mobile menu está abierto */
      document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    });
  }

  /* ── 3. Smooth scroll con offset para todos los nav links ── */
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');

      /* Solo interceptar links internos (con #) */
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);

        if (target) {
          /* Calcular posición con offset del navbar */
          const navbarHeight = navbar.offsetHeight;
          const targetPosition = target.offsetTop - navbarHeight;

          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }

        /* Cerrar mobile menu si está abierto */
        if (mobileMenu && mobileMenu.classList.contains('active')) {
          hamburger.classList.remove('active');
          mobileMenu.classList.remove('active');
          document.body.style.overflow = '';
        }
      }
    });
  });

  /* Ejecutar scroll handler inicialmente */
  handleScroll();
}

/**
 * Actualiza el link activo según la sección visible en viewport.
 * Usa las posiciones de las secciones para determinar cuál está más cerca.
 *
 * @param {NodeList} sections - Secciones del DOM con atributo id
 * @param {NodeList} links - Links de navegación
 */
function updateActiveLink(sections, links) {
  const scrollPosition = window.scrollY + 100; /* offset para anticipar */

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');

    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      /* Remover active de todos los links */
      links.forEach(link => link.classList.remove('active'));

      /* Agregar active al link correspondiente */
      links.forEach(link => {
        const href = link.getAttribute('href');
        if (href === `#${sectionId}`) {
          link.classList.add('active');
        }
      });
    }
  });
}
