# 📋 PLAN DE IMPLEMENTACIÓN: PORTAFOLIO MANUEL AMADO

**Autor:** Manuel Amado  
**Fecha de creación:** Marzo 30, 2026  
**Estado:** Especificación lista para arquitecto de software  
**Versión:** 1.0

---

## 🎯 OBJETIVO FINAL

Crear un portafolio web **pulido, profesional e impactante** que comunique:
- Quién eres (Desarrollador Frontend especializado en UI/UX)
- Qué haces (Construyo interfaces escalables y rápidas)
- Qué problemas resuelves
- Evidencia de tu trabajo (Petrodesk + Tecnifact)
- Cómo contactarte

**Resultado esperado:** Landing page atractiva, responsive, optimizada para SEO y performance que sea "mostrable al 100%".

---

## 📐 ARQUITECTURA GENERAL

### Stack Recomendado

**Frontend Framework:**
- **Opción 1:** React 18+ + TypeScript + Tailwind CSS + Framer Motion (recomendado para mantenibilidad)
- **Opción 2:** HTML/CSS vanilla + JavaScript (ES6+) + GSAP o Framer Motion CDN (más ligero, perfecto para portafolio)
- **Decisión:** Usa la que prefieras, ambas producen excelentes resultados

**Librerías específicas:**
- `framer-motion` o `gsap` para animaciones suaves
- `react-intersection-observer` (si usas React) para scroll reveals
- `clsx` o `classnames` para gestión condicional de clases CSS

**Build & Deploy:**
- Vite (si usas React/vanilla con bundler)
- Vercel (hosting actual, mantener)
- Next.js (opcional, para mejor SEO/SSG)

**Tooling:**
- TypeScript (opcional pero recomendado)
- ESLint + Prettier
- Lighthouse para auditoría de performance

---

## 🏗️ ESTRUCTURA DE NAVEGACIÓN

### Menú Principal (Sticky/Fixed en scroll)
```
Logo/Nombre | Inicio | Proyectos | Sobre Mí | Habilidades | Contacto
```

**Comportamiento:**
- Sticky desde el top (no fixed, posición relative al flujo)
- Altura: 64px
- Fondo: semi-transparente con backdrop blur (glassmorphism sutil)
- Links con efecto hover: underline animado o color change
- Mobile: hamburger menu (collapsed) que abre modal/drawer

---

## 📄 ESTRUCTURA DE SECCIONES

### 1️⃣ HERO (30-40vh)

**Componentes:**
- Background: Gradiente sutil (opcional) o color sólido + patrón geométrico subtle
- Contenido centrado:
  - Foto de perfil (circular, 200px, con border sutil)
  - Nombre: "Manuel Amado"
  - Título: "Desarrollador Frontend & Especialista en UI/UX"
  - Subtitle: "Transformo ideas en experiencias de alto impacto"
  - Párrafo de presentación (máx 2-3 líneas):
    "Construyo interfaces escalables y rápidas que resuelven problemas reales y conectan con los usuarios"
  - CTA primario: "Explorar mi trabajo" (enlace a #proyectos)
  - CTA secundario: "Hablemos de tu proyecto" (enlace a #contacto)

**Animaciones:**
- Fade-in en los elementos al cargar (300ms)
- Parallax sutil de la foto (opcional)

**Responsive:**
- Desktop: Layout horizontal (foto + texto side-by-side)
- Mobile (< 768px): Layout vertical (foto arriba, texto debajo)

---

### 2️⃣ SOBRE MÍ (20-25vh)

**Secciones internas:**

**2.1 Quién soy**
```
Título: "Detrás del código"
Párrafo principal (max 300 palabras):

"Me especializo en construir puentes entre el diseño visual y la ingeniería de software. 
Mi objetivo va más allá de escribir código operativamente; busco entregar soluciones 
tecnológicas tangibles que resuelvan problemas de negocio y enriquezcan la vida de las personas.

Trabajo con tecnologías web nativas bajo la premisa de que una excelente UI/UX es el motor 
de retención en cualquier producto digital. Me distingo por mi atención al micro-detalle, 
elaborando código escalable, libre de sobreingeniería, y adoptando una postura ágil 
frente a nuevos retos de arquitectura frontend."
```

**2.2 Lo que aportaré a tu proyecto**
- Interfaz pulida e intuitiva
- Atención al detalle (micro-interacciones, animations)
- Código escalable y mantenible
- Performance optimizado
- Mentalidad orientada a usuario

**Layout:**
- Contenedor con padding simétrico (40px mobile, 80px desktop)
- Texto en color primario, tamaño 16-18px
- Usar sistema de grillas para estructura

---

### 3️⃣ PROYECTOS (40-50vh)

**Título:** "Casos de Estudio"
**Subtítulo:** "Proyectos destacados donde diseño, código y estrategia se unen para generar valor"

**Estructura de cada proyecto (Card):**

```
┌─────────────────────────────────────┐
│        [Imagen del proyecto]         │
├─────────────────────────────────────┤
│ Título: "Petrodesk" o "Tecnifact"   │
│ Tagline: Una línea corta             │
│                                      │
│ Problema:                            │
│ [1 párrafo describing el pain point] │
│                                      │
│ Solución:                            │
│ [1 párrafo describing tu trabajo]    │
│                                      │
│ Mi rol: [Tu rol específico]          │
│ Tech: [React] [Node.js] [ChartJS]   │
│                                      │
│ [Ver en vivo] [GitHub]               │
└─────────────────────────────────────┘
```

#### **Proyecto 1: PETRODESK**

**Tipo:** B2B SaaS Dashboard
**Imagen destacada:** Screenshot del dashboard principal
**Descripción:**

```
Título: Petrodesk — Dashboard B2B Integral

Problema:
Las empresas del sector petrolero pierden tiempo en silos de información, 
sin visibilidad real en proyectos, recursos e inventarios. Los reportes 
toman horas y la toma de decisiones se ralentiza.

Solución:
Plataforma centralizada que consolida KPIs de proyectos en tiempo real, 
con gráficos dinámicos, filtros avanzados y exportación de reportes 
automatizada.

Mi rol:
Arquitectura frontend | Diseño de componentes reutilizables | Integración 
con APIs REST | Optimización de performance en dashboards complejos

Tech Stack:
React 18 | TypeScript | Tailwind CSS | Chart.js | React Query | Axios
```

**Información para el link:**
- URL en vivo: `https://petrodesk-web.vercel.app/` 
- GitHub: [Si es público, agregar; si no, poner "Código privado"]
- Estado: "Mostrable (aún en desarrollo de features avanzadas)"

---

#### **Proyecto 2: TECNIFACT**

**Tipo:** SaaS Facturación
**Imagen destacada:** Screenshot de la interfaz principal
**Descripción:**

```
Título: Tecnifact — Factura en Minutos

Problema:
Pequeños emprendedores y freelancers pierden tiempo en la generación 
manual de facturas, afectando su flujo de trabajo y satisfacción del cliente.

Solución:
Plataforma intuitiva que automatiza la creación de facturas profesionales 
en segundos, con plantillas personalizables, cumplimiento tributario y 
envío directo por email.

Mi rol:
UI/UX Design | Desarrollo de interfaz de usuario | Formularios dinámicos | 
Integración con backend | Testing de usabilidad

Tech Stack:
React | JavaScript | CSS Grid & Flexbox | Formik | Stripe API [si aplica]
```

**Información para el link:**
- URL en vivo: `https://tecnifact-web.vercel.app/`
- GitHub: [Si es público, agregar; si no, poner "Código privado"]
- Estado: "100% Productivo"

---

**Layout de la sección:**
- Grid de 2 columnas (desktop)
- 1 columna (mobile < 768px)
- Cada card con hover effect: 
  - `transform: translateY(-8px)`
  - `box-shadow: 0 20px 40px rgba(0,0,0,0.1)`
- Transición suave: `transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)`

---

### 4️⃣ HABILIDADES (15-20vh)

**Título:** "Arsenal Tecnológico"
**Layout:** Cards en grid 2x3 o similar, cada una con:

```
[Icono/Emoji]
Nombre skill
Descripción corta (1 línea)

Ejemplos:
┌──────────────────────────┐
│ 🏗️  HTML5                │
│ Semántica correcta,      │
│ accesibilidad WCAG       │
└──────────────────────────┘

┌──────────────────────────┐
│ 🎨  CSS Avanzado         │
│ Grid, Flexbox,           │
│ animaciones fluidas       │
└──────────────────────────┘

┌──────────────────────────┐
│ ⚡  JavaScript (ES6+)    │
│ Vanilla, async/await,    │
│ DOM manipulation         │
└──────────────────────────┘

┌──────────────────────────┐
│ 🎭  UI/UX & Design       │
│ Micro-interacciones,     │
│ design systems           │
└──────────────────────────┘

┌──────────────────────────┐
│ ⚙️  Performance Web       │
│ Lighthouse 90+,          │
│ Core Web Vitals          │
└──────────────────────────┘

┌──────────────────────────┐
│ 📦  Herramientas         │
│ React, Vite, Git,        │
│ npm/yarn                 │
└──────────────────────────┘
```

**Animación:** Cards que aparecen al hacer scroll (Intersection Observer)

---

### 5️⃣ CONTACTO (10-15vh)

**Título:** "¿Listo para escalar tu producto?"
**Subtítulo:** "Si buscas fortalecer tu equipo de ingeniería o tienes un desafío técnico, estoy disponible."

**CTA Buttons:**

| Botón | Acción | Color |
|-------|--------|-------|
| 💬 Chatear por WhatsApp | `https://wa.me/573108880230?text=...` | Guiate con la paleta |
| ✉️ Enviar correo | `mailto:zehrty.dev@gmail.com` | Guiate con la paleta |
| 🔗 Perfil GitHub | `https://github.com/zehrtydev` | Guiate con la paleta |

**Layout:**
- Centrado verticalmente
- 3 buttons stacked horizontalmente (desktop)
- Stacked verticalmente (mobile)
- Hover effect: cambio de color + pequeña elevación

---

### 6️⃣ FOOTER

**Contenido:**
```
© 2026 Manuel Amado. Diseñado con propósito, desarrollado con precisión.

Links: [Home] [GitHub] [LinkedIn] [Twitter/X] [Email]

Indicador de tema: 🌙 (toggle dark/light mode)
```

**Altura:** 80-100px

---

## 🎨 DISEÑO VISUAL

### Paleta de colores

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

### Tipografía

**Headings:**
- Font: `Inter`, `Poppins` o `Geist`
- Sizes:
  - h1: `48px` (desktop), `32px` (mobile)
  - h2: `36px` (desktop), `28px` (mobile)
  - h3: `24px` (desktop), `20px` (mobile)
- Weight: 600-700 (bold)

**Body:**
- Font: `Inter`, `Poppins` o `Geist`
- Size: `16px` (desktop), `14px` (mobile)
- Weight: 400 (regular)
- Line-height: 1.6

**Code/Monospace:**
- Font: `Fira Code`, `JetBrains Mono`
- Size: `14px`

### Espaciado (Sistema de 8px)

```
xs: 4px
sm: 8px
md: 16px
lg: 24px
xl: 32px
2xl: 48px
3xl: 64px
```

### Border Radius

```
sm: 4px
md: 8px
lg: 12px
xl: 16px
pill: 9999px
```

### Sombras

```
sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05)
md: 0 4px 6px -1px rgba(0, 0, 0, 0.1)
lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1)
xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1)
```

---

## ✨ MICRO-INTERACCIONES

### 1. Navegación
- Links con `underline` animado (width: 0 → 100% en 300ms)
- Hover color change
- Active state con indicador visual

### 2. Botones
- Hover: elevar 4-8px + cambiar sombra
- Click: feedback visual (scale 0.95)
- Transición: 200-300ms cubic-bezier(0.34, 1.56, 0.64, 1)

### 3. Cards de proyectos
- Hover: translateY(-8px) + shadow elevation
- Scroll reveal: fade-in + slideUp desde bottom (300-500ms)

### 4. Scroll Reveal
- Elementos aparecen al entrar en viewport (Intersection Observer)
- Animación: fade-in + translateY(20px → 0)
- Duration: 500ms
- Delay: stagered (cada elemento con +100ms)

### 5. Dark Mode
- Toggle en footer
- Transición suave (200ms) sin parpadeos
- Persistencia: localStorage
- Respeta `prefers-color-scheme` del OS

### 6. Smooth Scrolling
- `scroll-behavior: smooth` en `html`
- Offset de 80px (altura del navbar) para links internos

---

## 📱 RESPONSIVE DESIGN

### Breakpoints

```
Mobile: < 640px
Tablet: 640px - 1024px
Desktop: > 1024px
```

### Adaptaciones por dispositivo

**Mobile (< 640px):**
- Font sizes: -20% (reducido)
- Padding: reducido a 16px
- Navigation: hamburger menu
- Layout: 1 columna
- Hero: stack vertical (foto + texto)
- Projects: 1 card por vista

**Tablet (640px - 1024px):**
- Font sizes: -10%
- Padding: 24px
- Navigation: visible completo
- Projects: 2 cards por fila

**Desktop (> 1024px):**
- Font sizes: 100% (diseño)
- Padding: 40-80px
- Navigation: sticky completo
- Projects: 2 cards por fila
- Skills: grid 3x2

---

## ⚡ PERFORMANCE & SEO

### Métricas Target (Lighthouse)

- Performance: **90+**
- Accessibility: **95+**
- Best Practices: **90+**
- SEO: **100**
- Core Web Vitals: **Green** todos

### Optimizaciones

**Imágenes:**
- Usar formatos modernos: WebP + fallback JPG
- Lazy loading: `loading="lazy"` + Intersection Observer
- Responsive: `srcset` para diferentes resolutions
- Tamaños máximos: Hero 1200px, Cards 600px

**CSS/JS:**
- Minify en producción
- Code splitting si usas React
- CSS crítico inline en `<head>`
- Defer JavaScript donde sea posible

**Fonts:**
- Google Fonts con `display=swap`
- Limit a máx 2-3 familias tipográficas
- Preload: `<link rel="preload" as="font">`

**Meta Tags:**
```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="Manuel Amado — Desarrollador Frontend especializado en UI/UX. Transformo ideas en experiencias de alto impacto.">
<meta name="keywords" content="frontend, developer, ui, ux, react, javascript">
<meta name="author" content="Manuel Amado">
<meta property="og:title" content="Manuel Amado — Desarrollador Frontend">
<meta property="og:description" content="Construyo interfaces escalables y rápidas.">
<meta property="og:image" content="[URL de imagen 1200x630]">
<meta property="og:url" content="https://tu-dominio.com">
<meta name="twitter:card" content="summary_large_image">
```

**Structured Data (JSON-LD):**
```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Manuel Amado",
  "url": "https://tu-dominio.com",
  "jobTitle": "Frontend Developer",
  "image": "[foto-url]",
  "sameAs": [
    "https://github.com/zehrtydev",
    "https://linkedin.com/in/zehrty"
  ]
}
```

---

## 🔧 ARCHIVOS & ESTRUCTURA

### Estructura de carpetas (si usas React)

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Projects.jsx
│   ├── Skills.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   └── common/
│       ├── Button.jsx
│       ├── Card.jsx
│       └── SectionTitle.jsx
├── assets/
│   ├── images/
│   │   ├── profile.jpg
│   │   ├── petrodesk-screenshot.jpg
│   │   └── tecnifact-screenshot.jpg
│   ├── icons/
│   └── fonts/
├── styles/
│   ├── globals.css
│   ├── variables.css (CSS variables)
│   └── animations.css
├── utils/
│   ├── constants.js
│   └── helpers.js
├── App.jsx
└── main.jsx
```

### Estructura de carpetas (si usas HTML vanilla)

```
public/
├── index.html
├── css/
│   ├── main.css
│   ├── variables.css
│   ├── components.css
│   └── animations.css
├── js/
│   ├── main.js
│   ├── navbar.js
│   ├── scrollReveal.js
│   └── darkMode.js
├── images/
│   ├── profile.jpg
│   ├── petrodesk-screenshot.jpg
│   └── tecnifact-screenshot.jpg
└── assets/
    └── icons/
```

---

## 📦 ASSETS NECESARIOS

**Imágenes a preparar:**
1. Foto de perfil (200x200px mín, 1:1 ratio, círculo)
2. Screenshot Petrodesk (1200x800px recomendado)
3. Screenshot Tecnifact (1200x800px recomendado)
4. Background pattern (opcional, subtle)

**Iconos necesarios:**
- GitHub
- LinkedIn (opcional)
- Email
- WhatsApp
- Moon/Sun (para dark mode toggle)

---

## 🚀 IMPLEMENTACIÓN POR FASES

### Fase 1: Setup & Estructura (Día 1-2)
- [ ] Crear proyecto (React + Vite o HTML vanilla)
- [ ] Setup de CSS (variables, globals, tailwind si aplica)
- [ ] Crear estructura de carpetas
- [ ] Implementar Navbar base
- [ ] Implementar Footer base
- [ ] Setup dark mode (localStorage + CSS variables)

### Fase 2: Contenido (Día 2-3)
- [ ] Crear componentes de cada sección
- [ ] Implementar Hero section
- [ ] Implementar About section
- [ ] Implementar Projects section (con datos de Petrodesk + Tecnifact)
- [ ] Implementar Skills section
- [ ] Implementar Contact section

### Fase 3: Diseño & Animaciones (Día 3-4)
- [ ] Aplicar paleta de colores
- [ ] Tipografía (cargar fuentes)
- [ ] Animaciones con Framer Motion o GSAP
- [ ] Scroll reveals
- [ ] Hover effects en botones/cards
- [ ] Transiciones en navbar

### Fase 4: Optimización (Día 4-5)
- [ ] Optimizar imágenes (WebP + compression)
- [ ] Lazy loading imágenes
- [ ] Minify CSS/JS
- [ ] Meta tags & SEO
- [ ] Structured data (JSON-LD)
- [ ] Testing de Lighthouse
- [ ] Testing de accesibilidad (Axe)

### Fase 5: QA & Deploy (Día 5)
- [ ] Testing en dispositivos (mobile, tablet, desktop)
- [ ] Testing en navegadores (Chrome, Firefox, Safari)
- [ ] Verificar responsive design
- [ ] Verificar dark/light mode
- [ ] Deploy a Vercel
- [ ] Verificar performance en producción

---

## ✅ CHECKLIST DE ACEPTACIÓN

### Funcionalidad
- [ ] Navegación completa y funcional
- [ ] Scroll suave entre secciones
- [ ] Dark/light mode funcional
- [ ] Botones CTA clickeables (WhatsApp, email, GitHub)
- [ ] Links internos funcionan correctamente
- [ ] Proyectos muestran información correcta

### Diseño
- [ ] Colores respetan paleta definida
- [ ] Tipografía consistente
- [ ] Responsive en mobile, tablet, desktop
- [ ] Micro-interacciones suaves
- [ ] Consistencia visual entre secciones

### Performance
- [ ] Lighthouse Performance ≥ 90
- [ ] Lighthouse SEO = 100
- [ ] Core Web Vitals: Green
- [ ] Tiempo carga < 3s (3G lento)
- [ ] No hay layout shifts

### SEO
- [ ] Meta tags correctos
- [ ] Open Graph configurado
- [ ] Structured data (JSON-LD) presente
- [ ] Images tienen alt text
- [ ] Encabezados (h1, h2, h3) estructura correcta
- [ ] Links tienen aria-labels donde sea necesario

### Accesibilidad
- [ ] WCAG 2.1 AA compliance
- [ ] Navegación por teclado funciona
- [ ] Color contrast ≥ 4.5:1
- [ ] Focus indicators visibles
- [ ] Textos alt en imágenes

### Contenido
- [ ] Información de Petrodesk correcta
- [ ] Información de Tecnifact correcta
- [ ] Links a live demos correctos
- [ ] Links a GitHub correctos
- [ ] Links de contacto funcionales

---

## 📝 NOTAS ADICIONALES

### Posibles mejoras futuras (no para MVP)
1. Blog: Publicar artículos sobre desarrollo web
2. Testimonios: Agregar quotes de clientes satisfechos
3. Estadísticas: "X projectos completados", "X+ commits en GitHub"
4. Animaciones avanzadas: Canvas-based effects, 3D (Three.js)
5. Newsletter: Suscripción para actualizaciones
6. Analytics: Google Analytics 4 o alternativa privacy-focused

### Decisiones de arquitectura
- **No usar frameworks pesados** para un portafolio simple (evitar overhead)
- **Mantener performance como prioridad #1**
- **Simplicidad > Complejidad** (un portafolio debe ser rápido y limpio)
- **Mobile-first approach** en todos los componentes

### Testing recommendations
- Unit tests: Jest + React Testing Library (si usas React)
- E2E tests: Playwright o Cypress
- Visual regression: Percy o similar
- Accessibility: Axe DevTools
- Performance: Lighthouse CI

---

## 🔗 REFERENCIAS & RECURSOS

### Inspiraciones de portafolios (diseño)
- vercel.com
- nextjs.org
- rauchg.com
- waitlist de productos recientes

### Herramientas recomendadas
- Figma: Para prototipos rápidos
- Lighthouse: Para auditoría de performance
- WebAIM: Para verificación de accesibilidad
- Google PageSpeed Insights: Para análisis de velocidad
- Schema.org: Para validar JSON-LD

### Documentación
- MDN Web Docs: HTML, CSS, JavaScript
- React Docs: Si usas React
- Tailwind Docs: Si usas Tailwind
- Framer Motion Docs: Para animaciones
- Web.dev: Artículos sobre performance

---

## 📞 PUNTO DE CONTACTO

**En caso de dudas o clarificaciones:**
- Pregunta directa al arquitecto sobre cualquier ambigüedad
- Este documento es el "source of truth" del proyecto
- Cualquier cambio debe ser aprobado antes de implementación

---

**FIN DEL DOCUMENTO**

Última actualización: 2026-03-30  
Version: 1.0
