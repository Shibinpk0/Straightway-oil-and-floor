import React, { useState } from 'react';
import { X } from 'lucide-react';
import { translations } from '../translations';

const AnnouncementBar = ({ lang }) => {
  const [visible, setVisible] = useState(true);
  const t = translations[lang] || translations.en;

  if (!visible) return null;

  return (
    <div className="bg-[#12351D] text-[#D8A43A] text-center text-[10px] sm:text-xs font-semibold py-2 px-4 flex items-center justify-center gap-2 relative">
      <span>{t?.announcement?.text || "🚚 Free Home Delivery in Karulai & Vakkeelpadi for orders above ₹500!"}</span>
      <button 
        onClick={() => setVisible(false)} 
        className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white"
        aria-label="Close announcement"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
};

export default AnnouncementBar;