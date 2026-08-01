import React from 'react';
import { Clock, Calendar, MapPin, CheckCircle2, AlertCircle } from 'lucide-react';
import { translations } from '../translations';

const WorkingHoursSection = ({ lang }) => {
  const t = translations[lang] || translations.en;

  // Determine open/closed status based on local time (IST 8:30 AM - 6:00 PM Mon-Sat)
  const now = new Date();
  const day = now.getDay(); // 0 = Sun, 1 = Mon, ..., 6 = Sat
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const timeInMinutes = hours * 60 + minutes;
  
  const openTimeMinutes = 8 * 60 + 30; // 8:30 AM
  const closeTimeMinutes = 18 * 60;    // 6:00 PM
  
  const isOpen = day !== 0 && timeInMinutes >= openTimeMinutes && timeInMinutes <= closeTimeMinutes;

  return (
    <section id="working-hours" className="bg-[#F6F1E7] py-16 md:py-20 border-b border-[#E8E2D6] relative">
      <div className="max-w-[1280px] mx-auto px-5 md:px-8">
        
        <div className="bg-white rounded-[28px] p-6 sm:p-10 border border-[#E8E2D6] shadow-premium-soft grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left">
          
          {/* Left Title Column (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1D4F2B]/10 text-[#1D4F2B] text-xs font-semibold">
              <Clock className="w-3.5 h-3.5 text-[#D8A43A]" />
              <span>{t?.workingHours?.tag || "✦ STORE TIMINGS ✦"}</span>
            </div>

            <h2 className="font-serif-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-[#12351D]">
              {t?.workingHours?.heading || "Shop Working Hours"}
            </h2>

            <p className="font-sans-body text-xs sm:text-sm text-[#666666] leading-relaxed">
              {t?.workingHours?.subtitle || "Visit our shop located at Nilambur - Karulai Road, Vakkeelpadi."}
            </p>

            {/* Live Open/Closed Status Badge */}
            <div className="pt-2 flex items-center gap-3">
              <span
                className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold ${
                  isOpen
                    ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                    : 'bg-amber-100 text-amber-900 border border-amber-300'
                }`}
              >
                <span className={`w-2 h-2 rounded-full ${isOpen ? 'bg-emerald-600 animate-ping' : 'bg-amber-600'}`} />
                <span>{isOpen ? (t?.workingHours?.statusOpen || "Open Now") : (t?.workingHours?.statusClosed || "Closed Now")}</span>
              </span>

              <span className="text-xs text-[#666666]">
                {isOpen
                  ? (lang === 'ml' ? 'ഇന്ന് വൈകിട്ട് 6:00 വരെ കട തുറന്നിരിക്കും' : 'Open until 6:00 PM today')
                  : (lang === 'ml' ? 'അടുത്ത പ്രവൃത്തിദിനം രാവിലെ 8:30 ന് ആരംഭിക്കുന്നു' : 'Reopens at 8:30 AM next working day')}
              </span>
            </div>
          </div>

          {/* Right Hours Schedule Card (6 cols) */}
          <div className="lg:col-span-6 bg-[#FFFDF8] p-6 rounded-2xl border border-[#E8E2D6] space-y-4">
            
            {/* Weekdays */}
            <div className="flex items-start justify-between pb-3 border-b border-[#E8E2D6]">
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-[#1D4F2B]" />
                <div>
                  <span className="font-serif-heading text-sm font-bold text-[#12351D] block">
                    {t?.workingHours?.days || "Monday – Saturday"}
                  </span>
                  <span className="text-xs text-[#666666]">
                    {lang === 'ml' ? 'പ്രവൃത്തി ദിനങ്ങൾ' : 'Regular Business Days'}
                  </span>
                </div>
              </div>
              <span className="font-mono text-sm font-bold text-[#12351D] bg-[#F6F1E7] px-3 py-1 rounded-lg border border-[#E8E2D6]">
                {t?.workingHours?.timing || "8:30 AM – 6:00 PM"}
              </span>
            </div>

            {/* Sunday */}
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <AlertCircle className="w-5 h-5 text-[#D8A43A]" />
                <div>
                  <span className="font-serif-heading text-sm font-bold text-[#12351D] block">
                    {lang === 'ml' ? 'ഞായറാഴ്ച' : 'Sunday'}
                  </span>
                  <span className="text-xs text-[#666666]">
                    {lang === 'ml' ? 'അവധി (മുൻകൂട്ടി ബുക്ക് ചെയ്യാവുന്നതാണ്)' : 'Holiday / On-Demand Bulk Pickup'}
                  </span>
                </div>
              </div>
              <span className="text-xs font-semibold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">
                {lang === 'ml' ? 'അവധി' : 'Holiday'}
              </span>
            </div>

            {/* Address callout */}
            <div className="pt-2 text-xs text-[#666666] flex items-center gap-2 border-t border-[#E8E2D6]">
              <MapPin className="w-4 h-4 text-[#D8A43A] shrink-0" />
              <span>{t?.contact?.addressText || "Pulliyil, Nilambur - Karulai Rd, Vakkeelpadi, Karulai"}</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default WorkingHoursSection;
