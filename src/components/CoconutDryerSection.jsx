import React from 'react';
import { Sun, Droplet, ShieldCheck, MessageCircle, Phone } from 'lucide-react';
import realMillImg from '../assets/images/coconutdry.jpeg';
import { translations } from '../translations';

const CoconutDryerSection = ({ lang }) => {
  const t = translations[lang] || translations.en;
  const whatsappUrl = `https://wa.me/918714348348?text=${encodeURIComponent(
    'Hello PKS Straightway Mill! I want to enquire about Coconut Drying & Oil Extraction service.'
  )}`;
  
  const phoneUrl = `tel:+918714348348`;

  return (
    // Changed to premium beige background
    <section className="bg-[#FFFDF8] py-8 md:py-24 relative overflow-hidden">
      {/* Decorative Glow - Adjusted opacity for light mode */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D8A43A]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-5 md:px-8 relative z-10">
        {/* Main Card - White with premium border */}
        <div className="bg-white border border-[#E8E2D6] rounded-[24px] sm:rounded-[28px] p-4 sm:p-8 md:p-12 shadow-premium-soft">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F6F1E7] border border-[#E8E2D6] text-[11px] sm:text-xs font-semibold text-[#1D4F2B]">
                <Sun className="w-3.5 h-3.5 text-[#D8A43A]" />
                <span>
                  {lang === 'ml'
                    ? 'നാളികേരം വെട്ടി ഡ്രയറിൽ ഉണക്കി ആട്ടുന്നു (HOT-AIR DRYER)'
                    : 'SPECIALIZED HOT-AIR COCONUT DRYER SERVICE'}
                </span>
              </div>

              {/* Headings changed to dark green */}
              <h2 className="font-serif-heading text-xl sm:text-3xl lg:text-4xl font-bold text-[#12351D] leading-tight">
                {lang === 'ml'
                  ? 'മഴക്കാലത്തും നിങ്ങളുടെ തേങ്ങ കേടുവരാതെ ഡ്രയറിൽ ഉണക്കി ആട്ടാം!'
                  : 'Prevent Coconut Spoilage With Hot-Air Dryer Milling!'}
              </h2>

              {/* Paragraph changed to muted gray */}
              <p className="font-sans-body text-sm sm:text-base text-[#666666] leading-relaxed">
                {lang === 'ml'
                  ? 'കേരളത്തിലെ ഈർപ്പമുള്ള കാലാവസ്ഥയിലും മഴക്കാലത്തും നാളികേരം കേടുവരാതെ ഉണക്കാൻ PKS മില്ലിൽ അത്യാധുനിക ഡ്രയർ സൗകര്യം ലഭ്യമാണ്. നിങ്ങളുടെ തേങ്ങ മുറിച്ച് ഡ്രയറിൽ ഉണക്കി ശുദ്ധമായ നാടൻ വെളിച്ചെണ്ണ ആട്ടി നൽകുന്നു.'
                  : 'In Kerala’s rainy and humid weather, raw coconuts quickly spoil. Our hygienic hot-air dryer dries cut coconuts perfectly within hours, preserving natural essential oils for 100% pure country coconut oil.'}
              </p>

              {/* 3 Value Pillars - Changed to Beige cards with dark text */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 pt-1 sm:pt-2">
                <div className="bg-[#F6F1E7] p-3 sm:p-3.5 rounded-xl border border-[#E8E2D6] space-y-1">
                  <Sun className="w-4 h-4 text-[#D8A43A]" />
                  <h4 className="font-bold text-xs sm:text-sm text-[#12351D]">
                    {lang === 'ml' ? 'മഴക്കാല പ്രതിരോധം' : 'Zero Moisture Spoilage'}
                  </h4>
                  <p className="text-[11px] text-[#666666] hidden sm:block">
                    {lang === 'ml' ? 'ഹോട്ടെയർ ഡ്രയർ ഉപയോഗിച്ച് ഉണക്കുന്നു' : 'Hygienic hot-air moisture removal'}
                  </p>
                </div>

                <div className="bg-[#F6F1E7] p-3 sm:p-3.5 rounded-xl border border-[#E8E2D6] space-y-1">
                  <Droplet className="w-4 h-4 text-[#D8A43A]" />
                  <h4 className="font-bold text-xs sm:text-sm text-[#12351D]">
                    {lang === 'ml' ? '100% നാടൻ വെളിച്ചെണ്ണ' : '100% Pure Oil Yield'}
                  </h4>
                  <p className="text-[11px] text-[#666666] hidden sm:block">
                    {lang === 'ml' ? 'പരമ്പരാഗത തികഞ്ഞ ശുദ്ധി' : 'Pure country aroma & taste'}
                  </p>
                </div>

                <div className="bg-[#F6F1E7] p-3 sm:p-3.5 rounded-xl border border-[#E8E2D6] space-y-1">
                  <ShieldCheck className="w-4 h-4 text-[#D8A43A]" />
                  <h4 className="font-bold text-xs sm:text-sm text-[#12351D]">
                    {lang === 'ml' ? 'കസ്റ്റം ബാച്ച് സേവനം' : 'Bring Your Coconuts'}
                  </h4>
                  <p className="text-[11px] text-[#666666] hidden sm:block">
                    {lang === 'ml' ? 'ചെറിയതും വലുതുമായ ബാച്ചുകൾ' : 'For households & farmers'}
                  </p>
                </div>
              </div>

              {/* Dual CTA Buttons */}
              <div className="pt-3 sm:pt-2 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-2.5 sm:gap-4">
                {/* Primary: WhatsApp (Full width on mobile) */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-button text-xs md:text-sm bg-[#25D366] hover:bg-[#20ba5a] text-white px-6 py-3 rounded-full font-bold flex items-center justify-center gap-2 transition-all shadow-lg w-full sm:w-auto"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{lang === 'ml' ? 'തേങ്ങ ആട്ടാൻ വാട്ട്‌സ്ആപ്പ് ചെയൂ' : 'Book Drying on WhatsApp'}</span>
                </a>

                {/* Secondary: Call to Enquire */}
                <a
                  href={phoneUrl}
                  className="font-button text-xs md:text-sm bg-transparent hover:bg-[#F6F1E7] text-[#202020] border border-[#E8E2D6] px-6 py-3 rounded-full flex items-center justify-center gap-2 transition-all w-full sm:w-auto"
                >
                  <Phone className="w-4 h-4 text-[#1D4F2B]" />
                  <span>{lang === 'ml' ? 'വിളിച്ച് അന്വേഷിക്കൂ' : 'Call to Enquire'}</span>
                </a>
              </div>

            </div>

            {/* Right Photo Column (5 cols) */}
            <div className="lg:col-span-5 relative mt-4 lg:mt-0">
              <div className="rounded-2xl overflow-hidden border border-[#E8E2D6] shadow-2xl relative group">
                <img
                  src={realMillImg}
                  alt="PKS Straightway Mill Coconut Dryer Facility Vakeelppadi"
                  className="w-full h-56 sm:h-80 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                {/* Slightly darker gradient for better text readability on mobile */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                
                {/* Overlay text kept white as it sits over a dark image */}
                <div className="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-md p-3 sm:p-4 border-t border-[#D8A43A]/50 text-left">
                  <span className="text-[9px] sm:text-[10px] font-mono text-[#D8A43A] font-bold uppercase">
                    HYGIENIC COCONUT DRYER FACILITY
                  </span>
                  <p className="font-serif-heading text-xs sm:text-sm font-bold text-white mt-0.5">
                    PKS Straightway Mill • Vakeelppadi - Karulai
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CoconutDryerSection;