import React from 'react';
import { motion } from 'framer-motion';
import { PrimaryButton } from '../ui/PrimaryButton';

const CircularVisual = () => (
    <div className="relative w-full h-full flex items-center justify-center">
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative"
        >
            {/* Outer ring */}
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border border-blue-600/20 flex items-center justify-center">
                {/* Middle ring */}
                <div className="w-48 h-48 md:w-60 md:h-60 rounded-full border border-blue-600/30 flex items-center justify-center">
                    {/* Inner core */}
                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center shadow-lg shadow-blue-600/20">
                        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-navy-950 flex items-center justify-center">
                            <div className="w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_20px_rgba(59,130,246,0.8)]" />
                        </div>
                    </div>
                </div>
            </div>
            {/* Subtle rotating ring */}
            <div className="absolute inset-0 w-64 h-64 md:w-80 md:h-80 border border-blue-600/10 rounded-full animate-[spin_20s_linear_infinite]" />
        </motion.div>
    </div>
);

export function HeroGeometric({ title1, title2, subtitle, onCtaClick }) {
    return (
        <div className="relative min-h-screen w-full flex items-center bg-navy-950 pt-20">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(36,99,235,0.05),transparent_50%)]" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left: Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-2xl"
                    >
                        <h1 className="text-5xl md:text-7xl font-bold text-slate-50 tracking-tight leading-none mb-8">
                            {title1}{' '}
                            <span className="text-blue-600 block mt-2">{title2}</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-slate-400 mb-12 leading-relaxed max-w-xl">
                            {subtitle}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <PrimaryButton onClick={onCtaClick} className="text-lg px-8 py-6">
                                Get Free Consultation
                            </PrimaryButton>
                        </div>
                    </motion.div>

                    {/* Right: Circular Visual */}
                    <div className="hidden lg:flex justify-center">
                        <CircularVisual />
                    </div>
                </div>

                {/* Simple decorative line */}
                <div className="mt-20 flex justify-center lg:justify-start lg:pl-0">
                    <div className="w-1 h-16 bg-gradient-to-b from-blue-600/50 to-transparent rounded-full" />
                </div>
            </div>
        </div>
    );
}
