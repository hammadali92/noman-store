import React, { useState, useEffect } from 'react';
import { useStore } from '../context/StoreContext';
import { products, categories } from '../data/products';
import ProductCard from '../components/ProductCard';
import { ShieldCheck, Truck, Award, ArrowRight, ArrowLeft } from 'lucide-react';

const heroSlides = [
  {
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80&w=1200',
    title: 'Luxury Cosmetics & Beauty Solutions',
    subtitle: 'Strictly Compliant Wholesale & Retail Supplies',
    description: 'Discover our curated selection of premium UK-compliant cosmetic lines sourced directly from global luxury brands.',
    category: 'beauty-cosmetics'
  },
  {
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=1200',
    title: 'Modern Cookware & Kitchenware',
    subtitle: 'Functional Art for Everyday Cooking',
    description: 'Transform your culinary space with non-stick cookware sets and modular organizers built to last.',
    category: 'home-kitchen'
  }
];

export default function Home() {
  const { navigateTo } = useStore();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto slide interval
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  // Take top 3 trending products
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="font-sans pb-16 bg-[#fdfdfc] dark:bg-zinc-950 text-zinc-800 dark:text-zinc-200 transition-colors">
      
      {/* 1. Hero Carousel Banner */}
      <section className="relative h-[550px] md:h-[650px] overflow-hidden bg-zinc-900">
        {heroSlides.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${idx === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          >
            {/* Background Image Overlay */}
            <div className="absolute inset-0 bg-black/45 z-10"></div>
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover transform scale-105 transition-all duration-[6000ms] ease-out"
            />
            {/* Slide Content */}
            <div className="absolute inset-0 z-20 flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-left">
                <div className="max-w-2xl text-white">
                  <span className="text-amber-500 font-bold uppercase tracking-widest text-xs md:text-sm bg-amber-500/10 px-4 py-1.5 rounded-full border border-amber-500/30">
                    {slide.subtitle}
                  </span>
                  <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold mt-4 mb-6 leading-tight tracking-tight text-white">
                    {slide.title}
                  </h1>
                  <p className="text-zinc-250 text-sm sm:text-lg mb-8 leading-relaxed">
                    {slide.description}
                  </p>
                  <div className="flex gap-4">
                    <button
                      onClick={() => navigateTo('category', slide.category)}
                      className="bg-amber-600 hover:bg-amber-700 text-white font-semibold text-sm px-8 py-3.5 rounded-full shadow-lg hover:shadow-amber-600/30 transition-all transform hover:-translate-y-0.5 cursor-pointer"
                    >
                      Shop Category
                    </button>
                    <button
                      onClick={() => navigateTo('about')}
                      className="border border-white/40 hover:bg-white/10 text-white font-semibold text-sm px-8 py-3.5 rounded-full transition-all cursor-pointer"
                    >
                      B2B Profile
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        {/* Carousel controls */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white flex items-center justify-center transition-all backdrop-blur-xs cursor-pointer"
        >
          <ArrowLeft size={20} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white flex items-center justify-center transition-all backdrop-blur-xs cursor-pointer"
        >
          <ArrowRight size={20} />
        </button>
      </section>

      {/* 2. Trust Badges Section */}
      <section className="bg-zinc-50 dark:bg-zinc-900 border-b border-gray-100 dark:border-zinc-800 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4 bg-white dark:bg-zinc-950 p-6 rounded-2xl border border-gray-100 dark:border-zinc-800 shadow-xs">
              <div className="w-12 h-12 bg-amber-50 dark:bg-amber-950/40 rounded-xl flex items-center justify-center text-amber-600 dark:text-amber-500">
                <Award size={24} />
              </div>
              <div className="text-left">
                <h3 className="text-sm font-bold text-zinc-900 dark:text-white">Registered UK Company</h3>
                <p className="text-xs text-zinc-500 mt-0.5">Officially registered under Reg No. 17352762</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white dark:bg-zinc-950 p-6 rounded-2xl border border-gray-100 dark:border-zinc-800 shadow-xs">
              <div className="w-12 h-12 bg-amber-50 dark:bg-amber-950/40 rounded-xl flex items-center justify-center text-amber-600 dark:text-amber-500">
                <ShieldCheck size={24} />
              </div>
              <div className="text-left">
                <h3 className="text-sm font-bold text-zinc-900 dark:text-white">100% Quality Assured</h3>
                <p className="text-xs text-zinc-500 mt-0.5">UK regulation compliant cosmetic batches</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white dark:bg-zinc-950 p-6 rounded-2xl border border-gray-100 dark:border-zinc-800 shadow-xs">
              <div className="w-12 h-12 bg-amber-50 dark:bg-amber-950/40 rounded-xl flex items-center justify-center text-amber-600 dark:text-amber-500">
                <Truck size={24} />
              </div>
              <div className="text-left">
                <h3 className="text-sm font-bold text-zinc-900 dark:text-white">Secure Nationwide Shipping</h3>
                <p className="text-xs text-zinc-500 mt-0.5">Dependable bulk logistics for UK businesses</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Featured Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs uppercase font-extrabold tracking-widest text-amber-600 dark:text-amber-500">Explore Collections</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold mt-2 text-zinc-900 dark:text-white">Browse Categories</h2>
          <p className="text-sm text-zinc-550 dark:text-zinc-400 mt-3 leading-relaxed">
            Strictly selected product categories offering the best value for UK merchants, and consumers alike.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <div
              key={cat.id}
              onClick={() => navigateTo('category', cat.id)}
              className="group relative h-96 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl border border-gray-100 dark:border-zinc-900 cursor-pointer transition-all duration-500"
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors z-10"></div>
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end text-left text-white">
                <h3 className="font-serif text-2xl font-bold tracking-tight mb-2 text-white">
                  {cat.name}
                </h3>
                <p className="text-zinc-250 text-xs sm:text-sm mb-4 leading-relaxed max-w-md">
                  {cat.description}
                </p>
                <div className="inline-flex items-center gap-1 text-sm font-semibold text-amber-400 group-hover:text-amber-300 transition-colors">
                  Shop Collection <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Company Intro Section (Trust-building for wholesale brands) */}
      <section className="bg-amber-50/40 dark:bg-zinc-900/50 py-16 md:py-24 border-y border-amber-100/50 dark:border-zinc-850">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs uppercase font-extrabold tracking-widest text-amber-600 dark:text-amber-500">Corporate Compliance</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white leading-tight">
                Partner with NOMAN AKHTAR LTD
              </h2>
              <div className="w-16 h-1 bg-amber-550 rounded-full"></div>
              <p className="text-zinc-650 dark:text-zinc-300 text-sm sm:text-base leading-relaxed">
                Registered in England and Wales under Company Registration Number <strong>17352762</strong>, NOMAN AKHTAR LTD has emerged as a premium trade partner for local UK retailers and global manufacturers.
              </p>
              <p className="text-zinc-650 dark:text-zinc-300 text-sm sm:text-base leading-relaxed">
                By maintaining strict compliance policies, offering certified product batches, and deploying immediate WhatsApp trading channels, we guarantee speed, transparency, and product originality.
              </p>
              <button
                onClick={() => navigateTo('about')}
                className="bg-zinc-900 hover:bg-amber-600 text-white font-semibold text-xs py-3.5 px-7 rounded-full shadow-md transition-all cursor-pointer"
              >
                Learn More About Us
              </button>
            </div>
            
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-zinc-900 p-8 rounded-2xl shadow-xs border border-gray-100 dark:border-zinc-800 space-y-3">
                <span className="text-4xl font-serif text-amber-550 font-bold">100%</span>
                <h4 className="font-bold text-zinc-800 dark:text-zinc-200 text-sm">Regulatory Compliance</h4>
                <p className="text-xs text-zinc-550 dark:text-zinc-400">All inventory batches are audited and certified before importation into the United Kingdom.</p>
              </div>
              <div className="bg-white dark:bg-zinc-900 p-8 rounded-2xl shadow-xs border border-gray-100 dark:border-zinc-800 space-y-3">
                <span className="text-4xl font-serif text-amber-550 font-bold">24/7</span>
                <h4 className="font-bold text-zinc-800 dark:text-zinc-200 text-sm">WhatsApp Response</h4>
                <p className="text-xs text-zinc-550 dark:text-zinc-400">Get direct prices, customized wholesale quotations, and delivery confirmations in minutes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Trending / Best Seller Products Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="flex flex-col sm:flex-row items-center sm:items-end justify-between mb-12 gap-4">
          <div className="text-center sm:text-left">
            <span className="text-xs uppercase font-extrabold tracking-widest text-amber-600 dark:text-amber-500">Trending Now</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mt-2 text-zinc-900 dark:text-white">Our Best Sellers</h2>
          </div>
          <button
            onClick={() => navigateTo('category', 'all')}
            className="flex items-center gap-1.5 text-sm font-semibold text-amber-600 hover:text-amber-700 transition-colors cursor-pointer"
          >
            View All Products <ArrowRight size={16} />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

    </div>
  );
}
