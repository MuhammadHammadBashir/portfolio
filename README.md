# Muhammad Hammad Bashir: Portfolio

Personal portfolio of **Muhammad Hammad Bashir**, Senior AI Engineer working on computer vision, vision-language models and generative AI.

Hammad has 5+ years of experience building production AI systems: real-time video intelligence, multimodal LLM applications, RAG and agent workflows, and the MLOps that keeps them running.

## Currently building

**TALLA: natural-language AI video monitoring** ([talla.com](https://talla.com/))

As Senior AI Engineer at a stealth AI startup, Hammad built and runs a live video-monitoring platform for a multi-camera private campus:

- Safety rules written in plain language (fire or smoke, a person down, unsafe climbing, wet floors, entrance intrusion), judged by a self-hosted vision-language model.
- A second, independent model verifies high-risk alerts. In its first week it blocked 100+ false alarms before they reached staff.
- People and vehicle counting at the entrances, fleet vehicle classification, and a daily insights dashboard in three languages.

## What's on the site

- **Selected work:** TALLA, real-time multi-camera sports vision, Soopa.ai tennis analytics, Atlas Knowledge Assistant, AI Receptionist, Petroleum Knowledge Assistant, CreativeScore neuromarketing, Movers AI, and drone and satellite vision. Each project has its own detail page.
- **Experience:** Stealth AI Startup, Sportunity, Markify / CreativeScore AI, LUMS AI & Big Data Centre, and freelance work.
- **Expertise and toolkit,** client testimonials, FAQ, and a downloadable CV.

## Contact

- Email: [hammad.compsci@gmail.com](mailto:hammad.compsci@gmail.com)
- LinkedIn: [muhammad-hammad-bashir](https://www.linkedin.com/in/muhammad-hammad-bashir-6aaab7178/)
- GitHub: [MuhammadHammadBashir](https://github.com/MuhammadHammadBashir)
- Upwork: [hammad535](https://www.upwork.com/freelancers/hammad535)
- Intro video: [YouTube](https://youtu.be/B_lfihy0Be0)

## Tech stack

React 19, TypeScript, Vite and plain CSS, with no UI framework. Icons come from Phosphor.

## Run locally

Requires Node 22.12 or newer.

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type-check + production build into dist/
npm run preview    # serve the production build
```

## Updating content

All content lives in one file, so most updates don't touch any components.

| What | File |
| --- | --- |
| Text, links, projects, experience, testimonials | `src/data/portfolio.ts` |
| Colours, fonts, radii, spacing | `src/styles/tokens.css` |
| Shared typography, buttons, reveal animation | `src/styles/base.css` |
| A section's layout and style | `src/components/<Section>.tsx` + `<Section>.css` |
| Images, videos, CV | `public/images`, `public/media`, `public/Muhammad_Hammad_Bashir_CV.pdf` |

- **Add a project:** add an entry to `PROJECTS` in `src/data/portfolio.ts`. The first project in the list is shown as the full-width featured card.
- **Update the CV:** replace `public/Muhammad_Hammad_Bashir_CV.pdf`, keeping the same file name.
- **Change section order:** edit `src/App.tsx`.
