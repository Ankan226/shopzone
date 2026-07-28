import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, removeFromCart, totalPrice } = useCart();

  if (cart.length === 0) {
    return (
      <div className="page container">
        <h2>Your Cart</h2>
        <div className="empty-state">
          Your cart is empty. <Link to="/shop">Go shop something.</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="page">
      <div className="container">
        <h2>Your Cart</h2>
        {cart.map((item) => (
          <div className="cart-row" key={item.id}>
            <img src={item.thumbnail} alt={item.title} />
            <div className="info">
              <div>{item.title}</div>
              <div className="qty">Qty: {item.quantity} · ${item.price} each</div>
            </div>
            <div>${(item.price * item.quantity).toFixed(2)}</div>
            <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
              Remove
            </button>
          </div>
        ))}
        <div className="cart-total">
          <span>Total</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>
        <Link to="/checkout" className="btn" style={{ marginTop: 24, display: "inline-block" }}>
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
}