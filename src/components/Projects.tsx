import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { AppleMagicBento } from './AppleProject';

// Import Mental Mamba Assets
import mmLogo from '../assets/project_assets/mental_mamba/heart-logo.svg';
import mmHome from '../assets/project_assets/mental_mamba/home_formatted_clean.jpeg';
import mmGameplay from '../assets/project_assets/mental_mamba/gameplay_video_30_trimmed_encoded_silent.mov';

export const projects = [
    {
        id: 'mental-mamba',
        title: 'Mental Mamba',
        description: 'A learning system optimized for dyslexia, built to help users learn anything quickly.',
        link: 'https://apps.apple.com/gb/app/mental-mamba/id6743010712',
        tags: ['iOS', 'SwiftUI', 'Education'],
        color: 'bg-blue-500/5',
        assets: {
            logo: mmLogo,
            image: mmHome,
            video: mmGameplay,
        },
    },
    {
        id: 'apple',
        title: 'Apple',
        description: 'Led the team that built Apple\'s most complex and secure financial data platform, underpinning Apple Pay features.',
        link: 'https://developer.apple.com/financekit/',
        tags: ['Architecture', 'Security', 'FinTech'],
        color: 'bg-gray-500/5',
        assets: null,
    },
    {
        id: 'australa',
        title: 'Australa',
        description: 'Design and engineering consultancy work. Transformed culture and performance at Stage.',
        link: 'https://www.australa.co',
        tags: ['Consultancy', 'Leadership', 'Engineering'],
        color: 'bg-purple-500/5',
        assets: null,
    },
    {
        id: 'kulinary',
        title: 'Kulinary',
        description: 'Chrome extension for culinary discovery and exploration.',
        link: 'https://chromewebstore.google.com/detail/kulinary/mpjdadlofjgdhlaocbdjohlmmffekpan?hl=en-GB',
        tags: ['Chrome Extension', 'Discovery'],
        color: 'bg-green-500/5',
        assets: null,
    },
    {
        id: 'describeme',
        title: 'DescribeMe',
        description: 'Chrome extension for web accessibility.',
        link: 'https://chromewebstore.google.com',
        tags: ['Chrome Extension', 'Accessibility'],
        color: 'bg-green-500/5',
        assets: null,
    },
];

const ProjectCard: React.FC<{ project: typeof projects[0]; index: number }> = ({ project, index }) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "0.8 1"]
    });

    const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
    const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

    return (
        <motion.div
            ref={ref}
            style={{ scale, opacity }}
            className="w-full"
        >
            <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`group block p-10 rounded-[2rem] glass hover:bg-white/10 transition-all duration-500 border border-white/5 hover:border-primary/20 relative overflow-hidden h-full`}
            >
                <div className={`absolute inset-0 ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl`} />

                <div className="relative z-10 h-full flex flex-col">
                    <div className="flex justify-between items-start mb-8">
                        <h3 className="text-3xl font-bold tracking-tight group-hover:text-primary transition-colors">
                            {project.title}
                        </h3>
                        <div className="p-3 rounded-full bg-white/5 group-hover:bg-primary/10 transition-colors">
                            <ExternalLink className="w-5 h-5 opacity-50 group-hover:opacity-100 group-hover:text-primary transition-all" />
                        </div>
                    </div>

                    <p className="text-lg text-secondary mb-10 flex-grow leading-relaxed font-medium">
                        {project.description}
                    </p>

                    <div className="flex flex-wrap gap-3 mt-auto">
                        {project.tags.map((tag, i) => (
                            <span
                                key={i}
                                className="px-4 py-1.5 text-sm font-medium rounded-full bg-white/5 border border-white/5 text-secondary/80"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </a>
        </motion.div>
    );
};

export const Projects: React.FC = () => {
    return (
        <section id="projects" className="py-32">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-5xl md:text-6xl font-bold mb-20 tracking-tight"
            >
                Selected Work
            </motion.h2>

            <div className="flex flex-col gap-32">
                {projects.map((project, index) => (
                    <section key={index} id={project.id} className="scroll-mt-32">
                        {project.id === 'apple' ? (
                            <AppleMagicBento />
                        ) : (
                            <ProjectCard project={project} index={index} />
                        )}
                    </section>
                ))}
            </div>
        </section>
    );
};
