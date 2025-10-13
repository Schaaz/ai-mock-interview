🧩 PrepGrid

PrepGrid is an AI-powered mock interview platform available on Web and Android, designed to help students and professionals prepare for real-world job interviews.
Built with Next.js, TypeScript, and Google Gemini API, it simulates realistic interview scenarios, evaluates answers, and provides personalized AI feedback.

🚀 Features Implemented
🌐 Web (Next.js)

🤖 AI-Powered Interviews – Real-time Q&A sessions using Google Gemini API

🎯 Instant Feedback – AI-generated suggestions and improvement tips

🔐 User Authentication – Secure login/signup via Clerk

📊 Performance Analytics – Track your improvement over multiple sessions

🎨 Modern UI/UX – Built with TailwindCSS, fully responsive and smooth

☁️ MongoDB Integration – Store user sessions, feedback, and analytics data

📱 Android (React Native / Native Bridge)

🗣️ Voice Input Support – Answer questions verbally in real-time

📷 Camera-Based Interview Mode – Record and analyze expressions (OpenCV-based)

🧩 Cross-Platform Sync – Same account access and analytics on both Web & Android

🔔 Push Notifications – Get reminders for daily interview practice

📸 Screenshots

https://drive.google.com/file/d/1ebAM7pLu2OfCGapyHbmk3BXkBnQNH0Ui/view?usp=drive_link
https://drive.google.com/file/d/1N8KmlYkrCqOOdFa4UnJNA657pC7uNPXe/view?usp=drive_link
https://drive.google.com/file/d/1egiulXkVoFO49cPZFNi7VglLL2hZe7wm/view?usp=sharing
https://drive.google.com/file/d/1PUT_P25Y8Ir5DsVw564KpIRGLTu1POH3/view?usp=drive_link
https://drive.google.com/file/d/1CD_cTSuNLtTtNMhQzeZKH8T4SkCUSVl1/view?usp=drive_link


⚙️ Setup Instructions
1. Clone the Repository

2. Web Setup (Next.js)
npm install
npm run dev


Create a .env.local file:
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_bG92ZWQtZ29sZGZpc2gtNTQuY2xlcmsuYWNjb3VudHMuZGV2JA
CLERK_SECRET_KEY=sk_test_16LMq0fEZOmyzgW3Ns1smTymJ96OsdGFCSajOw2a94
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_DRIZZLE_DB_URL='postgresql://neondb_owner:npg_n3JVDSCR1fbi@ep-empty-night-a16xdsp2-pooler.ap-southeast-1.aws.neon.tech/ai-interview?sslmode=require&channel_binding=require'
NEXT_PUBLIC_GEMINI_API_KEY=AIzaSyB85pCoNtd1gCeW1Tiw6mlvjhJUYy7kPrc
NEXT_PUBLIC_INTERVIEW_QUESTION_COUNT =5
NEXT_PUBLIC_INFORMATION = "Enable Video Recording for Mock Interviews. This will help you review your performance and improve your skills. You can enable or disable this feature in the settings."
NEXT_PUBLIC_QUESTION_NOTE="Click on Record Answer when you want to answer the question. At the end of the interview we will give you the feedback along with correct answer for each of the question and your answer to compare it."



🧠 Architecture Overview
🧩 Web Architecture (Next.js + TypeScript)

Frontend: Next.js (TypeScript, TailwindCSS)

Backend: API routes handle requests to Google Gemini API

Database: MongoDB stores user data, interview sessions, and analytics

Auth Layer: Clerk provides secure and scalable authentication



🧰 Tech Stack
Layer	Technology
Frontend	Next.js (TypeScript), TailwindCSS
AI/Backend	Google Gemini API
Database	MongoDB
Auth	Clerk
Native	C++ (for frame processing)

💡 Future Enhancements

🎥 Real-time facial emotion analysis for better feedback

🧠 Adaptive question difficulty based on past performance

🗂️ Resume and job-matching suggestions using Gemini embeddings
