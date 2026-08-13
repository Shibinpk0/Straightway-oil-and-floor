import React from 'react';
import {
  Sparkles,
  Wheat,
  HandHeart,
  MapPin,
} from 'lucide-react';

import { translations } from '../translations';

const WhyChooseSection = ({ lang }) => {
  const t = translations[lang] || translations.en;
  const isMalayalam = lang === 'ml';

  const features = [
    {
      icon: Sparkles,
      number: '01',
      title: t?.whyChoose?.f1Title || 'Freshly Processed',
      desc:
        t?.whyChoose?.f1Desc ||
        'Products are processed fresh with care instead of being stored for long periods.',
    },
    {
      icon: Wheat,
      number: '02',
      title: t?.whyChoose?.f2Title || 'Traditional Milling',
      desc:
        t?.whyChoose?.f2Desc ||
        'Traditional milling methods help preserve the natural character, aroma and taste of the ingredients.',
    },
    {
      icon: HandHeart,
      number: '03',
      title: t?.whyChoose?.f3Title || 'Bring Your Own',
      desc:
        t?.whyChoose?.f3Desc ||
        'Bring your coconuts, grains or suitable ingredients and let our mill process them for you.',
    },
    {
      icon: MapPin,
      number: '04',
      title: t?.whyChoose?.f4Title || 'Local & Personal',
      desc:
        t?.whyChoose?.f4Desc ||
        'A local mill serving families, farmers and customers around Karulai and nearby areas.',
    },
  ];

  return (
    <section
      id="why-choose"
      aria-labelledby="why-choose-heading"
      className="
        relative
        overflow-hidden
        bg-[#EAE2D2]
        text-[#29332B]
      "
    >
      {/* =====================================================
          TOP WAVE
      ====================================================== */}

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
            h-[34px]
            w-full
            sm:h-[48px]
            md:h-[60px]
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
      ====================================================== */}

      <div
        className="
          relative
          mx-auto
          max-w-[1280px]
          px-4
          pb-14
          pt-2
          sm:px-6
          sm:pb-16
          sm:pt-4
          md:px-8
          lg:px-12
        "
      >
        {/* Header */}

        <header className="mx-auto max-w-2xl text-center">
          <div className="
            mb-3
            flex
            items-center
            justify-center
            gap-3
          ">
            <span
              aria-hidden="true"
              className="h-px w-8 bg-[#B86F52]/70"
            />

            <span className="
              font-sans-body
              text-[9px]
              font-bold
              uppercase
              tracking-[0.22em]
              text-[#B86F52]
              sm:text-[10px]
            ">
              {t?.whyChoose?.tag || 'Why Choose PKS'}
            </span>

            <span
              aria-hidden="true"
              className="h-px w-8 bg-[#B86F52]/70"
            />
          </div>

          <h2
            id="why-choose-heading"
            className="
              font-serif-heading
              text-[26px]
              font-bold
              leading-[1.05]
              tracking-tight
              text-[#29332B]
              sm:text-3xl
              md:text-4xl
            "
          >
            {isMalayalam ? (
              <>
                ഞങ്ങളുടെ മില്ലിനെ
                <span className="text-[#667A61]">
                  {' '}തിരഞ്ഞെടുക്കാനുള്ള കാരണങ്ങൾ
                </span>
              </>
            ) : (
              <>
                Why Choose
                <span className="text-[#667A61]">
                  {' '}PKS Straightway?
                </span>
              </>
            )}
          </h2>

          <p
            className="
              mx-auto
              mt-3
              max-w-xl
              text-xs
              leading-6
              text-[#5A635A]
              sm:text-sm
            "
          >
            {isMalayalam
              ? 'പരമ്പരാഗത മില്ലിംഗ് രീതികളും പുതുമയും പ്രാദേശിക സേവനവും ഒരുമിച്ച്.'
              : 'Traditional milling, fresh processing and personal local service — all from one neighbourhood mill.'}
          </p>
        </header>

        {/* =================================================
            FEATURE GRID
        ================================================== */}

        <div
          className="
            mx-auto
            mt-7
            grid
            max-w-[980px]
            grid-cols-1
            gap-3
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
                  bg-[#F7F3E8]
                  p-4
                  shadow-[0_5px_20px_rgba(41,51,43,0.04)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#667A61]/40
                  hover:shadow-[0_12px_28px_rgba(41,51,43,0.08)]
                  sm:p-5
                "
              >
                {/* Number */}

                <span
                  className="
                    absolute
                    right-4
                    top-4
                    font-mono
                    text-[11px]
                    font-bold
                    text-[#C7A15A]/70
                  "
                >
                  {feature.number}
                </span>

                {/* Icon */}

                <div
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-xl
                    bg-[#667A61]/10
                    text-[#667A61]
                    transition-all
                    duration-300
                    group-hover:bg-[#667A61]
                    group-hover:text-white
                  "
                >
                  <Icon
                    className="h-[18px] w-[18px]"
                    strokeWidth={1.7}
                  />
                </div>

                {/* Text */}

                <h3
                  className="
                    mt-4
                    font-serif-heading
                    text-sm
                    font-bold
                    leading-tight
                    text-[#29332B]
                    sm:text-base
                  "
                >
                  {feature.title}
                </h3>

                <p
                  className="
                    mt-2
                    text-[11px]
                    leading-relaxed
                    text-[#5A635A]
                    sm:text-xs
                  "
                >
                  {feature.desc}
                </p>

                {/* Bottom accent */}

                <div
                  aria-hidden="true"
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-[2px]
                    w-0
                    bg-[#B86F52]
                    transition-all
                    duration-300
                    group-hover:w-full
                  "
                />
              </article>
            );
          })}
        </div>

        {/* =================================================
            LOCAL SERVICE NOTE
        ================================================== */}

        <div
          className="
            mx-auto
            mt-6
            flex
            max-w-[980px]
            flex-col
            items-center
            justify-between
            gap-3
            rounded-2xl
            border
            border-[#D8CFBD]
            bg-[#29332B]
            px-5
            py-4
            text-center
            sm:flex-row
            sm:text-left
          "
        >
          <div>
            <p className="
              font-serif-heading
              text-sm
              font-bold
              text-white
            ">
              {isMalayalam
                ? 'കരുളായിയിൽ നിന്ന് പ്രാദേശിക സേവനം'
                : 'A local mill, close to home.'}
            </p>

            <p className="
              mt-0.5
              text-[10px]
              leading-relaxed
              text-white/65
              sm:text-xs
            ">
              {isMalayalam
                ? 'കരുളായി, വക്കീൽപ്പടി, മൂത്തേടം, എടക്കര, നിലമ്പൂർ ഭാഗങ്ങളിൽ സേവനം.'
                : 'Serving Karulai, Vakkeelpadi, Moothedam, Edakkara and nearby Nilambur areas.'}
            </p>
          </div>

          <a
            href="#contact"
            className="
              inline-flex
              shrink-0
              items-center
              justify-center
              rounded-full
              border
              border-[#C7A15A]/40
              bg-[#C7A15A]/10
              px-4
              py-2
              text-[10px]
              font-bold
              text-[#E7D9B8]
              transition-colors
              hover:bg-[#C7A15A]/20
              sm:text-xs
            "
          >
            {isMalayalam
              ? 'ബന്ധപ്പെടുക'
              : 'Talk to the Mill'}
          </a>
        </div>
      </div>

      {/* =====================================================
          BOTTOM WAVE
      ====================================================== */}

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
          className="block h-[24px] w-full sm:h-[34px]"
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