import React, { useState, useMemo } from 'react';
import { useStore } from '../context/StoreContext';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { Star, ShieldCheck, Heart, ShoppingBag, Truck, ChevronRight, MessageSquare, Award } from 'lucide-react';

export default function ProductDetail() {
  const { selectedProductId, navigateTo, addToCart, wishlist, toggleWishlist } = useStore();

  // Find target product
  const product = useMemo(() => {
    return products.find((p) => p.id === selectedProductId) || products[0];
  }, [selectedProductId]);

  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [zoomStyle, setZoomStyle] = useState({ display: 'none' });
  const [quantity, setQuantity] = useState(1);

  // Zoom effect handler
  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.pageX - left - window.scrollX) / width) * 100;
    const y = ((e.pageY - top - window.scrollY) / height) * 100;
    setZoomStyle({
      display: 'block',
      backgroundImage: `url(${product.images[activeImageIdx]})`,
      backgroundPosition: `${x}% ${y}%`,
      backgroundSize: '200%'
    });
  };

  const handleMouseLeave = () => {
    setZoomStyle({ display: 'none' });
  };

  // WhatsApp checkout string generator
  const handleWhatsAppCheckout = () => {
    const productUrl = `${window.location.origin}/product/${product.id}`;
    const text = `Hi NOMAN AKHTAR LTD, I want to inquire/buy this product: *${product.name}*\nQty: ${quantity}\nPrice: £${product.price.toFixed(2)} each\nLink: ${productUrl}`;
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/447956853857?text=${encoded}`, '_blank');
  };

  // Related products (same category, excluding current product)
  const relatedProducts = useMemo(() => {
    return products
      .filter((p) => p.category === product.category && p.id !== product.id)
      .slice(0, 3);
  }, [product]);

  const isWishlisted = wishlist.includes(product.id);

  return (
    <div className="font-sans min-h-screen bg-[#fdfdfc] dark:bg-zinc-950 text-zinc-800 dark:text-zinc-200 transition-colors pb-24">
      
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-400">
          <button onClick={() => navigateTo('home')} className="hover:text-amber-600 transition-colors">Home</button>
          <ChevronRight size={12} />
          <button onClick={() => navigateTo('category', product.category)} className="hover:text-amber-600 transition-colors">
            {product.category === 'beauty-cosmetics' ? 'Beauty' : 'Kitchen'}
          </button>
          <ChevronRight size={12} />
          <span className="text-zinc-650 dark:text-zinc-300 truncate max-w-xs">{product.name}</span>
        </div>
      </div>

      {/* Main Detail Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Media Gallery */}
          <div className="lg:col-span-6 space-y-4">
            
            {/* Primary Main Zoom-enabled Image */}
            <div
              className="relative aspect-square rounded-3xl overflow-hidden bg-zinc-50 dark:bg-zinc-900 border border-gray-100 dark:border-zinc-850 cursor-zoom-in"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src={product.images[activeImageIdx]}
                alt={product.name}
                className="w-full h-full object-cover transition-opacity duration-300"
              />
              
              {/* Zoom Panel */}
              <div
                className="absolute inset-0 z-20 pointer-events-none hidden lg:block bg-no-repeat transition-all duration-75 border-2 border-amber-500 rounded-3xl"
                style={zoomStyle}
              ></div>

              {/* Badge overlay */}
              {product.badge && (
                <span className="absolute top-4 left-4 z-10 bg-zinc-950/80 backdrop-blur-xs text-white text-[10px] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full border border-white/10">
                  {product.badge}
                </span>
              )}
            </div>

            {/* Gallery Thumbnails row */}
            <div className="flex gap-4 overflow-x-auto pb-2">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIdx(idx)}
                  className={`w-20 h-20 rounded-xl overflow-hidden border-2 flex-shrink-0 transition-all ${
                    idx === activeImageIdx
                      ? 'border-amber-600 scale-95 shadow-md'
                      : 'border-transparent hover:border-gray-300 dark:hover:border-zinc-700'
                  }`}
                >
                  <img src={img} alt={`thumbnail ${idx}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

          </div>

          {/* Right Column: Product Info Specs */}
          <div className="lg:col-span-6 text-left space-y-6">
            
            {/* Title, Category & Ratings */}
            <div className="space-y-3">
              <span className="text-xs uppercase font-extrabold tracking-widest text-amber-600 dark:text-amber-500 bg-amber-500/10 px-3.5 py-1.5 rounded-full border border-amber-500/25">
                {product.subcategory}
              </span>
              <h1 className="font-serif text-2xl sm:text-4xl font-bold text-zinc-900 dark:text-white leading-tight mt-3">
                {product.name}
              </h1>

              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={15}
                      className={
                        i < Math.floor(product.rating)
                          ? 'text-amber-500 fill-amber-500'
                          : 'text-gray-300'
                      }
                    />
                  ))}
                  <span className="text-sm font-bold text-zinc-800 dark:text-zinc-200 ml-1">
                    {product.rating}
                  </span>
                </div>
                <span className="text-zinc-300 dark:text-zinc-700">|</span>
                <span className="text-xs text-zinc-500 font-medium">
                  {product.reviewsCount} customer reviews
                </span>
              </div>
            </div>

            {/* Price Box */}
            <div className="bg-zinc-50 dark:bg-zinc-900/40 p-5 rounded-2xl border border-gray-100 dark:border-zinc-850 flex items-center justify-between">
              <div>
                <p className="text-xs text-zinc-400 font-bold uppercase tracking-wider">Suggested retail price</p>
                <p className="text-3xl font-bold text-zinc-900 dark:text-white mt-1">£{product.price.toFixed(2)}</p>
              </div>
              <span className="text-xs bg-amber-550/15 text-amber-600 dark:text-amber-500 font-bold px-3 py-1.5 rounded-lg border border-amber-500/10">
                UK Supply Duty Paid
              </span>
            </div>

            {/* Description Paragraph */}
            <p className="text-zinc-650 dark:text-zinc-300 text-sm sm:text-base leading-relaxed">
              {product.description}
            </p>

            {/* Key Benefits (Bullet points) */}
            <div className="space-y-3">
              <h3 className="text-sm font-bold text-zinc-900 dark:text-white uppercase tracking-wider">Key Benefits</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-zinc-600 dark:text-zinc-300">
                {product.benefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <ShieldCheck size={16} className="text-amber-600 flex-shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Purchase Options Row */}
            <div className="pt-4 border-t border-gray-100 dark:border-zinc-850 space-y-4">
              
              <div className="flex flex-wrap items-center gap-4">
                
                {/* Quantity Incrementor */}
                <div className="flex items-center border border-gray-250 dark:border-zinc-800 rounded-full overflow-hidden bg-white dark:bg-zinc-900 h-12">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="px-4 py-2 hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-500 cursor-pointer"
                  >
                    -
                  </button>
                  <span className="text-sm font-bold px-4 dark:text-white">{quantity}</span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="px-4 py-2 hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-500 cursor-pointer"
                  >
                    +
                  </button>
                </div>

                {/* WhatsApp Order Button */}
                <button
                  onClick={handleWhatsAppCheckout}
                  className="flex-1 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold h-12 rounded-full flex items-center justify-center gap-2 shadow-lg shadow-green-500/25 transition-all scale-100 hover:scale-[1.01] active:scale-[0.99] cursor-pointer min-w-[200px]"
                >
                  <MessageSquare size={18} />
                  Buy on WhatsApp
                </button>

                {/* Wishlist Icon Toggle */}
                <button
                  onClick={() => toggleWishlist(product.id)}
                  className="h-12 w-12 rounded-full border border-gray-200 dark:border-zinc-800 flex items-center justify-center text-zinc-550 dark:text-zinc-400 hover:text-red-500 hover:bg-red-50/50 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
                  aria-label="Save to Wishlist"
                >
                  <Heart size={18} className={isWishlisted ? 'fill-red-500 text-red-500' : ''} />
                </button>

                {/* Add to Cart Drawer */}
                <button
                  onClick={() => addToCart(product, quantity)}
                  className="h-12 border border-zinc-900 hover:bg-zinc-900 hover:text-white dark:border-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-white text-zinc-900 dark:text-zinc-200 font-bold px-6 rounded-full flex items-center justify-center gap-2 transition-all cursor-pointer text-xs"
                >
                  <ShoppingBag size={14} />
                  Add to Cart
                </button>

              </div>

              {/* Trust badges row right below checkout */}
              <div className="grid grid-cols-3 gap-2 pt-2 text-[10px] text-zinc-500 font-medium">
                <div className="flex items-center gap-1.5 justify-center py-2 px-1 bg-zinc-50 dark:bg-zinc-900 rounded-xl border border-gray-100 dark:border-zinc-850">
                  <ShieldCheck size={12} className="text-amber-600" />
                  <span>100% Authentic</span>
                </div>
                <div className="flex items-center gap-1.5 justify-center py-2 px-1 bg-zinc-50 dark:bg-zinc-900 rounded-xl border border-gray-100 dark:border-zinc-850">
                  <Truck size={12} className="text-amber-600" />
                  <span>Fast UK Delivery</span>
                </div>
                <div className="flex items-center gap-1.5 justify-center py-2 px-1 bg-zinc-50 dark:bg-zinc-900 rounded-xl border border-gray-100 dark:border-zinc-850">
                  <Award size={12} className="text-amber-600" />
                  <span>UK Compliant</span>
                </div>
              </div>

            </div>

            {/* Spec / Info Tabs */}
            <div className="border-t border-gray-100 dark:border-zinc-850 pt-6 space-y-4">
              <h3 className="text-sm font-bold text-zinc-900 dark:text-white uppercase tracking-wider">Specifications</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2.5 text-sm">
                {Object.entries(product.specs).map(([key, val]) => (
                  <div key={key} className="flex justify-between border-b border-gray-50 dark:border-zinc-850/50 pb-1.5">
                    <span className="text-zinc-400 font-medium">{key}</span>
                    <span className="text-zinc-800 dark:text-zinc-200 font-semibold">{val}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Usage Instructions */}
            <div className="space-y-3 pt-2">
              <h3 className="text-sm font-bold text-zinc-900 dark:text-white uppercase tracking-wider">Usage Instructions</h3>
              <ol className="list-decimal pl-5 text-sm text-zinc-650 dark:text-zinc-300 space-y-1.5">
                {product.usage.map((step, idx) => (
                  <li key={idx}>{step}</li>
                ))}
              </ol>
            </div>

          </div>

        </div>
      </section>

      {/* Testimonials Review layout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 pt-16 border-t border-gray-100 dark:border-zinc-850 text-left">
        <h2 className="font-serif text-2xl font-bold text-zinc-900 dark:text-white mb-8">Customer Reviews</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-gray-100 dark:border-zinc-850 space-y-3 shadow-xs">
            <div className="flex items-center gap-1 text-amber-500">
              {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-current" />)}
            </div>
            <p className="text-sm font-bold text-zinc-800 dark:text-zinc-200">"Exceptional Wholesale Partner"</p>
            <p className="text-xs text-zinc-500 leading-relaxed">
              "We ordered a bulk package of the copper-ceramic cookware sets. Excellent quality, compliant boxes, and our account manager coordinated shipping within 48 hours via WhatsApp."
            </p>
            <div className="pt-2">
              <p className="text-[10px] font-bold text-zinc-700 dark:text-zinc-300">Charlotte G. • Bristol, UK</p>
              <p className="text-[9px] text-zinc-450">Verified Supplier Deal</p>
            </div>
          </div>

          <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-gray-100 dark:border-zinc-850 space-y-3 shadow-xs">
            <div className="flex items-center gap-1 text-amber-500">
              {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-current" />)}
            </div>
            <p className="text-sm font-bold text-zinc-800 dark:text-zinc-200">"Top-Tier Skincare Formulation"</p>
            <p className="text-xs text-zinc-500 leading-relaxed">
              "The Radiance Rose Glow serum sells out instantly in our beauty shop. Compliant labels, authentic ingredients, and extremely responsive wholesale support."
            </p>
            <div className="pt-2">
              <p className="text-[10px] font-bold text-zinc-700 dark:text-zinc-300">Sarah M. • London Cosmetics Ltd</p>
              <p className="text-[9px] text-zinc-450">Verified Supplier Deal</p>
            </div>
          </div>

          <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-gray-100 dark:border-zinc-850 space-y-3 shadow-xs">
            <div className="flex items-center gap-1 text-amber-500">
              {[...Array(4)].map((_, i) => <Star key={i} size={14} className="fill-current" />)}
              <Star size={14} className="text-gray-300" />
            </div>
            <p className="text-sm font-bold text-zinc-800 dark:text-zinc-200">"Highly Recommend Their Services"</p>
            <p className="text-xs text-zinc-500 leading-relaxed">
              "Highly professional team. They answered all registration compliance questions for our imports quickly. Standardized products that UK clients love."
            </p>
            <div className="pt-2">
              <p className="text-[10px] font-bold text-zinc-700 dark:text-zinc-300">David K. • Home Goods Wholesale</p>
              <p className="text-[9px] text-zinc-450">Verified Supplier Deal</p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products Section */}
      {relatedProducts.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-serif text-2xl font-bold text-zinc-900 dark:text-white">Related Products</h2>
            <button
              onClick={() => navigateTo('category', product.category)}
              className="text-xs font-bold uppercase tracking-wider text-amber-600 hover:underline cursor-pointer"
            >
              Shop All
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}

    </div>
  );
}
