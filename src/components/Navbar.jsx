import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Globe } from 'lucide-react';
import logoImg from '../assets/images/logo.png';
import { translations } from '../translations';

const Navbar = ({ activeTab, setActiveTab, lang, setLang }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const t = translations[lang] || translations.en;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (!mobileMenuOpen) {
        if (
          currentScrollPos > prevScrollPos &&
          currentScrollPos > 120
        ) {
          setVisible(false);
        } else {
          setVisible(true);
        }
      }

      setScrolled(currentScrollPos > 30);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos, mobileMenuOpen]);

  const navItems = [
    {
      id: 'home',
      label: t?.nav?.home || 'Home',
    },
    {
      id: 'products',
      label: t?.nav?.products || 'Products',
    },
    {
      id: 'how-it-works',
      label: t?.nav?.howItWorks || 'How to Order',
    },
    {
      id: 'bulk',
      label: t?.nav?.bulk || 'Wholesale',
    },
    {
      id: 'about',
      label: t?.nav?.about || 'About Us',
    },
    {
      id: 'contact',
      label: t?.nav?.contact || 'Contact',
    },
  ];

  const handleNavClick = (id) => {
    setActiveTab(id);
    setMobileMenuOpen(false);

    if (id === 'home') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
      return;
    }

    const element = document.getElementById(id);

    if (element) {
      const navbarOffset = 80;

      const elementPosition =
        element.getBoundingClientRect().top +
        window.scrollY -
        navbarOffset;

      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      });
    }
  };

  const toggleLanguage = () => {
    setLang(lang === 'en' ? 'ml' : 'en');
  };

  return (
    <header
      className={`
        fixed
        inset-x-0
        top-0
        z-50
        h-[80px]

        transition-all
        duration-500
        ease-out

        ${
          visible
            ? 'translate-y-0'
            : '-translate-y-full'
        }

        ${
          scrolled
            ? `
              bg-[#F7F3E8]/95
              backdrop-blur-xl
              border-b
              border-[#D9D0BE]/70
              shadow-[0_8px_30px_rgba(38,48,42,0.08)]
            `
            : `
              bg-gradient-to-b
              from-[#F7F3E8]/95
              via-[#F7F3E8]/65
              to-transparent
              border-transparent
            `
        }
      `}
    >
      <div
        className="
          mx-auto
          flex
          h-full
          max-w-[1360px]
          items-center
          justify-between
          px-5
          sm:px-8
          lg:px-12
        "
      >

        {/* =====================================================
            LOGO
        ===================================================== */}
        <button
          type="button"
          onClick={() => handleNavClick('home')}
          className="
            group
            flex
            shrink-0
            items-center
            gap-2.5
            text-left
            focus:outline-none
          "
        >
          <div
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              overflow-hidden
              rounded-full
              border
              border-[#D9D0BE]
              bg-[#FFFDF7]
              shadow-sm
              transition-all
              duration-300
              group-hover:scale-105
              group-hover:shadow-md
              sm:h-11
              sm:w-11
            "
          >
            <img
              src={logoImg}
              alt="Straightway Logo"
              className="h-full w-full object-cover"
            />
          </div>

          <div>
            <span
              className={`
                block
                font-serif-heading
                text-xs
                font-bold
                uppercase
                leading-none
                tracking-tight
                transition-colors
                duration-300
                sm:text-sm
                md:text-base

                ${
                  scrolled
                    ? 'text-[#26302A]'
                    : 'text-[#26302A]'
                }
              `}
            >
              {t?.brandName || 'STRAIGHTWAY'}
            </span>

            <span
              className="
                mt-0.5
                block
                font-sans-body
                text-[9px]
                font-medium
                uppercase
                tracking-[0.16em]
                text-[#C9825B]
                sm:text-[10px]
                md:text-[11px]
              "
            >
              {t?.brandSubtitle || 'Flour & Spice Mills'}
            </span>
          </div>
        </button>

        {/* =====================================================
            DESKTOP NAVIGATION
        ===================================================== */}
        <nav className="hidden items-center gap-6 xl:flex">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item.id)}
                className={`
                  group
                  relative
                  py-2
                  font-sans-body
                  text-xs
                  font-medium
                  transition-colors
                  duration-300

                  ${
                    isActive
                      ? 'text-[#667A61]'
                      : 'text-[#26302A]/65 hover:text-[#667A61]'
                  }
                `}
              >
                {item.label}

                <span
                  className={`
                    absolute
                    bottom-0
                    left-1/2
                    h-[2px]
                    -translate-x-1/2
                    rounded-full
                    bg-[#C9825B]
                    transition-all
                    duration-300

                    ${
                      isActive
                        ? 'w-full opacity-100'
                        : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'
                    }
                  `}
                />
              </button>
            );
          })}
        </nav>

        {/* =====================================================
            DESKTOP ACTIONS
        ===================================================== */}
        <div className="hidden items-center gap-2.5 sm:flex">

          <button
            type="button"
            onClick={toggleLanguage}
            className="
              flex
              items-center
              gap-1.5
              rounded-full
              border
              border-[#D9D0BE]
              bg-[#EAE2D2]/80
              px-3
              py-1.5
              font-button
              text-xs
              text-[#26302A]
              shadow-sm
              backdrop-blur-sm
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-[#E1D9C9]
            "
            title="Switch Language / ഭാഷ മാറ്റുക"
          >
            <Globe className="h-3.5 w-3.5 text-[#C9825B]" />

            <span>
              {lang === 'en' ? 'മലയാളം' : 'English'}
            </span>
          </button>

          <a
            href="tel:+918714348348"
            className="
              flex
              items-center
              gap-1.5
              rounded-full
              bg-[#667A61]
              px-4
              py-2
              font-button
              text-xs
              font-medium
              text-white
              shadow-md
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-[#596B54]
              hover:shadow-lg
            "
          >
            <Phone className="h-3.5 w-3.5 text-white" />

            <span>
              {t?.phone1 || '+91 8714 348 348'}
            </span>
          </a>

        </div>

        {/* =====================================================
            MOBILE ACTIONS
        ===================================================== */}
        <div className="flex items-center gap-2 xl:hidden">

          <button
            type="button"
            onClick={toggleLanguage}
            className="
              flex
              items-center
              gap-1
              rounded-full
              border
              border-[#D9D0BE]
              bg-[#EAE2D2]/90
              px-2.5
              py-1.5
              font-button
              text-xs
              text-[#26302A]
              shadow-sm
            "
          >
            <Globe className="h-3 w-3 text-[#C9825B]" />

            <span>
              {lang === 'en' ? 'മലയാളം' : 'EN'}
            </span>
          </button>

          <button
            type="button"
            onClick={() =>
              setMobileMenuOpen(!mobileMenuOpen)
            }
            className="
              rounded-xl
              p-2
              text-[#26302A]
              transition-colors
              hover:bg-[#EAE2D2]
            "
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

        </div>

      </div>

      {/* =======================================================
          MOBILE MENU
      ======================================================= */}
      {mobileMenuOpen && (
        <div
          className="
            absolute
            inset-x-0
            top-[80px]
            border-b
            border-[#D9D0BE]
            bg-[#F7F3E8]/98
            px-6
            py-6
            shadow-[0_20px_40px_rgba(38,48,42,0.12)]
            backdrop-blur-xl
            xl:hidden
          "
        >
          <div className="space-y-1">

            {navItems.map((item) => {
              const isActive =
                activeTab === item.id;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() =>
                    handleNavClick(item.id)
                  }
                  className={`
                    block
                    w-full
                    rounded-lg
                    py-3
                    text-left
                    font-sans-body
                    text-sm
                    transition-all

                    ${
                      isActive
                        ? `
                          border-l-2
                          border-[#C9825B]
                          bg-[#EAE2D2]/60
                          pl-4
                          font-bold
                          text-[#667A61]
                        `
                        : `
                          pl-3
                          text-[#26302A]/70
                          hover:bg-[#EAE2D2]/50
                          hover:text-[#667A61]
                        `
                    }
                  `}
                >
                  {item.label}
                </button>
              );
            })}

          </div>

          <div
            className="
              mt-4
              border-t
              border-[#D9D0BE]
              pt-4
            "
          >
            <a
              href="tel:+918714348348"
              className="
                flex
                w-full
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-[#667A61]
                px-4
                py-3
                font-button
                text-sm
                font-medium
                text-white
                shadow-md
                transition-all
                hover:bg-[#596B54]
              "
            >
              <Phone className="h-4 w-4" />

              <span>
                {t?.nav?.callUs || 'Call Us'}:{' '}
                {t?.phone1 || '+91 8714 348 348'}
              </span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;