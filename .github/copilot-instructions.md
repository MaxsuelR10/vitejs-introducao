# Copilot Instructions for Vite.js React Project

## Project Overview
**vitejs-introducao** is a React + Vite.js learning project demonstrating a basic web application with multiple pages. It's a Portuguese educational project ("Aula Introdução Vite JS" = Vite JS Introduction Class).

**Tech Stack:** React 19, Vite 7, React Router DOM v7, ESLint with React plugins

## Architecture & Key Patterns

### Page Structure
Pages are organized in `/src/pages/<pagename>/index.jsx`:
- Each page is a standalone React component (functional components only)
- Example: `src/pages/home/index.jsx` and `src/pages/sobre/index.jsx`
- Routing setup in `src/main.jsx` using `BrowserRouter` from react-router-dom
- **Note:** App.jsx currently shows content directly; Routes are not yet wired up - add route definitions as needed

### Styling Architecture
CSS is organized in `/src/estilos/`:
- `reset.css` - CSS reset/normalization
- `globals.css` - Global application styles
- Both loaded in `src/main.jsx` before App component
- Component-level styles: `App.css` (imported in components)
- **Pattern:** Global styles first, then component styles; import in main.jsx ensures they load in correct order

### Build & Development Workflow
```bash
npm run dev       # Start dev server (Vite with HMR)
npm run build     # Production build to /dist
npm run lint      # Run ESLint checks
npm run preview   # Preview production build locally
```

## Code Conventions & Rules

### ESLint Configuration
- **Files:** `eslint.config.js` uses flat config format
- **Scope:** All `.js` and `.jsx` files
- **Extends:** `@eslint/js` recommended, `react-hooks`, `react-refresh`
- **Special Rule:** Unused vars allowed if they start with uppercase (preserves unused component imports)
- **Note:** No TypeScript yet - future expansion should reference TS template in comments

### Component Patterns
- Functional components only (React 19 - no class components)
- Export default for page components: `export default function PageName() {...}`
- React Router import: `import { BrowserRouter, Routes, Route } from 'react-router-dom'`
- **Active Issue:** App.jsx has correctable typo: `Rout` should be `Route` (line 1)

### Import Organization
- React imports first
- Third-party libraries (react-router-dom, etc.)
- Local assets and styles
- Example from main.jsx: `import React` → `import react-router-dom` → `import CSS` → `import App`

## Critical Files & Their Roles
| File | Purpose |
|------|---------|
| `src/main.jsx` | Entry point; sets up BrowserRouter and global styles |
| `src/App.jsx` | Root component (wiring up page routes) |
| `src/pages/` | Page components directory (Home, Sobre, etc.) |
| `src/estilos/` | Global CSS files (reset + globals) |
| `vite.config.js` | Vite config using React plugin |
| `eslint.config.js` | ESLint flat config with React rules |

## Known Issues to Address
1. **App.jsx line 1:** Typo `Rout` → `Route`
2. **main.jsx:** Duplicate imports - clean up `createRoot` (lines 2-3)
3. **main.jsx line 15:** References `React.StrictMode` but `React` not imported; should import from 'react'
4. **main.jsx:** Route setup incomplete - Routes and Route components not used in App component yet

## Integration Points & Dependencies
- **React Router:** Routes defined in App.jsx must match page files in `/src/pages/`
- **Vite HMR:** Automatic refresh works with React Fast Refresh plugin (no manual setup needed)
- **ESLint:** Runs against all JS/JSX before commit (pre-commit hook recommended for future)
- **CSS:** No CSS-in-JS library; plain CSS only

## Guidance for AI Agents
- When adding new pages: create `/src/pages/[pagename]/index.jsx`, export default component, add route in App.jsx
- When modifying styles: edit `/src/estilos/globals.css` for shared styles or component-level CSS files
- When adding dependencies: update `package.json` and ensure ESLint rules remain compatible
- When debugging: Use `npm run lint` to catch issues before dev server; React DevTools for component inspection
- Maintain flat ESLint config format (not `.eslintrc` JSON) when adding new rules
