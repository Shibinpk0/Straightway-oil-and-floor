import React from 'react';
import { Award, CheckCircle2, ShieldCheck, ArrowUpRight } from 'lucide-react';
import storefrontImg from '../assets/images/storefront.jpg';
import realMillImg from '../assets/images/pks_mill_real.png';
import { translations } from '../translations';

const AboutSection = ({ lang }) => {
  const t = translations[lang] || translations.en;

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#EAE2D2] text-[#29332B]"
    >
      {/* =====================================================
          BACKGROUND DECORATION
      ===================================================== */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-1/2 h-[320px] w-[320px] -translate-y-1/2 rounded-full bg-[#B86F52]/5 blur-3xl" />

        <div className="absolute -right-32 top-10 h-[260px] w-[260px] rounded-full bg-[#667A61]/5 blur-3xl" />
      </div>

      {/* =====================================================
          CONTENT
      ===================================================== */}
      <div className="relative mx-auto max-w-[1280px] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">

        <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">

          {/* =================================================
              LEFT — IMAGE COMPOSITION
          ================================================= */}
          <div className="lg:col-span-5">

            <div className="relative mx-auto h-[300px] w-full max-w-[500px] sm:h-[360px] lg:h-[420px]">

              {/* Main image */}
              <div className="absolute left-0 top-0 h-[82%] w-[82%] overflow-hidden rounded-[24px] border-[3px] border-[#F7F3E8] bg-[#F7F3E8] shadow-[0_20px_50px_rgba(41,51,43,0.14)] sm:rounded-[28px]">

                <img
                  src={realMillImg}
                  alt="PKS Straightway Oil & Flour Mill"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#29332B]/20 to-transparent" />
              </div>

              {/* Secondary image */}
              <div className="absolute bottom-0 right-0 h-[45%] w-[48%] overflow-hidden rounded-[20px] border-[3px] border-[#F7F3E8] bg-[#F7F3E8] shadow-xl sm:rounded-[24px]">

                <img
                  src={storefrontImg}
                  alt="Straightway traditional mill"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Small rating badge */}
              <div className="absolute right-[16%] top-[34%] flex h-[68px] w-[68px] flex-col items-center justify-center rounded-2xl border border-white/50 bg-[#F7F3E8]/90 shadow-lg backdrop-blur-md sm:h-[76px] sm:w-[76px]">

                <span className="font-serif-heading text-xl font-bold text-[#667A61] sm:text-2xl">
                  5.0
                </span>

                <span className="text-[8px] font-bold tracking-widest text-[#C7A15A]">
                  ★ RATED
                </span>
              </div>

            </div>
          </div>

          {/* =================================================
              RIGHT — CONTENT
          ================================================= */}
          <div className="lg:col-span-7">

            {/* Section label */}
            <div className="mb-3 flex items-center gap-2.5">

              <span className="h-px w-7 bg-[#B86F52]" />

              <span className="font-sans-body text-[9px] font-bold uppercase tracking-[0.2em] text-[#B86F52] sm:text-[10px]">
                {t?.about?.tag || 'Our Story & Tradition'}
              </span>

            </div>

            {/* Heading */}
            <h2 className="font-serif-heading text-3xl font-bold leading-[1.05] tracking-tight text-[#29332B] sm:text-4xl lg:text-5xl">

              {lang === 'ml' ? (
                <>
                  കരുതലോടെ തയ്യാറാക്കുന്നത്,
                  <br />
                  <span className="text-[#667A61]">
                    ഓരോ വീടിനും.
                  </span>
                </>
              ) : (
                <>
                  Crafted With Care,
                  <br />
                  <span className="relative inline-block text-[#667A61]">
                    For Every Home.

                    <span className="absolute -bottom-1 left-0 h-[2px] w-[65%] -rotate-2 rounded-full bg-[#B86F52]" />
                  </span>
                </>
              )}

            </h2>

            {/* Description */}
            <p className="mt-4 max-w-xl text-sm leading-6 text-[#5A635A] sm:text-[15px] sm:leading-7">
              {t?.about?.p1 ||
                'Using traditional grinding techniques combined with hygienic processing, we ensure every product reaches your home with freshness, natural aroma, and authentic taste.'}
            </p>

            {/* =================================================
                TWO KEY FEATURES
            ================================================= */}
            <div className="mt-6 grid gap-3 sm:grid-cols-2">

              {/* Feature 1 */}
              <div className="rounded-2xl border border-[#DCD5C6] bg-[#F7F3E8]/65 p-4">

                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-[#667A61]/10">
                  <CheckCircle2
                    className="h-4 w-4 text-[#667A61]"
                    strokeWidth={1.7}
                  />
                </div>

                <h3 className="font-serif-heading text-sm font-bold text-[#29332B]">
                  {lang === 'ml'
                    ? 'കഴുകി ഉണക്കിയ ശുദ്ധത'
                    : 'Washed & Dried Spices'}
                </h3>

                <p className="mt-1.5 text-[11px] leading-5 text-[#5A635A]">
                  {lang === 'ml'
                    ? 'മുളക്, മഞ്ഞൾ, മല്ലി എന്നിവ ശുചിയായി തയ്യാറാക്കി പൊടിയാക്കുന്നു.'
                    : 'Chillies, turmeric and coriander are carefully cleaned before milling.'}
                </p>

              </div>

              {/* Feature 2 */}
              <div className="rounded-2xl border border-[#DCD5C6] bg-[#F7F3E8]/65 p-4">

                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-[#667A61]/10">
                  <ShieldCheck
                    className="h-4 w-4 text-[#667A61]"
                    strokeWidth={1.7}
                  />
                </div>

                <h3 className="font-serif-heading text-sm font-bold text-[#29332B]">
                  {lang === 'ml'
                    ? 'ഹൈജീനിക് ഡ്രയർ സൗകര്യം'
                    : 'Hygienic Hot-Air Dryer'}
                </h3>

                <p className="mt-1.5 text-[11px] leading-5 text-[#5A635A]">
                  {lang === 'ml'
                    ? 'തേങ്ങയും മറ്റ് ഉൽപ്പന്നങ്ങളും ശുചിത്വത്തോടെ ഉണക്കാനുള്ള സൗകര്യം.'
                    : 'Clean hot-air drying for coconut and other products before processing.'}
                </p>

              </div>

            </div>

            {/* =================================================
                MILL IDENTITY
            ================================================= */}
            <div className="mt-5 flex items-center justify-between gap-4 border-t border-[#DCD5C6] pt-4">

              <div className="flex min-w-0 items-center gap-3">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#667A61]/10">
                  <Award
                    className="h-5 w-5 text-[#C7A15A]"
                    strokeWidth={1.5}
                  />
                </div>

                <div className="min-w-0">

                  <p className="truncate font-serif-heading text-sm font-bold text-[#29332B]">
                    PKS Straightway Oil & Flour Mill
                  </p>

                  <p className="mt-0.5 text-[10px] text-[#5A635A] sm:text-xs">
                    {t?.locationShort || 'Vakkeelpadi, Karulai'}
                  </p>

                </div>

              </div>

              {/* Contact shortcut */}
              <a
                href="tel:+918714348348"
                className="group flex shrink-0 items-center gap-1.5 rounded-full border border-[#DCD5C6] bg-[#F7F3E8] px-3 py-2 text-[10px] font-bold text-[#29332B] transition-all hover:border-[#667A61] hover:bg-[#667A61] hover:text-white sm:px-4"
              >
                <span className="hidden sm:inline">
                  {lang === 'ml' ? 'ബന്ധപ്പെടുക' : 'Contact'}
                </span>

                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

            </div>

          </div>
        </div>
      </div>

      {/* =====================================================
          WAVE → NEXT SECTION
      ===================================================== */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-full overflow-hidden leading-none">

        <svg
          className="relative block h-[28px] w-full sm:h-[40px]"
          viewBox="0 0 1200 100"
          preserveAspectRatio="none"
        >
          <path
            d="M0,35 C180,70 340,5 520,40 C700,75 900,15 1200,45 L1200,100 L0,100 Z"
            fill="#F7F3E8"
          />
        </svg>

      </div>
    </section>
  );
};

export default AboutSection;