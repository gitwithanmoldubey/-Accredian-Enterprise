import React from 'react';
import Link from 'next/link';
import * as Icons from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-text-dark text-white pt-20 pb-10">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-2xl">
                A
              </div>
              <span className="font-display text-xl font-bold tracking-tight">
                Accredian <span className="text-primary">Enterprise</span>
              </span>
            </Link>
            <p className="text-gray-400 leading-relaxed">
              Empowering organizations with world-class professional training. We bridge the skill gap through industry-aligned curriculum and expert-led sessions.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors">
                <Icons.Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors">
                <Icons.Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors">
                <Icons.Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors">
                <Icons.Instagram size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="flex flex-col gap-4 text-gray-400">
              <li><Link href="#home" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="#stats" className="hover:text-primary transition-colors">Stats</Link></li>
              <li><Link href="#clients" className="hover:text-primary transition-colors">Clients</Link></li>
              <li><Link href="#edge" className="hover:text-primary transition-colors">Accredian Edge</Link></li>
              <li><Link href="#faqs" className="hover:text-primary transition-colors">FAQs</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Expertise Hubs</h4>
            <ul className="flex flex-col gap-4 text-gray-400">
              <li><Link href="#" className="hover:text-primary transition-colors">Product Management</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Generative AI</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Strategy & Leadership</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Innovation Excellence</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Digital Transformation</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <ul className="flex flex-col gap-4 text-gray-400">
              <li className="flex gap-3">
                <Icons.Mail className="text-primary shrink-0" size={20} />
                <span>enterprise@accredian.com</span>
              </li>
              <li className="flex gap-3">
                <Icons.Phone className="text-primary shrink-0" size={20} />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex gap-3">
                <Icons.MapPin className="text-primary shrink-0" size={20} />
                <span>Sector 44, Gurgaon,<br />Haryana, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Accredian Enterprise. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
