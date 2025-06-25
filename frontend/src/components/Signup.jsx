import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

export default function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "instructor"
  });
  const [message, setMessage] = useState(""); // ✅ success message
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://online-lecture-scheduling-module-6nzr.onrender.com/api/auth/signup", form);
      setMessage("✅ Signup successful! Redirecting to login...");
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (err) {
      setMessage("❌ Signup failed. Please try again.");
      console.error(err);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="signup-form">
        <h2>Create Account</h2>
        <input
          type="text"
          placeholder="Name"
          required
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          required
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          required
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <select onChange={(e) => setForm({ ...form, role: e.target.value })}>
          <option value="instructor">Instructor</option>
          <option value="admin">Admin</option>
        </select>
        <button type="submit">Sign Up</button>

        <p style={{ marginTop: "16px", textAlign: "center" }}>
          Already have an account?{" "}
          <Link to="/login" style={{ color: "#1a73e8", textDecoration: "none", fontWeight: "500" }}>
            Login
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
