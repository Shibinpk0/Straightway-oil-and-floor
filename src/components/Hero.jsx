import React, { useState, useEffect } from 'react';
import { ArrowRight, Phone, ShieldCheck } from 'lucide-react';
import heroImg from '../assets/images/hero.png'; 
import realMillImg from '../assets/images/products.png';
import { translations } from '../translations';

const Hero = ({ onExploreClick, lang }) => {
  const t = translations[lang] || translations.en;
  const phoneUrl = `tel:+918714348348`;

  // --- CAROUSEL LOGIC ---
  // Add your premium images here. For now using the two you have.
  const heroSlides = [heroImg, realMillImg]; 
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    // Automatically change slide every 4 seconds
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4000);

    // Clear interval on unmount to prevent memory leaks
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  return (
    <section className="relative bg-[#FFFDF8] pt-4 sm:pt-10 md:pt-16 pb-4 sm:pb-14 md:pb-24 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center">
          
          {/* Hero Image Carousel Column */}
          <div className="lg:col-span-7 relative order-1 lg:order-2">
            {/* Added 'group' class back here for the badge hover effect */}
            <div className="relative rounded-2xl sm:rounded-[28px] overflow-hidden shadow-premium-soft border border-[#E8E2D6]/70 group h-[280px] sm:h-[400px] lg:h-[560px]">
              
              {/* Slides Mapping */}
              {heroSlides.map((slideImg, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <img
                      src={slideImg}
                      alt={`PKS Mill showcase ${index + 1} - Flour and Oil Mill Karulai`}
                      className="w-full h-full object-cover object-right"
                    />
                </div>
              ))}

              {/* Carousel Dots Indicator */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
                {heroSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    aria-label={`Go to slide ${index + 1}`}
                    className={`transition-all duration-300 rounded-full ${
                      index === currentSlide 
                        ? 'w-6 h-2 bg-[#D8A43A]' 
                        : 'w-2 h-2 bg-white/70 hover:bg-white'
                    }`}
                  ></button>
                ))}
              </div>

              {/* Floating Badge (Stays on top of all slides) */}
              <div className="hidden sm:flex absolute bottom-4 right-4 max-w-[280px] bg-white/95 backdrop-blur-md p-3 rounded-2xl shadow-2xl border border-[#D8A43A] items-center gap-3 z-10">
                <div className="w-14 h-14 rounded-xl overflow-hidden shrink-0 border border-[#E8E2D6]">
                  <img
                    src={realMillImg}
                    alt="PKS Straightway Mill"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-left">
                  <div className="text-[10px] font-button bg-[#D8A43A]/20 text-[#12351D] font-bold px-2 py-0.5 rounded-full inline-block uppercase">
                    Our Mill
                  </div>
                  <div className="font-serif-heading text-xs font-bold text-[#12351D] mt-0.5">PKS Straightway Mill</div>
                  <div className="text-[10px] text-[#666666]">Vakeelppadi - Karulai</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Column — Appears SECOND on mobile, FIRST on desktop */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-6 text-left z-10 order-2 lg:order-1">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F6F1E7] border border-[#E8E2D6] text-xs font-sans-body font-semibold text-[#1D4F2B]">
              <span className="w-2 h-2 rounded-full bg-[#D8A43A] animate-pulse"></span>
              <span className="line-clamp-1">{t?.hero?.badge || "100% PURE & TRADITIONAL"}</span>
            </div>

            {/* Serif Heading */}
            <h1 className="font-serif-heading text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-bold text-[#202020] leading-[1.15] sm:leading-[1.12] tracking-tight">
              {t?.hero?.titleLine1 || "Freshly Ground Flours & Spices"}<br />
              <span className="text-[#1D4F2B]">{t?.hero?.titleLine2 || "Made with Purity & Care"}</span>
            </h1>

            {/* Subtext */}
            <p className="font-sans-body text-sm sm:text-base md:text-lg text-[#666666] leading-relaxed max-w-lg">
              {t?.hero?.subtitle || "Experience 100% pure coconut oil, hot-air dried spices, and custom milling."}
            </p>

            {/* Washed & Dried Hygiene Certification Stamp */}
            <div className="flex bg-[#F6F1E7] p-3.5 rounded-2xl border border-[#E8E2D6] items-center gap-3 max-w-md">
              <div className="w-10 h-10 rounded-xl bg-[#1D4F2B] text-[#D8A43A] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="text-xs text-left">
                <span className="font-bold text-[#12351D] block">
                  {lang === 'ml' ? '100% കഴുകി ഉണക്കിയ ശുചിത്വ ഗ്യാരന്റി' : '100% Washed & Sun-Dried Guarantee'}
                </span>
                <span className="text-[#666666] text-[11px]">
                  {lang === 'ml' ? 'മുളക്, മഞ്ഞൾ, മല്ലി കഴുകി ഉണക്കിയ ശേക്ഷമാണ് പൊടിക്കുന്നത്' : 'All spices thoroughly washed before slow milling'}
                </span>
              </div>
            </div>

            {/* Dual Action CTAs */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-2.5 sm:gap-4 pt-2">
              <button
                onClick={onExploreClick}
                className="font-button text-sm bg-[#1D4F2B] hover:bg-[#12351D] text-white px-7 py-3.5 rounded-full flex items-center justify-center gap-2 shadow-md hover:shadow-xl transition-all duration-300 group"
              >
                <span>{t?.hero?.btnExplore || "Explore Products"}</span>
                <ArrowRight className="w-4 h-4 text-[#D8A43A] group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={phoneUrl}
                className="font-button text-sm bg-transparent hover:bg-[#F6F1E7] text-[#202020] border border-[#E8E2D6] px-6 py-3.5 rounded-full flex items-center justify-center gap-2 transition-all duration-300 hover:border-[#1D4F2B]"
              >
                <Phone className="w-4 h-4 text-[#1D4F2B]" />
                <span>{t?.hero?.btnCall || "Call to Enquire"}</span>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex pt-6 flex-wrap items-center gap-4 sm:gap-6 text-xs text-[#666666] font-medium border-t border-[#E8E2D6]/60 max-w-lg">
              <div className="flex items-center gap-1.5">
                <span className="text-[#D8A43A]">★</span>
                <span>{t?.hero?.tag1 || "100% Natural Oils & Spices"}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-[#D8A43A]">★</span>
                <span>{t?.hero?.tag2 || "Custom Grinding Services"}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-[#D8A43A]">★</span>
                <span>{t?.hero?.tag3 || "Vakkeelpadi, Karulai"}</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Wave Divider — hidden on mobile to save scroll space */}
      <div className="hidden sm:block w-full overflow-hidden leading-none mt-8 sm:mt-12 md:mt-16">
        <svg
          className="relative block w-full h-[45px] md:h-[60px]"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C150,90 350,-40 500,45 C650,130 900,10 1200,60 L1200,120 L0,120 Z"
            className="wave-divider fill-[#F6F1E7]"
          ></path>
        </svg> 
      </div>
    </section>
  );
};

export default Hero;