import React from 'react';
import { CheckCircle, Shield, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
};

export function AboutSection() {
    return (
        <section className="py-32 bg-slate-900 relative overflow-hidden">
            {/* Background decoration - keeping your blue theme */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
                <motion.div
                    className="max-w-4xl mx-auto text-center mb-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    variants={fadeInUp}
                >
                    <span className="text-blue-500 font-semibold tracking-wide uppercase text-sm">About Meshvera</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mt-3 mb-6">Enterprise-Grade Protection</h2>
                    <p className="text-lg text-slate-400 leading-relaxed">
                        Fortune 500 security standards. Startup agility. We architect resilient IT ecosystems.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    <motion.div
                        className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-colors"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        variants={fadeInUp}
                    >
                        <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4">
                            <Shield className="w-6 h-6 text-blue-400" />
                        </div>
                        <h4 className="text-white font-bold text-xl mb-2">Proactive Defense</h4>
                        <p className="text-slate-400">We stop threats before they impact your operations.</p>
                    </motion.div>

                    <motion.div
                        className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-colors"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        variants={fadeInUp}
                    >
                        <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4">
                            <Users className="w-6 h-6 text-blue-400" />
                        </div>
                        <h4 className="text-white font-bold text-xl mb-2">Strategic Partnership</h4>
                        <p className="text-slate-400">We align IT strategy with your business objectives.</p>
                    </motion.div>

                    <motion.div
                        className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-colors"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        variants={fadeInUp}
                    >
                        <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4">
                            <CheckCircle className="w-6 h-6 text-blue-400" />
                        </div>
                        <h4 className="text-white font-bold text-xl mb-2">Proven Expertise</h4>
                        <p className="text-slate-400">Based in New Jersey, serving businesses nationwide.</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
