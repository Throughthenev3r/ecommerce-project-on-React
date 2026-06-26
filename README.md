# Ecommerce Project on React

Frontend for a simple online store — browse products, add to cart, checkout, view orders, track delivery.

Built with React 19, TypeScript, Vite, and React Router. Data comes from a separate backend via `/api` and `/images` proxy.

## Setup

```bash
npm install
npm run dev
```

App runs at http://localhost:5173

You also need the backend running on `http://localhost:3000`, otherwise products and images won't load. Start it in a separate terminal from the backend repo.

## Scripts

- `npm run dev` — dev server
- `npm run build` — production build
- `npm run lint` — eslint
- `npx vitest` — run tests

## Pages

- `/` — home / products
- `/checkout` — cart & checkout
- `/orders` — order history
- `/tracking` — delivery tracking
