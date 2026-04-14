import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const TopNavBar = ({ title = "Dashboard", onMenuClick }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showNotifications, setShowNotifications] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [notifRead, setNotifRead] = useState(false);

  const notifications = [
    { icon: 'security', color: 'text-emerald-500', title: 'Red-Team Complete', desc: 'Question achieved 100% AI failure rate.', time: '2m ago' },
    { icon: 'warning', color: 'text-amber-500', title: 'API Quota Warning', desc: 'Approaching daily limit. Rotate key if needed.', time: '5m ago' },
    { icon: 'database', color: 'text-blue-500', title: 'DB Sync', desc: 'Question bank synced to MongoDB Atlas.', time: '12m ago' },
  ];

  return (
    <header className="fixed top-0 z-50 flex justify-between items-center px-6 lg:px-12 h-20 lg:h-24 w-full lg:w-[calc(100%-20rem)] lg:ml-80 bg-white/70 backdrop-blur-2xl border-b border-slate-200/20 shadow-[0_1px_2px_rgba(0,0,0,0.02)] ease-in-out duration-500">
      <div className="flex items-center gap-4 lg:gap-12">
        <button onClick={onMenuClick} className="lg:hidden p-2 text-slate-600 hover:text-slate-900 transition-colors rounded-xl hover:bg-slate-100 flex items-center justify-center">
          <span className="material-symbols-outlined text-2xl">menu</span>
        </button>
        <h2 className="text-xl lg:text-2xl font-bold tracking-tighter text-slate-900 font-['Manrope'] hidden sm:block">
          {title}
        </h2>
        {location.pathname === '/exam-creator' && (
          <div className="hidden lg:flex items-center gap-8 font-['Manrope'] font-medium tracking-tight">
            <span className="text-slate-900 border-b-2 border-slate-900 pb-1 cursor-pointer transition-all duration-500">Drafts</span>
          </div>
        )}
        {location.pathname === '/question-bank' && (
          <nav className="hidden lg:flex items-center gap-8">
            <a href="#" className="font-['Manrope'] font-medium tracking-tight text-slate-900 border-b-2 border-slate-900 pb-1 transition-all duration-500 ease-in-out">Question Bank</a>
          </nav>
        )}
        {location.pathname === '/' && (
          <div className="relative w-64 lg:w-96 hidden md:block group">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">search</span>
            <input className="w-full bg-slate-100 border-none rounded-full py-2.5 pl-12 pr-4 text-sm focus:ring-2 focus:ring-slate-900/20 transition-all outline-none" placeholder="Search exams, subjects, logs..." type="text"/>
          </div>
        )}
      </div>

      <div className="flex items-center gap-4">

        {/* Notification Bell */}
        <div className="relative">
          <button
            onClick={() => { setShowNotifications(!showNotifications); setShowSettings(false); setShowProfile(false); setNotifRead(true); }}
            className="p-2.5 text-slate-500 hover:text-slate-900 transition-all duration-300 rounded-full hover:bg-slate-100 relative"
          >
            <span className="material-symbols-outlined">notifications</span>
            {!notifRead && <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>}
          </button>
          {showNotifications && (
            <div className="absolute right-0 top-14 w-80 bg-white rounded-2xl shadow-2xl shadow-slate-200/60 border border-slate-100 z-50 overflow-hidden">
              <div className="px-5 py-4 border-b border-slate-100 flex justify-between items-center">
                <h4 className="font-bold text-slate-900 text-sm font-['Manrope']">Notifications</h4>
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{notifications.length} alerts</span>
              </div>
              <div className="divide-y divide-slate-50">
                {notifications.map((n, i) => (
                  <div key={i} className="flex items-start gap-3 px-5 py-4 hover:bg-slate-50 transition-colors cursor-pointer">
                    <span className={`material-symbols-outlined text-xl mt-0.5 ${n.color}`}>{n.icon}</span>
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-slate-900 text-xs mb-0.5">{n.title}</p>
                      <p className="text-[11px] text-slate-500 leading-relaxed">{n.desc}</p>
                    </div>
                    <span className="text-[10px] text-slate-400 font-bold shrink-0">{n.time}</span>
                  </div>
                ))}
              </div>
              <div className="px-5 py-3 border-t border-slate-100 text-center">
                <button className="text-xs font-black text-slate-500 hover:text-slate-900 uppercase tracking-widest">Mark all read</button>
              </div>
            </div>
          )}
        </div>

        {/* Settings Button */}
        <div className="relative">
          <button
            onClick={() => { setShowSettings(!showSettings); setShowNotifications(false); setShowProfile(false); }}
            className="p-2.5 text-slate-500 hover:text-slate-900 transition-all duration-300 rounded-full hover:bg-slate-100"
          >
            <span className={`material-symbols-outlined transition-transform duration-500 ${showSettings ? 'rotate-90' : ''}`}>settings</span>
          </button>
          {showSettings && (
            <div className="absolute right-0 top-14 w-72 bg-white rounded-2xl shadow-2xl shadow-slate-200/60 border border-slate-100 z-50 overflow-hidden">
              <div className="px-5 py-4 border-b border-slate-100">
                <h4 className="font-bold text-slate-900 text-sm font-['Manrope']">Quick Settings</h4>
              </div>
              <div className="p-4 space-y-2">
                {[
                  { icon: 'key', label: 'API Key Management', action: () => navigate('/') },
                  { icon: 'database', label: 'Database Status', action: () => navigate('/') },
                  { icon: 'tune', label: 'Generation Preferences', action: () => navigate('/exam-creator') },
                  { icon: 'bar_chart', label: 'Analytics Dashboard', action: () => navigate('/') },
                ].map(({ icon, label, action }) => (
                  <button key={label} onClick={action} className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-50 text-left transition-colors group">
                    <span className="material-symbols-outlined text-slate-400 group-hover:text-slate-900 transition-colors">{icon}</span>
                    <span className="text-sm font-semibold text-slate-700 group-hover:text-slate-900 transition-colors">{label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="h-8 w-[1px] bg-slate-200"></div>

        {/* Avatar */}
        <div className="relative">
          <div 
            onClick={() => { setShowProfile(!showProfile); setShowSettings(false); setShowNotifications(false); }}
            className="w-11 h-11 rounded-full overflow-hidden bg-slate-200 border border-slate-200/50 ring-2 ring-slate-100 ring-offset-2 cursor-pointer hover:ring-slate-300 transition-all"
          >
            <img alt="User Avatar" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNgZv4G7ZciaWVU2xybxTnb_TzLOHkCKtJJjRCUa8Zu4-p2DQT0gISR0uUiHHvvj6w-g8801-GK2BA2ICiSgC-ysOXHKIxvPzvZopTzOn2-LsBS8SuL2r1smTBeBMhAxFkeP-8ek0FtGGGXq9VVUIwdLTf_IXddA0KjJ5vcHXQRvPkv4k49pZYW1SsFQnTZzhNX4DK2-D3CijGjXOFSsZHJ4Xr35Vk3qi8DeF56WW8c3EDgCpmtXC9LbF3fGIGYLfioUkRw4E5fPI" />
          </div>
          {showProfile && (
            <div className="absolute right-0 top-14 w-60 bg-white rounded-2xl shadow-2xl shadow-slate-200/60 border border-slate-100 z-50 overflow-hidden">
              <div className="px-5 py-4 border-b border-slate-100">
                <h4 className="font-bold text-slate-900 text-sm font-['Manrope']">Aly</h4>
                <p className="text-[11px] text-slate-500">Digital Architect</p>
              </div>
              <div className="p-3 space-y-1">
                <button onClick={() => navigate('/')} className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-slate-50 text-left transition-colors group">
                  <span className="material-symbols-outlined text-[20px] text-slate-400 group-hover:text-slate-900 transition-colors">person</span>
                  <span className="text-sm font-semibold text-slate-700 group-hover:text-slate-900 transition-colors">My Profile</span>
                </button>
                <button onClick={() => navigate('/')} className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-slate-50 text-left transition-colors group">
                  <span className="material-symbols-outlined text-[20px] text-slate-400 group-hover:text-slate-900 transition-colors">account_circle</span>
                  <span className="text-sm font-semibold text-slate-700 group-hover:text-slate-900 transition-colors">Account Settings</span>
                </button>
                <div className="h-px bg-slate-100 my-1"></div>
                <button onClick={() => navigate('/login')} className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-red-50 text-left transition-colors group">
                  <span className="material-symbols-outlined text-[20px] text-red-400 group-hover:text-red-600 transition-colors">logout</span>
                  <span className="text-sm font-semibold text-red-500 group-hover:text-red-600 transition-colors">Sign Out</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Click-outside overlay */}
      {(showNotifications || showSettings || showProfile) && (
        <div className="fixed inset-0 z-40" onClick={() => { setShowNotifications(false); setShowSettings(false); setShowProfile(false); }} />
      )}
    </header>
  );
};

export default TopNavBar;
