import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { curriculum } from '../data/curriculum';
import { Map, Flag, ChevronRight, Lock } from 'lucide-react';

const Home = () => {
    const phases = useMemo(() => {
        const groups = {};
        curriculum.forEach(day => {
            // Parse "1. The Detective" to just "Act I: The Detective"
            const simplePhase = day.phase;
            if (!groups[simplePhase]) groups[simplePhase] = [];
            groups[simplePhase].push(day);
        });
        return groups;
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="max-w-3xl mx-auto pb-20 relative"
        >
            {/* Hero Section */}
            <div className="text-center mb-24 pt-10">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="inline-block p-4 rounded-full bg-[var(--accent-primary)]/10 mb-6 border border-[var(--accent-primary)]/20 shadow-[0_0_30px_rgba(56,189,248,0.2)]"
                >
                    <Map size={48} className="text-[var(--accent-primary)]" />
                </motion.div>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                    The Data <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)]">
                        Detective's Path
                    </span>
                </h1>
                <p className="text-xl text-[var(--text-secondary)] max-w-xl mx-auto mb-8">
                    60 Days. From clueless to capable.
                    <br />Your journey through the underworld of statistics.
                </p>
                <Link to="/day/1" className="btn btn-primary text-lg px-8 py-4">
                    Start Day 1 <ChevronRight className="ml-2" />
                </Link>
            </div>

            {/* Vertical Timeline Line */}
            <div className="absolute left-[1.5rem] md:left-1/2 top-[400px] bottom-0 w-px bg-gradient-to-b from-[var(--accent-primary)] via-[var(--glass-border)] to-transparent opacity-50"></div>

            {/* Timeline Items */}
            <div className="space-y-24 relative z-10">
                {Object.entries(phases).map(([phaseName, days], phaseIndex) => (
                    <div key={phaseName} className="relative">
                        {/* Phase Header */}
                        <div className="sticky top-24 z-20 flex justify-center mb-12">
                            <div className="bg-[var(--bg-primary)]/90 backdrop-blur-xl border border-[var(--glass-border)] px-6 py-2 rounded-full shadow-2xl text-[var(--accent-secondary)] font-bold text-sm tracking-wider uppercase flex items-center gap-2">
                                <Flag size={16} />
                                {phaseName}
                            </div>
                        </div>

                        <div className="space-y-4">
                            {days.map((day, index) => {
                                const isLeft = index % 2 === 0;
                                return (
                                    <motion.div
                                        key={day.day}
                                        className={`md:flex items-center justify-between gap-8 ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}
                                        whileHover={{ scale: 1.02 }}
                                    >
                                        {/* Timeline Node */}
                                        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[var(--bg-primary)] border-2 border-[var(--accent-primary)] z-10 shadow-[0_0_10px_var(--accent-primary)]"></div>

                                        {/* Content Card */}
                                        <Link to={`/day/${day.day}`} className="block flex-1 pl-12 md:pl-0">
                                            <div className={`glass-panel p-6 hover:border-[var(--accent-primary)]/50 transition-colors relative group ${isLeft ? 'md:text-right' : 'md:text-left'}`}>

                                                {/* Mobile Timeline Node */}
                                                <div className="md:hidden absolute left-[-2.45rem] top-8 w-4 h-4 rounded-full bg-[var(--bg-primary)] border-2 border-[var(--accent-primary)] z-10"></div>

                                                <div className="text-[10px] uppercase tracking-widest text-[var(--accent-primary)] mb-1 font-mono">
                                                    Day {day.day}
                                                </div>
                                                <h3 className="text-xl font-bold mb-2 group-hover:text-[var(--accent-primary)] transition-colors">
                                                    {day.title}
                                                </h3>
                                                <p className="text-[var(--text-secondary)] text-sm line-clamp-2">
                                                    {day.summary}
                                                </p>
                                            </div>
                                        </Link>

                                        {/* Spacer for the other side */}
                                        <div className="hidden md:block flex-1"></div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center pt-20 pb-10">
                <p className="text-[var(--text-secondary)]">To be continued...</p>
            </div>
        </motion.div>
    );
};

export default Home;
