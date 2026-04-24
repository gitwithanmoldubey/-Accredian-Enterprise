"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { edgeSteps } from '@/data/siteData';
import SectionWrapper from './SectionWrapper';

const Edge = () => {
  return (
    <SectionWrapper
      id="edge"
      dark
      title="The Accredian Edge"
      subtitle="Our proven 7-step process ensures measurable impact and sustainable growth for your enterprise."
    >
      <div className="relative max-w-4xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-blue-100 -translate-x-1/2 hidden md:block"></div>

        <div className="space-y-12 relative">
          {edgeSteps.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`flex flex-col md:flex-row items-center gap-8 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                <div className={`p-6 rounded-2xl bg-white shadow-sm border border-gray-100 hover:shadow-md transition-shadow ${
                  index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                }`}>
                  <span className="inline-block px-3 py-1 bg-accent text-primary rounded-lg text-xs font-bold mb-3">
                    Step {item.step}
                  </span>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-text-light">{item.description}</p>
                </div>
              </div>

              {/* Dot */}
              <div className="relative z-10 w-10 h-10 rounded-full bg-primary border-4 border-white shadow-md flex items-center justify-center text-white font-bold shrink-0">
                {item.step}
              </div>

              {/* Spacer for desktop */}
              <div className="flex-1 hidden md:block"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Edge;
