# 📚 Online Lecture Scheduling Module

This is a MERN stack-based online lecture scheduling system built for the Ideamagix internship assignment. It includes an admin panel to manage instructors, courses, and lecture assignments, and an instructor panel to view scheduled lectures.

---

## 🚀 Live Demo

- **Frontend (Vercel)**: [https://online-lecture-scheduling-module-five.vercel.app](https://online-lecture-scheduling-module-five.vercel.app)  
- **Backend (Render)**: [https://online-lecture-scheduling-module-6nzr.onrender.com](https://online-lecture-scheduling-module-6nzr.onrender.com)

---

## 📦 Features

### ✅ Admin Panel
- Add courses with level, description, and image
- Assign lectures to instructors on specific dates
- Prevents lecture assignment conflicts
- View list of all instructors and scheduled lectures

### ✅ Instructor Panel
- Login and view assigned lectures
- Display course name, level, and date

---

## 🛠 Tech Stack

- **Frontend**: React (Vite), Axios, CSS  
- **Backend**: Node.js, Express.js  
- **Database**: MongoDB Atlas  
- **Authentication**: JWT-based auth  
- **Deployment**: Vercel (Frontend), Render (Backend)

---

## 📁 Project Structure

frontend/ # React frontend (Vite)
└── src/
├── components/
├── pages/
└── App.jsx

backend/ # Node/Express backend
├── models/
├── routes/
├── controllers/
└── server.js

yaml
Copy
Edit

---

## ⚙️ Installation & Setup (for local testing)

```bash
# Backend setup
cd backend
npm install
touch .env  # Add MONGO_URI and JWT_SECRET
node server.js

# Frontend setup
cd frontend
npm install
npm run dev
🌐 API Routes
Auth
POST /api/auth/signup – Register

POST /api/auth/login – Login

Admin
GET /api/users?role=instructor – List instructors

POST /api/courses – Add course

GET /api/courses – List courses

POST /api/lectures – Assign lecture

GET /api/lectures – List all lectures

Instructor
GET /api/lectures/instructor/:id – Instructor's lectures

🎥 Demo Video https://drive.google.com/file/d/1NMx7_LyznABiNMS379crG2FeI2srHwaM/view?usp=drive_link
🔗 Google Drive Link to Screen Recording

