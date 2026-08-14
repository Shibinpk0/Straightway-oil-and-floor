import React, { useEffect, useMemo, useState } from 'react';
import {
  X,
  ArrowLeft,
  CheckCircle,
  ShieldCheck,
  Plus,
  Check,
  MapPin,
} from 'lucide-react';

import { translations } from '../translations';

const PRODUCT_HISTORY_KEY = 'straightway-product-detail';

const ProductDetailModal = ({
  product,
  onClose,
  lang,
  onQuickAdd,
}) => {
  const t = translations[lang] || translations.en;
  const isMalayalam = lang === 'ml';

  const sizes = product?.sizes || [];

  const defaultWeight = useMemo(() => {
    if (!sizes.length) return '500g';
    return sizes[Math.floor(sizes.length / 2)];
  }, [product]);

  const [selectedWeight, setSelectedWeight] =
    useState(defaultWeight);

  const [isAdded, setIsAdded] = useState(false);

  /*
   * =========================================================
   * RESET WHEN PRODUCT CHANGES
   * =========================================================
   */

  useEffect(() => {
    if (!product) return;

    setSelectedWeight(defaultWeight);
    setIsAdded(false);
  }, [product, defaultWeight]);

  /*
   * =========================================================
   * LOCK BODY SCROLL
   * =========================================================
   */

  useEffect(() => {
    if (!product) return;

    const previousOverflow =
      document.body.style.overflow;

    const previousOverscroll =
      document.body.style.overscrollBehavior;

    document.body.style.overflow = 'hidden';
    document.body.style.overscrollBehavior = 'none';

    return () => {
      document.body.style.overflow = previousOverflow;
      document.body.style.overscrollBehavior =
        previousOverscroll;
    };
  }, [product]);

  /*
   * =========================================================
   * ESCAPE KEY
   * =========================================================
   */

  useEffect(() => {
    if (!product) return;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        handleClose();
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
  }, [product]);

  /*
   * =========================================================
   * CLOSE MODAL
   *
   * The important part:
   *
   * When the modal was opened through browser history,
   * closing it goes BACK one history entry.
   *
   * This prevents the browser from leaving the website.
   * =========================================================
   */

  const handleClose = () => {
    if (!product) return;

    const currentState = window.history.state;

    if (
      currentState?.straightwayProductDetail ===
      PRODUCT_HISTORY_KEY
    ) {
      window.history.back();
    } else {
      onClose();
    }
  };

  /*
   * =========================================================
   * PRODUCT INFORMATION
   * =========================================================
   */

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

  /*
   * =========================================================
   * QUALITY POINTS
   * =========================================================
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
   * =========================================================
   * ADD TO ORDER LIST
   * =========================================================
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
        z-[200]
        flex
        items-end
        justify-center
        bg-[#26302A]/70
        backdrop-blur-[3px]
        sm:items-center
        sm:p-4
      "
      role="dialog"
      aria-modal="true"
      aria-labelledby="product-modal-title"
      onMouseDown={(event) => {
        if (
          event.target === event.currentTarget
        ) {
          handleClose();
        }
      }}
    >

      {/* =====================================================
          MODAL
      ===================================================== */}

      <div
        className="
          relative
          flex
          h-[100dvh]
          max-h-[100dvh]
          w-full
          flex-col
          overflow-hidden
          bg-[#F7F3E8]
          shadow-[0_30px_80px_rgba(0,0,0,0.28)]
          animate-slide-up

          sm:h-auto
          sm:max-h-[92dvh]
          sm:max-w-[900px]
          sm:rounded-[28px]
          sm:border
          sm:border-[#DCD5C6]
          sm:animate-fadeIn
        "
        onMouseDown={(event) => {
          event.stopPropagation();
        }}
      >

        {/* ===================================================
            MOBILE TOP BAR
        =================================================== */}

        <div
          className="
            sticky
            top-0
            z-30
            flex
            shrink-0
            items-center
            justify-between
            border-b
            border-[#DCD5C6]
            bg-[#F7F3E8]/95
            px-4
            pb-3
            pt-[max(12px,env(safe-area-inset-top))]
            backdrop-blur-xl
            sm:px-6
            sm:py-4
          "
        >

          {/* Back */}

          <button
            type="button"
            onClick={handleClose}
            aria-label={
              isMalayalam
                ? 'തിരികെ പോകുക'
                : 'Go back'
            }
            className="
              flex
              h-10
              items-center
              gap-2
              rounded-full
              px-3
              text-[#26302A]
              transition-all
              duration-200
              hover:bg-[#EAE2D2]
              active:scale-95
            "
          >
            <ArrowLeft className="h-5 w-5" />

            <span
              className="
                font-sans-body
                text-xs
                font-semibold
                sm:text-sm
              "
            >
              {isMalayalam
                ? 'തിരികെ'
                : 'Back'}
            </span>
          </button>

          {/* Product label */}

          <span
            className="
              max-w-[45%]
              truncate
              font-sans-body
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.12em]
              text-[#8A8F87]
            "
          >
            {isMalayalam
              ? 'ഉൽപ്പന്ന വിശദാംശങ്ങൾ'
              : 'Product Details'}
          </span>

          {/* Close */}

          <button
            type="button"
            onClick={handleClose}
            aria-label="Close product details"
            className="
              flex
              h-10
              w-10
              shrink-0
              items-center
              justify-center
              rounded-full
              border
              border-[#DCD5C6]
              bg-[#FFFDF7]
              text-[#26302A]
              shadow-sm
              transition-all
              duration-200
              hover:bg-[#667A61]
              hover:text-white
              active:scale-95
            "
          >
            <X className="h-4 w-4" />
          </button>

        </div>

        {/* ===================================================
            SCROLLABLE CONTENT
        =================================================== */}

        <div
          className="
            min-h-0
            flex-1
            overflow-y-auto
            overscroll-contain
            px-4
            py-5
            pb-6

            sm:px-7
            sm:py-6
            lg:px-8
          "
          style={{
            WebkitOverflowScrolling: 'touch',
          }}
        >

          {/* =================================================
              PRODUCT HEADER
          ================================================= */}

          <div
            className="
              mb-5
              max-w-3xl
              pr-1
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
                "
              >
                PKS Straightway · Karulai
              </span>
            </div>

            <h2
              id="product-modal-title"
              className="
                font-serif-heading
                text-[25px]
                font-bold
                leading-[1.08]
                tracking-[-0.02em]
                text-[#26302A]

                sm:text-3xl
                lg:text-4xl
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

          {/* =================================================
              PRODUCT GRID
          ================================================= */}

          <div
            className="
              grid
              gap-5

              md:grid-cols-[0.95fr_1.05fr]
              md:gap-7

              lg:gap-8
            "
          >

            {/* =================================================
                IMAGE
            ================================================= */}

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

                  sm:aspect-[5/4]
                  md:aspect-[4/3]
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

            {/* =================================================
                INFORMATION
            ================================================= */}

            <div className="flex flex-col">

              {/* Description */}

              <p
                className="
                  font-sans-body
                  text-xs
                  leading-6
                  text-[#5A635A]

                  sm:text-sm
                  sm:leading-6
                "
              >
                {description}
              </p>

              {/* =================================================
                  QUALITY
              ================================================= */}

              <div
                className="
                  mt-4
                  grid
                  grid-cols-2
                  gap-x-3
                  gap-y-3
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
                          min-w-0
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
                  SIZE
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
                    grid-cols-2
                    gap-2

                    sm:grid-cols-4
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
                          min-h-[42px]
                          rounded-xl
                          border
                          px-2
                          py-2.5
                          font-sans-body
                          text-[11px]
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

                {/* NORMAL PRICE FONT */}

                <span
                  className="
                    font-sans-body
                    text-xl
                    font-semibold
                    tracking-tight
                    text-[#26302A]

                    sm:text-2xl
                  "
                >
                  {currentPrice}
                </span>

              </div>

            </div>

          </div>

        </div>

        {/* =====================================================
            BOTTOM ACTION
        ===================================================== */}

        <div
          className="
            shrink-0
            border-t
            border-[#DCD5C6]
            bg-[#FFFDF7]/95
            px-4
            pb-[max(12px,env(safe-area-inset-bottom))]
            pt-3
            backdrop-blur-xl

            sm:px-7
            sm:py-4
          "
        >

          <button
            type="button"
            onClick={handleAddToCart}
            className={`
              flex
              min-h-[48px]
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
                    hover:bg-[#596D54]
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

        </div>

      </div>
    </div>
  );
};

export default ProductDetailModal;