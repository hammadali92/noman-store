import React from 'react';
import { useStore } from '../context/StoreContext';
import { Heart, ShoppingBag, Star } from 'lucide-react';

export default function ProductCard({ product }) {
  const { navigateTo, addToCart, wishlist, toggleWishlist } = useStore();
  const isWishlisted = wishlist.includes(product.id);

  // Fallback default images
  const primaryImage = product.images[0];
  const secondaryImage = product.images[1] || product.images[0];

  const handleCardClick = () => {
    navigateTo('product-detail', null, product.id);
  };

  const handleAddToCart = (e) => {
    e.stopPropagation(); // Avoid triggering card navigation
    addToCart(product, 1);
  };

  const handleWishlistToggle = (e) => {
    e.stopPropagation(); // Avoid triggering card navigation
    toggleWishlist(product.id);
  };

  return (
    <div
      onClick={handleCardClick}
      className="group relative bg-white dark:bg-zinc-900/60 rounded-3xl overflow-hidden border border-gray-100 dark:border-zinc-850 shadow-sm hover:shadow-xl hover:border-amber-250 dark:hover:border-zinc-800 transition-all duration-500 flex flex-col h-full cursor-pointer"
    >
      {/* Product Image Section */}
      <div className="relative overflow-hidden aspect-[4/5] bg-zinc-50 dark:bg-zinc-800/40">
        
        {/* Badge Overlay */}
        {product.badge && (
          <span className="absolute top-4 left-4 z-10 bg-zinc-950/80 backdrop-blur-xs text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-white/10">
            {product.badge}
          </span>
        )}

        {/* Wishlist Button Overlay */}
        <button
          onClick={handleWishlistToggle}
          className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-white/90 dark:bg-zinc-900/90 shadow-md text-zinc-650 hover:text-red-500 transition-all scale-90 group-hover:scale-100 hover:scale-110 cursor-pointer"
          aria-label="Add to wishlist"
        >
          <Heart size={16} className={`${isWishlisted ? 'fill-red-500 text-red-500' : ''}`} />
        </button>

        {/* Swapping Hover Image */}
        <div className="w-full h-full relative">
          <img
            src={primaryImage}
            alt={product.name}
            loading="lazy"
            className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:opacity-0"
          />
          <img
            src={secondaryImage}
            alt={`${product.name} hover view`}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover scale-105 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-out"
          />
        </div>

        {/* Quick Add To Cart Hover Panel */}
        <div className="absolute inset-x-4 bottom-4 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-350 z-10">
          <button
            onClick={handleAddToCart}
            className="w-full bg-zinc-900 hover:bg-amber-600 dark:bg-zinc-850 dark:hover:bg-amber-600 text-white font-semibold text-xs py-3 rounded-full flex items-center justify-center gap-2 shadow-lg shadow-black/10 hover:shadow-amber-600/20 transition-all cursor-pointer"
          >
            <ShoppingBag size={14} />
            Quick Add to Cart
          </button>
        </div>
      </div>

      {/* Info Content Section */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <span className="text-[10px] uppercase font-bold tracking-widest text-amber-600 dark:text-amber-500">
            {product.subcategory}
          </span>
          <h3 className="font-serif text-sm font-bold text-zinc-900 dark:text-zinc-100 mt-1 line-clamp-2 leading-snug group-hover:text-amber-600 transition-colors">
            {product.name}
          </h3>
        </div>

        <div className="mt-4 pt-3 border-t border-gray-50 dark:border-zinc-850 flex items-center justify-between">
          <span className="text-base font-bold text-zinc-900 dark:text-white">
            £{product.price.toFixed(2)}
          </span>
          
          {/* Rating */}
          <div className="flex items-center gap-1">
            <Star size={12} className="text-amber-500 fill-amber-500" />
            <span className="text-xs font-bold text-zinc-800 dark:text-zinc-300">{product.rating}</span>
            <span className="text-[10px] text-zinc-400">({product.reviewsCount})</span>
          </div>
        </div>
      </div>
    </div>
  );
}
