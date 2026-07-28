import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const { cart, totalPrice, clearCart } = useCart();
  const { logout } = useAuth();
  const navigate = useNavigate();

  function placeOrder() {
    clearCart();
    navigate("/", { replace: true });
  }

  return (
    <div className="page container">
      <h2>Checkout</h2>
      <p className="subhead">This route is protected — you only reached it because you're logged in.</p>

      {cart.length === 0 ? (
        <p>Nothing to check out.</p>
      ) : (
        <>
          <div className="cart-total" style={{ marginTop: 0 }}>
            <span>Order total</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          <button className="btn" style={{ marginTop: 20 }} onClick={placeOrder}>
            Place Order
          </button>
        </>
      )}

      <button
        className="btn secondary"
        style={{ marginTop: 12, marginLeft: 12 }}
        onClick={() => { logout(); navigate("/login"); }}
      >
        Log out
      </button>
    </div>
  );
}