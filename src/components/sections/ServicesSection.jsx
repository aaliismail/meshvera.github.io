import React from 'react';
import { Shield, Activity, Lock, Server, Cpu, CheckCircle } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description }) => (
    <div className="group relative bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1">
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl group-hover:bg-blue-500/10 transition-all" />
        <div className="relative">
            <div className="w-14 h-14 bg-blue-600/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600/30 transition-colors">
                <Icon className="w-7 h-7 text-blue-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
            <p className="text-slate-400 leading-relaxed">{description}</p>
        </div>
    </div>
);

export function ServicesSection() {
    const services = [
        {
            icon: Shield,
            title: "Managed Security (MDR)",
            description: "24/7 threat hunting and incident response backed by our Security Operations Center."
        },
        {
            icon: Activity,
            title: "Proactive IT Management",
            description: "Regular maintenance, patching, and monitoring to prevent issues before they impact your business."
        },
        {
            icon: Lock,
            title: "Compliance & Audits",
            description: "Meet industry standards with our comprehensive security compliance programs."
        },
        {
            icon: Server,
            title: "Infrastructure Support",
            description: "Expert management of your servers, networks, and cloud environments."
        },
        {
            icon: Cpu,
            title: "Endpoint Protection",
            description: "Enterprise-grade antivirus, malware protection, and device management."
        },
        {
            icon: CheckCircle,
            title: "Backup & Recovery",
            description: "Automated backup solutions with regular testing to ensure your data is protected."
        }
    ];

    return (
        <section className="py-32 bg-navy-950 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-6">Comprehensive IT Solutions</h2>
                    <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                        We deliver enterprise-grade security and management tailored for modern businesses.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))}
                </div>
            </div>
        </section>
    );
}
