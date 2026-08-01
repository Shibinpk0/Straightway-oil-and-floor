import React from 'react';
import { Droplet, Sparkles, Flame, Users } from 'lucide-react';
import { translations } from '../translations';

const Features = ({ lang }) => {
  const t = translations[lang] || translations.en;

  const features = [
    {
      icon: Droplet,
      title: t?.whyChoose?.f1Title || t?.features?.f1Title || "Freshly Ground",
      desc: t?.whyChoose?.f1Desc || t?.features?.f1Desc || "Every order is freshly processed for maximum freshness and natural aroma.",
    },
    {
      icon: Sparkles,
      title: t?.whyChoose?.f2Title || t?.features?.f2Title || "Pure Ingredients",
      desc: t?.whyChoose?.f2Desc || t?.features?.f2Desc || "100% natural spices and grains. Zero artificial colours, zero preservatives.",
    },
    {
      icon: Flame,
      title: t?.whyChoose?.f3Title || t?.features?.f3Title || "Hygienic Processing",
      desc: t?.whyChoose?.f3Desc || t?.features?.f3Desc || "Prepared using clean, safe, and modern hot-air drying & stone chakki methods.",
    },
    {
      icon: Users,
      title: t?.whyChoose?.f4Title || t?.features?.f4Title || "Trusted by Families",
      desc: t?.whyChoose?.f4Desc || t?.features?.f4Desc || "Serving local families in Karulai & Vakkeelpadi with honesty and care.",
    },
  ];

  return (
    <section className="bg-[#F6F1E7] py-16 md:py-20 relative">
      <div className="max-w-[1280px] mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-[20px] p-7 border border-[#E8E2D6] shadow-premium-soft hover:shadow-premium-hover transition-all duration-300 transform hover:-translate-y-1 text-left flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  {/* Icon */}
                  <div className="w-13 h-13 rounded-2xl bg-[#FFFDF8] border border-[#E8E2D6] flex items-center justify-center text-[#1D4F2B] group-hover:bg-[#1D4F2B] group-hover:text-white transition-all duration-300">
                    <IconComponent className="w-6 h-6 stroke-[1.75]" />
                  </div>

                  {/* Title */}
                  <h3 className="font-serif-heading text-xl font-semibold text-[#12351D] tracking-tight">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="font-sans-body text-xs sm:text-sm text-[#666666] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Accent line */}
                <div className="mt-6 pt-4 border-t border-[#F6F1E7] flex items-center justify-between">
                  <span className="text-[11px] font-mono text-[#D8A43A] font-semibold uppercase tracking-wider">
                    0{idx + 1} / Guarantee
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#D8A43A] opacity-70 group-hover:scale-125 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
