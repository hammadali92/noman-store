import React from 'react';
import { Scale, Calendar, Landmark, MessageSquare } from 'lucide-react';

export default function TermsConditions() {

  return (
    <div className="font-sans min-h-screen bg-[#fdfdfc] dark:bg-zinc-950 text-zinc-800 dark:text-zinc-200 transition-colors pb-24">
      {/* Header */}
      <div className="bg-zinc-900 text-white py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-3">
          <span className="text-xs uppercase font-extrabold tracking-widest text-amber-400">
            NOMAN AKHTAR LTD • LEGAL FRAMEWORK
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white m-0">
            Terms & Conditions
          </h1>
          <div className="flex justify-center items-center gap-2 text-zinc-400 text-xs font-semibold uppercase tracking-wider mt-4">
            <Calendar size={14} />
            <span>Last Updated: August 3, 2026</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 text-left space-y-12">

        {/* Legal card */}
        <div className="bg-amber-50/40 dark:bg-zinc-900/50 p-6 rounded-2xl border border-amber-100/50 dark:border-zinc-850 flex items-start gap-4">
          <Scale size={28} className="text-amber-600 flex-shrink-0 mt-1" />
          <div className="space-y-1">
            <h4 className="font-bold text-zinc-900 dark:text-white text-sm">Wholesale Trading Agreement</h4>
            <p className="text-xs text-zinc-650 dark:text-zinc-455 leading-relaxed">
              These terms govern the trade relationship and electronic inquiry pipelines between NOMAN AKHTAR LTD and any registered business client placing wholesale orders through this digital catalog.
            </p>
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-8">
          <div className="space-y-3">
            <h3 className="font-serif text-xl font-bold text-zinc-900 dark:text-white flex items-center gap-2">
              <Landmark size={18} className="text-amber-600" />
              1. Business Registration & Eligibility
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-355 leading-relaxed">
              To place inquiries or purchase wholesale items:
            </p>
            <ul className="list-disc pl-5 text-sm text-zinc-600 dark:text-zinc-355 space-y-1.5">
              <li>Buyers must represent a legally recognized corporate entity, sole trader, or authorized distributor.</li>
              <li>You agree to provide true business credentials, VAT numbers, and trading history upon request by our desk.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="font-serif text-xl font-bold text-zinc-900 dark:text-white flex items-center gap-2">
              <MessageSquare size={18} className="text-amber-600" />
              2. Product Listings and WhatsApp Inquiries
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-355 leading-relaxed">
              Prices listed on this website are suggested trade values and exclude VAT and shipping:
            </p>
            <ul className="list-disc pl-5 text-sm text-zinc-600 dark:text-zinc-355 space-y-1.5">
              <li>Inquiries placed via WhatsApp are not binding agreements until NOMAN AKHTAR LTD issues a formal corporate Proforma Invoice.</li>
              <li>Product configurations, ingredients lists, and specifications are subject to modifications based on import regulations and availability.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="font-serif text-xl font-bold text-zinc-900 dark:text-white flex items-center gap-2">
              <Scale size={18} className="text-amber-600" />
              3. Payment and Shipping terms
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-355 leading-relaxed">
              Payment is accepted via bank transfer directly to our corporate UK bank account, as detailed in the Proforma Invoice. Goods are released from our distribution hubs once funds settle in full. Standard shipping is coordinated within 3-5 working days.
            </p>
          </div>
        </div>

        {/* Contact details */}
        <div className="pt-8 border-t border-gray-150 dark:border-zinc-850 text-center">
          <p className="text-xs text-zinc-500">
            For legal inquiries, contact our compliance team:
          </p>
          <a href="mailto:info@nomanakhtarltd.com" className="text-sm font-semibold text-amber-600 hover:underline block mt-1">
            info@nomanakhtarltd.com
          </a>
        </div>

      </div>
    </div>
  );
}
