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
      span: "col-span-1 lg:col-span-2", 
      iconSize: "w-6 h-6 sm:w-7 sm:h-8", 
      titleSize: "text-sm sm:text-xl", 
      descSize: "text-[11px] sm:text-base", 
      boxSize: "w-10 h-10 sm:w-14 sm:h-14" 
    },
    { 
      icon: Leaf, 
      title: t?.whyChoose?.f2Title || "Pure Ingredients", 
      desc: t?.whyChoose?.f2Desc || "100% natural spices and grains. Zero artificial colours, zero preservatives.", 
      span: "col-span-1 lg:col-span-1", 
      iconSize: "w-5 h-5 sm:w-6 sm:h-6", 
      titleSize: "text-sm sm:text-lg", 
      descSize: "text-[11px] sm:text-sm", 
      boxSize: "w-10 h-10 sm:w-12 sm:h-12" 
    },
    { 
      icon: ShieldCheck, 
      title: t?.whyChoose?.f3Title || "Hygienic Processing", 
      desc: t?.whyChoose?.f3Desc || "Prepared using clean, safe, and modern hot-air drying & stone chakki methods.", 
      span: "col-span-1 lg:col-span-1", 
      iconSize: "w-5 h-5 sm:w-6 sm:h-6", 
      titleSize: "text-sm sm:text-lg", 
      descSize: "text-[11px] sm:text-sm", 
      boxSize: "w-10 h-10 sm:w-12 sm:h-12" 
    },
    { 
      icon: HeartHandshake, 
      title: t?.whyChoose?.f4Title || "Trusted by Families", 
      desc: t?.whyChoose?.f4Desc || "Serving local families in Karulai & Vakkeelpadi with honesty and care.", 
      span: "col-span-1 lg:col-span-2", 
      iconSize: "w-6 h-6 sm:w-7 sm:h-7", 
      titleSize: "text-sm sm:text-xl", 
      descSize: "text-[11px] sm:text-base", 
      boxSize: "w-10 h-10 sm:w-14 sm:h-14" 
    },
  ];

  return (
    <section className="bg-[#EAE2D2] py-12 md:py-16 lg:py-20 border-b border-[#E1D9C9] relative">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-5 md:px-8 space-y-8 md:space-y-10">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-3 text-[#B86F52]">
            <span className="h-[1px] w-12 bg-[#B86F52]/40"></span>
            <span className="font-serif-heading font-semibold text-xs sm:text-sm tracking-wider uppercase">{t?.whyChoose?.tag || "✦ WHY CHOOSE STRAIGHTWAY ✦"}</span>
            <span className="h-[1px] w-12 bg-[#B86F52]/40"></span>
          </div>
          <h2 className="font-serif-heading text-xl sm:text-3xl font-bold text-[#29332B]">{t?.whyChoose?.heading || "Purity & Care in Every Batch"}</h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 auto-rows-fr text-left">
          {features.map((f, idx) => {
            const Icon = f.icon;
            return (
              <div key={idx} className={`bg-[#FFFDF7] p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-[#E1D9C9] shadow-premium-soft hover:shadow-premium-hover transition-all duration-300 space-y-2 sm:space-y-4 group flex flex-col ${f.span}`}>
                <div className={`flex items-center justify-center ${f.boxSize} rounded-xl sm:rounded-2xl bg-[#667A61]/10 text-[#667A61] group-hover:bg-[#667A61] group-hover:text-white transition-colors duration-300`}>
                  <Icon className={f.iconSize} />
                </div>
                <div className="space-y-1 sm:space-y-2">
                  <h3 className={`font-serif-heading ${f.titleSize} font-bold text-[#29332B] leading-tight`}>{f.title}</h3>
                  <p className={`font-sans-body ${f.descSize} text-[#5A635A] leading-relaxed`}>{f.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;