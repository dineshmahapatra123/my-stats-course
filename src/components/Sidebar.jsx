import React, { useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import { curriculum } from '../data/curriculum';
import { LayoutDashboard, CheckCircle, Circle, ChevronDown, ChevronRight, BookOpen } from 'lucide-react';

const Sidebar = () => {
    // Group days by phase
    const phases = useMemo(() => {
        const groups = {};
        curriculum.forEach(day => {
            // Extract Phase number/name e.g. "1. The Detective" -> "Phase 1"
            const simplePhase = day.phase;
            if (!groups[simplePhase]) groups[simplePhase] = [];
            groups[simplePhase].push(day);
        });
        return groups;
    }, []);

    return (
        <aside className="fixed top-0 left-0 h-full bg-[var(--sidebar-bg)] text-[var(--sidebar-text)] w-[var(--sidebar-width)] flex flex-col border-r border-slate-700 z-50">
            {/* Brand */}
            <div className="p-6 flex items-center gap-3 border-b border-slate-700/50">
                <div className="w-8 h-8 rounded-lg bg-[var(--brand-primary)] flex items-center justify-center text-white font-bold">
                    <BookOpen size={18} />
                </div>
                <span className="text-white font-bold text-lg tracking-tight">DataAccel</span>
            </div>

            {/* Main Nav */}
            <div className="p-4">
                <NavLink
                    to="/"
                    end
                    className={({ isActive }) =>
                        `flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors font-medium mb-1 ${isActive ? 'bg-[var(--brand-primary)]/10 text-white' : 'hover:bg-white/5 text-slate-400'}`
                    }
                >
                    <LayoutDashboard size={18} />
                    <span>Dashboard</span>
                </NavLink>
            </div>

            {/* Curriculum List */}
            <div className="flex-1 overflow-y-auto custom-scroll px-4 pb-4">
                {Object.entries(phases).map(([phaseName, days]) => (
                    <div key={phaseName} className="mb-6">
                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--brand-secondary)] mb-3 px-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand-secondary)]"></span>
                            {phaseName}
                        </div>

                        <div className="space-y-0.5">
                            {days.map(day => (
                                <NavLink
                                    key={day.day}
                                    to={`/day/${day.day}`}
                                    className={({ isActive }) =>
                                        `flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-all ${isActive
                                            ? 'bg-slate-700/50 text-white translate-x-1'
                                            : 'text-slate-400 hover:bg-white/5 hover:text-slate-300'
                                        }`
                                    }
                                >
                                    <span className="font-mono opacity-50 text-xs w-5">D{day.day}</span>
                                    <span className="truncate">{day.title}</span>
                                </NavLink>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* User Footer */}
            <div className="p-4 border-t border-slate-700/50 bg-slate-900/50">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500"></div>
                    <div className="text-xs">
                        <div className="text-white font-medium">Student Account</div>
                        <div className="text-slate-500">Free Plan</div>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
