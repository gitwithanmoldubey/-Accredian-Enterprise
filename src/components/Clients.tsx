"use client";

import React from 'react';
import Image from 'next/image';
import { clients } from '@/data/siteData';
import SectionWrapper from './SectionWrapper';

const Clients = () => {
  return (
    <SectionWrapper
      id="clients"
      title="Trusted by Global Enterprises"
      subtitle="We've partnered with the world's leading brands to transform their digital capabilities."
    >
      <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
        {clients.map((client, index) => (
          <div key={index} className="grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
            <img
              src={client.logo}
              alt={client.name}
              className="h-8 md:h-10 w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Clients;
