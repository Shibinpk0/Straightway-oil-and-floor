import React from 'react';
import {
  Droplet,
  Sparkles,
  ShieldCheck,
  Users,
} from 'lucide-react';
import { translations } from '../translations';

const Features = ({ lang }) => {
  const t = translations[lang] || translations.en;

  const features = [
    {
      icon: Droplet,
      title:
        t?.features?.f1Title ||
        'Freshly Milled',
      desc:
        t?.features?.f1Desc ||
        'Processed fresh to preserve natural taste and aroma.',
    },
    {
      icon: Sparkles,
      title:
        t?.features?.f2Title ||
        'Pure Ingredients',
      desc:
        t?.features?.f2Desc ||
        'Carefully selected grains, coconuts and spices.',
    },
    {
      icon: ShieldCheck,
      title:
        t?.features?.f3Title ||
        'Clean Processing',
      desc:
        t?.features?.f3Desc ||
        'Prepared with careful attention to cleanliness and quality.',
    },
    {
      icon: Users,
      title:
        t?.features?.f4Title ||
        'Local & Trusted',
      desc:
        t?.features?.f4Desc ||
        'Serving families around Karulai, Vakkeelpadi and Nilambur.',
    },
  ];

  return (
    <section
      aria-label="Why customers choose Straightway Mill"
      className="
        relative
        border-b
        border-[#DCD5C6]
        bg-[#EAE2D2]
        py-8
        sm:py-10
        lg:py-12
      "
    >
      <div
        className="
          mx-auto
          max-w-[1280px]
          px-4
          sm:px-6
          lg:px-10
        "
      >
        <div
          className="
            grid
            grid-cols-2
            gap-px
            overflow-hidden
            rounded-2xl
            border
            border-[#D8CFBD]
            bg-[#D8CFBD]
            lg:grid-cols-4
          "
        >
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="
                  group
                  bg-[#F7F3E8]
                  p-4
                  transition-colors
                  duration-300
                  hover:bg-[#FFFDF7]
                  sm:p-5
                  lg:p-6
                "
              >
                <div className="flex items-start gap-3">
                  <div
                    className="
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-[#D8CFBD]
                      bg-[#EAE2D2]
                      text-[#667A61]
                      transition-all
                      duration-300
                      group-hover:border-[#667A61]/30
                      group-hover:bg-[#667A61]
                      group-hover:text-white
                      sm:h-10
                      sm:w-10
                    "
                  >
                    <Icon
                      className="h-4 w-4 sm:h-[18px] sm:w-[18px]"
                      strokeWidth={1.7}
                    />
                  </div>

                  <div className="min-w-0">
                    <h3
                      className="
                        font-serif-heading
                        text-xs
                        font-bold
                        leading-tight
                        text-[#29332B]
                        sm:text-sm
                      "
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
                        mt-1
                        hidden
                        text-[10px]
                        leading-relaxed
                        text-[#5A635A]
                        sm:block
                        sm:text-[11px]
                      "
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-2">
                  <span className="h-px flex-1 bg-[#DCD5C6]" />

                  <span
                    className="
                      font-mono
                      text-[8px]
                      font-semibold
                      tracking-wider
                      text-[#B86F52]
                    "
                  >
                    0{index + 1}
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;