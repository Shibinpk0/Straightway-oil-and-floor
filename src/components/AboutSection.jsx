import React from 'react';
import { Award, CheckCircle2, ShieldCheck } from 'lucide-react';
import storefrontImg from '../assets/images/storefront.png';
import realMillImg from '../assets/images/pks_mill_real.png';
import { translations } from '../translations';

const AboutSection = ({ lang }) => {
  const t = translations[lang] || translations.en;

  return (
    <section id="about" className="bg-[#F6F1E7] py-10 sm:py-20 md:py-28 relative">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-5 md:px-8 space-y-8 sm:space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-2 sm:space-y-4 max-w-2xl mx-auto">
          <div className="hidden sm:flex items-center justify-center gap-3 text-[#D8A43A]">
            <span className="h-[1px] w-12 bg-[#D8A43A]/40"></span>
            <span className="font-serif-heading font-semibold text-xs sm:text-sm tracking-wider uppercase">
              {t?.about?.tag || "✦ OUR STORY & TRADITION ✦"}
            </span>
            <span className="h-[1px] w-12 bg-[#D8A43A]/40"></span>
          </div>

          <h2 className="font-serif-heading text-xl sm:text-3xl md:text-[42px] font-bold text-[#12351D]">
            {t?.about?.heading || "Crafted With Care, For Every Home"}
          </h2>

          <p className="hidden sm:block font-sans-body text-sm sm:text-base text-[#666666]">
            {t?.about?.subtitle || "Straight Way Oil & Flour Mill is a trusted local flour and spice mill dedicated to providing freshly ground food products."}
          </p>
        </div>

        {/* Content & Image Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Real Mill Dual Photo Grid (5 cols) */}
          <div className="lg:col-span-5 relative space-y-4 text-left">
            <div className="relative rounded-[24px] overflow-hidden border border-[#E8E2D6] shadow-premium-soft group">
              <img
                src={realMillImg}
                alt="PKS Straightway Oil & Flour Mill Storefront Vakeelppadi Karulai"
                className="w-full h-[320px] object-cover transform group-hover:scale-103 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-[#12351D] text-white px-3 py-1 rounded-full text-xs font-button font-bold border border-[#D8A43A]">
                PKS Straightway Mill • Vakeelppadi
              </div>
            </div>

            {/* Inset Second Photo */}
            <div className="rounded-[20px] overflow-hidden border border-[#E8E2D6] shadow-sm hidden sm:block">
              <img
                src={storefrontImg}
                alt="Traditional Mill Chakki Grinders"
                className="w-full h-44 object-cover"
              />
            </div>
          </div>

          {/* Narrative Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="space-y-3">
              <h3 className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#12351D] leading-snug">
                {t?.about?.subHeading || "Serving Families with Purity, Aroma & Trust"}
              </h3>
              <div className="w-16 h-1 bg-[#D8A43A] rounded-full"></div>
            </div>

            <p className="font-sans-body text-sm sm:text-base text-[#666666] leading-relaxed">
              {t?.about?.p1 || "Using traditional grinding techniques combined with hygienic processing, we ensure every product reaches your home with freshness, natural aroma, and authentic taste."}
            </p>

            <p className="font-sans-body text-sm sm:text-base text-[#666666] leading-relaxed">
              {t?.about?.p2 || "Whether you need ready-made products or custom grinding, we are here to serve you."}
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#E8E2D6]">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#1D4F2B] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif-heading text-sm font-bold text-[#12351D]">
                    {lang === 'ml' ? 'കഴുകി ഉണക്കിയ ശുദ്ധത' : 'Washed & Sun-Dried Spices'}
                  </h4>
                  <p className="text-xs text-[#666666] mt-0.5">
                    {lang === 'ml' ? 'മുളക്, മഞ്ഞൾ, മല്ലി കഴുകി വെയിലിൽ ഉണക്കി പൊടിയാക്കുന്നു.' : 'Chillies, turmeric & coriander washed thoroughly.'}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#1D4F2B] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif-heading text-sm font-bold text-[#12351D]">
                    {lang === 'ml' ? 'തേങ്ങ ഡ്രയർ സൗകര്യം' : 'Hygienic Hot-Air Dryer'}
                  </h4>
                  <p className="text-xs text-[#666666] mt-0.5">
                    {lang === 'ml' ? 'മുറിച്ച തേങ്ങ ഉണക്കി വെളിച്ചെണ്ണ ആട്ടാൻ ഡ്രയർ സൗകര്യം.' : 'Clean hot-air coconut drying & oil extraction.'}
                  </p>
                </div>
              </div>
            </div>

            {/* Badge Footer */}
            <div className="pt-2 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#1D4F2B]/10 text-[#1D4F2B] flex items-center justify-center shrink-0">
                <Award className="w-6 h-6 text-[#D8A43A]" />
              </div>
              <div>
                <p className="font-serif-heading text-sm font-bold text-[#12351D]">
                  PKS Straightway Oil & Flour Mill
                </p>
                <p className="text-xs text-[#666666]">
                  {t?.locationShort || "Vakkeelpadi, Karulai"} | Mob: {t?.phone1 || "+91 8714 348 348"}
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;
