import React from 'react';
import { Award, CheckCircle2, ShieldCheck } from 'lucide-react';
import storefrontImg from '../assets/images/storefront.jpg';
import realMillImg from '../assets/images/pks_mill_real.png';
import { translations } from '../translations';

const AboutSection = ({ lang }) => {
  const t = translations[lang] || translations.en;

  return (
    <section id="about" className="bg-[#FFFDF7] py-12 md:py-16 lg:py-20 relative">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-5 md:px-8 space-y-8 md:space-y-10">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-3 text-[#B86F52]">
            <span className="h-[1px] w-12 bg-[#B86F52]/40"></span>
            <span className="font-serif-heading font-semibold text-xs sm:text-sm tracking-wider uppercase">{t?.about?.tag || "✦ OUR STORY & TRADITION ✦"}</span>
            <span className="h-[1px] w-12 bg-[#B86F52]/40"></span>
          </div>
          <h2 className="font-serif-heading text-xl sm:text-3xl font-bold text-[#29332B]">{t?.about?.heading || "Crafted With Care, For Every Home"}</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-5 relative space-y-4 text-left">
            <div className="relative rounded-[24px] overflow-hidden border border-[#E1D9C9] shadow-premium-soft group">
              <img src={realMillImg} alt="PKS Straightway Oil & Flour Mill Storefront Vakeelppadi Karulai" className="w-full h-[260px] sm:h-[320px] object-cover transform group-hover:scale-103 transition-transform duration-500" />
              <div className="absolute top-3 left-3 bg-[#29332B] text-white px-3 py-1 rounded-full text-[10px] font-button font-bold border border-[#C7A15A]">PKS Straightway Mill • Vakeelppadi</div>
            </div>
            <div className="rounded-[20px] overflow-hidden border border-[#E1D9C9] shadow-sm hidden sm:block">
              <img src={storefrontImg} alt="Traditional Mill Chakki Grinders" className="w-full h-32 object-cover" />
            </div>
          </div>

          <div className="lg:col-span-7 space-y-5 text-left">
            <div className="space-y-2">
              <h3 className="font-serif-heading text-xl sm:text-2xl font-bold text-[#29332B] leading-snug">{t?.about?.subHeading || "Serving Families with Purity, Aroma & Trust"}</h3>
              <div className="w-12 h-1 bg-[#B86F52] rounded-full"></div>
            </div>
            <p className="font-sans-body text-sm text-[#5A635A] leading-relaxed">{t?.about?.p1 || "Using traditional grinding techniques combined with hygienic processing, we ensure every product reaches your home with freshness, natural aroma, and authentic taste."}</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 border-t border-[#E1D9C9]">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#667A61] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif-heading text-sm font-bold text-[#29332B]">{lang === 'ml' ? 'കഴുകി ഉണക്കിയ ശുദ്ധത' : 'Washed & Sun-Dried Spices'}</h4>
                  <p className="text-xs text-[#5A635A] mt-0.5">{lang === 'ml' ? 'മുളക്, മഞ്ഞൾ, മല്ലി കഴുകി വെയിലിൽ ഉണക്കി പൊടിയാക്കുന്നു.' : 'Chillies, turmeric & coriander washed thoroughly.'}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#667A61] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif-heading text-sm font-bold text-[#29332B]">{lang === 'ml' ? 'തേങ്ങ ഡ്രയർ സൗകര്യം' : 'Hygienic Hot-Air Dryer'}</h4>
                  <p className="text-xs text-[#5A635A] mt-0.5">{lang === 'ml' ? 'മുറിച്ച തേങ്ങ ഉണക്കി വെളിച്ചെണ്ണ ആട്ടാൻ ഡ്രയർ സൗകര്യം.' : 'Clean hot-air coconut drying & oil extraction.'}</p>
                </div>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-4">
              <div className="w-11 h-11 rounded-full bg-[#667A61]/10 text-[#667A61] flex items-center justify-center shrink-0">
                <Award className="w-5 h-5 text-[#C7A15A]" />
              </div>
              <div>
                <p className="font-serif-heading text-sm font-bold text-[#29332B]">PKS Straightway Oil & Flour Mill</p>
                <p className="text-xs text-[#5A635A]">{t?.locationShort || "Vakkeelpadi, Karulai"} | Mob: {t?.phone1 || "+91 8714 348 348"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;