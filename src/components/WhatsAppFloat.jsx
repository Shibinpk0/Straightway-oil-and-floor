import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';

const WhatsAppFloat = () => {
  const whatsappMessage =
    'Hello PKS Straightway Mill! I would like to place an order or enquire about your pure coconut oil and freshly ground products.';

  const whatsappUrl = `https://wa.me/918714348348?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  const phoneUrl = 'tel:+918714348348';

  return (
    <>
      {/* =====================================================
          DESKTOP FLOATING ACTIONS
      ====================================================== */}
      <div
        className="
          fixed
          bottom-6
          right-5
          z-50
          hidden
          sm:flex
          flex-col
          items-end
          gap-2.5
        "
      >
        {/* -------------------------------------------------
            CALL
        -------------------------------------------------- */}
        <a
          href={phoneUrl}
          aria-label="Call PKS Straightway Mill"
          title="Call PKS Straightway Mill"
          className="
            group
            flex
            items-center
            gap-2
            rounded-full
            border
            border-[#D8CFBD]
            bg-[#FFFDF7]/95
            px-3
            py-3
            text-[#29332B]
            shadow-[0_8px_30px_rgba(41,51,43,0.12)]
            backdrop-blur-md
            transition-all
            duration-300
            hover:-translate-y-0.5
            hover:border-[#667A61]/50
            hover:bg-[#F7F3E8]
            focus:outline-none
            focus-visible:ring-2
            focus-visible:ring-[#667A61]
            focus-visible:ring-offset-2
          "
        >
          <Phone
            className="
              h-4
              w-4
              text-[#667A61]
              transition-transform
              duration-300
              group-hover:scale-110
            "
          />

          <span
            className="
              font-button
              text-[11px]
              font-bold
              whitespace-nowrap
            "
          >
            Call the Mill
          </span>
        </a>

        {/* -------------------------------------------------
            WHATSAPP — PRIMARY CTA
        -------------------------------------------------- */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Order through WhatsApp"
          title="Order through WhatsApp"
          className="
            group
            relative
            flex
            items-center
            gap-2.5
            rounded-full
            bg-[#25D366]
            px-4
            py-3
            text-white
            shadow-[0_10px_30px_rgba(37,211,102,0.25)]
            transition-all
            duration-300
            hover:-translate-y-0.5
            hover:bg-[#20BA5A]
            hover:shadow-[0_14px_35px_rgba(37,211,102,0.32)]
            focus:outline-none
            focus-visible:ring-2
            focus-visible:ring-[#25D366]
            focus-visible:ring-offset-2
          "
        >
          <MessageCircle
            className="
              h-5
              w-5
              fill-white
              stroke-none
              transition-transform
              duration-300
              group-hover:scale-110
            "
          />

          <span
            className="
              font-button
              text-[11px]
              font-bold
              whitespace-nowrap
            "
          >
            Order on WhatsApp
          </span>
        </a>
      </div>

      {/* =====================================================
          MOBILE STICKY ACTION BAR
      ====================================================== */}
      <div
        className="
          fixed
          inset-x-0
          bottom-0
          z-50
          sm:hidden
          border-t
          border-[#E1D9C9]
          bg-[#FFFDF7]/95
          px-3
          pt-2.5
          shadow-[0_-8px_30px_rgba(41,51,43,0.10)]
          backdrop-blur-xl
        "
        style={{
          paddingBottom: 'calc(0.625rem + env(safe-area-inset-bottom))',
        }}
      >
        <div className="flex gap-2.5">
          {/* Call */}
          <a
            href={phoneUrl}
            aria-label="Call PKS Straightway Mill"
            className="
              flex
              flex-1
              items-center
              justify-center
              gap-2
              rounded-xl
              border
              border-[#D8CFBD]
              bg-[#29332B]
              py-3
              font-button
              text-xs
              font-bold
              text-white
              shadow-sm
              transition-all
              duration-200
              active:scale-[0.97]
              focus:outline-none
              focus-visible:ring-2
              focus-visible:ring-[#667A61]
              focus-visible:ring-offset-2
            "
          >
            <Phone className="h-4 w-4 text-[#C7A15A]" />
            <span>Call Now</span>
          </a>

          {/* WhatsApp */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Order through WhatsApp"
            className="
              flex
              flex-1
              items-center
              justify-center
              gap-2
              rounded-xl
              bg-[#25D366]
              py-3
              font-button
              text-xs
              font-bold
              text-white
              shadow-sm
              transition-all
              duration-200
              active:scale-[0.97]
              focus:outline-none
              focus-visible:ring-2
              focus-visible:ring-[#25D366]
              focus-visible:ring-offset-2
            "
          >
            <MessageCircle
              className="
                h-4
                w-4
                fill-white
                stroke-none
              "
            />

            <span>WhatsApp Order</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default WhatsAppFloat;