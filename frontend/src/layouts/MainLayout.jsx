import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import TopNavBar from '../components/TopNavBar';

const MainLayout = ({ title }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen relative overflow-hidden bg-slate-50 selection:bg-slate-900 selection:text-white">
      {/* Premium Background Layer */}
      <div className="mesh-gradient animate-mesh"></div>
      
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <div className="flex-1 flex flex-col">
        <TopNavBar title={title} onMenuClick={() => setIsSidebarOpen(true)} />
        <main className="ml-0 lg:ml-80 pt-24 pb-16 min-h-screen relative z-10 transition-all duration-700">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
