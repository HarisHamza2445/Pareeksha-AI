import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <div className="flex min-h-screen relative overflow-hidden bg-slate-50 selection:bg-slate-900 selection:text-white items-center justify-center">
      {/* Premium Background Layer */}
      <div className="mesh-gradient animate-mesh"></div>
      
      <main className="relative z-10 w-full max-w-md p-6">
        {/* Brand Header for Auth Pages */}
        <div className="flex flex-col items-center mb-8 relative">
          <div className="w-16 h-16 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center rounded-2xl shadow-xl shadow-slate-900/20 mb-4 z-10">
            <span className="material-symbols-outlined text-white text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
              architecture
            </span>
          </div>
          <h1 className="font-['Manrope'] font-bold text-3xl tracking-tighter text-slate-900 leading-tight">
            Pareeksha AI
          </h1>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-slate-400/20 rounded-full blur-2xl -z-10 mix-blend-multiply"></div>
        </div>

        <Outlet />
      </main>
    </div>
  );
};

export default AuthLayout;
