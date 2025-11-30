import React from 'react';
import { Clock, User, Globe, Search, Zap } from 'lucide-react';
import { GlowingGridItem } from '../ui/BentoGrid';

export function ApproachSection() {
    return (
        <section className="py-24 bg-slate-900 relative">
            <div className="absolute inset-0 bg-grid-white/[0.02] -z-10" />
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">The Modern Approach</h2>
                    <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                        Lean, Agile, and Always On. You shouldn't have to explain your business from scratch every time you call IT.
                    </p>
                </div>

                <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
                    <GlowingGridItem
                        area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
                        icon={<Clock className="h-6 w-6" />}
                        title="No Long Hold Times"
                        description="We respect your time. Get connected to an engineer instantly, not a queue."
                    />
                    <GlowingGridItem
                        area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
                        icon={<User className="h-6 w-6" />}
                        title="Direct Expert Access"
                        description="With Meshvera, you get a dedicated expert who knows your environment."
                    />
                    <GlowingGridItem
                        area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
                        icon={<Globe className="h-6 w-6" />}
                        title="No Overseas Call Centers"
                        description="Local experts who understand your context and speak your language."
                    />
                    <GlowingGridItem
                        area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
                        icon={<Search className="h-6 w-6" />}
                        title="No Jargon"
                        description="We explain things in plain English, focusing on business outcomes."
                    />
                    <GlowingGridItem
                        area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
                        icon={<Zap className="h-6 w-6" />}
                        title="Remote-First Speed"
                        description="We solve 95% of issues remotely within minutes, with on-site visits when absolutely needed."
                    />
                </ul>
            </div>
        </section>
    );
}
