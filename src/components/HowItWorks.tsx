"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Layout } from 'lucide-react';
import SectionWrapper from './SectionWrapper';

const HowItWorks = () => {
  const steps = [
    {
      title: "Identify Skill Gaps",
      description: "We use data-driven assessments to pinpoint exactly where your team needs growth.",
      icon: <Target size={32} />
    },
    {
      title: "Customize Learning Path",
      description: "Our experts design a curriculum that aligns with your specific technology stack and business goals.",
      icon: <Layout size={32} />
    },
    {
      title: "Impactful Delivery",
      description: "Live, interactive sessions combined with hands-on projects ensure high engagement and retention.",
      icon: <Users size={32} />
    }
  ];

  return (
    <SectionWrapper
      id="how-it-works"
      title="How It Works"
      subtitle="A seamless journey from identifying needs to achieving measurable business outcomes."
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center group"
          >
            <div className="w-16 h-16 bg-accent text-primary rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
              {step.icon}
            </div>
            <h3 className="text-xl font-bold mb-4">{step.title}</h3>
            <p className="text-text-light leading-relaxed">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-20 p-10 bg-primary rounded-3xl text-white text-center">
        <h3 className="text-2xl md:text-3xl font-bold mb-6">Ready to transform your team?</h3>
        <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
          Join 50+ enterprise partners who have already empowered their workforce with Accredian.
        </p>
        <button className="bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-colors shadow-xl">
          Get Started Today
        </button>
      </div>
    </SectionWrapper>
  );
};

export default HowItWorks;
