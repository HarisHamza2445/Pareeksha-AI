import React, { useState } from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';

const ExamCreator = () => {
  const [subject, setSubject] = useState('Indian Policy and Administration');
  const [difficulty, setDifficulty] = useState('Advanced');
  const [examType, setExamType] = useState('UPSC');
  const [mode, setMode] = useState('normal');

  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedData, setGeneratedData] = useState(null);
  const [displayedLogs, setDisplayedLogs] = useState([]);
  const [thinkingMessage, setThinkingMessage] = useState('Initializing Adversarial Engine...');
  const [isCopied, setIsCopied] = useState(false);
  const [error, setError] = useState(null);

  const thinkingMessages = [
    "Initializing Adversarial Engine...",
    "Synthesizing multi-step logic paths...",
    "Scanning for regional context gaps...",
    "Simulating Gemini solver red-team...",
    "Validating failure threshold (80%)...",
    "Finalizing AI-resistant question..."
  ];

  const handleGenerate = async () => {
    setIsGenerating(true);
    setGeneratedData(null);
    setDisplayedLogs([]);
    setError(null);

    let msgIndex = 0;
    const interval = setInterval(() => {
      msgIndex = (msgIndex + 1) % thinkingMessages.length;
      setThinkingMessage(thinkingMessages[msgIndex]);
    }, 1500);

    try {
      const response = await axios.post('/api/generate-question', {
        subject, examType, mode, difficulty
      });
      setGeneratedData(response.data);

      response.data.testAttemptsLogs.forEach((log, index) => {
        setTimeout(() => {
          setDisplayedLogs(prev => [...prev, log]);
        }, (index + 1) * 800);
      });

    } catch (err) {
      console.error(err);
      const serverError = err.response?.data?.error || err.message;
      setError(serverError);
    } finally {
      setIsGenerating(false);
      clearInterval(interval);
    }
  };

  const copyToClipboard = () => {
    if (!generatedData) return;
    navigator.clipboard.writeText(generatedData.question);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const steps = [
    { step: '01', icon: 'tune', title: 'Configure', desc: 'Set your subject, exam type, and difficulty level.' },
    { step: '02', icon: 'auto_awesome', title: 'Generate', desc: 'Gemini builds an adversarial question using regional context.' },
    { step: '03', icon: 'security', title: 'Red-Team', desc: 'AI tries to solve its own question — and fails.' },
  ];

  return (
    <div className="px-6 lg:px-12 w-full max-w-7xl mx-auto min-h-[calc(100vh-6rem)]">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-10">
        <div className="space-y-3">
          <div className="flex items-center gap-2.5 text-slate-900 font-bold text-xs tracking-[0.2em] uppercase">
            <span className="w-2.5 h-2.5 rounded-full bg-slate-900"></span>
            Adversarial Workspace
          </div>
          <h3 className="text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1] font-['Manrope']">AI Question Generator</h3>
          <p className="text-slate-500 max-w-2xl text-base lg:text-lg leading-relaxed font-medium">Design multi-layered questions that challenge conceptual understanding rather than rote memorization.</p>
        </div>
      </div>

      {/* 3-Step How It Works Guide */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {steps.map(({ step, icon, title, desc }) => (
          <div key={step} className="glass-card p-6 rounded-[1.5rem] flex items-start gap-4 border border-white/30">
            <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center shrink-0 shadow-lg">
              <span className="material-symbols-outlined text-lg">{icon}</span>
            </div>
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Step {step}</p>
              <h5 className="font-bold text-slate-900 text-sm mb-1">{title}</h5>
              <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Inline Error Card */}
      {error && (
        <div className="mb-6 flex items-start gap-4 bg-red-50 border border-red-100 rounded-2xl p-5">
          <span className="material-symbols-outlined text-red-400 mt-0.5">error</span>
          <div className="flex-1">
            <p className="font-bold text-red-700 text-sm mb-1">Generation Failed</p>
            <p className="text-xs text-red-500 font-medium leading-relaxed">{error}</p>
            {(error.includes('429') || error.includes('quota')) && (
              <p className="text-xs text-red-400 mt-2 font-bold">⚡ API quota reached. Please wait ~60 seconds before retrying.</p>
            )}
          </div>
          <button onClick={() => setError(null)} className="text-red-300 hover:text-red-500 transition-colors">
            <span className="material-symbols-outlined text-lg">close</span>
          </button>
        </div>
      )}

      <div className="grid grid-cols-12 gap-10">
        {/* Main Builder Area */}
        <div className="col-span-12 lg:col-span-8 space-y-10">

          {/* Form Panel */}
          <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100">
            <h4 className="font-bold text-slate-900 text-xl font-['Manrope'] mb-6">Configure Parameters</h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="space-y-2">
                <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Subject</label>
                <input
                  value={subject} onChange={(e) => setSubject(e.target.value)}
                  placeholder="e.g., Public Policy, Quantum Physics..."
                  className="w-full bg-slate-50 border border-slate-200 text-sm rounded-xl p-3.5 font-semibold focus:ring-2 focus:ring-slate-900 outline-none placeholder:text-slate-400 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Exam Type</label>
                <select value={examType} onChange={(e) => setExamType(e.target.value)} className="w-full bg-slate-50 border border-slate-200 text-sm rounded-xl p-3.5 font-semibold focus:ring-2 focus:ring-slate-900 outline-none cursor-pointer transition-all">
                  <option value="UPSC">UPSC</option>
                  <option value="JEE">JEE Advanced</option>
                  <option value="NEET">NEET</option>
                  <option value="University">University Finals</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Difficulty Focus</label>
                <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)} className="w-full bg-slate-50 border border-slate-200 text-sm rounded-xl p-3.5 font-semibold focus:ring-2 focus:ring-slate-900 outline-none cursor-pointer transition-all">
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced (Multi-step)</option>
                  <option value="Nightmare">AI-Proof Nightmare</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Context Mode</label>
                <select value={mode} onChange={(e) => setMode(e.target.value)} className="w-full bg-slate-50 border border-slate-200 text-sm rounded-xl p-3.5 font-semibold focus:ring-2 focus:ring-slate-900 outline-none cursor-pointer transition-all">
                  <option value="normal">Normal</option>
                  <option value="scenario">Scenario-Based (Decision Making)</option>
                  <option value="regional">Regional / Local Knowledge (India focus)</option>
                </select>
              </div>
            </div>

            <button
              onClick={handleGenerate}
              disabled={isGenerating || !subject}
              className="w-full py-4 bg-slate-900 text-white rounded-2xl font-bold shadow-xl shadow-slate-900/10 hover:bg-slate-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3">
              {isGenerating ? (
                <>
                  <span className="material-symbols-outlined animate-spin text-lg">sync</span>
                  <span className="animate-pulse">{thinkingMessage}</span>
                </>
              ) : (
                <>
                  <span className="material-symbols-outlined">auto_awesome</span>
                  Generate Adversarial Question
                </>
              )}
            </button>
          </div>

          {/* Generated Result Card */}
          {generatedData && (
            <div className="bg-white rounded-[2.5rem] p-6 lg:p-10 shadow-sm border border-slate-100 group relative">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                <div className="flex flex-wrap items-center gap-4">
                  <span className="bg-slate-100 text-slate-900 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">{examType} Level</span>
                  <div className="bg-emerald-50 text-emerald-700 px-4 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 border border-emerald-100 shadow-sm">
                    <span className="material-symbols-outlined text-[16px]">bolt</span>
                    FAILURE RATE: {generatedData.failureRate}%
                  </div>
                </div>
                <button
                  onClick={copyToClipboard}
                  className="flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl transition-all"
                >
                  <span className="material-symbols-outlined text-sm">{isCopied ? 'check' : 'content_copy'}</span>
                  {isCopied ? 'Copied!' : 'Copy Question'}
                </button>
              </div>

              <div className="space-y-8">
                <div className="bg-slate-50/50 p-8 rounded-3xl border border-slate-200">
                  <h5 className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-3">Question Prompt</h5>
                  <ReactMarkdown className="prose prose-slate prose-lg max-w-none font-medium text-slate-800 leading-relaxed whitespace-pre-wrap">
                    {generatedData.question}
                  </ReactMarkdown>
                </div>

                <div className="bg-blue-50/50 p-6 rounded-3xl border border-blue-100 shadow-sm">
                  <h5 className="text-[11px] font-black text-blue-400 uppercase tracking-widest mb-3">Ideal Answer (Human Verification)</h5>
                  <ReactMarkdown className="prose prose-blue prose-sm max-w-none font-medium text-blue-900 leading-relaxed whitespace-pre-wrap">
                    {generatedData.idealAnswer}
                  </ReactMarkdown>
                </div>

                <div className="flex flex-wrap gap-2">
                  {generatedData.tags?.map((tag, idx) => (
                    <span key={idx} className="px-3 py-1 bg-slate-100 rounded-lg text-xs font-bold text-slate-500 uppercase tracking-wider">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Right Sidebar */}
        <div className="col-span-12 lg:col-span-4 space-y-8">
          {generatedData && (
            <div className="bg-slate-900 p-10 rounded-[2.5rem] shadow-xl shadow-slate-900/10 text-white">
              <h4 className="font-bold text-lg mb-6 font-['Manrope']">Difficulty Justification</h4>
              <p className="text-sm font-medium leading-relaxed text-slate-300">{generatedData.difficultyJustification}</p>
            </div>
          )}

          {/* AI vs AI Test Logs */}
          <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100">
            <h4 className="font-bold text-slate-900 text-lg mb-6 font-['Manrope'] flex items-center justify-between">
              Red-Team Evaluation
              <span className="material-symbols-outlined text-slate-400">psychology</span>
            </h4>

            {generatedData ? (
              <div className="space-y-4">
                {displayedLogs.map((log, index) => (
                  <div key={index} className={`p-4 rounded-2xl border ${log.passed ? 'bg-emerald-50 border-emerald-100' : 'bg-red-50 border-red-100'}`}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Attempt {log.attemptIndex}</span>
                      <span className={`text-xs font-bold px-2 py-0.5 rounded ${log.passed ? 'bg-emerald-200 text-emerald-800' : 'bg-red-200 text-red-800'}`}>
                        {log.passed ? 'PASSED' : 'FAILED'} (Score: {log.score})
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 line-clamp-3 mb-2">{log.attemptText}</p>
                    <p className="text-[10px] font-semibold italic text-slate-500 border-t border-slate-200/50 pt-2 max-h-12 overflow-y-auto">{log.evaluatorNotes}</p>
                  </div>
                ))}
                {displayedLogs.length < 2 && (
                  <div className="flex items-center justify-center p-4 bg-slate-50 rounded-2xl border border-dashed border-slate-200 animate-pulse">
                    <span className="text-xs font-bold text-slate-400">Awaiting Red-Team iteration {displayedLogs.length + 1}...</span>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-10 opacity-50 px-4 text-center">
                <span className="material-symbols-outlined text-4xl mb-4">hourglass_empty</span>
                <p className="text-sm font-medium text-slate-500">Generate a question to view<br/>real-time AI failure logs.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamCreator;
