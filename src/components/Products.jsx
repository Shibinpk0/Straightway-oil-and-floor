import React, { useState } from 'react';
import { ShoppingBag, Star, Plus } from 'lucide-react';
import ProductDetailModal from './ProductDetailModal';
import { productList } from '../data/productsData'; // Importing from the new data file
import { translations } from '../translations';

const Products = ({ lang, onQuickAdd }) => {
  const t = translations[lang] || translations.en;
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cardWeights, setCardWeights] = useState({});

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
    e.stopPropagation(); // Prevents opening the modal when changing select dropdown
    setCardWeights(prev => ({ ...prev, [productId]: weight }));
  };

  return (
    <section id="products" className="bg-[#FFFDF8] py-6 sm:py-20 md:py-28 relative">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-5 md:px-8 space-y-6 sm:space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-2 sm:space-y-4 max-w-2xl mx-auto">
          <div className="hidden sm:flex items-center justify-center gap-3 text-[#D8A43A]">
            <span className="h-[1px] w-12 bg-[#D8A43A]/40"></span>
            <span className="font-serif-heading font-semibold text-xs sm:text-sm tracking-wider uppercase">{t?.products?.tag || "✦ OUR PRODUCTS & SERVICES ✦"}</span>
            <span className="h-[1px] w-12 bg-[#D8A43A]/40"></span>
          </div>
          <h2 className="font-serif-heading text-xl sm:text-3xl md:text-[42px] font-bold text-[#12351D] leading-tight">{t?.products?.heading || "Pure & Fresh Products"}</h2>
          <p className="hidden sm:block font-sans-body text-sm sm:text-base text-[#666666] leading-relaxed">{t?.products?.subtitle || "Freshly pressed pure oils, ground spices, and custom grain processing for your family."}</p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center sm:justify-center gap-2 sm:gap-3 overflow-x-auto pb-2 sm:pb-0 sm:flex-wrap scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0">
          {categories.map((cat) => (
            <button key={cat.id} onClick={() => setActiveCategory(cat.id)} className={`font-button text-[11px] sm:text-sm px-4 sm:px-5 py-2 sm:py-2.5 rounded-full transition-all duration-300 whitespace-nowrap shrink-0 ${activeCategory === cat.id ? 'bg-[#1D4F2B] text-white shadow-md font-bold' : 'bg-[#F6F1E7] text-[#12351D] hover:bg-[#E8E2D6] border border-[#E8E2D6]'}`}>
              {cat.label}
            </button>
          ))}
        </div>

        {/* Mobile Grid */}
        <div className="flex sm:hidden gap-3 overflow-x-auto pb-4 -mx-4 px-4 snap-x snap-mandatory scrollbar-hide">
          {filteredProducts.map((product) => {
            const currentWeight = getCardWeight(product.id) || product.sizes[Math.floor(product.sizes.length / 2)]; // Default to middle size (e.g., 500g or 500ml)
            const displayPrice = product.prices?.[currentWeight] || '₹0';
            return (
              <div key={product.id} className="bg-white rounded-2xl border border-[#E8E2D6] overflow-hidden shadow-sm flex-none w-[72vw] max-w-[280px] snap-start cursor-pointer active:scale-[0.98] transition-transform flex flex-col">
                <div onClick={() => setSelectedProduct(product)} className="relative h-36 bg-[#F6F1E7] overflow-hidden">
                  <img src={product.image} alt={`${product.titleEn} - Straightway Mill`} className="w-full h-full object-cover" />
                  <div className="absolute top-2 left-2 bg-[#12351D]/90 text-[#D8A43A] text-[9px] font-button font-bold px-2.5 py-0.5 rounded-full uppercase border border-[#D8A43A]/30">{product.badge}</div>
                </div>
                <div className="p-3.5 space-y-2 flex-grow flex flex-col justify-between">
                  <div onClick={() => setSelectedProduct(product)}>
                    {/* Bilingual Title */}
                    <h3 className="font-serif-heading text-sm font-bold text-[#12351D] leading-tight line-clamp-1">{product.titleEn}</h3>
                    <p className="font-sans-body text-[11px] text-[#1D4F2B] font-semibold line-clamp-1 mt-0.5">{product.titleMl}</p>
                  </div>
                  
                  {/* Size & Price Selector */}
                  <div className="flex items-center justify-between gap-2">
                    <select 
                      value={currentWeight} 
                      onChange={(e) => handleWeightChange(product.id, e.target.value, e)}
                      className="bg-[#F6F1E7] border border-[#E8E2D6] rounded-md px-2 py-1 text-[10px] font-semibold text-[#12351D] focus:outline-none cursor-pointer"
                    >
                      {product.sizes.map(w => <option key={w} value={w}>{w}</option>)}
                    </select>
                    <div className="text-right">
                      <span className="font-serif-heading text-base font-bold text-[#12351D] block leading-none">{displayPrice}</span>
                    </div>
                  </div>

                  <div className="flex gap-2 pt-1">
                    <button onClick={() => setSelectedProduct(product)} className="flex-1 text-[10px] font-bold text-[#1D4F2B] bg-[#F6F1E7] px-2 py-2 rounded-full text-center">Details</button>
                    <button onClick={() => onQuickAdd(product, currentWeight)} className="w-9 h-9 bg-[#1D4F2B] text-white rounded-full flex items-center justify-center shrink-0 active:scale-90 transition-transform">
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Desktop Grid */}
        <div className="hidden sm:grid grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {filteredProducts.map((product) => {
            const currentWeight = getCardWeight(product.id) || product.sizes[Math.floor(product.sizes.length / 2)];
            const displayPrice = product.prices?.[currentWeight] || '₹0';
            return (
              <div key={product.id} className="bg-white rounded-[24px] border border-[#E8E2D6] overflow-hidden shadow-premium-soft hover:shadow-xl transition-all duration-300 group flex flex-col justify-between">
                <div onClick={() => setSelectedProduct(product)} className="relative h-48 sm:h-52 bg-[#F6F1E7] overflow-hidden cursor-pointer">
                  <img src={product.image} alt={`${product.titleEn} - Straightway Mill`} className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-3 left-3 bg-[#12351D]/90 backdrop-blur-sm text-[#D8A43A] text-[10px] font-button font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-[#D8A43A]/30">{product.badge}</div>
                </div>
                <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                  <div onClick={() => setSelectedProduct(product)} className="cursor-pointer">
                    {/* Bilingual Title */}
                    <h3 className="font-serif-heading text-base sm:text-lg font-bold text-[#12351D] leading-snug">{product.titleEn}</h3>
                    <p className="text-sm font-sans-body text-[#1D4F2B] font-semibold mt-0.5">{product.titleMl}</p>
                    <p className="text-[11px] font-sans-body text-[#D8A43A] font-semibold mt-1">{product.subtitle}</p>
                    <p className="text-xs text-[#666666] line-clamp-2 mt-2 leading-relaxed">{product.desc}</p>
                  </div>
                  
                  {/* Size & Price Selector */}
                  <div className="pt-3 border-t border-[#E8E2D6] flex items-center justify-between gap-2">
                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] text-[#666666] uppercase tracking-wider">Pack Size</span>
                      <select 
                        value={currentWeight} 
                        onChange={(e) => handleWeightChange(product.id, e.target.value, e)}
                        className="bg-[#F6F1E7] border border-[#E8E2D6] rounded-lg px-3 py-1.5 text-xs font-semibold text-[#12351D] focus:outline-none cursor-pointer"
                      >
                        {product.sizes.map(w => <option key={w} value={w}>{w}</option>)}
                      </select>
                    </div>
                    <div className="text-right">
                      <span className="font-serif-heading text-xl font-bold text-[#12351D] block leading-none">{displayPrice}</span>
                    </div>
                  </div>

                  <div className="flex gap-2 mt-2">
                     <button onClick={() => setSelectedProduct(product)} className="flex-1 font-button text-xs bg-transparent border border-[#E8E2D6] hover:bg-[#F6F1E7] text-[#12351D] px-4 py-2 rounded-full flex items-center justify-center gap-1.5 transition-colors">
                        <ShoppingBag className="w-3.5 h-3.5" />
                        <span>Details</span>
                     </button>
                     <button onClick={() => onQuickAdd(product, currentWeight)} className="flex-1 font-button text-xs bg-[#1D4F2B] hover:bg-[#12351D] text-white px-4 py-2 rounded-full flex items-center justify-center gap-1.5 transition-colors shadow-sm">
                        <Plus className="w-4 h-4" />
                        <span>Quick Add</span>
                     </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {selectedProduct && (
        <ProductDetailModal product={selectedProduct} onClose={() => setSelectedProduct(null)} lang={lang} />
      )}
    </section>
  );
};

export default Products;