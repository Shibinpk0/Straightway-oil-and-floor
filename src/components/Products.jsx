import React, { useState } from 'react';
import { ShoppingBag, Plus, Check } from 'lucide-react'; // Added Check icon
import ProductDetailModal from './ProductDetailModal';
import { productList } from '../data/productsData';
import { translations } from '../translations';

const Products = ({ lang, onQuickAdd }) => {
  const t = translations[lang] || translations.en;
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cardWeights, setCardWeights] = useState({});
  const [addedId, setAddedId] = useState(null); // State for "Added!" animation

  const categories = [
    { id: 'all', label: t?.products?.filterAll || 'All Products' },
    { id: 'oil', label: t?.products?.catOils || 'Edible Oils' },
    { id: 'spices', label: t?.products?.catSpices || 'Spice Powders' },
    { id: 'flour', label: t?.products?.catFlour || 'Flour' },
    { id: 'grains', label: t?.products?.catGrains || 'Grain Powders' },
    { id: 'custom', label: t?.nav?.customGrinding || 'Custom Grinding' },
  ];

  const filteredProducts = activeCategory === 'all' ? productList : productList.filter((p) => p.category === activeCategory);
  const getCardWeight = (productId) => cardWeights[productId] || null;
  
  const handleWeightChange = (productId, weight, e) => {
    e.stopPropagation();
    setCardWeights(prev => ({ ...prev, [productId]: weight }));
  };

  // Handles Quick Add with Haptic Feedback and 1s Visual Confirmation
  const handleQuickAdd = (product, currentWeight) => {
    onQuickAdd(product, currentWeight);
    if (navigator.vibrate) navigator.vibrate(10); // Haptic feedback on mobile
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 1000); // Reset after 1 second
  };

  return (
    <section id="products" className="bg-[#F7F3E8] py-12 md:py-16 lg:py-20 relative">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-5 md:px-8 space-y-8 md:space-y-10">
        
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-3 text-[#B86F52]">
            <span className="h-[1px] w-12 bg-[#B86F52]/40"></span>
            <span className="font-serif-heading font-semibold text-xs sm:text-sm tracking-wider uppercase">{t?.products?.tag || "✦ OUR PRODUCTS & SERVICES ✦"}</span>
            <span className="h-[1px] w-12 bg-[#B86F52]/40"></span>
          </div>
          <h2 className="font-serif-heading text-xl sm:text-3xl font-bold text-[#29332B] leading-tight">{t?.products?.heading || "Pure & Fresh Products"}</h2>
        </div>

        {/* STICKY CATEGORY FILTER FOR MOBILE */}
        <div className="sticky top-[70px] z-30 bg-[#F7F3E8]/95 backdrop-blur-sm py-2 -mx-4 px-4 sm:static sm:bg-transparent sm:py-0 sm:z-0">
          <div className="flex items-center sm:justify-center gap-2 sm:gap-3 overflow-x-auto pb-2 sm:pb-0 sm:flex-wrap scrollbar-hide">
            {categories.map((cat) => (
              <button key={cat.id} onClick={() => setActiveCategory(cat.id)} className={`font-button text-[11px] sm:text-sm px-4 sm:px-5 py-2 sm:py-2.5 rounded-full transition-all duration-300 whitespace-nowrap shrink-0 ${activeCategory === cat.id ? 'bg-[#667A61] text-white shadow-md font-bold' : 'bg-[#EAE2D2] text-[#29332B] hover:bg-[#E1D9C9] border border-[#E1D9C9]'}`}>
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile 2-Column Grid */}
        <div className="grid grid-cols-2 gap-3 sm:hidden">
          {filteredProducts.map((product) => {
            const currentWeight = getCardWeight(product.id) || product.sizes[Math.floor(product.sizes.length / 2)];
            const displayPrice = product.prices?.[currentWeight] || '₹0';
            const isAdded = addedId === product.id; // Check if this item was just added

            return (
              <div key={product.id} className="bg-[#FFFDF7] rounded-xl border border-[#E1D9C9] overflow-hidden shadow-premium-soft flex flex-col">
                <div onClick={() => setSelectedProduct(product)} className="relative h-28 bg-[#EAE2D2] overflow-hidden">
                  <img src={product.image} alt={`${product.titleEn} - Straightway Mill`} className="w-full h-full object-cover" />
                  <div className="absolute top-2 left-2 -rotate-3 bg-[#B86F52] text-white text-[8px] font-button font-extrabold px-1.5 py-0.5 rounded-sm uppercase shadow-md whitespace-nowrap z-10">{product.badge}</div>
                </div>
                <div className="p-2.5 space-y-1.5 flex-grow flex flex-col justify-between">
                  <div onClick={() => setSelectedProduct(product)}>
                    <h3 className="font-serif-heading text-xs font-bold text-[#29332B] leading-tight line-clamp-1">{product.titleEn}</h3>
                  </div>
                  <div className="flex items-center justify-between gap-1">
                    <select value={currentWeight} onChange={(e) => handleWeightChange(product.id, e.target.value, e)} className="bg-[#EAE2D2] border border-[#E1D9C9] rounded-md px-1.5 py-1 text-[9px] font-semibold text-[#29332B] focus:outline-none cursor-pointer">
                      {product.sizes.map(w => <option key={w} value={w}>{w}</option>)}
                    </select>
                    <span className="font-sans-body text-xs font-bold text-[#29332B]">{displayPrice}</span>
                  </div>
                  
                  {/* Smart Quick Add Button */}
                  <button 
                    onClick={() => handleQuickAdd(product, currentWeight)} 
                    className={`w-full h-7 rounded-full flex items-center justify-center shrink-0 active:scale-90 transition-all duration-300 ${isAdded ? 'bg-[#29332B] text-white' : 'bg-[#667A61] text-white'}`}
                  >
                    {isAdded ? <Check className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Desktop Grid (Unchanged logic, just cleaner) */}
        <div className="hidden sm:grid grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {filteredProducts.map((product) => {
            const currentWeight = getCardWeight(product.id) || product.sizes[Math.floor(product.sizes.length / 2)];
            const displayPrice = product.prices?.[currentWeight] || '₹0';
            const isAdded = addedId === product.id;

            return (
              <div key={product.id} className="bg-[#FFFDF7] rounded-xl border border-[#E1D9C9] overflow-hidden shadow-premium-soft hover:shadow-premium-hover transition-all duration-300 group flex flex-col justify-between">
                <div onClick={() => setSelectedProduct(product)} className="relative h-44 bg-[#EAE2D2] overflow-hidden cursor-pointer">
                  <img src={product.image} alt={`${product.titleEn} - Straightway Mill`} className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-2 left-2 -rotate-3 bg-[#B86F52] text-white text-[9px] font-button font-extrabold px-2 py-1 rounded-sm uppercase tracking-wide shadow-md whitespace-nowrap z-10">{product.badge}</div>
                </div>
                <div className="p-4 space-y-2 flex-1 flex flex-col justify-between">
                  <div onClick={() => setSelectedProduct(product)} className="cursor-pointer">
                    <h3 className="font-serif-heading text-base font-bold text-[#29332B] leading-snug">{product.titleEn}</h3>
                    <p className="text-sm font-sans-body text-[#667A61] font-semibold mt-0.5">{product.titleMl}</p>
                    <p className="text-xs text-[#5A635A] line-clamp-2 mt-1.5 leading-relaxed">{product.desc}</p>
                  </div>
                  
                  <div className="pt-2 border-t border-[#E1D9C9] flex items-center justify-between gap-2 mt-2">
                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] text-[#5A635A] uppercase tracking-wider">Pack Size</span>
                      <select value={currentWeight} onChange={(e) => handleWeightChange(product.id, e.target.value, e)} className="bg-[#EAE2D2] border border-[#E1D9C9] rounded-lg px-3 py-1.5 text-xs font-semibold text-[#29332B] focus:outline-none cursor-pointer">
                        {product.sizes.map(w => <option key={w} value={w}>{w}</option>)}
                      </select>
                    </div>
                    <div className="text-right">
                      <span className="font-sans-body text-xl font-bold text-[#29332B] block leading-none">{displayPrice}</span>
                    </div>
                  </div>

                  <div className="flex gap-2 mt-2">
                     <button onClick={() => setSelectedProduct(product)} className="flex-1 font-button text-xs bg-transparent border border-[#E1D9C9] hover:bg-[#EAE2D2] text-[#29332B] px-4 py-2 rounded-full flex items-center justify-center gap-1.5 transition-colors">
                        <ShoppingBag className="w-3.5 h-3.5" />
                        <span>Details</span>
                     </button>
                     <button 
                        onClick={() => handleQuickAdd(product, currentWeight)} 
                        className={`flex-1 font-button text-xs transition-all duration-300 px-4 py-2 rounded-full flex items-center justify-center gap-1.5 shadow-sm ${isAdded ? 'bg-[#29332B] text-white' : 'bg-[#667A61] hover:bg-[#52644E] text-white'}`}
                     >
                        {isAdded ? <Check className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                        <span>{isAdded ? 'Added!' : 'Quick Add'}</span>
                     </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {selectedProduct && (
        <ProductDetailModal product={selectedProduct} onClose={() => setSelectedProduct(null)} lang={lang} onQuickAdd={onQuickAdd}  />
      )}
    </section>
  );
};

export default Products;