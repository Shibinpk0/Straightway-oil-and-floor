import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { translations } from '../translations';

const FaqSection = ({ lang }) => {
  const t = translations[lang] || translations.en;
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    { q: t?.faq?.q1 || "Do you offer home delivery?", a: t?.faq?.a1 || "Yes! Home delivery is available in nearby areas around Vakkeelpadi, Karulai, and Nilambur." },
    { q: t?.faq?.q2 || "Can I bring my own grains or coconuts?", a: t?.faq?.a2 || "Yes! We provide fresh custom grinding for your grains and coconuts." },
    { q: t?.faq?.q3 || "Do you accept bulk orders for hotels & events?", a: t?.faq?.a3 || "Yes! We supply hotels, caterers, and stores with bulk orders." },
    { q: t?.faq?.q4 || "How is your coconut oil processed?", a: t?.faq?.a4 || "Our oil is extracted from clean dried coconuts using hot-air dryers." },
  ];

  const toggleFaq = (idx) => { setOpenIdx(openIdx === idx ? null : idx); };

  return (
    <section id="faq" className="bg-[#F7F3E8] py-6 sm:py-16 md:py-24 border-b border-[#E1D9C9] relative">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-5 md:px-8 space-y-6 sm:space-y-12">
        <div className="text-center space-y-2 sm:space-y-4 max-w-2xl mx-auto">
          <div className="hidden sm:flex items-center justify-center gap-3 text-[#B86F52]">
            <span className="h-[1px] w-12 bg-[#B86F52]/40"></span>
            <span className="font-serif-heading font-semibold text-xs sm:text-sm tracking-wider uppercase">{t?.faq?.tag || "✦ FREQUENTLY ASKED QUESTIONS ✦"}</span>
            <span className="h-[1px] w-12 bg-[#B86F52]/40"></span>
          </div>
          <h2 className="font-serif-heading text-xl sm:text-3xl sm:text-4xl font-bold text-[#29332B]">{t?.faq?.heading || "Got Questions? We Have Answers."}</h2>
          <p className="hidden sm:block font-sans-body text-sm sm:text-base text-[#5A635A]">{t?.faq?.subtitle || "Common inquiries about our home delivery, custom milling, and bulk services."}</p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4 text-left">
          {faqs.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className="bg-[#FFFDF7] rounded-xl border border-[#E1D9C9] overflow-hidden transition-all duration-300 shadow-premium-soft">
                <button onClick={() => toggleFaq(idx)} className="w-full p-4 sm:p-5 sm:p-6 text-left font-serif-heading font-bold text-sm sm:text-base sm:text-lg text-[#29332B] flex items-center justify-between gap-3 sm:gap-4 focus:outline-none">
                  <div className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-[#B86F52] shrink-0" />
                    <span>{item.q}</span>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-[#667A61] transition-transform duration-300 shrink-0 ${isOpen ? 'transform rotate-180' : ''}`} />
                </button>
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm font-sans-body text-[#5A635A] leading-relaxed border-t border-[#E1D9C9]/60 animate-fadeIn">
                    <p>{item.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="text-center pt-4">
          <p className="text-xs text-[#5A635A] mb-3">{lang === 'ml' ? 'മറ്റ് സംശയങ്ങൾ അറിയാൻ വാട്ട്‌സ്ആപ്പിൽ മെസ്സേജ് ചെയ്യൂ' : 'Have more questions? Ask us directly on WhatsApp'}</p>
          <a href="https://wa.me/918714348348?text=Hello%20PKS%20Straightway%20Mill!%20I%20have%20a%20question." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-button text-xs bg-[#25D366] hover:bg-[#20ba5a] text-white px-5 py-2.5 rounded-full font-bold transition-colors shadow-sm">
            <MessageCircle className="w-4 h-4" />
            <span>{lang === 'ml' ? 'സംശയങ്ങൾ ചോദിക്കൂ' : 'Ask Question on WhatsApp'}</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;