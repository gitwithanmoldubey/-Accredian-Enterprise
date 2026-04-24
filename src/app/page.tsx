import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Clients from '@/components/Clients';
import Edge from '@/components/Edge';
import Hubs from '@/components/Hubs';
import CATFramework from '@/components/CATFramework';
import HowItWorks from '@/components/HowItWorks';
import FAQAccordion from '@/components/FAQAccordion';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <Hero />
      <Stats />
      <Clients />
      <Hubs />
      <Edge />
      <CATFramework />
      <HowItWorks />
      <FAQAccordion />
      <Footer />
    </main>
  );
}
