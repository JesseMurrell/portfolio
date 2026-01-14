import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ExternalLink, QrCode, MessageSquare, BookOpen } from 'lucide-react';

// Import Assets
import sentimentLogo from '../assets/project_assets/sentiment/sentiment_logo.png';
import landingDesktop from '../assets/project_assets/sentiment/landing-desktop.png';
import landingMobile from '../assets/project_assets/sentiment/landing-mobile.png';

export const SentimentProject: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);

    const steps = [
        { step: '1', title: 'Create Event', description: 'Set up your event in seconds with a title and optional details' },
        { step: '2', title: 'Share QR Code', description: 'Display or print the QR code at your venue for guests' },
        { step: '3', title: 'Collect Messages', description: 'Guests scan & submit heartfelt messages - no login needed' },
        { step: '4', title: 'Export Book', description: 'Download a beautifully formatted PDF memory book' },
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
                        <div className="w-20 h-20 rounded-2xl flex items-center justify-center mb-8 overflow-hidden bg-[#5c6b5e] p-3">
                            <img src={sentimentLogo} alt="Sentiment Logo" className="w-full h-full object-contain" />
                        </div>
                        
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
                            Sentiment
                        </h2>
                        
                        <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                            A platform that transforms guest messages into treasured memory books. Perfect for funerals, weddings, and celebrations - capture heartfelt sentiments via QR codes and preserve them forever.
                        </p>

                        <div className="space-y-6 mb-10">
                            <div className="flex items-start gap-4">
                                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <QrCode className="w-4 h-4 text-emerald-500" />
                                </div>
                                <div>
                                    <h4 className="text-gray-900 dark:text-white font-semibold text-lg mb-1">Frictionless Guest Submission</h4>
                                    <p className="text-gray-500 dark:text-gray-400">Guests scan a QR code and leave messages instantly - no accounts, no apps, no friction.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <MessageSquare className="w-4 h-4 text-amber-500" />
                                </div>
                                <div>
                                    <h4 className="text-gray-900 dark:text-white font-semibold text-lg mb-1">Real-time Dashboard</h4>
                                    <p className="text-gray-500 dark:text-gray-400">Watch messages arrive in real-time. Moderate, manage, and curate the perfect collection.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <BookOpen className="w-4 h-4 text-rose-500" />
                                </div>
                                <div>
                                    <h4 className="text-gray-900 dark:text-white font-semibold text-lg mb-1">Beautiful PDF Export</h4>
                                    <p className="text-gray-500 dark:text-gray-400">Generate professionally formatted memory books ready for printing or digital sharing.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-3 mt-auto">
                        {['React', 'TypeScript', 'AWS Lambda', 'DynamoDB', 'Stripe'].map((tag) => (
                            <span key={tag} className="px-4 py-1.5 rounded-full bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 text-sm font-medium text-gray-600 dark:text-gray-300">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Right Card - Web App Showcase */}
                <div className="bg-gradient-to-br from-[#f8f7f4] to-[#f0efe9] dark:from-[#1a1a1a] dark:to-[#0f0f0f] rounded-[2.5rem] overflow-hidden border border-black/5 dark:border-white/10 shadow-2xl flex flex-col min-h-[800px]">
                    {/* Browser Chrome Header */}
                    <div className="px-6 py-4 border-b border-black/5 dark:border-white/10 bg-white/50 dark:bg-white/5">
                        <div className="flex items-center gap-3">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-400/80" />
                                <div className="w-3 h-3 rounded-full bg-amber-400/80" />
                                <div className="w-3 h-3 rounded-full bg-green-400/80" />
                            </div>
                            <div className="flex-1 ml-4">
                                <div className="bg-black/5 dark:bg-white/10 rounded-lg px-4 py-1.5 text-sm text-gray-500 dark:text-gray-400 font-mono truncate">
                                    sentimentsoflife.com
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content Area */}
                    <div className="flex-grow overflow-y-auto hide-scrollbar p-6">
                        {/* Screenshots Display */}
                        <div className="relative mb-8 pt-2">
                            {/* Desktop Screenshot */}
                            <div className="rounded-xl overflow-hidden shadow-2xl border border-black/10 dark:border-white/10 aspect-[16/10] bg-white">
                                <img 
                                    src={landingDesktop} 
                                    alt="Sentiment Landing Page" 
                                    className="w-full object-cover object-top"
                                />
                            </div>
                            
                            {/* Mobile Screenshot - Floating */}
                            <div className="absolute -bottom-6 -right-2 w-24 md:w-32 rounded-[1.5rem] overflow-hidden shadow-2xl border-[4px] border-white dark:border-[#1c1c1e] aspect-[9/19.5] bg-black">
                                <img 
                                    src={landingMobile} 
                                    alt="Sentiment Mobile View" 
                                    className="w-full h-full object-cover object-top"
                                />
                            </div>
                        </div>

                        {/* How It Works Steps */}
                        <div className="mt-12 mb-8">
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6 text-center">How It Works</h3>
                            <div className="grid grid-cols-2 gap-4">
                                {steps.map((item, index) => (
                                    <div 
                                        key={index}
                                        className="bg-white/60 dark:bg-white/5 rounded-xl p-4 border border-black/5 dark:border-white/10"
                                    >
                                        <div className="w-7 h-7 rounded-full bg-[#5c6b5e] text-white text-sm font-bold flex items-center justify-center mb-2">
                                            {item.step}
                                        </div>
                                        <h4 className="text-gray-900 dark:text-white font-semibold text-sm mb-1">{item.title}</h4>
                                        <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed">{item.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CTA Button */}
                        <a 
                            href="https://www.sentimentsoflife.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-3 w-full py-4 bg-[#5c6b5e] hover:bg-[#4a5a4c] text-white rounded-xl font-medium transition-all group shadow-lg"
                        >
                            <span>Visit Sentiment</span>
                            <ExternalLink className="w-4 h-4 opacity-80 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                        </a>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};
