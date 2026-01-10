import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { curriculum } from '../data/curriculum';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ArrowLeft, ChevronRight, ChevronLeft,
    BookOpen, Zap, Compass, Copy, Check, CheckCircle2,
    Terminal
} from 'lucide-react';

const DayView = () => {
    const { dayId } = useParams();
    const navigate = useNavigate();
    const dayNum = parseInt(dayId, 10);
    const day = curriculum.find(d => d.day === dayNum);
    const [copied, setCopied] = useState(false);
    const [isCompleted, setCompleted] = useState(false);

    // Navigation Logic
    const hasNext = dayNum < curriculum.length;
    const hasPrev = dayNum > 1;

    useEffect(() => {
        window.scrollTo(0, 0);
        const done = localStorage.getItem(`day-${dayNum}-completed`);
        if (done) setCompleted(true);
        else setCompleted(false);
    }, [dayId, dayNum]);

    const toggleComplete = () => {
        if (isCompleted) {
            localStorage.removeItem(`day-${dayNum}-completed`);
            setCompleted(false);
        } else {
            localStorage.setItem(`day-${dayNum}-completed`, 'true');
            setCompleted(true);
            // Optional: Auto-advance could be added here
        }
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(day.ai_prompt);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    if (!day) return <div className="p-10">Day not found</div>;

    return (
        <div className="max-w-4xl mx-auto px-6 py-10 pb-32"> {/* Added heavy padding bottom for sticky footer */}

            {/* 1. Header Navigation */}
            <div className="flex items-center justify-between mb-8">
                <Link to="/" className="flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-[var(--brand-primary)] transition-colors">
                    <ArrowLeft size={16} /> Dashboard
                </Link>
                <div className="flex gap-2">
                    <button
                        onClick={() => hasPrev && navigate(`/day/${dayNum - 1}`)}
                        disabled={!hasPrev}
                        className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:border-slate-300 hover:text-slate-600 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                    >
                        <ChevronLeft size={16} />
                    </button>
                    <button
                        onClick={() => hasNext && navigate(`/day/${dayNum + 1}`)}
                        disabled={!hasNext}
                        className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:border-slate-300 hover:text-slate-600 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                    >
                        <ChevronRight size={16} />
                    </button>
                </div>
            </div>

            {/* 2. Hero Title Area */}
            <div className="mb-12 text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-500 text-xs font-bold uppercase tracking-wider mb-4 border border-slate-200">
                    Day {day.day} • {day.phase}
                </div>
                <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                    {day.title}
                </h1>
                <p className="text-xl text-slate-500 max-w-2xl mx-auto font-light leading-relaxed">
                    {day.summary}
                </p>
            </div>

            {/* 3. The "Cards" Layout - Very clean, distinct blocks */}
            <div className="space-y-8">

                {/* AI Action Card (Primary Learning Tool) */}
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 md:p-10 text-white relative overflow-hidden shadow-2xl shadow-slate-200">
                    {/* Decorative blurs */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--brand-primary)] opacity-20 blur-[80px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

                    <div className="relative z-10">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm border border-white/10">
                                    <Terminal className="text-[var(--brand-light)]" size={24} />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold">AI Tutor Protocol</h2>
                                    <p className="text-slate-400 text-sm">Run this prompt to start your interactive lesson.</p>
                                </div>
                            </div>

                            <button
                                onClick={handleCopy}
                                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-[var(--brand-primary)] hover:bg-teal-500 text-white font-bold transition-all shadow-lg shadow-teal-900/20 active:scale-95"
                            >
                                {copied ? <Check size={18} /> : <Copy size={18} />}
                                {copied ? "Copied!" : "Copy Prompt"}
                            </button>
                        </div>

                        <div className="bg-black/30 rounded-2xl p-6 font-mono text-sm leading-relaxed text-blue-100 border border-white/5 shadow-inner">
                            <span className="text-slate-500 mr-2">$</span>
                            {day.ai_prompt}
                            <span className="animate-pulse inline-block w-2 H-4 bg-blue-400 ml-1 align-middle"></span>
                        </div>
                    </div>
                </div>

                {/* Content Card */}
                <div className="bg-white rounded-3xl p-8 md:p-10 border border-slate-100 shadow-sm relative">
                    <div className="absolute top-0 left-8 -translate-y-1/2 bg-[var(--brand-light)] text-[var(--brand-primary)] p-3 rounded-xl border border-white shadow-sm">
                        <BookOpen size={24} />
                    </div>

                    <div className="mt-4 prose prose-slate max-w-none prose-lg">
                        {day.content ? <div dangerouslySetInnerHTML={{ __html: day.content }} /> : (
                            <div className="space-y-4">
                                <h3 className="text-2xl font-bold text-slate-800">Concept Overview</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    To truly master <strong>{day.title}</strong>, we use a Socratic method. The AI prompt above is designed to act as a Professor, not just an encyclopedia.
                                </p>
                                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                                    <h4 className="flex items-center gap-2 font-bold text-slate-800 mb-2">
                                        <Compass size={20} className="text-rose-500" /> Key Takeaway
                                    </h4>
                                    <p className="text-slate-600 m-0">
                                        {day.summary} Focus on understanding the *why* before the *how*.
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

            </div>

            {/* 4. Sticky Bottom Navigation Bar */}
            <div className="fixed bottom-0 left-[var(--sidebar-width)] right-0 p-4 bg-white/80 backdrop-blur-lg border-t border-slate-100 flex items-center justify-between z-40 px-8">
                <div className="text-sm text-slate-400 hidden md:block">
                    {isCompleted ? "Lesson Completed" : "Mark as done to continue"}
                </div>

                <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end">
                    <button
                        onClick={toggleComplete}
                        className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all ${isCompleted
                                ? 'bg-green-100 text-green-700 hover:bg-green-200'
                                : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
                            }`}
                    >
                        <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${isCompleted ? 'border-green-600 bg-green-600 text-white' : 'border-slate-300'}`}>
                            {isCompleted && <Check size={12} />}
                        </div>
                        {isCompleted ? "Completed" : "Mark Complete"}
                    </button>

                    {hasNext ? (
                        <button
                            onClick={() => navigate(`/day/${dayNum + 1}`)}
                            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all shadow-lg shadow-teal-500/20 active:transform active:scale-95 ${isCompleted
                                    ? 'bg-[var(--brand-primary)] text-white hover:opacity-90'
                                    : 'bg-slate-100 text-slate-300 cursor-not-allowed hidden' // Hide next until complete? Optional. Let's make it always visible but prominent.
                                }`}
                        >
                            {isCompleted ? 'Next Lesson' : 'Next'} <ChevronRight size={18} />
                        </button>
                    ) : (
                        <div className="px-6 py-3 font-bold text-[var(--brand-primary)]">🎉 Course Finished!</div>
                    )}

                    {/* Fallback Next button if user doesn't want to complete */}
                    {!isCompleted && hasNext && (
                        <button
                            onClick={() => navigate(`/day/${dayNum + 1}`)}
                            className="px-6 py-3 rounded-xl font-bold text-[var(--brand-primary)] bg-[var(--brand-light)] hover:bg-teal-200 transition-colors"
                        >
                            Next <ChevronRight className="inline" size={16} />
                        </button>
                    )}
                </div>
            </div>

        </div>
    );
};

export default DayView;
