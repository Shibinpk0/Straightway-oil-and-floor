import React, { useEffect, useState } from 'react';
import {
  Phone,
  Menu,
  X,
  Globe,
  Truck,
  ChevronRight,
} from 'lucide-react';

import logoImg from '../assets/images/logo.png';
import { translations } from '../translations';

const Navbar = ({ activeTab, setActiveTab, lang, setLang }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [announcementVisible, setAnnouncementVisible] = useState(true);

  const t = translations[lang] || translations.en;

  /*
   * =========================================================
   * NAVIGATION ITEMS
   * =========================================================
   */

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

  /*
   * =========================================================
   * WHATSAPP
   * =========================================================
   */

  const whatsappMessage =
    lang === 'ml'
      ? 'ഹലോ Straightway Mill, നിങ്ങളുടെ ഉൽപ്പന്നങ്ങളെയും സേവനങ്ങളെയും കുറിച്ച് അറിയാൻ ആഗ്രഹിക്കുന്നു.'
      : 'Hello Straightway Mill, I would like to know more about your products and services.';

  const whatsappUrl = `https://wa.me/918714348348?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  /*
   * =========================================================
   * SCROLL HANDLER
   * =========================================================
   */

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrolled(currentScrollY > 45);

      /*
       * Hide navbar when scrolling down.
       * Show it again when scrolling up.
       */
      if (!mobileMenuOpen) {
        if (
          currentScrollY > lastScrollY &&
          currentScrollY > 140
        ) {
          setVisible(false);
        } else {
          setVisible(true);
        }
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [mobileMenuOpen]);

  /*
   * =========================================================
   * CLOSE MOBILE MENU WHEN DESKTOP
   * =========================================================
   */

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  /*
   * =========================================================
   * BODY SCROLL LOCK
   * =========================================================
   */

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  /*
   * =========================================================
   * NAVIGATION
   * =========================================================
   */

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

    if (!element) return;

    const isMobile = window.innerWidth < 640;

    const offset = isMobile ? 80 : 96;

    const elementPosition =
      element.getBoundingClientRect().top +
      window.scrollY -
      offset;

    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth',
    });
  };

  /*
   * =========================================================
   * LANGUAGE
   * =========================================================
   */

  const toggleLanguage = () => {
    setLang(lang === 'en' ? 'ml' : 'en');
  };

  /*
   * =========================================================
   * ANNOUNCEMENT
   * =========================================================
   */

  const closeAnnouncement = () => {
    setAnnouncementVisible(false);
  };

  /*
   * =========================================================
   * HEADER
   * =========================================================
   */

  return (
    <header
      className={`
        fixed
        top-0
        left-0
        right-0
        z-[100]
        transition-transform
        duration-500
        ease-out

        ${
          visible
            ? 'translate-y-0'
            : '-translate-y-full'
        }
      `}
    >

      {/* =====================================================
          ANNOUNCEMENT BAR
          ===================================================== */}

      {announcementVisible && (
        <div
          className={`
            relative
            z-[101]
            w-full
            overflow-hidden
            transition-all
            duration-300

            ${
              scrolled
                ? `
                  bg-[#29332B]
                  border-b
                  border-white/10
                `
                : `
                  bg-[#26302A]/90
                  border-b
                  border-white/10
                  backdrop-blur-md
                `
            }
          `}
        >

          <div
            className="
              mx-auto
              flex
              min-h-[34px]
              sm:min-h-[38px]
              max-w-[1400px]
              items-center
              justify-center
              px-10
              sm:px-14
              py-1.5
            "
          >

            <div
              className="
                flex
                min-w-0
                items-center
                justify-center
                gap-1.5
                sm:gap-2
                text-center
              "
            >

              <Truck
                className="
                  h-3.5
                  w-3.5
                  shrink-0
                  text-[#D59672]
                  sm:h-4
                  sm:w-4
                "
              />

              <span
                className="
                  font-sans-body
                  text-[9px]
                  font-semibold
                  leading-tight
                  tracking-[0.01em]
                  text-white/95
                  sm:text-[10px]
                  md:text-[11px]
                "
              >
                {lang === 'ml'
                  ? 'കരുലായി & വക്കീൽപ്പാടിയിൽ ₹500-ന് മുകളിലുള്ള ഓർഡറുകൾക്ക് സൗജന്യ ഹോം ഡെലിവറി'
                  : 'Free Home Delivery in Karulai & Vakkeelpadi for orders above ₹500'}
              </span>

              <ChevronRight
                className="
                  hidden
                  h-3
                  w-3
                  shrink-0
                  text-[#D6B36B]
                  sm:block
                "
              />

            </div>

            {/* Close */}
            <button
              type="button"
              onClick={closeAnnouncement}
              aria-label="Close announcement"
              className="
                absolute
                right-2
                flex
                h-6
                w-6
                items-center
                justify-center
                rounded-full
                text-white/60
                transition-all
                duration-200
                hover:bg-white/10
                hover:text-white
                sm:right-5
              "
            >
              <X className="h-3.5 w-3.5" />
            </button>

          </div>
        </div>
      )}

      {/* =====================================================
          MAIN NAVBAR
          ===================================================== */}

      <div
        className={`
          relative
          z-[100]
          transition-all
          duration-500
          ease-out

          ${
            scrolled
              ? `
                border-b
                border-[#D9D0BE]/70
                bg-[#F7F3E8]/96
                shadow-[0_8px_30px_rgba(38,48,42,0.10)]
                backdrop-blur-xl
              `
              : `
                border-b
                border-white/10
                bg-gradient-to-b
                from-[#172019]/35
                via-[#26302A]/10
                to-transparent
                backdrop-blur-[1px]
              `
          }
        `}
      >

        <div
          className="
            mx-auto
            flex
            h-[66px]
            sm:h-[72px]
            lg:h-[78px]
            max-w-[1400px]
            items-center
            justify-between
            px-4
            sm:px-7
            lg:px-10
            xl:px-12
          "
        >

          {/* =================================================
              LOGO
              ================================================= */}

          <button
            type="button"
            onClick={() => handleNavClick('home')}
            className="
              group
              flex
              shrink-0
              items-center
              gap-2.5
              rounded-lg
              text-left
              focus:outline-none
              focus-visible:ring-2
              focus-visible:ring-[#C9825B]
            "
          >

            {/* Logo */}
            <div
              className={`
                flex
                h-10
                w-10
                shrink-0
                items-center
                justify-center
                overflow-hidden
                rounded-full
                border
                bg-[#FFFDF7]
                shadow-[0_3px_12px_rgba(0,0,0,0.16)]
                transition-all
                duration-300

                sm:h-11
                sm:w-11
                md:h-11
                md:w-11

                ${
                  scrolled
                    ? 'border-[#D9D0BE]'
                    : 'border-white/80'
                }

                group-hover:scale-105
              `}
            >
              <img
                src={logoImg}
                alt="Straightway Flour & Spice Mills"
                className="
                  h-full
                  w-full
                  object-cover
                "
                width="44"
                height="44"
              />
            </div>

            {/* Brand */}
            <div className="flex flex-col justify-center">

              <span
                className={`
                  block
                  font-serif-heading
                  text-[12px]
                  font-bold
                  uppercase
                  leading-none
                  tracking-tight
                  transition-all
                  duration-500

                  sm:text-sm
                  md:text-base

                  ${
                    scrolled
                      ? 'text-[#26302A]'
                      : `
                        text-white
                        drop-shadow-[0_1px_4px_rgba(0,0,0,0.65)]
                      `
                  }
                `}
              >
                {t?.brandName || 'STRAIGHTWAY'}
              </span>

              <span
                className="
                  mt-1
                  block
                  font-sans-body
                  text-[7px]
                  font-semibold
                  uppercase
                  leading-none
                  tracking-[0.16em]
                  text-[#D08A68]

                  sm:text-[9px]
                  md:text-[10px]
                "
              >
                {t?.brandSubtitle || 'Flour & Spice Mills'}
              </span>

            </div>

          </button>

          {/* =================================================
              DESKTOP NAVIGATION
              ================================================= */}

          <nav
            className="
              hidden
              items-center
              gap-1
              xl:flex
            "
            aria-label="Main navigation"
          >

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
                    group
                    relative
                    rounded-full
                    px-3.5
                    py-2
                    font-sans-body
                    text-[12px]
                    font-semibold
                    transition-all
                    duration-300

                    ${
                      scrolled
                        ? isActive
                          ? `
                            bg-[#EAE2D2]
                            text-[#667A61]
                          `
                          : `
                            text-[#26302A]/80
                            hover:bg-[#EAE2D2]/60
                            hover:text-[#667A61]
                          `
                        : isActive
                          ? `
                            bg-white/15
                            text-white
                          `
                          : `
                            text-white
                            drop-shadow-[0_1px_3px_rgba(0,0,0,0.65)]
                            hover:bg-white/15
                            hover:text-white
                          `
                    }
                  `}
                >
                  {item.label}

                  <span
                    className={`
                      absolute
                      bottom-[3px]
                      left-1/2
                      h-[2px]
                      -translate-x-1/2
                      rounded-full
                      bg-[#C9825B]
                      transition-all
                      duration-300

                      ${
                        isActive
                          ? 'w-4 opacity-100'
                          : `
                            w-0
                            opacity-0
                            group-hover:w-4
                            group-hover:opacity-100
                          `
                      }
                    `}
                  />
                </button>
              );
            })}

          </nav>

          {/* =================================================
              DESKTOP ACTIONS
              ================================================= */}

          <div
            className="
              hidden
              items-center
              gap-2
              xl:flex
            "
          >

            {/* Language */}
            <button
              type="button"
              onClick={toggleLanguage}
              aria-label="Switch language"
              className={`
                flex
                items-center
                gap-1.5
                rounded-full
                border
                px-3
                py-2
                font-button
                text-[10px]
                font-semibold
                shadow-sm
                backdrop-blur-md
                transition-all
                duration-300

                ${
                  scrolled
                    ? `
                      border-[#D9D0BE]
                      bg-[#FFFDF7]/90
                      text-[#26302A]
                      hover:bg-[#EAE2D2]
                    `
                    : `
                      border-white/35
                      bg-black/15
                      text-white
                      hover:bg-white/15
                    `
                }
              `}
            >

              <Globe
                className="
                  h-3.5
                  w-3.5
                  text-[#D08A68]
                "
              />

              <span>
                {lang === 'en'
                  ? 'മലയാളം'
                  : 'English'}
              </span>

            </button>

            {/* Phone */}
            <a
              href="tel:+918714348348"
              aria-label="Call Straightway Mill"
              className="
                flex
                items-center
                gap-1.5
                rounded-full
                bg-[#667A61]
                px-5
                py-2.5
                font-button
                text-[11px]
                font-bold
                text-white
                shadow-lg
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-[#596B54]
              "
            >
              <Phone className="h-4 w-4" />

              <span>
                {t?.phone1 || '+91 8714 348 348'}
              </span>
            </a>

          </div>

          {/* =================================================
              MOBILE ACTIONS

              IMPORTANT:
              NO CALL BUTTON HERE.
              ================================================= */}

          <div
            className="
              flex
              items-center
              gap-1.5
              xl:hidden
            "
          >

            {/* Language */}
            <button
              type="button"
              onClick={toggleLanguage}
              aria-label="Switch language"
              className={`
                flex
                h-9
                items-center
                gap-1
                rounded-full
                border
                px-2.5
                font-button
                text-[9px]
                font-bold
                shadow-[0_2px_10px_rgba(0,0,0,0.14)]
                backdrop-blur-md
                transition-all

                ${
                  scrolled
                    ? `
                      border-[#D9D0BE]
                      bg-[#FFFDF7]/90
                      text-[#26302A]
                    `
                    : `
                      border-white/45
                      bg-black/20
                      text-white
                    `
                }
              `}
            >

              <Globe
                className="
                  h-4
                  w-4
                  text-[#D08A68]
                "
              />

              <span>
                {lang === 'en'
                  ? 'മലയാളം'
                  : 'EN'}
              </span>

            </button>

            {/* Menu */}
            <button
              type="button"
              onClick={() =>
                setMobileMenuOpen(
                  !mobileMenuOpen
                )
              }
              aria-label={
                mobileMenuOpen
                  ? 'Close navigation menu'
                  : 'Open navigation menu'
              }
              aria-expanded={mobileMenuOpen}
              className={`
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-xl
                transition-all
                duration-300

                ${
                  scrolled
                    ? `
                      text-[#26302A]
                      hover:bg-[#EAE2D2]
                    `
                    : `
                      bg-black/10
                      text-white
                      drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)]
                      hover:bg-white/10
                    `
                }
              `}
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>

          </div>

        </div>
      </div>

      {/* =====================================================
          MOBILE MENU
          ===================================================== */}

      {mobileMenuOpen && (
        <div
          className="
            absolute
            left-0
            right-0
            top-full
            z-[110]
            max-h-[calc(100vh-100px)]
            overflow-y-auto
            border-b
            border-[#D9D0BE]
            bg-[#F7F3E8]/98
            px-4
            pb-5
            pt-3
            shadow-[0_20px_45px_rgba(38,48,42,0.18)]
            backdrop-blur-xl
            xl:hidden
          "
        >

          <div className="mx-auto max-w-lg">

            {/* Navigation */}
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
                      flex
                      w-full
                      items-center
                      justify-between
                      rounded-xl
                      px-4
                      py-3.5
                      text-left
                      font-sans-body
                      text-sm
                      transition-all
                      duration-200

                      ${
                        isActive
                          ? `
                            bg-[#EAE2D2]
                            font-bold
                            text-[#667A61]
                          `
                          : `
                            text-[#26302A]/80
                            hover:bg-[#EAE2D2]/60
                            hover:text-[#667A61]
                          `
                      }
                    `}
                  >

                    <span className="flex items-center gap-3">

                      {isActive && (
                        <span
                          className="
                            h-1.5
                            w-1.5
                            rounded-full
                            bg-[#C9825B]
                          "
                        />
                      )}

                      {item.label}

                    </span>

                    <ChevronRight
                      className={`
                        h-4
                        w-4

                        ${
                          isActive
                            ? 'text-[#C9825B]'
                            : 'text-[#A7A092]'
                        }
                      `}
                    />

                  </button>
                );
              })}

            </div>

            {/* Mobile actions */}
            <div
              className="
                mt-4
                border-t
                border-[#D9D0BE]
                pt-4
              "
            >

              {/* Call */}
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
                  py-3.5
                  font-button
                  text-sm
                  font-bold
                  text-white
                  shadow-md
                  transition-all
                  duration-200
                  hover:bg-[#596B54]
                  active:scale-[0.98]
                "
              >

                <Phone className="h-4 w-4" />

                <span>
                  {t?.nav?.callUs || 'Call the Mill'}
                  {' · '}
                  {t?.phone1 ||
                    '+91 8714 348 348'}
                </span>

              </a>

              {/* WhatsApp */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  mt-2
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  border
                  border-[#25D366]/20
                  bg-[#25D366]/10
                  px-4
                  py-3
                  font-button
                  text-xs
                  font-bold
                  text-[#168B46]
                  transition-all
                  duration-200
                  hover:bg-[#25D366]/15
                  active:scale-[0.98]
                "
              >

                <span
                  className="
                    flex
                    h-5
                    w-5
                    items-center
                    justify-center
                    rounded-full
                    bg-[#25D366]
                    text-[9px]
                    font-bold
                    text-white
                  "
                >
                  W
                </span>

                <span>
                  {lang === 'ml'
                    ? 'വാട്ട്‌സ്ആപ്പിൽ ഓർഡർ ചെയ്യുക'
                    : 'Order on WhatsApp'}
                </span>

              </a>

            </div>

          </div>
        </div>
      )}

    </header>
  );
};

export default Navbar;