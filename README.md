AI Telemedicine Frontend

A patient-focused telemedicine platform built with React 19 + Vite 7. Includes a landing page, authentication flows, a responsive patient dashboard, prescription management, and an AI health assistant powered by Google Gemini.

Features

Modern landing page with clear value propositions

Authentication mock flows (login, register, password reset)

Patient dashboard with appointments, prescriptions, doctor booking, and profile management

Floating AI assistant with context-aware guidance

Responsive layout with mobile support and modal interactions


Getting Started

npm install
npm run dev

Development server: http://localhost:5173

Environment Variables

The AI assistant uses the Gemini 2.5 Flash-Lite model. Create an .env file and add:

VITE_GEMINI_API_KEY=your-google-gemini-api-key

For production, proxy requests through a secure backend to protect the API key.

AI Prompting

The assistant adapts responses by page:

Dashboard: Symptom check-ins and wellbeing guidance

Book a Doctor: Specialist recommendations

Appointments: Scheduling help and reminders

Prescriptions: Medication explanations and tips


Responses are capped at ~180 words and encourage professional consultation when needed.

Build

npm run build

Outputs to dist/.

License

For demonstration purposes only. Update the license before deployment.

