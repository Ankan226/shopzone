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
<img width="1128" height="880" alt="image" src="https://github.com/user-attachments/assets/9afc2671-87e1-4def-aaf5-46b0ec20e9cc" />


### Shop
<img width="1120" height="625" alt="image" src="https://github.com/user-attachments/assets/88d2b583-f6f5-42d2-b2c1-8784093507bd" />


### Product Detail
<img width="1097" height="877" alt="image" src="https://github.com/user-attachments/assets/0cb124a2-b1ae-4736-bb3c-847fc881c6a1" />


### Cart
<img width="1283" height="641" alt="image" src="https://github.com/user-attachments/assets/9a4eae7a-d2dc-49cf-8d98-fd625ac97470" />


### Login (Mock Auth)
<img width="1362" height="482" alt="image" src="https://github.com/user-attachments/assets/47c43a8e-7d1a-4fc8-8986-a40581f7db46" />


### Checkout (Protected Route)
<img width="1363" height="482" alt="image" src="https://github.com/user-attachments/assets/6c3de537-5cd6-4dc5-bd3a-6bd3cc1448ac" />


---

## Project Structure

<img width="193" height="721" alt="image" src="https://github.com/user-attachments/assets/43346ee2-cdfd-44db-84db-361162a8a276" />


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
