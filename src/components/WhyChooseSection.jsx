import React from 'react';
import { Sparkles, Leaf, ShieldCheck, HeartHandshake } from 'lucide-react';
import { translations } from '../translations';

const WhyChooseSection = ({ lang }) => {
  const t = translations[lang] || translations.en;

  const features = [
    {
      icon: Sparkles,
      title: t?.whyChoose?.f1Title || "Freshly Ground",
      desc: t?.whyChoose?.f1Desc || "Every order is freshly processed for maximum freshness and natural aroma.",
    },
    {
      icon: Leaf,
      title: t?.whyChoose?.f2Title || "Pure Ingredients",
      desc: t?.whyChoose?.f2Desc || "100% natural spices and grains. Zero artificial colours, zero preservatives.",
    },
    {
      icon: ShieldCheck,
      title: t?.whyChoose?.f3Title || "Hygienic Processing",
      desc: t?.whyChoose?.f3Desc || "Prepared using clean, safe, and modern hot-air drying & stone chakki methods.",
    },
    {
      icon: HeartHandshake,
      title: t?.whyChoose?.f4Title || "Trusted by Families",
      desc: t?.whyChoose?.f4Desc || "Serving local families in Karulai & Vakkeelpadi with honesty and care.",
    },
  ];

  return (
    <section className="bg-[#F6F1E7] py-16 md:py-24 border-b border-[#E8E2D6] relative">
      <div className="max-w-[1280px] mx-auto px-5 md:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-3 text-[#D8A43A]">
            <span className="h-[1px] w-12 bg-[#D8A43A]/40"></span>
            <span className="font-serif-heading font-semibold text-xs sm:text-sm tracking-wider uppercase">
              {t?.whyChoose?.tag || "✦ WHY CHOOSE STRAIGHTWAY ✦"}
            </span>
            <span className="h-[1px] w-12 bg-[#D8A43A]/40"></span>
          </div>

          <h2 className="font-serif-heading text-3xl sm:text-4xl font-bold text-[#12351D]">
            {t?.whyChoose?.heading || "Purity & Care in Every Batch"}
          </h2>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {features.map((f, idx) => {
            const Icon = f.icon;
            return (
              <div
                key={idx}
                className="bg-white p-6 sm:p-7 rounded-[24px] border border-[#E8E2D6] shadow-sm hover:shadow-md transition-all duration-300 space-y-4 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#1D4F2B]/10 text-[#1D4F2B] flex items-center justify-center group-hover:bg-[#1D4F2B] group-hover:text-white transition-colors duration-300">
                  <Icon className="w-6 h-6 text-[#D8A43A]" />
                </div>
                <h3 className="font-serif-heading text-lg font-bold text-[#12351D]">
                  {f.title}
                </h3>
                <p className="font-sans-body text-xs sm:text-sm text-[#666666] leading-relaxed">
                  {f.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseSection;
