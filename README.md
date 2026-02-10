# NEW YEAR Photography

A high-quality, high-performance photography portfolio website built with [Astro](https://astro.build).

## Features
- **Fast:** Static site generation for optimal performance.
- **Responsive:** Looks great on all devices.
- **Touch-friendly:** Smooth interactions.
- **Easy Photo Management:** Just drop images into folders.

## How to Add Photos

The site is configured to automatically load images from the `src/assets/portfolio` directory.

1. Navigate to `src/assets/portfolio/`.
2. You will see folders for categories:
   - `portraits`
   - `weddings`
   - `events`
3. Simply drag and drop your high-quality images (JPG, PNG) into the corresponding folder.
4. The site will automatically generate thumbnails and optimized versions.
5. The filename will be used as the title (e.g., `Sunset-Wedding.jpg` becomes "Sunset Wedding").

## Customization

- **About Page:** Edit `src/pages/about.astro` to change the bio and philosophy.
- **Contact Info:** Edit `src/pages/contact.astro` to update email and phone number.
- **Colors & Fonts:** Edit `src/layouts/Layout.astro` to change CSS variables (colors, fonts, spacing).

## Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |

## Deployment

You can deploy this site to any static host (Netlify, Vercel, GitHub Pages, etc.).
most hosts will automatically detect Astro and build efficiently.
