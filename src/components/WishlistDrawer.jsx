import React from 'react';
import { useStore } from '../context/StoreContext';
import { products } from '../data/products';
import { X, Heart, ShoppingBag, Trash2 } from 'lucide-react';

export default function WishlistDrawer() {
  const {
    wishlist,
    isWishlistOpen,
    setIsWishlistOpen,
    toggleWishlist,
    addToCart,
  } = useStore();

  if (!isWishlistOpen) return null;

  // Filter products in wishlist
  const wishlistItems = products.filter((p) => wishlist.includes(p.id));

  const handleMoveToCart = (product) => {
    addToCart(product, 1);
    toggleWishlist(product.id); // Remove from wishlist on adding to cart
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden font-sans">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
        onClick={() => setIsWishlistOpen(false)}
      ></div>

      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white dark:bg-zinc-900 shadow-2xl flex flex-col">
          {/* Header */}
          <div className="px-6 py-5 border-b border-gray-100 dark:border-zinc-800 flex items-center justify-between">
            <h2 className="text-lg font-serif font-bold text-zinc-900 dark:text-white flex items-center gap-2">
              <Heart size={20} className="text-red-500 fill-current" />
              Saved Items Wishlist
            </h2>
            <button
              onClick={() => setIsWishlistOpen(false)}
              className="p-1 rounded-full text-gray-400 hover:text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all cursor-pointer"
            >
              <X size={20} />
            </button>
          </div>

          {/* Items List */}
          <div className="flex-1 py-6 overflow-y-auto px-6 space-y-6">
            {wishlistItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 bg-zinc-50 dark:bg-zinc-800/50 rounded-full flex items-center justify-center mb-4">
                  <Heart size={28} className="text-zinc-400" />
                </div>
                <h3 className="text-base font-bold text-zinc-800 dark:text-zinc-200">Wishlist is empty</h3>
                <p className="text-sm text-zinc-500 mt-1 max-w-xs">
                  Save products you like here for quick wholesale ordering.
                </p>
                <button
                  onClick={() => setIsWishlistOpen(false)}
                  className="mt-6 text-sm font-semibold text-amber-600 dark:text-amber-500 hover:underline cursor-pointer"
                >
                  Explore Products
                </button>
              </div>
            ) : (
              wishlistItems.map((product) => (
                <div key={product.id} className="flex items-start gap-4 pb-6 border-b border-gray-100 dark:border-zinc-850">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-20 h-20 object-cover rounded-xl border border-gray-100 dark:border-zinc-800"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start gap-2">
                      <h4 className="text-sm font-bold text-zinc-850 dark:text-zinc-200 truncate">{product.name}</h4>
                      <button
                        onClick={() => toggleWishlist(product.id)}
                        className="text-gray-400 hover:text-red-500 transition-colors p-0.5 cursor-pointer"
                        aria-label="Remove from wishlist"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                    <p className="text-xs text-zinc-500 mt-0.5">{product.subcategory}</p>
                    <p className="text-sm font-semibold text-amber-600 dark:text-amber-500 mt-1">£{product.price.toFixed(2)}</p>

                    <button
                      onClick={() => handleMoveToCart(product)}
                      className="mt-3 w-full bg-zinc-900 hover:bg-amber-600 dark:bg-zinc-800 dark:hover:bg-amber-600 text-white py-2 px-3 rounded-full text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                    >
                      <ShoppingBag size={12} />
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
