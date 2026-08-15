import React from 'react';
import {
  ShoppingBag,
  PhoneCall,
  PackageCheck,
  Truck,
  MessageCircle,
} from 'lucide-react';
import { translations } from '../translations';

const HowToOrderSection = ({ lang }) => {
  const t = translations[lang] || translations.en;

  const steps = [
    {
      icon: ShoppingBag,
      stepNum: '01',
      title:
        t?.howToOrder?.step1Title ||
        'Choose Products',
      shortTitle: lang === 'ml' ? 'ഉൽപ്പന്നം' : 'Choose',
      desc:
        t?.howToOrder?.step1Desc ||
        'Browse coconut oil, spice powders, flour and custom grinding.',
    },
    {
      icon: PhoneCall,
      stepNum: '02',
      title:
        t?.howToOrder?.step2Title ||
        'Call or WhatsApp',
      shortTitle: lang === 'ml' ? 'ബന്ധപ്പെടുക' : 'Contact',
      desc:
        t?.howToOrder?.step2Desc ||
        'Send us your product, quantity and delivery requirements.',
    },
    {
      icon: PackageCheck,
      stepNum: '03',
      title:
        t?.howToOrder?.step3Title ||
        'Freshly Processed',
      shortTitle: lang === 'ml' ? 'തയ്യാർ' : 'Fresh',
      desc:
        t?.howToOrder?.step3Desc ||
        'Your order is processed and packed fresh at our mill.',
    },
    {
      icon: Truck,
      stepNum: '04',
      title:
        t?.howToOrder?.step4Title ||
        'Pickup or Delivery',
      shortTitle: lang === 'ml' ? 'ഡെലിവറി' : 'Delivery',
      desc:
        t?.howToOrder?.step4Desc ||
        'Collect from our mill or get doorstep delivery nearby.',
    },
  ];

  const whatsappUrl =
    `https://wa.me/918714348348?text=${encodeURIComponent(
      'Hello Straightway Mill! I want to order freshly processed products.'
    )}`;

  return (
    <section
      id="how-it-works"
      className="
        relative
        overflow-hidden
        bg-[#EAE2D2]
        py-12
        sm:py-16
        lg:py-20
      "
    >
      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="
            absolute
            -top-32
            -right-32
            h-[360px]
            w-[360px]
            rounded-full
            bg-[#667A61]/8
            blur-3xl
          "
        />

        <div
          className="
            absolute
            -bottom-40
            -left-32
            h-[400px]
            w-[400px]
            rounded-full
            bg-[#B86F52]/5
            blur-3xl
          "
        />
      </div>

      <div className="relative max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* =======================================================
            HEADER
        ======================================================== */}

        <div className="max-w-2xl mx-auto text-center mb-9 sm:mb-12">

          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="h-px w-7 sm:w-10 bg-[#B86F52]/60" />

            <span
              className="
                font-sans-body
                text-[10px]
                sm:text-[11px]
                font-bold
                uppercase
                tracking-[0.2em]
                text-[#B86F52]
              "
            >
              {t?.howToOrder?.tag || 'Simple 4-Step Process'}
            </span>

            <span className="h-px w-7 sm:w-10 bg-[#B86F52]/60" />
          </div>

          <h2
            className="
              font-serif-heading
              text-3xl
              sm:text-4xl
              lg:text-5xl
              font-bold
              leading-[1.05]
              tracking-tight
              text-[#29332B]
            "
          >
            {lang === 'ml' ? (
              <>
                നിങ്ങളുടെ ഓർഡർ,
                <br />
                <span className="text-[#667A61]">
                  എളുപ്പത്തിൽ.
                </span>
              </>
            ) : (
              <>
                From Our Mill
                <br />
                <span className="text-[#667A61]">
                  To Your Home.
                </span>
              </>
            )}
          </h2>

          <p
            className="
              mt-3
              text-xs
              sm:text-sm
              leading-relaxed
              text-[#5A635A]
              max-w-md
              mx-auto
            "
          >
            {lang === 'ml'
              ? 'തിരഞ്ഞെടുക്കൂ, ബന്ധപ്പെടൂ, ഞങ്ങൾ പുതുതായി തയ്യാറാക്കി നൽകാം.'
              : 'Choose what you need, tell us your requirements, and we’ll prepare it fresh.'}
          </p>
        </div>

        {/* =======================================================
            DESKTOP PROCESS
        ======================================================== */}

        <div className="hidden sm:block">

          <div className="relative">

            {/* Connecting line */}

            <div
              className="
                absolute
                top-[30px]
                left-[12.5%]
                right-[12.5%]
                h-px
                bg-[#C7A15A]/40
              "
            />

            <div className="grid grid-cols-4 gap-5 lg:gap-8">

              {steps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <div
                    key={step.stepNum}
                    className="group relative text-center"
                  >

                    {/* Number / Icon */}

                    <div className="relative z-10 mx-auto mb-5">

                      <div
                        className="
                          mx-auto
                          flex
                          h-[60px]
                          w-[60px]
                          items-center
                          justify-center
                          rounded-full
                          bg-[#F7F3E8]
                          border
                          border-[#DCD5C6]
                          shadow-sm
                          transition-all
                          duration-300
                          group-hover:-translate-y-1
                          group-hover:border-[#667A61]
                          group-hover:shadow-md
                        "
                      >
                        <Icon
                          className="
                            h-5
                            w-5
                            text-[#667A61]
                            transition-colors
                            duration-300
                            group-hover:text-[#29332B]
                          "
                          strokeWidth={1.5}
                        />
                      </div>

                      <span
                        className="
                          absolute
                          -right-1
                          -top-2
                          flex
                          h-5
                          min-w-5
                          items-center
                          justify-center
                          rounded-full
                          bg-[#C7A15A]
                          px-1
                          font-mono
                          text-[8px]
                          font-bold
                          text-[#29332B]
                        "
                      >
                        {index + 1}
                      </span>
                    </div>

                    {/* Content */}

                    <h3
                      className="
                        font-serif-heading
                        text-base
                        lg:text-lg
                        font-bold
                        leading-tight
                        text-[#29332B]
                      "
                    >
                      {step.title}
                    </h3>

                    <p
                      className="
                        mt-2
                        text-xs
                        leading-relaxed
                        text-[#5A635A]
                        max-w-[220px]
                        mx-auto
                      "
                    >
                      {step.desc}
                    </p>

                  </div>
                );
              })}

            </div>
          </div>
        </div>

        {/* =======================================================
            MOBILE PROCESS
        ======================================================== */}

        <div className="sm:hidden">

          <div className="relative">

            {/* Vertical connecting line */}

            <div
              className="
                absolute
                left-[22px]
                top-6
                bottom-6
                w-px
                bg-[#C7A15A]/40
              "
            />

            <div className="space-y-5">

              {steps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <div
                    key={step.stepNum}
                    className="
                      relative
                      flex
                      items-center
                      gap-4
                    "
                  >

                    {/* Icon */}

                    <div
                      className="
                        relative
                        z-10
                        flex
                        h-11
                        w-11
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-[#F7F3E8]
                        border
                        border-[#DCD5C6]
                        shadow-sm
                      "
                    >
                      <Icon
                        className="h-4 w-4 text-[#667A61]"
                        strokeWidth={1.6}
                      />

                      <span
                        className="
                          absolute
                          -right-1
                          -top-1
                          flex
                          h-4
                          min-w-4
                          items-center
                          justify-center
                          rounded-full
                          bg-[#C7A15A]
                          px-1
                          font-mono
                          text-[7px]
                          font-bold
                          text-[#29332B]
                        "
                      >
                        {index + 1}
                      </span>
                    </div>

                    {/* Content */}

                    <div
                      className="
                        flex
                        min-h-[58px]
                        flex-1
                        items-center
                        justify-between
                        gap-3
                        rounded-2xl
                        bg-[#F7F3E8]
                        border
                        border-[#DCD5C6]
                        px-4
                        py-3
                      "
                    >

                      <div className="min-w-0">

                        <h3
                          className="
                            font-serif-heading
                            text-sm
                            font-bold
                            leading-tight
                            text-[#29332B]
                          "
                        >
                          {step.shortTitle}
                        </h3>

                        <p
                          className="
                            mt-0.5
                            text-[10px]
                            leading-relaxed
                            text-[#5A635A]
                          "
                        >
                          {step.desc}
                        </p>

                      </div>

                      <span
                        className="
                          shrink-0
                          font-mono
                          text-[10px]
                          font-bold
                          text-[#C7A15A]/70
                        "
                      >
                        {step.stepNum}
                      </span>

                    </div>

                  </div>
                );
              })}

            </div>
          </div>
        </div>

        {/* =======================================================
            WHATSAPP CTA
        ======================================================== */}

        <div
          className="
            mt-9
            sm:mt-12
            flex
            flex-col
            sm:flex-row
            items-center
            justify-center
            gap-3
            text-center
          "
        >

          <p
            className="
              text-xs
              sm:text-sm
              font-medium
              text-[#5A635A]
            "
          >
            {lang === 'ml'
              ? 'പുതുതായി പൊടിച്ച ഉൽപ്പന്നങ്ങൾ ഓർഡർ ചെയ്യൂ'
              : 'Ready to order something fresh?'}
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              inline-flex
              items-center
              justify-center
              gap-2
              rounded-full
              bg-[#29332B]
              px-5
              py-2.5
              font-sans-body
              text-xs
              font-bold
              text-white
              shadow-sm
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-[#1f2721]
            "
          >
            <MessageCircle
              className="
                h-4
                w-4
                text-[#C7A15A]
                transition-transform
                duration-300
                group-hover:scale-110
              "
            />

            <span>
              {lang === 'ml'
                ? 'വാട്ട്‌സ്ആപ്പിൽ ഓർഡർ ചെയ്യൂ'
                : 'Order on WhatsApp'}
            </span>
          </a>

        </div>

      </div>

      {/* =========================================================
          BOTTOM WAVE
      ========================================================== */}

      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none">

        <svg
          className="
            relative
            block
            w-full
            h-[28px]
            sm:h-[40px]
          "
          viewBox="0 0 1200 100"
          preserveAspectRatio="none"
        >
          <path
            d="
              M0,45
              C160,90 320,5 500,45
              C690,88 830,15 1000,45
              C1090,62 1150,60 1200,45
              L1200,100
              L0,100
              Z
            "
            fill="#F7F3E8"
          />
        </svg>

      </div>

    </section>
  );
};

export default HowToOrderSection;