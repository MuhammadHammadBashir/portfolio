# Muhammad Hammad Bashir: Portfolio

Personal portfolio built with **React 19 + Vite + plain CSS**, ported from the Nova Astro template by WebScale.

## Run it

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type-check + production build into dist/
npm run preview    # serve the production build
```

Requires Node 22.12 or newer.

## Where to edit

| What | File |
| --- | --- |
| All text, links, projects, experience, testimonials | `src/data/portfolio.ts` |
| Colours, fonts, radii, spacing | `src/styles/tokens.css` |
| Shared typography, buttons, reveal animation | `src/styles/base.css` |
| A section's layout and style | `src/components/<Section>.tsx` + `<Section>.css` |
| Images, videos, CV | `public/images`, `public/media`, `public/Muhammad_Hammad_Bashir_CV.pdf` |

Section order lives in `src/App.tsx`.

## Notes

- `public/images/cta-mountains.webp` (footer background) is a Nova demo asset. Replace it with an image you have rights to before launch.
- Keep the WebScale credit in the footer; the Nova license requires copyright and author notices to stay.
- Reveal animations: add `data-motion="viewport"` to an element, or `data-motion-sequence="viewport"` to a parent to stagger its children.
