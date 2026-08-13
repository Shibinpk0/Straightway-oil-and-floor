import React from 'react';
import {
  ArrowRight,
  Phone,
  MessageCircle,
  Droplet,
  Wheat,
  MapPin,
} from 'lucide-react';

import heroImg from '../assets/images/hero1.png';
import { translations } from '../translations';

const PHONE_NUMBER = '+918714348348';

const Hero = ({ onExploreClick, lang }) => {
  const t = translations[lang] || translations.en;
  const isMalayalam = lang === 'ml';

  const whatsappMessage = isMalayalam
    ? 'ഹലോ PKS Straightway Mill! ഉൽപ്പന്നങ്ങളെക്കുറിച്ച് അന്വേഷിക്കാനാണ്.'
    : 'Hello PKS Straightway Mill! I would like to enquire about your products.';

  const whatsappUrl = `https://wa.me/${PHONE_NUMBER.replace(
    '+',
    ''
  )}?text=${encodeURIComponent(whatsappMessage)}`;

  const phoneUrl = `tel:${PHONE_NUMBER}`;

  const trustPoints = [
    {
      icon: Droplet,
      title: isMalayalam
        ? 'ചക്ക് ആട്ടിയ വെളിച്ചെണ്ണ'
        : 'Cold-Pressed Coconut Oil',
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
        ? 'കരുളായിലെ പ്രാദേശിക മിൽ'
        : 'Local Mill in Karulai',
    },
  ];

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="
        relative
        isolate
        flex
        min-h-[100svh]
        items-end
        overflow-hidden
        bg-[#29332B]
      "
    >
      {/* =====================================================
          BACKGROUND IMAGE
      ====================================================== */}

      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="PKS Straightway Mill in Karulai, Kerala"
          fetchPriority="high"
          decoding="async"
          className="
            h-full
            w-full
            object-cover
            object-center
          "
        />

        {/* Top navbar blend */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-x-0
            top-0
            z-[2]
            h-56
            bg-gradient-to-b
            from-[#F7F3E8]/95
            via-[#F7F3E8]/60
            to-transparent
          "
        />

        {/* Left readability overlay */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-0
            z-[1]
            bg-gradient-to-r
            from-[#202922]/95
            via-[#29332B]/65
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
            h-[55%]
            bg-gradient-to-t
            from-[#202922]/95
            via-[#29332B]/55
            to-transparent
          "
        />

        {/* Warm subtle tint */}
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
          CONTENT
      ====================================================== */}

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
        <div className="max-w-[720px]">

          {/* Eyebrow */}
          <div className="mb-5 flex items-center gap-3 sm:mb-6">
            <span
              aria-hidden="true"
              className="h-px w-9 bg-[#C9825B]"
            />

            <span className="
              font-sans-body
              text-[10px]
              font-bold
              uppercase
              tracking-[0.22em]
              text-[#E7D9B8]
              sm:text-[11px]
            ">
              {isMalayalam
                ? 'പരമ്പരാഗത മിൽ · കരുളായി'
                : 'Traditional Mill · Karulai, Kerala'}
            </span>
          </div>

          {/* =================================================
              SEO-FRIENDLY H1
          ================================================== */}

          <h1
            id="hero-heading"
            className="
              font-serif-heading
              text-[40px]
              font-bold
              leading-[0.98]
              tracking-[-0.035em]
              text-white
              sm:text-[54px]
              md:text-[64px]
              lg:text-[72px]
              xl:text-[80px]
            "
          >
            {isMalayalam ? (
              <>
                കരുളായിയിൽ
                <br />

                പുതുതായി അരച്ച
                <br />

                <span className="relative inline-block text-[#E7D9B8]">
                  ശുദ്ധമായ ഉൽപ്പന്നങ്ങൾ

                  <span
                    aria-hidden="true"
                    className="
                      absolute
                      -bottom-2
                      left-0
                      h-[3px]
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
                Fresh Coconut Oil
                <br />
                & Stone-Ground Flour,
                <br />

                <span className="relative inline-block text-[#E7D9B8]">
                  Made Fresh in Karulai

                  <span
                    aria-hidden="true"
                    className="
                      absolute
                      -bottom-2
                      left-0
                      h-[3px]
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
              mt-6
              max-w-[560px]
              font-sans-body
              text-sm
              leading-7
              text-[#F7F3E8]/85
              sm:mt-7
              sm:text-base
              sm:leading-8
            "
          >
            {isMalayalam
              ? 'PKS Straightway Mill-ൽ ചക്ക് ആട്ടിയ വെളിച്ചെണ്ണ, കല്ല് ആട്ടിയ മാവ്, മസാലപ്പൊടികൾ എന്നിവ പുതുമയോടെ തയ്യാറാക്കുന്നു.'
              : 'PKS Straightway Mill prepares cold-pressed coconut oil, freshly ground flour and spice powders with traditional care in Karulai.'}
          </p>

          {/* =================================================
              CTA
          ================================================== */}

          <div
            className="
              mt-7
              flex
              flex-col
              gap-3
              sm:mt-8
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
                min-h-[48px]
                items-center
                justify-center
                gap-2.5
                rounded-full
                bg-[#C9825B]
                px-6
                py-3.5
                font-sans-body
                text-sm
                font-bold
                text-white
                shadow-[0_10px_30px_rgba(38,48,42,0.25)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-[#B96F4D]
                hover:shadow-[0_14px_35px_rgba(38,48,42,0.3)]
                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-white
                focus-visible:ring-offset-2
                focus-visible:ring-offset-[#29332B]
                active:translate-y-0
              "
            >
              <span>
                {t?.hero?.btnExplore || 'Explore Products'}
              </span>

              <ArrowRight
                className="
                  h-4
                  w-4
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </button>

            {/* WhatsApp */}

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact PKS Straightway Mill on WhatsApp"
              className="
                inline-flex
                min-h-[48px]
                items-center
                justify-center
                gap-2.5
                rounded-full
                border
                border-white/30
                bg-white/[0.08]
                px-6
                py-3.5
                font-sans-body
                text-sm
                font-bold
                text-white
                backdrop-blur-md
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-white/55
                hover:bg-white/[0.14]
                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-white
              "
            >
              <MessageCircle className="h-4 w-4 text-[#E7D9B8]" />

              <span>
                {isMalayalam
                  ? 'വാട്ട്‌സ്ആപ്പ് ചെയ്യൂ'
                  : 'WhatsApp Us'}
              </span>
            </a>
          </div>

          {/* =================================================
              MICRO TRUST LINE
          ================================================== */}

          <div className="
            mt-5
            flex
            flex-wrap
            items-center
            gap-x-3
            gap-y-1.5
            text-[10px]
            font-semibold
            text-white/70
            sm:text-xs
          ">
            <span>
              {isMalayalam ? 'പുതുതായി ആട്ടിയത്' : 'Freshly milled'}
            </span>

            <span className="text-[#C9825B]">•</span>

            <span>
              {isMalayalam ? 'പ്രാദേശികമായി' : 'Locally processed'}
            </span>

            <span className="text-[#C9825B]">•</span>

            <span>
              {isMalayalam
                ? 'ഹോം ഡെലിവറി ലഭ്യം'
                : 'Local delivery available'}
            </span>
          </div>

          {/* =================================================
              TRUST POINTS
          ================================================== */}

          <div
            className="
              mt-8
              grid
              grid-cols-3
              gap-3
              border-t
              border-white/20
              pt-5
              sm:mt-10
              sm:gap-6
              sm:pt-6
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
                    gap-2
                  "
                >
                  <div
                    className="
                      flex
                      h-8
                      w-8
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
                    "
                  >
                    <Icon
                      className="h-4 w-4 text-[#E7D9B8]"
                      strokeWidth={1.7}
                    />
                  </div>

                  <p
                    className="
                      max-w-[150px]
                      font-sans-body
                      text-[10px]
                      font-semibold
                      leading-[1.35]
                      text-white/90
                      sm:text-xs
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
          BOTTOM WAVE
      ====================================================== */}

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
          className="block h-[38px] w-full sm:h-[48px] lg:h-[56px]"
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