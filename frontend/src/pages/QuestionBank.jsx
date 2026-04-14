import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';

const QuestionBank = () => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterSubject, setFilterSubject] = useState('All Subjects');
  const [filterType, setFilterType] = useState('All Types');

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

  const subjects = ['All Subjects', ...new Set(questions.map(q => q.subject))];
  const types = ['All Types', 'UPSC', 'JEE', 'NEET', 'University'];

  const filteredQuestions = questions.filter(q => {
    const matchesSearch = q.questionText.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSubject = filterSubject === 'All Subjects' || q.subject === filterSubject;
    const matchesType = filterType === 'All Types' || q.examType === filterType;
    return matchesSearch && matchesSubject && matchesType;
  });

  return (
    <div className="p-4 lg:p-12 min-h-[calc(100vh-6rem)]">
      {/* Header Area */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-10 animate-in">
        <div className="space-y-2 lg:space-y-3">
          <div className="flex items-center gap-2.5 text-slate-900 font-bold text-[10px] lg:text-xs tracking-[0.2em] uppercase">
            <span className="w-2 h-2 lg:w-2.5 lg:h-2.5 rounded-full bg-slate-900"></span>
            Verified Vault
          </div>
          <h3 className="text-3xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1] font-['Manrope']">Question Bank</h3>
          <p className="text-slate-500 max-w-2xl text-sm lg:text-lg leading-relaxed font-medium">Your curated repository of AI-resistant adversarial questions.</p>
        </div>
        <div className="flex items-center gap-4 w-full md:w-auto">
          <button className="flex-1 md:flex-none py-3 px-6 bg-slate-900 text-white rounded-xl lg:rounded-2xl font-bold flex items-center justify-center gap-2 shadow-xl shadow-slate-900/10 hover:bg-slate-800 transition-all active:scale-95">
            <span className="material-symbols-outlined text-xl">download</span>
            Export JSON
          </button>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="glass-card p-4 lg:p-6 rounded-[1.5rem] lg:rounded-[2rem] border border-white/30 mb-8 lg:mb-10 animate-in delay-100 shadow-sm shadow-slate-200/50">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="relative group">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg group-focus-within:text-slate-900 transition-colors">search</span>
            <input 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white/50 border border-slate-200/60 rounded-xl py-3 pl-11 pr-4 text-xs font-semibold focus:ring-2 focus:ring-slate-900/5 transition-all outline-none" 
              placeholder="Search concepts..." 
            />
          </div>
          <select 
            value={filterSubject}
            onChange={(e) => setFilterSubject(e.target.value)}
            className="bg-white/50 border border-slate-200/60 rounded-xl py-3 px-4 text-xs font-semibold focus:ring-2 focus:ring-slate-900/5 outline-none cursor-pointer"
          >
            {subjects.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
          <select 
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="bg-white/50 border border-slate-200/60 rounded-xl py-3 px-4 text-xs font-semibold focus:ring-2 focus:ring-slate-900/5 outline-none cursor-pointer"
          >
            {types.map(t => <option key={t} value={t}>{t}</option>)}
          </select>
          <div className="flex items-center justify-between px-4 py-3 bg-white/50 border border-slate-200/60 rounded-xl">
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">Sort By</span>
            <span className="text-xs font-bold text-slate-900 leading-none">Recent First</span>
          </div>
        </div>
      </div>

      {/* Repository List */}
      <div className="space-y-4 pb-20 sm:pb-0">
        {loading ? (
          <div className="grid grid-cols-1 gap-4">
            {[1, 2, 3].map(i => (
              <div key={i} className="h-40 bg-white/50 animate-pulse rounded-[2rem] border border-slate-100"></div>
            ))}
          </div>
        ) : filteredQuestions.length > 0 ? filteredQuestions.map((q, idx) => (
          <div 
            key={q._id} 
            className={`glass-card p-6 lg:p-8 rounded-[2rem] border border-white/40 shadow-sm glass-card-hover animate-in`}
            style={{ animationDelay: `${(idx % 5) * 100 + 200}ms` }}
          >
            <div className="flex flex-col lg:flex-row justify-between items-start gap-6">
              <div className="flex-1 space-y-4 w-full overflow-hidden">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="bg-slate-100 text-slate-900 px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider">{q.examType}</span>
                  <span className="bg-emerald-50 text-emerald-700 px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider border border-emerald-100">Failure: {q.failureRate}%</span>
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest ml-auto lg:ml-2">ID: {q._id.slice(-6)}</span>
                </div>
                
                <div className="prose prose-slate prose-sm lg:prose-lg max-w-none text-slate-900 font-bold leading-tight">
                  <ReactMarkdown>{q.questionText}</ReactMarkdown>
                </div>

                <div className="p-4 rounded-xl bg-slate-50/50 border border-slate-100">
                  <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest mb-1.5">Knowledge Tags</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-0.5 bg-white border border-slate-200 rounded text-[9px] font-bold text-slate-500 uppercase tracking-wide">{q.subject}</span>
                    <span className="px-2 py-0.5 bg-white border border-slate-200 rounded text-[9px] font-bold text-slate-500 uppercase tracking-wide">{q.difficulty}</span>
                    {q.tags?.map((tag, i) => (
                      <span key={i} className="px-2 py-0.5 bg-white border border-slate-200 rounded text-[9px] font-bold text-slate-500 uppercase tracking-wide">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex lg:flex-col items-center lg:items-end justify-between lg:justify-start w-full lg:w-32 gap-4 lg:gap-8 bg-slate-50 lg:bg-transparent p-4 lg:p-0 rounded-2xl">
                <div className="text-left lg:text-right">
                  <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest mb-1">Created</p>
                  <p className="text-sm font-bold text-slate-900">{new Date(q.createdAt).toLocaleDateString()}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button className="w-10 h-10 bg-white lg:bg-slate-900 text-slate-900 lg:text-white rounded-xl shadow-lg lg:shadow-xl shadow-slate-900/10 hover:scale-110 transition-all active:scale-95 flex items-center justify-center">
                    <span className="material-symbols-outlined text-lg font-variation-settings-fill">share</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )) : (
          <div className="glass-card rounded-[2rem] p-20 text-center animate-in">
            <span className="material-symbols-outlined text-6xl text-slate-200 mb-4">database_off</span>
            <p className="text-slate-400 font-medium">No questions follow the active sync filters.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuestionBank;
