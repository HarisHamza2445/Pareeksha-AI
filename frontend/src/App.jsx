import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import AuthLayout from './layouts/AuthLayout';
import Dashboard from './pages/Dashboard';
import ExamCreator from './pages/ExamCreator';
import QuestionBank from './pages/QuestionBank';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth Routes */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        {/* Dashboard / Main App Routes */}
        <Route element={<MainLayout title="Dashboard" />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/exam-creator" element={<ExamCreator />} />
          <Route path="/question-bank" element={<QuestionBank />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
