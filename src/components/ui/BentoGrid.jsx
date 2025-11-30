import React from 'react';
import { ArrowRight } from 'lucide-react';
import { cn } from '../../lib/utils';
import { GlowCard } from './GlowCard';

export const BentoGrid = ({ children, className }) => (
    <div className={cn("grid w-full auto-rows-[22rem] grid-cols-1 md:grid-cols-3 gap-4", className)}>{children}</div>
);

export const BentoCard = ({ name, className, background, Icon, description, cta, href }) => (
    <div key={name} className={cn("group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl bg-slate-900 border border-slate-800 [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]", className)}>
        <a href={href} className="absolute inset-0 z-20 focus:outline-none" aria-label={name}>
            <span className="sr-only">View details for {name}</span>
        </a>
        <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none">{background}</div>
        <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
            <Icon className="h-12 w-12 origin-left transform-gpu text-blue-500 transition-all duration-300 ease-in-out group-hover:scale-75 group-hover:text-cyan-400" />
            <h3 className="text-xl font-semibold text-white">{name}</h3>
            <p className="max-w-lg text-slate-400">{description}</p>
        </div>
        <div className={cn("pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100")}>
            <span className="pointer-events-auto flex items-center text-sm font-medium text-cyan-400 hover:text-cyan-300">
                {cta} <ArrowRight className="ml-2 h-4 w-4" />
            </span>
        </div>
        <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-blue-900/[.05]" />
    </div>
);

export const GlowingGridItem = ({ area, icon, title, description }) => (
    <li className={cn("min-h-[14rem] list-none", area)}>
        <GlowCard glowColor="blue" className="h-full">
            <div className="relative flex h-full flex-col justify-between gap-6">
                <div className="relative flex flex-1 flex-col justify-between gap-3">
                    <div className="w-fit rounded-lg border-[0.75px] border-slate-800 bg-slate-900 p-2 text-blue-500">
                        {icon}
                    </div>
                    <div className="space-y-3">
                        <h3 className="pt-0.5 text-xl leading-[1.375rem] font-semibold font-sans tracking-[-0.04em] md:text-2xl md:leading-[1.875rem] text-balance text-white">
                            {title}
                        </h3>
                        <h2 className="[&_b]:md:font-semibold [&_strong]:md:font-semibold font-sans text-sm leading-[1.125rem] md:text-base md:leading-[1.375rem] text-slate-400">
                            {description}
                        </h2>
                    </div>
                </div>
            </div>
        </GlowCard>
    </li>
);
