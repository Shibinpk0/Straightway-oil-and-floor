import React from 'react';
import { Truck, MessageCircle, Phone, Clock, ShieldCheck } from 'lucide-react';
import { translations } from '../translations';

const DeliverySection = ({ lang }) => {
  const t = translations[lang] || translations.en;

  return (
    <section id="delivery" className="bg-[#F7F3E8] py-6 sm:py-16 md:py-24 border-b border-[#E1D9C9] relative">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-5 md:px-8 space-y-6 sm:space-y-12">
        <div className="text-center space-y-2 sm:space-y-4 max-w-2xl mx-auto">
          <div className="hidden sm:flex items-center justify-center gap-3 text-[#B86F52]">
            <span className="h-[1px] w-12 bg-[#B86F52]/40"></span>
            <span className="font-serif-heading font-semibold text-xs sm:text-sm tracking-wider uppercase">{t?.delivery?.tag || "✦ DOORSTEP CONVENIENCE ✦"}</span>
            <span className="h-[1px] w-12 bg-[#B86F52]/40"></span>
          </div>
          <h2 className="font-serif-heading text-xl sm:text-3xl sm:text-4xl font-bold text-[#29332B]">{t?.delivery?.heading || "Fresh Products Delivered to Your Doorstep"}</h2>
          <p className="hidden sm:block font-sans-body text-sm sm:text-base text-[#5A635A]">{t?.delivery?.subtitle || "Enjoy freshly ground purity delivered directly to your home or business location."}</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 text-left">
          {(t?.delivery?.options || []).map((opt, idx) => (
            <div key={idx} className="bg-[#EAE2D2] p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-[#E1D9C9] space-y-2 sm:space-y-3 hover:border-[#667A61] transition-colors">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-[#667A61] text-[#C7A15A] flex items-center justify-center font-bold text-xs sm:text-sm">0{idx + 1}</div>
              <h3 className="font-serif-heading text-sm sm:text-base font-bold text-[#29332B] leading-tight">{opt.title}</h3>
              <p className="hidden sm:block font-sans-body text-xs sm:text-sm text-[#5A635A]">{opt.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-[#29332B] text-white p-4 sm:p-6 sm:p-8 rounded-xl sm:rounded-2xl border border-[#C7A15A]/30 flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 text-left">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#C7A15A]/20 text-[#C7A15A] flex items-center justify-center shrink-0">
              <Truck className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h4 className="font-serif-heading text-lg font-bold text-white">{lang === 'ml' ? 'സമീപ പ്രദേശങ്ങളിൽ ഹോം ഡെലിവറി ലഭ്യമാണ്' : 'Local Nearby Home Delivery Coverage'}</h4>
              <p className="text-xs sm:text-sm text-[#F7F3E8]/80 max-w-xl">{lang === 'ml' ? 'വക്കീൽപ്പടി, കരുളായി, മൂത്തേടം, എടക്കര, നിലമ്പൂർ ഭാഗങ്ങളിൽ ഹോം ഡെലിവറിയും സ്ഥാപനങ്ങൾക്കുള്ള വിതരണവും ലഭ്യമാണ്. ദൂരത്തിനനുസരിച്ച് ചെറിയ ഡെലിവറി ചാർജ് ഉണ്ടാകുന്നതാണ്.' : 'Delivering freshly pressed oils and ground spice powders across Vakkeelpadi, Karulai, Moothedam, Edakkara, and Nilambur. Distance-based delivery charges apply.'}</p>
            </div>
          </div>
          <a href="tel:+918714348348" className="font-button text-xs sm:text-sm bg-[#C7A15A] hover:bg-[#b08a4b] text-[#29332B] px-6 py-3.5 rounded-full font-bold shrink-0 transition-colors flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span>{lang === 'ml' ? 'ഡെലിവറി സംശയങ്ങൾക്ക് വിളിക്കൂ' : 'Call For Delivery Inquiry'}</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default DeliverySection;