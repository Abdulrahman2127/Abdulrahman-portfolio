# Abdulrahman — Full-Stack Developer

This is the existing React + Vite portfolio, redesigned in place. It remains a frontend-only app using the existing React Router, Lucide icons and PWA setup. The separate `my-react-router-app/` starter is not part of this application and has been left untouched.

## Run locally

From this directory:

```sh
npm ci
npm run dev
npm run lint
npm run build
npm run preview
```

On Windows PowerShell, use `npm.cmd` if script execution policy blocks `npm.ps1`.

## Edit portfolio content

- `src/data/projects.js`: project titles/descriptions in English and Arabic, screenshot paths, technologies, live demo and GitHub URLs. The current examples are explicitly labeled placeholders. Set `placeholder: false` when replacing an example with real work. Put images in `public/projects/` and use `/projects/filename.webp` as the image value, or import an image from `src/assets/`.
- `src/data/skills.js`: grouped technology badges.
- `src/data/contact.js`: empty contact URLs/details. Add verified `mailto:`, GitHub, LinkedIn and WhatsApp URLs here. Empty entries render as unavailable, without broken links.
- `src/data/copy.js`: English and Arabic interface text.
- `src/App.css` and `src/index.css`: layout, responsive styles, colors and typography.

The language button persists the selection locally and updates the document language, direction, title and description. Layout uses logical CSS properties for RTL; code and technology names remain LTR. Reduced-motion preferences and keyboard navigation are supported.

## Routes and deployment

`/` is the portfolio with section anchors. The original `/Dashboard` developer tools page is preserved. Unknown routes show a localized 404 page. Deploy `dist/` to a static host configured to serve `index.html` for client-side routes. The existing service worker provides asset caching; test production locally using `npm run preview`.

No contact details, project URLs or completed client work are fabricated. Replace the example projects and contact placeholders before sharing the portfolio with prospective clients.
