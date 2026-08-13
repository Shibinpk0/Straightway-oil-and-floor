import React, { useEffect, useMemo, useState } from 'react';
import {
  X,
  CheckCircle,
  MessageCircle,
  Phone,
  ShieldCheck,
  Plus,
  Check,
  MapPin,
} from 'lucide-react';

import { translations } from '../translations';

const ProductDetailModal = ({
  product,
  onClose,
  lang,
  onQuickAdd,
}) => {
  const t = translations[lang] || translations.en;
  const isMalayalam = lang === 'ml';

  const sizes = product?.sizes || [];
  const defaultWeight =
    sizes.length > 0
      ? sizes[Math.floor(sizes.length / 2)]
      : '500g';

  const [selectedWeight, setSelectedWeight] =
    useState(defaultWeight);

  const [isAdded, setIsAdded] = useState(false);

  /*
   * Keep selected size synchronized if another
   * product is opened without unmounting the modal.
   */
  useEffect(() => {
    if (!product) return;

    const nextSizes = product.sizes || [];

    const nextDefault =
      nextSizes.length > 0
        ? nextSizes[Math.floor(nextSizes.length / 2)]
        : '500g';

    setSelectedWeight(nextDefault);
    setIsAdded(false);
  }, [product]);

  /*
   * Lock page scrolling while modal is open.
   */
  useEffect(() => {
    if (!product) return;

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [product]);

  /*
   * Escape key support.
   */
  useEffect(() => {
    if (!product) return;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener(
      'keydown',
      handleKeyDown
    );

    return () => {
      window.removeEventListener(
        'keydown',
        handleKeyDown
      );
    };
  }, [product, onClose]);

  if (!product) return null;

  const title = isMalayalam
    ? product.titleMl || product.titleEn
    : product.titleEn || product.titleMl;

  const secondaryTitle = isMalayalam
    ? product.titleEn
    : product.titleMl;

  const description =
    product.desc ||
    (isMalayalam
      ? 'കരുളായി മില്ലിൽ പുതുതായി തയ്യാറാക്കുന്ന ഗുണമേന്മയുള്ള ഉൽപ്പന്നം.'
      : 'Freshly prepared at our local mill with care and quality.');

  const currentPrice =
    product.prices?.[selectedWeight] || '₹0';

  const phoneUrl = 'tel:+918714348348';

  /*
   * Product qualities
   */
  const qualityPoints = [
    {
      icon: CheckCircle,
      label: isMalayalam
        ? '100% ശുദ്ധി'
        : '100% Pure',
    },
    {
      icon: CheckCircle,
      label: isMalayalam
        ? 'മായമില്ല'
        : 'No Fillers',
    },
    {
      icon: CheckCircle,
      label: isMalayalam
        ? 'ശുചിത്വത്തോടെ തയ്യാറാക്കിയത്'
        : 'Hygienically Prepared',
    },
    {
      icon: ShieldCheck,
      label: isMalayalam
        ? 'സ്വാഭാവിക ഗുണം'
        : 'Natural Quality',
    },
  ];

  /*
   * WhatsApp order
   */
  const handleWhatsAppOrder = () => {
    const message = [
      'Hello PKS Straightway Mill!',
      '',
      'I am interested in ordering:',
      `Product: ${product.titleEn || title}`,
      `Selected Size: ${selectedWeight}`,
      `Estimated Price: ${currentPrice}`,
      'Quantity: 1',
      '',
      'Please let me know availability and final price.',
    ].join('\n');

    const encodedMessage =
      encodeURIComponent(message);

    window.open(
      `https://wa.me/918714348348?text=${encodedMessage}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  /*
   * Add product to order list
   */
  const handleAddToCart = () => {
    if (typeof onQuickAdd === 'function') {
      onQuickAdd(
        product,
        selectedWeight
      );
    }

    if (
      typeof navigator !== 'undefined' &&
      navigator.vibrate
    ) {
      navigator.vibrate(10);
    }

    setIsAdded(true);

    window.setTimeout(() => {
      setIsAdded(false);
    }, 1600);
  };

  return (
    <div
      className="
        fixed
        inset-0
        z-[100]
        flex
        items-end
        justify-center
        bg-[#26302A]/65
        p-0
        backdrop-blur-sm
        sm:items-center
        sm:p-4
      "
      role="dialog"
      aria-modal="true"
      aria-labelledby="product-modal-title"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >

      {/* =========================================================
          MODAL
      ========================================================= */}

      <div
        className="
          relative
          flex
          max-h-[94vh]
          w-full
          flex-col
          overflow-hidden
          rounded-t-[28px]
          border
          border-[#DCD5C6]
          bg-[#F7F3E8]
          shadow-[0_30px_80px_rgba(0,0,0,0.25)]
          animate-slide-up
          sm:max-w-[860px]
          sm:rounded-[28px]
          sm:max-h-[90vh]
          sm:animate-fadeIn
        "
        onMouseDown={(event) => {
          event.stopPropagation();
        }}
      >

        {/* =======================================================
            MOBILE HANDLE
        ======================================================= */}

        <div
          className="
            flex
            justify-center
            bg-[#F7F3E8]
            pb-1
            pt-3
            sm:hidden
          "
        >
          <div
            className="
              h-1.5
              w-10
              rounded-full
              bg-[#D6CDBB]
            "
          />
        </div>

        {/* =======================================================
            CLOSE BUTTON
        ======================================================= */}

        <button
          type="button"
          onClick={onClose}
          aria-label="Close product details"
          className="
            absolute
            right-4
            top-4
            z-20
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-full
            border
            border-[#DCD5C6]
            bg-[#F7F3E8]/90
            text-[#26302A]
            shadow-sm
            backdrop-blur-md
            transition-all
            duration-200
            hover:bg-[#667A61]
            hover:text-white
            sm:right-5
            sm:top-5
          "
        >
          <X className="h-4 w-4" />
        </button>

        {/* =======================================================
            SCROLLABLE CONTENT
        ======================================================= */}

        <div
          className="
            flex-1
            overflow-y-auto
            overscroll-contain
            px-4
            pb-5
            pt-3
            sm:px-7
            sm:pb-6
            sm:pt-6
          "
        >

          {/* =====================================================
              PRODUCT HEADER
          ===================================================== */}

          <div
            className="
              mb-5
              pr-12
              text-left
            "
          >

            <div
              className="
                mb-2
                flex
                items-center
                gap-2
              "
            >
              <span
                className="
                  h-px
                  w-6
                  bg-[#C9825B]
                "
              />

              <span
                className="
                  font-sans-body
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-[#C9825B]
                  sm:text-[10px]
                "
              >
                PKS Straightway · Karulai
              </span>
            </div>

            <h2
              id="product-modal-title"
              className="
                font-serif-heading
                text-2xl
                font-bold
                leading-[1.05]
                tracking-[-0.02em]
                text-[#26302A]
                sm:text-3xl
              "
            >
              {title}
            </h2>

            {secondaryTitle && (
              <p
                className="
                  mt-1.5
                  font-sans-body
                  text-[11px]
                  text-[#7A817A]
                  sm:text-xs
                "
              >
                {secondaryTitle}
              </p>
            )}

          </div>

          {/* =====================================================
              PRODUCT AREA
          ===================================================== */}

          <div
            className="
              grid
              gap-5
              md:grid-cols-[0.95fr_1.05fr]
              md:gap-7
            "
          >

            {/* ===================================================
                IMAGE
            =================================================== */}

            <div>

              <div
                className="
                  relative
                  aspect-[4/3]
                  overflow-hidden
                  rounded-[20px]
                  border
                  border-[#DCD5C6]
                  bg-white
                  shadow-[0_12px_30px_rgba(38,48,42,0.08)]
                "
              >

                <img
                  src={product.image}
                  alt={title}
                  className="
                    h-full
                    w-full
                    object-cover
                  "
                />

                {/* Image bottom overlay */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-x-0
                    bottom-0
                    h-24
                    bg-gradient-to-t
                    from-[#26302A]/30
                    to-transparent
                  "
                />

                {/* Local badge */}

                <div
                  className="
                    absolute
                    bottom-3
                    left-3
                    flex
                    items-center
                    gap-1.5
                    rounded-full
                    border
                    border-white/20
                    bg-[#26302A]/65
                    px-3
                    py-1.5
                    text-white
                    backdrop-blur-md
                  "
                >
                  <MapPin
                    className="
                      h-3
                      w-3
                      text-[#E7D9B8]
                    "
                  />

                  <span
                    className="
                      font-sans-body
                      text-[9px]
                      font-semibold
                    "
                  >
                    Karulai Mill
                  </span>
                </div>

              </div>

            </div>

            {/* ===================================================
                PRODUCT INFORMATION
            =================================================== */}

            <div className="flex flex-col">

              {/* Description */}

              <p
                className="
                  font-sans-body
                  text-xs
                  leading-6
                  text-[#5A635A]
                  sm:text-sm
                "
              >
                {description}
              </p>

              {/* =================================================
                  QUALITY POINTS
              ================================================= */}

              <div
                className="
                  mt-4
                  grid
                  grid-cols-2
                  gap-x-3
                  gap-y-2.5
                "
              >

                {qualityPoints.map(
                  (item, index) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={`${item.label}-${index}`}
                        className="
                          flex
                          items-center
                          gap-2
                        "
                      >
                        <Icon
                          className="
                            h-3.5
                            w-3.5
                            shrink-0
                            text-[#667A61]
                          "
                          strokeWidth={1.8}
                        />

                        <span
                          className="
                            font-sans-body
                            text-[10px]
                            font-semibold
                            leading-tight
                            text-[#374139]
                            sm:text-[11px]
                          "
                        >
                          {item.label}
                        </span>
                      </div>
                    );
                  }
                )}

              </div>

              {/* =================================================
                  SIZE SELECTOR
              ================================================= */}

              <div
                className="
                  mt-5
                  border-t
                  border-[#DCD5C6]
                  pt-4
                "
              >

                <div
                  className="
                    mb-2.5
                    flex
                    items-center
                    justify-between
                  "
                >
                  <label
                    className="
                      font-sans-body
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.14em]
                      text-[#26302A]
                    "
                  >
                    {isMalayalam
                      ? 'അളവ് തിരഞ്ഞെടുക്കുക'
                      : 'Choose a size'}
                  </label>

                  <span
                    className="
                      font-sans-body
                      text-[9px]
                      text-[#7A817A]
                    "
                  >
                    {sizes.length}{' '}
                    {isMalayalam
                      ? 'ഓപ്ഷനുകൾ'
                      : 'options'}
                  </span>
                </div>

                <div
                  className="
                    grid
                    grid-cols-4
                    gap-2
                  "
                >

                  {sizes.map((weight) => {
                    const selected =
                      selectedWeight === weight;

                    return (
                      <button
                        type="button"
                        key={weight}
                        onClick={() => {
                          setSelectedWeight(weight);
                          setIsAdded(false);
                        }}
                        aria-pressed={selected}
                        className={`
                          rounded-xl
                          border
                          px-2
                          py-2.5
                          font-sans-body
                          text-[10px]
                          font-semibold
                          transition-all
                          duration-200
                          sm:text-xs
                          ${
                            selected
                              ? `
                                border-[#667A61]
                                bg-[#667A61]
                                text-white
                                shadow-[0_5px_15px_rgba(102,122,97,0.20)]
                              `
                              : `
                                border-[#DCD5C6]
                                bg-[#FFFDF7]
                                text-[#374139]
                                hover:border-[#A8B5A0]
                                hover:bg-[#EAE2D2]
                              `
                          }
                        `}
                      >
                        {weight}
                      </button>
                    );
                  })}

                </div>

              </div>

              {/* =================================================
                  PRICE
              ================================================= */}

              <div
                className="
                  mt-4
                  flex
                  items-center
                  justify-between
                  rounded-2xl
                  border
                  border-[#D6CDBB]
                  bg-[#EAE2D2]
                  px-4
                  py-3
                "
              >

                <div>

                  <p
                    className="
                      font-sans-body
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[0.12em]
                      text-[#6B726B]
                    "
                  >
                    {isMalayalam
                      ? 'തിരഞ്ഞെടുത്ത വില'
                      : 'Selected price'}
                  </p>

                  <p
                    className="
                      mt-0.5
                      font-sans-body
                      text-[10px]
                      text-[#7A817A]
                    "
                  >
                    {selectedWeight}
                  </p>

                </div>

                <span
                  className="
                    font-serif-heading
                    text-2xl
                    font-bold
                    tracking-tight
                    text-[#26302A]
                    sm:text-3xl
                  "
                >
                  {currentPrice}
                </span>

              </div>

            </div>

          </div>

        </div>

        {/* =========================================================
            ACTION AREA
        ========================================================= */}

        <div
          className="
            shrink-0
            border-t
            border-[#DCD5C6]
            bg-[#FFFDF7]
            px-4
            py-3
            sm:px-7
            sm:py-4
          "
        >

          {/* Main CTA */}

          <button
            type="button"
            onClick={handleAddToCart}
            className={`
              flex
              w-full
              items-center
              justify-center
              gap-2
              rounded-xl
              px-5
              py-3
              font-sans-body
              text-xs
              font-bold
              transition-all
              duration-300
              sm:py-3.5
              sm:text-sm
              ${
                isAdded
                  ? `
                    bg-[#26302A]
                    text-white
                  `
                  : `
                    bg-[#667A61]
                    text-white
                    shadow-[0_8px_20px_rgba(102,122,97,0.18)]
                    hover:-translate-y-0.5
                    hover:bg-[#596D54]
                    hover:shadow-[0_12px_25px_rgba(102,122,97,0.22)]
                  `
              }
            `}
          >

            {isAdded ? (
              <Check
                className="
                  h-4
                  w-4
                  text-[#E7D9B8]
                "
              />
            ) : (
              <Plus className="h-4 w-4" />
            )}

            <span>
              {isAdded
                ? isMalayalam
                  ? 'ഓർഡർ ലിസ്റ്റിലേക്ക് ചേർത്തു!'
                  : 'Added to Order List!'
                : isMalayalam
                  ? 'ഓർഡർ ലിസ്റ്റിലേക്ക് ചേർക്കുക'
                  : 'Add to Order List'}
            </span>

          </button>

          {/* Secondary actions */}

          <div
            className="
              mt-2
              grid
              grid-cols-2
              gap-2
            "
          >

            <a
              href={phoneUrl}
              className="
                flex
                items-center
                justify-center
                gap-2
                rounded-xl
                border
                border-[#DCD5C6]
                bg-[#26302A]
                px-4
                py-2.5
                font-sans-body
                text-xs
                font-semibold
                text-white
                transition-all
                duration-200
                hover:bg-[#1D251F]
              "
            >
              <Phone
                className="
                  h-3.5
                  w-3.5
                  text-[#E7D9B8]
                "
              />

              <span>
                {isMalayalam
                  ? 'വിളിക്കൂ'
                  : 'Call'}
              </span>
            </a>

            <button
              type="button"
              onClick={handleWhatsAppOrder}
              className="
                flex
                items-center
                justify-center
                gap-2
                rounded-xl
                border
                border-[#DCD5C6]
                bg-[#EAE2D2]
                px-4
                py-2.5
                font-sans-body
                text-xs
                font-semibold
                text-[#26302A]
                transition-all
                duration-200
                hover:border-[#A8B5A0]
                hover:bg-[#E1D9C9]
              "
            >
              <MessageCircle
                className="
                  h-3.5
                  w-3.5
                  text-[#25D366]
                "
              />

              <span>
                {isMalayalam
                  ? 'വാട്സ്ആപ്പ്'
                  : 'WhatsApp'}
              </span>
            </button>

          </div>

        </div>

      </div>
    </div>
  );
};

export default ProductDetailModal;