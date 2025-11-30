import React from 'react';
import { Shield, Activity, Lock, Server, Cpu } from 'lucide-react';
import { BentoGrid, BentoCard } from '../ui/BentoGrid';

export function ServicesSection() {
    return (
        <section className="py-32 bg-slate-950 relative border-t border-slate-900/50">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-900/50 to-transparent"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">Comprehensive Protection</h2>
                    <p className="text-xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed">
                        We continuously monitor your environment, patch vulnerabilities, and hunt for active threats so you can focus on growth.
                    </p>
                </div>

                <BentoGrid className="lg:grid-rows-3 gap-6">
                    <BentoCard
                        name="Managed Security"
                        className="lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3 bg-gradient-to-b from-slate-900 to-slate-950"
                        Icon={Shield}
                        description="We look for hackers before they look for you. 24/7 SOC-backed threat hunting."
                        cta="See Protection Plans"
                        href="#"
                        background={<div className="absolute top-0 right-0 p-10 opacity-20 text-blue-900 blur-xl"><Shield size={200} /></div>}
                    />
                    <BentoCard
                        name="Proactive IT Management"
                        className="lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3 bg-gradient-to-br from-slate-900 to-slate-950"
                        Icon={Activity}
                        description="We fix issues in the background before they interrupt your day using self-healing technology."
                        cta="Learn More"
                        href="#"
                        background={<div className="absolute top-0 right-0 p-10 opacity-20 text-blue-900 blur-xl"><Activity size={200} /></div>}
                    />
                    <BentoCard
                        name="Compliance Ready"
                        className="lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4 bg-gradient-to-tr from-slate-900 to-slate-950"
                        Icon={Lock}
                        description="Secure backups, access control, and audit-friendly practices for all small businesses."
                        cta="Learn More"
                        href="#"
                        background={<div className="absolute top-0 right-0 p-10 opacity-20 text-blue-900 blur-xl"><Lock size={200} /></div>}
                    />
                    <BentoCard
                        name="Business Continuity"
                        className="lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2 bg-gradient-to-bl from-slate-900 to-slate-950"
                        Icon={Server}
                        description="Keep systems online with 99.9% uptime guarantees."
                        cta="Learn More"
                        href="#"
                        background={<div className="absolute top-0 right-0 p-10 opacity-20 text-blue-900 blur-xl"><Server size={200} /></div>}
                    />
                    <BentoCard
                        name="Zero Trust Architecture"
                        className="lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4 bg-gradient-to-t from-slate-900 to-slate-950"
                        Icon={Cpu}
                        description="Modern security that assumes breach and verifies every request."
                        cta="Learn More"
                        href="#"
                        background={<div className="absolute top-0 right-0 p-10 opacity-20 text-blue-900 blur-xl"><Cpu size={200} /></div>}
                    />
                </BentoGrid>
            </div>
        </section>
    );
}
