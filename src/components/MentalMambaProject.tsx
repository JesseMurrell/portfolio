import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Import Assets
import mmLogo from '../assets/project_assets/mental_mamba/heart-logo.svg';
import mmVideo from '../assets/project_assets/mental_mamba/gameplay_video_30_trimmed_encoded_silent.mov';
import mmHome from '../assets/project_assets/mental_mamba/home_formatted_clean.jpeg';
import mmMathsQuest from '../assets/project_assets/mental_mamba/maths_quest_formatted_clean.jpeg';
import mmMultiplication from '../assets/project_assets/mental_mamba/multiplication_formatted_clean.jpeg';
import mmDetails from '../assets/project_assets/mental_mamba/details_summary_formatted_clean.jpeg';

import appleLogo from '../assets/company_logos/apple-white.svg';
import playStoreLogo from '../assets/company_logos/playstore.svg';

export const MentalMambaProject: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);

    const screenshots = [
        { type: 'video', src: mmVideo },
        { type: 'image', src: mmHome },
        { type: 'image', src: mmMathsQuest },
        { type: 'image', src: mmMultiplication },
        { type: 'image', src: mmDetails },
    ];

    return (
        <div ref={containerRef} className="w-full max-w-7xl mx-auto py-10 px-4 md:px-8">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="mb-4 ml-2"
            >
                <span className="text-sm font-medium text-blue-400 tracking-wide uppercase">Solo Founder</span>
            </motion.div>

            <motion.div 
                style={{ opacity, y }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            >
                {/* Left Card - Project Explanation */}
                <div className="bg-white/80 dark:bg-[#1c1c1e]/80 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-10 border border-black/5 dark:border-white/10 shadow-2xl flex flex-col justify-between h-full">
                    <div>
                        <div className="w-20 h-20 rounded-2xl flex items-center justify-center mb-8">
                            <img src={mmLogo} alt="Mental Mamba Logo" className="w-16 h-16" />
                        </div>
                        
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
                            Mental Mamba
                        </h2>
                        
                        <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                            A retro-style arcade game that blends classic snake gameplay with fast-paced mental math challenges. Designed to train your brain under pressure while delivering pure arcade fun.
                        </p>

                        <div className="space-y-6 mb-10">
                            <div className="flex items-start gap-4">
                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5" />
                                <div>
                                    <h4 className="text-gray-900 dark:text-white font-semibold text-lg mb-1">Maths Quest</h4>
                                    <p className="text-gray-500 dark:text-gray-400">Over 140 structured learning modules covering addition, subtraction, multiplication, and division.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2.5" />
                                <div>
                                    <h4 className="text-gray-900 dark:text-white font-semibold text-lg mb-1">Arcade Mode</h4>
                                    <p className="text-gray-500 dark:text-gray-400">Race against time in high-intensity challenges where speed and accuracy determine your score.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2.5" />
                                <div>
                                    <h4 className="text-gray-900 dark:text-white font-semibold text-lg mb-1">Cross-Platform</h4>
                                    <p className="text-gray-500 dark:text-gray-400">Seamlessly sync progress across iOS and Android devices with cloud save.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-3 mt-auto">
                        {['React Native', 'Swift', 'GameKit', 'AWS', 'RevenueCat'].map((tag) => (
                            <span key={tag} className="px-4 py-1.5 rounded-full bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 text-sm font-medium text-gray-600 dark:text-gray-300">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Right Card - Slim App Store */}
                <div className="bg-white/80 dark:bg-[#1c1c1e]/80 backdrop-blur-xl rounded-[2.5rem] overflow-hidden border border-black/5 dark:border-white/10 shadow-2xl flex flex-col h-[800px]">
                    {/* Header */}
                    <div className="p-8 pb-0">
                        <div className="flex gap-5 items-center mb-6">
                            <div className="w-24 h-24 rounded-[22%] overflow-hidden border border-black/5 dark:border-white/10 shadow-lg bg-gray-100 dark:bg-black flex-shrink-0">
                                <img src={mmLogo} alt="Mental Mamba Logo" className="w-full h-full object-cover p-3" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">Mental Mamba</h3>
                                <p className="text-gray-500 dark:text-gray-400 font-medium text-sm mb-3">Retro Snake Math Game</p>
                                <div className="flex gap-2">
                                    <a 
                                        href="https://apps.apple.com/gb/app/mental-mamba/id6743010712"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1.5 px-3 py-1.5 bg-[#007AFF] hover:bg-[#0062cc] text-white rounded-full transition-colors shadow-lg shadow-blue-900/20"
                                        aria-label="Download on the App Store"
                                    >
                                        <img src={appleLogo} alt="App Store" className="w-auto h-3.5" />
                                        <span className="text-[10px] font-bold uppercase tracking-wide">Get</span>
                                    </a>
                                    <a 
                                        href="https://play.google.com/store/apps/details?id=com.jessekmurrell.mentalmamba"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-800 hover:bg-gray-700 dark:bg-[#3c4043] dark:hover:bg-[#4a4e52] text-white rounded-full transition-colors border border-black/5 dark:border-white/10"
                                        aria-label="Get it on Google Play"
                                    >
                                        <img src={playStoreLogo} alt="Google Play" className="w-3.5 h-3.5" />
                                        <span className="text-[10px] font-bold uppercase tracking-wide">Get</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Stats */}
                        <div className="flex justify-between border-t border-b border-black/5 dark:border-white/10 py-4 mb-6 overflow-x-auto">
                            <div className="px-4 text-right border-r border-black/5 dark:border-white/10 last:border-0">
                                <div className="text-[10px] font-bold text-gray-500 mb-0.5">5 STARS</div>
                                <div className="text-lg font-bold text-gray-900 dark:text-gray-300">★★★★★</div>
                            </div>
                            <div className="px-4 text-right border-r border-black/5 dark:border-white/10 last:border-0">
                                <div className="text-[10px] font-bold text-gray-500 mb-0.5">AGE</div>
                                <div className="text-lg font-bold text-gray-900 dark:text-gray-300">4+</div>
                            </div>
                            <div className="px-4 text-right border-r border-black/5 dark:border-white/10 last:border-0">
                                <div className="text-[10px] font-bold text-gray-500 mb-0.5">CATEGORY</div>
                                <div className="text-lg font-bold text-gray-900 dark:text-gray-300">Education, Puzzle</div>
                            </div>
                        </div>
                    </div>

                    {/* Vertical Scrolling Content */}
                    <div className="overflow-y-auto flex-grow hide-scrollbar relative">
                        {/* Gallery - Horizontal Scroll */}
                        <div className="overflow-x-auto pl-8 pb-8 hide-scrollbar w-full">
                            <div className="flex gap-4 w-max pr-8">
                                {screenshots.map((item, index) => (
                                    <div
                                        key={index}
                                        className="w-[220px] h-[480px] rounded-[2rem] overflow-hidden bg-gray-100 dark:bg-black/50 border border-black/5 dark:border-white/10 flex-shrink-0 relative"
                                    >
                                        {item.type === 'video' ? (
                                            <video 
                                                src={item.src}
                                                autoPlay 
                                                loop 
                                                muted 
                                                playsInline
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            <img 
                                                src={item.src} 
                                                alt={`Screenshot ${index}`} 
                                                className="w-full h-full object-cover"
                                            />
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Description & What's New */}
                        <div className="px-8 pb-8">
                             <div className="mb-8">
                                <div className="flex justify-between items-baseline mb-3">
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">What's New</h3>
                                    <span className="text-[#007AFF] text-sm font-medium">Version 2.0</span>
                                </div>
                                <div className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                                    <p className="font-medium text-gray-900 dark:text-white mb-1">Maths Quest Update!</p>
                                    <p>Transform your mental arithmetic with our biggest update yet. Maths Quest brings over 140 structured learning modules.</p>
                                </div>
                            </div>

                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm mb-8">
                                Mental Mamba is a retro-style arcade game that blends classic snake gameplay with fast-paced mental math challenges. Collect the right answer to math problems to grow your snake — but choose wrong and you'll lose a life.
                            </p>

                            {/* Download Buttons */}
                            <div className="space-y-3">
                                <a 
                                    href="https://apps.apple.com/gb/app/mental-mamba/id6743010712"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-3 w-full py-3 bg-gray-100 dark:bg-[#1c1c1e] border border-black/5 dark:border-white/20 hover:bg-gray-200 dark:hover:bg-white/5 text-gray-900 dark:text-white rounded-xl font-medium transition-all group"
                                >
                                    <img src={appleLogo} alt="Apple" className="w-5 h-5 opacity-80 group-hover:opacity-100 invert dark:invert-0" />
                                    Download on the App Store
                                </a>
                                <a 
                                    href="https://play.google.com/store/apps/details?id=com.jessekmurrell.mentalmamba"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-3 w-full py-3 bg-gray-100 dark:bg-[#1c1c1e] border border-black/5 dark:border-white/20 hover:bg-gray-200 dark:hover:bg-white/5 text-gray-900 dark:text-white rounded-xl font-medium transition-all group"
                                >
                                    <img src={playStoreLogo} alt="Google Play" className="w-5 h-5 opacity-80 group-hover:opacity-100" />
                                    Get it on Google Play
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};
