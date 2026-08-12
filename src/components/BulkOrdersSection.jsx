import React, { useState } from 'react';
import { Building2, Utensils, Store, PartyPopper, Cake, Truck, ShieldCheck, MessageCircle, Calculator, Phone } from 'lucide-react';
import { translations } from '../translations';

const BulkOrdersSection = ({ lang }) => {
  const t = translations[lang] || translations.en;
  const [quantity, setQuantity] = useState(5);
  const [productType, setProductType] = useState('coconut_oil');
  const [grindType, setGrindType] = useState('fine');

  const phoneUrl = `tel:+918714348348`;

  const rates = {
    coconut_oil: { base: 210, label: lang === 'ml' ? 'നാടൻ വെളിച്ചെണ്ണ (Ltr)' : 'Country Coconut Oil (Ltr)' },
    chilli_powder: { base: 260, label: lang === 'ml' ? 'കഴുകി ഉണക്കിയ മുളകുപൊടി (Kg)' : 'Washed Chilli Powder (Kg)' },
    turmeric_powder: { base: 220, label: lang === 'ml' ? 'കുർക്യുമിൻ മഞ്ഞൾപ്പൊടി (Kg)' : 'Turmeric Powder (Kg)' },
    coriander_powder: { base: 200, label: lang === 'ml' ? 'മല്ലിപ്പൊടി (Kg)' : 'Coriander Powder (Kg)' },
    wheat_flour: { base: 60, label: lang === 'ml' ? 'വറുത്ത ആട്ട പൊടി (Kg)' : 'Roasted Atta Powder (Kg)' },
    rice_flour: { base: 65, label: lang === 'ml' ? 'വറുത്ത അരിപ്പൊടി / പുട്ടുപൊടി (Kg)' : 'Roasted Rice Flour / Puttu Podi (Kg)' },
    custom_milling: { base: 15, label: lang === 'ml' ? 'കസ്റ്റം ആട്ടൽ സേവനം (Kg)' : 'Custom Milling Service (Kg)' },
  };

  const currentProduct = rates[productType] || rates.coconut_oil;
  const estimatedTotal = quantity * currentProduct.base;
  const needsTexture = ['wheat_flour', 'rice_flour', 'custom_milling'].includes(productType);

  const handleWhatsAppQuote = () => {
    const textureInfo = needsTexture ? `\n- Texture: ${grindType}` : '';
    const text = encodeURIComponent(`Hello PKS Straightway Mill!\nI want a bulk wholesale quote:\n- Product: ${currentProduct.label}\n- Quantity: ${quantity} Kg/Ltr${textureInfo}\n- Estimated Price: ₹${estimatedTotal}`);
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
    <section id="bulk" className="bg-[#29332B] text-white py-12 md:py-16 lg:py-20 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C7A15A]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-[1280px] mx-auto px-4 sm:px-5 md:px-8 space-y-8 md:space-y-10 relative z-10">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-3 text-[#C7A15A]">
            <span className="h-[1px] w-12 bg-[#C7A15A]/40"></span>
            <span className="font-serif-heading font-semibold text-xs sm:text-sm tracking-wider uppercase">{t?.bulk?.tag || "✦ WHOLESALE & COMMERCIAL ✦"}</span>
            <span className="h-[1px] w-12 bg-[#C7A15A]/40"></span>
          </div>
          <h2 className="font-serif-heading text-xl sm:text-3xl font-bold text-white leading-tight">{t?.bulk?.heading || "We Accept Bulk Orders For"}</h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 text-left">
          {sectors.map((sector, idx) => {
            const Icon = sector.icon;
            return (
              <div key={idx} className="bg-white/5 border border-white/10 p-3 sm:p-4 rounded-xl space-y-2 hover:bg-white/10 transition-colors backdrop-blur-sm">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-[#C7A15A]/20 text-[#C7A15A] flex items-center justify-center">
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <h3 className="font-serif-heading text-xs sm:text-sm font-bold text-white leading-tight">{sector.title}</h3>
                <p className="hidden sm:block font-sans-body text-[11px] text-[#F7F3E8]/70 leading-relaxed">{sector.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-[#FFFDF7] text-[#29332B] p-5 sm:p-8 rounded-[24px] border border-[#E1D9C9] shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-6 items-center text-left">
          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#667A61]/10 text-[#667A61] text-xs font-bold">
              <Calculator className="w-4 h-4 text-[#B86F52]" />
              <span>{t?.bulk?.calcTitle || "Wholesale Estimator"}</span>
            </div>
            <h3 className="font-serif-heading text-xl sm:text-2xl font-bold text-[#29332B]">{lang === 'ml' ? 'തുക മുൻകൂട്ടി കണക്കാക്കാം' : 'Custom Wholesale Calculator'}</h3>

            <div>
              <label className="block text-[11px] font-bold text-[#29332B] uppercase tracking-wider mb-1.5">{lang === 'ml' ? 'ഉൽപ്പന്നം തിരഞ്ഞെടുക്കുക' : 'Select Product Category'}</label>
              <select value={productType} onChange={(e) => setProductType(e.target.value)} className="w-full bg-[#EAE2D2] border border-[#E1D9C9] rounded-lg px-3 py-2 text-sm font-semibold text-[#29332B] focus:outline-none focus:border-[#667A61]">
                {Object.keys(rates).map((key) => (<option key={key} value={key}>{rates[key].label}</option>))}
              </select>
            </div>

            <div>
              <div className="flex justify-between items-center mb-1 text-xs font-bold text-[#29332B]">
                <span>{lang === 'ml' ? 'അളവ് (Quantity)' : 'Select Quantity'}</span>
                <span className="text-[#667A61] text-sm font-mono">{quantity} Kg/Ltr</span>
              </div>
              <input type="range" min="0" max="25" step="1" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} className="w-full accent-[#667A61] cursor-pointer" />
              <div className="flex justify-between text-[10px] text-[#5A635A] mt-1 font-mono px-1">
                <span>0</span><span>5</span><span>10</span><span>15</span><span>20</span><span>25</span>
              </div>
            </div>

            {needsTexture && (
              <div>
                <label className="block text-[11px] font-bold text-[#29332B] uppercase tracking-wider mb-1.5">{lang === 'ml' ? 'പൊടിയുടെ പാകം (Texture)' : 'Grinding Texture'}</label>
                <div className="grid grid-cols-3 gap-2 text-xs font-bold">
                  {['fine', 'medium', 'coarse'].map((tex) => (
                    <button key={tex} type="button" onClick={() => setGrindType(tex)} className={`py-1.5 rounded-lg capitalize transition-colors ${grindType === tex ? 'bg-[#667A61] text-white' : 'bg-[#EAE2D2] text-[#29332B] border border-[#E1D9C9]'}`}>{tex}</button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="lg:col-span-6 bg-[#EAE2D2] p-5 sm:p-6 rounded-[20px] border border-[#E1D9C9] space-y-4 flex flex-col justify-between h-full">
            <div className="space-y-3">
              <span className="text-[11px] font-bold text-[#5A635A] uppercase tracking-wider block">{lang === 'ml' ? 'കണക്കാക്കിയ മിൽ നിരക്ക്' : 'Estimated Wholesale Investment'}</span>
              <div className="font-sans-body text-3xl sm:text-4xl font-bold text-[#29332B]">
                ₹{estimatedTotal.toLocaleString()}
                <span className="text-[11px] font-normal text-[#5A635A] block mt-1 font-sans-body">{lang === 'ml' ? '* ജിഎസ്ടി & ട്രാൻസ്പോർട്ട് ഒഴികെ' : '* Taxes & transport extra based on distance'}</span>
              </div>
              <div className="pt-2 border-t border-[#E1D9C9] text-[11px] text-[#5A635A] space-y-1">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#667A61]" />
                  <span>{lang === 'ml' ? 'ഡ്രയറിൽ ഉണക്കിയ 100% ശുദ്ധമായ ചേരുവകൾ' : '100% Hot-Air Dried Pure Ingredients'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#667A61]" />
                  <span>{lang === 'ml' ? 'ആവശ്യാനുസരണം പാകം ക്രമീകരിച്ചു പൊടിക്കുന്നു' : 'Custom texture adjustment per client requirement'}</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 pt-1">
              <a href={phoneUrl} className="flex-1 font-button text-xs bg-[#3fd821] hover:bg-[#52644E] text-white py-2.5 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-md">
                <Phone className="w-4 h-4 text-[#FFFDF7]" />
                <span>{lang === 'ml' ? 'ബൾക്ക് ഓർഡറിനായി വിളിക്കൂ' : 'Call to Confirm Order'}</span>
              </a>
              <button onClick={handleWhatsAppQuote} className="flex-1 font-button text-xs bg-white hover:bg-[#EAE2D2] text-[#29332B] border border-[#E1D9C9] py-2.5 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors">
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>{t?.bulk?.btnSubmit || "Send WhatsApp Quote"}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BulkOrdersSection;