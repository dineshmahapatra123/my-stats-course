import React, { useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import { curriculum } from '../data/curriculum';
import { LayoutDashboard, BookOpen } from 'lucide-react';

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

    return (
        <aside className="fixed top-0 left-0 h-full w-[var(--sidebar-width)] bg-[var(--sidebar-bg)] text-[var(--sidebar-text)] flex flex-col z-50">

            {/* Logo Area */}
            <div className="h-16 flex items-center px-6 border-b border-white/5">
                <div className="flex items-center gap-2 text-white font-bold text-lg">
                    <div className="w-8 h-8 rounded bg-white/10 flex items-center justify-center">
                        <BookOpen size={18} />
                    </div>
                    ConsultAccel
                </div>
            </div>

            {/* Main Navigation */}
            <div className="p-4 space-y-1">
                <NavLink
                    to="/"
                    end
                    className={({ isActive }) =>
                        `flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${isActive
                            ? 'bg-[var(--accent-blue)]/10 text-[var(--accent-blue)]'
                            : 'hover:bg-white/5 text-slate-400'
                        }`
                    }
                >
                    <LayoutDashboard size={18} />
                    Dashboard
                </NavLink>
            </div>

            {/* Curriculum List (Scrollable) */}
            <div className="flex-1 overflow-y-auto sidebar-scroll px-4 pb-4">
                {Object.entries(phases).map(([phaseName, days], idx) => (
                    <div key={phaseName} className="mb-6">
                        {/* Phase Header */}
                        <div className="flex items-center gap-2 mb-3 px-2">
                            <span className="w-2 h-2 rounded-full bg-[var(--accent-blue)]"></span>
                            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                                Phase {idx + 1}
                            </span>
                        </div>

                        {/* Lessons */}
                        <div className="space-y-0.5">
                            {days.map(day => (
                                <NavLink
                                    key={day.day}
                                    to={`/day/${day.day}`}
                                    className={({ isActive }) =>
                                        `flex items-start gap-3 px-3 py-2 rounded-md transition-all group ${isActive ? 'bg-white/5 text-white' : 'hover:bg-white/5 text-slate-500'
                                        }`
                                    }
                                >
                                    <span className="text-[10px] font-mono mt-0.5 opacity-50 w-5 text-right">D{day.day}</span>
                                    <span className={`text-xs truncate transition-colors ${isActive ? 'text-white font-medium' : 'group-hover:text-slate-300'}`}>
                                        {day.title}
                                    </span>
                                </NavLink>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

        </aside>
    );
};

export default Sidebar;
