import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    fetch("https://dummyjson.com/products?limit=30")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch products");
        return res.json();
      })
      .then((data) => {
        if (!cancelled) setProducts(data.products || []);
      })
      .catch((err) => {
        if (!cancelled) setError(err.message);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="page">
      <div className="container">
        <h2>Shop</h2>
        <p className="subhead">Click any product to view details.</p>

        {loading && <div className="empty-state">Loading products…</div>}
        {error && <div className="empty-state">Error: {error}</div>}

        {!loading && !error && (
          <div className="grid">
            {products.map((p) => (
              <div
                key={p.id}
                className="card"
                onClick={() => navigate(`/product/${p.id}`)}
              >
                <img src={p.thumbnail} alt={p.title} />
                <div className="card-body">
                  <div className="card-title">{p.title}</div>
                  <div className="card-price">${p.price}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}