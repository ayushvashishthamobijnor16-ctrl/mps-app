# MPS – School Management System

A complete full-stack school management web application built with **React + Vite + Express + SQLite**.

---

## 🚀 Tech Stack

| Layer      | Technology                          |
|------------|--------------------------------------|
| Frontend   | React 19, React Router v7, Tailwind CSS |
| Backend    | Node.js, Express 4                   |
| Database   | SQLite (via `better-sqlite3`)        |
| Auth       | JWT + bcrypt                         |
| Dev Tools  | Vite 5, Concurrently, ESLint         |

---

## 📦 Features

- 🔐 **Authentication** – Secure JWT login
- 👨‍🎓 **Students** – Add, edit, filter, delete student records
- 👩‍🏫 **Teachers** – Manage teacher profiles and salary info
- 🏫 **Classes** – Manage classes and assign class teachers
- 📅 **Attendance** – Mark attendance by class and date (Present / Absent / Late)
- 📝 **Marks & Results** – Record exam marks, auto-calculate grades
- 💰 **Fee Management** – Track, collect, and filter fee payments
- 📢 **Notices** – Publish school notices with priority levels
- 📊 **Dashboard** – Live stats: students, teachers, fees, attendance

---

## ⚡ Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the app (frontend + backend together)

```bash
npm run dev
```

This runs:
- **Frontend** on `http://localhost:5173`
- **Backend API** on `http://localhost:5000`

### 3. Login

| Field    | Value              |
|----------|--------------------|
| Email    | admin@school.com   |
| Password | admin123           |

---

## 🗂️ Project Structure

```
mps/
├── server/
│   ├── index.js          # Express server
│   ├── db.js             # SQLite setup + seed data
│   └── routes/
│       ├── auth.js
│       ├── students.js
│       ├── teachers.js
│       ├── classes.js
│       ├── attendance.js
│       ├── marks.js
│       ├── fees.js
│       ├── notices.js
│       ├── subjects.js
│       └── dashboard.js
├── src/
│   ├── context/
│   │   └── AuthContext.jsx
│   ├── components/
│   │   ├── Layout.jsx
│   │   ├── Sidebar.jsx
│   │   └── Modal.jsx
│   ├── pages/
│   │   ├── Login.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Students.jsx
│   │   ├── Teachers.jsx
│   │   ├── Classes.jsx
│   │   ├── Attendance.jsx
│   │   ├── Marks.jsx
│   │   ├── Fees.jsx
│   │   └── Notices.jsx
│   ├── App.jsx
│   ├── api.js
│   └── index.css
└── package.json
```

---

## 🛠️ Scripts

| Command       | Description                        |
|---------------|------------------------------------|
| `npm run dev` | Run frontend + backend together    |
| `npm run server` | Run backend only                |
| `npm run build` | Build frontend for production    |

---

## 🗄️ Database

SQLite database is auto-created at `server/school.db` on first run with:
- 10 sample students
- 5 teachers
- 10 classes (6A through 10B)
- Sample subjects, fees, and notices

---

## 🌐 Deploying

For production:
1. Run `npm run build` to build the frontend
2. Serve the `dist/` folder statically from Express
3. Set environment variable for JWT secret

---

## 📸 Pages

- `/` – Dashboard with live statistics
- `/students` – Student management
- `/teachers` – Teacher management
- `/classes` – Class configuration
- `/attendance` – Daily attendance marking
- `/marks` – Exam marks and grades
- `/fees` – Fee collection tracking
- `/notices` – School notice board
