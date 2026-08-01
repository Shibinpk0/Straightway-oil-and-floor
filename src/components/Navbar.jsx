import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Leaf, Globe } from 'lucide-react';
import logoImg from '../assets/images/logo.png';
import { translations } from '../translations';

const Navbar = ({ activeTab, setActiveTab, lang, setLang }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const t = translations[lang] || translations.en;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: t?.nav?.home || 'Home' },
    { id: 'products', label: t?.nav?.products || 'Products' },
    { id: 'how-it-works', label: t?.nav?.howItWorks || 'How to Order' },
    { id: 'bulk', label: t?.nav?.bulk || 'Wholesale' },
    { id: 'about', label: t?.nav?.about || 'About Us' },
    { id: 'contact', label: t?.nav?.contact || 'Contact' },
  ];

  const handleNavClick = (id) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const toggleLanguage = () => {
    setLang(lang === 'en' ? 'ml' : 'en');
  };

  return (
    <header className={`sticky top-0 z-50 h-[80px] bg-white transition-all duration-300 ${scrolled ? 'shadow-nav-scroll border-b border-[#E8E2D6]/60' : 'border-b border-[#E8E2D6]/40'}`}>
      <div className="max-w-[1280px] mx-auto h-full px-4 sm:px-6 flex items-center justify-between">
        
        {/* Brand Logo */}
        <button 
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2.5 sm:gap-3 text-left group focus:outline-none shrink-0"
        >
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden border border-[#E8E2D6] bg-white flex items-center justify-center shadow-sm group-hover:scale-105 transition-all duration-300">
            <img src={logoImg} alt="Straightway Logo" className="w-full h-full object-cover" />
          </div>
          <div>
            <span className="block font-serif-heading text-xs sm:text-sm md:text-base font-bold tracking-tight text-[#12351D] uppercase leading-none">
              {t?.brandName || "STRAIGHTWAY"}
            </span>
            <span className="block text-[9px] sm:text-[10px] md:text-[11px] font-sans-body font-medium tracking-wider text-[#D8A43A] uppercase mt-0.5">
              {t?.brandSubtitle || "Flour & Spice Mills"}
            </span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-5">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`text-xs font-sans-body font-medium transition-colors relative py-1 ${
                activeTab === item.id 
                  ? 'text-[#1D4F2B] font-semibold' 
                  : 'text-[#666666] hover:text-[#1D4F2B]'
              }`}
            >
              {item.label}
              {activeTab === item.id && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#D8A43A] rounded-full" />
              )}
            </button>
          ))}
        </nav>

        {/* Language Switcher & Call CTA */}
        <div className="hidden sm:flex items-center gap-2.5">
          {/* Language Switcher Button */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 bg-[#F6F1E7] hover:bg-[#E8E2D6] text-[#12351D] border border-[#E8E2D6] px-3 py-1.5 rounded-full text-xs font-button transition-all shadow-sm"
            title="Switch Language / ഭാഷ മാറ്റുക"
          >
            <Globe className="w-3.5 h-3.5 text-[#D8A43A]" />
            <span>{lang === 'en' ? 'മലയാളം' : 'English'}</span>
          </button>

          {/* Call CTA */}
          <a
            href="tel:+918714348348"
            className="font-button text-xs bg-[#12351D] hover:bg-[#1D4F2B] text-white px-3.5 py-2 rounded-full flex items-center gap-1.5 transition-all shadow-md"
          >
            <Phone className="w-3.5 h-3.5 text-[#D8A43A]" />
            <span>{t?.phone1 || "+91 8714 348 348"}</span>
          </a>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-2 xl:hidden">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1 bg-[#F6F1E7] text-[#12351D] px-2.5 py-1.5 rounded-full text-xs font-button border border-[#E8E2D6]"
          >
            <Globe className="w-3 h-3 text-[#D8A43A]" />
            <span>{lang === 'en' ? 'മലയാളം' : 'EN'}</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-[#12351D] p-2 rounded-lg hover:bg-[#F6F1E7] transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-[#E8E2D6] px-6 py-6 space-y-3 shadow-2xl max-h-[80vh] overflow-y-auto animate-fadeIn text-left">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`block w-full text-left py-2 text-sm font-medium ${
                activeTab === item.id ? 'text-[#1D4F2B] font-bold border-l-2 border-[#D8A43A] pl-2' : 'text-[#666666]'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-4 border-t border-[#E8E2D6] space-y-2">
            <a
              href="tel:+918714348348"
              className="w-full font-button text-xs sm:text-sm bg-[#12351D] text-white px-4 py-3 rounded-xl flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#D8A43A]" />
              <span>{t?.nav?.callUs || "Call Us"}: {t?.phone1 || "+91 8714 348 348"}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
