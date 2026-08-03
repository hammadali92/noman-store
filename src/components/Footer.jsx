import React from 'react';
import { useStore } from '../context/StoreContext';
import { MapPin, Phone, Mail, FileText, Scale, ShieldAlert, Award } from 'lucide-react';

export default function Footer() {
  const { navigateTo } = useStore();

  return (
    <footer className="bg-zinc-900 text-zinc-400 border-t border-zinc-800 font-sans mt-auto">
      {/* Main Grid Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Column 1: Company Profile */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-bold text-white tracking-wide border-b border-zinc-800 pb-2">
              NOMAN AKHTAR LTD
            </h3>
            <div className="space-y-3 text-sm leading-relaxed">
              <div className="flex gap-3">
                <MapPin size={18} className="text-amber-500 flex-shrink-0 mt-1" />
                <span>
                  Office 20217, 182-184 High Street North, <br />
                  East Ham, London, E6 2JA, <br />
                  United Kingdom
                </span>
              </div>
              <div className="flex items-center gap-3 pt-2">
                <Award size={18} className="text-amber-500 flex-shrink-0" />
                <span>
                  Company Reg No: <strong className="text-zinc-200">17352762</strong>
                </span>
              </div>
              <p className="text-xs text-zinc-500 pt-2">
                Registered in England & Wales. Premium wholesale distributor of global Beauty, Cosmetics, and Kitchen essentials.
              </p>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-bold text-white tracking-wide border-b border-zinc-800 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => navigateTo('home')} className="hover:text-amber-500 transition-colors cursor-pointer text-left">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('about')} className="hover:text-amber-500 transition-colors cursor-pointer text-left">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('services')} className="hover:text-amber-500 transition-colors cursor-pointer text-left">
                  Our Services (B2B)
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('contact')} className="hover:text-amber-500 transition-colors cursor-pointer text-left">
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal & Policies */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-bold text-white tracking-wide border-b border-zinc-800 pb-2">
              Legal & Compliance
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => navigateTo('privacy-policy')} className="hover:text-amber-500 transition-colors cursor-pointer text-left flex items-center gap-2">
                  <ShieldAlert size={14} /> Privacy Policy
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('terms-conditions')} className="hover:text-amber-500 transition-colors cursor-pointer text-left flex items-center gap-2">
                  <Scale size={14} /> Terms & Conditions
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('refund-policy')} className="hover:text-amber-500 transition-colors cursor-pointer text-left flex items-center gap-2">
                  <FileText size={14} /> Return & Refund Policy
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Get In Touch */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-bold text-white tracking-wide border-b border-zinc-800 pb-2">
              Get In Touch
            </h3>
            <div className="space-y-3.5 text-sm">
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-amber-500" />
                <a href="tel:+447956853857" className="hover:text-white transition-colors">
                  +44 7956 853857
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-amber-500" />
                <a href="mailto:info@nomanakhtarltd.com" className="hover:text-white transition-colors break-all">
                  info@nomanakhtarltd.com
                </a>
              </div>
              
              {/* Social Icons */}
              <div className="flex items-center gap-3 pt-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-zinc-800 hover:bg-amber-600 hover:text-white rounded-full flex items-center justify-center transition-all"
                  aria-label="Instagram"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-zinc-800 hover:bg-amber-600 hover:text-white rounded-full flex items-center justify-center transition-all"
                  aria-label="Facebook"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-zinc-800 hover:bg-amber-600 hover:text-white rounded-full flex items-center justify-center transition-all"
                  aria-label="LinkedIn"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-zinc-800 my-12"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© 2026 NOMAN AKHTAR LTD. All rights reserved.</p>
          <div className="flex items-center gap-1">
            <span>Secured wholesale commerce for UK suppliers & brands.</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
