import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Linkedin, FileText } from 'lucide-react';

import { WorkedWith } from './WorkedWith';

const splitTextVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.05,
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1], // Custom ease for "Apple-like" feel
        },
    }),
};

export const Hero: React.FC = () => {
    const title = "Hello, I'm Jesse";
    
    // Pre-calculate structure with global indices for smooth stagger
    let globalCharIndex = 0;
    const words = title.split(' ').map(word => {
        const chars = word.split('').map(char => ({
            char,
            index: globalCharIndex++
        }));
        return { word, chars };
    });

    const { scrollY } = useScroll();
    const scale = useTransform(scrollY, [0, 500], [1, 0.9]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);
    const y = useTransform(scrollY, [0, 500], [0, 100]);

    return (
        <section id="home" className="min-h-screen flex flex-col relative overflow-hidden pt-20">
            <motion.div
                style={{ scale, opacity, y }}
                className="z-10 container mx-auto px-4 lg:px-8 flex-grow flex flex-col justify-center text-center lg:text-left items-center lg:items-start"
            >
                <h1 className="text-7xl md:text-9xl font-bold mb-8 flex flex-wrap justify-center lg:justify-start tracking-tight gap-x-6 gap-y-2">
                    {words.map((wordData, wordIndex) => (
                        <span key={wordIndex} className="inline-block whitespace-nowrap">
                            {wordData.chars.map((charData, charIndex) => (
                                <motion.span
                                    key={charIndex}
                                    custom={charData.index}
                                    initial="hidden"
                                    animate="visible"
                                    variants={splitTextVariants}
                                    className="inline-block"
                                >
                                    {charData.char}
                                </motion.span>
                            ))}
                        </span>
                    ))}
                </h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="max-w-3xl"
                >
                    <h2 className="text-3xl md:text-4xl text-secondary font-medium mb-6 tracking-tight">
                        Engineer | Architect | Founder
                    </h2>
                    <p className="text-xl md:text-2xl text-secondary/80 mb-10 leading-relaxed max-w-2xl">
                        Leading teams, designing systems that support 100s of millions of users,
                        and shipping Apps for both iOS & Android.
                        <br />
                        <span className="text-primary font-semibold mt-2 block">ex-Apple, ex-Credit Kudos</span>
                    </p>

                    <div className="flex gap-4 justify-center lg:justify-start">
                        <a
                            href="https://www.linkedin.com/in/jesse-murrell-23aa8b49/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-4 glass rounded-full hover:scale-105 hover:bg-white/20 transition-all duration-300 group"
                            aria-label="LinkedIn"
                        >
                            <Linkedin className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
                        </a>
                        <a
                            href="/assets/(12) Jesse Murrell | LinkedIn.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-4 glass rounded-full hover:scale-105 hover:bg-white/20 transition-all duration-300 group"
                            aria-label="Resume"
                        >
                            <FileText className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
                        </a>
                    </div>
                </motion.div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 1 }}
                className="w-full pb-8"
            >
                <WorkedWith />
            </motion.div>
        </section>
    );
};
