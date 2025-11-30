import React from 'react';
import { Shield } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-black text-white py-12 border-t border-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <div className="flex items-center mb-2">
                            <Shield className="h-6 w-6 text-blue-500 mr-2" />
                            <span className="text-xl font-bold tracking-tight">Meshvera</span>
                        </div>
                        <p className="text-slate-500 text-sm">Enterprise-grade security for modern small businesses.</p>
                    </div>
                    <div className="flex gap-6 text-sm text-slate-400">
                        <a href="#" className="hover:text-cyan-400 transition-colors">Privacy</a>
                        <a href="#" className="hover:text-cyan-400 transition-colors">Terms</a>
                        <a href="#" className="hover:text-cyan-400 transition-colors">Contact</a>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-slate-900 text-center md:text-left text-slate-700 text-xs">
                    © {new Date().getFullYear()} Meshvera Managed Services. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
