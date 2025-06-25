
import { useState } from "react";
import axios from "axios";

export default function AddCourseForm() {
  const [form, setForm] = useState({
    name: "",
    level: "",
    description: "",
    image: ""
  });

  const [message, setMessage] = useState(""); // ✅ Toast message

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("https://online-lecture-scheduling-module-6nzr.onrender.com/api/courses", form)
      .then(() => {
        setMessage("✅ Course added successfully!");
        setForm({ name: "", level: "", description: "", image: "" });
        setTimeout(() => setMessage(""), 3000); // hide after 3 sec
      })
      .catch(err => {
        setMessage("❌ Failed to add course.");
        console.error(err);
        setTimeout(() => setMessage(""), 3000);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="form-card">
        <h3>Add Course</h3>

        <input
          type="text"
          placeholder="Course Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />

        <select
          required
          value={form.level}
          onChange={(e) => setForm({ ...form, level: e.target.value })}
        >
          <option value="">Select Level</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>

        <input
          type="text"
          placeholder="Image URL"
          value={form.image}
          onChange={(e) => setForm({ ...form, image: e.target.value })}
        />

        <textarea
          placeholder="Course Description"
          rows={4}
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          required
        ></textarea>

        <button type="submit">Add Course</button>
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

