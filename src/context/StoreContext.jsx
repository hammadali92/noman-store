import React, { createContext, useState, useContext, useEffect } from 'react';

const StoreContext = createContext();

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
};

export const StoreProvider = ({ children }) => {
  // Navigation & Page State
  const [currentPage, setCurrentPage] = useState('home'); // home, category, product-detail, about, services, contact
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProductId, setSelectedProductId] = useState(null);

  // Cart & Wishlist States
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('nas_cart');
    return saved ? JSON.parse(saved) : [];
  });
  
  const [wishlist, setWishlist] = useState(() => {
    const saved = localStorage.getItem('nas_wishlist');
    return saved ? JSON.parse(saved) : [];
  });

  // UI Drawers / Search states
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Persist Cart
  useEffect(() => {
    localStorage.setItem('nas_cart', JSON.stringify(cart));
  }, [cart]);

  // Persist Wishlist
  useEffect(() => {
    localStorage.setItem('nas_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  // Page Routing Helper
  const navigateTo = (page, categoryId = 'all', productId = null) => {
    setCurrentPage(page);
    if (categoryId) setSelectedCategory(categoryId);
    if (productId) setSelectedProductId(productId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Cart Operations
  const addToCart = (product, quantity = 1) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...prevCart, { ...product, quantity }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const updateCartQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) => (item.id === productId ? { ...item, quantity } : item))
    );
  };

  const clearCart = () => setCart([]);

  // Wishlist Operations
  const toggleWishlist = (productId) => {
    setWishlist((prevWishlist) => {
      if (prevWishlist.includes(productId)) {
        return prevWishlist.filter((id) => id !== productId);
      } else {
        return [...prevWishlist, productId];
      }
    });
  };

  // Derived Values
  const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const cartItemsCount = cart.reduce((count, item) => count + item.quantity, 0);

  return (
    <StoreContext.Provider
      value={{
        currentPage,
        selectedCategory,
        selectedProductId,
        cart,
        wishlist,
        isCartOpen,
        isWishlistOpen,
        searchQuery,
        cartTotal,
        cartItemsCount,
        setCurrentPage,
        setSelectedCategory,
        setSelectedProductId,
        setIsCartOpen,
        setIsWishlistOpen,
        setSearchQuery,
        navigateTo,
        addToCart,
        removeFromCart,
        updateCartQuantity,
        clearCart,
        toggleWishlist,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};
