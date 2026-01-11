import React from 'react';
import { EyeOff, Target, Fingerprint } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};

export function StatsSection() {
    const stats = [
        {
            icon: EyeOff,
            title: "Hidden Threats",
            description: "Traditional security can't see embedded vulnerabilities",
            stat: "85%",
            caption: "of attacks exploit unknown vulnerabilities"
        },
        {
            icon: Target,
            title: "Targeted Attacks",
            description: "Legacy tools can't detect malicious behavior patterns",
            stat: "93%",
            caption: "of breaches target SMBs"
        },
        {
            icon: Fingerprint,
            title: "Identity Theft",
            description: "Basic security can't distinguish legitimate access",
            stat: "1 in 4",
            caption: "businesses experience credential theft"
        }
    ];

    return (
        <section className="py-24 bg-slate-900 relative">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        The Threat Landscape Today
                    </h2>
                    <p className="text-lg text-slate-400 max-w-3xl mx-auto">
                        Modern threats operate beyond traditional security tools.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {stats.map((item, index) => (
                        <motion.div
                            key={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            variants={fadeInUp}
                            className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 text-white shadow-xl"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold">{item.title}</h3>
                            </div>

                            <p className="text-blue-100 mb-6 text-sm leading-relaxed">
                                {item.description}
                            </p>

                            <div className="border-t border-white/20 pt-6">
                                <div className="text-5xl font-bold mb-2">{item.stat}</div>
                                <div className="text-blue-200 text-sm">{item.caption}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
