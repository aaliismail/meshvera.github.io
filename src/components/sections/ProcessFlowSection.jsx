import React from 'react';
import { Search, Shield, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};

export function ProcessFlowSection() {
    const steps = [
        {
            icon: Search,
            label: "Discover",
            color: "bg-blue-600"
        },
        {
            icon: Shield,
            label: "Secure",
            color: "bg-navy-950"
        },
        {
            icon: Zap,
            label: "Optimize",
            color: "bg-blue-600"
        }
    ];

    return (
        <section className="py-24 bg-navy-950 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Left: Flow Diagram */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            className="relative"
                        >
                            {/* Connecting Line */}
                            <div className="absolute left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-blue-500/0 via-blue-500/50 to-blue-500/0 -translate-x-1/2" />

                            <div className="space-y-12 relative">
                                {steps.map((step, index) => (
                                    <div key={index} className="relative flex items-center justify-center">
                                        <motion.div
                                            whileHover={{ scale: 1.05 }}
                                            className="
                                                relative z-10 w-48 p-6 rounded-2xl border backdrop-blur-sm transition-all duration-300
                                                bg-blue-600/10 border-blue-500/50 shadow-[0_0_30px_rgba(37,99,235,0.2)]
                                                hover:shadow-[0_0_40px_rgba(37,99,235,0.4)] hover:bg-blue-600/20
                                            "
                                        >
                                            <div className="
                                                w-12 h-12 mx-auto mb-3 rounded-xl flex items-center justify-center
                                                bg-blue-500 text-white shadow-lg
                                            ">
                                                <step.icon className="w-6 h-6" />
                                            </div>
                                            <div className="text-center font-semibold text-blue-100">
                                                {step.label}
                                            </div>

                                            {/* Glow effect */}
                                            <div className="absolute inset-0 rounded-2xl bg-blue-500/10 blur-xl -z-10" />
                                        </motion.div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Right: Content */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            variants={fadeInUp}
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-500/30 self-start mb-6">
                                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                                <span className="text-sm font-medium text-blue-300">Simplified Security</span>
                            </div>

                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                                Modern Security <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">
                                    Architecture
                                </span>
                            </h2>
                            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                                We've reimagined managed security to be proactive, not reactive. By integrating discovery, protection, and optimization into a continuous cycle.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {[
                                    { title: "Proactive Defense", desc: "Stops threats before they act" },
                                    { title: "Real-time Analytics", desc: "Instant visibility into risks" }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="w-1 h-full bg-gradient-to-b from-blue-500 to-transparent rounded-full" />
                                        <div>
                                            <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                                            <p className="text-sm text-slate-500">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
