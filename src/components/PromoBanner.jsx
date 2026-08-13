import React from 'react';
import {
  ShieldCheck,
  HeartHandshake,
  ArrowRight,
} from 'lucide-react';
import realMillImg from '../assets/images/pks_mill_real.png';
import { translations } from '../translations';

const PromoBanner = ({ onKnowMoreClick, lang }) => {
  const t = translations[lang] || translations.en;

  return (
    <section className="relative overflow-hidden bg-[#F7F3E8] py-12 sm:py-16 lg:py-20">

      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">

        <div className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">

          {/* Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-[24px] border-[5px] border-[#EAE2D2] shadow-[0_20px_60px_rgba(41,51,43,0.12)]">
              <img
                src={realMillImg}
                alt="PKS Straightway Oil & Flour Mill"
                className="h-[280px] w-full object-cover sm:h-[360px]"
              />
            </div>

            <div className="absolute -bottom-4 right-4 rounded-2xl border border-[#DCD5C6] bg-[#F7F3E8]/95 px-4 py-3 shadow-lg backdrop-blur-md sm:right-6">
              <span className="block font-sans-body text-[8px] font-bold uppercase tracking-[0.16em] text-[#B86F52]">
                {t?.promo?.storeBadge || 'Local Mill'}
              </span>

              <span className="mt-1 block font-serif-heading text-sm font-bold text-[#29332B]">
                PKS Straightway
              </span>

              <span className="block font-sans-body text-[9px] text-[#5A635A]">
                Vakkeelpadi · Karulai
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="pt-3 lg:pt-0">

            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-7 bg-[#B86F52]" />

              <span className="font-sans-body text-[9px] font-bold uppercase tracking-[0.2em] text-[#B86F52]">
                {t?.promo?.tag || 'Our Commitment'}
              </span>
            </div>

            <h2 className="font-serif-heading text-3xl font-bold leading-[1.03] tracking-tight text-[#29332B] sm:text-4xl lg:text-5xl">
              {t?.promo?.headingLine1 || 'Good Ingredients.'}
              <br />

              <span className="text-[#667A61]">
                {t?.promo?.headingLine2 || 'Great Health.'}
              </span>
            </h2>

            <p className="mt-4 max-w-lg font-sans-body text-sm leading-6 text-[#5A635A]">
              {t?.promo?.desc ||
                'Traditional methods and hygienic processing help us preserve the natural quality and aroma of every product.'}
            </p>

            {/* Values */}
            <div className="mt-6 grid grid-cols-2 gap-3">

              <div className="rounded-2xl border border-[#DCD5C6] bg-[#EAE2D2]/60 p-3.5">
                <ShieldCheck className="mb-2 h-5 w-5 text-[#667A61]" />

                <h4 className="font-serif-heading text-xs font-bold text-[#29332B]">
                  {t?.promo?.b1Title || 'Quality & Purity'}
                </h4>

                <p className="mt-1 text-[10px] leading-5 text-[#5A635A]">
                  {t?.promo?.b1Desc ||
                    'Carefully processed without unnecessary additives.'}
                </p>
              </div>

              <div className="rounded-2xl border border-[#DCD5C6] bg-[#EAE2D2]/60 p-3.5">
                <HeartHandshake className="mb-2 h-5 w-5 text-[#667A61]" />

                <h4 className="font-serif-heading text-xs font-bold text-[#29332B]">
                  {t?.promo?.b2Title || 'Fair Local Prices'}
                </h4>

                <p className="mt-1 text-[10px] leading-5 text-[#5A635A]">
                  {t?.promo?.b2Desc ||
                    'Honest neighborhood pricing directly from the mill.'}
                </p>
              </div>

            </div>

            <button
              onClick={onKnowMoreClick}
              className="
                group mt-6
                inline-flex items-center gap-2
                rounded-full
                bg-[#29332B]
                px-5 py-3
                font-sans-body text-xs font-semibold
                text-white
                transition-all
                hover:-translate-y-0.5
                hover:bg-[#202821]
              "
            >
              <span>
                {t?.promo?.btnKnowMore || 'Know More About Us'}
              </span>

              <ArrowRight className="h-3.5 w-3.5 text-[#C7A15A] transition-transform group-hover:translate-x-1" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PromoBanner;