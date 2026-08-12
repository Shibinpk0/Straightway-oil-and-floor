import React from 'react';
import { ShieldCheck, HeartHandshake, Award, ArrowRight } from 'lucide-react';
import realMillImg from '../assets/images/pks_mill_real.png';
import { translations } from '../translations';

const PromoBanner = ({ onKnowMoreClick, lang }) => {
  const t = translations[lang] || translations.en;

  return (
    <section className="bg-[#29332B] text-white py-20 md:py-24 relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-5 relative text-left">
            <div className="relative rounded-[24px] overflow-hidden border border-white/20 shadow-2xl group">
              <img src={realMillImg} alt="PKS Straightway Oil & Flour Mill Storefront Vakeelppadi Karulai" className="w-full h-[320px] sm:h-[400px] object-cover object-center group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-5 left-5 right-5 bg-[#FFFDF7]/95 backdrop-blur-md p-4 rounded-xl border border-[#C7A15A] text-left">
                <span className="text-[10px] font-button bg-[#667A61] text-white font-bold px-2.5 py-0.5 rounded-full uppercase">{t?.promo?.storeBadge || "Vakkeelpadi - Karulai Mill"}</span>
                <p className="font-serif-heading text-sm font-bold text-[#29332B] mt-1">PKS സ്ട്രെയിറ്റ് വേ ഓയിൽ & ഫ്ലോർ മിൽ</p>
                <p className="text-xs text-[#5A635A]">വക്കീൽപ്പടി - കരുളായി | Mob: {t?.phone1 || "+91 8714 348 348"}</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-semibold text-[#C7A15A]">
              <span>{t?.promo?.tag || "OUR COMMITMENT TO HEALTH"}</span>
            </div>
            <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-[44px] font-bold text-white leading-tight">
              {t?.promo?.headingLine1 || "Good Ingredients."}<br />
              <span className="text-[#C7A15B]">{t?.promo?.headingLine2 || "Great Health."}</span>
            </h2>
            <p className="font-sans-body text-sm sm:text-base text-[#F7F3E8]/80 leading-relaxed">{t?.promo?.desc || "At PKS Straightway, we use traditional methods and hygienic processing to ensure every product retains maximum nutrition and natural aroma."}</p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="bg-white/5 p-4 rounded-xl border border-white/10 space-y-2">
                <ShieldCheck className="w-5 h-5 text-[#C7A15A]" />
                <h4 className="font-serif-heading text-sm font-bold text-white">{t?.promo?.b1Title || "Quality & Purity Assured"}</h4>
                <p className="text-xs text-[#F7F3E8]/70">{t?.promo?.b1Desc || "Zero chemical preservatives, zero added colors."}</p>
              </div>
              <div className="bg-white/5 p-4 rounded-xl border border-white/10 space-y-2">
                <HeartHandshake className="w-5 h-5 text-[#C7A15A]" />
                <h4 className="font-serif-heading text-sm font-bold text-white">{t?.promo?.b2Title || "Fair Local Mill Prices"}</h4>
                <p className="text-xs text-[#F7F3E8]/70">{t?.promo?.b2Desc || "Honest neighborhood rates directly from the mill."}</p>
              </div>
              <div className="bg-white/5 p-4 rounded-xl border border-white/10 space-y-2">
                <Award className="w-5 h-5 text-[#C7A15A]" />
                <h4 className="font-serif-heading text-sm font-bold text-white">{t?.promo?.b3Title || "Customer Satisfaction Priority"}</h4>
                <p className="text-xs text-[#F7F3E8]/70">{t?.promo?.b3Desc || "Trusted by generations of families."}</p>
              </div>
            </div>

            <div className="pt-2">
              <button onClick={onKnowMoreClick} className="font-button text-xs md:text-sm bg-[#C7A15A] hover:bg-[#b08a4b] text-[#29332B] px-7 py-3.5 rounded-full font-bold flex items-center gap-2 transition-all duration-300 shadow-lg transform hover:-translate-y-0.5">
                <span>{t?.promo?.btnKnowMore || "Know More About Us"}</span>
                <ArrowRight className="w-4 h-4 text-[#29332B]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;