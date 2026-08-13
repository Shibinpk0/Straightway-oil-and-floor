import React from 'react';
import { Leaf, Phone, Mail, MapPin, ExternalLink, Clock } from 'lucide-react';
import logoImg from '../assets/images/logo.png';
import { translations } from '../translations';

const Footer = ({ setActiveTab, lang }) => {
  const t = translations[lang] || translations.en;

  const handleNavClick = (id) => {
    setActiveTab(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#12351D] text-white pt-10 sm:pt-16 pb-20 sm:pb-12 border-t border-[#D8A43A]/20">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-5 md:px-8 space-y-8 sm:space-y-12">
        
        {/* Main 4-column footer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 text-left">
          
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full overflow-hidden border border-[#D8A43A]/40 bg-white flex items-center justify-center shrink-0 shadow-md">
                <img src={logoImg} alt="Straightway Logo" className="w-full h-full object-cover" />
              </div>
              <div>
                <span className="block font-serif-heading text-lg font-bold tracking-tight text-white uppercase leading-none">
                  {t?.brandName || "STRAIGHTWAY"}
                </span>
                <span className="block text-[10px] font-sans-body font-medium tracking-wider text-[#D8A43A] uppercase mt-0.5">
                  {t?.brandSubtitle || "Flour & Spice Mills"}
                </span>
              </div>
            </div>

            <p className="font-serif-heading text-sm text-[#FFFDF8]/90 italic leading-relaxed">
              "{t?.footer?.tagline || "Pure Taste. Traditional Care. Delivered Fresh."}"
            </p>

            <p className="font-sans-body text-xs text-[#FFFDF8]/70 leading-relaxed">
              {t?.hero?.subtitle || "Experience 100% pure coconut oil, hot-air dried spices, and custom milling."}
            </p>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif-heading text-sm font-bold text-[#D8A43A] uppercase tracking-wider">
              {t?.footer?.quickLinks || "Quick Links"}
            </h4>
            <ul className="space-y-2 text-xs text-[#FFFDF8]/80">
              <li>
                <button onClick={() => handleNavClick('home')} className="hover:text-[#D8A43A] transition-colors">
                  {t?.nav?.home || "Home"}
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('products')} className="hover:text-[#D8A43A] transition-colors">
                  {t?.nav?.products || "Products & Milling"}
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('how-it-works')} className="hover:text-[#D8A43A] transition-colors">
                  {t?.nav?.howItWorks || "How to Order"}
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('bulk')} className="hover:text-[#D8A43A] transition-colors">
                  {t?.nav?.bulk || "Wholesale & Bulk"}
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('about')} className="hover:text-[#D8A43A] transition-colors">
                  {t?.nav?.about || "About Us"}
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('contact')} className="hover:text-[#D8A43A] transition-colors">
                  {t?.nav?.contact || "Contact & Location"}
                </button>
              </li>
            </ul>
          </div>

          {/* Products & Bulk (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif-heading text-sm font-bold text-[#D8A43A] uppercase tracking-wider">
              {t?.footer?.ourProducts || "Products & Services"}
            </h4>
            <ul className="space-y-2 text-xs text-[#FFFDF8]/80">
              <li>
                <button onClick={() => handleNavClick('products')} className="hover:text-[#D8A43A] transition-colors">
                  {lang === 'ml' ? 'ശുദ്ധമായ നാടൻ വെളിച്ചെണ്ണ' : 'Pure Country Coconut Oil'}
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('products')} className="hover:text-[#D8A43A] transition-colors">
                  {lang === 'ml' ? 'കഴുകി ഉണക്കിയ മസാലപ്പൊടികൾ' : 'Washed & Dried Spice Powders'}
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('products')} className="hover:text-[#D8A43A] transition-colors">
                  {lang === 'ml' ? 'വറുത്ത അരിപ്പൊടി & പുട്ടുപൊടി' : 'Roasted Rice Flour / Puttu Podi'}
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('products')} className="hover:text-[#D8A43A] transition-colors">
                  {lang === 'ml' ? 'വറുത്തു പൊടിച്ച ആട്ട (Atta)' : 'Roasted Atta Wheat Flour'}
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('bulk')} className="hover:text-[#D8A43A] transition-colors">
                  {lang === 'ml' ? 'ബൾക്ക് & വിതരണ സേവനങ്ങൾ' : 'Bulk & Commercial Orders'}
                </button>
              </li>
            </ul>
          </div>

          {/* Working Hours & Address (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif-heading text-sm font-bold text-[#D8A43A] uppercase tracking-wider">
              {t?.footer?.contactInfo || "Contact Info"}
            </h4>

            <div className="space-y-2 text-xs text-[#FFFDF8]/80">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#D8A43A] shrink-0 mt-0.5" />
                <span>{t?.contact?.addressText || "Pulliyil, Nilambur - Karulai Rd, Vakkeelpadi, Karulai"}</span>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#D8A43A] shrink-0" />
                <a href="tel:+918714348348" className="hover:text-[#D8A43A]">
                  {t?.phone1 || "+91 8714 348 348"} / {t?.phone2 || "+91 9447 534 834"}
                </a>
              </div>

              <div className="flex items-center gap-2 pt-1 border-t border-white/10">
                <Clock className="w-4 h-4 text-[#D8A43A] shrink-0" />
                <span>{t?.workingHours?.days || "Monday - Saturday"}: 8:30 AM – 6:00 PM</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FFFDF8]/60">
          <div>{t?.footer?.rights || "© 2026 Straight Way Oil & Flour Mill. All rights reserved."}</div>
          <div>{t?.footer?.madeWith || "Crafted with Purity & Care"}</div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
