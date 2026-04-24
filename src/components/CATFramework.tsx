"use client";

import React from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import SectionWrapper from './SectionWrapper';

const CATFramework = () => {
  const steps = [
    {
      title: "Concepts",
      description: "Deep dive into foundational principles and industry frameworks.",
      icon: <Icons.BookOpen className="text-blue-600" size={32} />,
      bgColor: "bg-blue-50"
    },
    {
      title: "Application",
      description: "Apply concepts to real-world scenarios through case studies and simulations.",
      icon: <Icons.Laptop className="text-indigo-600" size={32} />,
      bgColor: "bg-indigo-50"
    },
    {
      title: "Tools",
      description: "Master the essential tools and software used by modern professionals.",
      icon: <Icons.Hammer className="text-purple-600" size={32} />,
      bgColor: "bg-purple-50"
    }
  ];

  return (
    <SectionWrapper
      id="cat"
      dark
      title="The CAT Framework"
      subtitle="Our unique pedagogical approach ensures comprehensive learning and practical skill acquisition."
    >
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex-1 w-full max-w-sm"
            >
              <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 text-center flex flex-col items-center">
                <div className={`w-20 h-20 ${step.bgColor} rounded-full flex items-center justify-center mb-6`}>
                  {step.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-text-light">{step.description}</p>
              </div>
            </motion.div>
            
            {index < steps.length - 1 && (
              <div className="hidden lg:flex items-center justify-center text-primary/20">
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Icons.ChevronRight size={40} />
                </motion.div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default CATFramework;
