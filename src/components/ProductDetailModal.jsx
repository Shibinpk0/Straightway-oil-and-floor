import React, { useState , useEffect} from 'react';
import { X, CheckCircle, MessageCircle, Phone, ShieldCheck } from 'lucide-react';
import { translations } from '../translations';

const ProductDetailModal = ({ product, onClose, lang }) => {
  const [selectedWeight, setSelectedWeight] = useState('500g');
  const t = translations[lang] || translations.en;

  useEffect(() => {
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
    return () => {
      document.body.style.overflow = 'auto'; // Restore scrolling
    };
  }, []);

  if (!product) return null;

  const weights = ['100g', '250g', '500g', '1kg / 1L'];

  const title = lang === 'ml' && product.titleMl ? product.titleMl : product.title;
  const desc = lang === 'ml' && product.descMl ? product.descMl : product.desc;

  const phoneUrl = `tel:+918714348348`;

  const currentPrice = product.prices?.[selectedWeight] || product.prices?.['500g'] || '₹0';

  const handleWhatsAppOrder = () => {
    const text = encodeURIComponent(
      `Hello PKS Straightway Mill!\nI am interested in ordering:\n*Product:* ${title}\n*Selected Size:* ${selectedWeight}\n*Estimated Price:* ${currentPrice}\n*Quantity:* 1\nPlease let me know availability and price.`
    );
    window.open(`https://wa.me/918714348348?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      {/* Main Container: Entire card scrolls naturally if screen is small */}
      <div className="bg-[#FFFDF8] rounded-[24px] w-full max-w-2xl border border-[#E8E2D6] shadow-2xl overflow-hidden relative max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-white/90 border border-[#E8E2D6] flex items-center justify-center text-[#202020] hover:bg-[#1D4F2B] hover:text-white transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Content Wrapper - Normal flow, tight spacing */}
        <div className="p-4 sm:p-6">
          {/* Header */}
          <div className="text-left pr-8 mb-3">
            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-[#D8A43A]">
              PKS Straightway Mill • Vakeelppadi
            </span>
            <h2 className="font-serif-heading text-xl sm:text-2xl md:text-3xl font-bold text-[#12351D] leading-tight mt-0.5">
              {title}
            </h2>
          </div>

          {/* Product Image & Details */}
          {/* Changed grid gap to gap-4 for tighter mobile look */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start mb-4">
            {/* IMAGE: Made much smaller on mobile (h-36) to save scroll space */}
            <div className="rounded-2xl overflow-hidden border border-[#E8E2D6] shadow-sm bg-white h-36 sm:h-52 md:h-64 w-full">
              <img
                src={product.image}
                alt={title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="text-left">
              <p className="font-sans-body text-xs sm:text-sm text-[#666666] leading-relaxed line-clamp-3">
                {desc}
              </p>

              <div className="grid grid-cols-2 gap-x-3 gap-y-2 mt-3">
                <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-medium text-[#12351D]">
                  <CheckCircle className="w-3.5 h-3.5 text-[#D8A43A] shrink-0" />
                  <span>{lang === 'ml' ? '100% ശുദ്ധി' : '100% Pure Quality'}</span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-medium text-[#12351D]">
                  <CheckCircle className="w-3.5 h-3.5 text-[#D8A43A] shrink-0" />
                  <span>{lang === 'ml' ? 'മായമില്ല' : 'No Fillers'}</span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-medium text-[#12351D]">
                  <CheckCircle className="w-3.5 h-3.5 text-[#D8A43A] shrink-0" />
                  <span>{lang === 'ml' ? 'ഹോട്ടെയർ ഡ്രയർ' : 'Hot-Air Dried'}</span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-medium text-[#12351D]">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#D8A43A] shrink-0" />
                  <span>{lang === 'ml' ? 'സുഗന്ധം ഉറപ്പ്' : 'Natural Oils'}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Weight Selector & Dynamic Price Display */}
          <div className="border-t border-[#E8E2D6] pt-4 text-left mb-4">
            <label className="block text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[#202020] mb-2">
              {lang === 'ml' ? 'അളവ്' : 'Available Pack Sizes'}
            </label>
            <div className="grid grid-cols-4 gap-2 sm:gap-3">
              {weights.map((w) => (
                <button
                  key={w}
                  onClick={() => setSelectedWeight(w)}
                  className={`py-2 sm:py-2.5 rounded-lg sm:rounded-xl text-[11px] sm:text-xs font-button transition-all border ${
                    selectedWeight === w
                      ? 'bg-[#1D4F2B] text-white border-[#1D4F2B] shadow-sm sm:shadow-md'
                      : 'bg-white text-[#202020] border-[#E8E2D6] hover:bg-[#F6F1E7]'
                  }`}
                >
                  {w}
                </button>
              ))}
            </div>
            
            {/* Dynamic Price Box */}
            <div className="flex items-center justify-between bg-[#F6F1E7] p-3 rounded-xl border border-[#E8E2D6] mt-4">
              <span className="text-xs sm:text-sm font-medium text-[#666666]">
                {lang === 'ml' ? 'മൊത്തം വില' : 'Estimated Price'}
              </span>
              <div className="text-right">
                <span className="font-serif-heading text-xl sm:text-2xl font-bold text-[#12351D]">{currentPrice}</span>
                <span className="text-[10px] sm:text-xs text-[#666666] ml-1">({selectedWeight})</span>
              </div>
            </div>
          </div>

          {/* Actions - Normal flow inside the scrolling container */}
          <div className="flex flex-col sm:flex-row gap-2 pb-2">
            <a
              href={phoneUrl}
              className="flex-1 font-button text-xs sm:text-sm bg-[#1D4F2B] hover:bg-[#12351D] text-white py-3 px-5 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-md"
            >
              <Phone className="w-4 h-4 text-[#D8A43A]" />
              <span>{lang === 'ml' ? 'വിളിച്ച് ഓർഡർ ചെയ്യൂ' : 'Call to Order Now'}</span>
            </a>

            <button
              onClick={handleWhatsAppOrder}
              className="flex-1 font-button text-xs sm:text-sm bg-[#F6F1E7] hover:bg-[#E8E2D6] text-[#12351D] border border-[#E8E2D6] py-3 px-5 rounded-xl flex items-center justify-center gap-2 transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>{lang === 'ml' ? 'വാട്സ്ആപ്പ് ചോദിക്കൂ' : 'Enquire on WhatsApp'}</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductDetailModal;