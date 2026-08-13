import React from 'react';
import {
  Sparkles,
  Leaf,
  ShieldCheck,
  HeartHandshake,
} from 'lucide-react';

import { translations } from '../translations';

const WhyChooseSection = ({ lang }) => {
  const t = translations[lang] || translations.en;
  const isMalayalam = lang === 'ml';

  const features = [
    {
      icon: Sparkles,
      number: '01',
      title:
        t?.whyChoose?.f1Title ||
        'Freshly Milled',
      desc:
        t?.whyChoose?.f1Desc ||
        'Processed fresh for better aroma, texture and natural freshness.',
    },
    {
      icon: Leaf,
      number: '02',
      title:
        t?.whyChoose?.f2Title ||
        'Carefully Selected',
      desc:
        t?.whyChoose?.f2Desc ||
        'Quality grains, spices and coconuts handled with care.',
    },
    {
      icon: ShieldCheck,
      number: '03',
      title:
        t?.whyChoose?.f3Title ||
        'Clean Processing',
      desc:
        t?.whyChoose?.f3Desc ||
        'Hygienic milling and careful preparation from processing to packing.',
    },
    {
      icon: HeartHandshake,
      number: '04',
      title:
        t?.whyChoose?.f4Title ||
        'Local & Trusted',
      desc:
        t?.whyChoose?.f4Desc ||
        'Serving families around Karulai, Vakkeelpadi and Nilambur.',
    },
  ];

  return (
    <section
      id="why-choose"
      aria-labelledby="why-choose-title"
      className="
        relative
        overflow-hidden
        bg-[#EAE2D2]
        text-[#29332B]
      "
    >
      {/* =====================================================
          TOP WAVE
      ===================================================== */}

      <div
        aria-hidden="true"
        className="
          relative
          -mt-px
          w-full
          overflow-hidden
          leading-none
        "
      >
        <svg
          className="
            block
            h-[28px]
            w-full
            sm:h-[42px]
            md:h-[52px]
          "
          viewBox="0 0 1200 100"
          preserveAspectRatio="none"
        >
          <path
            d="
              M0,0
              L0,35
              C120,75 240,88 370,50
              C500,12 600,12 720,48
              C850,86 1010,82 1200,30
              L1200,0
              Z
            "
            fill="#EAE2D2"
          />
        </svg>
      </div>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div
        className="
          relative
          mx-auto
          max-w-[1180px]
          px-5
          pb-12
          pt-1
          sm:px-8
          sm:pb-16
          sm:pt-2
          lg:px-10
          lg:pb-20
        "
      >
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">

          <div
            className="
              mb-2
              flex
              items-center
              justify-center
              gap-2.5
              sm:mb-3
              sm:gap-3
            "
          >
            <span
              aria-hidden="true"
              className="
                h-px
                w-6
                bg-[#B86F52]/70
                sm:w-8
              "
            />

            <span
              className="
                font-sans-body
                text-[9px]
                font-bold
                uppercase
                tracking-[0.18em]
                text-[#B86F52]
                sm:text-[10px]
                sm:tracking-[0.22em]
              "
            >
              {t?.whyChoose?.tag || 'Why Choose Straightway'}
            </span>

            <span
              aria-hidden="true"
              className="
                h-px
                w-6
                bg-[#B86F52]/70
                sm:w-8
              "
            />
          </div>

          <h2
            id="why-choose-title"
            className="
              font-serif-heading
              text-[26px]
              font-bold
              leading-[1.08]
              tracking-[-0.02em]
              text-[#29332B]
              sm:text-3xl
              md:text-4xl
            "
          >
            {isMalayalam ? (
              <>
                ഗുണമേന്മയും
                <span className="text-[#667A61]">
                  {' '}കരുതലും
                </span>
              </>
            ) : (
              <>
                Purity & Care in
                <span className="relative ml-2 inline-block text-[#667A61]">
                  Every Batch

                  <span
                    aria-hidden="true"
                    className="
                      absolute
                      -bottom-1
                      left-0
                      h-[2px]
                      w-[65%]
                      -rotate-2
                      rounded-full
                      bg-[#B86F52]
                    "
                  />
                </span>
              </>
            )}
          </h2>

          <p
            className="
              mx-auto
              mt-3
              max-w-lg
              font-sans-body
              text-xs
              leading-6
              text-[#5A635A]
              sm:text-sm
              sm:leading-7
            "
          >
            {isMalayalam
              ? 'പരമ്പരാഗത രീതികളും ശുചിത്വവും ഉറപ്പാക്കി ഓരോ ഉൽപ്പന്നവും ശ്രദ്ധയോടെ തയ്യാറാക്കുന്നു.'
              : 'Traditional milling with careful handling, clean processing and attention to freshness.'}
          </p>
        </div>

        {/* =================================================
            FEATURE GRID
        ================================================= */}

        <div
          className="
            mx-auto
            mt-7
            grid
            max-w-[1050px]
            grid-cols-1
            gap-3
            sm:mt-9
            sm:grid-cols-2
            sm:gap-4
            lg:grid-cols-4
          "
        >
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.number}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-2xl
                  border
                  border-[#D8CFBD]
                  bg-[#F7F3E8]/80
                  p-4
                  shadow-[0_5px_22px_rgba(41,51,43,0.035)]
                  backdrop-blur-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#667A61]/40
                  hover:bg-[#F7F3E8]
                  sm:p-5
                "
              >
                {/* Number */}
                <div
                  className="
                    absolute
                    right-4
                    top-4
                    font-mono
                    text-[10px]
                    font-semibold
                    tracking-wider
                    text-[#C7A15A]
                    opacity-80
                  "
                >
                  {feature.number}
                </div>

                {/* Icon */}
                <div
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-xl
                    bg-[#667A61]/10
                    text-[#667A61]
                    transition-all
                    duration-300
                    group-hover:bg-[#667A61]
                    group-hover:text-white
                    sm:h-10
                    sm:w-10
                  "
                >
                  <Icon
                    className="h-[17px] w-[17px]"
                    strokeWidth={1.7}
                  />
                </div>

                {/* Text */}
                <div className="mt-4">
                  <h3
                    className="
                      font-serif-heading
                      text-sm
                      font-bold
                      leading-tight
                      text-[#29332B]
                      sm:text-[15px]
                    "
                  >
                    {feature.title}
                  </h3>

                  <p
                    className="
                      mt-2
                      font-sans-body
                      text-[10px]
                      leading-5
                      text-[#5A635A]
                      sm:text-[11px]
                      sm:leading-5
                    "
                  >
                    {feature.desc}
                  </p>
                </div>

                {/* Bottom accent */}
                <div
                  aria-hidden="true"
                  className="
                    mt-4
                    h-px
                    w-8
                    bg-[#C7A15A]/70
                    transition-all
                    duration-300
                    group-hover:w-14
                  "
                />
              </article>
            );
          })}
        </div>
      </div>

      {/* =====================================================
          BOTTOM WAVE
      ===================================================== */}

      <div
        aria-hidden="true"
        className="
          absolute
          bottom-0
          left-0
          w-full
          overflow-hidden
          leading-none
        "
      >
        <svg
          className="
            block
            h-[22px]
            w-full
            sm:h-[32px]
          "
          viewBox="0 0 1200 80"
          preserveAspectRatio="none"
        >
          <path
            d="
              M0,30
              C160,70 300,5 470,32
              C650,65 850,12 1200,35
              L1200,80
              L0,80
              Z
            "
            fill="#F7F3E8"
          />
        </svg>
      </div>
    </section>
  );
};

export default WhyChooseSection;