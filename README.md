# Portafolio - Francisco Blanco

Sitio web de portafolio personal construido con [Astro](https://astro.build/). Genera HTML estático puro sin JavaScript.

## Inicio rápido

```bash
npm install
npm run dev
```

Abre [http://localhost:4321](http://localhost:4321) en el navegador.

## Scripts

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Genera el sitio estático en `dist/` |
| `npm run preview` | Previsualiza el build en local |

## Estructura del proyecto

```
src/
├── layouts/Base.astro          Layout base (head, banner, footer)
├── pages/
│   ├── index.astro             Página principal
│   └── proyectos-mas-importantes/[id].astro
│                               Páginas de detalle de proyectos
├── components/
│   ├── TextList.astro          Lista de contenido con VT
│   ├── Title.astro             Títulos de sección con VT
│   ├── PorcentajeCircular.astro
│   ├── PorcentajeLinear.astro
│   └── Footer.astro
├── data/
│   ├── profile.ts              Biografía y redes sociales
│   ├── proyects.ts             Datos de proyectos
│   ├── skills.ts               Habilidades técnicas
│   └── experience.ts           Experiencia laboral
├── styles/
│   └── global.scss             Estilos globales (SCSS)
└── utils/
    └── sanitizeVTName.ts       Utilidad para View Transitions
```

## Deploy en Vercel

El build genera archivos estáticos en `dist/`. Configura el proyecto en Vercel con:

- **Framework Preset:** Astro
- **Build Command:** `npm run build`
- **Output Directory:** `dist`

## Tecnologías

- [Astro](https://astro.build/) - Framework estático
- [SCSS](https://sass-lang.com/) - Estilos
- [View Transitions API](https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API) - Animaciones entre páginas (CSS puro)
