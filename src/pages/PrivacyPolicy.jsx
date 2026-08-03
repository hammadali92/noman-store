import React from 'react';
import { ShieldCheck, Calendar, Lock, UserCheck, RefreshCcw } from 'lucide-react';

export default function PrivacyPolicy() {

  return (
    <div className="font-sans min-h-screen bg-[#fdfdfc] dark:bg-zinc-950 text-zinc-800 dark:text-zinc-200 transition-colors pb-24">
      {/* Header */}
      <div className="bg-zinc-900 text-white py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-3">
          <span className="text-xs uppercase font-extrabold tracking-widest text-amber-400">
            NOMAN AKHTAR LTD • PRIVACY DESK
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white m-0">
            Privacy Policy
          </h1>
          <div className="flex justify-center items-center gap-2 text-zinc-400 text-xs font-semibold uppercase tracking-wider mt-4">
            <Calendar size={14} />
            <span>Effective Date: August 3, 2026</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 text-left space-y-12">
        
        {/* Compliance Card */}
        <div className="bg-amber-50/40 dark:bg-zinc-900/50 p-6 rounded-2xl border border-amber-100/50 dark:border-zinc-850 flex items-start gap-4">
          <ShieldCheck size={28} className="text-amber-600 flex-shrink-0 mt-1" />
          <div className="space-y-1">
            <h4 className="font-bold text-zinc-900 dark:text-white text-sm">GDPR & UK Data Compliance Statement</h4>
            <p className="text-xs text-zinc-650 dark:text-zinc-450 leading-relaxed">
              This policy describes how NOMAN AKHTAR LTD (Company Number: 17352762) collects, stores, processes, and protects your personal data in accordance with the United Kingdom General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
            </p>
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-8">
          <div className="space-y-3">
            <h3 className="font-serif text-xl font-bold text-zinc-900 dark:text-white flex items-center gap-2">
              <Lock size={18} className="text-amber-600" />
              1. Information We Collect
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-355 leading-relaxed">
              We collect personal details that you provide directly to us when utilizing our WhatsApp trading channel, using our contact forms, or subscribing to wholesale catalogues. This includes:
            </p>
            <ul className="list-disc pl-5 text-sm text-zinc-600 dark:text-zinc-355 space-y-1.5">
              <li>Contact Details: Name, email address, corporate telephone number, and WhatsApp identifier.</li>
              <li>Business Information: Trading entity name, company registration address, VAT numbers, and delivery details.</li>
              <li>Order Inquiries: Log of products you show interest in, quantities, and chat correspondence histories.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="font-serif text-xl font-bold text-zinc-900 dark:text-white flex items-center gap-2">
              <UserCheck size={18} className="text-amber-600" />
              2. How We Use Your Data
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-355 leading-relaxed">
              We process personal information under the following legal bases:
            </p>
            <ul className="list-disc pl-5 text-sm text-zinc-600 dark:text-zinc-355 space-y-1.5">
              <li><strong>Contract Fulfillment:</strong> To prepare invoice documents, coordinate shipments, and verify delivery instructions.</li>
              <li><strong>Legitimate Interests:</strong> To verify wholesale buyer authenticity to prevent corporate fraud.</li>
              <li><strong>Consent:</strong> To distribute updated product lists and seasonal catalogs via email or WhatsApp messages.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="font-serif text-xl font-bold text-zinc-900 dark:text-white flex items-center gap-2">
              <RefreshCcw size={18} className="text-amber-600" />
              3. Data Retention and Sharing
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-355 leading-relaxed">
              We retain business records, transaction history, and communication logs for up to 6 years to satisfy United Kingdom tax and corporate auditing regulations. We do not sell or lease customer information to third parties. We share details solely with:
            </p>
            <ul className="list-disc pl-5 text-sm text-zinc-600 dark:text-zinc-355 space-y-1.5">
              <li>Authorized UK logistics, courier, and shipping companies.</li>
              <li>Secure cloud systems hosting our invoices and billing processes.</li>
              <li>HM Revenue & Customs (HMRC) when legally demanded.</li>
            </ul>
          </div>
        </div>

        {/* Contact details */}
        <div className="pt-8 border-t border-gray-150 dark:border-zinc-850 text-center">
          <p className="text-xs text-zinc-500">
            For data inquiries, access requests, or deletion requests, contact our compliance officer at:
          </p>
          <a href="mailto:info@nomanakhtarltd.com" className="text-sm font-semibold text-amber-600 hover:underline block mt-1">
            info@nomanakhtarltd.com
          </a>
        </div>

      </div>
    </div>
  );
}
