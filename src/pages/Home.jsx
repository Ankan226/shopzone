import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="hero">
        <div className="container">
          <h1>Browse, click, and check out — no page reload, ever.</h1>
          <p>
            A single-page storefront built with React Router and Context API.
            Every route you visit updates the URL without the browser
            reloading a single asset.
          </p>
          <Link to="/shop" className="btn">Browse the shop</Link>
        </div>
      </div>

      <div className="container">
        <div className="feature-row">
          <div className="feature">
            <span className="feature-num">01</span>
            <h3>Client-side routing</h3>
            <p>Home, shop, product pages, and checkout all live on one page — the URL just changes underneath.</p>
          </div>
          <div className="feature">
            <span className="feature-num">02</span>
            <h3>Global cart state</h3>
            <p>Add an item on any product page and watch the navbar badge update instantly, everywhere.</p>
          </div>
          <div className="feature">
            <span className="feature-num">03</span>
            <h3>Persists on refresh</h3>
            <p>Your cart is saved to local storage, so a hard refresh won't empty it out.</p>
          </div>
        </div>
      </div>
    </>
  );
}