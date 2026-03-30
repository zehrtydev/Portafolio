# ⚡ QUICK REFERENCE: PORTAFOLIO MANUEL AMADO

---

## 📌 ESENCIAL (Lee esto primero)

**Objetivo:** Portafolio web minimalista, rápido, pulido. Landing page tipo "show-case" de tu trabajo.

**Audience:** Potenciales clientes B2B (empresas medianas/grandes) + reclutadores tech

**Tone:** Profesional pero accesible. Técnico pero claro.

**Timeline:** 8-12 días (5 fases)

---

## 🏗️ STACK (ELIGE UNO)

### Opción A: React (Recomendado)
```
React 18 + TypeScript + Tailwind CSS + Framer Motion
→ Bundler: Vite
→ Deploy: Vercel
```

### Opción B: Vanilla
```
HTML5 + CSS3 (variables) + JavaScript (ES6+) + Framer Motion CDN
→ Bundler: No necesario (o Vite)
→ Deploy: Vercel
```

**Recomendación:** React si quieres mantenibilidad. Vanilla si prefieres velocidad.

---

## 📄 ESTRUCTURA (Orden exacto)

```
1. Navbar (sticky, 64px)
   └─ Logo + Links (Inicio, Proyectos, Sobre Mí, Habilidades, Contacto)

2. HERO (30-40vh)
   └─ Foto circular + Nombre + Título + Descripción + 2 CTAs

3. SOBRE MÍ (20-25vh)
   └─ Párrafo sobre tu filosofía + lo que aportas

4. PROYECTOS (40-50vh)
   └─ 2 cards (Petrodesk + Tecnifact)
      • Imagen + Problema + Solución + Tu rol + Tech + Links

5. HABILIDADES (15-20vh)
   └─ 6 skill cards en grid (HTML, CSS, JS, UI/UX, Performance, Tools)

6. CONTACTO (10-15vh)
   └─ Título + Subtítulo + 3 CTAs (WhatsApp, Email, GitHub)

7. Footer (80-100px)
   └─ Copyright + Links + Dark mode toggle

8. Global
   └─ Dark/Light mode (localStorage + prefers-color-scheme)
   └─ Smooth scroll
   └─ Scroll reveals (fade-in + slideUp)
```

---

## 🎨 DISEÑO (Copy-Paste)

### Colores
```
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
```

### Fuentes
```
Headings:  Inter / Poppins (600-700 weight)
Body:      Inter / Poppins (400 weight)
Mono:      Fira Code (para código)
```

### Espaciado (escala 8px)
```
xs:   4px
sm:   8px
md:   16px
lg:   24px
xl:   32px
2xl:  48px
```

### Animaciones
```
Fade-in:     opacity 0→1 (300-500ms)
Slide-up:    translateY 20px→0 (300-500ms)
Hover:       translateY -8px (200-300ms)
Dark mode:   transition 200ms sin parpadeos
```

---

## 📝 CONTENIDO (Copiar tal cual)

### Hero
```
Nombre: Manuel Amado
Título: Desarrollador Frontend & Especialista en UI/UX
Headline: "Transformo ideas en experiencias de alto impacto"
Descripción: Soy Manuel Amado, Desarrollador Frontend enfocado en crear 
             interfaces escalables y rápidas que resuelven problemas reales 
             y conectan con el usuario.
```

### About (Párrafo exacto)
```
Me especializo en construir puentes entre el diseño visual y la ingeniería 
de software. Mi objetivo va más allá de escribir código operativamente; 
busco entregar soluciones tecnológicas tangibles que resuelvan problemas 
de negocio y enriquezcan la vida de las personas.

Trabajo con tecnologías web nativas bajo la premisa de que una excelente 
UI/UX es el motor de retención en cualquier producto digital. Me distingo 
por mi atención al micro-detalle, elaborando código escalable, libre de 
sobreingeniería, y adoptando una postura ágil frente a nuevos retos de 
arquitectura frontend.
```

### Petrodesk
```
Título: Petrodesk — Dashboard B2B Integral
Problema: Silos de información, sin visibilidad en proyectos/inventarios
Solución: Dashboard centralizado con KPIs en tiempo real + gráficos dinámicos
Rol: Arquitectura frontend, componentes reutilizables, optimización performance
Tech: React 18 | TypeScript | Tailwind CSS | Chart.js | React Query | Axios
Link: https://petrodesk-web.vercel.app/
```

### Tecnifact
```
Título: Tecnifact — Factura en Minutos
Problema: Facturación manual consume tiempo de freelancers/emprendedores
Solución: Automatiza creación de facturas en segundos + cumplimiento tributario
Rol: UI/UX Design, desarrollo interfaz, formularios dinámicos, integración
Tech: React | JavaScript | CSS Grid & Flexbox | Formik | EmailJS
Link: https://tecnifact-web.vercel.app/
```

### Skills (6 cards)
```
1. 🏗️  HTML5           → Semántica correcta, accesibilidad WCAG
2. 🎨  CSS Avanzado   → Grid, Flexbox, animaciones fluidas
3. ⚡  JavaScript ES6+ → Vanilla, async/await, DOM manipulation
4. 🎭  UI/UX & Design → Micro-interacciones, design systems
5. ⚙️  Performance    → Lighthouse 90+, Core Web Vitals
6. 📦  Herramientas   → React, Vite, Git, npm/yarn
```

### Contacto
```
Título: ¿Listo para escalar tu producto?
Subtítulo: Si buscas fortalecer tu equipo de ingeniería o tienes un desafío 
           técnico que requiera una interfaz impecable, mi bandeja está abierta.

Botones:
- 💬 Chatear por WhatsApp → https://wa.me/573108880230?text=...
- ✉️ Enviar correo       → mailto:zehrty.dev@gmail.com
- 🔗 GitHub              → https://github.com/zehrtydev
```

---

## 🖼️ IMÁGENES NECESARIAS

| Nombre | Tamaño | Ratio | Formato |
|--------|--------|-------|---------|
| profile.jpg | 200x200 | 1:1 | WebP + JPG |
| petrodesk-screenshot.jpg | 1200x800 | 3:2 | WebP + JPG |
| tecnifact-screenshot.jpg | 1200x800 | 3:2 | WebP + JPG |

---

## ✅ CHECKLIST (El agente debe cumplir esto)

### Funcionalidad
- [ ] Navbar sticky + links internos funcionan (#proyectos, etc)
- [ ] Scroll smooth entre secciones
- [ ] Dark/light mode toggle (localStorage + prefers-color-scheme)
- [ ] CTAs clickeables (WhatsApp, email, GitHub)
- [ ] Responsive: mobile, tablet, desktop

### Diseño
- [ ] Colores exactos de paleta
- [ ] Tipografía consistente
- [ ] Espaciado sigue escala 8px
- [ ] Animaciones suaves (300-500ms)
- [ ] Micro-interacciones en hover

### Performance
- [ ] Lighthouse: Performance 90+
- [ ] Lighthouse: SEO 100
- [ ] Lighthouse: Accessibility 95+
- [ ] Core Web Vitals: Green (LCP, FID, CLS)
- [ ] Imágenes optimizadas (WebP + lazy loading)

### SEO
- [ ] Meta tags correctos (title, description, og:image)
- [ ] JSON-LD structured data
- [ ] Alt text en imágenes
- [ ] H1, H2, H3 estructura correcta
- [ ] Robots.txt + sitemap.xml

---

## 📋 FASES DE IMPLEMENTACIÓN

### Fase 1: Setup (Día 1)
- Crear proyecto (Vite + React o HTML vanilla)
- Setup CSS variables + tailwind (si aplica)
- Crear estructura de carpetas
- Navbar + Footer base

### Fase 2: Contenido (Día 2-3)
- Crear componentes de cada sección
- Integrar contenido exacto
- Links funcionales
- Imágenes

### Fase 3: Diseño (Día 3-4)
- Aplicar paleta de colores
- Tipografía + espaciado
- Animaciones + scroll reveals
- Dark/light mode

### Fase 4: Optimización (Día 4-5)
- Optimizar imágenes
- Minify CSS/JS
- Meta tags + SEO
- Lighthouse testing

### Fase 5: QA & Deploy (Día 5)
- Testing responsive
- Testing navegadores
- Deploy a Vercel
- Verificación final

---

## 🎯 MÉTRICAS DE ÉXITO

```
✓ Lighthouse Performance: 90+
✓ Lighthouse SEO: 100
✓ Core Web Vitals: All green
✓ Responsive: <768px, 768-1024px, >1024px OK
✓ Dark/Light mode: Ambos OK sin parpadeos
✓ Tiempo carga: <3s (3G lento)
✓ Accesibilidad: WCAG 2.1 AA
```

---

## 🔗 REFERENCIAS IMPORTANTES

**Especificación completa:** PORTFOLIO_SPEC_COMPLETE.md  
**Contenido exacto:** PORTFOLIO_CONTENT_EXACT.md  
**Repositorio:** [URL del git, si aplica]  
**Deploy:** Vercel  

---

## ❓ PREGUNTAS FRECUENTES PARA EL AGENTE

**P: ¿React o vanilla?**  
R: Ambas opciones son válidas. Elige según el stack que prefieras.

**P: ¿Cuál es la prioridad?**  
R: Performance > Diseño > Funcionalidad. Lighthouse 90+ es obligatorio.

**P: ¿Puedo agregar más proyectos?**  
R: No. MVP = 2 proyectos (Petrodesk + Tecnifact). Futuro: agregar más.

**P: ¿Usar un template CSS?**  
R: Sí, Tailwind está permitido. No hay restricción.

**P: ¿Next.js en lugar de Vite?**  
R: Sí, está permitido. Puede mejorar SEO.

**P: ¿Cambiar colores primarios?**  
R: No. Los colores están definidos exactamente. Sin variaciones.

---

## 📞 PUNTO DE CONTACTO

En caso de dudas, consultar:
1. PORTFOLIO_SPEC_COMPLETE.md (detalles técnicos)
2. PORTFOLIO_CONTENT_EXACT.md (contenido exacto)
3. Este documento (resumen rápido)

---

**Version:** 1.0  
**Última actualización:** 2026-03-30  
**Estado:** Listo para arquitecto
