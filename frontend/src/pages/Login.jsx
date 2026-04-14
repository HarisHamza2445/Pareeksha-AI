import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      navigate('/'); // Redirect to dashboard
    }, 1200);
  };

  return (
    <div className="glass-card rounded-3xl p-8 shadow-2xl shadow-slate-900/10 w-full animate-fade-in-up">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold font-['Manrope'] tracking-tight text-slate-900 mb-2">Welcome Back</h2>
        <p className="text-slate-500 text-sm font-medium">Please enter your details to sign in.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-white/50 border border-slate-200/60 rounded-xl py-3 pl-12 pr-4 text-sm focus:ring-2 focus:ring-slate-900 focus:border-slate-900 outline-none transition-all placeholder:text-slate-400"
              placeholder="••••••••"
            />
          </div>
        </div>

        <div className="flex items-center justify-between mt-2 mb-6">
          <label className="flex items-center gap-2 cursor-pointer group">
            <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-slate-900 focus:ring-slate-900 cursor-pointer" />
            <span className="text-sm font-medium text-slate-600 group-hover:text-slate-900 transition-colors">Remember me</span>
          </label>
          <a href="#" className="text-sm font-semibold text-slate-900 hover:underline decoration-2 underline-offset-4">Forgot password?</a>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-gradient-to-r from-slate-900 to-slate-800 text-white py-3.5 px-4 rounded-xl font-bold flex items-center justify-center gap-2 shadow-xl shadow-slate-900/15 hover:shadow-2xl hover:shadow-slate-900/20 hover:scale-[1.02] transition-all duration-300 active:scale-95 disabled:opacity-70 disabled:hover:scale-100 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <span className="material-symbols-outlined animate-spin text-xl">progress_activity</span>
          ) : (
            <>
              Sign In
              <span className="material-symbols-outlined text-xl">arrow_forward</span>
            </>
          )}
        </button>
      </form>

      <p className="text-center text-sm font-medium text-slate-500 mt-8">
        Don't have an account?{' '}
        <Link to="/register" className="text-slate-900 font-bold hover:underline decoration-2 underline-offset-4">
          Sign up
        </Link>
      </p>
    </div>
  );
};

export default Login;
