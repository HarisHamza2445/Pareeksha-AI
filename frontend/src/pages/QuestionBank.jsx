import React, { useState, useEffect } from 'react';
import axios from 'axios';

const QuestionBank = () => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get('/api/questions');
        setQuestions(response.data);
      } catch (error) {
        console.error("Error fetching questions:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchQuestions();
  }, []);

  return (
    <div className="p-6 lg:p-12 w-full max-w-7xl mx-auto min-h-[calc(100vh-6rem)]">

      {/* Hero Header */}
      <div className="glass-card rounded-[2.5rem] p-10 mb-8 border border-white/30 relative overflow-hidden">
        <div className="absolute -right-16 -top-16 w-64 h-64 bg-gradient-to-br from-blue-100/30 to-transparent rounded-full blur-3xl pointer-events-none"></div>
        <div className="relative z-10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 lg:gap-0">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-slate-100 border border-slate-200/60 text-slate-600 px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest">Verified Vault</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 mb-3 font-['Manrope'] leading-none">Question Bank</h2>
            <p className="text-slate-500 text-base lg:text-lg font-medium">
              Secure repository of AI-resistant evaluation units. Each question has been red-teamed and certified.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <button className="px-6 py-3.5 bg-white border border-slate-200 text-slate-700 rounded-2xl font-bold flex items-center gap-2 hover:bg-slate-50 transition-all shadow-sm">
              <span className="material-symbols-outlined text-lg">filter_list</span>
              Filter
            </button>
            <button className="px-6 py-3.5 bg-slate-900 text-white rounded-2xl font-bold flex items-center gap-2 shadow-xl hover:bg-slate-800 transition-all">
              <span className="material-symbols-outlined text-lg">upload</span>
              Import CSV
            </button>
          </div>
        </div>
      </div>


      {/* Bento Filter Bar */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-10">
        <div className="md:col-span-1 p-5 bg-white rounded-xl flex items-center gap-4 border border-slate-100 shadow-sm">
          <div className="p-2 bg-emerald-50 rounded-lg text-emerald-600">
            <span className="material-symbols-outlined">psychology</span>
          </div>
          <div className="w-full">
            <p className="text-xs font-label uppercase tracking-widest text-slate-400">Difficulty</p>
            <select className="w-full bg-transparent border-none p-0 font-bold text-slate-900 focus:ring-0 text-sm outline-none cursor-pointer">
              <option>All Levels</option>
              <option>Foundational</option>
              <option>Intermediate</option>
              <option>Advanced Expert</option>
            </select>
          </div>
        </div>

        <div className="md:col-span-1 p-5 bg-white rounded-xl flex items-center gap-4 border border-slate-100 shadow-sm">
          <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
            <span className="material-symbols-outlined">category</span>
          </div>
          <div className="w-full">
            <p className="text-xs font-label uppercase tracking-widest text-slate-400">Topic</p>
            <select className="w-full bg-transparent border-none p-0 font-bold text-slate-900 focus:ring-0 text-sm outline-none cursor-pointer">
              <option>All Topics</option>
              <option>Public Policy</option>
              <option>Constitutional Law</option>
              <option>Ancient History</option>
              <option>Physics & Thermodynamics</option>
            </select>
          </div>
        </div>

        <div className="md:col-span-2 p-5 bg-white rounded-xl flex items-center justify-between border border-slate-100 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-amber-50 rounded-lg text-amber-600">
              <span className="material-symbols-outlined">verified_user</span>
            </div>
            <div>
              <p className="text-xs font-label uppercase tracking-widest text-slate-400">Integrity Threshold</p>
              <p className="font-bold text-sm text-slate-900">Min. 85% AI-Proof</p>
            </div>
          </div>
          <div className="w-48 h-2 bg-slate-100 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-slate-800 to-slate-900" style={{ width: '85%' }}></div>
          </div>
        </div>
      </div>

      {/* Question Grid */}
      <div className="grid grid-cols-1 gap-6">
        {loading ? (
          <div className="text-center py-20 text-slate-500 font-bold animate-pulse">Loading secure vault...</div>
        ) : questions.length === 0 ? (
          <div className="text-center py-20 text-slate-500 font-bold">No adversarial questions logged yet. Go to Exam Creator to generate some!</div>
        ) : (
          questions.map((q) => (
            <div key={q._id} className="group bg-white p-6 md:p-8 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/50 border border-slate-100 flex flex-col md:flex-row gap-6 md:gap-8">
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-4">
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded-full flex items-center gap-1.5 shadow-sm">
                    <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
                    {q.examType || "AI-Generated"}
                  </span>
                  <span className="text-xs font-label text-slate-400">Subject: {q.subject}</span>
                  <span className="mx-0 md:mx-2 text-slate-300 hidden md:inline">|</span>
                  <span className="text-xs font-label text-slate-400">Added {new Date(q.createdAt).toLocaleDateString()}</span>
                </div>
                <h3 className="text-xl font-headline font-semibold text-slate-900 mb-3 leading-snug">
                  {q.questionText}
                </h3>
                <p className="text-sm text-slate-500 mb-6 line-clamp-2 leading-relaxed">
                  {q.difficultyJustification}
                </p>
                <div className="flex flex-wrap gap-2">
                  {q.tags?.map((tag, idx) => (
                    <span key={idx} className="px-3 py-1 bg-slate-50 rounded-lg text-[11px] font-bold text-slate-500 uppercase tracking-wider">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="md:w-64 flex flex-col justify-between items-start md:items-end border-l-0 md:border-l border-slate-100 md:pl-8 border-t md:border-t-0 pt-4 md:pt-0">
                <div className="text-left md:text-right w-full">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">AI-Resistance Score</p>
                  <div className={`text-3xl font-headline font-bold ${q.failureRate >= 90 ? 'text-emerald-600' : 'text-amber-500'}`}>
                    {q.failureRate}%
                  </div>
                  <div className="w-full h-1.5 bg-slate-100 rounded-full mt-2 overflow-hidden w-24 ml-0 md:ml-auto">
                    <div className={`h-full ${q.failureRate >= 90 ? 'bg-emerald-500' : 'bg-amber-400'}`} style={{ width: `${q.failureRate}%` }}></div>
                  </div>
                </div>
                <div className="flex gap-2 mt-4 md:mt-6 w-full md:w-auto justify-start md:justify-end">
                  <button className="p-2 text-slate-400 hover:bg-slate-50 hover:text-slate-900 rounded-lg transition-colors">
                    <span className="material-symbols-outlined">edit</span>
                  </button>
                  <button className="p-2 text-slate-400 hover:bg-slate-50 hover:text-slate-900 rounded-lg transition-colors">
                    <span className="material-symbols-outlined">content_copy</span>
                  </button>
                  <button className="p-2 text-red-400 hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors">
                    <span className="material-symbols-outlined">delete</span>
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Pagination */}
      <div className="mt-12 flex justify-between items-center bg-white border border-slate-100 p-5 rounded-xl shadow-sm">
        <span className="text-sm font-bold text-slate-500">Showing {questions.length} questions</span>
        <div className="flex items-center gap-2">
          <button className="p-2 text-slate-400 hover:bg-slate-50 hover:text-slate-900 rounded-lg transition-colors"><span className="material-symbols-outlined">chevron_left</span></button>
          <button className="w-9 h-9 flex items-center justify-center bg-slate-900 text-white rounded-lg text-sm font-bold shadow-sm hover:bg-slate-800 transition-colors">1</button>
          <button className="p-2 text-slate-400 hover:bg-slate-50 hover:text-slate-900 rounded-lg transition-colors"><span className="material-symbols-outlined">chevron_right</span></button>
        </div>
      </div>


    </div>
  );
};

export default QuestionBank;
