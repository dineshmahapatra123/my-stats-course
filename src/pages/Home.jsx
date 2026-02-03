import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { curriculum } from '../data/curriculum';
import { ChevronRight, Play, Star, Clock, Trophy } from 'lucide-react';
import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars

const Home = () => {
    // Group days by phase
    const phases = useMemo(() => {
        const groups = {};
        curriculum.forEach(day => {
            const simplePhase = day.phase;
            if (!groups[simplePhase]) groups[simplePhase] = [];
            groups[simplePhase].push(day);
        });
        return groups;
    }, []);

    // Find first incomplete day
    const nextLesson = useMemo(() => {
        // Find first day that is NOT completed
        const firstUnfinished = curriculum.find(day => !localStorage.getItem(`day-${day.day}-completed`));
        return firstUnfinished || curriculum[curriculum.length - 1];
    }, []);

    // Stats
    const totalDays = curriculum.length;
    const completedCount = curriculum.reduce((acc, day) => acc + (localStorage.getItem(`day-${day.day}-completed`) ? 1 : 0), 0);
    const progress = Math.round((completedCount / totalDays) * 100);

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <div className="min-h-screen pb-20">

            {/* Header / Hero Section */}
            <div className="bg-white border-b border-slate-200 px-8 py-10">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                        <div>
                            <h1 className="text-3xl font-bold text-slate-900 mb-2">Welcome Back, Student</h1>
                            <p className="text-slate-500">You are on <span className="font-semibold text-blue-600">Day {nextLesson.day}</span> of your journey to mastery.</p>
                        </div>
                        <div className="flex items-center gap-6">
                            <div className="text-right hidden md:block">
                                <div className="text-2xl font-bold text-slate-900">{progress}%</div>
                                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Completed</div>
                            </div>
                            <div className="w-16 h-16 rounded-full border-4 border-slate-100 flex items-center justify-center relative">
                                <svg className="w-full h-full absolute top-0 left-0 rotate-[-90deg]">
                                    <circle cx="50%" cy="50%" r="28" stroke="currentColor" strokeWidth="4" fill="transparent" className="text-slate-100" />
                                    <circle cx="50%" cy="50%" r="28" stroke="currentColor" strokeWidth="4" fill="transparent" className="text-blue-600" strokeDasharray={`${progress * 1.75} 175`} strokeLinecap="round" />
                                </svg>
                                <Trophy size={20} className="text-blue-600 mb-0.5" />
                            </div>
                        </div>
                    </div>

                    {/* Continue Learning Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mt-8 bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-6 md:p-8 text-white shadow-xl shadow-slate-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 opacity-10 blur-[80px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

                        <div className="relative z-10 flex-1">
                            <div className="flex items-center gap-2 text-blue-300 text-xs font-bold uppercase tracking-wider mb-2">
                                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                                Up Next • {nextLesson.phase}
                            </div>
                            <h2 className="text-2xl font-bold mb-2 group-hover:text-blue-200 transition-colors">{nextLesson.title}</h2>
                            <p className="text-slate-400 max-w-xl line-clamp-2">{nextLesson.summary}</p>
                        </div>

                        <Link
                            to={`/day/${nextLesson.day}`}
                            className="relative z-10 btn-primary bg-white text-slate-900 hover:bg-blue-50 md:self-center shrink-0"
                        >
                            <Play size={18} fill="currentColor" className="mr-2" /> Resume
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* Curriculum Grid */}
            <div className="max-w-6xl mx-auto px-8 py-12">
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="space-y-12"
                >
                    {Object.entries(phases).map(([phaseName, days], idx) => (
                        <div key={phaseName} className="relative pl-8 border-l-2 border-slate-100">
                            {/* Phase Marker */}
                            <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full border-4 border-slate-50 bg-white shadow-sm flex items-center justify-center text-xs font-bold text-slate-500">
                                {idx + 1}
                            </div>

                            <div className="mb-6">
                                <h3 className="text-xl font-bold text-slate-900">{phaseName}</h3>
                                <p className="text-sm text-slate-500">Phase {idx + 1} • {days.length} Lessons</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                                {days.map(day => {
                                    const isDone = localStorage.getItem(`day-${day.day}-completed`);

                                    return (
                                        <motion.div variants={item} key={day.day}>
                                            <Link
                                                to={`/day/${day.day}`}
                                                className={`block h-full bg-white rounded-xl p-5 border shadow-sm transition-all hover:shadow-md hover:-translate-y-1 group relative overflow-hidden ${isDone ? 'border-green-100' : 'border-slate-100'}`}
                                            >
                                                {isDone && (
                                                    <div className="absolute top-3 right-3 text-green-500">
                                                        <div className="bg-green-100 p-1 rounded-full">
                                                            <Star size={12} fill="currentColor" />
                                                        </div>
                                                    </div>
                                                )}

                                                <div className="mb-3">
                                                    <span className={`inline-block px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider ${isDone ? 'bg-green-50 text-green-600' : 'bg-slate-100 text-slate-500'}`}>
                                                        Day {day.day}
                                                    </span>
                                                </div>

                                                <h4 className="text-lg font-bold text-slate-900 mb-2 leading-tight group-hover:text-blue-600 transition-colors">
                                                    {day.title}
                                                </h4>

                                                <p className="text-sm text-slate-500 line-clamp-2 mb-4">
                                                    {day.summary}
                                                </p>

                                                <div className="mt-auto flex items-center text-xs text-slate-400 gap-1 group-hover:text-blue-500 transition-colors">
                                                    {isDone ? 'Review Lesson' : 'Start Lesson'} <ChevronRight size={14} />
                                                </div>
                                            </Link>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>

        </div>
    );
};

export default Home;
