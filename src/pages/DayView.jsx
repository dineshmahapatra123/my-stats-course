import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { curriculum } from '../data/curriculum';
import { AnimatePresence, motion } from 'framer-motion'; // eslint-disable-line no-unused-vars
import {
    ArrowLeft, ChevronRight, ChevronLeft,
    BookOpen, Zap, Compass, Copy, Check, Terminal,
    Lightbulb
} from 'lucide-react';

const DayView = () => {
    const { dayId } = useParams();
    const navigate = useNavigate();
    const dayNum = parseInt(dayId, 10);
    const day = curriculum.find(d => d.day === dayNum);
    const [hasNext, hasPrev] = [dayNum < curriculum.length, dayNum > 1];

    const [copied, setCopied] = useState(false);
    const [isCompleted, setCompleted] = useState(() => {
        return !!localStorage.getItem(`day-${dayNum}-completed`);
    });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [dayId]);

    const toggleComplete = () => {
        if (isCompleted) {
            localStorage.removeItem(`day-${dayNum}-completed`);
            setCompleted(false);
        } else {
            localStorage.setItem(`day-${dayNum}-completed`, 'true');
            setCompleted(true);
        }
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(day.ai_prompt);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    if (!day) return <div className="p-10 text-center text-slate-500">Day not found</div>;

    return (
        <div className="pb-32"> {/* Content padding for footer */}

            {/* Top Navigation Bar */}
            <div className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-slate-200 px-6 py-4 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-slate-900 transition-colors">
                    <ArrowLeft size={16} /> Back to Dashboard
                </Link>
                <div className="flex gap-2">
                    <button
                        onClick={() => hasPrev && navigate(`/day/${dayNum - 1}`)}
                        disabled={!hasPrev}
                        className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:border-slate-300 hover:text-slate-600 disabled:opacity-30 disabled:cursor-not-allowed transition-all bg-white"
                        title="Previous Lesson"
                    >
                        <ChevronLeft size={16} />
                    </button>
                    <button
                        onClick={() => hasNext && navigate(`/day/${dayNum + 1}`)}
                        disabled={!hasNext}
                        className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:border-slate-300 hover:text-slate-600 disabled:opacity-30 disabled:cursor-not-allowed transition-all bg-white"
                        title="Next Lesson"
                    >
                        <ChevronRight size={16} />
                    </button>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-6 py-10">

                {/* Hero Title Area */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-12"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider mb-6 border border-blue-100">
                        Day {day.day} • {day.phase}
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight tracking-tight">
                        {day.title}
                    </h1>
                    <p className="text-xl text-slate-500 leading-relaxed font-light">
                        {day.summary}
                    </p>
                </motion.div>

                {/* Main Content Layout */}
                <div className="space-y-10">

                    {/* AI Prompt Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 }}
                        className="bg-slate-900 rounded-2xl p-6 md:p-8 text-white relative overflow-hidden shadow-2xl shadow-blue-900/10 border border-slate-800"
                    >
                        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 opacity-10 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

                        <div className="relative z-10">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-white/10 rounded-xl backdrop-blur-md border border-white/10">
                                        <Terminal className="text-blue-300" size={24} />
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-bold text-white">AI Tutor Protocol</h2>
                                        <p className="text-slate-400 text-sm">Run this prompt to start your interactive lesson.</p>
                                    </div>
                                </div>

                                <button
                                    onClick={handleCopy}
                                    className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all shadow-lg active:scale-95 text-sm"
                                >
                                    {copied ? <Check size={16} /> : <Copy size={16} />}
                                    {copied ? "Copied to Clipboard" : "Copy Prompt"}
                                </button>
                            </div>

                            <div className="bg-black/50 rounded-xl p-5 font-mono text-sm leading-relaxed text-blue-100 border border-white/5 shadow-inner">
                                <span className="text-slate-500 select-none mr-3">$</span>
                                {day.ai_prompt}
                                <span className="animate-pulse inline-block w-2 h-4 bg-blue-500 ml-1 align-middle"></span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Lesson Content */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="bg-white rounded-2xl p-8 md:p-12 border border-slate-100 shadow-sm"
                    >
                        {/* Icon Marker */}
                        <div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center mb-6">
                            <BookOpen size={24} />
                        </div>

                        <div className="prose prose-slate prose-lg max-w-none">
                            {day.content ? (
                                <div dangerouslySetInnerHTML={{ __html: day.content }} />
                            ) : (
                                <>
                                    <h3>Concept Deep Dive</h3>
                                    <p>
                                        To truly master <strong>{day.title}</strong>, we use a Socratic method. The AI prompt above is designed to act as a Professor, not just an encyclopedia.
                                    </p>
                                    <p>
                                        Engage with the prompt. Ask follow-up questions from the perspective of a skeptic.
                                    </p>

                                    <div className="not-prose my-8 p-6 bg-slate-50 rounded-xl border border-slate-100 flex gap-4">
                                        <div className="shrink-0 mt-1">
                                            <Lightbulb className="text-amber-500" size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1">Key Insight</h4>
                                            <p className="text-slate-600 text-base m-0">
                                                {day.summary} Focus on understanding the *why* before the *how*.
                                            </p>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </motion.div>

                </div>
            </div>

            {/* Sticky Bottom Footer */}
            <div className="fixed bottom-0 left-0 md:left-[var(--sidebar-width)] right-0 p-6 bg-white/90 backdrop-blur-xl border-t border-slate-200 z-40">
                <div className="max-w-4xl mx-auto flex items-center justify-between">
                    <div className="hidden md:flex flex-col">
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Status</span>
                        <span className={`text-sm font-semibold ${isCompleted ? 'text-green-600' : 'text-slate-600'}`}>
                            {isCompleted ? "✅ Lesson Completed" : "In Progress"}
                        </span>
                    </div>

                    <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end">
                        <button
                            onClick={toggleComplete}
                            className={`flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold transition-all border ${isCompleted
                                ? 'bg-green-50 border-green-200 text-green-700 hover:bg-green-100'
                                : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50 hover:border-slate-300'
                                }`}
                        >
                            <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${isCompleted ? 'border-green-600 bg-green-600 text-white' : 'border-slate-300'}`}>
                                {isCompleted && <Check size={12} strokeWidth={3} />}
                            </div>
                            {isCompleted ? "Completed" : "Mark Complete"}
                        </button>

                        {hasNext && (
                            <button
                                onClick={() => navigate(`/day/${dayNum + 1}`)}
                                className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold bg-slate-900 text-white hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/20 active:scale-95"
                            >
                                Next Lesson <ChevronRight size={18} />
                            </button>
                        )}
                        {!hasNext && isCompleted && (
                            <div className="px-5 py-3 font-bold text-blue-600">🎉 Course Finished!</div>
                        )}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default DayView;
