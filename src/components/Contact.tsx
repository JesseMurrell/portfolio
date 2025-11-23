import React from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

export const Contact: React.FC = () => {
    return (
        <section id="contact" className="py-20 min-h-[60vh] flex flex-col justify-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-2xl"
            >
                <h2 className="text-4xl md:text-5xl font-bold mb-8">Let's work together</h2>
                <p className="text-xl text-secondary mb-12">
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
        </section>
    );
};
