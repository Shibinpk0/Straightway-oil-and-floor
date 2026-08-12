import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';

const WhatsAppFloat = () => {
  const whatsappUrl = "https://wa.me/918714348348?text=Hello%20PKS%20Straightway%20Mill,%20I%20would%20like%20to%20place%20an%20order%20or%20enquire%20about%20your%20pure%20coconut%20oil%20and%20freshly%20ground%20products.";
  const phoneUrl = "tel:+918714348348";

  return (
    <>
      {/* Desktop: Floating buttons (right side) */}
      <div className="hidden sm:flex fixed bottom-5 right-5 z-50 flex-col gap-3 items-end">
        {/* Call Floating Button */}
        <a
          href={phoneUrl}
          className="bg-[#12351D] hover:bg-[#1D4F2B] text-white p-3.5 rounded-full shadow-2xl flex items-center gap-2 group transition-all duration-300 transform hover:scale-105 border-2 border-[#D8A43A]"
          aria-label="Call Mill Directly"
          title="Call +91 8714 348 348"
        >
          <Phone className="w-5 h-5 text-[#C7A15A]" />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap text-xs font-button font-bold pr-1">
            Call +91 8714 348 348
          </span>
        </a>

        {/* WhatsApp Floating Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] hover:bg-[#20ba5a] text-white p-3.5 rounded-full shadow-2xl flex items-center gap-2 group transition-all duration-300 transform hover:scale-105 border-2 border-white relative"
          aria-label="Order on WhatsApp"
          title="Order via WhatsApp"
        >
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping"></span>
          <MessageCircle className="w-6 h-6 fill-white stroke-none" />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap text-xs font-button font-bold pr-1">
            WhatsApp Order
          </span>
        </a>
      </div>

      {/* Mobile: Sticky bottom action bar */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-[#E8E2D6] px-3 py-2.5 flex gap-2.5 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
        <a
          href={phoneUrl}
          className="flex-1 bg-[#12351D] text-white py-3 rounded-xl flex items-center justify-center gap-2 font-button text-xs font-bold shadow-sm active:scale-[0.97] transition-transform"
        >
          <Phone className="w-4 h-4 text-[#C7A15A]" />
          <span>Call Now</span>
        </a>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-[#25D366] text-white py-3 rounded-xl flex items-center justify-center gap-2 font-button text-xs font-bold shadow-sm active:scale-[0.97] transition-transform relative"
        >
          <span className="absolute top-1 right-2 w-2 h-2 bg-red-500 rounded-full animate-ping"></span>
          <MessageCircle className="w-4 h-4" />
          <span>WhatsApp</span>
        </a>
      </div>
    </>
  );
};

export default WhatsAppFloat;
