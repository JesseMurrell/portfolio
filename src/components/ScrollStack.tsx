import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

interface ScrollStackItem {
    id: string;
    title: string;
    description: string;
    link: string;
    source: string;
    date?: string;
    logo?: string;
    role?: string; // Add role property
}

interface ScrollStackProps {
    items: ScrollStackItem[];
}

const Card = ({ 
    item, 
    index, 
    progress, 
    range, 
    targetScale 
}: { 
    item: ScrollStackItem; 
    index: number; 
    progress: MotionValue<number>; 
    range: number[]; 
    targetScale: number; 
}) => {
    const container = useRef(null);

    const scale = useTransform(progress, range, [1, targetScale]);
    
    return (
        <div 
            ref={container} 
            className="h-screen flex items-center justify-center md:justify-end sticky top-0"
            style={{ zIndex: index + 1 }}
        >
            <motion.div 
                style={{ scale, top: `calc(-10% + ${index * 25}px)` }} 
                className="relative w-[90vw] md:w-[45vw] max-w-[600px] h-[400px] flex flex-col origin-top mr-0 md:mr-20"
            >
                {/* Role Header */}
                {item.role && (
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="mb-4 ml-2"
                    >
                        <span className="inline-block px-4 py-2 glass rounded-full text-xs font-medium text-blue-400 tracking-wide uppercase">
                            {item.role}
                        </span>
                    </motion.div>
                )}

                <a 
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full h-full bg-white dark:bg-[#111] border border-black/5 dark:border-white/10 rounded-3xl p-8 flex flex-col justify-between group transition-colors hover:border-black/10 dark:hover:border-white/20 overflow-hidden relative shadow-xl dark:shadow-none"
                >
                    {/* Faded Logo Background - Centered */}
                    {item.logo && (
                        <div className="absolute inset-0 flex items-center justify-center opacity-[0.05] group-hover:opacity-[0.1] transition-opacity duration-500 grayscale pointer-events-none select-none">
                             <img src={item.logo} alt="" className="w-4/5 h-4/5 object-contain dark:invert" />
                        </div>
                    )}

                    <div className="relative z-10 flex justify-between items-start">
                        <div>
                            <p className="text-xs font-bold text-gray-500 dark:text-white/60 mb-3 uppercase tracking-widest">
                                {item.source} {item.date && `• ${item.date}`}
                            </p>
                            <h3 className="text-3xl md:text-4xl font-black tracking-tight text-gray-900 dark:text-white group-hover:text-blue-400 transition-colors leading-tight">
                                {item.title}
                            </h3>
                        </div>
                        <ExternalLink className="w-6 h-6 text-gray-400 dark:text-white/40 group-hover:text-gray-900 dark:group-hover:text-white transition-colors" />
                    </div>

                    <p className="relative z-10 text-lg text-gray-600 dark:text-white/80 leading-relaxed font-medium max-w-md">
                        {item.description}
                    </p>
                </a>
            </motion.div>
        </div>
    );
};

export const ScrollStack: React.FC<ScrollStackProps> = ({ items }) => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    });

    return (
        <div ref={container} className="relative">
            {items.map((item, i) => {
                const targetScale = 1 - ((items.length - i) * 0.05);
                return (
                    <Card 
                        key={item.id} 
                        item={item} 
                        index={i} 
                        progress={scrollYProgress}
                        range={[i * (1 / items.length), 1]}
                        targetScale={targetScale}
                    />
                );
            })}
        </div>
    );
};
