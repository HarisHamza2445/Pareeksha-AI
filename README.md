# Pareeksha AI: The Adversarial Exam Architect
> **Building the next generation of AI-resistant evaluation questions.**

Pareeksha AI is a high-fidelity adversarial exam design engine built to challenge the reasoning capabilities of modern Large Language Models (LLMs). It uses **Gemini 2.5 Flash Lite** to synthesize multi-layered, scenario-based questions that penalize rote memorization and reward deep conceptual understanding.

---

## 🚀 Key Features

- **Adversarial Engine**: Generates questions specifically designed to trigger hallucinations or logical failures in AI solvers.
- **Red-Teaming Suite**: Automatically tests every generated question against AI models to verify their "Failure Rate."
- **Regional Nuance**: Mode-switching for scenario-based or regional context (e.g., India-specific policies) that generic AI training data often misses.
- **Verified Vault**: A secure repository of certified AI-resistant evaluation units.
- **Integrity Analytics**: Real-time dashboard monitoring of the project's overall resistance fidelity.

## 🛠️ Technology Stack

- **Frontend**: React.js, Vite, Tailwind CSS (Typography + Glassmorphism).
- **Backend**: Node.js, Express.
- **Intelligence**: Google Gemini API (Adversarial Prompting + Red-Team Evaluation).
- **Database**: MongoDB (Question Vault & Stats Tracking).

---

## 📦 Installation & Setup

### Prerequisites
- Node.js (v18+)
- MongoDB instance (local or Atlas)
- Google Gemini API Key

### Backend Setup
1. Navigate to `/backend`
2. Run `npm install`
3. Create a `.env` file:
   ```env
   PORT=5001
   MONGO_URI=your_mongodb_uri
   GEMINI_API_KEY=your_api_key
   ```
4. Start server: `npm run dev`

### Frontend Setup
1. Navigate to `/frontend`
2. Run `npm install`
3. Start development server: `npm run dev`
4. Access at `http://localhost:5173`

---

## 🎨 Visual Preview

- **Architect's Console**: Monitor global integrity scores and failure trends.
- **Adversarial Workspace**: Configure and generate multi-step logic questions.
- **Red-Team Logs**: Real-time feedback as AI attempts to solve its own questions.

---

## 📜 License
MIT License. Built for the future of education integrity.
