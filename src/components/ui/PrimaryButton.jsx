import React from 'react';
import { cn } from '../../lib/utils';
import { GlowingShadow } from './GlowingShadow';

export function PrimaryButton({ children, className, onClick, ...props }) {
    return (
        <GlowingShadow
            className={cn(
                "text-sm font-semibold text-white",
                className
            )}
            onClick={onClick}
            {...props}
        >
            {children}
        </GlowingShadow>
    );
}
