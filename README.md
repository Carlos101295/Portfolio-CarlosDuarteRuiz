# Portfolio (React + Vite)

## 1. Instalar y probar en local

```bash
npm install
npm run dev
```

Abre la URL que te muestre la terminal (normalmente `http://localhost:5173`).

## 2. Personalizar el contenido

- **Tu nombre y presentación** → `src/pages/Home.jsx` (busca `<h1>Tu Nombre</h1>` y el párrafo de debajo).
- **Tus 5 proyectos** → `src/data/projects.js`. Es el único archivo que necesitas tocar para cambiar nombre, descripción, tecnologías, vídeo demo y enlace de la APK de cada proyecto.
  - `demoVideo`: pega el ID de un vídeo de YouTube (lo que va después de `v=` en la URL) o la ruta a un `.mp4` que coloques en la carpeta `public/`.
  - `apkUrl`: recomendado subir la APK como "Release" en tu repo de GitHub y pegar aquí el enlace directo de descarga.
- **Colores y tipografía** → `src/index.css`, variables al principio del archivo (`--bg`, `--accent`, etc.).
- **Redes / GitHub del footer** → `src/components/Header.jsx` y el footer en `src/pages/Home.jsx`.

## 3. Subir a GitHub

```bash
git init
git add .
git commit -m "portfolio inicial"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/portfolio.git
git push -u origin main
```

## 4. Desplegar en Vercel (gratis)

1. Entra en https://vercel.com y accede con tu cuenta de GitHub.
2. "Add New Project" → selecciona tu repositorio `portfolio`.
3. Vercel detecta automáticamente que es un proyecto Vite. Dale a "Deploy".
4. En un par de minutos tendrás una URL tipo `portfolio-tu-usuario.vercel.app`.

El archivo `vercel.json` incluido ya está configurado para que las subrutas de cada proyecto (`/proyecto/nombre-proyecto`) funcionen correctamente.

## 5. Conectar tu dominio propio

1. Compra el dominio en Namecheap, Cloudflare Registrar o similar.
2. En el panel de tu proyecto en Vercel → "Settings" → "Domains" → añade tu dominio.
3. Vercel te dará uno o dos registros DNS (tipo A o CNAME).
4. Añade esos registros en el panel DNS de tu registrador de dominios.
5. Espera a que se propague (normalmente minutos, hasta 24-48h como máximo).

Y listo — tu portfolio estará disponible en tu propio dominio.
