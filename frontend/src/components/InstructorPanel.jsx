


import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function InstructorPanel() {
  const { id } = useParams();
  const [lectures, setLectures] = useState([]);

  useEffect(() => {
    axios.get(`https://online-lecture-scheduling-module-6nzr.onrender.com/api/lectures/instructor/${id}`)
      .then(res => setLectures(res.data));
  }, [id]);

  return (
    <div className="panel-container">
      <div className="panel-header">
        <h2>Your Assigned Lectures</h2>
        <button onClick={() => {
          localStorage.clear();
          window.location.href = "/login";
        }}>Logout</button>
      </div>

      {lectures.length > 0 ? (
        <ul className="lecture-list">
          {lectures.map((lec, i) => (
            <li key={i} className="lecture-item">
              <strong>📘 {lec.courseId?.name}</strong><br />
              <small style={{ color: "#555" }}>
                Level: {lec.courseId?.level || "N/A"}
              </small><br />
              <span>🗓 {lec.date}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p>No lectures assigned yet.</p>
      )}
    </div>
  );
}
