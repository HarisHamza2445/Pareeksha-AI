import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

const Dashboard = () => {
  const navigate = useNavigate();
  const [stats, setStats] = useState({
    totalQuestionsGenerated: 0,
    totalQueriesAssessed: 0,
    vulnerabilitiesBlocked: 0,
    avgFailureRate: 0
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await axios.get('/api/stats');
        setStats(response.data);
      } catch (error) {
        console.error("Error fetching stats:", error);
      }
    };
    fetchStats();
  }, []);

  return (
    <div className="p-6 lg:p-12 relative min-h-[calc(100vh-6rem)]">

      {/* Hero Header */}
      <div className="glass-card rounded-[2.5rem] p-10 mb-10 border border-white/30 relative overflow-hidden">
        <div className="absolute -right-10 -top-10 w-72 h-72 bg-gradient-to-br from-emerald-100/40 to-slate-100/0 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -left-10 -bottom-10 w-48 h-48 bg-gradient-to-tr from-slate-200/30 to-transparent rounded-full blur-2xl pointer-events-none"></div>
        <div className="relative z-10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 lg:gap-0">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-emerald-50 border border-emerald-100 text-emerald-700 px-3 py-1.5 rounded-full text-xs font-black uppercase tracking-widest flex items-center gap-2 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Adversarial Engine Online
              </span>
              <span className="bg-slate-100 border border-slate-200/50 text-slate-500 px-3 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">
                Gemini 2.5 Flash Lite
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 mb-3 font-['Manrope'] leading-none">
              Architect's Console
            </h2>
            <p className="text-slate-500 text-lg font-medium max-w-xl leading-relaxed">
              Real-time intelligence hub. Monitor AI resistance scores, red-team failures, and your growing cheat-proof question vault.
            </p>
          </div>
          <button
            onClick={() => navigate('/exam-creator')}
            className="shrink-0 w-full lg:w-auto bg-slate-900 text-white px-8 py-5 rounded-2xl font-bold text-base shadow-2xl shadow-slate-900/20 hover:scale-[1.02] hover:bg-slate-800 transition-all duration-300 active:scale-95 flex items-center justify-center gap-3"
          >
            <span className="material-symbols-outlined">auto_awesome</span>
            Generate Question
          </button>
        </div>
      </div>


      {/* Statistics Bento Grid */}
      <div className="grid grid-cols-12 gap-6 mb-12">
        {/* Main Intelligence Card */}
        <div className="col-span-12 lg:col-span-8 glass-card p-6 lg:p-8 rounded-[2rem] shadow-sm relative overflow-hidden group border border-white/40 glass-card-hover transition-all duration-500">
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity duration-700">
            <span className="material-symbols-outlined text-slate-900 text-8xl">auto_awesome</span>
          </div>
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-6">
              <span className="bg-emerald-50 text-emerald-700 border border-emerald-100 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-1.5 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                Active Shield Enabled
              </span>
            </div>
            <h3 className="text-6xl font-extrabold text-slate-900 mb-4 tracking-tighter font-['Manrope']">{stats.avgFailureRate}<span className="text-3xl text-slate-400 font-medium">%</span></h3>
            <p className="text-lg lg:text-xl font-semibold text-slate-500 mb-8 tracking-tight">AI-Resistance Fidelity (Verified Vault)</p>
            
            <div className="flex flex-wrap items-center gap-6 lg:gap-8">
              <div>
                <p className="text-[10px] text-slate-400 uppercase font-black tracking-[0.15em] mb-1">Total Exams</p>
                <p className="text-2xl font-bold text-slate-900 leading-none">{stats.totalQuestionsGenerated}</p>
              </div>
              <div className="w-px h-10 bg-slate-200/60"></div>
              <div>
                <p className="text-[10px] text-slate-400 uppercase font-black tracking-[0.15em] mb-1">Logic Queries</p>
                <p className="text-2xl font-bold text-slate-900 leading-none">{stats.totalQueriesAssessed.toLocaleString()}</p>
              </div>
              <div className="w-px h-10 bg-slate-200/60"></div>
              <div>
                <p className="text-[10px] text-emerald-600/60 uppercase font-black tracking-[0.15em] mb-1">Adversarial Blocks</p>
                <p className="text-2xl font-bold text-emerald-600 leading-none">{stats.vulnerabilitiesBlocked.toLocaleString()}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Integrity Meter Card */}
        <div className="col-span-12 lg:col-span-4 bg-slate-900 text-white p-6 lg:p-8 rounded-[2rem] flex flex-col justify-between shadow-2xl shadow-slate-900/20 group hover:scale-[1.02] transition-all duration-500">
          <div>
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-bold font-['Manrope'] tracking-tight">Integrity Score</h3>
              <span className="material-symbols-outlined text-emerald-400 opacity-50 group-hover:opacity-100 transition-opacity">security</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed font-medium">Your current question bank maintains high architectural resistance to LLM hallucination and synthesis.</p>
          </div>
          
          <div className="mt-8">
            <div className="flex justify-between items-end mb-4">
              <span className="text-6xl font-black font-['Manrope'] leading-none">A+</span>
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest bg-emerald-400/10 px-3 py-1 rounded-full">Top 2% Globally</span>
            </div>
            <div className="h-3 w-full bg-white/10 rounded-full overflow-hidden border border-white/5">
              <div className="h-full bg-gradient-to-r from-emerald-400 via-emerald-300 to-emerald-400 animate-shimmer" style={{ width: '92%', backgroundSize: '200% 100%' }}></div>
            </div>
          </div>
        </div>

      {/* Recent Questions List */}
      <div className="col-span-12 glass-card rounded-[2rem] shadow-sm border border-white/40 p-6 lg:p-8 glass-card-hover transition-all duration-500">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 lg:mb-10">
          <div>
            <h3 className="text-xl lg:text-2xl font-bold tracking-tight text-slate-900 font-['Manrope'] mb-1">Adversarial Question Bank</h3>
            <p className="text-sm text-slate-500 font-medium">Log entries of all verified AI-resistant questions.</p>
          </div>
          <button className="text-xs font-black uppercase tracking-widest text-slate-600 flex items-center gap-2 hover:text-slate-900 transition-all bg-slate-100 px-5 py-2.5 rounded-full border border-slate-200/50 shadow-sm">
            View Repository <span className="material-symbols-outlined text-base">arrow_forward</span>
          </button>
        </div>
        
        <div className="space-y-4">
          {stats.recentQuestions && stats.recentQuestions.length > 0 ? stats.recentQuestions.map(q => (
            <div key={q._id} className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-5 rounded-[1.5rem] border border-transparent hover:border-slate-200/60 hover:bg-white/50 transition-all duration-300">
              <div className="flex items-start md:items-center gap-4 lg:gap-6">
                <div className="shrink-0 w-12 h-12 lg:w-16 lg:h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-slate-700 border border-slate-200/60">
                  <span className="material-symbols-outlined text-3xl">terminal</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-slate-900 leading-tight mb-2 max-w-2xl truncate tracking-tight">{q.questionText}</h4>
                  <div className="flex items-center gap-3">
                    <span className="bg-slate-100 text-slate-500 text-[10px] font-black px-2.5 py-1 rounded-lg uppercase tracking-wider">{q.subject}</span>
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">• {new Date(q.createdAt).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-12 md:text-right mt-2 md:mt-0">
                <div className="min-w-[140px]">
                  <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest mb-2 lg:mb-3">Failure Rate</p>
                  <div className="flex items-center gap-3">
                    <div className="w-24 h-2 bg-slate-100/80 rounded-full overflow-hidden border border-slate-200/30">
                      <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${q.failureRate}%` }}></div>
                    </div>
                    <span className="text-sm font-black text-emerald-600 leading-none">{q.failureRate}%</span>
                  </div>
                </div>
              </div>
            </div>
          )) : (
            <div className="text-center py-10 text-slate-500 font-medium">No verified questions available. Generate one in the Exam Creator.</div>
          )}
        </div>
      </div>

      {/* Analytics Dashboard Charts */}
      <div className="col-span-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Failure Rate Trend Line Chart */}
        <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col">
          <div className="flex items-center gap-3 mb-8">
            <span className="material-symbols-outlined text-blue-500">timeline</span>
            <h3 className="text-xl font-bold font-['Manrope'] text-slate-900">AI Failure Trend</h3>
          </div>
          <div className="flex-1 min-h-[300px]">
            {stats.failureHistory && stats.failureHistory.length > 0 ? (
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={stats.failureHistory} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                  <Line type="monotone" dataKey="failureRate" stroke="#3b82f6" strokeWidth={3} dot={{ r: 4, fill: '#3b82f6', strokeWidth: 2, stroke: '#fff' }} activeDot={{ r: 6 }} />
                  <CartesianGrid stroke="#f1f5f9" vertical={false} />
                  <XAxis dataKey="name" tick={{ fill: '#94a3b8', fontSize: 12 }} tickLine={false} axisLine={false} />
                  <YAxis tick={{ fill: '#94a3b8', fontSize: 12 }} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}%`} />
                  <RechartsTooltip contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', background: 'rgba(255,255,255,0.8)', backdropFilter: 'blur(10px)' }} />
                </LineChart>
              </ResponsiveContainer>
            ) : (
              <div className="h-full flex items-center justify-center text-slate-400 font-medium">Generate questions to see failure trends.</div>
            )}
          </div>
        </div>

        {/* Topic Analysis Bar Chart */}
        <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col">
          <div className="flex items-center gap-3 mb-8">
            <span className="material-symbols-outlined text-emerald-500">bar_chart</span>
            <h3 className="text-xl font-bold font-['Manrope'] text-slate-900">Topic Analysis (Avg Failure %)</h3>
          </div>
          <div className="flex-1 min-h-[300px]">
             {stats.topicAnalysis && stats.topicAnalysis.length > 0 ? (
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={stats.topicAnalysis} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <CartesianGrid stroke="#f1f5f9" vertical={false} />
                    <XAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 12 }} tickLine={false} axisLine={false} />
                    <YAxis tick={{ fill: '#94a3b8', fontSize: 12 }} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}%`} />
                    <RechartsTooltip cursor={{ fill: '#f8fafc' }} contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', background: 'rgba(255,255,255,0.8)', backdropFilter: 'blur(10px)' }} />
                    <Bar dataKey="avgFailure" fill="#10b981" radius={[4, 4, 0, 0]} barSize={40} />
                  </BarChart>
                </ResponsiveContainer>
              ) : (
                <div className="h-full flex items-center justify-center text-slate-400 font-medium">Generate questions to analyze topics.</div>
              )}
          </div>
        </div>
      </div>
      </div>

      {/* System Status Bar */}
      <div className="fixed bottom-4 lg:bottom-8 left-4 lg:left-[calc(20rem+3rem)] right-4 lg:right-12 bg-white/90 backdrop-blur-xl border border-slate-200 rounded-2xl py-3 px-4 lg:px-6 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0 shadow-lg shadow-slate-200/50 z-20">
        <div className="flex flex-wrap justify-center items-center gap-4 lg:gap-6">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
            <span className="text-xs font-black uppercase tracking-widest text-slate-800">Core Engine 4.0.2</span>
          </div>
          <div className="h-4 w-px bg-slate-200"></div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-sm text-slate-400">cloud_done</span>
            <span className="text-xs font-medium text-slate-500">All exam nodes synced</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-xs text-slate-400 font-medium">Last backup: 14 mins ago</span>
          <button className="text-slate-900 text-xs font-black uppercase tracking-widest hover:underline">System Logs</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
