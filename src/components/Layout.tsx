import React, { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { DotGridBackground } from './DotGridBackground';

interface LayoutProps {
    children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        // Check system preference or local storage
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setIsDark(true);
        }
    }, []);

    useEffect(() => {
        console.log('Theme state changed:', { isDark, classList: document.documentElement.classList.toString() });
        if (isDark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        console.log('Theme applied. HTML classes:', document.documentElement.classList.toString());
    }, [isDark]);

    const toggleTheme = () => {
        console.log('Toggling theme. Current:', isDark);
        setIsDark(!isDark);
    };

    return (
        <div className="min-h-screen text-foreground transition-colors duration-300 relative">
            <DotGridBackground />
            <button
                onClick={toggleTheme}
                className="fixed top-6 right-6 z-50 p-2 rounded-full glass hover:bg-white/20 transition-all"
                aria-label="Toggle theme"
            >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <main className="container mx-auto px-4 py-8 md:py-12 lg:px-8 relative z-10">
                {children}
            </main>
        </div>
    );
};
