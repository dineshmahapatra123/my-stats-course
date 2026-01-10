import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, Github, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col relative overflow-hidden">
            {/* Background Ambience */}
            <div className="fixed inset-0 z-[-1] pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[var(--accent-primary)] rounded-full blur-[120px] opacity-20"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[var(--accent-secondary)] rounded-full blur-[120px] opacity-20"></div>
            </div>

            <nav className="glass-panel m-4 sticky top-4 z-50">
                <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                    <Link to="/" className="flex items-center gap-2 font-bold text-xl group">
                        <div className="p-2 bg-[var(--accent-primary)] rounded-lg text-[var(--bg-primary)] group-hover:scale-110 transition-transform">
                            <Activity size={24} />
                        </div>
                        <span className="bg-gradient-to-r from-white to-[var(--accent-primary)] bg-clip-text text-transparent">
                            Stats<span className="text-[var(--accent-primary)]">Course</span>
                        </span>
                    </Link>

                    <div className="flex items-center gap-4">
                        <Link to="/" className="text-[var(--text-secondary)] hover:text-white transition-colors">
                            <BookOpen size={20} />
                        </Link>
                        <a href="https://github.com" target="_blank" rel="noreferrer" className="text-[var(--text-secondary)] hover:text-white transition-colors">
                            <Github size={20} />
                        </a>
                    </div>
                </div>
            </nav>

            <main className="flex-grow container mx-auto px-4 py-8 z-10">
                {children}
            </main>

            <footer className="py-8 text-center text-[var(--text-secondary)] text-sm">
                <p>© 2026 Data & Statistics Curriculum. Built with React & Vite.</p>
            </footer>
        </div>
    );
};

export default Layout;
