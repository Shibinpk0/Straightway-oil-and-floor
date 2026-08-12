import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Globe } from 'lucide-react';
import logoImg from '../assets/images/logo.png';
import { translations } from '../translations';

const Navbar = ({ activeTab, setActiveTab, lang, setLang }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const t = translations[lang] || translations.en;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      // Determine if we should show/hide navbar (only if mobile menu is closed)
      if (!mobileMenuOpen) {
        if (currentScrollPos > prevScrollPos && currentScrollPos > 120) {
          // Scrolling DOWN & past 120px -> Hide
          setVisible(false);
        } else {
          // Scrolling UP -> Show
          setVisible(true);
        }
      }

      // Add shadow if scrolled past 20px
      setScrolled(currentScrollPos > 20);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, mobileMenuOpen]);

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
    // Added transition-transform and translate-y logic
    <header className={`sticky top-0 z-50 h-[80px] bg-[#F7F3E8] transition-all duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'} ${scrolled ? 'shadow-nav-scroll border-b border-[#E1D9C9]/60 bg-[#F7F3E8]/95 backdrop-blur-md' : 'border-b border-[#E1D9C9]/40'}`}>
      <div className="max-w-[1280px] mx-auto h-full px-4 sm:px-6 flex items-center justify-between">
        
        <button 
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2.5 sm:gap-3 text-left group focus:outline-none shrink-0"
        >
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden border border-[#E1D9C9] bg-white flex items-center justify-center shadow-sm group-hover:scale-105 transition-all duration-300">
            <img src={logoImg} alt="Straightway Logo" className="w-full h-full object-cover" />
          </div>
          <div>
            <span className="block font-serif-heading text-xs sm:text-sm md:text-base font-bold tracking-tight text-[#29332B] uppercase leading-none">
              {t?.brandName || "STRAIGHTWAY"}
            </span>
            <span className="block text-[9px] sm:text-[10px] md:text-[11px] font-sans-body font-medium tracking-wider text-[#C7A15A] uppercase mt-0.5">
              {t?.brandSubtitle || "Flour & Spice Mills"}
            </span>
          </div>
        </button>

        <nav className="hidden xl:flex items-center gap-5">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`text-xs font-sans-body font-medium transition-colors relative py-1 ${
                activeTab === item.id 
                  ? 'text-[#667A61] font-semibold' 
                  : 'text-[#29332B]/60 hover:text-[#667A61]'
              }`}
            >
              {item.label}
              {activeTab === item.id && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#B86F52] rounded-full" />
              )}
            </button>
          ))}
        </nav>

        <div className="hidden sm:flex items-center gap-2.5">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 bg-[#EAE2D2] hover:bg-[#E1D9C9] text-[#29332B] border border-[#E1D9C9] px-3 py-1.5 rounded-full text-xs font-button transition-all shadow-sm"
            title="Switch Language / ഭാഷ മാറ്റുക"
          >
            <Globe className="w-3.5 h-3.5 text-[#B86F52]" />
            <span>{lang === 'en' ? 'മലയാളം' : 'English'}</span>
          </button>

          <a
            href="tel:+918714348348"
            className="font-button text-xs bg-[#667A61] hover:bg-[#52644E] text-white px-3.5 py-2 rounded-full flex items-center gap-1.5 transition-all shadow-md"
          >
            <Phone className="w-3.5 h-3.5 text-[#FFFDF7]" />
            <span>{t?.phone1 || "+91 8714 348 348"}</span>
          </a>
        </div>

        <div className="flex items-center gap-2 xl:hidden">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1 bg-[#EAE2D2] text-[#29332B] px-2.5 py-1.5 rounded-full text-xs font-button border border-[#E1D9C9]"
          >
            <Globe className="w-3 h-3 text-[#B86F52]" />
            <span>{lang === 'en' ? 'മലയാളം' : 'EN'}</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-[#29332B] p-2 rounded-lg hover:bg-[#EAE2D2] transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#F7F3E8] border-b border-[#E1D9C9] px-6 py-6 space-y-3 shadow-2xl max-h-[80vh] overflow-y-auto animate-fadeIn text-left">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`block w-full text-left py-2 text-sm font-medium ${
                activeTab === item.id ? 'text-[#667A61] font-bold border-l-2 border-[#B86F52] pl-2' : 'text-[#29332B]/70'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-4 border-t border-[#E1D9C9] space-y-2">
            <a
              href="tel:+918714348348"
              className="w-full font-button text-xs sm:text-sm bg-[#667A61] text-white px-4 py-3 rounded-xl flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#FFFDF7]" />
              <span>{t?.nav?.callUs || "Call Us"}: {t?.phone1 || "+91 8714 348 348"}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;