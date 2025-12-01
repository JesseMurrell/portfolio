import React from 'react';
import { motion } from 'framer-motion';
import { ScrollStack } from './ScrollStack';

// Import logos
import universalLogo from '../assets/company_logos/universal.svg';
import saltLogo from '../assets/project_assets/stage/salt-logo.svg';
import massiveLogo from '../assets/project_assets/stage/news_cards/massive_logo.svg';
import musicAllyLogo from '../assets/project_assets/stage/news_cards/MUSIC-ALLY-NEW-LOGO.webp';
import musicWeekLogo from '../assets/project_assets/stage/news_cards/music_week.png';
import sessionLogo from '../assets/project_assets/stage/session_studio_logo.svg';
import connexLogo from '../assets/project_assets/stage/connex logo.png';

const articles = [
    {
        id: 'salt-us-deal',
        title: 'Salt Signs First US Deal',
        description: 'Salt signs its first major US deal, marking a significant milestone in its global expansion strategy.',
        link: 'https://salt.music/posts/salt-signs-first-us-deal',
        source: 'Salt',
        date: '2024',
        logo: saltLogo,
        role: 'Lead team which built PoC for RFP'
    },
    {
        id: 'salt-innovate-uk',
        title: 'Salt Taps Innovate UK Funding',
        description: 'Royalties firm Salt secures Innovate UK funding to push AI development forward.',
        link: 'https://musically.com/2024/09/12/royalties-firm-salt-taps-innovate-uk-funding-for-ai-push/',
        source: 'Music Ally',
        date: 'September 2024',
        logo: musicAllyLogo,
        role: 'Owned, Lead on and delivery requirements for Innovate UK grant'
    },
    {
        id: 'salt-massive-music',
        title: 'Salt Signs Massive Music as Strategic Partner',
        description: 'Partnership with Massive Music Entertainment to expand presence in the Asian market.',
        link: 'https://salt.music/posts/salt-signs-massive-music-entertainment-as-first-strategic-partner-in-asia',
        source: 'Salt',
        date: '2025',
        logo: massiveLogo,
        role: 'Designed ML Services for Massive'
    },
    {
        id: 'universal-connex',
        title: 'Universal Music Adopts Connex',
        description: 'Universal Music Group adopts the newly launched Connex platform for music credit management.',
        link: 'https://www.musicbusinessworldwide.com/universal-music-adopts-newly-launched-connex-platform-for-music-credit-management/',
        source: 'Music Business Worldwide',
        date: '2025',
        logo: universalLogo,
        role: 'Lead Data platform and AI/ML service teams on Connex'
    },
    {
        id: 'connex-launch',
        title: 'Connex Launches with Universal Music',
        description: 'A&R admin platform Connex launches with Universal Music as a key partner.',
        link: 'https://www.musicweek.com/labels/read/a-r-admin-platform-connex-launches-with-universal-music/091876',
        source: 'Music Week',
        date: '2025',
        logo: musicWeekLogo,
        role: 'Lead Technical Delivery Requirements for UMG'
    }
];

const properties = [
    { name: 'Salt', url: 'https://salt.music', logo: saltLogo, width: 'w-24' },
    { name: 'Session', url: 'https://www.sessionstudio.com/', logo: sessionLogo, width: 'w-32' },
    { name: 'Connex', url: 'https://www.connex.music/', logo: connexLogo, width: 'w-32' }
];

export const StageProject: React.FC = () => {
    return (
        <div className="w-full">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="mb-4 ml-2"
            >
                <span className="text-sm font-medium text-blue-400 tracking-wide uppercase">Contract Role</span>
            </motion.div>

            <div className="bg-white/80 dark:bg-[#0a0a0a] rounded-4xl border border-black/5 dark:border-white/5 relative">
                <div className="flex flex-col lg:flex-row">
                    {/* Left Content Section - Sticky */}
                    <div className="lg:w-1/2 p-10 md:p-20 lg:h-screen lg:sticky lg:top-0 flex flex-col justify-center z-10">
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="flex flex-wrap gap-4 mb-8"
                        >
                        <span className="px-4 py-1.5 text-sm font-medium rounded-full bg-black/5 dark:bg-white/10 text-gray-700 dark:text-white/80 border border-black/5 dark:border-white/5">
                            Head of Platform
                        </span>
                        <span className="px-4 py-1.5 text-sm font-medium rounded-full bg-black/5 dark:bg-white/5 text-gray-600 dark:text-white/60 border border-black/5 dark:border-white/5">
                            Engineering Manager
                        </span>
                        <span className="px-4 py-1.5 text-sm font-medium rounded-full bg-black/5 dark:bg-white/5 text-gray-600 dark:text-white/60 border border-black/5 dark:border-white/5">
                            AI/ML
                        </span>
                    </motion.div>

                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-8"
                    >
                        Stage
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="space-y-6 text-lg md:text-xl text-gray-600 dark:text-white/70 leading-relaxed max-w-xl"
                    >
                        <p>
                            I joined Stage as Engineering Manager to deliver AI/ML services. After meeting every milestone and successfully achieving Stage's Innovate UK obligations, I was quickly promoted to Head of Platform, leading the AI/ML, 
                            Data Platform and Cloud Ops teams. 
                        </p>
                        <p>
                            My role at Stage is heavily strategic, wearing many hats, including engineering manager, architect, technical sales executive, mentor, and product manager. 
                        </p>
                        <div className="pt-4">
                            <p className="mb-6 text-gray-500 dark:text-white/50 text-sm uppercase tracking-widest font-medium">
                                Responsible for all AI/ML service delivery across:
                            </p>
                            <div className="flex flex-wrap items-center gap-8">
                                {properties.map((prop) => (
                                    <a 
                                        key={prop.name}
                                        href={prop.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex items-center gap-3 hover:opacity-80 transition-opacity"
                                    >
                                        <img 
                                            src={prop.logo} 
                                            alt={`${prop.name} logo`}
                                            className={`h-12 ${prop.width} object-contain opacity-90 group-hover:opacity-100 transition-opacity ${prop.name === 'Session' ? 'brightness-0 dark:invert' : ''}`}
                                        />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>

                    {/* Right Scroll Stack Section */}
                    <div className="lg:w-1/2">
                        <ScrollStack items={articles} />
                    </div>
                </div>
            </div>
        </div>
    );
};
