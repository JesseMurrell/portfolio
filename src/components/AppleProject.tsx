import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ExternalLink, Shield, Users, Globe, Lock, Code, Award } from 'lucide-react';
import appleLogoBlack from '../assets/company_logos/apple-black.svg';
import appleLogoWhite from '../assets/company_logos/apple-white.svg';

interface AppleMagicBentoProps {
    className?: string;
}

export const AppleMagicBento: React.FC<AppleMagicBentoProps> = ({ className = '' }) => {
    return (
        <div className={`relative min-h-screen flex items-center justify-center py-20 ${className}`}>
            {/* Bento Grid */}
            <div className="w-full max-w-[95vw] mx-auto px-4 md:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="mb-4 ml-2"
                >
                    <span className="text-sm font-medium text-blue-400 tracking-wide uppercase">Permanent Role</span>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-3 md:gap-4 auto-rows-[minmax(120px,auto)]"
                >
                        {/* Row 1: Security (4 cols, 2 rows) | Team (2 cols, 1 row) | Global (2 cols, 1 row) | Platform (2 cols, 1 row) | VP (2 cols, 2 rows) */}
                    <BentoCard
                            className="col-span-4 md:col-span-4 lg:col-span-4 row-span-2"
                        icon={Shield}
                        title="Security Architecture"
                            description="Designed Apple's most complex and secure financial data platform, ensuring end-to-end encryption and privacy-first design."
                        gradient="from-blue-500/20 via-purple-500/20 to-pink-500/20"
                        delay={0}
                    />

                    <BentoCard
                            className="col-span-4 md:col-span-2 lg:col-span-2 row-span-1"
                        icon={Users}
                        title="Team Leadership"
                        description="Managed 2 internal engineers and 6 contractors"
                        gradient="from-purple-500/20 to-pink-500/20"
                        delay={0.1}
                        compact
                    />

                    <BentoCard
                            className="col-span-4 md:col-span-2 lg:col-span-2 row-span-1"
                        icon={Globe}
                        title="Global Scale"
                            description="Hundreds of millions of users across 100+ countries"
                        gradient="from-pink-500/20 to-orange-500/20"
                        delay={0.15}
                        compact
                    />

                    <BentoCard
                            className="col-span-4 md:col-span-2 lg:col-span-2 row-span-1"
                        icon={Code}
                        title="Platform Engineering"
                        description="End-to-end system ownership and implementation"
                        gradient="from-orange-500/20 to-yellow-500/20"
                        delay={0.2}
                            compact
                    />

                    <BentoCard
                            className="col-span-4 md:col-span-2 lg:col-span-2 row-span-4"
                        icon={Lock}
                        title="VP Coordination"
                            description="Led cross-functional collaboration across design, security, privacy leadership, legal, and device teams to ensure alignment and successful delivery"
                        gradient="from-yellow-500/20 to-green-500/20"
                        delay={0.25}
                    />


                        {/* Row 2: Security continues | Central Title (6 cols, 3 rows) | VP continues */}
                        <CentralTitleCard
                            className="col-span-4 md:col-span-4 lg:col-span-6 row-span-3 order-first md:order-0"
                            delay={0.3}
                        />

                        {/* Row 3: Central Title continues | FinanceKit (4 cols, 2 rows) */}
                    <BentoCard
                            className="col-span-4 md:col-span-4 lg:col-span-4 row-span-2"
                        icon={Award}
                        title="FinanceKit & Apple Pay"
                            description="Underpinning Apple's financial services ecosystem with secure, privacy-preserving APIs"
                        gradient="from-green-500/20 to-blue-500/20"
                            delay={0.35}
                        />

                        {/* Row 5: Editorial Cards on bottom row */}
                    <EditorialCard
                            className="col-span-4 md:col-span-4 lg:col-span-6 row-span-1"
                        quote="FinanceKit provides a privacy-preserving way to access financial data."
                        attribution="Apple Developer"
                        link="https://developer.apple.com/financekit/"
                        linkText="Explore FinanceKit"
                            delay={0.4}
                    />

                    <EditorialCard
                            className="col-span-4 md:col-span-4 lg:col-span-6 row-span-1"
                        quote="Users can now access their account information more conveniently with Apple Wallet."
                        attribution="Apple Newsroom"
                        link="https://www.apple.com/uk/newsroom/2023/11/new-apple-pay-feature-helps-users-access-account-information-more-conveniently/"
                        linkText="Read the announcement"
                            delay={0.45}
                    />
                </motion.div>
            </div>
        </div>
    );
};

// Central Title Card Component
interface CentralTitleCardProps {
    className?: string;
    delay: number;
}

const CentralTitleCard: React.FC<CentralTitleCardProps> = ({
    className,
    delay,
}) => {
    const cardRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ['start end', 'center center'],
    });

    const rotateX = useTransform(scrollYProgress, [0, 1], [8, 0]);
    const rotateY = useTransform(scrollYProgress, [0, 1], [4, 0]);
    const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [0, 1, 1]);
    const scale = useTransform(scrollYProgress, [0, 1], [0.96, 1]);

    return (
                <motion.div
            ref={cardRef}
            style={{
                opacity,
                rotateX,
                rotateY,
                scale,
                transformStyle: 'preserve-3d',
            }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay, duration: 0.6 }}
            className={`group relative ${className}`}
        >
            <motion.div 
                className="relative h-full p-6 md:p-8 lg:p-10 rounded-2xl md:rounded-3xl glass border border-white/5 hover:border-primary/30 transition-all duration-500 flex items-center justify-center overflow-hidden transform-gpu"
                whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.3 }
                }}
            >
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                {/* Animated background pattern */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700">
                    <div className="absolute inset-0" style={{
                        backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)',
                        backgroundSize: '24px 24px',
                    }} />
                </div>

                <div className="relative z-10 text-center flex flex-col items-center">
                    {/* Apple Logo + Text */}
                    <div className="flex flex-col items-center mb-6 md:mb-8">
                        {/* Light Mode Logo (Black) */}
                        <img 
                            src={appleLogoBlack} 
                            alt="Apple" 
                            className="h-12 md:h-16 w-auto mb-4 md:mb-6 block [.dark_&]:hidden"
                            style={{ objectFit: 'contain' }}
                        />
                        {/* Dark Mode Logo (White) */}
                        <img 
                            src={appleLogoWhite} 
                            alt="Apple" 
                            className="h-12 md:h-16 w-auto mb-4 md:mb-6 hidden [.dark_&]:block"
                            style={{ objectFit: 'contain' }}
                        />
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">Apple</h2>
                    </div>

                    {/* Subheading */}
                    <motion.h3 
                        className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-4 md:mb-6 group-hover:text-primary transition-colors"
                        style={{
                            background: 'linear-gradient(135deg, var(--foreground) 0%, var(--primary) 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                        }}
                    >
                        Lead Data Engineer
                    </motion.h3>

                    {/* Description */}
                    <motion.p 
                        className="text-lg md:text-xl text-secondary leading-relaxed max-w-2xl"
                        initial={{ opacity: 0.8 }}
                        whileHover={{ opacity: 1 }}
                    >
                        Led the team that built Apple's most secure financial data platform, architecting systems that protect hundreds of millions of users globally.
                    </motion.p>
                </div>
            </motion.div>
        </motion.div>
    );
};

// Bento Card Component
interface BentoCardProps {
    className?: string;
    icon: React.ElementType;
    title: string;
    description: string;
    gradient: string;
    delay: number;
    compact?: boolean;
}

const BentoCard: React.FC<BentoCardProps> = ({
    className,
    icon: Icon,
    title,
    description,
    gradient,
    delay,
    compact = false,
}) => {
    const cardRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ['start end', 'center center'],
    });

    const rotateX = useTransform(scrollYProgress, [0, 1], [8, 0]);
    const rotateY = useTransform(scrollYProgress, [0, 1], [4, 0]);
    const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [0, 1, 1]);
    const scale = useTransform(scrollYProgress, [0, 1], [0.96, 1]);

    return (
        <motion.div
            ref={cardRef}
            style={{
                opacity,
                rotateX,
                rotateY,
                scale,
                transformStyle: 'preserve-3d',
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay, duration: 0.6 }}
            className={`group relative ${className}`}
        >
            <motion.div 
                className="relative h-full p-4 md:p-5 lg:p-6 rounded-2xl md:rounded-3xl glass border border-white/5 hover:border-primary/30 transition-all duration-500 flex flex-col overflow-hidden transform-gpu"
                whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.3 }
                }}
            >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

                {/* Animated background pattern */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700">
                    <div className="absolute inset-0" style={{
                        backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)',
                        backgroundSize: '24px 24px',
                    }} />
                </div>

                <div className="relative z-10 h-full flex flex-col min-h-0">
                    {/* Icon */}
                    <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className={`${compact ? 'mb-2' : 'mb-3 md:mb-4'} p-2 md:p-3 rounded-xl md:rounded-2xl bg-white/5 w-fit group-hover:bg-primary/10 transition-colors flex-shrink-0`}
                    >
                        <Icon className={`${compact ? 'w-5 h-5 md:w-6 md:h-6' : 'w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8'} text-primary`} />
                    </motion.div>

                    {/* Heading */}
                    <h4 className={`${compact ? 'text-base md:text-lg lg:text-xl' : 'text-lg md:text-xl lg:text-2xl'} font-bold mb-2 tracking-tight group-hover:text-primary transition-colors flex-shrink-0`}>
                        {title}
                    </h4>

                    {/* Subheading/Description */}
                    <p className={`${compact ? 'text-xs md:text-sm' : 'text-sm md:text-base'} text-secondary leading-relaxed flex-grow`} style={{
                        display: '-webkit-box',
                        WebkitLineClamp: compact ? 2 : 3,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                    }}>
                        {description}
                    </p>
                </div>
            </motion.div>
        </motion.div>
    );
};

// Editorial Card Component
interface EditorialCardProps {
    className?: string;
    quote: string;
    attribution: string;
    link: string;
    linkText: string;
    delay: number;
}

const EditorialCard: React.FC<EditorialCardProps> = ({
    className,
    quote,
    attribution,
    link,
    linkText,
    delay,
}) => {
    const cardRef = useRef<HTMLAnchorElement>(null);

    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ['start end', 'center center'],
    });

    const rotateX = useTransform(scrollYProgress, [0, 1], [8, 0]);
    const rotateY = useTransform(scrollYProgress, [0, 1], [4, 0]);
    const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [0, 1, 1]);
    const scale = useTransform(scrollYProgress, [0, 1], [0.96, 1]);

    return (
        <motion.a
            ref={cardRef}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
                opacity,
                rotateX,
                rotateY,
                scale,
                transformStyle: 'preserve-3d',
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay, duration: 0.6 }}
            className={`group relative block ${className}`}
        >
            <motion.div 
                className="relative h-full p-4 md:p-5 lg:p-6 rounded-2xl md:rounded-3xl glass border border-white/5 hover:border-primary/20 transition-all duration-500 flex flex-col"
                whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.3 }
                }}
        >
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                {/* Animated background pattern */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700">
                    <div className="absolute inset-0" style={{
                        backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)',
                        backgroundSize: '24px 24px',
                    }} />
                </div>

                <div className="relative z-10 h-full flex flex-col justify-between min-h-0">
                    <div className="flex-grow flex flex-col justify-center">
                        {/* Quote/Headline */}
                        <blockquote className="mb-2 md:mb-3">
                            <p className="text-base md:text-lg lg:text-xl font-medium leading-relaxed text-foreground/90" style={{
                                display: '-webkit-box',
                                WebkitLineClamp: 2,
                                WebkitBoxOrient: 'vertical',
                                overflow: 'hidden',
                            }}>
                        "{quote}"
                    </p>
                </blockquote>

                {/* Attribution */}
                        <p className="text-xs md:text-sm text-secondary mb-3 md:mb-4">
                    — {attribution}
                </p>
                    </div>

                    {/* Link to Source */}
                    <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-4 transition-all flex-shrink-0">
                        <span className="text-sm md:text-base">{linkText}</span>
                        <ExternalLink className="w-4 h-4 md:w-5 md:h-5" />
                    </div>
                </div>
            </motion.div>
        </motion.a>
    );
};
