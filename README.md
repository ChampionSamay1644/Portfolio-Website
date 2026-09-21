# Samay Pandey - Portfolio

A responsive React and TypeScript portfolio for backend and automation engineer Samay Pandey.

## Highlights
- Original light/dark design with saved theme preference
- Responsive navigation and layouts
- Keyboard-friendly landmarks, focus states and reduced-motion support
- Public project showcase and downloadable resume
- Validated contact form that prepares an email in the visitor's mail app

## Local development
```bash
npm ci
npm start
```

## Checks
```bash
npm test -- --watchAll=false
npm run build
npx tsc --noEmit
```

The form intentionally uses a `mailto:` handoff so it works without storing third-party API keys. It can later be connected to a serverless endpoint after deployment access is available.
