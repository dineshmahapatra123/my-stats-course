import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { curriculum } from '../data/curriculum';
import { CheckCircle, Circle, PlayCircle, Lock, Trophy, ArrowRight } from 'lucide-react';

const Home = () => {
    // Calculate progress stats
    const totalDays = curriculum.length;
    // In a real app, we'd pull this from user state/localstorage
    const progress = 0;

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
        <div className="p-8 max-w-6xl mx-auto">
            {/* Dashboard Header */}
            <div className="mb-12">
                <h1 className="text-3xl font-bold text-slate-900 mb-2">Welcome back, Student.</h1>
                <p className="text-slate-500 text-lg">You are on the path to statistical mastery.</p>

                {/* Progress Card */}
                <div className="mt-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white shadow-xl relative overflow-hidden">
                    <div className="absolute right-0 top-0 h-full w-1/2 bg-white/5 skew-x-12 transform translate-x-20"></div>

                    <div className="relative z-10 flex flex-col md:flex-row justify-between md:items-end gap-6">
                        <div>
                            <div className="text-blue-200 font-semibold mb-1 uppercase tracking-wider text-xs">Current Progress</div>
                            <div className="text-4xl font-bold mb-2">Day 1 <span className="text-blue-300 text-2xl font-normal">/ 60</span></div>
                            <p className="text-blue-100 max-w-md">Your journey begins now. Complete Day 1 to unlock the next steps.</p>
                        </div>

                        <Link to="/day/1" className="bg-white text-blue-600 px-6 py-3 rounded-xl font-bold shadow-lg hover:shadow-xl hover:bg-blue-50 transition-all flex items-center gap-2">
                            <PlayCircle size={20} /> Resume Learning
                        </Link>
                    </div>
                </div>
            </div>

            {/* Grid of Phases */}
            <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                <Trophy className="text-yellow-500" size={24} /> Your Roadmap
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Object.entries(phases).map(([phaseName, days], i) => (
                    <div key={phaseName} className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow flex flex-col h-full">
                        <div className="h-2 bg-gradient-to-r from-blue-500 to-indigo-500"></div>
                        <div className="p-6 flex-1 flex flex-col">
                            <div className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">Phase {i + 1}</div>
                            <h3 className="text-lg font-bold text-slate-900 mb-4">{phaseName.replace(/^\d+\.\s/, '')}</h3>
                            <p className="text-slate-500 text-sm mb-6 flex-1">
                                Mastering the core concepts of {days[0].title.split(':')[0]} and beyond.
                            </p>

                            <div className="text-xs text-slate-400 font-mono mb-4">
                                {days.length} Lessons • 0% Complete
                            </div>

                            <div className="space-y-2 border-t border-slate-100 pt-4">
                                {days.slice(0, 3).map(day => (
                                    <div key={day.day} className="flex items-center gap-3 text-sm text-slate-600">
                                        {day.day === 1 ? <CheckCircle size={16} className="text-blue-500" /> : <Circle size={16} className="text-slate-300" />}
                                        <span className="truncate">{day.title}</span>
                                    </div>
                                ))}
                                {days.length > 3 && (
                                    <div className="text-xs text-slate-400 pl-7">+ {days.length - 3} more lessons</div>
                                )}
                            </div>

                            <Link to={`/day/${days[0].day}`} className="mt-6 w-full py-2 rounded-lg border border-slate-200 text-center text-sm font-semibold text-slate-600 hover:border-blue-500 hover:text-blue-600 transition-colors">
                                View Phase
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Home;
