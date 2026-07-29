# ShopZone — E-Commerce SPA

A single-page e-commerce application built with React, React Router, and the
Context API. Users can browse a live product catalog, view product details,
manage a global shopping cart, and go through a mock-authenticated checkout —
all without a single full browser page reload.

Built as Sprint 6 of a frontend engineering residency, focused on client-side
routing and cross-component state management.

---

## Live Links

- **Live site:** https://shopzone-nine-dun.vercel.app/
- **GitHub repo:** https://github.com/Ankan226/shopzone

---

## Features

### Phase 1 — Routing
- `BrowserRouter` with routes for `/`, `/shop`, `/contact`
- Dynamic routing to `/product/:id` on product click
- Product data hydrated via `useParams()` + a live fetch to the product API

### Phase 2 — Global State
- `CartContext` built with the Context API (no Redux, no prop drilling)
- "Add to Cart" dispatches items into global state from the Product page
- Navbar cart badge re-renders instantly across every route
- `/cart` route calculates and displays the aggregate total price

### Phase 3 — Auth Mocking & Route Protection
- Cart state synced to `localStorage` — survives a hard refresh
- `/login` route with a "Login as Guest" mock authentication action
- `/checkout` is a protected route — unauthenticated users are redirected to `/login` automatically

---

## Tech Stack

| Layer          | Tech                          |
|----------------|-------------------------------|
| Framework      | React (Vite)                  |
| Routing        | react-router-dom               |
| State          | Context API (Cart + Auth)     |
| Data source    | [dummyjson.com/products](https://dummyjson.com/products) |
| Persistence    | localStorage                   |
| Deployment     | Vercel                         |

---

## Screenshots

### Home
![Home page](screenshots/home.png)

### Shop
![Shop grid](screenshots/shop.png)

### Product Detail
![Product detail page](screenshots/product-detail.png)

### Cart
![Cart page](screenshots/cart.png)

### Login (Mock Auth)
![Login page](screenshots/login.png)

### Checkout (Protected Route)
![Checkout page](screenshots/checkout.png)

---

## Project Structure

shopzone/
├── vercel.json
├── Prompts.md
├── README.md
└── src/
├── main.jsx
├── App.jsx
├── index.css
├── context/
│ ├── CartContext.jsx
│ └── AuthContext.jsx
├── components/
│ ├── Navbar.jsx
│ └── ProtectedRoute.jsx
└── pages/
├── Home.jsx
├── Shop.jsx
├── ProductDetail.jsx
├── Cart.jsx
├── Contact.jsx
├── Login.jsx
└── Checkout.jsx

---

## Running Locally

```bash
git clone https://github.com/Ankan226/shopzone.git
cd shopzone
npm install
npm run dev
```

Visit `http://localhost:5173`.

---

## Routes Reference

| Route             | Description                              | Protected |
|--------------------|-------------------------------------------|-----------|
| `/`                | Home / welcome banner                     | No        |
| `/shop`            | Product grid (live API data)               | No        |
| `/product/:id`     | Product detail + Add to Cart              | No        |
| `/cart`            | Cart items + total price                  | No        |
| `/contact`         | Static contact form UI                    | No        |
| `/login`           | Mock guest login                          | No        |
| `/checkout`        | Order summary + place order               | Yes       |
