/**
 * ============================================================================
 * DARK MODE — Portafolio Manuel Amado
 * ============================================================================
 * 
 * Funcionalidades:
 * 1. Toggle entre dark y light mode
 * 2. Persistencia en localStorage
 * 3. Respeta prefers-color-scheme del sistema operativo
 * 4. Sin flash/parpadeo al cargar (gracias al script inline en <head>)
 * 5. Transición suave de 200ms
 * ============================================================================
 */

/* Clave para almacenar preferencia en localStorage */
const THEME_KEY = 'theme';

/**
 * Inicializa el sistema de dark mode.
 * Busca el botón toggle y configura el evento de click.
 */
export function initDarkMode() {
  const toggleBtn = document.getElementById('theme-toggle');
  const toggleIcon = document.getElementById('theme-toggle-icon');

  if (!toggleBtn) return;

  /* Actualizar el icono según el tema actual */
  updateIcon(toggleIcon);

  /* ── Event listener para el toggle ── */
  toggleBtn.addEventListener('click', () => {
    toggleTheme(toggleIcon);
  });
}

/**
 * Alterna entre dark y light mode.
 * Actualiza data-theme en <html>, localStorage, e icono.
 *
 * @param {HTMLElement} iconEl - Elemento del icono del toggle
 */
function toggleTheme(iconEl) {
  const html = document.documentElement;
  const currentTheme = html.getAttribute('data-theme');

  /* Cambiar al tema opuesto */
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';

  /* Aplicar tema */
  html.setAttribute('data-theme', newTheme);

  /* Guardar preferencia en localStorage */
  localStorage.setItem(THEME_KEY, newTheme);

  /* Actualizar icono */
  updateIcon(iconEl);
}

/**
 * Actualiza el icono del toggle (🌙 para dark, ☀️ para light).
 *
 * @param {HTMLElement} iconEl - Elemento del icono
 */
function updateIcon(iconEl) {
  if (!iconEl) return;

  const currentTheme = document.documentElement.getAttribute('data-theme');
  iconEl.textContent = currentTheme === 'light' ? '🌙' : '☀️';
}

/**
 * IMPORTANTE: La detección inicial del tema se hace en un script inline
 * en el <head> del HTML para evitar el "flash" de contenido.
 * 
 * El script inline establece data-theme ANTES de que el body se renderice.
 * Este módulo solo maneja la interactividad del toggle después del load.
 * 
 * Ver index.html → <script> en <head> para la lógica de inicialización.
 */
