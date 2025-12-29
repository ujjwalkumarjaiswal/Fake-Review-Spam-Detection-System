🚀 Fake Review & Spam Comment Detection System

   A backend-based AI-powered system that detects fake, spam, or genuine reviews using Natural Language Processing (NLP) via an AI API.
   This project is inspired by real-world platforms like Amazon, Flipkart, and Google Reviews.

📌 Project Overview

  Online platforms often suffer from fake and spam reviews that mislead users.
  This system automatically analyzes user-submitted reviews and classifies them as:

  ✅ Genuine

  ⚠️ Spam

  ❌ Fake

The classification is done using an AI text classification model, without manual ML training.

   🎯 Key Features

   🔐 JWT Authentication (Secure Login & Signup)

  🧠 AI-powered review classification

  🧾 Submit and analyze reviews

   🛡️ Protected routes using JWT

  👨‍💻 Admin-ready structure

  ⚡ Fast & scalable backend

  📦 Clean project architecture

  Project Folder Structure  

  backend/
│
├── config/
│   ├── db.js
│   └── openai.js
│
├── controllers/
│   ├── authController.js
│   └── reviewController.js
│
├── models/
│   ├── User.js
│   └── Review.js
│
├── middleware/
│   └── authMiddleware.js
│
├── routes/
│   ├── authRoutes.js
│   └── reviewRoutes.js
│
├── .env
├── server.js
└── package.json
