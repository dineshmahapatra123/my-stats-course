import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { curriculum } from '../data/curriculum';
import { Play, CheckCircle2, Trophy, Clock, Zap } from 'lucide-react';

const Home = () => {
    const progress = 0; // Dynamic later
    const phases = useMemo(() => {
        const groups = {};
        curriculum.forEach(day => {
            const simplePhase = day.phase;
            if (!groups[simplePhase]) groups[simplePhase] = [];
            groups[simplePhase].push(day);
        });
        return groups;
    }, []);

    return (
        <div className="max-w-7xl mx-auto p-8 lg:p-12">

            {/* Welcome Hero */}
            <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
                <div>
                    <h1 className="text-4xl font-extrabold text-slate-800 mb-2 tracking-tight">
                        Hello, <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-accent)]">Explorer</span>.
                    </h1>
                    <p className="text-slate-500 text-lg max-w-xl">
                        Your 60-day journey to data mastery begins here. Pick up where you left off.
                    </p>
                </div>

                <div className="flex gap-4">
                    {/* Stats Capsules */}
                    <div className="flex items-center gap-3 px-5 py-3 rounded-full bg-white border border-slate-100 shadow-sm">
                        <div className="p-1.5 bg-orange-100 text-orange-600 rounded-full"><Zap size={16} /></div>
                        <div>
                            <div className="text-xs font-bold text-slate-400 uppercase">Streak</div>
                            <div className="text-sm font-bold text-slate-800">0 Days</div>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 px-5 py-3 rounded-full bg-white border border-slate-100 shadow-sm">
                        <div className="p-1.5 bg-blue-100 text-blue-600 rounded-full"><Trophy size={16} /></div>
                        <div>
                            <div className="text-xs font-bold text-slate-400 uppercase">XP</div>
                            <div className="text-sm font-bold text-slate-800">0 pts</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Resume Card */}
            <div className="mb-14 relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--brand-primary)] to-emerald-400 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative bg-white rounded-3xl p-8 md:p-12 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex-1">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--brand-light)] text-[var(--brand-primary)] text-xs font-bold uppercase tracking-wider mb-4">
                            Current Lesson
                        </div>
                        <h2 className="text-3xl font-bold mb-4">Data: The New Oil</h2>
                        <p className="text-slate-500 mb-6 text-lg">Day 1 • Phase 1: The Detective</p>

                        <div className="flex items-center gap-2 text-sm text-slate-400">
                            <Clock size={16} /> 15 min lesson
                        </div>
                    </div>

                    <Link to="/day/1" className="bg-[var(--brand-primary)] text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl hover:bg-teal-700 transition-all flex items-center gap-3 group">
                        <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Play size={16} fill="currentColor" />
                        </span>
                        Start Learning
                    </Link>
                </div>
            </div>

            {/* Horizontal Scroll / Grid for Phases */}
            <h3 className="text-xl font-bold text-slate-800 mb-6">Course Phases</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {Object.entries(phases).map(([phaseName, days], idx) => (
                    <div key={phaseName} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all group">
                        <div className="flex justify-between items-start mb-4">
                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-white shadow-md ${idx === 0 ? 'bg-[var(--brand-primary)] shadow-teal-200' : 'bg-slate-200 text-slate-400'
                                }`}>
                                {idx + 1}
                            </div>
                            <span className="text-xs font-bold text-slate-300 uppercase">{days.length} Days</span>
                        </div>

                        <h4 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-[var(--brand-primary)] transition-colors">
                            {phaseName}
                        </h4>
                        <p className="text-sm text-slate-500 mb-6 line-clamp-2">
                            {days[0].summary}
                        </p>

                        <Link to={`/day/${days[0].day}`} className="inline-flex items-center text-sm font-bold text-[var(--brand-primary)] hover:underline">
                            View Curriculum <ArrowRight size={16} className="ml-1" />
                        </Link>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Home;
