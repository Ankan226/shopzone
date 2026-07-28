import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setAdded(false);
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Product not found");
        return res.json();
      })
      .then((data) => {
        if (!cancelled) setProduct(data);
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
  }, [id]);

  if (loading) return <div className="page container">Loading product…</div>;
  if (error) return <div className="page container">Error: {error}</div>;
  if (!product) return null;

  return (
    <div className="page">
      <div className="container">
        <button className="btn secondary" onClick={() => navigate("/shop")} style={{ marginBottom: 24 }}>
          ← Back to shop
        </button>
        <div className="product-view">
          <img src={product.thumbnail} alt={product.title} />
          <div className="product-info">
            <h2>{product.title}</h2>
            <div className="price">${product.price}</div>
            <p className="desc">{product.description}</p>
            <button
              className="btn"
              onClick={() => {
                addToCart(product);
                setAdded(true);
              }}
            >
              {added ? "Added ✓" : "Add to Cart"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}