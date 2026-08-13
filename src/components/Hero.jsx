import React from 'react';
import {
  ArrowRight,
  Phone,
  Droplet,
  Wheat,
  MapPin,
} from 'lucide-react';

import heroImg from '../assets/images/hero1.png';
import { translations } from '../translations';

const Hero = ({ onExploreClick, lang }) => {
  const t = translations[lang] || translations.en;
  const isMalayalam = lang === 'ml';

  const phoneUrl = 'tel:+918714348348';

  const trustPoints = [
    {
      icon: Droplet,
      title: isMalayalam
        ? 'ചക്ക് ആട്ടിയ വെളിച്ചെണ്ണ'
        : 'Cold-Pressed Oil',
    },
    {
      icon: Wheat,
      title: isMalayalam
        ? 'കല്ല് ആട്ടിയ മാവ്'
        : 'Freshly Ground Flour',
    },
    {
      icon: MapPin,
      title: isMalayalam
        ? 'പ്രാദേശിക വിശ്വാസം'
        : 'Local & Trusted',
    },
  ];

  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="
        relative
        isolate
        flex
        min-h-[100svh]
        items-end
        overflow-hidden
        bg-[#F7F3E8]
      "
    >
      {/* =====================================================
          HERO IMAGE
      ===================================================== */}

      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="Straightway Flour & Spice Mills in Karulai, Nilambur"
          className="
            h-full
            w-full
            object-cover
            object-center
            sm:object-center
          "
          width="1920"
          height="1080"
          fetchPriority="high"
          decoding="async"
        />

        {/* Top navigation fade */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-x-0
            top-0
            z-[2]
            h-44
            bg-gradient-to-b
            from-[#F7F3E8]/95
            via-[#F7F3E8]/55
            to-transparent
            sm:h-52
          "
        />

        {/* Left readability gradient */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-0
            z-[1]
            bg-gradient-to-r
            from-[#26302A]/85
            via-[#26302A]/48
            via-55%
            to-transparent
          "
        />

        {/* Bottom readability */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-x-0
            bottom-0
            z-[1]
            h-[48%]
            bg-gradient-to-t
            from-[#26302A]/90
            via-[#26302A]/42
            to-transparent
          "
        />

        {/* Very subtle warm tint */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-0
            z-[1]
            bg-[#C9825B]/[0.035]
          "
        />
      </div>

      {/* =====================================================
          HERO CONTENT
      ===================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1360px]
          px-5
          pb-24
          pt-36
          sm:px-8
          sm:pb-28
          sm:pt-40
          lg:px-12
          lg:pb-32
          lg:pt-44
        "
      >
        <div className="max-w-[620px]">

          {/* Eyebrow */}
          <div
            className="
              mb-4
              flex
              items-center
              gap-3
              sm:mb-5
            "
          >
            <span
              aria-hidden="true"
              className="h-px w-8 bg-[#C9825B] sm:w-10"
            />

            <span
              className="
                font-sans-body
                text-[9px]
                font-bold
                uppercase
                tracking-[0.2em]
                text-[#E7D9B8]
                sm:text-[10px]
                sm:tracking-[0.22em]
              "
            >
              {isMalayalam
                ? 'പരമ്പരാഗത മിൽ · കരുളായി'
                : 'Traditional Mill · Karulai'}
            </span>
          </div>

          {/* =================================================
              MAIN HEADING

              Reduced from:
              Mobile 42px
              Desktop 84px

              To:
              Mobile 38px
              Tablet 46-54px
              Desktop 60-66px
          ================================================= */}

          <h1
            id="hero-title"
            className="
              font-serif-heading
              text-[38px]
              font-bold
              leading-[0.98]
              tracking-[-0.025em]
              text-white
              sm:text-[48px]
              md:text-[54px]
              lg:text-[62px]
              xl:text-[66px]
            "
          >
            {isMalayalam ? (
              <>
                പുതുമയോടെ അരച്ചത്.
                <br />

                കരുതലോടെ{' '}

                <span className="relative inline-block text-[#E7D9B8]">
                  തയ്യാറാക്കിയത്.

                  <span
                    aria-hidden="true"
                    className="
                      absolute
                      -bottom-1.5
                      left-0
                      h-[2px]
                      w-full
                      -rotate-[1.5deg]
                      rounded-full
                      bg-[#C9825B]
                    "
                  />
                </span>
              </>
            ) : (
              <>
                Freshly Ground.
                <br />

                Made with{' '}

                <span className="relative inline-block text-[#E7D9B8]">
                  Care.

                  <span
                    aria-hidden="true"
                    className="
                      absolute
                      -bottom-1.5
                      left-0
                      h-[2px]
                      w-full
                      -rotate-[1.5deg]
                      rounded-full
                      bg-[#C9825B]
                    "
                  />
                </span>
              </>
            )}
          </h1>

          {/* Description */}
          <p
            className="
              mt-5
              max-w-[500px]
              font-sans-body
              text-[13px]
              leading-6
              text-[#F7F3E8]/85
              sm:mt-6
              sm:text-sm
              sm:leading-7
              md:text-[15px]
              md:leading-7
            "
          >
            {isMalayalam
              ? 'കരുളായി മില്ലിൽ നിന്ന് ചക്ക് ആട്ടിയ ശുദ്ധമായ വെളിച്ചെണ്ണയും, കല്ല് ആട്ടിയ മാവുകളും.'
              : 'Fresh flour, spice powders and coconut oil from our local mill in Karulai, Nilambur.'}
          </p>

          {/* CTA */}
          <div
            className="
              mt-6
              flex
              flex-col
              gap-2.5
              sm:mt-7
              sm:flex-row
            "
          >
            {/* Primary */}
            <button
              type="button"
              onClick={onExploreClick}
              className="
                group
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-full
                bg-[#C9825B]
                px-5
                py-3
                font-sans-body
                text-xs
                font-semibold
                text-white
                shadow-[0_8px_25px_rgba(38,48,42,0.18)]
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-[#B96F4D]
                hover:shadow-[0_12px_30px_rgba(38,48,42,0.25)]
                active:translate-y-0
                sm:px-6
                sm:py-3.5
                sm:text-sm
              "
            >
              <span>
                {t?.hero?.btnExplore || 'Explore Products'}
              </span>

              <ArrowRight
                className="
                  h-3.5
                  w-3.5
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                  sm:h-4
                  sm:w-4
                "
              />
            </button>

            {/* Secondary */}
            <a
              href={phoneUrl}
              aria-label="Call Straightway Flour and Spice Mills"
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-full
                border
                border-white/30
                bg-white/[0.08]
                px-5
                py-3
                font-sans-body
                text-xs
                font-semibold
                text-white
                backdrop-blur-md
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:border-white/50
                hover:bg-white/[0.14]
                sm:px-6
                sm:py-3.5
                sm:text-sm
              "
            >
              <Phone className="h-3.5 w-3.5 text-[#E7D9B8] sm:h-4 sm:w-4" />

              <span>
                {isMalayalam ? 'വിളിക്കൂ' : 'Call the Mill'}
              </span>
            </a>
          </div>

          {/* =================================================
              TRUST POINTS
          ================================================= */}

          <div
            className="
              mt-7
              grid
              grid-cols-3
              gap-2
              border-t
              border-white/20
              pt-4
              sm:mt-8
              sm:gap-5
              sm:pt-5
            "
          >
            {trustPoints.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={`${item.title}-${index}`}
                  className="
                    group
                    flex
                    flex-col
                    items-start
                    gap-1.5
                    sm:gap-2
                  "
                >
                  <div
                    className="
                      flex
                      h-7
                      w-7
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/15
                      bg-white/[0.07]
                      backdrop-blur-sm
                      transition-all
                      duration-300
                      group-hover:border-[#C9825B]/50
                      group-hover:bg-[#C9825B]/15
                      sm:h-8
                      sm:w-8
                    "
                  >
                    <Icon
                      className="
                        h-3.5
                        w-3.5
                        text-[#E7D9B8]
                        sm:h-4
                        sm:w-4
                      "
                      strokeWidth={1.7}
                    />
                  </div>

                  <p
                    className="
                      max-w-[125px]
                      font-sans-body
                      text-[9px]
                      font-semibold
                      leading-[1.35]
                      text-white/90
                      sm:text-[11px]
                    "
                  >
                    {item.title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* =====================================================
          BOTTOM TRANSITION
      ===================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          z-20
          leading-none
        "
      >
        <svg
          className="
            block
            h-[34px]
            w-full
            sm:h-[42px]
            lg:h-[50px]
          "
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="
              M0,64
              C150,110 350,10 500,55
              C650,100 850,20 1200,70
              L1200,120
              L0,120
              Z
            "
            fill="#EAE2D2"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;