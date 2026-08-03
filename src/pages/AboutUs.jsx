import React from 'react';
import { useStore } from '../context/StoreContext';
import { Award, ShieldCheck, Users } from 'lucide-react';

export default function AboutUs() {
  const { navigateTo } = useStore();

  return (
    <div className="font-sans min-h-screen bg-[#fdfdfc] dark:bg-zinc-950 text-zinc-800 dark:text-zinc-200 transition-colors pb-24">
      {/* Page Header */}
      <div className="bg-zinc-900 text-white relative py-20 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=1200"
          alt="About Us Background"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="relative z-20 max-w-4xl mx-auto space-y-3">
          <span className="text-xs uppercase font-extrabold tracking-widest text-amber-400">
            ESTABLISHED IN LONDON, UK
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white m-0">
            About NOMAN AKHTAR LTD
          </h1>
          <p className="text-zinc-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Leading UK-based importer and distributor bridging global brands with local trade markets.
          </p>
        </div>
      </div>

      {/* Main Narrative */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-16 text-left">
        
        {/* Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white">
              Our Identity & Mission
            </h2>
            <p className="text-zinc-650 dark:text-zinc-300 text-sm sm:text-base leading-relaxed">
              NOMAN AKHTAR LTD is an officially incorporated entity in the United Kingdom under Company Registration Number <strong>17352762</strong>. Based in East Ham, London, our firm operates at the nexus of luxury beauty formulation distribution and modern homeware logistics.
            </p>
            <p className="text-zinc-650 dark:text-zinc-300 text-sm sm:text-base leading-relaxed">
              Our core objective is simple yet precise: to identify leading, high-demand product lines globally, verify their compliance with strict United Kingdom cosmetic and manufacturing guidelines, and deliver them seamlessly to local merchants through optimized, high-speed wholesale transactions.
            </p>
          </div>
          <div className="lg:col-span-5 bg-amber-50/50 dark:bg-zinc-900 p-8 rounded-3xl border border-amber-100/50 dark:border-zinc-800 space-y-4">
            <h3 className="font-bold text-zinc-800 dark:text-white text-base">Corporate Registry</h3>
            <div className="space-y-3 text-sm">
              <p>
                <strong className="text-zinc-400 block text-xs uppercase font-extrabold tracking-wider">Registered Entity</strong>
                NOMAN AKHTAR LTD
              </p>
              <p>
                <strong className="text-zinc-400 block text-xs uppercase font-extrabold tracking-wider">UK Registration Number</strong>
                17352762
              </p>
              <p>
                <strong className="text-zinc-400 block text-xs uppercase font-extrabold tracking-wider">Official Office</strong>
                Office 20217, 182-184 High Street North, East Ham, London, E6 2JA, United Kingdom
              </p>
            </div>
          </div>
        </div>

        {/* Values Cards */}
        <div className="space-y-6">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white text-center">
            Our Key Brand Pillars
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-gray-150 dark:border-zinc-850 space-y-3 shadow-xs">
              <ShieldCheck size={28} className="text-amber-600" />
              <h4 className="font-bold text-zinc-850 dark:text-zinc-100 text-sm">Strict UK Compliance</h4>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                We make sure all imports strictly pass UK product safety guidelines, including labeling compliance and raw component auditing.
              </p>
            </div>

            <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-gray-150 dark:border-zinc-850 space-y-3 shadow-xs">
              <Users size={28} className="text-amber-600" />
              <h4 className="font-bold text-zinc-850 dark:text-zinc-100 text-sm">Supplier Partnership</h4>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                By maintaining flawless corporate compliance records, we help global brands establish secure, trusted footholds in the UK market.
              </p>
            </div>

            <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-gray-150 dark:border-zinc-850 space-y-3 shadow-xs">
              <Award size={28} className="text-amber-600" />
              <h4 className="font-bold text-zinc-850 dark:text-zinc-100 text-sm">Wholesale Efficiency</h4>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                We operate direct communication pipelines using WhatsApp and digital invoicing to minimize negotiation friction.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-zinc-900 text-white p-8 md:p-12 rounded-3xl text-center space-y-4">
          <h3 className="font-serif text-2xl font-bold text-white">Interested in Partnering with Us?</h3>
          <p className="text-zinc-400 text-xs sm:text-sm max-w-xl mx-auto">
            Whether you are a UK brand owner seeking trusted local distribution or a manufacturer looking for compliance experts, our door is open.
          </p>
          <div className="pt-2">
            <button
              onClick={() => navigateTo('contact')}
              className="bg-amber-600 hover:bg-amber-700 text-white font-semibold text-xs py-3 px-8 rounded-full shadow-lg transition-colors cursor-pointer"
            >
              Contact Our Trade Desk
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
