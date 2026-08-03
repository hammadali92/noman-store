import React, { useState } from 'react';
import { Mail, Phone, MapPin, Award, CheckCircle, Send, MessageSquare } from 'lucide-react';

export default function ContactUs() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 5000);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleWhatsAppContact = () => {
    const text = "Hi NOMAN AKHTAR LTD, I am contacting you from your store website.";
    window.open(`https://wa.me/447956853857?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="font-sans min-h-screen bg-[#fdfdfc] dark:bg-zinc-950 text-zinc-800 dark:text-zinc-200 transition-colors pb-24">
      {/* Page Header */}
      <div className="bg-zinc-900 text-white relative py-20 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80&w=1200"
          alt="Contact Us Background"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="relative z-20 max-w-4xl mx-auto space-y-3">
          <span className="text-xs uppercase font-extrabold tracking-widest text-amber-400">
            GET IN TOUCH WITH OUR OFFICE
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white m-0">
            Contact Us
          </h1>
          <p className="text-zinc-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Have questions regarding wholesale prices, shipments, or brand compliance? Contact our London office.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Office Details */}
          <div className="lg:col-span-5 text-left space-y-8">
            <div className="space-y-4">
              <h2 className="font-serif text-2xl font-bold text-zinc-900 dark:text-white">NOMAN AKHTAR LTD</h2>
              <p className="text-sm text-zinc-550 dark:text-zinc-450 leading-relaxed">
                Registered in England and Wales. We welcome inquiries from retail buyers, brand suppliers, and trading partners.
              </p>
            </div>

            {/* Details Box */}
            <div className="space-y-4 bg-zinc-50 dark:bg-zinc-900/40 p-6 rounded-2xl border border-gray-150 dark:border-zinc-850">
              
              <div className="flex gap-4 items-start">
                <MapPin className="text-amber-600 flex-shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-bold text-xs uppercase text-zinc-400 tracking-wider">Registered Address</h4>
                  <p className="text-sm text-zinc-700 dark:text-zinc-200 mt-1">
                    Office 20217, 182-184 High Street North, <br />
                    East Ham, London, E6 2JA, <br />
                    United Kingdom
                  </p>
                </div>
              </div>

              <div className="border-t border-gray-100 dark:border-zinc-800 my-4"></div>

              <div className="flex gap-4 items-center">
                <Phone className="text-amber-600 flex-shrink-0" size={18} />
                <div>
                  <h4 className="font-bold text-xs uppercase text-zinc-400 tracking-wider">Direct Telephone</h4>
                  <a href="tel:+447956853857" className="text-sm text-zinc-750 dark:text-zinc-200 hover:text-amber-600 font-semibold block mt-1">
                    +44 7956 853857
                  </a>
                </div>
              </div>

              <div className="border-t border-gray-100 dark:border-zinc-800 my-4"></div>

              <div className="flex gap-4 items-center">
                <Mail className="text-amber-600 flex-shrink-0" size={18} />
                <div>
                  <h4 className="font-bold text-xs uppercase text-zinc-400 tracking-wider">General Inquiries</h4>
                  <a href="mailto:info@nomanakhtarltd.com" className="text-sm text-zinc-750 dark:text-zinc-200 hover:text-amber-600 font-semibold block mt-1 break-all">
                    info@nomanakhtarltd.com
                  </a>
                </div>
              </div>

              <div className="border-t border-gray-100 dark:border-zinc-800 my-4"></div>

              <div className="flex gap-4 items-center">
                <Award className="text-amber-600 flex-shrink-0" size={18} />
                <div>
                  <h4 className="font-bold text-xs uppercase text-zinc-400 tracking-wider">Company Registration</h4>
                  <p className="text-sm text-zinc-700 dark:text-zinc-200 font-semibold mt-1">
                    No. 17352762 (England & Wales)
                  </p>
                </div>
              </div>

            </div>

            {/* Direct WhatsApp Box */}
            <div className="bg-[#25D366]/5 dark:bg-[#25D366]/10 p-6 rounded-2xl border border-[#25D366]/20 space-y-4">
              <h3 className="font-serif text-lg font-bold text-green-700 dark:text-green-500">Need Immediate Support?</h3>
              <p className="text-xs text-zinc-550 dark:text-zinc-400 leading-relaxed">
                Connect directly with our UK sales desk. Simply click below to launch WhatsApp.
              </p>
              <button
                onClick={handleWhatsAppContact}
                className="w-full bg-[#25D366] hover:bg-[#20ba59] text-white py-3 px-4 rounded-xl font-bold flex items-center justify-center gap-2 shadow-md shadow-green-500/10 transition-colors cursor-pointer text-sm"
              >
                <MessageSquare size={16} />
                Chat via WhatsApp
              </button>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 text-left">
            <div className="bg-white dark:bg-zinc-900 p-8 rounded-3xl border border-gray-100 dark:border-zinc-850 shadow-xs space-y-6">
              <div className="space-y-2">
                <h3 className="font-serif text-xl font-bold text-zinc-900 dark:text-white">Send Us a Message</h3>
                <p className="text-xs text-zinc-450 dark:text-zinc-400">Fill in the trade contact sheet below and our desk will respond within 24 business hours.</p>
              </div>

              {submitted ? (
                <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 p-6 rounded-2xl flex items-start gap-3">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-green-800 dark:text-green-400 text-sm">Message Sent Successfully!</h4>
                    <p className="text-xs text-green-650 dark:text-green-300 mt-1">Thank you for contacting NOMAN AKHTAR LTD. An agent from our compliance or sales desk will reply shortly.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-2">Your Name</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full bg-zinc-50 dark:bg-zinc-950 border border-gray-200 dark:border-zinc-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-amber-500 dark:text-white"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-2">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full bg-zinc-50 dark:bg-zinc-950 border border-gray-200 dark:border-zinc-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-amber-500 dark:text-white"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-2">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full bg-zinc-50 dark:bg-zinc-950 border border-gray-200 dark:border-zinc-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-amber-500 dark:text-white"
                      placeholder="Wholesale Inquiry / Import Compliance"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-2">Your Message</label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full bg-zinc-50 dark:bg-zinc-950 border border-gray-200 dark:border-zinc-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-amber-500 dark:text-white"
                      placeholder="Describe your wholesale volumes or brand requirements..."
                    />
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="w-full bg-zinc-900 hover:bg-amber-600 text-white font-bold py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer text-sm shadow-md"
                    >
                      <Send size={15} />
                      Send Inquiries
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
