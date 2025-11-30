import React from 'react';
import './GlowingShadow.css';

export function GlowingShadow({ children, className, onClick, ...props }) {
    const handleKeyDown = (e) => {
        if (onClick && (e.key === 'Enter' || e.key === ' ')) {
            e.preventDefault();
            onClick(e);
        }
    };

    return (
        <div
            className={`glow-container ${className || ''}`}
            role={onClick ? "button" : undefined}
            tabIndex={onClick ? 0 : undefined}
            onClick={onClick}
            onKeyDown={handleKeyDown}
            {...props}
        >
            <span className="glow"></span>
            <div className="glow-content">{children}</div>
        </div>
    );
}
