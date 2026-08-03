import React, { useState, useEffect, useRef } from 'react';
import { useStore } from '../context/StoreContext';
import { products } from '../data/products';
import { Search, Heart, ShoppingBag, Menu, X, ChevronDown, Sparkles } from 'lucide-react';

export default function Header() {
  const {
    currentPage,
    navigateTo,
    wishlist,
    cartItemsCount,
    setIsCartOpen,
    setIsWishlistOpen,
    searchQuery,
    setSearchQuery
  } = useStore();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);
  const [showSearchPreview, setShowSearchPreview] = useState(false);
  const searchRef = useRef(null);

  // Close search preview when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSearchPreview(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Filter products for preview
  const searchResults = searchQuery
    ? products.filter(p =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.subcategory.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 5)
    : [];

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setShowSearchPreview(false);
      navigateTo('category', 'all');
    }
  };

  const handleSearchResultClick = (productId) => {
    setSearchQuery('');
    setShowSearchPreview(false);
    navigateTo('product-detail', null, productId);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100 dark:bg-zinc-950/80 dark:border-zinc-900 transition-colors duration-300">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 text-white text-xs py-2 px-4 text-center font-medium tracking-wider flex items-center justify-center gap-2">
        <Sparkles size={12} className="animate-pulse" />
        <span>REGISTERED UK SUPPLIER & DISTRIBUTOR • DIRECT WHATSAPP SALES</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 cursor-pointer flex items-center" onClick={() => navigateTo('home')}>
            <div className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-zinc-900 dark:text-white flex flex-col">
              <span className="text-amber-600 dark:text-amber-500 font-extrabold tracking-widest text-[10px] uppercase">Est. 2026</span>
              <span className="hover:text-amber-600 transition-colors">NOMAN AKHTAR</span>
              <span className="text-[10px] tracking-[0.25em] font-sans font-semibold text-zinc-500">LTD - UK COMPLIANT</span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 font-medium text-sm text-zinc-600 dark:text-zinc-300">
            <button
              onClick={() => navigateTo('home')}
              className={`hover:text-amber-600 transition-colors cursor-pointer ${currentPage === 'home' ? 'text-amber-600 font-semibold' : ''}`}
            >
              Home
            </button>

            {/* Dropdown Menu */}
            <div
              className="relative"
              onMouseEnter={() => setCategoryDropdownOpen(true)}
              onMouseLeave={() => setCategoryDropdownOpen(false)}
            >
              <button
                className={`flex items-center gap-1 hover:text-amber-600 transition-colors cursor-pointer py-2 ${currentPage === 'category' ? 'text-amber-600 font-semibold' : ''}`}
              >
                Categories <ChevronDown size={14} />
              </button>
              
              {categoryDropdownOpen && (
                <div className="absolute left-0 w-64 bg-white dark:bg-zinc-900 rounded-xl shadow-xl border border-gray-100 dark:border-zinc-800 py-3 animate-in fade-in slide-in-from-top-2 duration-200">
                  <button
                    onClick={() => { navigateTo('category', 'beauty-cosmetics'); setCategoryDropdownOpen(false); }}
                    className="w-full text-left px-5 py-2.5 hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:text-amber-600 text-zinc-700 dark:text-zinc-200 text-sm font-medium transition-colors"
                  >
                    💄 Beauty & Cosmetics
                  </button>
                  <button
                    onClick={() => { navigateTo('category', 'home-kitchen'); setCategoryDropdownOpen(false); }}
                    className="w-full text-left px-5 py-2.5 hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:text-amber-600 text-zinc-700 dark:text-zinc-200 text-sm font-medium transition-colors"
                  >
                    🍳 Home & Kitchen Accessories
                  </button>
                  <button
                    onClick={() => { navigateTo('category', 'health-personal-care'); setCategoryDropdownOpen(false); }}
                    className="w-full text-left px-5 py-2.5 hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:text-amber-600 text-zinc-700 dark:text-zinc-200 text-sm font-medium transition-colors"
                  >
                    🌿 Health & Personal Care
                  </button>
                  <div className="border-t border-gray-100 dark:border-zinc-800 my-1"></div>
                  <button
                    onClick={() => { navigateTo('category', 'all'); setCategoryDropdownOpen(false); }}
                    className="w-full text-left px-5 py-2.5 hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:text-amber-600 text-zinc-500 dark:text-zinc-400 text-xs font-semibold uppercase tracking-wider transition-colors"
                  >
                    View All Products
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={() => navigateTo('about')}
              className={`hover:text-amber-600 transition-colors cursor-pointer ${currentPage === 'about' ? 'text-amber-600 font-semibold' : ''}`}
            >
              About Us
            </button>
            <button
              onClick={() => navigateTo('services')}
              className={`hover:text-amber-600 transition-colors cursor-pointer ${currentPage === 'services' ? 'text-amber-600 font-semibold' : ''}`}
            >
              Our Services
            </button>
            <button
              onClick={() => navigateTo('contact')}
              className={`hover:text-amber-600 transition-colors cursor-pointer ${currentPage === 'contact' ? 'text-amber-600 font-semibold' : ''}`}
            >
              Contact Us
            </button>
          </nav>

          {/* Search, Wishlist, Cart & Mobile Menu Actions */}
          <div className="flex items-center gap-4 flex-1 lg:flex-none justify-end">
            
            {/* Search Input */}
            <div ref={searchRef} className="relative hidden md:block w-64 xl:w-80">
              <form onSubmit={handleSearchSubmit}>
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setShowSearchPreview(true);
                  }}
                  onFocus={() => setShowSearchPreview(true)}
                  className="w-full bg-zinc-50 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-full py-2 pl-4 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 dark:focus:ring-amber-600 dark:text-white transition-all"
                />
                <button type="submit" className="absolute right-3 top-2.5 text-gray-400 hover:text-zinc-600 dark:hover:text-zinc-200 transition-colors">
                  <Search size={16} />
                </button>
              </form>

              {/* Search Live Preview Dropdown */}
              {showSearchPreview && searchQuery && (
                <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-zinc-900 rounded-xl shadow-xl border border-gray-100 dark:border-zinc-800 overflow-hidden z-50">
                  <div className="p-3 text-xs font-semibold uppercase tracking-wider text-zinc-400 border-b border-gray-50 dark:border-zinc-800">
                    Live Search Results
                  </div>
                  {searchResults.length > 0 ? (
                    <div className="divide-y divide-gray-50 dark:divide-zinc-800">
                      {searchResults.map((product) => (
                        <div
                          key={product.id}
                          onClick={() => handleSearchResultClick(product.id)}
                          className="flex items-center gap-3 p-3 hover:bg-zinc-50 dark:hover:bg-zinc-800 cursor-pointer transition-colors"
                        >
                          <img
                            src={product.images[0]}
                            alt={product.name}
                            className="w-10 h-10 object-cover rounded-lg border border-gray-100 dark:border-zinc-800"
                          />
                          <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 truncate">{product.name}</h4>
                            <p className="text-xs text-amber-600 dark:text-amber-500 font-medium">£{product.price.toFixed(2)}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="p-4 text-center text-sm text-zinc-500 dark:text-zinc-400">
                      No products found for "{searchQuery}"
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Wishlist Button */}
            <button
              onClick={() => setIsWishlistOpen(true)}
              className="relative p-2 text-zinc-700 dark:text-zinc-300 hover:text-red-500 dark:hover:text-red-400 transition-colors cursor-pointer"
              aria-label="Wishlist"
            >
              <Heart size={22} />
              {wishlist.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold border-2 border-white dark:border-zinc-950 animate-pulse">
                  {wishlist.length}
                </span>
              )}
            </button>

            {/* Cart Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 text-zinc-700 dark:text-zinc-300 hover:text-amber-600 dark:hover:text-amber-500 transition-colors cursor-pointer"
              aria-label="Shopping Cart"
            >
              <ShoppingBag size={22} />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-amber-600 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold border-2 border-white dark:border-zinc-950">
                  {cartItemsCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Icon */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 lg:hidden text-zinc-700 dark:text-zinc-300 hover:text-amber-600 transition-colors cursor-pointer"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-zinc-950 border-b border-gray-100 dark:border-zinc-900 px-4 pt-2 pb-6 space-y-3 animate-in slide-in-from-top duration-300">
          {/* Mobile Search */}
          <div className="pt-2">
            <form onSubmit={handleSearchSubmit} className="relative">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-zinc-50 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-full py-2 pl-4 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <button type="submit" className="absolute right-3 top-2.5 text-gray-400">
                <Search size={16} />
              </button>
            </form>
          </div>

          <div className="flex flex-col gap-3 font-medium text-base text-zinc-700 dark:text-zinc-200">
            <button
              onClick={() => { navigateTo('home'); setMobileMenuOpen(false); }}
              className="text-left py-2 hover:text-amber-600 transition-colors"
            >
              Home
            </button>
            <div className="border-t border-gray-100 dark:border-zinc-900 my-1"></div>
            <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Categories</p>
            <button
              onClick={() => { navigateTo('category', 'beauty-cosmetics'); setMobileMenuOpen(false); }}
              className="text-left pl-4 py-1 hover:text-amber-600 text-sm transition-colors"
            >
              💄 Beauty & Cosmetics
            </button>
            <button
              onClick={() => { navigateTo('category', 'home-kitchen'); setMobileMenuOpen(false); }}
              className="text-left pl-4 py-1 hover:text-amber-600 text-sm transition-colors"
            >
              🍳 Home & Kitchen Accessories
            </button>
            <button
              onClick={() => { navigateTo('category', 'health-personal-care'); setMobileMenuOpen(false); }}
              className="text-left pl-4 py-1 hover:text-amber-600 text-sm transition-colors"
            >
              🌿 Health & Personal Care
            </button>
            <div className="border-t border-gray-100 dark:border-zinc-900 my-1"></div>
            <button
              onClick={() => { navigateTo('about'); setMobileMenuOpen(false); }}
              className="text-left py-2 hover:text-amber-600 transition-colors"
            >
              About Us
            </button>
            <button
              onClick={() => { navigateTo('services'); setMobileMenuOpen(false); }}
              className="text-left py-2 hover:text-amber-600 transition-colors"
            >
              Our Services
            </button>
            <button
              onClick={() => { navigateTo('contact'); setMobileMenuOpen(false); }}
              className="text-left py-2 hover:text-amber-600 transition-colors"
            >
              Contact Us
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
