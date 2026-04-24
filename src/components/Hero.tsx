"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CheckCircle2, ChevronRight } from 'lucide-react';

const Hero = () => {
  const benefits = [
    "Industry-Aligned Curriculum",
    "Expert-Led Sessions",
    "Real-World Projects",
    "Global Certification"
  ];

  return (
    <section id="home" className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-white to-blue-50">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-1.5 mb-6 bg-accent text-primary rounded-full text-sm font-semibold tracking-wide uppercase">
              Transform Your Workforce
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Next-Gen Expertise For Your <span className="text-primary">Enterprise</span>
            </h1>
            <p className="text-lg text-text-light mb-8 max-w-lg leading-relaxed">
              Empower your teams with the skills that drive the future. From Product Management to Generative AI, we deliver high-impact learning experiences tailored for scale.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2 text-text-main font-medium">
                  <CheckCircle2 className="text-primary" size={20} />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary text-lg px-8 py-4 flex items-center justify-center gap-2 group">
                Enquire Now 
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="btn-outline text-lg px-8 py-4 flex items-center justify-center">
                Download Brochure
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-60"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-200 rounded-full blur-3xl opacity-60"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
              <Image
                src="/hero-image.png"
                alt="Accredian Enterprise Hero"
                width={800}
                height={500}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
            
            {/* Floating Card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 -left-8 lg:-left-12 bg-white p-6 rounded-xl shadow-xl border border-gray-100 hidden sm:block"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <div className="text-2xl font-bold text-text-dark">10K+</div>
                  <div className="text-xs text-text-light font-medium uppercase tracking-wider">Professionals Certified</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
