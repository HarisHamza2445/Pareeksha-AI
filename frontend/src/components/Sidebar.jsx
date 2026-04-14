import { Link, useLocation, useNavigate } from 'react-router-dom';

const Sidebar = ({ isOpen, setIsOpen }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { path: '/', icon: 'dashboard', label: 'Dashboard' },
    { path: '/exam-creator', icon: 'edit_document', label: 'Exam Creator' },
    { path: '/question-bank', icon: 'database', label: 'Question Bank' },
  ];

  const getLinkClasses = (path) => {
    const isActive = location.pathname === path;
    const base = "flex items-center gap-3 px-4 py-3.5 rounded-2xl cursor-pointer ease-out transition-all duration-300 ";
    const active = "bg-white text-slate-900 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.08)] relative after:content-[''] after:absolute after:left-0 after:top-1/4 after:h-1/2 after:w-[3px] after:bg-slate-900 after:rounded-full font-semibold";
    const inactive = "text-slate-500 hover:bg-white/60 hover:text-slate-800 hover:translate-x-1 font-medium";
    return base + (isActive ? active : inactive);
  };

  const handleNavClick = (path) => {
    setIsOpen(false); // Auto-close on mobile
    navigate(path);
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-md z-30 lg:hidden transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside className={`h-screen w-80 fixed left-0 top-0 z-40 border-r border-slate-200/30 bg-slate-50/90 backdrop-blur-xl flex flex-col p-8 font-['Inter'] tracking-tight text-sm transform transition-transform duration-500 cubic-bezier(0.16, 1, 0.3, 1) ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>

        {/* Brand */}
      <div className="flex items-center gap-4 mb-10 px-2 group cursor-pointer" onClick={() => handleNavClick('/')}>
        <div className="w-11 h-11 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center rounded-2xl shadow-xl shadow-slate-900/20 group-hover:scale-110 transition-transform duration-300">
          <span className="material-symbols-outlined text-white text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>
            architecture
          </span>
        </div>
        <div>
          <h1 className="font-['Manrope'] font-bold text-xl tracking-tighter text-slate-900 leading-tight">
            Pareeksha AI
          </h1>
          <div className="flex items-center gap-1.5 mt-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <p className="text-[10px] text-emerald-600 font-bold uppercase tracking-widest">
              Engine Active
            </p>
          </div>
        </div>
      </div>

      {/* Nav Label */}
      <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.18em] mb-3 px-4">Main Menu</p>

      {/* Navigation */}
      <nav className="flex flex-col gap-1">
        {navItems.map(({ path, icon, label }) => (
          <button key={path} onClick={() => handleNavClick(path)} className={getLinkClasses(path)}>
            <span className={`material-symbols-outlined text-xl ${location.pathname === path ? '' : 'opacity-60'}`}>{icon}</span>
            <span>{label}</span>
          </button>
        ))}
      </nav>

      {/* Divider */}
      <div className="my-6 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>


      {/* New Exam CTA */}
      <div className="mt-auto pt-4 border-t border-slate-200/50">
        <button
          onClick={() => navigate('/exam-creator')}
          className="w-full bg-gradient-to-r from-slate-900 to-slate-800 text-white py-4 px-4 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-xl shadow-slate-900/15 hover:shadow-2xl hover:shadow-slate-900/20 hover:scale-[1.02] transition-all duration-300 active:scale-95 mb-3"
        >
          <span className="material-symbols-outlined">add</span>
          Generate New Exam
        </button>

        <button
          onClick={() => navigate('/login')}
          className="w-full bg-transparent text-slate-500 hover:text-red-600 hover:bg-red-50 py-3 px-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all duration-300 group"
        >
          <span className="material-symbols-outlined group-hover:text-red-500 transition-colors">logout</span>
          Sign Out
        </button>
      </div>
      </aside>
    </>
  );
};

export default Sidebar;
