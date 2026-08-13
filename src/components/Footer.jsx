import React from 'react';
import {
  Phone,
  MapPin,
  Clock,
  ArrowUpRight,
  ChevronRight,
} from 'lucide-react';

import logoImg from '../assets/images/logo.png';
import { translations } from '../translations';

const Footer = ({ setActiveTab, lang }) => {
  const t = translations[lang] || translations.en;

  const handleNavClick = (id) => {
    setActiveTab(id);

    const el = document.getElementById(id);

    if (el) {
      el.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  const quickLinks = [
    {
      id: 'home',
      label: t?.nav?.home || 'Home',
    },
    {
      id: 'products',
      label: t?.nav?.products || 'Products & Milling',
    },
    {
      id: 'how-it-works',
      label: t?.nav?.howItWorks || 'How to Order',
    },
    {
      id: 'bulk',
      label: t?.nav?.bulk || 'Wholesale & Bulk',
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

  const products = [
    {
      id: 'products',
      label:
        lang === 'ml'
          ? 'ശുദ്ധമായ നാടൻ വെളിച്ചെണ്ണ'
          : 'Pure Country Coconut Oil',
    },
    {
      id: 'products',
      label:
        lang === 'ml'
          ? 'കഴുകി ഉണക്കിയ മസാലപ്പൊടികൾ'
          : 'Washed & Dried Spice Powders',
    },
    {
      id: 'products',
      label:
        lang === 'ml'
          ? 'വറുത്ത അരിപ്പൊടി & പുട്ടുപൊടി'
          : 'Roasted Rice Flour / Puttu Podi',
    },
    {
      id: 'products',
      label:
        lang === 'ml'
          ? 'വറുത്തു പൊടിച്ച ആട്ട'
          : 'Roasted Atta Wheat Flour',
    },
    {
      id: 'bulk',
      label:
        lang === 'ml'
          ? 'ബൾക്ക് & വിതരണ സേവനങ്ങൾ'
          : 'Bulk & Commercial Orders',
    },
  ];

  return (
    <footer
      className="
        relative
        overflow-hidden
        bg-[#26302A]
        text-white
      "
    >

      {/* =========================================================
          TOP DECORATIVE LINE
      ========================================================= */}

      <div
        className="
          h-px
          w-full
          bg-gradient-to-r
          from-transparent
          via-[#C9825B]/50
          to-transparent
        "
      />

      {/* =========================================================
          BACKGROUND DECORATION
      ========================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          -left-40
          top-20
          h-[420px]
          w-[420px]
          rounded-full
          bg-[#667A61]/[0.08]
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          bottom-0
          h-[350px]
          w-[350px]
          rounded-full
          bg-[#C9825B]/[0.05]
          blur-3xl
        "
      />

      {/* =========================================================
          MAIN FOOTER
      ========================================================= */}

      <div
        className="
          relative
          mx-auto
          max-w-[1280px]
          px-5
          py-12
          sm:px-8
          sm:py-14
          lg:px-12
          lg:py-16
        "
      >

        <div
          className="
            grid
            gap-10
            lg:grid-cols-12
            lg:gap-8
          "
        >

          {/* =====================================================
              BRAND
          ===================================================== */}

          <div
            className="
              lg:col-span-4
            "
          >

            <button
              type="button"
              onClick={() => handleNavClick('home')}
              className="
                group
                flex
                items-center
                gap-3
                text-left
              "
            >

              <div
                className="
                  flex
                  h-12
                  w-12
                  shrink-0
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-full
                  border
                  border-[#E7D9B8]/30
                  bg-[#F7F3E8]
                  shadow-[0_8px_25px_rgba(0,0,0,0.18)]
                  transition-transform
                  duration-300
                  group-hover:scale-105
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
                  className="
                    block
                    font-serif-heading
                    text-lg
                    font-bold
                    uppercase
                    tracking-tight
                    leading-none
                    text-white
                  "
                >
                  {t?.brandName || 'STRAIGHTWAY'}
                </span>

                <span
                  className="
                    mt-1
                    block
                    font-sans-body
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.16em]
                    text-[#E7D9B8]
                  "
                >
                  {t?.brandSubtitle || 'Flour & Spice Mills'}
                </span>
              </div>

            </button>

            {/* Tagline */}

            <p
              className="
                mt-6
                max-w-[340px]
                font-serif-heading
                text-lg
                italic
                leading-relaxed
                text-[#F7F3E8]/90
              "
            >
              "{t?.footer?.tagline ||
                'Pure Taste. Traditional Care. Delivered Fresh.'}"
            </p>

            <p
              className="
                mt-3
                max-w-[370px]
                font-sans-body
                text-xs
                leading-6
                text-[#F7F3E8]/55
              "
            >
              {t?.hero?.subtitle ||
                'Experience 100% pure coconut oil, hot-air dried spices, and custom milling.'}
            </p>

            {/* Local identity */}

            <div
              className="
                mt-6
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-white/10
                bg-white/[0.04]
                px-3
                py-2
              "
            >
              <span
                className="
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-[#C9825B]
                  shadow-[0_0_8px_rgba(201,130,91,0.5)]
                "
              />

              <span
                className="
                  font-sans-body
                  text-[10px]
                  font-medium
                  tracking-wide
                  text-[#F7F3E8]/60
                "
              >
                {lang === 'ml'
                  ? 'കരുളായിയിലെ പ്രാദേശിക മിൽ'
                  : 'A local mill in Karulai'}
              </span>
            </div>

          </div>

          {/* =====================================================
              QUICK LINKS
          ===================================================== */}

          <div className="lg:col-span-2">

            <h3
              className="
                mb-5
                font-sans-body
                text-[10px]
                font-bold
                uppercase
                tracking-[0.2em]
                text-[#E7D9B8]
              "
            >
              {t?.footer?.quickLinks || 'Quick Links'}
            </h3>

            <ul className="space-y-2.5">

              {quickLinks.map((item) => (
                <li key={item.id + item.label}>

                  <button
                    type="button"
                    onClick={() => handleNavClick(item.id)}
                    className="
                      group
                      flex
                      items-center
                      gap-1
                      font-sans-body
                      text-xs
                      text-[#F7F3E8]/60
                      transition-colors
                      duration-200
                      hover:text-[#E7D9B8]
                    "
                  >
                    <ChevronRight
                      className="
                        h-3
                        w-3
                        opacity-0
                        -translate-x-1
                        text-[#C9825B]
                        transition-all
                        duration-200
                        group-hover:translate-x-0
                        group-hover:opacity-100
                      "
                    />

                    <span>{item.label}</span>
                  </button>

                </li>
              ))}

            </ul>

          </div>

          {/* =====================================================
              PRODUCTS
          ===================================================== */}

          <div className="lg:col-span-3">

            <h3
              className="
                mb-5
                font-sans-body
                text-[10px]
                font-bold
                uppercase
                tracking-[0.2em]
                text-[#E7D9B8]
              "
            >
              {t?.footer?.ourProducts ||
                'Products & Services'}
            </h3>

            <ul className="space-y-2.5">

              {products.map((item, index) => (
                <li key={`${item.label}-${index}`}>

                  <button
                    type="button"
                    onClick={() => handleNavClick(item.id)}
                    className="
                      group
                      flex
                      items-start
                      gap-1
                      text-left
                      font-sans-body
                      text-xs
                      leading-5
                      text-[#F7F3E8]/60
                      transition-colors
                      duration-200
                      hover:text-[#E7D9B8]
                    "
                  >
                    <ChevronRight
                      className="
                        mt-1
                        h-3
                        w-3
                        shrink-0
                        text-[#C9825B]
                        opacity-0
                        -translate-x-1
                        transition-all
                        duration-200
                        group-hover:translate-x-0
                        group-hover:opacity-100
                      "
                    />

                    <span>{item.label}</span>
                  </button>

                </li>
              ))}

            </ul>

          </div>

          {/* =====================================================
              CONTACT
          ===================================================== */}

          <div className="lg:col-span-3">

            <h3
              className="
                mb-5
                font-sans-body
                text-[10px]
                font-bold
                uppercase
                tracking-[0.2em]
                text-[#E7D9B8]
              "
            >
              {t?.footer?.contactInfo || 'Contact & Visit'}
            </h3>

            <div className="space-y-4">

              {/* Address */}

              <div className="flex items-start gap-3">

                <div
                  className="
                    flex
                    h-8
                    w-8
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    bg-[#667A61]/15
                  "
                >
                  <MapPin
                    className="
                      h-4
                      w-4
                      text-[#A8B5A0]
                    "
                  />
                </div>

                <div>

                  <p
                    className="
                      font-sans-body
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-wider
                      text-[#F7F3E8]/35
                    "
                  >
                    {lang === 'ml'
                      ? 'വിലാസം'
                      : 'Visit us'}
                  </p>

                  <p
                    className="
                      mt-1
                      font-sans-body
                      text-xs
                      leading-5
                      text-[#F7F3E8]/65
                    "
                  >
                    {t?.contact?.addressText ||
                      'Pulliyil, Nilambur - Karulai Rd, Vakkeelpadi, Karulai'}
                  </p>

                </div>

              </div>

              {/* Phone */}

              <div className="flex items-start gap-3">

                <div
                  className="
                    flex
                    h-8
                    w-8
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    bg-[#C9825B]/10
                  "
                >
                  <Phone
                    className="
                      h-4
                      w-4
                      text-[#C9825B]
                    "
                  />
                </div>

                <div>

                  <p
                    className="
                      font-sans-body
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-wider
                      text-[#F7F3E8]/35
                    "
                  >
                    {lang === 'ml'
                      ? 'ഫോൺ'
                      : 'Call the mill'}
                  </p>

                  <a
                    href="tel:+918714348348"
                    className="
                      mt-1
                      flex
                      items-center
                      gap-1
                      font-sans-body
                      text-xs
                      font-medium
                      text-[#F7F3E8]/70
                      transition-colors
                      hover:text-[#E7D9B8]
                    "
                  >
                    {t?.phone1 || '+91 8714 348 348'}

                    <ArrowUpRight
                      className="
                        h-3
                        w-3
                        text-[#C9825B]
                      "
                    />
                  </a>

                  <a
                    href="tel:+919447534834"
                    className="
                      mt-0.5
                      block
                      font-sans-body
                      text-xs
                      text-[#F7F3E8]/50
                      transition-colors
                      hover:text-[#E7D9B8]
                    "
                  >
                    {t?.phone2 || '+91 9447 534 834'}
                  </a>

                </div>

              </div>

              {/* Hours */}

              <div className="flex items-start gap-3">

                <div
                  className="
                    flex
                    h-8
                    w-8
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    bg-[#667A61]/15
                  "
                >
                  <Clock
                    className="
                      h-4
                      w-4
                      text-[#A8B5A0]
                    "
                  />
                </div>

                <div>

                  <p
                    className="
                      font-sans-body
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-wider
                      text-[#F7F3E8]/35
                    "
                  >
                    {lang === 'ml'
                      ? 'പ്രവർത്തന സമയം'
                      : 'Opening hours'}
                  </p>

                  <p
                    className="
                      mt-1
                      font-sans-body
                      text-xs
                      leading-5
                      text-[#F7F3E8]/65
                    "
                  >
                    {t?.workingHours?.days ||
                      'Monday - Saturday'}
                    <br />
                    8:30 AM – 6:00 PM
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* =======================================================
            DIVIDER
        ======================================================= */}

        <div
          className="
            my-10
            h-px
            bg-gradient-to-r
            from-transparent
            via-white/10
            to-transparent
          "
        />

        {/* =======================================================
            BOTTOM BAR
        ======================================================= */}

        <div
          className="
            flex
            flex-col
            items-start
            gap-3
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >

          <p
            className="
              font-sans-body
              text-[10px]
              leading-5
              text-[#F7F3E8]/35
              sm:text-xs
            "
          >
            {t?.footer?.rights ||
              '© 2026 Straight Way Oil & Flour Mill. All rights reserved.'}
          </p>

          <div
            className="
              flex
              items-center
              gap-2
              font-sans-body
              text-[10px]
              text-[#F7F3E8]/35
              sm:text-xs
            "
          >
            <span
              className="
                h-1
                w-1
                rounded-full
                bg-[#C9825B]
              "
            />

            <span>
              {t?.footer?.madeWith ||
                'Crafted with Purity & Care'}
            </span>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;