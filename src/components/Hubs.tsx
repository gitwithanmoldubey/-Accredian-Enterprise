"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { hubs } from '@/data/siteData';
import * as Icons from 'lucide-react';
import SectionWrapper from './SectionWrapper';

const Hubs = () => {
  return (
    <SectionWrapper
      id="hubs"
      title="Expertise Hubs"
      subtitle="Specialized learning domains designed to address the most critical needs of modern enterprises."
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {hubs.map((hub, index) => {
          const Icon = (Icons as any)[hub.icon];
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-8 rounded-2xl bg-white border border-gray-100 hover:border-primary/20 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden"
            >
              <div className={`absolute top-0 right-0 w-24 h-24 ${hub.color} opacity-5 rounded-bl-full transition-all group-hover:scale-150`}></div>
              
              <div className={`w-14 h-14 rounded-xl ${hub.color} text-white flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                <Icon size={28} />
              </div>
              
              <h3 className="text-2xl font-bold mb-4">{hub.title}</h3>
              <p className="text-text-light leading-relaxed mb-6">
                {hub.description}
              </p>
              
              <button className="flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
                Explore Programs <Icons.ArrowRight size={18} />
              </button>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
};

export default Hubs;
