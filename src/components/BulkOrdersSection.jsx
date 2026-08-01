import React, { useState } from 'react';
import { Building2, Utensils, Store, PartyPopper, Cake, Truck, ShieldCheck, MessageCircle, Calculator } from 'lucide-react';
import { translations } from '../translations';

const BulkOrdersSection = ({ lang }) => {
  const t = translations[lang] || translations.en;

  const [quantity, setQuantity] = useState(25);
  const [productType, setProductType] = useState('coconut_oil');
  const [grindType, setGrindType] = useState('fine');

  // Rate estimates
  const rates = {
    coconut_oil: { base: 210, label: lang === 'ml' ? 'നാടൻ വെളിച്ചെണ്ണ (Ltr)' : 'Country Coconut Oil (Ltr)' },
    chilli_powder: { base: 260, label: lang === 'ml' ? 'കഴുകി ഉണക്കിയ മുളകുപൊടി (Kg)' : 'Washed Chilli Powder (Kg)' },
    turmeric_powder: { base: 220, label: lang === 'ml' ? 'കുർകുമിൻ മഞ്ഞൾപ്പൊടി (Kg)' : 'Turmeric Powder (Kg)' },
    coriander_powder: { base: 200, label: lang === 'ml' ? 'മല്ലിപ്പൊടി (Kg)' : 'Coriander Powder (Kg)' },
    wheat_flour: { base: 60, label: lang === 'ml' ? 'വറുത്ത ആട്ട പൊടി (Kg)' : 'Roasted Atta Powder (Kg)' },
    rice_flour: { base: 65, label: lang === 'ml' ? 'വറുത്ത അരിപ്പൊടി / പുട്ടുപൊടി (Kg)' : 'Roasted Rice Flour / Puttu Podi (Kg)' },
    custom_milling: { base: 15, label: lang === 'ml' ? 'കസ്റ്റം ആട്ടൽ സേവനം (Kg)' : 'Custom Milling Service (Kg)' },
  };

  const currentProduct = rates[productType] || rates.coconut_oil;
  const estimatedTotal = quantity * currentProduct.base;

  const handleWhatsAppQuote = () => {
    const text = encodeURIComponent(
      `Hello PKS Straightway Mill!\nI want a bulk wholesale quote:\n- Product: ${currentProduct.label}\n- Quantity: ${quantity} Kg/Ltr\n- Texture: ${grindType}\n- Estimated Price: ₹${estimatedTotal}`
    );
    window.open(`https://wa.me/918714348348?text=${text}`, '_blank');
  };

  const sectors = [
    { icon: Utensils, title: t?.bulk?.sectors?.[0] || 'Hotels & Restaurants', desc: lang === 'ml' ? 'സുഗന്ധവും സ്വാദും നിറഞ്ഞ ഫ്രഷ് പൊടികളും വെളിച്ചെണ്ണയും' : 'Fresh spice powders and pure coconut oil for authentic dishes.' },
    { icon: Store, title: t?.bulk?.sectors?.[1] || 'Retail Shops', desc: lang === 'ml' ? 'റീട്ടെയിൽ വിതരണത്തിനായി ആകർഷകമായ പായ്ക്കറ്റുകളിൽ' : 'Hygienically packaged retail packs for local stores.' },
    { icon: PartyPopper, title: t?.bulk?.sectors?.[2] || 'Catering & Events', desc: lang === 'ml' ? 'കല്യാണങ്ങൾക്കും വലിയ സദ്യകൾക്കുമായി കൂടുതൽ അളവിൽ' : 'Special bulk batches for weddings and large catering orders.' },
    { icon: Cake, title: t?.bulk?.sectors?.[3] || 'Bakeries', desc: lang === 'ml' ? 'ബേക്കിംഗ് ആവശ്യങ്ങൾക്ക് ഗുണമേന്മയുള്ള ആട്ടയും മൈദയും' : 'High grade wheat, maida, and grain flours for bakery items.' },
    { icon: Truck, title: t?.bulk?.sectors?.[4] || 'Wholesale Distributors', desc: lang === 'ml' ? 'ഹോൾസെയിൽ വ്യാപാരികൾക്ക് ആകർഷകമായ മിൽ നിരക്കിൽ' : 'Direct mill rates for wholesale suppliers and distributors.' },
    { icon: Building2, title: t?.bulk?.sectors?.[5] || 'Residential Groups', desc: lang === 'ml' ? 'റെസിഡൻഷ്യൽ സൊസൈറ്റികൾക്കും ഫ്ലാറ്റുകൾക്കും' : 'Bulk household supplies for housing societies & groups.' },
  ];

  return (
    <section id="bulk" className="bg-[#12351D] text-white py-20 md:py-28 relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D8A43A]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-5 md:px-8 space-y-16 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-3 text-[#D8A43A]">
            <span className="h-[1px] w-12 bg-[#D8A43A]/40"></span>
            <span className="font-serif-heading font-semibold text-xs sm:text-sm tracking-wider uppercase">
              {t?.bulk?.tag || "✦ WHOLESALE & COMMERCIAL ✦"}
            </span>
            <span className="h-[1px] w-12 bg-[#D8A43A]/40"></span>
          </div>

          <h2 className="font-serif-heading text-3xl sm:text-4xl md:text-[42px] font-bold text-white leading-tight">
            {t?.bulk?.heading || "We Accept Bulk Orders For"}
          </h2>

          <p className="font-sans-body text-sm sm:text-base text-[#FFFDF8]/80">
            {t?.bulk?.subtitle || "Serving commercial clients, eateries, caterers, and retail stores with custom batch sizes."}
          </p>
        </div>

        {/* Sectors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {sectors.map((sector, idx) => {
            const Icon = sector.icon;
            return (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 p-6 rounded-[24px] space-y-3 hover:bg-white/10 transition-colors backdrop-blur-sm"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#D8A43A]/20 text-[#D8A43A] flex items-center justify-center">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif-heading text-lg font-bold text-white">
                  {sector.title}
                </h3>
                <p className="font-sans-body text-xs sm:text-sm text-[#FFFDF8]/70 leading-relaxed">
                  {sector.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bulk Calculator Box */}
        <div className="bg-white text-[#12351D] p-6 sm:p-10 rounded-[28px] border border-[#E8E2D6] shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left">
          
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1D4F2B]/10 text-[#1D4F2B] text-xs font-bold">
              <Calculator className="w-4 h-4 text-[#D8A43A]" />
              <span>{t?.bulk?.calcTitle || "Wholesale Estimator"}</span>
            </div>

            <h3 className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#12351D]">
              {lang === 'ml' ? 'തുക മുൻകൂട്ടി കണക്കാക്കാം' : 'Custom Wholesale Calculator'}
            </h3>

            <p className="font-sans-body text-xs sm:text-sm text-[#666666] leading-relaxed">
              {t?.bulk?.calcSubtitle || "Select service and quantity for estimated pricing"}
            </p>

            {/* Select Product */}
            <div>
              <label className="block text-xs font-bold text-[#202020] uppercase tracking-wider mb-2">
                {lang === 'ml' ? 'ഉൽപ്പന്നം തിരഞ്ഞെടുക്കുക' : 'Select Product Category'}
              </label>
              <select
                value={productType}
                onChange={(e) => setProductType(e.target.value)}
                className="w-full bg-[#F6F1E7] border border-[#E8E2D6] rounded-xl px-4 py-3 text-sm font-semibold text-[#12351D] focus:outline-none focus:border-[#1D4F2B]"
              >
                {Object.keys(rates).map((key) => (
                  <option key={key} value={key}>
                    {rates[key].label}
                  </option>
                ))}
              </select>
            </div>

            {/* Quantity Slider */}
            <div>
              <div className="flex justify-between items-center mb-2 text-xs font-bold text-[#202020]">
                <span>{lang === 'ml' ? 'അളവ് (Quantity)' : 'Select Quantity'}</span>
                <span className="text-[#1D4F2B] text-sm font-mono">{quantity} Kg/Ltr</span>
              </div>
              <input
                type="range"
                min="10"
                max="500"
                step="5"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="w-full accent-[#1D4F2B] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-[#666666] mt-1 font-mono">
                <span>10 Kg</span>
                <span>100 Kg</span>
                <span>250 Kg</span>
                <span>500 Kg</span>
              </div>
            </div>

            {/* Texture */}
            <div>
              <label className="block text-xs font-bold text-[#202020] uppercase tracking-wider mb-2">
                {lang === 'ml' ? 'പൊടിയുടെ പാകം (Texture)' : 'Grinding Texture'}
              </label>
              <div className="grid grid-cols-3 gap-2 text-xs font-bold">
                {['fine', 'medium', 'coarse'].map((tex) => (
                  <button
                    key={tex}
                    type="button"
                    onClick={() => setGrindType(tex)}
                    className={`py-2 rounded-xl capitalize transition-colors ${
                      grindType === tex
                        ? 'bg-[#1D4F2B] text-white'
                        : 'bg-[#F6F1E7] text-[#12351D] border border-[#E8E2D6]'
                    }`}
                  >
                    {tex}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Estimate Display & WhatsApp Action */}
          <div className="lg:col-span-6 bg-[#F6F1E7] p-6 sm:p-8 rounded-[24px] border border-[#E8E2D6] space-y-6 flex flex-col justify-between h-full">
            <div className="space-y-4">
              <span className="text-xs font-bold text-[#666666] uppercase tracking-wider block">
                {lang === 'ml' ? 'കണക്കാക്കിയ മിൽ നിരക്ക്' : 'Estimated Wholesale Investment'}
              </span>

              <div className="font-serif-heading text-4xl sm:text-5xl font-bold text-[#12351D]">
                ₹{estimatedTotal.toLocaleString()}
                <span className="text-xs font-normal text-[#666666] block mt-1 font-sans-body">
                  {lang === 'ml' ? '* ജിഎസ്ടി & ട്രാൻസ്പോർട്ട് ഒഴികെ' : '* Taxes & transport extra based on distance'}
                </span>
              </div>

              <div className="pt-3 border-t border-[#E8E2D6] text-xs text-[#666666] space-y-2">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#1D4F2B]" />
                  <span>{lang === 'ml' ? 'ഡ്രയറിൽ ഉണക്കിയ 100% ശുദ്ധമായ ചേരുവകൾ' : '100% Hot-Air Dried Pure Ingredients'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#1D4F2B]" />
                  <span>{lang === 'ml' ? 'ആവശ്യാനുസരണം പാകം ക്രമീകരിച്ചു പൊടിക്കുന്നു' : 'Custom texture adjustment per client requirement'}</span>
                </div>
              </div>
            </div>

            <button
              onClick={handleWhatsAppQuote}
              className="w-full font-button text-xs sm:text-sm bg-[#25D366] hover:bg-[#20ba5a] text-white py-4 rounded-full font-bold flex items-center justify-center gap-2 shadow-md transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              <span>{t?.bulk?.btnSubmit || "Submit WhatsApp Quote Request"}</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

export default BulkOrdersSection;
