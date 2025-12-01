import React, { useEffect, useState, useContext } from 'react';
import { motion } from 'framer-motion';
import { projects } from './Projects';
import { ThemeContext } from './Layout';
import { Moon, Sun } from 'lucide-react';

export const Nav: React.FC = () => {
    const { isDark, toggleTheme } = useContext(ThemeContext);
    const navItems = React.useMemo(() => [
        { id: 'home', label: 'Home' },
        {
            id: 'projects',
            label: 'Recent Work',
            subItems: projects.map(p => ({ id: p.id, label: p.title }))
        },
        { id: 'contact', label: 'Contact' },
    ], []);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        console.log('Active section:', entry.target.id);
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.1, rootMargin: '-40% 0px -40% 0px' }
        );

        // Observe main sections and project subsections
        navItems.forEach((item) => {
            const element = document.getElementById(item.id);
            if (element) observer.observe(element);

            item.subItems?.forEach(subItem => {
                const subElement = document.getElementById(subItem.id);
                if (subElement) observer.observe(subElement);
            });
        });

        return () => observer.disconnect();
    }, [navItems]);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            // Use 'center' alignment for specific project sections like 'apple' to ensure they are vertically centered
            // Use 'start' for main sections or longer content lists
            const shouldCenter = ['apple', 'home', 'contact'].includes(id) || projects.some(p => p.id === id);
            
            element.scrollIntoView({ 
                behavior: 'smooth',
                block: shouldCenter ? 'center' : 'start'
            });
        }
    };

    return (
        <>
            {/* Side Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md p-4 flex items-center justify-between border-b border-white/10 lg:fixed lg:left-8 lg:right-auto lg:top-1/2 lg:-translate-y-1/2 lg:bg-transparent lg:backdrop-blur-none lg:p-0 lg:flex-col lg:border-none lg:overflow-visible lg:w-auto lg:h-auto lg:justify-start lg:items-start">
                <div className="flex-grow overflow-x-auto overflow-y-hidden scrollbar-hide lg:overflow-visible lg:w-auto">
                    <ul className="flex flex-row lg:flex-col gap-6 items-center lg:items-start min-w-max px-4 lg:px-0 lg:pl-6">
                        {navItems.map((item) => (
                            <li key={item.id} className="relative">
                                <button
                                    onClick={() => scrollToSection(item.id)}
                                    className={`text-sm font-medium transition-colors duration-300 ${activeSection === item.id || item.subItems?.some(sub => sub.id === activeSection)
                                        ? 'text-primary'
                                        : 'text-zinc-600 dark:text-zinc-400 hover:text-foreground'
                                        }`}
                                >
                                    {item.label}
                                </button>

                                {/* Active Indicator for Main Items */}
                                {(activeSection === item.id || item.subItems?.some(sub => sub.id === activeSection)) && (
                                    <motion.div
                                        layoutId="activeNav"
                                        className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 lg:w-1.5 lg:h-1.5 lg:-left-6 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-0 rounded-full bg-primary"
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}

                                {/* Sub-items */}
                                {item.subItems && (
                                    <ul className="hidden lg:flex mt-2 ml-4 flex-col gap-2 border-l border-white/10 pl-4">
                                        {item.subItems.map((subItem) => (
                                            <li key={subItem.id} className="relative">
                                                <button
                                                    onClick={() => scrollToSection(subItem.id)}
                                                    className={`text-xs transition-colors duration-300 text-left ${activeSection === subItem.id
                                                        ? 'text-primary font-medium'
                                                        : 'text-zinc-500 dark:text-zinc-500 hover:text-foreground'
                                                        }`}
                                                >
                                                    {subItem.label}
                                                </button>

                                                {activeSection === subItem.id && (
                                                    <motion.div
                                                        layoutId="activeSubNav"
                                                        className="absolute -left-[17px] top-2 w-1 h-1 rounded-full bg-primary"
                                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                                    />
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Mobile Theme Toggle */}
                <button
                    onClick={toggleTheme}
                    className="p-2 rounded-full glass hover:bg-white/20 transition-all ml-4 lg:hidden flex-shrink-0"
                    aria-label="Toggle theme"
                >
                    {isDark ? <Sun size={16} /> : <Moon size={16} />}
                </button>
            </nav>
        </>
    );
};
