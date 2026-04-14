# Pareeksha AI - Frontend Interface

This is the React-based client for the **Pareeksha AI** Adversarial Engine. It features a premium, glassmorphic design system tailored for high-stakes evaluation design.

## 🎨 Design System

The frontend is built with a focus on **Visual Excellence**:
- **Typography**: Uses `Manrope` for headlines and `Inter` for body text.
- **Styling**: Vanilla Tailwind CSS with custom glassmorphism and mesh gradients.
- **Markdown Support**: Full markdown rendering for questions and answers using `@tailwindcss/typography` (prose) and `react-markdown`.
- **Charts**: Interactive failure trend analysis using `recharts`.

## 🏗️ Core Pages

- **Dashboard**: High-level analytics, integrity scores, and recent question activity.
- **Exam Creator**: The central workspace for configuring and generating adversarial questions.
- **Question Bank**: A searchable, filtered vault of all verified questions.
- **Auth Flow**: Secure Login and Registration layouts.

## 🛠️ Tech Stack

- **Framework**: [Vite](https://vitejs.dev/) + [React 19](https://react.dev/)
- **Routing**: [React Router 7](https://reactrouter.com/)
- **State/Data**: [Axios](https://axios-http.com/) for API communication.
- **Rendering**: [React Markdown](https://github.com/remarkjs/react-markdown) for technical content.

## 🚦 Local Development

```bash
# Install dependencies
npm install

# Run dev server
npm run dev
```

The app will be available at `http://localhost:5173`. Make sure the backend is running at `http://localhost:5001`.
