import React, { useState, useEffect } from 'react';
import { X, CheckCircle, MessageCircle, Phone, ShieldCheck, Plus, Check } from 'lucide-react';
import { translations } from '../translations';

const ProductDetailModal = ({ product, onClose, lang, onQuickAdd }) => {
  const defaultWeight = product.sizes ? product.sizes[Math.floor(product.sizes.length / 2)] : '500g';
  const [selectedWeight, setSelectedWeight] = useState(defaultWeight);
  const [isAdded, setIsAdded] = useState(false); // State for "Added!" animation
  const t = translations[lang] || translations.en;

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'auto'; };
  }, []);

  if (!product) return null;

  const title = `${product.titleEn} / ${product.titleMl}`;
  const desc = product.desc;
  const phoneUrl = `tel:+918714348348`;
  const currentPrice = product.prices?.[selectedWeight] || '₹0';

  const handleWhatsAppOrder = () => {
    const text = encodeURIComponent(`Hello PKS Straightway Mill!\nI am interested in ordering:\n*Product:* ${product.titleEn} (${product.titleMl})\n*Selected Size:* ${selectedWeight}\n*Estimated Price:* ${currentPrice}\n*Quantity:* 1\nPlease let me know availability and price.`);
    window.open(`https://wa.me/918714348348?text=${text}`, '_blank');
  };

  const handleAddToCart = () => {
    onQuickAdd(product, selectedWeight);
    if (navigator.vibrate) navigator.vibrate(10); // Haptic feedback
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1500); // Reset after 1.5s
  };

  return (
    // Mobile: items-end (bottom), Desktop: items-center (middle)
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      
      <div className="bg-[#F7F3E8] rounded-t-[28px] sm:rounded-[24px] w-full sm:max-w-2xl border-t sm:border border-[#E1D9C9] shadow-2xl overflow-hidden relative max-h-[90vh] sm:max-h-[85vh] flex flex-col animate-slide-up sm:animate-fadeIn">
        
        {/* Mobile drag handle indicator */}
        <div className="sm:hidden flex justify-center pt-3 pb-1 bg-[#FFFDF7]">
          <div className="w-10 h-1.5 bg-[#E1D9C9] rounded-full"></div>
        </div>

        <button onClick={onClose} className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-[#FFFDF7] border border-[#E1D9C9] flex items-center justify-center text-[#29332B] hover:bg-[#667A61] hover:text-white transition-colors">
          <X className="w-4 h-4" />
        </button>

        {/* Scrollable Content Area */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-grow">
          <div className="text-left pr-8 mb-3">
            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-[#B86F52]">PKS Straightway Mill • Vakeelppadi</span>
            <h2 className="font-serif-heading text-xl sm:text-2xl md:text-3xl font-bold text-[#29332B] leading-tight mt-0.5">{title}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start mb-4">
            <div className="rounded-2xl overflow-hidden border border-[#E1D9C9] shadow-sm bg-white h-40 sm:h-52 md:h-64 w-full">
              <img src={product.image} alt={title} className="w-full h-full object-cover" />
            </div>

            <div className="text-left">
              <p className="font-sans-body text-xs sm:text-sm text-[#5A635A] leading-relaxed line-clamp-3">{desc}</p>
              <div className="grid grid-cols-2 gap-x-3 gap-y-2 mt-3">
                <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-medium text-[#29332B]">
                  <CheckCircle className="w-3.5 h-3.5 text-[#B86F52] shrink-0" />
                  <span>{lang === 'ml' ? '100% ശുദ്ധി' : '100% Pure Quality'}</span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-medium text-[#29332B]">
                  <CheckCircle className="w-3.5 h-3.5 text-[#B86F52] shrink-0" />
                  <span>{lang === 'ml' ? 'മായമില്ല' : 'No Fillers'}</span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-medium text-[#29332B]">
                  <CheckCircle className="w-3.5 h-3.5 text-[#B86F52] shrink-0" />
                  <span>{lang === 'ml' ? 'ഹോട്ടെയർ ഡ്രയർ' : 'Hot-Air Dried'}</span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-medium text-[#29332B]">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#B86F52] shrink-0" />
                  <span>{lang === 'ml' ? 'സുഗന്ധം ഉറപ്പ്' : 'Natural Oils'}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-[#E1D9C9] pt-4 text-left mb-4">
            <label className="block text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[#29332B] mb-2">{lang === 'ml' ? 'അളവ്' : 'Available Pack Sizes'}</label>
            <div className="grid grid-cols-4 gap-2 sm:gap-3">
              {product.sizes.map((w) => (
                <button key={w} onClick={() => setSelectedWeight(w)} className={`py-2 sm:py-2.5 rounded-lg sm:rounded-xl text-[11px] sm:text-xs font-button transition-all border ${selectedWeight === w ? 'bg-[#667A61] text-white border-[#667A61] shadow-sm sm:shadow-md' : 'bg-white text-[#29332B] border-[#E1D9C9] hover:bg-[#EAE2D2]'}`}>{w}</button>
              ))}
            </div>
            
            <div className="flex items-center justify-between bg-[#EAE2D2] p-3 rounded-xl border border-[#E1D9C9] mt-4">
              <span className="text-xs sm:text-sm font-medium text-[#5A635A]">{lang === 'ml' ? 'മൊത്തം വില' : 'Estimated Price'}</span>
              <div className="text-right">
                <span className="font-sans-body text-xl sm:text-2xl font-bold text-[#29332B]">{currentPrice}</span>
                <span className="text-[10px] sm:text-xs text-[#5A635A] ml-1">({selectedWeight})</span>
              </div>
            </div>
          </div>
        </div>

        {/* Sticky Footer Buttons (Now includes Add to Cart) */}
        <div className="p-4 sm:p-6 bg-[#FFFDF7] border-t border-[#E1D9C9] flex-shrink-0 space-y-2">
          
          {/* Primary Action: Add to Order List */}
          <button 
            onClick={handleAddToCart} 
            className={`w-full font-button text-sm py-3.5 px-5 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md font-bold ${isAdded ? 'bg-[#29332B] text-white' : 'bg-[#667A61] hover:bg-[#52644E] text-white'}`}
          >
            {isAdded ? <Check className="w-4 h-4 text-[#C7A15A]" /> : <Plus className="w-4 h-4" />}
            <span>{isAdded ? (lang === 'ml' ? 'ചേർത്തു!' : 'Added to List!') : (lang === 'ml' ? 'ഓർഡർ ലിസ്റ്റിലേക്ക് ചേർക്കുക' : 'Add to Order List')}</span>
          </button>

          {/* Secondary Actions: Call and WhatsApp */}
          <div className="flex gap-2">
            <a href={phoneUrl} className="flex-1 font-button text-xs sm:text-sm bg-[#29332B] hover:bg-[#1a221d] text-white py-3 px-5 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-sm">
              <Phone className="w-4 h-4 text-[#C7A15A]" />
              <span>{lang === 'ml' ? 'വിളിക്കൂ' : 'Call'}</span>
            </a>
            <button onClick={handleWhatsAppOrder} className="flex-1 font-button text-xs sm:text-sm bg-[#EAE2D2] hover:bg-[#E1D9C9] text-[#29332B] border border-[#E1D9C9] py-3 px-5 rounded-xl flex items-center justify-center gap-2 transition-colors">
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>{lang === 'ml' ? 'വാട്സ്ആപ്പ്' : 'WhatsApp'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailModal;