import React from 'react';
import { ShoppingBag, PhoneCall, PackageCheck, Truck, ArrowRight } from 'lucide-react';
import { translations } from '../translations';

const HowToOrderSection = ({ lang }) => {
  const t = translations[lang] || translations.en;

  const steps = [
    {
      icon: ShoppingBag,
      stepNum: "01",
      title: t?.howToOrder?.step1Title || "1. Choose Products",
      desc: t?.howToOrder?.step1Desc || "Browse our pure coconut oil, washed spice powders, or custom grinding options.",
    },
    {
      icon: PhoneCall,
      stepNum: "02",
      title: t?.howToOrder?.step2Title || "2. Call or WhatsApp",
      desc: t?.howToOrder?.step2Desc || "Contact us directly via call or WhatsApp at +91 8714 348 348 with your requirements.",
    },
    {
      icon: PackageCheck,
      stepNum: "03",
      title: t?.howToOrder?.step3Title || "3. Freshly Ground & Packed",
      desc: t?.howToOrder?.step3Desc || "We process and pack your order fresh to retain peak aroma, taste, and nutrition.",
    },
    {
      icon: Truck,
      stepNum: "04",
      title: t?.howToOrder?.step4Title || "4. Pickup or Delivery",
      desc: t?.howToOrder?.step4Desc || "Collect from our Vakkeelpadi shopfront or get doorstep home delivery nearby.",
    },
  ];

  return (
    <section id="how-it-works" className="bg-[#F6F1E7] py-8 sm:py-16 md:py-24 border-y border-[#E8E2D6] relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-5 md:px-8 space-y-6 sm:space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-2 sm:space-y-4 max-w-2xl mx-auto">
          <div className="hidden sm:flex items-center justify-center gap-3 text-[#D8A43A]">
            <span className="h-[1px] w-12 bg-[#D8A43A]/40"></span>
            <span className="font-serif-heading font-semibold text-xs sm:text-sm tracking-wider uppercase">
              {t?.howToOrder?.tag || "✦ SIMPLE 4-STEP PROCESS ✦"}
            </span>
            <span className="h-[1px] w-12 bg-[#D8A43A]/40"></span>
          </div>

          <h2 className="font-serif-heading text-xl sm:text-3xl sm:text-4xl font-bold text-[#12351D]">
            {t?.howToOrder?.heading || "How to Order Fresh Products"}
          </h2>

          <p className="hidden sm:block font-sans-body text-sm sm:text-base text-[#666666]">
            {t?.howToOrder?.subtitle || "Experience the convenience of ordering freshly ground spices and oils directly from our mill."}
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="bg-white p-4 sm:p-6 sm:p-7 rounded-2xl sm:rounded-[24px] border border-[#E8E2D6] shadow-sm hover:shadow-md transition-all duration-300 relative group space-y-2 sm:space-y-4 text-left"
              >
                {/* Step Number Badge */}
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#1D4F2B]/10 text-[#1D4F2B] flex items-center justify-center group-hover:bg-[#1D4F2B] group-hover:text-white transition-colors duration-300">
                    <Icon className="w-4 h-4 sm:w-6 sm:h-6 text-[#D8A43A]" />
                  </div>
                  <span className="font-mono text-lg sm:text-2xl font-bold text-[#D8A43A]/60">
                    {step.stepNum}
                  </span>
                </div>

                <h3 className="font-serif-heading text-sm sm:text-lg font-bold text-[#12351D] leading-tight">
                  {step.title}
                </h3>

                <p className="hidden sm:block font-sans-body text-xs sm:text-sm text-[#666666] leading-relaxed">
                  {step.desc}
                </p>

                {/* Connecting arrow for desktop */}
                {idx < 3 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-5 h-5 text-[#D8A43A]" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick CTA banner */}
        <div className="bg-[#12351D] text-white p-4 sm:p-6 rounded-xl sm:rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-left">
          <div>
            <h4 className="font-serif-heading text-lg font-bold text-white">
              {lang === 'ml' ? 'ആവശ്യാനുസരണം പുതുതായി പൊടിച്ചുവരുന്നു' : 'Order Fresh Batches In One Tap'}
            </h4>
            <p className="text-xs text-[#FFFDF8]/80">
              {lang === 'ml' ? 'വാട്ട്സ്‌ആപ്പ് അല്ലെങ്കിൽ ഫോൺ വഴി ആവശ്യപ്പെടുക' : 'Fast processing & doorstep delivery for nearby Karulai areas.'}
            </p>
          </div>
          <a
            href="https://wa.me/918714348348?text=Hello%20PKS%20Straightway%20Mill!%20I%20want%20to%20order%20freshly%20ground%20products."
            target="_blank"
            rel="noopener noreferrer"
            className="font-button text-xs bg-[#25D366] hover:bg-[#20ba5a] text-white px-6 py-3 rounded-full font-bold shrink-0 transition-colors shadow-md"
          >
            {lang === 'ml' ? 'വാട്ട്‌സ്ആപ്പിൽ ഓർഡർ നൽകൂ 💬' : 'Order on WhatsApp 💬'}
          </a>
        </div>

      </div>
    </section>
  );
};

export default HowToOrderSection;
