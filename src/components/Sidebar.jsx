import React, { useMemo, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { curriculum } from '../data/curriculum';
import { LayoutGrid, BookOpen, ChevronRight, ChevronDown, CheckCircle2 } from 'lucide-react';

const Sidebar = () => {
    // Use state to track which phases are expanded. Default to expanding the current one.
    const location = useLocation();
    const [expandedPhases, setExpandedPhases] = useState({});

    // Grouping logic
    const phases = useMemo(() => {
        const groups = {};
        curriculum.forEach(day => {
            const simplePhase = day.phase;
            if (!groups[simplePhase]) groups[simplePhase] = [];
            groups[simplePhase].push(day);
        });
        return groups;
    }, []);

    const togglePhase = (phaseName) => {
        setExpandedPhases(prev => ({
            ...prev,
            [phaseName]: !prev[phaseName]
        }));
    };

    return (
        <aside className="fixed top-0 left-0 h-full w-[var(--sidebar-width)] bg-[var(--sidebar-bg)] border-r border-[var(--sidebar-border)] flex flex-col z-50">

            {/* Brand Header */}
            <div className="h-16 flex items-center px-6 border-b border-[var(--sidebar-border)] bg-white/50 backdrop-blur-sm">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--brand-primary)] to-[var(--brand-accent)] flex items-center justify-center text-white shadow-lg shadow-teal-500/20">
                    <LayoutGrid size={18} />
                </div>
                <span className="ml-3 font-bold text-lg text-slate-800 tracking-tight">Stats<span className="text-[var(--brand-primary)]">Course</span></span>
            </div>

            {/* Navigation Content */}
            <div className="flex-1 overflow-y-auto custom-scroll px-4 py-6 space-y-6">

                {/* Dashboard Link */}
                <NavLink
                    to="/"
                    end
                    className={({ isActive }) =>
                        `flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-semibold ${isActive
                            ? 'bg-[var(--brand-light)] text-[var(--brand-primary)] shadow-sm'
                            : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
                        }`
                    }
                >
                    <LayoutGrid size={20} />
                    <span>Overview</span>
                </NavLink>

                {/* Phase Accordions */}
                <div className="space-y-4">
                    <div className="px-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Curriculum</div>

                    {Object.entries(phases).map(([phaseName, days]) => {
                        // Check if active day is in this phase to auto-expand
                        const currentDayId = parseInt(location.pathname.split('/').pop());
                        const hasActiveDay = days.some(d => d.day === currentDayId);
                        const isExpanded = expandedPhases[phaseName] || hasActiveDay; // Auto-expand if active

                        return (
                            <div key={phaseName} className="space-y-1">
                                <button
                                    onClick={() => togglePhase(phaseName)}
                                    className="w-full flex items-center justify-between px-4 py-2 text-sm font-medium text-slate-600 hover:text-[var(--brand-primary)] transition-colors group"
                                >
                                    <span className="truncate">{phaseName}</span>
                                    <ChevronDown
                                        size={14}
                                        className={`transition-transform duration-200 ${isExpanded ? 'rotate-0' : '-rotate-90 text-slate-300'}`}
                                    />
                                </button>

                                {/* Lessons List */}
                                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="space-y-1 pl-2">
                                        {days.map(day => (
                                            <NavLink
                                                key={day.day}
                                                to={`/day/${day.day}`}
                                                className={({ isActive }) =>
                                                    `flex items-center gap-3 px-4 py-2 rounded-lg text-sm transition-all border border-transparent ${isActive
                                                        ? 'bg-white text-[var(--brand-primary)] border-slate-100 shadow-sm font-medium'
                                                        : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
                                                    }`
                                                }
                                            >
                                                <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-mono border ${localStorage.getItem(`day-${day.day}-completed`)
                                                        ? 'bg-green-100 border-green-200 text-green-600'
                                                        : 'bg-slate-50 border-slate-100 text-slate-400'
                                                    }`}>
                                                    {localStorage.getItem(`day-${day.day}-completed`) ? <CheckCircle2 size={12} /> : day.day}
                                                </div>
                                                <span className="truncate">{day.title}</span>
                                            </NavLink>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* User / Settings Footer */}
            <div className="p-4 border-t border-[var(--sidebar-border)] bg-gray-50/50">
                <div className="flex items-center gap-3 p-2 rounded-xl bg-white border border-gray-100 shadow-sm">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-200 to-yellow-400 flex items-center justify-center text-amber-700 font-bold text-xs">
                        S
                    </div>
                    <div className="flex-1 min-w-0">
                        <div className="text-sm font-bold text-slate-700 truncate">Student One</div>
                        <div className="text-xs text-slate-400">Pro Plan</div>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
