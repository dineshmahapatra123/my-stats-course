import React, { useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import { curriculum } from '../data/curriculum';
import { LayoutDashboard, BookOpen, ChevronRight, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars

const Sidebar = () => {
    const phases = useMemo(() => {
        const groups = {};
        curriculum.forEach(day => {
            const simplePhase = day.phase;
            if (!groups[simplePhase]) groups[simplePhase] = [];
            groups[simplePhase].push(day);
        });
        return groups;
    }, []);

    const totalDays = curriculum.length;
    // Calculate progress based on local storage
    const completedDays = curriculum.reduce((acc, day) => {
        return acc + (localStorage.getItem(`day-${day.day}-completed`) ? 1 : 0);
    }, 0);
    const progressPercentage = Math.round((completedDays / totalDays) * 100);

    return (
        <aside className="fixed top-0 left-0 h-full w-[var(--sidebar-width)] bg-slate-900 text-slate-400 flex flex-col z-50 border-r border-slate-800 shadow-xl">

            {/* Logo Area */}
            <div className="h-20 flex items-center px-6 border-b border-slate-800 bg-slate-950/50 backdrop-blur-sm">
                <div className="flex items-center gap-3 text-slate-100 font-bold text-lg tracking-tight">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-blue-900/20">
                        <GraduationCap size={20} />
                    </div>
                    <div>
                        <span className="block leading-none">Stats</span>
                        <span className="text-xs text-blue-500 font-medium uppercase tracking-wider">Mastery</span>
                    </div>
                </div>
            </div>

            {/* User Progress Summary */}
            <div className="p-6 border-b border-slate-800 bg-slate-900/50">
                <div className="flex justify-between items-end mb-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Course Progress</span>
                    <span className="text-xs font-bold text-white">{progressPercentage}%</span>
                </div>
                <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${progressPercentage}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-full bg-blue-500 rounded-full"
                    />
                </div>
            </div>

            {/* Main Navigation */}
            <div className="p-4 space-y-1">
                <NavLink
                    to="/"
                    end
                    className={({ isActive }) =>
                        `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 group ${isActive
                            ? 'bg-blue-600/10 text-blue-500 shadow-inner'
                            : 'hover:bg-slate-800 text-slate-400 hover:text-slate-200'
                        }`
                    }
                >
                    <LayoutDashboard size={18} className="group-hover:scale-110 transition-transform" />
                    Dashboard
                </NavLink>
            </div>

            {/* Curriculum List (Scrollable) */}
            <div className="flex-1 overflow-y-auto sidebar-scroll px-4 pb-10 space-y-8">
                {Object.entries(phases).map(([phaseName, days], idx) => (
                    <div key={phaseName} className="relative">
                        {/* Phase Header */}
                        <div className="sticky top-0 bg-slate-900/95 backdrop-blur-md z-10 py-3 mb-2 flex items-center gap-3 border-b border-slate-800/50">
                            <span className="flex items-center justify-center w-5 h-5 rounded bg-slate-800 text-[10px] font-bold text-slate-400 border border-slate-700">
                                {idx + 1}
                            </span>
                            <span className="text-xs font-bold uppercase tracking-wider text-slate-300 truncate">
                                {phaseName.replace(/^\d+\.\s*/, '')}
                            </span>
                        </div>

                        {/* Lessons */}
                        <div className="space-y-1 pl-2 border-l border-slate-800 ml-2.5">
                            {days.map(day => {
                                const isDone = localStorage.getItem(`day-${day.day}-completed`);
                                return (
                                    <NavLink
                                        key={day.day}
                                        to={`/day/${day.day}`}
                                        className={({ isActive }) =>
                                            `flex items-center justify-between gap-3 px-3 py-2 rounded-lg transition-all group relative ml-2 ${isActive
                                                ? 'bg-slate-800 text-white'
                                                : 'text-slate-500 hover:text-slate-300 hover:bg-slate-800/50'
                                            }`
                                        }
                                    >
                                        <div className="flex items-center gap-3 overflow-hidden">
                                            <span className={`text-[10px] font-mono w-6 text-right ${isDone ? 'text-green-500' : 'opacity-40'}`}>
                                                D{day.day}
                                            </span>
                                            <span className="text-xs truncate font-medium">
                                                {day.title}
                                            </span>
                                        </div>
                                        {isDone && <span className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>}
                                    </NavLink>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>

            {/* Footer Profile or Settings (Visual Only) */}
            <div className="p-4 border-t border-slate-800 bg-slate-950/30">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500"></div>
                    <div className="flex-1 overflow-hidden">
                        <p className="text-sm font-medium text-white truncate">Student Account</p>
                        <p className="text-xs text-slate-500 truncate">Free Plan</p>
                    </div>
                </div>
            </div>

        </aside>
    );
};

export default Sidebar;
