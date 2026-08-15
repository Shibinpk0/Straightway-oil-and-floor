import React, { useState } from 'react';
import {
  Phone,
  MapPin,
  MessageCircle,
  Send,
  ExternalLink,
  Star,
  Clock3,
  ArrowUpRight,
  CheckCircle2,
} from 'lucide-react';

import { translations } from '../translations';

const WHATSAPP_NUMBER = '918714348348';
const PHONE_NUMBER = '+918714348348';
const GOOGLE_MAPS_URL =
  'https://maps.app.goo.gl/ddsHNEFHqwWLMnDS6';

const ContactSection = ({ lang }) => {
  const t = translations[lang] || translations.en;
  const isMalayalam = lang === 'ml';

  const [isSending, setIsSending] = useState(false);
  const [sent, setSent] = useState(false);

  const phoneDisplay = t?.phone1 || '+91 8714 348 348';

  const address =
    t?.contact?.addressText ||
    'Pulliyil, Nilambur - Karulai Rd, Vakkeelpadi, Karulai, Kerala 679330';

  /* -------------------------------------------------------
     WhatsApp helper
  ------------------------------------------------------- */

  const openWhatsApp = (message) => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, '_blank', 'noopener,noreferrer');
  };

  /* -------------------------------------------------------
     Form submit
  ------------------------------------------------------- */

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = formData.get('name')?.toString().trim();
    const phone = formData.get('phone')?.toString().trim();
    const message = formData.get('message')?.toString().trim();

    if (!name || !phone || !message) {
      return;
    }

    setIsSending(true);

    const whatsappMessage = isMalayalam
      ? `നമസ്കാരം Straightway Mill!

പേര്: ${name}
ഫോൺ: ${phone}

സന്ദേശം:
${message}

നന്ദി.`
      : `Hello Straightway Mill!

Name: ${name}
Phone: ${phone}

Message:
${message}

Thank you.`;

    /*
      Small delay gives the user visual feedback
      before opening WhatsApp.
    */
    window.setTimeout(() => {
      openWhatsApp(whatsappMessage);

      setIsSending(false);
      setSent(true);

      form.reset();

      window.setTimeout(() => {
        setSent(false);
      }, 4000);
    }, 350);
  };

  /* -------------------------------------------------------
     Quick WhatsApp enquiry
  ------------------------------------------------------- */

  const handleQuickWhatsApp = () => {
    const message = isMalayalam
      ? 'നമസ്കാരം Straightway Mill! ഒരു ഉൽപ്പന്നത്തെക്കുറിച്ച് അന്വേഷിക്കാനാണ്.'
      : 'Hello Straightway Mill! I would like to enquire about your products.';

    openWhatsApp(message);
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="
        relative
        overflow-hidden
        border-t
        border-[#E1D9C9]
        bg-[#F7F3E8]
        py-14
        sm:py-16
        lg:py-20
      "
    >
      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div
          className="
            absolute
            -right-40
            top-0
            h-[420px]
            w-[420px]
            rounded-full
            bg-[#667A61]/[0.045]
            blur-3xl
          "
        />

        <div
          className="
            absolute
            -left-40
            bottom-0
            h-[360px]
            w-[360px]
            rounded-full
            bg-[#B86F52]/[0.035]
            blur-3xl
          "
        />
      </div>

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1280px]
          px-4
          sm:px-6
          lg:px-10
        "
      >
        {/* ===================================================
            SECTION HEADER
        ==================================================== */}

        <header className="mx-auto mb-9 max-w-2xl text-center sm:mb-12">
          <div className="mb-3 flex items-center justify-center gap-3">
            <span
              aria-hidden="true"
              className="h-px w-7 bg-[#B86F52] sm:w-10"
            />

            <span className="font-sans-body text-[10px] font-bold uppercase tracking-[0.22em] text-[#B86F52] sm:text-[11px]">
              {t?.contact?.tag || 'Contact Us'}
            </span>

            <span
              aria-hidden="true"
              className="h-px w-7 bg-[#B86F52] sm:w-10"
            />
          </div>

          <h2
            id="contact-heading"
            className="
              font-serif-heading
              text-3xl
              font-bold
              leading-[1.05]
              tracking-tight
              text-[#29332B]
              sm:text-4xl
              lg:text-5xl
            "
          >
            {isMalayalam ? (
              <>
                ഞങ്ങളുമായി{' '}
                <span className="text-[#667A61]">ബന്ധപ്പെടൂ</span>
              </>
            ) : (
              <>
                Get in{' '}
                <span className="text-[#667A61]">Touch</span>
              </>
            )}
          </h2>

          <p
            className="
              mx-auto
              mt-3
              max-w-xl
              text-xs
              leading-6
              text-[#5A635A]
              sm:text-sm
            "
          >
            {isMalayalam
              ? 'ഉൽപ്പന്നങ്ങൾ, ഓർഡറുകൾ, ഡ്രയർ സേവനം അല്ലെങ്കിൽ ഹോം ഡെലിവറി സംബന്ധിച്ച് ഞങ്ങളോട് നേരിട്ട് അന്വേഷിക്കാം.'
              : 'Have a question about our products, orders, coconut drying service or local delivery? Contact us directly.'}
          </p>
        </header>

        {/* ===================================================
            CONTACT GRID
        ==================================================== */}

        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:gap-6">
          {/* =================================================
              LEFT — CONTACT INFORMATION
          ================================================== */}

          <div
            className="
              rounded-[22px]
              border
              border-[#E1D9C9]
              bg-[#FFFDF7]
              p-5
              shadow-[0_10px_35px_rgba(41,51,43,0.05)]
              sm:p-7
            "
          >
            {/* Header */}

            <div className="mb-5 flex items-start justify-between gap-4">
              <div>
                <span className="mb-1 block text-[9px] font-bold uppercase tracking-[0.18em] text-[#B86F52]">
                  {isMalayalam ? 'ബന്ധപ്പെടാനുള്ള വിവരങ്ങൾ' : 'Reach Us'}
                </span>

                <h3 className="font-serif-heading text-xl font-bold text-[#29332B]">
                  {t?.contact?.getInTouch || 'Contact Details'}
                </h3>
              </div>

              {/* Rating */}

              <div
                className="
                  flex
                  shrink-0
                  items-center
                  gap-1.5
                  rounded-full
                  border
                  border-[#E1D9C9]
                  bg-[#F7F3E8]
                  px-2.5
                  py-1.5
                "
                aria-label="Rated 5 out of 5"
              >
                <Star
                  className="h-3.5 w-3.5 fill-[#C7A15A] text-[#C7A15A]"
                  strokeWidth={1.5}
                />

                <span className="text-xs font-bold text-[#29332B]">
                  5.0
                </span>
              </div>
            </div>

            {/* ===============================================
                PHONE
            ================================================ */}

            <a
              href={`tel:${PHONE_NUMBER}`}
              className="
                group
                flex
                items-center
                gap-3
                rounded-xl
                border
                border-[#E1D9C9]
                bg-[#F7F3E8]
                p-3.5
                transition-all
                duration-200
                hover:-translate-y-0.5
                hover:border-[#667A61]/50
                hover:shadow-sm
                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-[#667A61]
                focus-visible:ring-offset-2
              "
            >
              <div
                className="
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-[#667A61]/10
                  transition-colors
                  group-hover:bg-[#667A61]
                "
              >
                <Phone
                  className="h-4 w-4 text-[#B86F52] group-hover:text-white"
                  strokeWidth={1.7}
                />
              </div>

              <div className="min-w-0">
                <span className="block text-[9px] font-bold uppercase tracking-wider text-[#8A8F87]">
                  {isMalayalam ? 'ഫോൺ' : 'Phone'}
                </span>

                <span className="mt-0.5 block truncate text-sm font-bold text-[#29332B]">
                  {phoneDisplay}
                </span>
              </div>

              <ArrowUpRight
                className="
                  ml-auto
                  h-4
                  w-4
                  shrink-0
                  text-[#8A8F87]
                  transition-transform
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                "
              />
            </a>

            {/* ===============================================
                WHATSAPP
            ================================================ */}

            <button
              type="button"
              onClick={handleQuickWhatsApp}
              className="
                group
                mt-3
                flex
                w-full
                items-center
                gap-3
                rounded-xl
                border
                border-[#E1D9C9]
                bg-[#F7F3E8]
                p-3.5
                text-left
                transition-all
                duration-200
                hover:-translate-y-0.5
                hover:border-[#25D366]/50
                hover:shadow-sm
                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-[#25D366]
                focus-visible:ring-offset-2
              "
            >
              <div
                className="
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-[#25D366]/10
                  transition-colors
                  group-hover:bg-[#25D366]
                "
              >
                <MessageCircle
                  className="h-4 w-4 text-[#25D366] group-hover:text-white"
                  strokeWidth={1.7}
                />
              </div>

              <div className="min-w-0">
                <span className="block text-[9px] font-bold uppercase tracking-wider text-[#8A8F87]">
                  WhatsApp
                </span>

                <span className="mt-0.5 block truncate text-sm font-bold text-[#29332B]">
                  {phoneDisplay}
                </span>
              </div>

              <ArrowUpRight
                className="
                  ml-auto
                  h-4
                  w-4
                  shrink-0
                  text-[#8A8F87]
                  transition-transform
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                "
              />
            </button>

            {/* ===============================================
                LOCATION
            ================================================ */}

            <div
              className="
                mt-3
                flex
                items-start
                gap-3
                rounded-xl
                border
                border-[#E1D9C9]
                bg-[#F7F3E8]
                p-3.5
              "
            >
              <div
                className="
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-[#667A61]/10
                "
              >
                <MapPin
                  className="h-4 w-4 text-[#B86F52]"
                  strokeWidth={1.7}
                />
              </div>

              <div className="min-w-0">
                <span className="block text-[9px] font-bold uppercase tracking-wider text-[#8A8F87]">
                  {isMalayalam ? 'സ്ഥലം' : 'Location'}
                </span>

                <span className="mt-0.5 block text-xs leading-5 text-[#29332B]">
                  {address}
                </span>
              </div>
            </div>

            {/* ===============================================
                BUSINESS HOURS
            ================================================ */}

            <div
              className="
                mt-3
                flex
                items-center
                gap-3
                rounded-xl
                border
                border-[#E1D9C9]
                bg-[#F7F3E8]
                p-3.5
              "
            >
              <div
                className="
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-[#C7A15A]/15
                "
              >
                <Clock3
                  className="h-4 w-4 text-[#C7A15A]"
                  strokeWidth={1.7}
                />
              </div>

              <div>
                <span className="block text-[9px] font-bold uppercase tracking-wider text-[#8A8F87]">
                  {isMalayalam ? 'സേവന സമയം' : 'Service'}
                </span>

                <span className="mt-0.5 block text-xs font-semibold text-[#29332B]">
                  {isMalayalam
                    ? 'നേരിട്ട് വിളിച്ച് സമയം അന്വേഷിക്കൂ'
                    : 'Call ahead for current opening hours'}
                </span>
              </div>
            </div>

            {/* ===============================================
                MAP BUTTON
            ================================================ */}

            <a
              href={t?.mapsUrl || GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="
                mt-4
                flex
                min-h-[44px]
                w-full
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-[#29332B]
                px-4
                py-3
                text-xs
                font-bold
                text-white
                shadow-sm
                transition-all
                duration-200
                hover:-translate-y-0.5
                hover:bg-[#1f2822]
                hover:shadow-md
                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-[#667A61]
                focus-visible:ring-offset-2
              "
            >
              <MapPin className="h-3.5 w-3.5 text-[#C7A15A]" />

              <span>
                {t?.contact?.openInMaps || 'Open in Google Maps'}
              </span>

              <ExternalLink className="h-3.5 w-3.5 text-[#C7A15A]" />
            </a>
          </div>

          {/* =================================================
              RIGHT — MESSAGE FORM
          ================================================== */}

          <div
            className="
              rounded-[22px]
              border
              border-[#E1D9C9]
              bg-[#FFFDF7]
              p-5
              shadow-[0_10px_35px_rgba(41,51,43,0.05)]
              sm:p-7
            "
          >
            {/* Form heading */}

            <div className="mb-5">
              <span className="mb-1 block text-[9px] font-bold uppercase tracking-[0.18em] text-[#B86F52]">
                {isMalayalam ? 'സന്ദേശം അയക്കൂ' : 'Quick Enquiry'}
              </span>

              <h3 className="font-serif-heading text-xl font-bold text-[#29332B]">
                {t?.contact?.sendMessage || 'Send Us a Message'}
              </h3>

              <p className="mt-1 text-xs leading-5 text-[#5A635A]">
                {isMalayalam
                  ? 'ഫോം പൂരിപ്പിച്ചാൽ WhatsApp വഴി സന്ദേശം അയക്കാം.'
                  : 'Fill in your details and we’ll open WhatsApp with your enquiry.'}
              </p>
            </div>

            {/* Success message */}

            {sent && (
              <div
                role="status"
                className="
                  mb-4
                  flex
                  items-center
                  gap-2
                  rounded-xl
                  border
                  border-[#667A61]/20
                  bg-[#667A61]/10
                  px-3
                  py-2.5
                  text-xs
                  font-semibold
                  text-[#29332B]
                "
              >
                <CheckCircle2 className="h-4 w-4 text-[#667A61]" />

                <span>
                  {isMalayalam
                    ? 'WhatsApp തുറക്കുന്നു...'
                    : 'WhatsApp is opening with your message...'}
                </span>
              </div>
            )}

            <form
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              {/* Name */}

              <div>
                <label
                  htmlFor="contact-name"
                  className="
                    mb-1.5
                    block
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-wider
                    text-[#5A635A]
                  "
                >
                  {isMalayalam ? 'പേര്' : 'Your Name'}
                </label>

                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  required
                  autoComplete="name"
                  maxLength={80}
                  placeholder={
                    isMalayalam
                      ? 'നിങ്ങളുടെ പേര്'
                      : 'Enter your name'
                  }
                  className="
                    min-h-[46px]
                    w-full
                    rounded-xl
                    border
                    border-[#E1D9C9]
                    bg-[#F7F3E8]
                    px-4
                    py-3
                    text-sm
                    text-[#29332B]
                    placeholder:text-[#8A8F87]
                    outline-none
                    transition-all
                    focus:border-[#667A61]
                    focus:bg-[#FFFDF7]
                    focus:ring-2
                    focus:ring-[#667A61]/15
                  "
                />
              </div>

              {/* Phone */}

              <div>
                <label
                  htmlFor="contact-phone"
                  className="
                    mb-1.5
                    block
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-wider
                    text-[#5A635A]
                  "
                >
                  {isMalayalam ? 'ഫോൺ നമ്പർ' : 'Phone Number'}
                </label>

                <input
                  id="contact-phone"
                  type="tel"
                  name="phone"
                  required
                  autoComplete="tel"
                  inputMode="tel"
                  maxLength={20}
                  placeholder={
                    isMalayalam
                      ? 'ഫോൺ നമ്പർ'
                      : '+91 XXXXX XXXXX'
                  }
                  className="
                    min-h-[46px]
                    w-full
                    rounded-xl
                    border
                    border-[#E1D9C9]
                    bg-[#F7F3E8]
                    px-4
                    py-3
                    text-sm
                    text-[#29332B]
                    placeholder:text-[#8A8F87]
                    outline-none
                    transition-all
                    focus:border-[#667A61]
                    focus:bg-[#FFFDF7]
                    focus:ring-2
                    focus:ring-[#667A61]/15
                  "
                />
              </div>

              {/* Message */}

              <div>
                <label
                  htmlFor="contact-message"
                  className="
                    mb-1.5
                    block
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-wider
                    text-[#5A635A]
                  "
                >
                  {isMalayalam ? 'സന്ദേശം' : 'Message'}
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={4}
                  maxLength={500}
                  placeholder={
                    isMalayalam
                      ? 'എങ്ങനെ സഹായിക്കാം?'
                      : 'How can we help you?'
                  }
                  className="
                    w-full
                    resize-none
                    rounded-xl
                    border
                    border-[#E1D9C9]
                    bg-[#F7F3E8]
                    px-4
                    py-3
                    text-sm
                    leading-6
                    text-[#29332B]
                    placeholder:text-[#8A8F87]
                    outline-none
                    transition-all
                    focus:border-[#667A61]
                    focus:bg-[#FFFDF7]
                    focus:ring-2
                    focus:ring-[#667A61]/15
                  "
                />
              </div>

              {/* Submit */}

              <button
                type="submit"
                disabled={isSending}
                className="
                  group
                  flex
                  min-h-[48px]
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-[#667A61]
                  px-5
                  py-3
                  text-sm
                  font-bold
                  text-white
                  shadow-[0_8px_22px_rgba(102,122,97,0.20)]
                  transition-all
                  duration-200
                  hover:-translate-y-0.5
                  hover:bg-[#596B54]
                  hover:shadow-[0_10px_28px_rgba(102,122,97,0.28)]
                  active:translate-y-0
                  disabled:cursor-not-allowed
                  disabled:opacity-60
                  focus:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-[#667A61]
                  focus-visible:ring-offset-2
                "
              >
                {isSending ? (
                  <>
                    <span
                      className="
                        h-4
                        w-4
                        animate-spin
                        rounded-full
                        border-2
                        border-white/30
                        border-t-white
                      "
                    />

                    <span>
                      {isMalayalam
                        ? 'തുറക്കുന്നു...'
                        : 'Opening WhatsApp...'}
                    </span>
                  </>
                ) : (
                  <>
                    <MessageCircle
                      className="
                        h-4
                        w-4
                        text-[#C7A15A]
                        transition-transform
                        group-hover:scale-110
                      "
                    />

                    <span>
                      {t?.contact?.btnSend ||
                        'Send via WhatsApp'}
                    </span>

                    <ArrowUpRight
                      className="
                        h-3.5
                        w-3.5
                        opacity-70
                        transition-transform
                        group-hover:-translate-y-0.5
                        group-hover:translate-x-0.5
                      "
                    />
                  </>
                )}
              </button>
            </form>

            {/* Privacy / reassurance */}

            <div
              className="
                mt-4
                flex
                items-center
                justify-center
                gap-2
                text-center
              "
            >
              <span
                aria-hidden="true"
                className="h-px flex-1 bg-[#E1D9C9]"
              />

              <p className="text-[9px] font-medium text-[#8A8F87]">
                {isMalayalam
                  ? 'നിങ്ങളുടെ സന്ദേശം നേരിട്ട് WhatsApp-ലേക്ക്'
                  : 'Your message goes directly to WhatsApp'}
              </p>

              <span
                aria-hidden="true"
                className="h-px flex-1 bg-[#E1D9C9]"
              />
            </div>
          </div>
        </div>

        {/* ===================================================
            BOTTOM QUICK CONTACT BAR
        ==================================================== */}

        <div
          className="
            mt-5
            flex
            flex-col
            gap-3
            rounded-2xl
            border
            border-[#DCD5C6]
            bg-[#EAE2D2]/70
            p-4
            sm:flex-row
            sm:items-center
            sm:justify-between
            sm:px-5
          "
        >
          <div className="flex items-center gap-3">
            <div
              className="
                flex
                h-9
                w-9
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-[#C7A15A]/15
              "
            >
              <MessageCircle
                className="h-4 w-4 text-[#C7A15A]"
                strokeWidth={1.7}
              />
            </div>

            <p className="text-xs font-medium text-[#5A635A]">
              {isMalayalam
                ? 'വേഗത്തിൽ അന്വേഷിക്കണോ? WhatsApp-ൽ നേരിട്ട് ബന്ധപ്പെടൂ.'
                : 'Need a quick answer? Reach us directly on WhatsApp.'}
            </p>
          </div>

          <button
            type="button"
            onClick={handleQuickWhatsApp}
            className="
              inline-flex
              min-h-[42px]
              items-center
              justify-center
              gap-2
              rounded-full
              bg-[#25D366]
              px-5
              py-2.5
              text-xs
              font-bold
              text-white
              shadow-sm
              transition-all
              hover:-translate-y-0.5
              hover:bg-[#20BA5A]
              hover:shadow-md
              focus:outline-none
              focus-visible:ring-2
              focus-visible:ring-[#25D366]
              focus-visible:ring-offset-2
            "
          >
            <MessageCircle className="h-4 w-4" />

            <span>
              {isMalayalam
                ? 'WhatsApp ചെയ്യൂ'
                : 'Chat on WhatsApp'}
            </span>
          </button>
        </div>

        {/* ===================================================
            FOOTER NOTE
        ==================================================== */}

        <div className="mt-7 flex items-center justify-center gap-3">
          <span
            aria-hidden="true"
            className="h-px w-8 bg-[#DCD5C6]"
          />

          <p className="text-center text-[9px] font-medium tracking-wide text-[#8A8F87] sm:text-[10px]">
            {isMalayalam
              ? 'PKS Straightway Oil & Flour Mill • കരുളായി'
              : 'PKS Straightway Oil & Flour Mill • Karulai'}
          </p>

          <span
            aria-hidden="true"
            className="h-px w-8 bg-[#DCD5C6]"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;