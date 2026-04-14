import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    if (error) setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      navigate('/'); // Redirect to dashboard or onboarding
    }, 1200);
  };

  return (
    <div className="glass-card rounded-3xl p-8 shadow-2xl shadow-slate-900/10 w-full animate-fade-in-up">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold font-['Manrope'] tracking-tight text-slate-900 mb-2">Create Account</h2>
        <p className="text-slate-500 text-sm font-medium">Join Pareeksha AI today.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        
        {error && (
          <div className="bg-red-50 text-red-600 text-sm font-semibold p-3 rounded-xl flex items-center gap-2 border border-red-100">
            <span className="material-symbols-outlined text-lg">error</span>
            {error}
          </div>
        )}

        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 ml-1" htmlFor="name">
            Full Name
          </label>
          <div className="relative group">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-slate-900 transition-colors">person</span>
            <input
              id="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-white/50 border border-slate-200/60 rounded-xl py-3 pl-12 pr-4 text-sm focus:ring-2 focus:ring-slate-900 focus:border-slate-900 outline-none transition-all placeholder:text-slate-400"
              placeholder="John Doe"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 ml-1" htmlFor="email">
            Email Address
          </label>
          <div className="relative group">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-slate-900 transition-colors">mail</span>
            <input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-white/50 border border-slate-200/60 rounded-xl py-3 pl-12 pr-4 text-sm focus:ring-2 focus:ring-slate-900 focus:border-slate-900 outline-none transition-all placeholder:text-slate-400"
              placeholder="you@example.com"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 ml-1" htmlFor="password">
            Password
          </label>
          <div className="relative group">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-slate-900 transition-colors">lock</span>
            <input
              id="password"
              type="password"
              required
              value={formData.password}
              onChange={handleChange}
              className="w-full bg-white/50 border border-slate-200/60 rounded-xl py-3 pl-12 pr-4 text-sm focus:ring-2 focus:ring-slate-900 focus:border-slate-900 outline-none transition-all placeholder:text-slate-400"
              placeholder="••••••••"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 ml-1" htmlFor="confirmPassword">
            Confirm Password
          </label>
          <div className="relative group">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-slate-900 transition-colors">lock</span>
            <input
              id="confirmPassword"
              type="password"
              required
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full bg-white/50 border border-slate-200/60 rounded-xl py-3 pl-12 pr-4 text-sm focus:ring-2 focus:ring-slate-900 focus:border-slate-900 outline-none transition-all placeholder:text-slate-400"
              placeholder="••••••••"
            />
          </div>
        </div>

        <div className="pt-2">
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-slate-900 to-slate-800 text-white py-3.5 px-4 rounded-xl font-bold flex items-center justify-center gap-2 shadow-xl shadow-slate-900/15 hover:shadow-2xl hover:shadow-slate-900/20 hover:scale-[1.02] transition-all duration-300 active:scale-95 disabled:opacity-70 disabled:hover:scale-100 disabled:cursor-not-allowed mt-2"
          >
            {isLoading ? (
              <span className="material-symbols-outlined animate-spin text-xl">progress_activity</span>
            ) : (
              <>
                Sign Up
                <span className="material-symbols-outlined text-xl">person_add</span>
              </>
            )}
          </button>
        </div>
      </form>

      <p className="text-center text-sm font-medium text-slate-500 mt-8">
        Already have an account?{' '}
        <Link to="/login" className="text-slate-900 font-bold hover:underline decoration-2 underline-offset-4">
          Log in
        </Link>
      </p>
    </div>
  );
};

export default Register;
