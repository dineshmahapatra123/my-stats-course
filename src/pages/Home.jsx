import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { curriculum } from '../data/curriculum';
import { ChevronRight } from 'lucide-react';

const Home = () => {
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
        <div className="min-h-screen bg-[var(--main-bg)]">

            {/* Hero Banner (The Dark Blue Header) */}
            <div className="bg-[var(--hero-gradient)] text-white p-8 md:p-12 shadow-lg mb-8">
                <div className="max-w-5xl mx-auto">
                    <h1 className="text-white text-3xl md:text-4xl font-bold mb-4">Welcome back, Student.</h1>
                    <p className="text-indigo-200 text-lg mb-8 max-w-2xl">
                        You are on Phase 1 of the 60-Day Statistical Mastery curriculum. Continue your progress.
                    </p>
                    <Link to="/day/1" className="btn-hero text-indigo-900">
                        Start Your Journey <ChevronRight size={16} />
                    </Link>
                </div>
            </div>

            {/* Main Content Container */}
            <div className="max-w-6xl mx-auto px-6 pb-20">

                {/* Phase Header */}
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#0ea5e9] text-white flex items-center justify-center font-bold text-xl shadow-lg shadow-sky-500/30">
                        1
                    </div>
                    <div>
                        <h2 className="text-2xl text-slate-900">Foundation & Strategy</h2>
                        <p className="text-slate-500 font-medium">Days 1-15 • Strategy & Execution</p>
                    </div>
                </div>

                {/* The Card Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {curriculum.slice(0, 8).map(day => (
                        <Link
                            key={day.day}
                            to={`/day/${day.day}`}
                            className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all h-full flex flex-col group"
                        >
                            <div className="mb-4">
                                <span className="inline-block px-2 py-1 rounded bg-slate-100 text-slate-500 text-[10px] font-bold uppercase tracking-wider group-hover:bg-sky-50 group-hover:text-sky-600 transition-colors">
                                    Day {day.day}
                                </span>
                            </div>

                            <h3 className="text-lg font-bold text-slate-900 mb-3 leading-tight group-hover:text-[#0ea5e9] transition-colors">
                                {day.title}
                            </h3>

                            <p className="text-sm text-slate-500 line-clamp-3 leading-relaxed">
                                {day.summary}
                            </p>
                        </Link>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Home;
