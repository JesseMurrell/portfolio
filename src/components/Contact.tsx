import React from 'react';
import { motion } from 'framer-motion';
import { Send, FileText, Linkedin, ExternalLink } from 'lucide-react';

interface SocialCardProps {
    title: string;
    description: string;
    icon: React.ElementType;
    href: string;
    gradient: string;
}

const SocialCard: React.FC<SocialCardProps> = ({ title, description, icon: Icon, href, gradient }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative block w-full"
    >
        <div className="relative p-6 rounded-2xl glass border border-white/5 hover:border-primary/30 transition-all duration-500 overflow-hidden">
            {/* Gradient Background */}
            <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
            
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)',
                    backgroundSize: '24px 24px',
                }} />
            </div>

            <div className="relative z-10 flex items-start justify-between gap-4">
                <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
                            <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <h3 className="text-lg font-bold group-hover:text-primary transition-colors">
                            {title}
                        </h3>
                    </div>
                    <p className="text-sm text-secondary leading-relaxed">
                        {description}
                    </p>
                </div>
                <ExternalLink className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:text-primary transition-all" />
            </div>
        </div>
    </a>
);

export const Contact: React.FC = () => {
    return (
        <section id="contact" className="py-32">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
                {/* Contact Form Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="order-last lg:order-0"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's work together</h2>
                    <p className="text-xl text-secondary mb-8">
                        Interested in building something meaningful? Get in touch.
                    </p>

                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-secondary ml-1">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full p-4 rounded-2xl glass bg-transparent border-white/10 focus:border-primary/50 focus:ring-0 transition-all outline-none"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-secondary ml-1">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full p-4 rounded-2xl glass bg-transparent border-white/10 focus:border-primary/50 focus:ring-0 transition-all outline-none"
                                    placeholder="john@example.com"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium text-secondary ml-1">Message</label>
                            <textarea
                                id="message"
                                rows={4}
                                className="w-full p-4 rounded-2xl glass bg-transparent border-white/10 focus:border-primary/50 focus:ring-0 transition-all outline-none resize-none"
                                placeholder="Tell me about your project..."
                            />
                        </div>

                        <button
                            type="submit"
                            className="group flex items-center gap-2 px-8 py-4 bg-foreground text-background rounded-2xl font-medium hover:bg-primary hover:text-white transition-all duration-300"
                        >
                            Send Message
                            <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </button>
                    </form>
                </motion.div>

                {/* Learn More Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="space-y-8 lg:border-l lg:border-white/5 lg:pl-12 order-first lg:order-0"
                >
                    <div>
                        <h3 className="text-4xl md:text-5xl font-bold mb-6">Want to learn more?</h3>
                        <p className="text-xl text-secondary mb-8">
                            Dive deeper into my professional journey or connect with me directly on social platforms.
                        </p>
                        
                        <div className="space-y-4">
                            <SocialCard
                                title="CV"
                                description="Explore more of my professional experience."
                                icon={FileText}
                                href="/portfolio/cv.html"
                                gradient="from-blue-500/20 via-indigo-500/20 to-purple-500/20"
                            />
                            <SocialCard
                                title="LinkedIn"
                                description="Connect with me professionally and view my network."
                                icon={Linkedin}
                                href="https://www.linkedin.com/in/jesse-murrell-23aa8b49/"
                                gradient="from-blue-600/20 via-blue-400/20 to-cyan-400/20"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
