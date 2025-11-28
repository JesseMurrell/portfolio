import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Import Assets
import kulinaryLogo from '../assets/project_assets/kulinary/Kulinary Coloured Vertical.svg';
import kulinaryScreenshot1 from '../assets/project_assets/kulinary/screnshot1.png';
import kulinaryScreenshot2 from '../assets/project_assets/kulinary/Screenshot2.png';

export const KulinaryProject: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);

    return (
        <div ref={containerRef} className="w-full max-w-7xl mx-auto py-10 px-4 md:px-8">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="mb-4 ml-2"
            >
                <span className="text-sm font-medium text-blue-400 tracking-wide uppercase">Co-Founder</span>
            </motion.div>

            <motion.div 
                style={{ opacity, y }}
                className="flex flex-col gap-8"
            >
                {/* Top Card - Project Explanation */}
                <div className="bg-[#1c1c1e]/80 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-10 border border-white/10 shadow-2xl flex flex-col md:flex-row gap-8 justify-between min-h-[400px]">
                    <div className="flex flex-col justify-between flex-1">
                        <div className="w-20 h-20 rounded-2xl flex items-center justify-center mb-8 overflow-hidden bg-white p-2">
                            <img src={kulinaryLogo} alt="Kulinary Logo" className="w-full h-full object-contain" />
                        </div>
                        
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                            Kulinary
                        </h2>
                        
                        <p className="text-xl text-gray-300 leading-relaxed mb-8">
                            Tired of converting recipe measurements? Kulinary simplifies your cooking experience by automatically converting any recipe’s native metrics into a standardized format like grams.
                        </p>
                    </div>
                    
                    <div className="flex-1 flex flex-col justify-center">
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2.5 flex-shrink-0" />
                                <div>
                                    <h4 className="text-white font-semibold text-lg mb-1">Smart Conversion</h4>
                                    <p className="text-gray-400">Automatically converts cups, ounces, and other regional units into grams for precise cooking.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5 flex-shrink-0" />
                                <div>
                                    <h4 className="text-white font-semibold text-lg mb-1">Clean Ingredients</h4>
                                    <p className="text-gray-400">Extracts and neatly displays ingredient lists, removing clutter and distractions.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2.5 flex-shrink-0" />
                                <div>
                                    <h4 className="text-white font-semibold text-lg mb-1">Universal Support</h4>
                                    <p className="text-gray-400">Works seamlessly on popular recipe sites and blogs to enhance your cooking workflow.</p>
                                </div>
                            </div>
                        </div>

                         <div className="flex flex-wrap gap-3 mt-8">
                            {['Chrome Extension', 'React', 'TypeScript', 'Cooking'].map((tag) => (
                                <span key={tag} className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-gray-300">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Card - Browser Preview */}
                <div className="bg-[#1c1c1e]/80 backdrop-blur-xl rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl flex flex-col h-[600px] relative group">
                    {/* Browser Bar Mockup */}
                    <div className="bg-[#2c2c2e] px-6 py-4 border-b border-white/10 flex items-center gap-4">
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500/20" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                            <div className="w-3 h-3 rounded-full bg-green-500/20" />
                        </div>
                        <div className="flex-1 bg-[#1c1c1e] rounded-lg h-8 mx-4 border border-white/5 flex items-center px-4 text-xs text-gray-500 font-mono">
                            kulinary.extension
                        </div>
                    </div>

                    {/* Content Area */}
                    <div className="relative flex-grow bg-[#1c1c1e] overflow-hidden flex flex-col">
                        {/* Main Screenshot */}
                        <div className="relative z-10 p-8 pb-0 flex-grow flex flex-col">
                            <div className="bg-white rounded-t-xl shadow-2xl overflow-hidden transform translate-y-4 border border-white/10 flex-grow relative">
                                <img 
                                    src={kulinaryScreenshot2} 
                                    alt="Kulinary Interface" 
                                    className="w-full h-full object-cover object-top"
                                />
                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                            </div>
                        </div>

                        {/* Floating Add to Chrome Button - Top Right */}
                        <div className="absolute top-6 right-6 z-30">
                             <a 
                                href="https://chromewebstore.google.com/detail/kulinary/mpjdadlofjgdhlaocbdjohlmmffekpan"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-2 bg-[#0066cc] hover:bg-[#0052a3] text-white rounded-full font-medium transition-all shadow-lg hover:shadow-blue-500/20 border border-white/10 backdrop-blur-md"
                            >
                                <span className="text-sm">Add to Chrome</span>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};
