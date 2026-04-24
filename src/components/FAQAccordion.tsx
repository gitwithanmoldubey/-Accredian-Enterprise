"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { faqs } from '@/data/siteData';
import SectionWrapper from './SectionWrapper';

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <SectionWrapper
      id="faqs"
      dark
      title="Frequently Asked Questions"
      subtitle="Everything you need to know about our enterprise training solutions."
    >
      <div className="max-w-3xl mx-auto flex flex-col gap-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
            >
              <span className="text-lg font-bold text-text-dark">{faq.question}</span>
              <div className={`p-2 rounded-full ${openIndex === index ? 'bg-primary text-white' : 'bg-accent text-primary'} transition-colors`}>
                {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
              </div>
            </button>
            
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="px-8 pb-6 text-text-light leading-relaxed">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default FAQAccordion;
