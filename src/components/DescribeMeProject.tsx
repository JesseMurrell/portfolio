import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Import Assets
import dmLogo from '../assets/project_assets/Describeme/describe-me-app-logo.png';
import dmUpload from '../assets/project_assets/Describeme/Upload Screen.png';
import dmUploaded from '../assets/project_assets/Describeme/Image Uploaded Screen.png';
import dmResults from '../assets/project_assets/Describeme/Results screen.png';

import appleLogo from '../assets/company_logos/apple-white.svg';

export const DescribeMeProject: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);

    const screenshots = [
        { type: 'image', src: dmUpload },
        { type: 'image', src: dmUploaded },
        { type: 'image', src: dmResults },
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
                <div className="bg-[#1c1c1e]/80 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-10 border border-white/10 shadow-2xl flex flex-col justify-between h-full">
                    <div>
                        <div className="w-20 h-20 rounded-2xl flex items-center justify-center mb-8 overflow-hidden">
                            <img src={dmLogo} alt="DescribeMe Logo" className="w-full h-full object-cover" />
                        </div>
                        
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                            DescribeMe
                        </h2>
                        
                        <p className="text-xl text-gray-300 leading-relaxed mb-8">
                            AI captions tailored to the mood and moment! From Gen Z and ancient energy to cutesy vibes, DescribeMe captions your photos with unique, personalised captions.
                        </p>

                        <div className="space-y-6 mb-10">
                            <div className="flex items-start gap-4">
                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5" />
                                <div>
                                    <h4 className="text-white font-semibold text-lg mb-1">Custom AI Captions</h4>
                                    <p className="text-gray-400">Upload photos and instantly receive custom AI-generated captions tailored to your image.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2.5" />
                                <div>
                                    <h4 className="text-white font-semibold text-lg mb-1">Select a Generation</h4>
                                    <p className="text-gray-400">Choose from Gen Alpha, Gen Z, or Millennial styles to match your vibe perfectly.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2.5" />
                                <div>
                                    <h4 className="text-white font-semibold text-lg mb-1">Choose a Tone</h4>
                                    <p className="text-gray-400">Pick from cutesy, savage, wholesome, or unhinged tones for the perfect caption.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-3 mt-auto">
                        {['iOS', 'SwiftUI', 'OpenAI', 'AI'].map((tag) => (
                            <span key={tag} className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-gray-300">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Right Card - Slim App Store */}
                <div className="bg-[#1c1c1e]/80 backdrop-blur-xl rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl flex flex-col h-[800px]">
                    {/* Header */}
                    <div className="p-8 pb-0">
                        <div className="flex gap-5 items-center mb-6">
                            <div className="w-24 h-24 rounded-[22%] overflow-hidden border border-white/10 shadow-lg bg-black flex-shrink-0">
                                <img src={dmLogo} alt="DescribeMe Logo" className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-1">DescribeMe</h3>
                                <p className="text-gray-400 font-medium text-sm mb-3">AI Caption Generator</p>
                                <div className="flex gap-2">
                                    <a 
                                        href="https://apps.apple.com/gb/app/describeme-caption-app/id6740031053"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1.5 px-3 py-1.5 bg-[#007AFF] hover:bg-[#0062cc] text-white rounded-full transition-colors shadow-lg shadow-blue-900/20"
                                        aria-label="Download on the App Store"
                                    >
                                        <img src={appleLogo} alt="App Store" className="w-auto h-3.5" />
                                        <span className="text-[10px] font-bold uppercase tracking-wide">Get</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Stats */}
                        <div className="flex justify-between border-t border-b border-white/10 py-4 mb-6 overflow-x-auto">
                            <div className="px-4 text-right border-r border-white/10 last:border-0">
                                <div className="text-[10px] font-bold text-gray-500 mb-0.5">RATING</div>
                                <div className="text-lg font-bold text-gray-300">5.0</div>
                            </div>
                            <div className="px-4 text-right border-r border-white/10 last:border-0">
                                <div className="text-[10px] font-bold text-gray-500 mb-0.5">AGE</div>
                                <div className="text-lg font-bold text-gray-300">12+</div>
                            </div>
                            <div className="px-4 text-right border-r border-white/10 last:border-0">
                                <div className="text-[10px] font-bold text-gray-500 mb-0.5">CATEGORY</div>
                                <div className="text-lg font-bold text-gray-300">Social</div>
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
                                        className="w-[220px] h-[480px] rounded-[2rem] overflow-hidden bg-black/50 border border-white/10 flex-shrink-0 relative"
                                    >
                                        <img 
                                            src={item.src} 
                                            alt={`Screenshot ${index}`} 
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Description */}
                        <div className="px-8 pb-8">
                             <div className="mb-8">
                                <div className="flex justify-between items-baseline mb-3">
                                    <h3 className="text-xl font-bold text-white">About</h3>
                                </div>
                                <div className="text-sm text-gray-300 leading-relaxed space-y-4">
                                    <p>
                                        DescribeMe is a fun and creative app that uses cutting-edge AI to generate captions for your photos. Whether you want a Gen-Z vibe, a cutesy tone, or something completely savage, DescribeMe makes it easy to craft personalized captions that stand out.
                                    </p>
                                    <p>
                                        Perfect for social media, memes, or simply sharing laughs with friends. Powered by advanced AI, DescribeMe turns your photos into stories. Download now and make every picture pop with personality!
                                    </p>
                                </div>
                            </div>

                            {/* Download Buttons */}
                            <div className="space-y-3">
                                <a 
                                    href="https://apps.apple.com/gb/app/describeme-caption-app/id6740031053"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-3 w-full py-3 bg-[#1c1c1e] border border-white/20 hover:bg-white/5 text-white rounded-xl font-medium transition-all group"
                                >
                                    <img src={appleLogo} alt="Apple" className="w-5 h-5 opacity-80 group-hover:opacity-100" />
                                    Download on the App Store
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

