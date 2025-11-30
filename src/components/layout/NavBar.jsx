import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

export function NavBar({ items, activeTab, setActiveTab, className }) {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={cn("fixed top-0 left-1/2 -translate-x-1/2 z-50 pt-6 transition-all duration-300", className)}>
            <div className={cn(
                "flex items-center gap-3 border backdrop-blur-md py-1 px-1 rounded-full shadow-2xl transition-all duration-300",
                isScrolled
                    ? "bg-slate-950/80 border-slate-800/50"
                    : "bg-slate-900/40 border-slate-700/30"
            )}>
                {items.map((item) => {
                    const Icon = item.icon;
                    const isActive = activeTab === item.name;

                    return (
                        <button
                            key={item.name}
                            onClick={() => setActiveTab(item.name)}
                            className={cn(
                                "relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors",
                                "text-slate-400 hover:text-cyan-400",
                                isActive && "bg-slate-800/50 text-cyan-400"
                            )}
                        >
                            <span className="hidden md:inline">{item.name}</span>
                            <span className="md:hidden">
                                <Icon size={18} strokeWidth={2.5} />
                            </span>
                            {isActive && (
                                <motion.div
                                    layoutId="lamp"
                                    className="absolute inset-0 w-full bg-cyan-500/5 rounded-full -z-10"
                                    initial={false}
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                >
                                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-cyan-500 rounded-t-full">
                                        <div className="absolute w-12 h-6 bg-cyan-500/20 rounded-full blur-md -top-2 -left-2" />
                                        <div className="absolute w-8 h-6 bg-cyan-500/20 rounded-full blur-md -top-1" />
                                        <div className="absolute w-4 h-4 bg-cyan-500/20 rounded-full blur-sm top-0 left-2" />
                                    </div>
                                </motion.div>
                            )}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
