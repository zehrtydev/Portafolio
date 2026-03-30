/**
 * ============================================================================
 * MAIN — Portafolio Manuel Amado
 * ============================================================================
 * 
 * Punto de entrada principal.
 * Importa todos los módulos CSS y JS, inicializa todo cuando el DOM está listo.
 * ============================================================================
 */

/* ── Importar estilos (Vite los inyecta automáticamente) ── */
import '../css/variables.css';
import '../css/base.css';
import '../css/components.css';
import '../css/animations.css';
import '../css/responsive.css';

/* ── Importar módulos JS ── */
import { initNavbar } from './navbar.js';
import { initDarkMode } from './darkMode.js';
import { initScrollReveal } from './scrollReveal.js';

/**
 * Inicialización principal.
 * Se ejecuta cuando el DOM ha terminado de cargar.
 */
document.addEventListener('DOMContentLoaded', () => {
  /* 1. Inicializar navegación (sticky, hamburger, smooth scroll) */
  initNavbar();

  /* 2. Inicializar toggle de dark/light mode */
  initDarkMode();

  /* 3. Inicializar scroll reveal (Intersection Observer) */
  initScrollReveal();

  /* Log de confirmación en dev */
  console.log('🚀 Portafolio Manuel Amado — inicializado correctamente');
});
