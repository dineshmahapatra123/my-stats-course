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
    Check
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const SampleChart = ({ data }) => {
    if (!data) return null;
    return (
        <div className="h-64 w-full mt-4">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                    <XAxis dataKey="type" stroke="#94a3b8" />
                    <YAxis stroke="#94a3b8" />
                    <Tooltip
                        contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', color: '#f1f5f9' }}
                        itemStyle={{ color: '#38bdf8' }}
                    />
                    <Bar dataKey="cost" fill="#38bdf8" radius={[4, 4, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

const DayView = () => {
    const { dayId } = useParams();
    const navigate = useNavigate();
    const dayNum = parseInt(dayId, 10);
    const day = curriculum.find(d => d.day === dayNum);
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [dayId]);

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
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="max-w-4xl mx-auto pb-20"
        >
            <div className="mb-8">
                <Link to="/" className="text-[var(--text-secondary)] hover:text-white flex items-center gap-2 mb-4">
                    <ArrowLeft size={16} /> Back to Timeline
                </Link>
                <div className="flex items-center gap-3 text-[var(--accent-primary)] font-mono mb-2">
                    <span>Day {day.day}</span>
                    <span>//</span>
                    <span>{day.phase}</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{day.title}</h1>
                <p className="text-xl text-[var(--text-secondary)]">{day.summary}</p>
            </div>

            <div className="grid gap-8">
                {/* Core Content */}
                <section className="glass-panel p-8">
                    <div className="flex items-center gap-3 mb-6 text-[var(--accent-secondary)]">
                        <BookOpen size={24} />
                        <h2 className="text-2xl font-bold m-0">Lesson</h2>
                    </div>
                    <div
                        className="prose prose-invert max-w-none text-[var(--text-primary)]"
                        dangerouslySetInnerHTML={{ __html: day.content || `<p>Content for ${day.title} is being generated...</p>` }}
                    />

                    {day.example && (
                        <div className="mt-8 bg-[var(--bg-primary)]/50 p-6 rounded-xl border border-[var(--glass-border)]">
                            <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
                                <Lightbulb size={18} className="text-yellow-400" />
                                Example: {day.example.title}
                            </h3>
                            <p className="text-[var(--text-secondary)] mb-4">{day.example.description}</p>
                            {day.example.data && <SampleChart data={day.example.data} />}
                        </div>
                    )}
                </section>

                {/* AI Study Guide */}
                <section className="glass-panel p-1 bg-gradient-to-br from-[var(--glass-bg)] to-[var(--accent-primary)]/10 border-[var(--accent-primary)]/30">
                    <div className="bg-[var(--bg-secondary)]/90 backdrop-blur-xl p-8 rounded-[14px]">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-3 text-[var(--accent-primary)]">
                                <BrainCircuit size={24} />
                                <h2 className="text-2xl font-bold m-0">AI Study Guide</h2>
                            </div>
                            <span className="text-xs font-mono px-2 py-1 rounded bg-[var(--accent-primary)]/20 text-[var(--accent-primary)]">
                                PROMPT
                            </span>
                        </div>

                        <p className="text-[var(--text-secondary)] mb-4">
                            Use this prompt with your favorite AI (ChatGPT, Claude, Gemini) to dive deeper.
                        </p>

                        <div className="relative group">
                            <div className="bg-[var(--bg-primary)] p-4 rounded-lg font-mono text-sm text-[var(--text-primary)] border border-[var(--glass-border)] group-hover:border-[var(--accent-primary)] transition-colors">
                                {day.ai_prompt}
                            </div>
                            <button
                                onClick={handleCopy}
                                className="absolute top-2 right-2 p-2 rounded-md bg-[var(--bg-secondary)] hover:bg-[var(--accent-primary)] hover:text-[var(--bg-primary)] transition-colors border border-[var(--glass-border)]"
                                title="Copy Prompt"
                            >
                                {copied ? <Check size={16} /> : <Copy size={16} />}
                            </button>
                        </div>
                    </div>
                </section>

                {/* Homework */}
                {day.homework && (
                    <section className="glass-panel p-8 border-l-4 border-l-[var(--accent-secondary)]">
                        <h3 className="text-lg font-bold mb-2">📝 Today's Mission</h3>
                        <p className="text-[var(--text-primary)]">{day.homework}</p>
                    </section>
                )}
            </div>

            {/* Navigation */}
            <div className="flex justify-between mt-12 gap-4">
                {prevDay ? (
                    <Link
                        to={`/day/${prevDay.day}`}
                        className="flex-1 glass-panel p-4 flex items-center gap-3 hover:bg-[var(--glass-border)] transition-colors group"
                    >
                        <ArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                        <div>
                            <div className="text-xs text-[var(--text-secondary)]">Previous</div>
                            <div className="font-bold truncate">{prevDay.title}</div>
                        </div>
                    </Link>
                ) : <div className="flex-1"></div>}

                {nextDay ? (
                    <Link
                        to={`/day/${nextDay.day}`}
                        className="flex-1 glass-panel p-4 flex items-center justify-end gap-3 hover:bg-[var(--glass-border)] transition-colors text-right group"
                    >
                        <div>
                            <div className="text-xs text-[var(--text-secondary)]">Next</div>
                            <div className="font-bold truncate">{nextDay.title}</div>
                        </div>
                        <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                ) : <div className="flex-1"></div>}
            </div>
        </motion.div>
    );
};

export default DayView;
