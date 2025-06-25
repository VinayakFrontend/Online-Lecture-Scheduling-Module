

import { useState, useEffect } from "react";
import axios from "axios";

export default function AddLectureForm({ instructors }) {
  const [form, setForm] = useState({ courseId: "", instructorId: "", date: "" });
  const [courses, setCourses] = useState([]);
  const [message, setMessage] = useState(""); // ✅ toast message

  useEffect(() => {
    axios.get("https://online-lecture-scheduling-module-6nzr.onrender.com/api/courses")
      .then(res => setCourses(res.data));
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    axios.post("https://online-lecture-scheduling-module-6nzr.onrender.com/api/lectures", form)
      .then(() => {
        setMessage("✅ Lecture Assigned Successfully!");
        setForm({ courseId: "", instructorId: "", date: "" });
        setTimeout(() => setMessage(""), 3000);
      })
      .catch(err => {
        setMessage(`❌ ${err.response?.data?.message || "Assignment failed"}`);
        setTimeout(() => setMessage(""), 3000);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="form-card">
        <h3>Assign Lecture</h3>

        <select
          required
          value={form.courseId}
          onChange={e => setForm({ ...form, courseId: e.target.value })}
        >
          <option value="">Select Course</option>
          {courses.map(course => (
            <option key={course._id} value={course._id}>{course.name}</option>
          ))}
        </select>

        <select
          required
          value={form.instructorId}
          onChange={e => setForm({ ...form, instructorId: e.target.value })}
        >
          <option value="">Select Instructor</option>
          {instructors.map(ins => (
            <option key={ins._id} value={ins._id}>{ins.name}</option>
          ))}
        </select>

        <input
          type="date"
          required
          value={form.date}
          onChange={e => setForm({ ...form, date: e.target.value })}
        />

        <button type="submit">Assign</button>
      </form>

      {/* ✅ Toast message */}
      {message && <div className="toast-message">{message}</div>}
    </div>
  );
}
