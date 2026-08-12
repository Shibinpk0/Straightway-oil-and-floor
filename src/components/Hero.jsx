import React, { useState, useEffect } from 'react';
import { ArrowRight, Phone, Star } from 'lucide-react';
import heroImg from '../assets/images/hero.png'; 
import realMillImg from '../assets/images/products.png';
import { translations } from '../translations';

const Hero = ({ onExploreClick, lang }) => {
  const t = translations[lang] || translations.en;
  const phoneUrl = `tel:+918714348348`;

  const heroSlides = [heroImg, realMillImg]; 
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  return (
    <section className="relative bg-[#F7F3E8] pt-8 pb-12 lg:py-0 lg:min-h-[calc(100vh-80px)] flex items-center overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
          
          {/* Content Column - Now appears FIRST on mobile for instant visibility */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-5 text-left z-20 order-1 lg:order-1">
            
            <div className="flex items-center gap-3">
              <span className="h-[1px] w-8 bg-[#78866B]"></span>
              <span className="font-sans-body text-[11px] tracking-[0.2em] font-semibold text-[#667A61] uppercase">
                {lang === 'ml' ? 'പരമ്പരാഗത മിൽ · കരുളായി' : 'TRADITIONAL MILL · KARULAI'}
              </span>
            </div>

            <h1 className="font-serif-heading text-4xl sm:text-5xl md:text-6xl font-bold text-[#29332B] leading-[1.05] tracking-tight">
              Freshly Ground. <br />
              <span className="text-[#667A61]">Made with Care.</span>
            </h1>

            <p className="font-sans-body text-sm md:text-base text-[#5A635A] leading-relaxed max-w-md">
              {lang === 'ml' 
                ? 'നിങ്ങളുടെ വീടുകളിലേക്ക് ഫ്രഷ് അരിഞ്ഞ മാവുകൾ, സുഗന്ധവ്യഞ്ജനങ്ങൾ, പരമ്പരാഗത വെളിച്ചെണ്ണ എന്നിവ ഞങ്ങളുടെ കരുളായി മില്ലിൽ നിന്ന്.'
                : 'Fresh flours, carefully prepared spices, and traditional coconut oil extraction — all from our local mill in Karulai.'
              }
            </p>

            <div className="flex items-center gap-6 pt-2">
              <button
                onClick={onExploreClick}
                className="font-sans-body text-sm bg-[#29332B] hover:bg-[#1a221d] text-white px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300 group shadow-md"
              >
                <span className="font-semibold tracking-wide">{t?.hero?.btnExplore || "Explore Products"}</span>
                <ArrowRight className="w-4 h-4 text-[#C7A15A] group-hover:translate-x-1 transition-transform" />
              </button>

              <a href={phoneUrl} className="font-sans-body text-sm text-[#29332B] border-b-2 border-transparent hover:border-[#667A61] transition-all pb-1">
                {lang === 'ml' ? 'വിളിക്കൂ' : 'Call Us'}
              </a>
            </div>
          </div>

          {/* Image Column - Appears SECOND on mobile, height reduced to 40vh to keep CTA visible */}
          <div className="lg:col-span-7 relative order-2 lg:order-2">
            <div className="relative rounded-[24px] overflow-hidden shadow-premium-soft h-[40vh] sm:h-[55vh] lg:h-[80vh] bg-[#EAE2D2]">
              
              {heroSlides.map((slideImg, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${
                    index === currentSlide ? 'opacity-100 z-10' : 'opacity-0'
                  }`}
                >
                  <img
                    src={slideImg}
                    alt={`PKS Mill showcase ${index + 1} - Flour and Oil Mill Karulai`}
                    // Cinematic Slow Zoom (8 seconds)
                    className={`w-full h-full object-cover transition-transform duration-[8000ms] ease-out ${
                      index === currentSlide ? 'scale-110' : 'scale-100'
                    }`}
                  />
                </div>
              ))}

              {/* Premium 01 / 02 Progress Indicator */}
              <div className="absolute bottom-4 right-4 z-20 flex items-center gap-3 text-white bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-full">
                <span className={`font-mono text-[10px] transition-opacity ${currentSlide === 0 ? 'opacity-100' : 'opacity-50'}`}>01</span>
                <div className="relative w-12 h-[1.5px] bg-white/30 overflow-hidden">
                  <div 
                    className="absolute top-0 left-0 h-full bg-[#C7A15A] transition-all duration-300"
                    style={{ width: `${((currentSlide + 1) / heroSlides.length) * 100}%` }}
                  ></div>
                </div>
                <span className={`font-mono text-[10px] transition-opacity ${currentSlide === 1 ? 'opacity-100' : 'opacity-50'}`}>02</span>
              </div>

              {/* Floating Glassmorphic Trust Badge - Overlaps the image bottom left */}
              <div className="absolute bottom-4 left-4 z-20 bg-white/80 backdrop-blur-md border border-white/40 rounded-full px-3 py-1.5 flex items-center gap-2 shadow-lg">
                <div className="flex items-center gap-0.5 text-[#C7A15A]">
                  <Star className="w-3 h-3 fill-[#C7A15A]" />
                  <Star className="w-3 h-3 fill-[#C7A15A]" />
                  <Star className="w-3 h-3 fill-[#C7A15A]" />
                  <Star className="w-3 h-3 fill-[#C7A15A]" />
                  <Star className="w-3 h-3 fill-[#C7A15A]" />
                </div>
                <span className="text-[10px] font-sans-body font-bold text-[#29332B] tracking-wide">
                  {lang === 'ml' ? 'വിശ്വസ്ത മിൽ' : 'Trusted Local Mill'}
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;