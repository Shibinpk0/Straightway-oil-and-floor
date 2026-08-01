import React from 'react';
import { Sun, Droplet, ShieldCheck, MessageCircle, ArrowRight } from 'lucide-react';
import realMillImg from '../assets/images/pks_mill_real.png';
import { translations } from '../translations';

const CoconutDryerSection = ({ lang }) => {
  const t = translations[lang] || translations.en;
  const whatsappUrl = `https://wa.me/918714348348?text=${encodeURIComponent(
    'Hello PKS Straightway Mill! I want to enquire about Coconut Drying & Oil Extraction service.'
  )}`;

  return (
    <section className="bg-[#12351D] text-white py-16 md:py-24 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D8A43A]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-5 md:px-8 relative z-10">
        <div className="bg-white/5 border border-white/15 rounded-[28px] p-6 sm:p-10 md:p-12 backdrop-blur-md shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D8A43A]/20 border border-[#D8A43A]/40 text-xs font-semibold text-[#D8A43A]">
                <Sun className="w-3.5 h-3.5 text-[#D8A43A] animate-spin-slow" />
                <span>
                  {lang === 'ml'
                    ? 'നാളികേരം വെട്ടി ഡ്രയറിൽ ഉണക്കി ആട്ടുന്നു (KERALA HOT-AIR DRYER)'
                    : 'SPECIALIZED HOT-AIR COCONUT DRYER SERVICE'}
                </span>
              </div>

              <h2 className="font-serif-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
                {lang === 'ml'
                  ? 'മഴക്കാലത്തും നിങ്ങളുടെ തേങ്ങ കേടുവരാതെ ഡ്രയറിൽ ഉണക്കി ആട്ടാം!'
                  : 'Prevent Coconut Spoilage With Hot-Air Dryer Milling!'}
              </h2>

              <p className="font-sans-body text-sm sm:text-base text-[#FFFDF8]/80 leading-relaxed">
                {lang === 'ml'
                  ? 'കേരളത്തിലെ ഈർപ്പമുള്ള കാലാവസ്ഥയിലും മഴക്കാലത്തും നാളികേരം കേടുവരാതെ ഉണക്കാൻ PKS മില്ലിൽ അത്യാധുനിക ഡ്രയർ സൗകര്യം ലഭ്യമാണ്. നിങ്ങളുടെ തേങ്ങ മുറിച്ച് ഡ്രയറിൽ ഉണക്കി ശുദ്ധമായ നാടൻ വെളിച്ചെണ്ണ ആട്ടി നൽകുന്നു.'
                  : 'In Kerala’s rainy and humid weather, raw coconuts quickly spoil. Our hygienic hot-air dryer dries cut coconuts perfectly within hours, preserving natural essential oils for 100% pure country coconut oil.'}
              </p>

              {/* 3 Value Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="bg-white/10 p-3.5 rounded-xl border border-white/10 space-y-1">
                  <Sun className="w-4 h-4 text-[#D8A43A]" />
                  <h4 className="font-bold text-xs text-white">
                    {lang === 'ml' ? 'മഴക്കാല പ്രതിരോധം' : 'Zero Moisture Spoilage'}
                  </h4>
                  <p className="text-[11px] text-[#FFFDF8]/70">
                    {lang === 'ml' ? 'ഹോട്ടെയർ ഡ്രയർ ഉപയോഗിച്ച് ഉണക്കുന്നു' : 'Hygienic hot-air moisture removal'}
                  </p>
                </div>

                <div className="bg-white/10 p-3.5 rounded-xl border border-white/10 space-y-1">
                  <Droplet className="w-4 h-4 text-[#D8A43A]" />
                  <h4 className="font-bold text-xs text-white">
                    {lang === 'ml' ? '100% നാടൻ വെളിച്ചെണ്ണ' : '100% Pure Oil Yield'}
                  </h4>
                  <p className="text-[11px] text-[#FFFDF8]/70">
                    {lang === 'ml' ? 'പരമ്പരാഗത തികഞ്ഞ ശുദ്ധി' : 'Pure country aroma & taste'}
                  </p>
                </div>

                <div className="bg-white/10 p-3.5 rounded-xl border border-white/10 space-y-1">
                  <ShieldCheck className="w-4 h-4 text-[#D8A43A]" />
                  <h4 className="font-bold text-xs text-white">
                    {lang === 'ml' ? 'കസ്റ്റം ബാച്ച് സേവനം' : 'Bring Your Coconuts'}
                  </h4>
                  <p className="text-[11px] text-[#FFFDF8]/70">
                    {lang === 'ml' ? 'ചെറിയതും വലുതുമായ ബാച്ചുകൾ' : 'For households & farmers'}
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-button text-xs md:text-sm bg-[#25D366] hover:bg-[#20ba5a] text-white px-6 py-3 rounded-full font-bold flex items-center gap-2 transition-all shadow-lg"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{lang === 'ml' ? 'തേങ്ങ ആട്ടാൻ വാട്ട്‌സ്ആപ്പ് ചെയൂ' : 'Book Coconut Drying on WhatsApp'}</span>
                </a>
              </div>

            </div>

            {/* Right Photo Column (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden border border-[#D8A43A]/40 shadow-2xl relative group">
                <img
                  src={realMillImg}
                  alt="PKS Straightway Mill Coconut Dryer Facility Vakeelppadi"
                  className="w-full h-64 sm:h-80 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-md p-3 rounded-xl border border-[#D8A43A] text-left">
                  <span className="text-[10px] font-mono text-[#D8A43A] font-bold uppercase">
                    HYGIENIC COCONUT DRYER FACILITY
                  </span>
                  <p className="font-serif-heading text-xs font-bold text-white mt-0.5">
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
