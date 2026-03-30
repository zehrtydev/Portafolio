# 🤖 PROMPT PARA AGENTE ARQUITECTO DE SOFTWARE

Pasa este prompt directamente a tu agente arquitecto. Contiene toda la información necesaria para construir el portafolio sin ambigüedades.

---

## PROMPT COMPLETO

```
Eres un arquitecto de software experto. Tu tarea es construir un portafolio web 
profesional para Manuel Amado, desarrollador frontend especializado en UI/UX.

OBJETIVO FINAL:
Crear una landing page minimalista, rápida y pulida que comunique quién es Manuel, 
qué hace, qué problemas resuelve, y muestre 2 casos de estudio (Petrodesk + Tecnifact).

REFERENCIAS DOCUMENTACIÓN:
- PORTFOLIO_SPEC_COMPLETE.md (especificación técnica detallada)
- PORTFOLIO_CONTENT_EXACT.md (contenido word-by-word)
- QUICK_REFERENCE_CARD.md (resumen ejecutivo)

LEE PRIMERO: QUICK_REFERENCE_CARD.md para entender rápidamente qué hacer.

---

TECNOLOGÍA (ELIGE UNA OPCIÓN):

Opción A: React 18 + TypeScript + Tailwind CSS + Framer Motion + Vite
Opción B: HTML5 + CSS3 + JavaScript (ES6+) + Framer Motion CDN + Vite
Opción C: Next.js (si prefieres mejor SEO/SSG)

Deploy: Vercel (actual)

---

ESTRUCTURA DE SECCIONES (ORDEN EXACTO):

1. NAVBAR (sticky, 64px)
   - Logo "MA" o "Manuel"
   - Links: Inicio | Proyectos | Sobre Mí | Habilidades | Contacto
   - Comportamiento: Sigue usuario en scroll, fondo semi-transparente con backdrop blur

2. HERO (30-40vh)
   - Foto circular (200px)
   - Nombre: "Manuel Amado"
   - Título: "Desarrollador Frontend & Especialista en UI/UX"
   - Headline: "Transformo ideas en experiencias de alto impacto"
   - Párrafo: "Soy Manuel Amado, Desarrollador Frontend enfocado en crear interfaces..."
   - Botón 1: "Explorar mi trabajo" → #proyectos
   - Botón 2: "Hablemos de tu proyecto" → #contacto (con border)
   - Animación: Fade-in 300ms

3. SOBRE MÍ (20-25vh)
   - Título: "Detrás del código"
   - Párrafo: [VER PORTFOLIO_CONTENT_EXACT.md → ABOUT SECTION]
   - Optional: Bullet points de lo que aporta

4. PROYECTOS (40-50vh)
   - Título: "Casos de Estudio"
   - Subtítulo: "Proyectos destacados donde diseño, código y estrategia..."
   
   Proyecto 1: PETRODESK
   - Imagen: petrodesk-screenshot.jpg (1200x800px)
   - Título: "Petrodesk — Dashboard B2B Integral"
   - Problema: [VER PORTFOLIO_CONTENT_EXACT.md]
   - Solución: [VER PORTFOLIO_CONTENT_EXACT.md]
   - Mi Rol: [VER PORTFOLIO_CONTENT_EXACT.md]
   - Tech: React 18 | TypeScript | Tailwind CSS | Chart.js | React Query | Axios
   - Links: [Ver en vivo] https://petrodesk-web.vercel.app/ | [Código Privado]
   
   Proyecto 2: TECNIFACT
   - Imagen: tecnifact-screenshot.jpg (1200x800px)
   - Título: "Tecnifact — Factura en Minutos"
   - Problema: [VER PORTFOLIO_CONTENT_EXACT.md]
   - Solución: [VER PORTFOLIO_CONTENT_EXACT.md]
   - Mi Rol: [VER PORTFOLIO_CONTENT_EXACT.md]
   - Tech: React | JavaScript | CSS Grid & Flexbox | Formik | EmailJS | Stripe API
   - Links: [Ver en vivo] https://tecnifact-web.vercel.app/ | [Código Privado]
   
   Layout: Grid 2 columnas (desktop) | 1 columna (mobile)
   Hover effect: translateY(-8px) + shadow elevation
   Scroll reveal: fade-in + slideUp (500ms)

5. HABILIDADES (15-20vh)
   - Título: "Arsenal Tecnológico"
   - 6 skill cards en grid (3x2 desktop, 2x3 tablet, 1x6 mobile)
   - Cards: Icono + Nombre + Descripción (1 línea)
   - [VER PORTFOLIO_CONTENT_EXACT.md → SKILLS SECTION para lista exacta]

6. CONTACTO (10-15vh)
   - Título: "¿Listo para escalar tu producto?"
   - Subtítulo: "Si buscas fortalecer tu equipo de ingeniería..."
   - 3 CTAs:
     * 💬 Chatear por WhatsApp → https://wa.me/573108880230?text=Hola%20Manuel...
     * ✉️ Enviar correo → mailto:zehrty.dev@gmail.com
     * 🔗 GitHub → https://github.com/zehrtydev
   - Hover effect: color change + elevación

7. FOOTER (80-100px)
   - Copyright: "© 2026 Manuel Amado. Diseñado con propósito, desarrollado con precisión."
   - Optional links: [Inicio] [Proyectos] [GitHub] [Email]
   - Dark mode toggle: 🌙 (en la esquina)

---

DISEÑO VISUAL:

Paleta de Colores (EXACTAS, sin cambios):
- Primary (Brand):     #C41E3A
- Primary-hover:       #E11D48

- Background:          #0A0A0A
- Surface:             #121212
- Surface-2:           #1A1A1A

- White:               #FFFFFF
- Neutral-900:         #0A0A0A
- Neutral-800:         #121212
- Neutral-700:         #1F1F1F
- Neutral-600:         #2A2A2A
- Neutral-500:         #404040
- Neutral-400:         #737373
- Neutral-300:         #A3A3A3
- Neutral-200:         #D4D4D4
- Neutral-100:         #F5F5F5

- Success:             #22C55E
- Warning:             #F59E0B
- Info:                #06B6D4
- Danger:              #EF4444

Dark mode:
- Background:          #0A0A0A
- Card:                #121212
- Card-hover:          #1A1A1A
- Text-primary:        #FFFFFF
- Text-secondary:      #A3A3A3
- Text-muted:          #737373
- Border:              rgba(255,255,255,0.08)
- Divider:             rgba(255,255,255,0.05)

Tipografía:
- Headings: Inter, Poppins o Geist (weight 600-700)
  * h1: 48px (desktop), 32px (mobile)
  * h2: 36px (desktop), 28px (mobile)
  * h3: 24px (desktop), 20px (mobile)
- Body: Inter, Poppins o Geist (weight 400)
  * 16px (desktop), 14px (mobile)
  * line-height: 1.6
- Mono: Fira Code, JetBrains Mono (14px)

Espaciado (Escala 8px):
xs: 4px, sm: 8px, md: 16px, lg: 24px, xl: 32px, 2xl: 48px, 3xl: 64px

Border radius:
sm: 4px, md: 8px, lg: 12px, xl: 16px, pill: 9999px

Sombras:
sm: 0 1px 2px rgba(0,0,0,0.05)
md: 0 4px 6px rgba(0,0,0,0.1)
lg: 0 10px 15px rgba(0,0,0,0.1)
xl: 0 20px 25px rgba(0,0,0,0.1)

---

MICRO-INTERACCIONES Y ANIMACIONES:

1. Navegación
   - Links con underline animado (0→100% width en 300ms)
   - Hover: cambio de color
   - Active state: indicador visual

2. Botones
   - Hover: translateY(-4 a -8px) + shadow elevation
   - Click: scale 0.95
   - Transición: 200-300ms cubic-bezier(0.34, 1.56, 0.64, 1)

3. Cards de Proyectos
   - Hover: translateY(-8px) + box-shadow elevation
   - Scroll reveal: fade-in + translateY(20px→0) en 500ms
   - Scroll reveal delay: staggered (+100ms cada elemento)

4. Scroll Reveal (Intersection Observer)
   - Cuando elemento entra en viewport
   - Fade-in: opacity 0→1
   - Slide-up: translateY(20px)→0
   - Duration: 500ms
   - Delay: staggered

5. Dark Mode
   - Toggle en footer (🌙)
   - Transición suave: 200ms
   - Sin parpadeos
   - Persistencia: localStorage
   - Respeta: prefers-color-scheme del OS
   - Función: toggleDarkMode() → localStorage.setItem('theme', ...)

6. Smooth Scrolling
   - scroll-behavior: smooth en html
   - Offset de 80px (altura navbar) para links internos

---

RESPONSIVE DESIGN:

Breakpoints:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

Adaptaciones:
Mobile (< 640px):
  - Font sizes: -20%
  - Padding: 16px
  - Navigation: hamburger menu
  - Layout: 1 columna
  - Hero: stack vertical (foto arriba, texto abajo)
  - Projects: 1 card por vista

Tablet (640px - 1024px):
  - Font sizes: -10%
  - Padding: 24px
  - Navigation: visible completo
  - Projects: 2 cards por fila

Desktop (> 1024px):
  - Font sizes: 100% (design)
  - Padding: 40-80px
  - Navigation: sticky completo
  - Projects: 2 cards por fila
  - Skills: grid 3x2

---

OPTIMIZACIÓN Y PERFORMANCE:

Imágenes:
- Formatos modernos: WebP + fallback JPG
- Lazy loading: loading="lazy" + Intersection Observer
- Responsive: srcset para diferentes resolutions
- Tamaños: Hero 1200px, Cards 600px
- Compresión: 80-90% calidad

CSS/JS:
- Minify en producción
- Code splitting si usas React
- CSS crítico inline en <head>
- Defer JavaScript donde sea posible

Fonts:
- Google Fonts con display=swap
- Máximo 2-3 familias tipográficas
- Preload: <link rel="preload" as="font">

---

META TAGS Y SEO:

Meta Tags (HTML Head):
[VER PORTFOLIO_CONTENT_EXACT.md → META TAGS SECTION para tags exactos]

Structured Data (JSON-LD):
[VER PORTFOLIO_CONTENT_EXACT.md → STRUCTURED DATA SECTION]

Archivos necesarios:
- robots.txt: User-agent: *, Allow: /
- sitemap.xml: Con todas las rutas internas
- favicon: favicon.ico + apple-touch-icon.png

---

IMÁGENES Y ASSETS:

Imágenes necesarias:
1. profile.jpg (200x200px, 1:1, círculo)
2. petrodesk-screenshot.jpg (1200x800px, 3:2)
3. tecnifact-screenshot.jpg (1200x800px, 3:2)

Iconos necesarios (puedes usar emoji o SVG):
- GitHub, Email, WhatsApp, Moon/Sun, Menu (hamburger)

---

CHECKLIST DE ACEPTACIÓN:

Funcionalidad:
☐ Navbar sticky + links internos funcionan
☐ Scroll suave entre secciones
☐ Dark/light mode funcional (localStorage + toggle)
☐ CTAs clickeables (WhatsApp, email, GitHub)
☐ Responsive: mobile, tablet, desktop OK

Diseño:
☐ Colores exactos de paleta (sin variaciones)
☐ Tipografía consistente
☐ Espaciado sigue escala 8px
☐ Animaciones suaves (300-500ms)
☐ Micro-interacciones en hover/click

Performance (Lighthouse):
☐ Performance: 90+
☐ Accessibility: 95+
☐ Best Practices: 90+
☐ SEO: 100
☐ Core Web Vitals: All green

SEO:
☐ Meta tags correctos
☐ Open Graph configurado
☐ JSON-LD structured data
☐ Alt text en imágenes
☐ H1, H2, H3 estructura correcta

Contenido:
☐ Información de Petrodesk correcta
☐ Información de Tecnifact correcta
☐ Links a live demos correctos
☐ Links a GitHub correctos
☐ Links de contacto funcionales

---

INSTRUCCIONES FINALES:

1. LEE primero: QUICK_REFERENCE_CARD.md (5 min)
2. LEE después: PORTFOLIO_SPEC_COMPLETE.md (15 min)
3. CONSULTA cuando dudes: PORTFOLIO_CONTENT_EXACT.md (referencia)
4. IMPLEMENTA siguiendo el checklist de aceptación
5. VERIFICA con Lighthouse (target: 90+ Perf, 100 SEO)
6. DEPLOY a Vercel

Stack recomendado:
- React 18 + TypeScript + Tailwind CSS + Framer Motion + Vite
- O: HTML5 + CSS3 + JS vanilla + Framer Motion CDN + Vite
- Deploy: Vercel

No cambies:
- Colores de la paleta
- Contenido exacto de secciones
- Estructura de layout
- Métricas de performance (90+ Lighthouse)

Puedes cambiar:
- Framework (React, Vue, vanilla, Next.js, etc)
- CSS preprocessor (SCSS, Tailwind, etc)
- Componentes UI (siempre que cumplan diseño)
- Ubicación de elementos (respetando responsive)

En caso de dudas:
- Este prompt es la fuente de verdad
- Documento PORTFOLIO_SPEC_COMPLETE.md tiene detalles técnicos
- Documento PORTFOLIO_CONTENT_EXACT.md tiene contenido exacto

Timeline: 8-12 días en 5 fases (ver PORTFOLIO_SPEC_COMPLETE.md)

¡Adelante! 🚀
```

---

## CÓMO USAR ESTE PROMPT

1. **Copia el PROMPT COMPLETO** (la sección entre los backticks)
2. **Pásalo a tu agente arquitecto** tal cual
3. **Comparte también estos archivos:**
   - PORTFOLIO_SPEC_COMPLETE.md
   - PORTFOLIO_CONTENT_EXACT.md
   - QUICK_REFERENCE_CARD.md
4. **El agente tiene todo lo necesario** para empezar sin hacer preguntas

---

## QUÉ ESPERAR DEL AGENTE

**Entrada:** Este prompt + 3 documentos de referencia  
**Salida esperada:**
- Repositorio Git limpio
- Código modular y escalable
- Sitio deployed en Vercel
- Lighthouse score: 90+ performance, 100 SEO
- Dark/light mode funcional
- Responsivo en mobile/tablet/desktop

---

**Version:** 1.0  
**Fecha:** 2026-03-30  
**Estado:** Listo para pasar al agente
