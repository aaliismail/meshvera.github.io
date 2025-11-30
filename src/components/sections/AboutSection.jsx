import React from 'react';
import { CheckCircle } from 'lucide-react';
import { PrimaryButton } from '../ui/PrimaryButton';

export function AboutSection() {
    return (
        <section className="py-32 bg-slate-900 relative">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Column: Content */}
                    <div>
                        <span className="text-blue-500 font-semibold tracking-wide uppercase text-sm">About Meshvera</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mt-3 mb-6">Built for the Modern Enterprise</h2>

                        <p className="text-lg text-slate-400 mb-6 leading-relaxed">
                            Meshvera was founded to bridge the gap between Fortune 500 security standards and the agility required by modern businesses. We don't just fix computers; we architect resilient digital ecosystems.
                        </p>

                        <div className="space-y-4 mb-8">
                            <div className="flex items-start gap-3">
                                <CheckCircle className="w-6 h-6 text-blue-500 shrink-0 mt-1" />
                                <div>
                                    <h4 className="text-white font-semibold">Proactive Defense</h4>
                                    <p className="text-slate-400 text-sm">We stop threats before they impact your operations.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle className="w-6 h-6 text-blue-500 shrink-0 mt-1" />
                                <div>
                                    <h4 className="text-white font-semibold">Strategic Partnership</h4>
                                    <p className="text-slate-400 text-sm">We align IT strategy with your business objectives.</p>
                                </div>
                            </div>
                        </div>

                        <PrimaryButton>Learn More About Us</PrimaryButton>
                    </div>

                    {/* Right Column: Image Placeholder */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-blue-500/10 rounded-2xl transform rotate-3" />
                        <div className="relative bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 shadow-2xl aspect-[4/3] flex items-center justify-center group">
                            {/* Placeholder for an office or team image */}
                            <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900" />
                            <div className="relative z-10 text-center p-8">
                                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                    <span className="text-2xl">🏢</span>
                                </div>
                                <p className="text-slate-400 font-medium">Enterprise Operations Center</p>
                                <p className="text-slate-500 text-sm mt-2">New Jersey, USA</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
