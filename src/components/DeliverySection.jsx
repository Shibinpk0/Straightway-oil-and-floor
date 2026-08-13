import React from 'react';
import { Truck, Phone } from 'lucide-react';
import { translations } from '../translations';

const DeliverySection = ({ lang }) => {
  const t = translations[lang] || translations.en;

  return (
    <section id="delivery" className="bg-[#FFFDF7] py-12 md:py-16 border-b border-[#E1D9C9]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="text-center max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="h-px w-8 bg-[#B86F52]" />
            <span className="font-sans-body text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.22em] text-[#B86F52]">{t?.delivery?.tag || "Doorstep Convenience"}</span>
            <span className="h-px w-8 bg-[#B86F52]" />
          </div>
          <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.05] tracking-tight text-[#29332B]">
            Delivered to Your <span className="text-[#667A61]">Doorstep</span>
          </h2>
        </div>

        {/* Dense 2x2 Grid on Mobile */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {(t?.delivery?.options || []).map((opt, idx) => (
            <div key={idx} className="bg-[#F7F3E8] p-4 rounded-xl border border-[#E1D9C9] hover:border-[#667A61] transition-colors flex flex-col gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#667A61] text-[#C7A15A] flex items-center justify-center font-bold text-xs">0{idx + 1}</div>
              <h3 className="font-serif-heading text-xs sm:text-sm font-bold text-[#29332B] leading-tight">{opt.title}</h3>
              <p className="hidden sm:block text-[11px] text-[#5A635A]">{opt.desc}</p>
            </div>
          ))}
        </div>

        {/* Compact Coverage Card */}
        <div className="bg-[#29332B] text-white p-5 sm:p-6 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-start gap-3 text-left">
            <div className="w-10 h-10 rounded-xl bg-[#C7A15A]/20 text-[#C7A15A] flex items-center justify-center shrink-0">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-serif-heading text-base sm:text-lg font-bold text-white">{lang === 'ml' ? 'സമീപ പ്രദേശങ്ങളിൽ ഹോം ഡെലിവറി' : 'Local Home Delivery Coverage'}</h4>
              <p className="text-[11px] sm:text-xs text-[#F7F3E8]/70 max-w-xl mt-0.5">{lang === 'ml' ? 'വക്കീൽപ്പടി, കരുളായി, മൂത്തേടം, എടക്കര, നിലമ്പൂർ ഭാഗങ്ങളിൽ ഡെലിവറി ലഭ്യമാണ്.' : 'Delivering across Vakkeelpadi, Karulai, Moothedam, Edakkara, and Nilambur. Distance-based charges apply.'}</p>
            </div>
          </div>
          <a href="tel:+918714348348" className="font-sans-body text-xs bg-[#C7A15A] hover:bg-[#b08a4b] text-[#29332B] px-5 py-2.5 rounded-full font-bold shrink-0 transition-colors flex items-center gap-2">
            <Phone className="w-3.5 h-3.5" />
            <span>{lang === 'ml' ? 'വിളിക്കൂ' : 'Call to Enquire'}</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default DeliverySection;