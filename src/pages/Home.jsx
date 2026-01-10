import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { curriculum } from '../data/curriculum';
import { CheckCircle, Circle, Lock } from 'lucide-react';

const Home = () => {
    // Group curriculum by phase
    const phases = useMemo(() => {
        const groups = {};
        curriculum.forEach(day => {
            if (!groups[day.phase]) groups[day.phase] = [];
            groups[day.phase].push(day);
        });
        return groups;
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 }
    };

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="pb-20"
        >
            <div className="text-center mb-16 animate-float">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                    Master Data Science <br />
                    <span className="text-[var(--accent-primary)]">in 60 Days</span>
                </h1>
                <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
                    A comprehensive journey from data literacy to advanced analytics.
                    Daily concepts, visualizations, and AI-powered study guides.
                </p>
            </div>

            <div className="space-y-12">
                {Object.entries(phases).map(([phaseName, days]) => (
                    <div key={phaseName} className="relative">
                        <h2 className="text-3xl font-bold mb-8 sticky top-24 z-10 bg-[var(--bg-primary)]/80 backdrop-blur-md py-2 border-b border-[var(--glass-border)]">
                            {phaseName}
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {days.map((day) => (
                                <motion.div key={day.day} variants={itemVariants}>
                                    <Link to={`/day/${day.day}`} className="block h-full">
                                        <div className="glass-panel p-6 h-full hover:bg-[var(--glass-border)] transition-all group relative overflow-hidden">
                                            <div className="absolute top-0 right-0 p-4 opacity-10 font-bold text-6xl group-hover:opacity-20 transition-opacity">
                                                {day.day}
                                            </div>

                                            <div className="flex items-center gap-2 mb-4 text-[var(--accent-primary)] font-mono text-sm">
                                                <span className="px-2 py-1 rounded bg-[var(--accent-primary)]/10 text-[var(--accent-primary)]">
                                                    Day {day.day}
                                                </span>
                                            </div>

                                            <h3 className="text-xl font-bold mb-2 group-hover:text-[var(--accent-primary)] transition-colors">
                                                {day.title}
                                            </h3>

                                            <p className="text-[var(--text-secondary)] text-sm line-clamp-2">
                                                {day.summary}
                                            </p>

                                            <div className="mt-4 flex items-center gap-2 text-xs text-[var(--text-secondary)]">
                                                <span className="w-2 h-2 rounded-full bg-[var(--accent-secondary)]"></span>
                                                {phaseName}
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
    );
};

export default Home;
