import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { projects } from './Projects';

export const Nav: React.FC = () => {
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
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

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
            { threshold: 0.2, rootMargin: '-20% 0px -35% 0px' }
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
            {/* Top Scroll Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-50"
                style={{ scaleX }}
            />

            {/* Side Navigation */}
            <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
                <ul className="flex flex-col gap-6">
                    {navItems.map((item) => (
                        <li key={item.id} className="relative">
                            <button
                                onClick={() => scrollToSection(item.id)}
                                className={`text-sm font-medium transition-colors duration-300 ${activeSection === item.id || item.subItems?.some(sub => sub.id === activeSection)
                                    ? 'text-primary'
                                    : 'text-secondary hover:text-foreground'
                                    }`}
                            >
                                {item.label}
                            </button>

                            {/* Active Indicator for Main Items */}
                            {(activeSection === item.id || item.subItems?.some(sub => sub.id === activeSection)) && (
                                <motion.div
                                    layoutId="activeNav"
                                    className="absolute -left-4 top-1.5 w-1.5 h-1.5 rounded-full bg-primary"
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}

                            {/* Sub-items */}
                            {item.subItems && (
                                <ul className="mt-2 ml-4 flex flex-col gap-2 border-l border-white/10 pl-4">
                                    {item.subItems.map((subItem) => (
                                        <li key={subItem.id} className="relative">
                                            <button
                                                onClick={() => scrollToSection(subItem.id)}
                                                className={`text-xs transition-colors duration-300 text-left ${activeSection === subItem.id
                                                    ? 'text-primary font-medium'
                                                    : 'text-secondary/60 hover:text-foreground'
                                                    }`}
                                            >
                                                {subItem.label}
                                            </button>

                                            {activeSection === subItem.id && (
                                                <motion.div
                                                    layoutId="activeSubNav"
                                                    className="absolute -left-[17px] top-1.5 w-1 h-1 rounded-full bg-primary"
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
            </nav>
        </>
    );
};
