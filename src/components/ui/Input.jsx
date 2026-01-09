import React from "react";
import { cn } from "../../lib/utils";

export const Input = React.forwardRef(({ className, type, ...props }, ref) => {
    return (
        <input
            type={type}
            className={cn(
                "flex h-9 w-full rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-sm text-white shadow-sm shadow-black/5 transition-shadow placeholder:text-slate-400 focus-visible:border-blue-500 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-blue-500/20 disabled:cursor-not-allowed disabled:opacity-50",
                type === "search" &&
                "[&::-webkit-search-cancel-button]:appearance-none [&::-webkit-search-decoration]:appearance-none [&::-webkit-search-results-button]:appearance-none [&::-webkit-search-results-decoration]:appearance-none",
                type === "file" &&
                "p-0 pr-3 italic text-slate-400 file:me-3 file:h-full file:border-0 file:border-r file:border-solid file:border-slate-800 file:bg-transparent file:px-3 file:text-sm file:font-medium file:not-italic file:text-white",
                className
            )}
            ref={ref}
            {...props}
        />
    );
});

Input.displayName = "Input";
