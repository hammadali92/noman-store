import React, { useState, useMemo } from 'react';
import { useStore } from '../context/StoreContext';
import { products, categories } from '../data/products';
import ProductCard from '../components/ProductCard';
import { SlidersHorizontal, ArrowUpDown } from 'lucide-react';

export default function Category() {
  const { selectedCategory, setSelectedCategory } = useStore();
  const [selectedSubcategory, setSelectedSubcategory] = useState('all');
  const [maxPrice, setMaxPrice] = useState(250);
  const [sortBy, setSortBy] = useState('popular'); // popular, price-low-high, price-high-low, top-rated

  // Extract all subcategories based on the active main category
  const subcategories = useMemo(() => {
    const subs = new Set();
    products.forEach((p) => {
      if (selectedCategory === 'all' || p.category === selectedCategory) {
        subs.add(p.subcategory);
      }
    });
    return ['all', ...Array.from(subs)];
  }, [selectedCategory]);

  // Handle category changing (resets subcategory filter)
  const handleCategoryChange = (catId) => {
    setSelectedCategory(catId);
    setSelectedSubcategory('all');
  };

  // Filtered Products
  const filteredProducts = useMemo(() => {
    let result = products.filter((p) => {
      const matchCat = selectedCategory === 'all' || p.category === selectedCategory;
      const matchSub = selectedSubcategory === 'all' || p.subcategory === selectedSubcategory;
      const matchPrice = p.price <= maxPrice;
      return matchCat && matchSub && matchPrice;
    });

    // Sorting
    if (sortBy === 'price-low-high') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high-low') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'top-rated') {
      result.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === 'popular') {
      result.sort((a, b) => b.reviewsCount - a.reviewsCount);
    }

    return result;
  }, [selectedCategory, selectedSubcategory, maxPrice, sortBy]);

  // Find active category detail
  const activeCategoryDetail = categories.find((c) => c.id === selectedCategory);

  return (
    <div className="font-sans min-h-screen bg-[#fdfdfc] dark:bg-zinc-950 text-zinc-800 dark:text-zinc-200 transition-colors pb-24">
      {/* Category Banner */}
      <div className="bg-zinc-900 text-white relative py-20 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        {activeCategoryDetail ? (
          <img
            src={activeCategoryDetail.image}
            alt={activeCategoryDetail.name}
            className="absolute inset-0 w-full h-full object-cover opacity-35"
          />
        ) : (
          <img
            src="https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=1200"
            alt="All Products"
            className="absolute inset-0 w-full h-full object-cover opacity-30"
          />
        )}
        <div className="relative z-20 max-w-4xl mx-auto space-y-4">
          <span className="text-xs uppercase font-extrabold tracking-widest text-amber-400">
            NOMAN AKHTAR LTD Collections
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white m-0">
            {activeCategoryDetail ? activeCategoryDetail.name : 'All Product Listings'}
          </h1>
          <p className="text-zinc-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            {activeCategoryDetail
              ? activeCategoryDetail.description
              : 'Explore our complete wholesale-grade inventory of premium cosmetic lines and durable kitchen essentials compliant with United Kingdom trading standards.'}
          </p>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Filters Sidebar */}
          <div className="lg:col-span-1 space-y-8 bg-white dark:bg-zinc-900/40 p-6 rounded-3xl border border-gray-100 dark:border-zinc-850 h-fit">
            
            <div className="flex items-center justify-between pb-4 border-b border-gray-150 dark:border-zinc-800">
              <h2 className="text-base font-bold text-zinc-900 dark:text-white flex items-center gap-2">
                <SlidersHorizontal size={18} className="text-amber-600" />
                Refine Search
              </h2>
            </div>

            {/* Category Select */}
            <div className="space-y-3">
              <h3 className="text-xs uppercase font-extrabold tracking-wider text-zinc-400">Main Categories</h3>
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => handleCategoryChange('all')}
                  className={`text-left text-sm py-2 px-3 rounded-xl transition-all ${
                    selectedCategory === 'all'
                      ? 'bg-amber-600 text-white font-semibold'
                      : 'text-zinc-650 hover:bg-zinc-150 dark:text-zinc-300 dark:hover:bg-zinc-800'
                  }`}
                >
                  All Products
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => handleCategoryChange(cat.id)}
                    className={`text-left text-sm py-2 px-3 rounded-xl transition-all ${
                      selectedCategory === cat.id
                        ? 'bg-amber-600 text-white font-semibold'
                        : 'text-zinc-650 hover:bg-zinc-150 dark:text-zinc-300 dark:hover:bg-zinc-800'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Sub-Category Filter */}
            {subcategories.length > 1 && (
              <div className="space-y-3 pt-2">
                <h3 className="text-xs uppercase font-extrabold tracking-wider text-zinc-400">Sub-categories</h3>
                <div className="flex flex-col gap-2">
                  {subcategories.map((sub) => (
                    <button
                      key={sub}
                      onClick={() => setSelectedSubcategory(sub)}
                      className={`text-left text-sm py-2 px-3 rounded-xl transition-all ${
                        selectedSubcategory === sub
                          ? 'bg-zinc-900 text-white font-semibold dark:bg-zinc-800'
                          : 'text-zinc-600 hover:bg-zinc-50 dark:text-zinc-400 dark:hover:bg-zinc-800'
                      }`}
                    >
                      {sub === 'all' ? 'All Sub-categories' : sub}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Price Filter Slider */}
            <div className="space-y-4 pt-2">
              <div className="flex justify-between items-center">
                <h3 className="text-xs uppercase font-extrabold tracking-wider text-zinc-400">Max Budget</h3>
                <span className="text-sm font-semibold text-amber-600 dark:text-amber-500">£{maxPrice}</span>
              </div>
              <input
                type="range"
                min="20"
                max="250"
                step="5"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full accent-amber-600 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-zinc-400">
                <span>£20</span>
                <span>£250</span>
              </div>
            </div>

          </div>

          {/* Product Grid Content */}
          <div className="lg:col-span-3 space-y-6">
            
            {/* Header controls (Sort by, results count) */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-zinc-50 dark:bg-zinc-900/20 p-4 rounded-2xl border border-gray-100 dark:border-zinc-850">
              <span className="text-sm text-zinc-500 dark:text-zinc-400 font-medium">
                Showing <strong className="text-zinc-800 dark:text-zinc-200">{filteredProducts.length}</strong> products
              </span>

              {/* Sorting Select */}
              <div className="flex items-center gap-2">
                <ArrowUpDown size={15} className="text-zinc-400" />
                <span className="text-xs text-zinc-450 dark:text-zinc-400 font-bold uppercase">Sort By</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-850 text-sm font-semibold rounded-lg px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-amber-500 dark:text-white"
                >
                  <option value="popular">Popularity</option>
                  <option value="price-low-high">Price: Low to High</option>
                  <option value="price-high-low">Price: High to Low</option>
                  <option value="top-rated">Top Rated</option>
                </select>
              </div>
            </div>

            {/* Results Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-white dark:bg-zinc-900/10 rounded-3xl border border-dashed border-gray-200 dark:border-zinc-800">
                <h3 className="text-lg font-bold text-zinc-700 dark:text-zinc-300">No products match your criteria</h3>
                <p className="text-sm text-zinc-500 mt-2">Try adjusting your filters or price slider range.</p>
                <button
                  onClick={() => {
                    setSelectedSubcategory('all');
                    setMaxPrice(250);
                    setSelectedCategory('all');
                  }}
                  className="mt-6 bg-amber-600 text-white font-semibold text-xs py-2.5 px-5 rounded-full hover:bg-amber-700 transition-colors cursor-pointer"
                >
                  Reset All Filters
                </button>
              </div>
            )}

          </div>

        </div>
      </div>

    </div>
  );
}
