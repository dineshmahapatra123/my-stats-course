import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { curriculum } from '../data/curriculum';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ArrowLeft, BrainCircuit, BookOpen, Copy, Check, Target,
    BarChart2, FileText, Zap, ChevronRight
} from 'lucide-react';

const Tabs = ({ activeTab, setActiveTab }) => {
    const tabs = [
        { id: 'lesson', label: 'Lesson & Concept', icon: BookOpen },
        { id: 'case_study', label: 'Case Study', icon: BarChart2 },
        { id: 'resources', label: 'Reading List', icon: FileText },
        { id: 'action', label: 'Action & AI', icon: Zap },
    ];

    return (
        <div className="flex items-center gap-8 border-b border-slate-200 mb-8 sticky top-0 bg-[var(--main-bg)] z-10 pt-4">
            {tabs.map(tab => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex items-center gap-2 pb-4 text-sm font-semibold transition-all relative ${isActive ? 'text-[var(--brand-primary)]' : 'text-slate-500 hover:text-slate-700'
                            }`}
                    >
                        <Icon size={18} />
                        {tab.label}
                        {isActive && (
                            <motion.div
                                layoutId="activeTab"
                                className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--brand-primary)]"
                            />
                        )}
                    </button>
                );
            })}
        </div>
    );
};

const DayView = () => {
    const { dayId } = useParams();
    const dayNum = parseInt(dayId, 10);
    const day = curriculum.find(d => d.day === dayNum);
    const [activeTab, setActiveTab] = useState('lesson');
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [dayId]);

    if (!day) return <div className="p-10">Day not found</div>;

    const handleCopy = () => {
        navigator.clipboard.writeText(day.ai_prompt);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="max-w-5xl mx-auto px-8 py-10">

            {/* Top Nav Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-slate-500 mb-8 hover:text-slate-800 transition-colors">
                <Link to="/" className="flex items-center gap-1">
                    <ArrowLeft size={16} /> Back to Map
                </Link>
            </div>

            {/* Header Area */}
            <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 font-bold text-xs uppercase tracking-wider border border-slate-200">
                        Day {day.day}
                    </span>
                    <span className="text-slate-400 text-xs font-bold uppercase tracking-wider flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-slate-400"></span>
                        {day.phase}
                    </span>
                </div>

                <h1 className="mb-4">{day.title}</h1>

                <div className="flex items-start gap-3 text-slate-600 bg-blue-50/50 p-4 rounded-xl border border-blue-100">
                    <Target className="text-[var(--brand-primary)] shrink-0 mt-0.5" size={20} />
                    <p className="font-medium text-[var(--brand-primary)]">
                        Goal: <span className="text-slate-700 font-normal">{day.summary}</span>
                    </p>
                </div>
            </div>

            {/* Tab Nav */}
            <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

            {/* Content Area */}
            <div className="min-h-[400px]">
                <AnimatePresence mode="wait">

                    {/* LESSON TAB */}
                    {activeTab === 'lesson' && (
                        <motion.div
                            key="lesson"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="space-y-8"
                        >
                            <div className="prose prose-slate max-w-none">
                                <p className="text-lg text-slate-600 leading-relaxed mb-6">{day.hook || day.summary}</p>
                                {/* Fallback content filler since JSON is summary-only for many days */}
                                <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                                    <h3 className="text-xl font-bold mb-4 text-slate-800">Key Concepts</h3>
                                    <div dangerouslySetInnerHTML={{ __html: day.content || `<p>The core concept of <strong>${day.title}</strong> is essential for mastering ${day.phase}. Use the AI Tutor to generate a deep-dive lesson.</p>` }} />
                                </div>
                            </div>

                            {day.mental_model && (
                                <div className="flex gap-4 p-6 bg-amber-50 rounded-2xl border border-amber-100 items-start">
                                    <div className="p-2 bg-amber-100 rounded-lg text-amber-600 shrink-0">
                                        <BrainCircuit size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-amber-900 mb-1">Mental Model</h4>
                                        <p className="text-amber-800/80">{day.mental_model}</p>
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    )}

                    {/* CASE STUDY TAB */}
                    {activeTab === 'case_study' && (
                        <motion.div
                            key="case"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                        >
                            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                                <div className="p-8 border-b border-slate-100">
                                    <h3 className="text-xl font-bold mb-2">Real World Application</h3>
                                    <p className="text-slate-500">How is this concept applied in top tech companies?</p>
                                </div>
                                <div className="p-8 bg-slate-50/50">
                                    {/* Placeholder for chart/viz */}
                                    <div className="bg-white border border-slate-200 rounded-xl p-6 flex flex-col items-center justify-center text-center h-64 mb-6">
                                        <BarChart2 size={48} className="text-slate-300 mb-4" />
                                        <h4 className="font-bold text-slate-700">Visualization Concept</h4>
                                        <p className="text-slate-500 text-sm max-w-md mx-auto mt-2">
                                            Imagine a dataset representing {day.title}. The chart would reveal patterns invisible to the naked eye.
                                        </p>
                                    </div>

                                    {day.example ? (
                                        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                                            <h4 className="font-bold text-blue-900 mb-2">Example Scenario</h4>
                                            <p className="text-blue-800">{day.example.description || "See the data pattern above."}</p>
                                        </div>
                                    ) : (
                                        <p className="text-center text-slate-400 italic">No specific case study loaded for this day.</p>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {/* READING LIST TAB (Matched to Screenshot) */}
                    {activeTab === 'resources' && (
                        <motion.div
                            key="resources"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="space-y-4"
                        >
                            <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all group cursor-pointer flex gap-4 items-start">
                                <div className="p-3 bg-slate-100 rounded-lg group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                                    <BookOpen size={24} />
                                </div>
                                <div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="px-2 py-0.5 rounded text-[10px] uppercase font-bold bg-blue-100 text-blue-700">Article</span>
                                        <span className="text-xs text-slate-400">5 min read</span>
                                    </div>
                                    <h3 className="font-bold text-lg text-slate-800 mb-1 group-hover:text-blue-700">Understanding {day.title} in Depth</h3>
                                    <p className="text-slate-500 text-sm">A comprehensive guide to mastering the fundamentals and nuance of this topic.</p>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all group cursor-pointer flex gap-4 items-start">
                                <div className="p-3 bg-slate-100 rounded-lg group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                                    <BarChart2 size={24} />
                                </div>
                                <div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="px-2 py-0.5 rounded text-[10px] uppercase font-bold bg-purple-100 text-purple-700">Case Study</span>
                                    </div>
                                    <h3 className="font-bold text-lg text-slate-800 mb-1 group-hover:text-blue-700">How Netflix Uses {day.title}</h3>
                                    <p className="text-slate-500 text-sm">See how big tech applies this statistical principle at scale.</p>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {/* ACTION & AI TAB */}
                    {activeTab === 'action' && (
                        <motion.div
                            key="action"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                        >
                            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-8 mb-8 relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-12 bg-white/5 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2"></div>

                                <div className="flex justify-between items-start mb-6">
                                    <div>
                                        <h3 className="text-2xl font-bold mb-2">AI Personal Tutor</h3>
                                        <p className="text-slate-400 max-w-lg">Copy this prompt into ChatGPT to generate a personalized lesson, quiz, and code example.</p>
                                    </div>
                                    <button
                                        onClick={handleCopy}
                                        className="bg-white/10 hover:bg-white/20 border border-white/10 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors font-semibold"
                                    >
                                        {copied ? <Check size={18} /> : <Copy size={18} />}
                                        {copied ? 'Copied' : 'Copy Prompt'}
                                    </button>
                                </div>

                                <div className="bg-black/30 p-6 rounded-xl font-mono text-sm text-blue-200 border border-white/5">
                                    {day.ai_prompt}
                                </div>
                            </div>

                            {day.homework && (
                                <div className="bg-white border-l-4 border-green-500 shadow-sm p-6 rounded-r-xl">
                                    <h4 className="font-bold text-slate-800 flex items-center gap-2 mb-2">
                                        <CheckCircle className="text-green-500" size={20} /> Today's Action Item
                                    </h4>
                                    <p className="text-slate-600">{day.homework || "Complete the AI quiz and review your notes."}</p>
                                </div>
                            )}
                        </motion.div>
                    )}

                </AnimatePresence>
            </div>

        </div>
    );
};

function CheckCircle({ className, size }) {
    return (
        <svg
            className={className}
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
    );
}

export default DayView;
