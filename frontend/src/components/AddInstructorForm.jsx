import { useState, useEffect } from "react";
import axios from "axios";

export default function AddInstructorForm() {
  const [form, setForm] = useState({ name: "", email: "" });
  const [instructors, setInstructors] = useState([]);

  // Fetch instructors on load
  useEffect(() => {
    fetchInstructors();
  }, []);

  const fetchInstructors = () => {
    axios.get("https://online-lecture-scheduling-module-6nzr.onrender.com/api/instructors").then((res) => {
      setInstructors(res.data);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/api/instructors", form)
      .then(() => {
        alert("Instructor added!");
        setForm({ name: "", email: "" });
        fetchInstructors(); // refresh list
      })
      .catch((err) => {
        console.error("Error adding instructor:", err);
      });
  };

  return (
    <div>
      <h3>Add Instructor (Random User)</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
        <button type="submit">Add Instructor</button>
      </form>

      <hr />

      <h4>Instructor List</h4>
      <ul>
        {instructors.map((ins) => (
          <li key={ins._id}>
            {ins.name} ({ins.email})
          </li>
        ))}
      </ul>
    </div>
  );
}
