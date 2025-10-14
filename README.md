# MP - Personal Site

Sitio personal de Mateo Pitarch. Portfolio y CV con información profesional, experiencia, proyectos y formas de contacto.

## Contenido
- Página principal (app/page.tsx): hero, experiencia profesional, proyectos destacados, skills y contacto.
- Página de proyectos (opcional): `/projects` (app/projects/page.tsx) con grid de cards, previsualizaciones y links a live/GitHub.
- Componentes UI en `components/ui/` (Badge, Card, Button, etc.).
- Activos estáticos en `public/`:
  - `public/images/` → imágenes de proyectos (ej. `juliCocinaLogo.png`, `particlesLogo.png`)
  - `public/logos/` → logos de empresas
  - `public/profile.JPG` → foto de perfil
  - `public/resume.pdf` → CV descargable

## Cómo ejecutar (desarrollo)
1. Abre terminal y ve al proyecto:
```bash
cd /Users/mateopitarch/Coding/personal-site
```
2. Instala dependencias (si hace falta):
```bash
npm install
```
3. Ejecuta en modo desarrollo:
```bash
npm run dev
```
4. Abre `http://localhost:3000`

## Cómo actualizar proyectos y imágenes
- Edita el array `ProjectsProjects` o `portfolioProjects` en `app/page.tsx` (o crea/edita `app/projects/page.tsx`).
- Para usar imágenes locales coloca los archivos en `public/images/` y en el campo `image` usa rutas relativas: `/images/nombre.png`.
- Asegura que los nombres y extensiones respeten mayúsculas/minúsculas (macOS case-insensitive a veces, pero producción puede fallar).

Recomendación de estilo para las imágenes en cards:
- Clase CSS sugerida: `className="w-full h-40 md:h-48 object-contain bg-white p-3 transition-transform duration-500 group-hover:scale-105"`

## Troubleshooting rápido
- No ves cambios: guarda archivos, reinicia servidor (Ctrl+C → `npm run dev`) y limpia cache del navegador (Cmd+Shift+R).
- Errores de compilación: revisa la terminal donde corre Next.js.
- Imágenes que no cargan: confirma `public/images/<archivo>` exista y ruta en código empiece con `/images/...`.

## Personalización rápida
- Título de la pestaña y meta: `app/layout.tsx` (export const metadata).
- Navbar y secciones: `app/page.tsx`.
- Crear nueva página: `app/<ruta>/page.tsx`.

## Contacto
- LinkedIn / GitHub: actualiza los links en la cabecera o botones.

## Licencia
Proyecto personal. Añade `LICENSE` si deseas publicar con una licencia (ej. MIT).
