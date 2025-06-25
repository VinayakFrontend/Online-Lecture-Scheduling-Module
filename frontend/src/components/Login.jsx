
import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState(""); // ✅ toast message
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", form);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.role);
      localStorage.setItem("userId", res.data.id);

      setMessage("✅ Login successful! Redirecting...");

      setTimeout(() => {
        res.data.role === "admin"
          ? navigate("/")
          : navigate(`/instructor/${res.data.id}`);
      }, 2000);
    } catch (err) {
      setMessage("❌ Login failed. Please check your credentials.");
      console.error(err);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="signup-form">
        <h2>Login</h2>
        <input
          type="email"
          placeholder="Email"
          onChange={e => setForm({ ...form, email: e.target.value })}
          required
        />
        <input
          type="password"
          placeholder="Password"
          onChange={e => setForm({ ...form, password: e.target.value })}
          required
        />
        <button type="submit">Login</button>

        {/* ✅ Signup prompt */}
        <p style={{ marginTop: "16px", textAlign: "center" }}>
          Don’t have an account?{" "}
          <Link to="/signup" style={{ color: "#1a73e8", textDecoration: "none", fontWeight: "500" }}>
            Sign Up
          </Link>
        </p>
      </form>

      {/* ✅ Toast message */}
      {message && (
        <div className="toast-message">
          {message}
        </div>
      )}
    </div>
  );
}
