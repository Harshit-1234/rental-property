# 🏡 RentEasy – Rental Property Website

RentEasy is a full-featured web platform designed to connect tenants with property owners. Built using **React.js** for the frontend and **Node.js + Express** for the backend, it supports real-time messaging, property listings, admin management, and more.

---

## 📦 Tech Stack

| Frontend               | Backend                | Database         |
|------------------------|------------------------|------------------|
| React.js (Vite)        | Node.js + Express.js   | MongoDB Atlas    |
| React Router DOM       | RESTful API            | Mongoose ODM     |
| Tailwind CSS / Theme   | JWT Authentication     | Cloud Hosted     |
| Vercel (Hosting)       | Render (API Hosting)   |                  |

---

## 🌐 Live Demo

- **Frontend**: [https://renteasy.vercel.app](https://renteasy.vercel.app)  
- **Backend**: [https://renteasy-backend.onrender.com](https://renteasy-backend.onrender.com)

---

## 🔧 Features

### 🧑‍💼 Tenant Features
- Browse rental listings
- Filter by location, price, property type, etc.
- Save favorite properties
- Apply to rent
- Contact property owners
- Dashboard to track applications

### 🏠 Owner Features
- Add/Edit/Delete property listings
- Upload property images
- View inquiries & stats
- Messaging with interested tenants

### 👩‍💻 Admin Panel
- Approve or decline listings
- Manage users (owners/tenants)
- View search analytics and reported content

---

## 🛠️ Project Structure

```bash
RentEasy/
├── renteasy-frontend/    # React frontend
│   └── src/
│       ├── components/
│       ├── pages/
│       └── styles/
├── renteasy-backend/     # Express backend
│   ├── controllers/
│   ├── routes/
│   └── models/
└── README.md
