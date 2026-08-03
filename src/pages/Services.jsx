import React from 'react';
import { useStore } from '../context/StoreContext';
import { Truck, ClipboardCheck, MessageSquare, Briefcase, RefreshCcw } from 'lucide-react';

export default function Services() {
  const { navigateTo } = useStore();

  const handleWhatsAppContact = () => {
    const text = "Hi NOMAN AKHTAR LTD, I want to inquire about your B2B / wholesale services.";
    window.open(`https://wa.me/447956853857?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="font-sans min-h-screen bg-[#fdfdfc] dark:bg-zinc-950 text-zinc-800 dark:text-zinc-200 transition-colors pb-24">
      {/* Page Header */}
      <div className="bg-zinc-900 text-white relative py-20 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=1200"
          alt="Services Background"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="relative z-20 max-w-4xl mx-auto space-y-3">
          <span className="text-xs uppercase font-extrabold tracking-widest text-amber-400">
            B2B & WHOLESALE SERVICES LISTING
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white m-0">
            Our B2B Solutions
          </h1>
          <p className="text-zinc-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Standardized supply chains and compliance advice for UK distributors.
          </p>
        </div>
      </div>

      {/* Services Content Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 text-left">
        
        {/* Intro */}
        <div className="max-w-3xl mb-12">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-4">
            Reliable Wholesale Trade Architecture
          </h2>
          <p className="text-zinc-600 dark:text-zinc-300 text-sm sm:text-base leading-relaxed">
            NOMAN AKHTAR LTD provides high-grade distribution services to department stores, local boutiques, online sellers, and wholesale warehouses across the United Kingdom. We handle shipping documentation, compliance audits, and custom clearance, ensuring your supply stays uninterrupted.
          </p>
        </div>

        {/* 4 Core Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="bg-white dark:bg-zinc-900 p-8 rounded-3xl border border-gray-100 dark:border-zinc-850 space-y-4 shadow-xs">
            <div className="w-12 h-12 bg-amber-50 dark:bg-amber-950/40 rounded-xl flex items-center justify-center text-amber-600 dark:text-amber-500">
              <Briefcase size={22} />
            </div>
            <h3 className="font-bold text-zinc-850 dark:text-zinc-100 text-base">Wholesale Supply Contracts</h3>
            <p className="text-sm text-zinc-550 dark:text-zinc-400 leading-relaxed">
              We offer structured, long-term wholesale supply agreements. Retailers can lock in prices for cosmetics and home accessories to shield themselves against seasonal market fluctuations.
            </p>
          </div>

          <div className="bg-white dark:bg-zinc-900 p-8 rounded-3xl border border-gray-100 dark:border-zinc-850 space-y-4 shadow-xs">
            <div className="w-12 h-12 bg-amber-50 dark:bg-amber-950/40 rounded-xl flex items-center justify-center text-amber-600 dark:text-amber-500">
              <ClipboardCheck size={22} />
            </div>
            <h3 className="font-bold text-zinc-850 dark:text-zinc-100 text-base">UK Compliance & Audit</h3>
            <p className="text-sm text-zinc-550 dark:text-zinc-400 leading-relaxed">
              We review product safety guidelines, formulation compliance, packaging labels, and certificates of analysis before products enter the UK market.
            </p>
          </div>

          <div className="bg-white dark:bg-zinc-900 p-8 rounded-3xl border border-gray-100 dark:border-zinc-850 space-y-4 shadow-xs">
            <div className="w-12 h-12 bg-amber-50 dark:bg-amber-950/40 rounded-xl flex items-center justify-center text-amber-600 dark:text-amber-500">
              <Truck size={22} />
            </div>
            <h3 className="font-bold text-zinc-850 dark:text-zinc-100 text-base">Secure Nationwide Logistics</h3>
            <p className="text-sm text-zinc-550 dark:text-zinc-400 leading-relaxed">
              Partnering with top logistics carriers in the United Kingdom, we coordinate fast freight handling and secure delivery straight to your retail centers or fulfilment warehouses.
            </p>
          </div>

          <div className="bg-white dark:bg-zinc-900 p-8 rounded-3xl border border-gray-100 dark:border-zinc-850 space-y-4 shadow-xs">
            <div className="w-12 h-12 bg-amber-50 dark:bg-amber-950/40 rounded-xl flex items-center justify-center text-amber-600 dark:text-amber-500">
              <RefreshCcw size={22} />
            </div>
            <h3 className="font-bold text-zinc-850 dark:text-zinc-100 text-base">Direct Sourcing Integration</h3>
            <p className="text-sm text-zinc-550 dark:text-zinc-400 leading-relaxed">
              Do you have a specific formulation or accessory you need to source? We leverage our network of certified global manufacturers to deliver custom product runs.
            </p>
          </div>

        </div>

        {/* Wholesale Callout */}
        <div className="mt-16 bg-amber-50/50 dark:bg-zinc-900 p-8 md:p-12 rounded-3xl border border-amber-100/50 dark:border-zinc-850 text-center space-y-5">
          <span className="text-xs uppercase font-extrabold tracking-widest text-amber-600 dark:text-amber-500">Fast Invoicing & Setup</span>
          <h3 className="font-serif text-2xl font-bold text-zinc-900 dark:text-white">Get a Custom Wholesale Quotation</h3>
          <p className="text-sm text-zinc-550 dark:text-zinc-400 max-w-xl mx-auto">
            Discuss your order volume, private label options, delivery schedules, and price breaks with our account managers on WhatsApp.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <button
              onClick={handleWhatsAppContact}
              className="bg-[#25D366] hover:bg-[#20ba59] text-white font-bold py-3 px-8 rounded-full flex items-center justify-center gap-2 shadow-lg shadow-green-500/25 transition-all cursor-pointer"
            >
              <MessageSquare size={16} />
              Open Trade Desk Chat
            </button>
            <button
              onClick={() => navigateTo('contact')}
              className="bg-zinc-900 hover:bg-amber-600 text-white font-semibold py-3 px-8 rounded-full transition-colors cursor-pointer"
            >
              Submit Trade Form
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
