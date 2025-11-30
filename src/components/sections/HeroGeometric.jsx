import React from 'react';
import { motion } from 'framer-motion';
import { PrimaryButton } from '../ui/PrimaryButton';

function AbstractVisual() {
    return (
        <div className="relative w-full h-[400px] md:h-[600px] flex items-center justify-center">
            {/* Abstract Network/Shield Representation */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse" />

            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="relative z-10 w-64 h-64 md:w-96 md:h-96 border border-blue-500/30 rounded-full flex items-center justify-center"
            >
                <div className="absolute inset-0 border border-blue-400/20 rounded-full animate-[spin_10s_linear_infinite]" />
                <div className="absolute inset-4 border border-cyan-400/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                <div className="w-48 h-48 bg-gradient-to-br from-blue-600 to-slate-900 rounded-full flex items-center justify-center shadow-2xl shadow-blue-500/50">
                    <div className="w-32 h-32 bg-slate-950 rounded-full flex items-center justify-center">
                        <div className="w-4 h-4 bg-blue-400 rounded-full shadow-[0_0_20px_rgba(59,130,246,1)]" />
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

export function HeroGeometric({ title1, title2, subtitle, onCtaClick }) {
    return (
        <div className="relative min-h-screen w-full flex items-center bg-slate-950 pt-20 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-900/50 -skew-x-12 translate-x-1/4" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left Column: Text */}
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-400 text-sm font-medium mb-6">
                                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                                Enterprise-Grade Security
                            </div>

                            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight mb-6">
                                {title1} <span className="text-blue-500">{title2}</span>
                            </h1>

                            <p className="text-lg text-slate-400 mb-8 leading-relaxed max-w-lg">
                                {subtitle}
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <PrimaryButton onClick={onCtaClick}>
                                    Start Your Defense
                                </PrimaryButton>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Visual */}
                    <div className="hidden lg:block">
                        <AbstractVisual />
                    </div>

                </div>
            </div>
        </div>
    );
}
