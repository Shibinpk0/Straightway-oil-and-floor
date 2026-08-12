import React from 'react';
import { GraduationCap, ArrowUpRight, Award } from 'lucide-react';
import { translations } from '../translations';

const Partner = ({ lang }) => {
  const t = translations[lang] || translations.en;

  return (
    <section id="partner" className="bg-[#FFFDF7] py-20 md:py-24 relative">
      <div className="max-w-[1280px] mx-auto px-5 md:px-8">
        
        {/* Subtle Outer Card */}
        <div className="bg-[#12351D] text-white rounded-[28px] p-8 md:p-12 border border-[#1D4F2B] shadow-2xl relative overflow-hidden text-left">
          
          {/* Subtle Background Pattern */}
          <div className="absolute -right-16 -bottom-16 w-80 h-80 rounded-full bg-[#1D4F2B]/30 blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Content (8 cols) */}
            <div className="lg:col-span-8 space-y-5">
              
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-[#C7A15A] text-[#12351D] font-button text-[11px] font-bold uppercase tracking-wider">
                  {t?.partner?.badge || "Educational Partner"}
                </span>
                <span className="text-xs text-[#C7A15A] font-semibold tracking-wider uppercase">
                  {t?.partner?.tag || "✦ EDUCATIONAL COLLABORATION ✦"}
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="font-serif-heading text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                  {t?.partner?.title || "Empowering Local Youth with TideTalk Edu"}
                </h3>
                <p className="font-sans-body text-sm sm:text-base text-[#FFFDF8]/80 leading-relaxed max-w-2xl">
                  {t?.partner?.desc || "Straightway Mill is proud to partner with TideTalk Edu to support quality spoken English and confidence building programs for students in Karulai & Nilambur."}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-6 pt-2 text-xs text-[#FFFDF8]/70">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-[#C7A15A]" />
                  <span>{lang === 'ml' ? 'ഓൺലൈൻ സ്പോക്കൺ ഇംഗ്ലീഷ്' : 'Interactive Online Classes'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#C7A15A]" />
                  <span>{lang === 'ml' ? 'വ്യക്തിഗത പരിശീലനം' : 'Personal Mentorship'}</span>
                </div>
              </div>

            </div>

            {/* Right Action Box (4 cols) */}
            <div className="lg:col-span-4 bg-white/10 p-6 rounded-2xl border border-white/20 space-y-4 text-center">
              <div className="w-12 h-12 rounded-full bg-[#C7A15A]/20 text-[#C7A15A] mx-auto flex items-center justify-center">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-serif-heading text-lg font-bold text-white">TideTalk Edu</h4>
                <p className="text-xs text-[#FFFDF8]/70 mt-1">
                  {lang === 'ml' ? 'ആത്മവിശ്വാസത്തോടെ ഇംഗ്ലീഷ് സംസാരിക്കാൻ' : 'Speak English with Confidence'}
                </p>
              </div>
              <button
                disabled
                className="w-full font-button text-xs bg-white/20 text-white/80 py-2.5 px-4 rounded-xl cursor-not-allowed flex items-center justify-center gap-2"
              >
                <span>{t?.partner?.badge || "Educational Partner"}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Partner;
