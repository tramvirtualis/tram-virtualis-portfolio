# Ngoc Tram — Portfolio

RPG-menu style portfolio with an art direction inspired by *Persona 3 Reload*
(bright graphic layout: white paper, electric-blue diagonal, black wedge, giant gradient
lettering, tilted italic command menu with a slash highlight).
Bilingual: English / Tiếng Việt. React 19 + TypeScript + Vite, React Router, plain CSS — no animation libraries, no WebGL.

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build to dist/
```

## Structure

```
src/
  data/          # all content — edit these, not the components
    profile.ts       name, contact, records, stats, skills, timeline
    projects.ts      project entries (each gets /projects/:id)
    experience.ts    work / internship entries
    menu.ts          main menu entries, subtitles, hints
  i18n/
    lang.tsx         EN/VI provider + useLang() → t({ en, vi })
    ui.ts            interface copy in both languages
  components/
    layout/      Shell (backdrop + shards + sweep + cursor), ScreenLayout (back, tabs, EN/VI, CV, giant title), LangToggle, Cursor
    ornaments/   Highlight (selection plate), ArcanaCard, Shards, Emblem, ProjectPoster
  pages/         MainMenu, About, Experience, Projects, ProjectDetail, Skills, Contact
  styles/        tokens, base, stage, menu, screen, profile, projects, contact
public/
  NguyenThiNgocTram_FresherCV.pdf
```

Any text in `data/` can be a plain string (same in both languages) or `{ en: "...", vi: "..." }`.
The chosen language is remembered per browser; first visit follows the browser language.

## Art

No image files: the backdrop is CSS gradients and clip-paths, and the arcana card,
posters and shards are inline SVG / CSS.

## Routes

`/` main menu · `/about` · `/experience` · `/projects` · `/projects/:id` · `/skills` · `/contact`

Keyboard: ↑ ↓ / Enter / 1–5 on the menu; Esc back, Q / E previous / next section on screens.

## Deploy

`vercel.json` rewrites all routes to `index.html` so deep links like `/projects/cinesmart` work.
