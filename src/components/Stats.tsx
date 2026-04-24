"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { stats } from '@/data/siteData';
import * as Icons from 'lucide-react';
import SectionWrapper from './SectionWrapper';

const Stats = () => {
  return (
    <SectionWrapper id="stats" dark className="!py-12">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, index) => {
          const Icon = (Icons as any)[stat.icon];
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mx-auto mb-4 text-primary">
                <Icon size={24} />
              </div>
              <div className="text-3xl font-bold text-text-dark mb-1">{stat.value}</div>
              <div className="text-sm text-text-light font-medium">{stat.label}</div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
};

export default Stats;
