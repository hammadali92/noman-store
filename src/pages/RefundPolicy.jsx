import React from 'react';
import { FileText, Calendar, Truck, AlertCircle, ShieldAlert } from 'lucide-react';

export default function RefundPolicy() {

  return (
    <div className="font-sans min-h-screen bg-[#fdfdfc] dark:bg-zinc-950 text-zinc-800 dark:text-zinc-200 transition-colors pb-24">
      {/* Header */}
      <div className="bg-zinc-900 text-white py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-3">
          <span className="text-xs uppercase font-extrabold tracking-widest text-amber-400">
            NOMAN AKHTAR LTD • QUALITY CONTROL
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white m-0">
            Return & Refund Policy
          </h1>
          <div className="flex justify-center items-center gap-2 text-zinc-400 text-xs font-semibold uppercase tracking-wider mt-4">
            <Calendar size={14} />
            <span>Effective Date: August 3, 2026</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 text-left space-y-12">

        {/* Refund Card */}
        <div className="bg-amber-50/40 dark:bg-zinc-900/50 p-6 rounded-2xl border border-amber-100/50 dark:border-zinc-850 flex items-start gap-4">
          <FileText size={28} className="text-amber-600 flex-shrink-0 mt-1" />
          <div className="space-y-1">
            <h4 className="font-bold text-zinc-900 dark:text-white text-sm">Wholesale Return Guarantee</h4>
            <p className="text-xs text-zinc-650 dark:text-zinc-455 leading-relaxed">
              At NOMAN AKHTAR LTD, we ensure that all distributed batches meet top regulatory standards. Please inspect wholesale packages immediately upon arrival.
            </p>
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-8">
          <div className="space-y-3">
            <h3 className="font-serif text-xl font-bold text-zinc-900 dark:text-white flex items-center gap-2">
              <AlertCircle size={18} className="text-amber-600" />
              1. Reporting Damaged or Incorrect Batches
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-355 leading-relaxed">
              If an item is damaged in transit or a batch contains discrepancies:
            </p>
            <ul className="list-disc pl-5 text-sm text-zinc-600 dark:text-zinc-355 space-y-1.5">
              <li>Report the discrepancy via Email or WhatsApp within **14 days** of delivery.</li>
              <li>Provide digital photographs or video of the original packaging seals and damaged components.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="font-serif text-xl font-bold text-zinc-900 dark:text-white flex items-center gap-2">
              <Truck size={18} className="text-amber-600" />
              2. Return Process
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-355 leading-relaxed">
              All approved returns must be coordinated with our London logistics desk:
            </p>
            <ul className="list-disc pl-5 text-sm text-zinc-600 dark:text-zinc-355 space-y-1.5">
              <li>Products must be returned in their original packaging, unopened, and suitable for resale.</li>
              <li>Returns should be sent to our registered address: Office 20217, 182-184 High Street North, East Ham, London, E6 2JA.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="font-serif text-xl font-bold text-zinc-900 dark:text-white flex items-center gap-2">
              <ShieldAlert size={18} className="text-amber-600" />
              3. Refund Settlement
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-355 leading-relaxed">
              Once returned items are received and inspected by our warehouse quality desk:
            </p>
            <ul className="list-disc pl-5 text-sm text-zinc-600 dark:text-zinc-355 space-y-1.5">
              <li>Refund approvals are confirmed via email.</li>
              <li>Refund transactions are credited directly to the client's business bank account within **5-7 working days**.</li>
            </ul>
          </div>
        </div>

        {/* Contact details */}
        <div className="pt-8 border-t border-gray-150 dark:border-zinc-850 text-center">
          <p className="text-xs text-zinc-500">
            For returns and refund authorizations, contact:
          </p>
          <a href="mailto:info@nomanakhtarltd.com" className="text-sm font-semibold text-amber-600 hover:underline block mt-1">
            info@nomanakhtarltd.com
          </a>
        </div>

      </div>
    </div>
  );
}
