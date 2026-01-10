import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { curriculum } from '../data/curriculum';
import { motion } from 'framer-motion';
import {
    ArrowLeft,
    ArrowRight,
    BrainCircuit,
    Lightbulb,
    BookOpen,
    Copy,
    Check,
    Zap,
    Quote
} from 'lucide-react';

const DayView = () => {
    const { dayId } = useParams();
    const dayNum = parseInt(dayId, 10);
    const day = curriculum.find(d => d.day === dayNum);
    const [copied, setCopied] = useState(false);
    const [completed, setCompleted] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
        // Check local storage
        const saved = localStorage.getItem(`day-${dayNum}-completed`);
        if (saved) setCompleted(true);
    }, [dayId, dayNum]);

    const toggleComplete = () => {
        if (completed) {
            localStorage.removeItem(`day-${dayNum}-completed`);
            setCompleted(false);
        } else {
            localStorage.setItem(`day-${dayNum}-completed`, 'true');
            setCompleted(true);
        }
    };

    if (!day) return <div className="text-center py-20">Day not found</div>;

    const handleCopy = () => {
        navigator.clipboard.writeText(day.ai_prompt);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const nextDay = curriculum.find(d => d.day === dayNum + 1);
    const prevDay = curriculum.find(d => d.day === dayNum - 1);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="max-w-4xl mx-auto pb-20 pt-10"
        >
            {/* HeaderNav */}
            <div className="flex items-center justify-between mb-8">
                <Link to="/" className="text-[var(--text-secondary)] hover:text-[var(--accent-primary)] flex items-center gap-2 transition-colors">
                    <ArrowLeft size={20} /> <span className="hidden md:inline">Back to Path</span>
                </Link>
                <div className="font-mono text-[var(--accent-secondary)] text-sm tracking-widest uppercase">
                    {day.phase}
                </div>
                <div className="w-8"></div> {/* Spacer */}
            </div>

            {/* Main Title Area */}
            <div className="text-center mb-12">
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="inline-block px-4 py-1 rounded-full border border-[var(--accent-primary)]/30 bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] font-mono mb-4"
                >
                    DAY {day.day}
                </motion.div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-[var(--text-secondary)]">
                    {day.title}
                </h1>
                {day.hook && (
                    <div className="max-w-2xl mx-auto relative group">
                        <Quote className="absolute -left-8 -top-4 text-[var(--accent-secondary)] opacity-20" size={48} />
                        <p className="text-xl md:text-2xl text-[var(--text-secondary)] italic font-light leading-relaxed">
                            "{day.hook}"
                        </p>
                    </div>
                )}
            </div>

            <div className="grid gap-8">

                {/* The Action Card (AI Prompt) - Prominent first */}
                <section className="relative overflow-hidden rounded-2xl border border-[var(--accent-primary)]/30 bg-gradient-to-br from-[var(--bg-secondary)] to-[var(--bg-primary)] shadow-[0_0_40px_rgba(56,189,248,0.1)]">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)]"></div>

                    <div className="p-8 md:p-10">
                        <div className="flex items-start justify-between mb-6">
                            <div>
                                <h2 className="text-2xl font-bold flex items-center gap-3 mb-2">
                                    <BrainCircuit className="text-[var(--accent-primary)]" />
                                    AI Tutor Session
                                </h2>
                                <p className="text-[var(--text-secondary)]">
                                    This is your learning engine. Paste this into ChatGPT/Claude to start the lesson.
                                </p>
                            </div>
                            <button
                                onClick={handleCopy}
                                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${copied ? 'bg-green-500/20 text-green-400' : 'bg-[var(--bg-primary)] hover:bg-[var(--accent-primary)] hover:text-white border border-[var(--glass-border)]'}`}
                            >
                                {copied ? <Check size={18} /> : <Copy size={18} />}
                                {copied ? 'Copied!' : 'Copy Prompt'}
                            </button>
                        </div>

                        <div className="bg-[var(--bg-primary)]/80 p-6 rounded-xl border border-[var(--glass-border)] font-mono text-sm md:text-base leading-relaxed text-[var(--text-primary)] relative group">
                            <div className="absolute top-4 right-4 text-xs text-[var(--text-secondary)] opacity-50">REL 2.0</div>
                            {day.ai_prompt}
                        </div>
                    </div>
                </section>

                {/* Core Lesson Summary */}
                <section className="glass-panel p-8">
                    <div className="flex items-center gap-3 mb-4 text-[var(--text-primary)]">
                        <BookOpen size={24} className="text-[var(--accent-secondary)]" />
                        <h2 className="text-2xl font-bold">The Concept</h2>
                    </div>

                    <div className="prose prose-invert max-w-none prose-lg">
                        <p className="lead">{day.summary}</p>
                        {/* If we had full content, it would go here. For now, we rely on the summary + prompt strategy. */}
                        {day.content && <div dangerouslySetInnerHTML={{ __html: day.content }} />}

                        {!day.content && (
                            <p className="text-[var(--text-secondary)] text-base mt-4 bg-[var(--bg-primary)]/30 p-4 rounded-lg border border-dashed border-[var(--glass-border)]">
                                <strong className="text-[var(--accent-primary)]">Strategy:</strong> Use the AI prompt above. It is engineered to teach you this concept better than any static text. Ask follow up questions like "Explain with an analogy" or "Give me a quiz".
                            </p>
                        )}
                    </div>

                    {day.mental_model && (
                        <div className="mt-8 p-6 bg-[var(--accent-secondary)]/10 rounded-xl border border-[var(--accent-secondary)]/20">
                            <h3 className="text-lg font-bold text-[var(--accent-secondary)] mb-2 flex items-center gap-2">
                                <Lightbulb size={20} /> Mental Model
                            </h3>
                            <p className="italic text-[var(--text-primary)]">
                                {day.mental_model}
                            </p>
                        </div>
                    )}
                </section>

                {/* Completion Toggle */}
                <div className="flex justify-center py-8">
                    <button
                        onClick={toggleComplete}
                        className={`flex items-center gap-3 px-8 py-4 rounded-full text-lg font-bold transition-all transform hover:scale-105 active:scale-95 ${completed
                                ? 'bg-green-500 text-white shadow-[0_0_20px_rgba(34,197,94,0.4)]'
                                : 'bg-[var(--bg-secondary)] border border-[var(--glass-border)] text-[var(--text-secondary)] hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)]'
                            }`}
                    >
                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${completed ? 'border-white bg-white/20' : 'border-current'}`}>
                            {completed && <Check size={14} />}
                        </div>
                        {completed ? 'Day Complete' : 'Mark as Complete'}
                    </button>
                </div>

            </div>

            {/* Footer Navigation */}
            <div className="flex justify-between mt-12 gap-4 border-t border-[var(--glass-border)] pt-8">
                {prevDay ? (
                    <Link to={`/day/${prevDay.day}`} className="group">
                        <div className="text-xs text-[var(--text-secondary)] mb-1 group-hover:translate-x-1 transition-transform">← Previous</div>
                        <div className="font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors">{prevDay.title}</div>
                    </Link>
                ) : <div></div>}

                {nextDay ? (
                    <Link to={`/day/${nextDay.day}`} className="group text-right">
                        <div className="text-xs text-[var(--text-secondary)] mb-1 group-hover:-translate-x-1 transition-transform">Next →</div>
                        <div className="font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors">{nextDay.title}</div>
                    </Link>
                ) : <div></div>}
            </div>

        </motion.div>
    );
};

export default DayView;
