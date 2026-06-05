# 🚀 FounderOS

AI-powered startup idea validator and chat workspace that turns ideas into structured business analysis using LLMs.

## ✨ Features

- AI Startup Idea Analysis (Groq / LLaMA 3.3)
- Chat-based workspace (ChatGPT-style UI)
- Persistent chat history (MongoDB)
- Firebase Authentication
- Sidebar chat navigation
- Real-time message updates
- Dashboard with live stats (coming soon)
- Structured AI business reports

## 🏗️ Tech Stack

Frontend:
- React.js
- Context API
- Tailwind CSS
- Firebase Auth
- React Markdown

Backend:
- Node.js
- Express.js
- MongoDB + Mongoose
- Firebase Admin SDK
- Groq SDK

## 📁 Project Structure

<!-- FounderOS/
├── frontend/
│   ├── src/
│   ├── components/
│   ├── pages/
│   ├── context/
│   └── firebase.js
│
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── middleware/
│   └── server.js
│
└── README.md -->

## ⚙️ Setup Instructions

## a) Clone Repo
- git clone https://github.com/yourusername/founderos.git
- cd founderos
## b) Install Backend
- cd backend
- npm install
## c) .env file Setup
- PORT=4000
- MONGO_URI=your_mongo_uri
- GROQ_API_KEY=your_groq_api_key
- FIREBASE_PROJECT_ID=your_project_id
- FIREBASE_CLIENT_EMAIL=your_client_email
- FIREBASE_PRIVATE_KEY=your_private_key
## d) Install Frontend
- npm run dev
- cd frontend
- npm install
- npm run dev

## 🧠 How It Works

1. User logs in via Firebase Auth
2. User submits startup idea
3. Backend sends prompt to Groq LLM
4. AI returns structured business analysis
5. Data stored in MongoDB
6. Frontend renders results in chat UI

## 💬 AI Output Includes

- Executive Summary
- Target Audience
- Market Potential
- Competitors
- Revenue Model
- Risks
- MVP Features
- Go-To-Market Strategy
- Final Score

## 👨‍💻 Author

Built by Rudraksh

## 📜 License

MIT License
