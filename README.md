# StudyVerse

**Your Personal Academic Operating System — CBSE Class 10**

StudyVerse is a responsive, offline-first learning workspace for organising subjects, recording focus sessions, practising, revising and understanding academic progress.

## Principles
- Free and open-source dependencies; no paid APIs.
- Local-first study data stored in the browser.
- Honest analytics: no fabricated scores or activity.
- Accessible, responsive light interface.
- Portable, user-controlled backups.

## Stack
React · TypeScript · Vite · Dexie.js / IndexedDB · React Router · Lucide · vite-plugin-pwa · GitHub Pages.

## Development
```bash
npm install
npm run dev
npm run typecheck
npm run lint
npm run build
```

## Deployment
The project is configured for GitHub Pages at `/StudyVerse/`. Enable **Settings → Pages → GitHub Actions**. The deployment workflow publishes the production `dist` directory from `main`.

## Privacy
Study records remain in this browser. There is no backend, cloud sync or authentication in this version. Browser storage can be cleared; export backups regularly. Never commit personal backup files.
