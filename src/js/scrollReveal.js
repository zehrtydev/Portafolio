/**
 * ============================================================================
 * SCROLL REVEAL — Portafolio Manuel Amado
 * ============================================================================
 * 
 * Usa Intersection Observer API para animar elementos cuando entran
 * en el viewport. Mucho más performante que scroll listeners.
 * 
 * Comportamiento:
 * - Elementos con clase .reveal inician invisible y desplazados
 * - Al entrar en viewport (10% visible), se añade .revealed
 * - Stagger automático: +100ms delay por cada elemento hijo
 * - Animación: fade-in + translateY(20px→0) en 500ms
 * ============================================================================
 */

/**
 * Inicializa el sistema de scroll reveal.
 * Crea un IntersectionObserver y lo aplica a todos los elementos
 * con las clases .reveal, .reveal-left, .reveal-right, .reveal-scale.
 */
export function initScrollReveal() {
  /* Verificar soporte del navegador */
  if (!('IntersectionObserver' in window)) {
    /* Fallback: mostrar todo sin animación */
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale')
      .forEach(el => el.classList.add('revealed'));
    return;
  }

  /* ── Opciones del observer ── */
  const observerOptions = {
    root: null,                /* viewport como referencia */
    rootMargin: '0px 0px -50px 0px', /* activar 50px antes del borde inferior */
    threshold: 0.1             /* 10% del elemento visible */
  };

  /* ── Crear el observer ── */
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        /* Añadir clase que activa la animación */
        entry.target.classList.add('revealed');

        /* Dejar de observar (animación solo se ejecuta una vez) */
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  /* ── Observar todos los elementos con clases de reveal ── */
  const revealElements = document.querySelectorAll(
    '.reveal, .reveal-left, .reveal-right, .reveal-scale'
  );

  revealElements.forEach((el, index) => {
    /* Stagger delay automático para grupos de elementos */
    if (el.parentElement) {
      const siblings = el.parentElement.querySelectorAll(
        '.reveal, .reveal-left, .reveal-right, .reveal-scale'
      );
      /* Solo aplicar stagger si hay múltiples hermanos revelables */
      if (siblings.length > 1) {
        const siblingIndex = Array.from(siblings).indexOf(el);
        el.style.transitionDelay = `${siblingIndex * 100}ms`;
      }
    }

    observer.observe(el);
  });
}
