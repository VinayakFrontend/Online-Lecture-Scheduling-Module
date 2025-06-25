// import { useEffect, useState } from "react";
// import axios from "axios";
// import AddCourseForm from "./AddCourseForm";
// import AddLectureForm from "./AddLectureForm";

// export default function AdminDashboard() {
//   const [instructors, setInstructors] = useState([]);
//   const [lectures, setLectures] = useState([]);

//   useEffect(() => {
//     axios.get("http://localhost:5000/api/users?role=instructor")
//       .then(res => setInstructors(res.data))
//       .catch(err => console.error("Failed to fetch instructors", err));

//     axios.get("http://localhost:5000/api/lectures")
//       .then(res => setLectures(res.data))
//       .catch(err => console.error("Failed to fetch lectures", err));
//   }, []);

//   const logout = () => {
//     localStorage.clear();
//     window.location.href = "/login";
//   };

//   return (
//     <div className="admin-dashboard">
//       <div className="admin-header">
//         <h2>Admin Dashboard</h2>
//         <button onClick={logout}>Logout</button>
//       </div>

//       <AddCourseForm />
//       <AddLectureForm instructors={instructors} />

//       <section className="admin-section">
//         <h3>Registered Instructors</h3>
//         {instructors.length > 0 ? (
//           <ul className="instructor-list">
//             {instructors.map((ins) => (
//               <li key={ins._id}>
//                 <strong>{ins.name}</strong> <br />
//                 <small>{ins.email}</small>
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p>No instructors found.</p>
//         )}
//       </section>

//       <section className="admin-section">
//         <h3>Assigned Lectures</h3>
//         {lectures.length > 0 ? (
//           <div className="table-container">
//             <table className="lecture-table">
//               <thead>
//                 <tr>
//                   <th>Instructor</th>
//                   <th>Course</th>
//                   <th>Date</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {lectures.map((lec) => (
//                   <tr key={lec._id}>
//                     <td>{lec.instructorId?.name || "N/A"}</td>
//                     <td>{lec.courseId?.name || "N/A"}</td>
//                     <td>{lec.date}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         ) : (
//           <p>No lectures assigned yet.</p>
//         )}
//       </section>
//     </div>
//   );
// }


import { useEffect, useState } from "react";
import axios from "axios";
import AddCourseForm from "./AddCourseForm";
import AddLectureForm from "./AddLectureForm";

export default function AdminDashboard() {
  const [instructors, setInstructors] = useState([]);
  const [lectures, setLectures] = useState([]);

  useEffect(() => {
    // Fetch instructors
    axios
      .get("http://localhost:5000/api/users?role=instructor")
      .then((res) => setInstructors(res.data))
      .catch((err) => console.error("Failed to fetch instructors", err));

    // Fetch lectures
    axios
      .get("http://localhost:5000/api/lectures")
      .then((res) => setLectures(res.data))
      .catch((err) => console.error("Failed to fetch lectures", err));
  }, []);

  const logout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  return (
    <div className="admin-dashboard">
      <div className="admin-header">
        <h2>Admin Dashboard</h2>
        <button onClick={logout}>Logout</button>
      </div>

      <AddCourseForm />
      <AddLectureForm instructors={instructors} />

      {/* Instructors List */}
      <section className="admin-section">
        <h3>Registered Instructors</h3>
        {instructors.length > 0 ? (
          <ul className="instructor-list">
            {instructors.map((ins) => (
              <li key={ins._id}>
                <strong>{ins.name}</strong> <br />
                <small>{ins.email}</small>
              </li>
            ))}
          </ul>
        ) : (
          <p>No instructors found.</p>
        )}
      </section>

      {/* Lectures List */}
      <section className="admin-section">
        <h3>Assigned Lectures</h3>
        {lectures.length > 0 ? (
          <div className="table-container">
            <table className="lecture-table">
              <thead>
                <tr>
                  <th>Instructor</th>
                  <th>Course</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {lectures.map((lec) => (
                  <tr key={lec._id}>
                    <td>{lec.instructorId?.name || "N/A"}</td>
                    <td>
                      <strong>{lec.courseId?.name || "N/A"}</strong>
                      <br />
                      <small style={{ color: "#555" }}>
                        Level: {lec.courseId?.level || "N/A"}
                      </small>
                    </td>
                    <td>{lec.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p>No lectures assigned yet.</p>
        )}
      </section>
    </div>
  );
}
