import { NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { totalItems } = useCart();

  return (
    <nav className="navbar">
      <div className="container">
        <NavLink to="/" className="brand">ShopZone</NavLink>
        <div className="nav-links">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/shop">Shop</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/checkout">Checkout</NavLink>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/cart" className="cart-link">
            Cart
            {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
          </NavLink>
        </div>
      </div>
    </nav>
  );
}