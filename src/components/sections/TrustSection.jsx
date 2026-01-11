import React from 'react';
import { Shield, Clock, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};

export function TrustSection() {
    const stats = [
        {
            icon: Shield,
            value: "99.9%",
            label: "Uptime SLA"
        },
        {
            icon: Clock,
            value: "24/7",
            label: "Expert Support"
        },
        {
            icon: Award,
            value: "Enterprise",
            label: "Grade Security"
        }
    ];

    return (
        <section className="py-16 bg-slate-900/50 border-y border-slate-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, staggerChildren: 0.1 }}
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            variants={fadeInUp}
                            className="text-center"
                        >
                            <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600/20 rounded-lg mb-4">
                                <stat.icon className="w-6 h-6 text-blue-400" />
                            </div>
                            <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                                {stat.value}
                            </div>
                            <div className="text-slate-400">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
