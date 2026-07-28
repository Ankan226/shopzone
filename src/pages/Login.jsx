import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const { loginAsGuest, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const redirectTo = location.state?.from || "/checkout";

  function handleGuestLogin() {
    loginAsGuest();
    navigate(redirectTo, { replace: true });
  }

  return (
    <div className="page container">
      <h2>Login</h2>
      <p className="subhead">Mock authentication — no real credentials needed.</p>
      {isAuthenticated ? (
        <p>You're already logged in as a guest.</p>
      ) : (
        <button className="btn" onClick={handleGuestLogin}>
          Login as Guest
        </button>
      )}
    </div>
  );
}