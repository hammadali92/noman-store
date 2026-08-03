import React from 'react';
import { useStore } from '../context/StoreContext';
import { X, ShoppingBag, Plus, Minus, Trash2 } from 'lucide-react';

export default function CartDrawer() {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    updateCartQuantity,
    removeFromCart,
    cartTotal,
  } = useStore();

  if (!isCartOpen) return null;

  const handleWhatsAppCheckout = () => {
    if (cart.length === 0) return;

    // Construct detailed cart message
    let message = `Hi NOMAN AKHTAR LTD,\n\nI would like to place an order for the following items:\n\n`;
    
    cart.forEach((item, index) => {
      message += `${index + 1}. *${item.name}*\n`;
      message += `   Qty: ${item.quantity} | Price: £${item.price.toFixed(2)} each\n`;
      message += `   Subtotal: £${(item.price * item.quantity).toFixed(2)}\n\n`;
    });

    message += `*Total Order Value:* £${cartTotal.toFixed(2)}\n\n`;
    message += `Please confirm availability and dispatch terms.\n`;
    message += `Link: ${window.location.origin}`;

    const encodedText = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/447956853857?text=${encodedText}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden font-sans">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
        onClick={() => setIsCartOpen(false)}
      ></div>

      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white dark:bg-zinc-900 shadow-2xl flex flex-col">
          {/* Header */}
          <div className="px-6 py-5 border-b border-gray-100 dark:border-zinc-800 flex items-center justify-between">
            <h2 className="text-lg font-serif font-bold text-zinc-900 dark:text-white flex items-center gap-2">
              <ShoppingBag size={20} className="text-amber-600 dark:text-amber-500" />
              Your Shopping Cart
            </h2>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-1 rounded-full text-gray-400 hover:text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all cursor-pointer"
            >
              <X size={20} />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 py-6 overflow-y-auto px-6 space-y-6">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 bg-zinc-50 dark:bg-zinc-800/50 rounded-full flex items-center justify-center mb-4">
                  <ShoppingBag size={28} className="text-zinc-400" />
                </div>
                <h3 className="text-base font-bold text-zinc-800 dark:text-zinc-200">Your cart is empty</h3>
                <p className="text-sm text-zinc-500 mt-1 max-w-xs">
                  Browse our high-quality cosmetics or kitchenware to add products to your cart.
                </p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="mt-6 text-sm font-semibold text-amber-600 dark:text-amber-500 hover:underline cursor-pointer"
                >
                  Continue Shopping &rarr;
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div key={item.id} className="flex items-start gap-4 pb-6 border-b border-gray-100 dark:border-zinc-850">
                  <img
                    src={item.images[0]}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-xl border border-gray-100 dark:border-zinc-800"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-bold text-zinc-850 dark:text-zinc-200 truncate">{item.name}</h4>
                    <p className="text-xs text-zinc-500 mt-0.5">{item.subcategory}</p>
                    <p className="text-sm font-semibold text-amber-600 dark:text-amber-500 mt-2">£{item.price.toFixed(2)}</p>
                    
                    {/* Quantity controls */}
                    <div className="flex items-center gap-3 mt-3">
                      <div className="flex items-center border border-gray-250 dark:border-zinc-800 rounded-full overflow-hidden bg-zinc-50 dark:bg-zinc-800">
                        <button
                          onClick={() => updateCartQuantity(item.id, item.quantity - 1)}
                          className="px-2.5 py-1 text-zinc-600 dark:text-zinc-400 hover:bg-gray-150 dark:hover:bg-zinc-700 transition-colors cursor-pointer"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="text-xs font-semibold px-2 dark:text-white">{item.quantity}</span>
                        <button
                          onClick={() => updateCartQuantity(item.id, item.quantity + 1)}
                          className="px-2.5 py-1 text-zinc-600 dark:text-zinc-400 hover:bg-gray-150 dark:hover:bg-zinc-700 transition-colors cursor-pointer"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-gray-400 hover:text-red-500 transition-colors p-1 cursor-pointer"
                        aria-label="Remove item"
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Checkout Info */}
          {cart.length > 0 && (
            <div className="border-t border-gray-100 dark:border-zinc-800 px-6 py-6 bg-zinc-50 dark:bg-zinc-950/60">
              <div className="flex justify-between text-base font-bold text-zinc-900 dark:text-white mb-2">
                <span>Subtotal</span>
                <span>£{cartTotal.toFixed(2)}</span>
              </div>
              <p className="text-xs text-zinc-500 mb-6">
                VAT & delivery quotes will be calculated and finalized directly on WhatsApp.
              </p>
              <button
                onClick={handleWhatsAppCheckout}
                className="w-full bg-[#25D366] hover:bg-[#20ba59] text-white py-3.5 px-6 rounded-full font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-green-500/20 hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer"
              >
                {/* WhatsApp Logo */}
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.25 8.477 3.517 2.266 2.268 3.512 5.28 3.51 8.482-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436.002 9.858-4.419 9.86-9.86.001-2.636-1.023-5.115-2.885-6.979-1.862-1.865-4.343-2.89-6.984-2.891-5.439 0-9.86 4.417-9.863 9.858-.001 1.737.458 3.43 1.33 4.937L1.879 21.6l4.768-1.25zM17.472 14.382c-.3-.149-1.777-.875-2.076-.983-.3-.11-.518-.163-.737.164-.219.329-.851 1.074-1.043 1.293-.192.219-.384.246-.684.097-.3-.149-1.267-.467-2.413-1.488-.891-.796-1.492-1.779-1.667-2.079-.175-.3-.019-.462.13-.61.135-.133.3-.349.45-.523.15-.174.2-.299.3-.499.1-.2.05-.375-.025-.524-.075-.15-.737-1.777-.009-2.437-.267-.64-.586-.55-.737-.558-.15-.008-.321-.01-.493-.01-.172 0-.452.065-.688.32-.236.256-.902.88-1.02 2.148-.117 1.27.81 2.502.925 2.656.115.154 1.773 2.709 4.296 3.793.6.258 1.069.412 1.434.527.603.192 1.152.165 1.587.1.485-.07 1.778-.726 2.028-1.428.25-.702.25-1.3.175-1.428-.075-.13-.275-.205-.575-.355z" />
                </svg>
                Confirm Order on WhatsApp
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
