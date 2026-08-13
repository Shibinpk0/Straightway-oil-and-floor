import React, { useState } from 'react';
import { X, Truck } from 'lucide-react';
import { translations } from '../translations';

const AnnouncementBar = ({ lang }) => {
  const [visible, setVisible] = useState(true);
  const t = translations[lang] || translations.en;

  if (!visible) return null;

  return (
    <div className="relative z-[70] w-full bg-[#29332B] text-[#F7F3E8]">
      <div className="mx-auto flex min-h-[34px] max-w-[1400px] items-center justify-center px-10 py-2 sm:px-12">
        <div className="flex items-center justify-center gap-2 text-center">
          <Truck
            className="h-3.5 w-3.5 shrink-0 text-[#C7A15A]"
            strokeWidth={1.8}
          />

          <span className="font-sans-body text-[10px] font-medium leading-tight sm:text-xs">
            {t?.announcement?.text ||
              'Free Home Delivery in Karulai & Vakkeelpadi for orders above ₹500!'}
          </span>
        </div>

        <button
          onClick={() => setVisible(false)}
          className="absolute right-3 flex h-6 w-6 items-center justify-center rounded-full text-white/60 transition-colors hover:bg-white/10 hover:text-white sm:right-5"
          aria-label="Close announcement"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
};

export default AnnouncementBar;