# AI Telemedicine Frontend

A patient-focused telemedicine experience built with React 19 + Vite 7. The app ships with a marketing landing page, authentication flows, a responsive patient dashboard, prescription management, and an AI health companion powered by Google Gemini.

## ✨ Features

- Modern medical landing page with clear value propositions
- Email/password authentication mock flows for login, register, and password reset
- Patient dashboard with appointments, prescriptions, doctor booking, and profile management
- Floating AI assistant available across all patient pages with context-aware guidance
- Responsive layout, mobile-ready navigation, and modal-based interactions

## 🚀 Getting Started

```bash
npm install
npm run dev
```

The development server runs at [http://localhost:5173](http://localhost:5173).

## 🔐 Environment Variables

The AI assistant uses the Gemini 2.5 Flash-Lite model. Create an `.env` file (copy `.env.example`) and provide your API key:

```
VITE_GEMINI_API_KEY=your-google-gemini-api-key
```

> **Note:** Calling Gemini directly from the browser exposes the API key. For production, proxy requests through a secure backend service.

## 🧠 AI Prompting Behaviour

The assistant tailors its system prompt and suggestions based on the active patient page:

- **Dashboard:** Symptom check-ins and wellbeing guidance
- **Book a Doctor:** Specialist recommendations based on symptoms and availability
- **Appointments:** Scheduling help and reminder preparation
- **Prescriptions:** Medication explanations and adherence tips

Each response is capped at ~180 words, includes empathetic guidance, and gently nudges patients toward professional care when needed.

## 🏗️ Build

```bash
npm run build
```

The production bundle outputs to `dist/`.

## 📄 License

This project is provided as-is for demonstration purposes. Update the license to suit your deployment needs.
