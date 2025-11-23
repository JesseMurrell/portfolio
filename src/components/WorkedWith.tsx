import React from 'react';
import { motion } from 'framer-motion';

import amazon from '../assets/company_logos/amazon.svg';
import amex from '../assets/company_logos/americanexpress.svg';
import apple from '../assets/company_logos/apple.svg';
import barclays from '../assets/company_logos/barclays.svg';
import buma from '../assets/company_logos/bumastemra.svg';
import capital from '../assets/company_logos/capital.svg';
import google from '../assets/company_logos/google.svg';
import havas from '../assets/company_logos/havas.svg';
import kpmg from '../assets/company_logos/kpmg.svg';
import monzo from '../assets/company_logos/monzo.svg';
import starling from '../assets/company_logos/starling.svg';
import universal from '../assets/company_logos/universal.svg';

const companies = [
    { name: 'Apple', logo: apple },
    { name: 'Google', logo: google },
    { name: 'Amazon', logo: amazon },
    { name: 'American Express', logo: amex },
    { name: 'Barclays', logo: barclays },
    { name: 'Capital', logo: capital },
    { name: 'Monzo', logo: monzo },
    { name: 'Starling', logo: starling },
    { name: 'KPMG', logo: kpmg },
    { name: 'Havas Group', logo: havas },
    { name: 'Universal Music Group', logo: universal },
    { name: 'Buma Stemra', logo: buma },
];

export const WorkedWith: React.FC = () => {
    return (
        <section className="py-12 overflow-hidden relative">
            <div className="container mx-auto px-4 mb-8">
                <p className="text-center text-secondary text-xs font-semibold uppercase tracking-widest">Worked With</p>
            </div>

            <div className="flex overflow-hidden mask-gradient">
                <motion.div
                    className="flex gap-16 items-center whitespace-nowrap"
                    animate={{ x: [0, -1000] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 40
                    }}
                >
                    {[...companies, ...companies, ...companies].map((company, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-center h-12 w-32 grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all duration-300"
                        >
                            <img
                                src={company.logo}
                                alt={`${company.name} logo`}
                                className="max-h-full max-w-full object-contain"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
