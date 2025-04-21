# E‑Commerce Application Demo

A compact yet complete e‑commerce demo built with **React 18 + TypeScript** and **Vite**.  
It demonstrates global state with **Context API + useReducer**, form validation with local storage, external API data fetching, and a responsive UI with subtle animations.

---

## Features

| Area | Description |
|------|-------------|
| **Product catalog** | Six mock products with Unsplash photos, responsive card grid. |
| **Global cart** | Add / remove / change quantity, clear cart, live total. State lives in a reducer inside Context and is persisted to `localStorage`. |
| **Login form** | Email + password validation, disabled button until valid, user info saved to `localStorage`. |
| **SpaceX history** | Fetches and displays data from `https://api.spacexdata.com/v3/history`. |
| **Animated navigation** | Sticky header slides in on load; cart badge pops when quantity changes. |

---

## Tech stack

* **React 18** with hooks
* **TypeScript**
* **Vite** (dev server & build)
* **React Router v6**
* **Context API + useReducer** for state
* ESLint / Prettier (+ Husky pre‑commit hook, optional)

---

## Project structure

```
src/
├─ app/                    high‑level wiring
│   ├─ shared/             UI atoms & generic hooks
│   │   ├─ hooks/
│   │   │   └─ useLocalStorage.ts
│   │   └─ ui/
│   │       ├─ Button.tsx | .css
│   │       ├─ Card.tsx   | .css
│   │       └─ Input.tsx  | .css
│   ├─ store/             → combines providers (CartProvider, etc.)
│   │   └─ index.tsx
│   └─ routes.tsx         → central <Routes>
│
├─ features/              vertical slices
│   ├─ cart/
│   ├─ products/
│   ├─ login/
│   └─ history/
│
├─ assets/                optional local images / svg
├─ App.tsx                root shell + navigation bar
├─ main.tsx               Vite entry
└─ style sheets (App.css, index.css)
```

*Anything placed in **`public/`** is copied verbatim to the build output and can be referenced as `/myfile.png`.*

---

## Setup

### Prerequisites

* Node ≥ 18 LTS

### Installation

```bash
git clone https://github.com/your‑username/ecommerce‑app.git
cd ecommerce‑app
npm install
```

### Development server

```bash
npm run dev
```

Open `http://localhost:5173` — Vite provides instant hot reload.

### Production build

```bash
npm run build        # outputs to dist/
npm run preview      # optional local preview
```

---

## Scripts

| Command | Purpose |
|---------|---------|
| `dev`   | Start Vite dev server |
| `build` | Create production bundle |
| `preview` | Serve `dist/` locally |
| `lint`  | ESLint check |
| `format` | Prettier write |

---

## How the cart works

1. `cartReducer.ts` defines actions: `ADD`, `REMOVE`, `CHANGE_QTY`, `CLEAR`.
2. `CartProvider` (in `app/store`) wraps `<BrowserRouter/>` at the root.
3. Any component can call `const { cart, dispatch } = useCart()`.
4. A `useEffect` inside the provider syncs state to `localStorage` so the cart survives refreshes.

---

## Roadmap ideas

* Stripe / PayPal checkout stub
* Unit tests (Vitest + React Testing Library)
* Light/dark theme toggle
* i18n support



