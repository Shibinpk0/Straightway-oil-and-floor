import React from 'react';
import { ArrowRight, Phone, Leaf, Clock3, MapPin } from 'lucide-react';

import heroImg from '../assets/images/hero.png';
import { translations } from '../translations';

const Hero = ({ onExploreClick, lang }) => {
  const t = translations[lang] || translations.en;
  const phoneUrl = 'tel:+918714348348';

  const trustPoints = [
    {
      icon: Leaf,
      title: lang === 'ml' ? '100% സ്വാഭാവികം' : '100% Natural',
      subtitle: lang === 'ml' ? 'പ്രിസർവേറ്റീവ് ഇല്ല' : 'No preservatives',
    },
    {
      icon: Clock3,
      title: lang === 'ml' ? 'പരമ്പരാഗത രീതി' : 'Traditional Process',
      subtitle: lang === 'ml' ? 'കാലപ്പഴക്കമുള്ള രീതികൾ' : 'Time-tested methods',
    },
    {
      icon: MapPin,
      title: lang === 'ml' ? 'പ്രാദേശികം, വിശ്വസ്തം' : 'Local & Trusted',
      subtitle: lang === 'ml' ? 'ഞങ്ങളുടെ സമൂഹത്തിൽ നിന്ന്' : 'From our community',
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#F7F3E8] text-[#29332B]">
      {/* Single, quiet decorative glow — desktop only */}
      <div className="pointer-events-none absolute inset-0 hidden overflow-hidden lg:block">
        <div className="absolute -right-32 top-0 h-[420px] w-[420px] rounded-full bg-[#667A61]/[0.06] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-[1280px] px-5 pb-12 pt-8 sm:px-8 sm:pb-16 sm:pt-10 lg:px-12 lg:pb-20 lg:pt-12">
        <div className="grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">

          {/* ================= LEFT — CONTENT ================= */}
          <div className="order-1 max-w-[560px]">

            {/* Eyebrow */}
            <div className="mb-4 flex items-center gap-2.5 sm:mb-5">
              <span className="h-px w-7 bg-[#667A61]" />
              <span className="font-sans-body text-[10px] font-bold uppercase tracking-[0.2em] text-[#667A61] sm:text-[11px]">
                {lang === 'ml' ? 'പരമ്പരാഗത മിൽ · കരുളായി' : 'Traditional Mill · Karulai'}
              </span>
            </div>

            {/* Heading */}
            <h1 className="font-serif-heading text-[40px] font-bold leading-[1.05] tracking-[-0.02em] text-[#29332B] sm:text-[56px] lg:text-[60px] xl:text-[68px]">
              Freshly Ground.
              <br />
              Made with{' '}
              <span className="relative inline-block text-[#667A61]">
                Care.
                <span className="absolute -bottom-1.5 left-0 h-[3px] w-full rotate-[-1.5deg] rounded-full bg-[#B86F52]/80" />
              </span>
            </h1>

            {/* Description */}
            <p className="mt-5 font-sans-body text-[15px] leading-7 text-[#5A635A] sm:mt-6 sm:text-base">
              {lang === 'ml'
                ? 'കരുളായി മില്ലിൽ നിന്ന് ഫ്രഷ് മാവുകൾ, ശ്രദ്ധയോടെ തയ്യാറാക്കിയ സുഗന്ധവ്യഞ്ജനങ്ങൾ, പരമ്പരാഗത വെളിച്ചെണ്ണ.'
                : 'Fresh flour, spices & coconut oil, made the traditional way.'}
            </p>

            {/* CTAs */}
            <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row">
              <button
                onClick={onExploreClick}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#667A61] px-6 py-3.5 font-sans-body text-sm font-semibold text-white shadow-[0_8px_24px_rgba(41,51,43,0.15)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#586851] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#667A61] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F7F3E8]"
              >
                <span>{t?.hero?.btnExplore || 'Explore Products'}</span>
                <ArrowRight className="h-4 w-4 text-[#E7C879] transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <a
                href={phoneUrl}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#D8CDB8] bg-transparent px-6 py-3.5 font-sans-body text-sm font-semibold text-[#29332B] transition-all duration-300 hover:border-[#667A61] hover:bg-[#EEE9DC] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#667A61] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F7F3E8]"
              >
                <Phone className="h-4 w-4 text-[#667A61]" />
                <span>{lang === 'ml' ? 'വിളിക്കൂ' : 'Call the Mill'}</span>
              </a>
            </div>

            {/* Trust strip — one quiet row, same on mobile & desktop */}
            <div className="mt-8 grid grid-cols-3 gap-4 border-t border-[#DCD5C6] pt-6 sm:mt-10 sm:gap-6 sm:pt-7">
              {trustPoints.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex flex-col items-start gap-1.5 sm:flex-row sm:items-start sm:gap-2.5">
                    <Icon className="h-4 w-4 shrink-0 text-[#B86F52]" strokeWidth={1.75} />
                    <div className="min-w-0">
                      <p className="font-sans-body text-[11px] font-bold leading-tight text-[#29332B] sm:text-xs">
                        {item.title}
                      </p>
                      <p className="mt-0.5 hidden text-[10px] leading-tight text-[#8A8F84] sm:block">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ================= RIGHT — IMAGE ================= */}
          <div className="order-2">
            <div className="relative overflow-hidden rounded-[22px] border border-white/60 bg-[#EAE2D2] shadow-[0_20px_60px_rgba(41,51,43,0.14)] sm:rounded-[28px] lg:rounded-[32px]">
              <img
                src={heroImg}
                alt="PKS Straightway Mill storefront with fresh coconut oil, spices, and flour in Karulai"
                className="h-[240px] w-full object-cover object-center sm:h-[360px] lg:h-[480px] xl:h-[520px]"
              />

              {/* Bottom caption bar */}
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/70 via-black/25 to-transparent px-4 py-3.5 sm:px-5 sm:py-4">
                <div>
                  <p className="font-serif-heading text-xs font-bold text-white sm:text-sm">
                    PKS Straightway Mill
                  </p>
                  <p className="text-[10px] text-white/75 sm:text-[11px]">
                    Vakkeelpadi · Karulai
                  </p>
                </div>
                <div className="flex items-center gap-1 rounded-full border border-white/25 bg-white/10 px-2.5 py-1 backdrop-blur-sm">
                  <span className="font-mono text-[10px] font-bold text-[#E7C879] sm:text-[11px]">5.0 ★</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
