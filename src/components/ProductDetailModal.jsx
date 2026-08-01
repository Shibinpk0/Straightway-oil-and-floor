import React, { useState } from 'react';
import { X, CheckCircle, MessageCircle, ShoppingBag, ShieldCheck } from 'lucide-react';
import { translations } from '../translations';

const ProductDetailModal = ({ product, onClose, lang }) => {
  const [selectedWeight, setSelectedWeight] = useState('500g');
  const t = translations[lang] || translations.en;

  if (!product) return null;

  const weights = ['100g', '250g', '500g', '1kg / 1L'];

  const title = lang === 'ml' && product.titleMl ? product.titleMl : product.title;
  const desc = lang === 'ml' && product.descMl ? product.descMl : product.desc;

  const handleWhatsAppOrder = () => {
    const text = encodeURIComponent(
      `Hello PKS Straightway Mill!\nI am interested in ordering:\n*Product:* ${title}\n*Selected Size:* ${selectedWeight}\n*Quantity:* 1\nPlease let me know availability and price.`
    );
    window.open(`https://wa.me/918714348348?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-[#FFFDF8] rounded-[24px] max-w-2xl w-full border border-[#E8E2D6] shadow-2xl overflow-hidden relative max-h-[90vh] flex flex-col">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/90 border border-[#E8E2D6] flex items-center justify-center text-[#202020] hover:bg-[#1D4F2B] hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="overflow-y-auto p-6 md:p-8 space-y-6">
          {/* Header */}
          <div className="space-y-1 text-left">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#D8A43A]">
              PKS Straightway Mill • Vakeelppadi
            </span>
            <h2 className="font-serif-heading text-2xl md:text-3xl font-bold text-[#12351D]">
              {title}
            </h2>
          </div>

          {/* Product Image & Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="rounded-2xl overflow-hidden border border-[#E8E2D6] shadow-sm bg-white">
              <img
                src={product.image}
                alt={title}
                className="w-full h-56 md:h-64 object-cover"
              />
            </div>

            <div className="space-y-4 text-left">
              <p className="font-sans-body text-xs sm:text-sm text-[#666666] leading-relaxed">
                {desc}
              </p>

              <div className="space-y-2 pt-2">
                <div className="flex items-center gap-2 text-xs font-medium text-[#12351D]">
                  <CheckCircle className="w-4 h-4 text-[#D8A43A]" />
                  <span>{lang === 'ml' ? '100% നാടൻ ശുദ്ധി ഉറപ്പ്' : '100% Pure & Country Quality'}</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-[#12351D]">
                  <CheckCircle className="w-4 h-4 text-[#D8A43A]" />
                  <span>{lang === 'ml' ? 'രാസവസ്തുക്കളോ മായമോ ചേർക്കുന്നില്ല' : 'No Artificial Colours or Fillers'}</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-[#12351D]">
                  <CheckCircle className="w-4 h-4 text-[#D8A43A]" />
                  <span>{lang === 'ml' ? 'ശുചിത്വമുള്ള ഹോട്ടെയർ ഡ്രയർ & മിൽ' : 'Hygienically Hot-Air Dried'}</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-[#12351D]">
                  <ShieldCheck className="w-4 h-4 text-[#D8A43A]" />
                  <span>{lang === 'ml' ? 'സ്വാഭാവിക സുഗന്ധം നിലനിർത്തുന്നു' : 'Sealed for Maximum Natural Oils'}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Weight Selector */}
          <div className="space-y-3 pt-2 border-t border-[#E8E2D6] text-left">
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#202020]">
              {lang === 'ml' ? 'ലഭ്യമായ അളവുകൾ (Pack Sizes / Quantity)' : 'Available Pack Sizes'}
            </label>
            <div className="grid grid-cols-4 gap-3">
              {weights.map((w) => (
                <button
                  key={w}
                  onClick={() => setSelectedWeight(w)}
                  className={`py-2.5 rounded-xl text-xs font-button transition-all border ${
                    selectedWeight === w
                      ? 'bg-[#1D4F2B] text-white border-[#1D4F2B] shadow-md'
                      : 'bg-white text-[#202020] border-[#E8E2D6] hover:bg-[#F6F1E7]'
                  }`}
                >
                  {w}
                </button>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="pt-4 flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleWhatsAppOrder}
              className="flex-1 font-button text-xs sm:text-sm bg-[#1D4F2B] hover:bg-[#12351D] text-white py-3.5 px-5 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-md"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>{t?.hero?.btnContact || "Contact Us"}</span>
            </button>
            <button
              onClick={handleWhatsAppOrder}
              className="flex-1 font-button text-xs sm:text-sm bg-[#F6F1E7] hover:bg-[#E8E2D6] text-[#12351D] border border-[#E8E2D6] py-3.5 px-5 rounded-xl flex items-center justify-center gap-2 transition-colors"
            >
              <ShoppingBag className="w-4 h-4 text-[#D8A43A]" />
              <span>{lang === 'ml' ? 'റേറ്റ് അറിയാൻ വിളിക്കൂ' : 'Request Custom Quote'}</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductDetailModal;
