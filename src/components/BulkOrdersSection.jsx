import React, { useState } from 'react';
import {
  MessageCircle,
  Calculator,
  Phone,
  ArrowRight,
  Users,
} from 'lucide-react';
import { translations } from '../translations';

const BulkOrdersSection = ({ lang }) => {
  const t = translations[lang] || translations.en;

  const [quantity, setQuantity] = useState(5);
  const [productType, setProductType] = useState('coconut_oil');
  const [grindType, setGrindType] = useState('fine');

  const phoneUrl = 'tel:+918714348348';

  const rates = {
    coconut_oil: {
      base: 210,
      label:
        lang === 'ml'
          ? 'നാടൻ വെളിച്ചെണ്ണ (Ltr)'
          : 'Country Coconut Oil (Ltr)',
    },
    chilli_powder: {
      base: 260,
      label:
        lang === 'ml'
          ? 'കഴുകി ഉണക്കിയ മുളകുപൊടി (Kg)'
          : 'Washed Chilli Powder (Kg)',
    },
    turmeric_powder: {
      base: 220,
      label:
        lang === 'ml'
          ? 'കുർക്യുമിൻ മഞ്ഞൾപ്പൊടി (Kg)'
          : 'Turmeric Powder (Kg)',
    },
    coriander_powder: {
      base: 200,
      label:
        lang === 'ml'
          ? 'മല്ലിപ്പൊടി (Kg)'
          : 'Coriander Powder (Kg)',
    },
    wheat_flour: {
      base: 60,
      label:
        lang === 'ml'
          ? 'വറുത്ത ആട്ട പൊടി (Kg)'
          : 'Roasted Atta Powder (Kg)',
    },
    rice_flour: {
      base: 65,
      label:
        lang === 'ml'
          ? 'വറുത്ത അരിപ്പൊടി / പുട്ടുപൊടി (Kg)'
          : 'Roasted Rice Flour / Puttu Podi (Kg)',
    },
    custom_milling: {
      base: 15,
      label:
        lang === 'ml'
          ? 'കസ്റ്റം ആട്ടൽ സേവനം (Kg)'
          : 'Custom Milling Service (Kg)',
    },
  };

  const currentProduct =
    rates[productType] || rates.coconut_oil;

  const estimatedTotal = quantity * currentProduct.base;

  const needsTexture = [
    'wheat_flour',
    'rice_flour',
    'custom_milling',
  ].includes(productType);

  const sectors =
    t?.bulk?.sectors || [
      'Hotels & Restaurants',
      'Retail Shops',
      'Catering & Events',
      'Bakeries',
      'Wholesale Distributors',
      'Residential Groups',
    ];

  const unit =
    productType === 'coconut_oil' ? 'Ltr' : 'Kg';

  const handleWhatsAppQuote = () => {
    const textureInfo = needsTexture
      ? `\n- Texture: ${grindType}`
      : '';

    const text = encodeURIComponent(
      `Hello  Straightway Mill!

I want a bulk wholesale quote:

- Product: ${currentProduct.label}
- Quantity: ${quantity} ${unit}${textureInfo}
- Estimated Price: ₹${estimatedTotal}

Please confirm availability and final pricing.`
    );

    window.open(
      `https://wa.me/918714348348?text=${text}`,
      '_blank'
    );
  };

  return (
    <section
      id="bulk"
      className="relative overflow-hidden bg-[#29332B] text-white"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#667A61]/10 blur-3xl" />

        <div className="absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-[#C7A15A]/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-[1280px] px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">

        {/* ------------------------------------------------
            HEADER
        ------------------------------------------------ */}
        <div className="mx-auto mb-7 max-w-2xl text-center sm:mb-10">

          <div className="mb-2.5 flex items-center justify-center gap-2.5">
            <span className="h-px w-6 bg-[#C7A15A]/70 sm:w-8" />

            <span className="font-sans-body text-[9px] font-bold uppercase tracking-[0.2em] text-[#C7A15A] sm:text-[10px]">
              {t?.bulk?.tag || 'Wholesale & Commercial'}
            </span>

            <span className="h-px w-6 bg-[#C7A15A]/70 sm:w-8" />
          </div>

          <h2 className="font-serif-heading text-2xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            {lang === 'ml' ? (
              <>
                ബൾക്ക് ഓർഡറുകൾ{' '}
                <span className="text-[#C7A15A]">
                  സ്വീകരിക്കുന്നു
                </span>
              </>
            ) : (
              <>
                We Accept{' '}
                <span className="text-[#C7A15A]">
                  Bulk Orders
                </span>
              </>
            )}
          </h2>

          <p className="mx-auto mt-2 max-w-lg text-[11px] leading-relaxed text-[#F7F3E8]/60 sm:text-sm">
            {lang === 'ml'
              ? 'ഹോട്ടലുകൾ, ബേക്കറികൾ, റീട്ടെയിൽ ഷോപ്പുകൾ, വിതരണക്കാർ എന്നിവർക്കായി പ്രത്യേക ബൾക്ക് നിരക്കുകൾ.'
              : 'Special bulk rates for hotels, bakeries, retail shops, distributors and local groups.'}
          </p>
        </div>

        {/* ------------------------------------------------
            MAIN CONTENT
        ------------------------------------------------ */}
        <div className="grid gap-5 lg:grid-cols-12 lg:gap-8">

          {/* ----------------------------------------------
              LEFT — WHO WE SERVE
          ---------------------------------------------- */}
          <div className="lg:col-span-5">

            <div className="mb-3 flex items-center gap-2">
              <Users className="h-4 w-4 text-[#C7A15A]" />

              <span className="font-sans-body text-[10px] font-bold uppercase tracking-[0.15em] text-[#F7F3E8]/60">
                {lang === 'ml'
                  ? 'ആർക്കായി'
                  : 'Who We Serve'}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-x-4 gap-y-3 sm:gap-y-4">
              {sectors.map((sector, idx) => (
                <div
                  key={idx}
                  className="group border-b border-white/10 pb-2.5 transition-transform duration-200 hover:translate-x-1"
                >
                  <div className="flex items-center gap-2">

                    <span className="font-sans-body text-[9px] font-bold text-[#C7A15A]/60">
                      0{idx + 1}
                    </span>

                    <h3 className="font-serif-heading text-[11px] font-bold leading-tight text-[#F7F3E8] sm:text-sm">
                      {sector}
                    </h3>

                  </div>
                </div>
              ))}
            </div>

            {/* Small supporting note */}
            <div className="mt-5 hidden rounded-xl border border-white/10 bg-white/[0.03] p-4 sm:block">
              <p className="text-xs leading-relaxed text-[#F7F3E8]/60">
                {lang === 'ml'
                  ? 'വലിയ അളവിലുള്ള ഓർഡറുകൾക്ക് നേരിട്ട് മില്ലുമായി ബന്ധപ്പെടാം.'
                  : 'For larger quantities, contact the mill directly for availability and final pricing.'}
              </p>
            </div>
          </div>

          {/* ----------------------------------------------
              RIGHT — CALCULATOR
          ---------------------------------------------- */}
          <div className="lg:col-span-7">

            <div className="rounded-2xl border border-white/10 bg-[#FFFDF7]/[0.045] p-4 shadow-2xl backdrop-blur-md sm:rounded-3xl sm:p-6">

              {/* Calculator heading */}
              <div className="mb-5 flex items-center justify-between">

                <div className="flex items-center gap-3">

                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#C7A15A]/20 bg-[#C7A15A]/10">
                    <Calculator
                      className="h-4 w-4 text-[#C7A15A]"
                      strokeWidth={1.5}
                    />
                  </div>

                  <div>
                    <h3 className="font-serif-heading text-base font-bold text-white sm:text-lg">
                      {t?.bulk?.calcTitle ||
                        'Wholesale Estimator'}
                    </h3>

                    <p className="text-[9px] text-white/40 sm:text-[10px]">
                      {lang === 'ml'
                        ? 'ഏകദേശ നിരക്ക് കണക്കാക്കുക'
                        : 'Get an estimated order value'}
                    </p>
                  </div>

                </div>

                <span className="hidden rounded-full border border-[#C7A15A]/20 bg-[#C7A15A]/10 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-[#C7A15A] sm:block">
                  Bulk
                </span>

              </div>

              {/* Product */}
              <div className="mb-4">

                <label className="mb-1.5 block text-[9px] font-bold uppercase tracking-[0.15em] text-white/50">
                  {lang === 'ml'
                    ? 'ഉൽപ്പന്നം'
                    : 'Select Product'}
                </label>

                <select
                  value={productType}
                  onChange={(e) =>
                    setProductType(e.target.value)
                  }
                  className="w-full rounded-xl border border-white/10 bg-[#222B25] px-3 py-3 text-xs font-semibold text-white outline-none transition-colors focus:border-[#667A61] sm:text-sm"
                >
                  {Object.keys(rates).map((key) => (
                    <option
                      key={key}
                      value={key}
                      className="bg-[#29332B]"
                    >
                      {rates[key].label}
                    </option>
                  ))}
                </select>

              </div>

              {/* Quantity */}
              <div className="mb-4">

                <div className="mb-2 flex items-center justify-between">

                  <label className="text-[9px] font-bold uppercase tracking-[0.15em] text-white/50">
                    {lang === 'ml'
                      ? 'അളവ്'
                      : 'Quantity'}
                  </label>

                  <span className="font-sans-body text-sm font-bold text-[#C7A15A]">
                    {quantity} {unit}
                  </span>

                </div>

                <input
                  type="range"
                  min="1"
                  max="25"
                  step="1"
                  value={quantity}
                  onChange={(e) =>
                    setQuantity(Number(e.target.value))
                  }
                  className="h-1 w-full cursor-pointer accent-[#C7A15A]"
                />

                <div className="mt-1 flex justify-between px-0.5 font-mono text-[8px] text-white/30">
                  <span>1</span>
                  <span>5</span>
                  <span>10</span>
                  <span>15</span>
                  <span>20</span>
                  <span>25</span>
                </div>

              </div>

              {/* Texture */}
              {needsTexture && (
                <div className="mb-4">

                  <label className="mb-1.5 block text-[9px] font-bold uppercase tracking-[0.15em] text-white/50">
                    {lang === 'ml'
                      ? 'പാകം'
                      : 'Grinding Texture'}
                  </label>

                  <div className="grid grid-cols-3 gap-2">

                    {['fine', 'medium', 'coarse'].map(
                      (texture) => (
                        <button
                          key={texture}
                          type="button"
                          onClick={() =>
                            setGrindType(texture)
                          }
                          className={`rounded-lg py-2 text-[10px] font-bold capitalize transition-all ${
                            grindType === texture
                              ? 'bg-[#C7A15A] text-[#29332B] shadow-md'
                              : 'border border-white/10 bg-[#222B25] text-white/60 hover:bg-white/10'
                          }`}
                        >
                          {texture}
                        </button>
                      )
                    )}

                  </div>
                </div>
              )}

              {/* Price */}
              <div className="mt-5 flex items-end justify-between border-t border-white/10 pt-4">

                <div>

                  <span className="mb-1 block text-[8px] font-bold uppercase tracking-[0.15em] text-white/40 sm:text-[9px]">
                    {lang === 'ml'
                      ? 'ഏകദേശ വില'
                      : 'Estimated Total'}
                  </span>

                  <div className="font-sans-body text-3xl font-bold leading-none text-white sm:text-4xl">
                    ₹{estimatedTotal.toLocaleString()}
                  </div>

                  <span className="mt-1 block text-[8px] text-white/30">
                    {lang === 'ml'
                      ? '* നികുതിയും ട്രാൻസ്പോർട്ടും അധികം'
                      : '* Taxes & transport extra'}
                  </span>

                </div>

                <div className="text-right">
                  <span className="block text-[8px] uppercase tracking-wider text-white/30">
                    Rate
                  </span>

                  <span className="text-xs font-bold text-[#C7A15A]">
                    ₹{currentProduct.base}/{unit}
                  </span>
                </div>

              </div>

              {/* Actions */}
              <div className="mt-4 grid grid-cols-[1fr_auto] gap-2">

                <button
                  onClick={handleWhatsAppQuote}
                  className="group flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-3 text-xs font-bold text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#20ba5a]"
                >
                  <MessageCircle className="h-4 w-4" />

                  <span>
                    {t?.bulk?.btnSubmit ||
                      'Send WhatsApp Quote'}
                  </span>

                  <ArrowRight className="hidden h-3.5 w-3.5 transition-transform group-hover:translate-x-1 sm:block" />
                </button>

                <a
                  href={phoneUrl}
                  aria-label="Call  Straightway Mill"
                  className="flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 text-white transition-colors hover:bg-white/10"
                >
                  <Phone className="h-4 w-4 text-[#C7A15A]" />
                </a>

              </div>

            </div>
          </div>
        </div>
      </div>

      {/* ----------------------------------------------
          WAVE INTO NEXT SECTION
      ---------------------------------------------- */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block h-[24px] w-full sm:h-[35px]"
          viewBox="0 0 1200 100"
          preserveAspectRatio="none"
        >
          <path
            d="M0,35 C180,75 330,5 520,40 C700,75 900,15 1200,45 L1200,100 L0,100 Z"
            fill="#F7F3E8"
          />
        </svg>
      </div>
    </section>
  );
};

export default BulkOrdersSection;