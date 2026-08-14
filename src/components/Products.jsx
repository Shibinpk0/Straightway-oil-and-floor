import React, { useEffect, useState } from 'react';
import {
  ShoppingBag,
  Plus,
  Check,
  SlidersHorizontal,
} from 'lucide-react';

import ProductDetailModal from './ProductDetailModal';
import { productList } from '../data/productsData';
import { translations } from '../translations';

const PRODUCTS_MODAL_STATE = 'straightway-product-modal';

const Products = ({ lang, onQuickAdd }) => {
  const t = translations[lang] || translations.en;

  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cardWeights, setCardWeights] = useState({});
  const [addedId, setAddedId] = useState(null);

  /*
   * =========================================================
   * CATEGORIES
   * =========================================================
   */

  const categories = [
    {
      id: 'all',
      label: t?.products?.filterAll || 'All Products',
    },
    {
      id: 'oil',
      label: t?.products?.catOils || 'Edible Oils',
    },
    {
      id: 'spices',
      label: t?.products?.catSpices || 'Spice Powders',
    },
    {
      id: 'flour',
      label: t?.products?.catFlour || 'Flour',
    },
    {
      id: 'grains',
      label: t?.products?.catGrains || 'Grain Powders',
    },
    {
      id: 'custom',
      label: t?.nav?.customGrinding || 'Custom Grinding',
    },
  ];

  /*
   * =========================================================
   * FILTER PRODUCTS
   * =========================================================
   */

  const filteredProducts =
    activeCategory === 'all'
      ? productList
      : productList.filter(
          (product) =>
            product.category === activeCategory
        );

  /*
   * =========================================================
   * CARD WEIGHT
   * =========================================================
   */

  const getCardWeight = (product) => {
    if (!product?.sizes?.length) {
      return null;
    }

    return (
      cardWeights[product.id] ||
      product.sizes[
        Math.floor(product.sizes.length / 2)
      ]
    );
  };

  /*
   * =========================================================
   * PRICE
   * =========================================================
   */

  const getDisplayPrice = (product, weight) => {
    return product?.prices?.[weight] || '₹0';
  };

  /*
   * =========================================================
   * CHANGE CARD WEIGHT
   * =========================================================
   */

  const handleWeightChange = (
    productId,
    weight,
    event
  ) => {
    event.stopPropagation();

    setCardWeights((previous) => ({
      ...previous,
      [productId]: weight,
    }));
  };

  /*
   * =========================================================
   * QUICK ADD
   * =========================================================
   */

  const handleQuickAdd = (product, weight) => {
    if (!product || !weight) return;

    if (typeof onQuickAdd === 'function') {
      onQuickAdd(product, weight);
    }

    if (
      typeof navigator !== 'undefined' &&
      navigator.vibrate
    ) {
      navigator.vibrate(10);
    }

    setAddedId(product.id);

    window.setTimeout(() => {
      setAddedId(null);
    }, 1000);
  };

  /*
   * =========================================================
   * OPEN PRODUCT
   *
   * IMPORTANT:
   * Push a browser history entry when the modal opens.
   * This makes Android/iPhone browser Back close the modal
   * instead of leaving the website.
   * =========================================================
   */

  const openProduct = (product) => {
    if (!product) return;

    setSelectedProduct(product);

    /*
     * Prevent duplicate history entries.
     */
    if (
      window.history.state?.straightwayProductModal
    ) {
      return;
    }

    window.history.pushState(
      {
        straightwayProductModal: true,
        productId: product.id,
      },
      '',
      window.location.href
    );
  };

  /*
   * =========================================================
   * CLOSE PRODUCT
   * =========================================================
   */

  const closeProduct = () => {
    /*
     * If modal was opened through browser history,
     * go back one history entry.
     *
     * The popstate listener below will actually close
     * the modal.
     */
    if (
      window.history.state?.straightwayProductModal
    ) {
      window.history.back();
      return;
    }

    setSelectedProduct(null);
  };

  /*
   * =========================================================
   * BROWSER BACK BUTTON
   * =========================================================
   *
   * Android / iPhone browser back:
   *
   * Product page
   *      ↓
   * Product modal
   *      ↓
   * Browser Back
   *      ↓
   * Modal closes
   *      ↓
   * Product section remains
   *
   * =========================================================
   */

  useEffect(() => {
    const handlePopState = () => {
      /*
       * Any popstate means the temporary modal history
       * entry has been removed.
       */
      setSelectedProduct(null);
    };

    window.addEventListener(
      'popstate',
      handlePopState
    );

    return () => {
      window.removeEventListener(
        'popstate',
        handlePopState
      );
    };
  }, []);

  /*
   * =========================================================
   * ESCAPE KEY
   * =========================================================
   */

  useEffect(() => {
    if (!selectedProduct) return;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeProduct();
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
  }, [selectedProduct]);

  /*
   * =========================================================
   * PRODUCT CARD
   * =========================================================
   */

  const ProductCard = ({
    product,
    mobile = false,
  }) => {
    const currentWeight =
      getCardWeight(product);

    const displayPrice =
      getDisplayPrice(
        product,
        currentWeight
      );

    const isAdded =
      addedId === product.id;

    return (
      <article
        className={`
          group
          relative
          overflow-hidden
          bg-[#FFFDF7]
          border
          border-[#E1D9C9]
          transition-all
          duration-300

          hover:-translate-y-1
          hover:border-[#C7A15A]/50
          hover:shadow-[0_14px_35px_rgba(41,51,43,0.10)]

          ${
            mobile
              ? 'rounded-xl'
              : 'rounded-[20px]'
          }
        `}
      >

        {/* IMAGE */}

        <button
          type="button"
          onClick={() =>
            openProduct(product)
          }
          className={`
            relative
            block
            w-full
            overflow-hidden
            bg-[#EAE2D2]
            text-left
            focus:outline-none
            focus-visible:ring-2
            focus-visible:ring-[#667A61]

            ${
              mobile
                ? 'h-36'
                : 'h-48'
            }
          `}
        >
          <img
            src={product.image}
            alt={`${product.titleEn} - Straightway Mill`}
            className="
              h-full
              w-full
              object-cover
              object-center
              transition-transform
              duration-500
              group-hover:scale-[1.04]
            "
          />

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-[#29332B]/25
              via-transparent
              to-transparent
            "
          />

          {product.badge && (
            <span
              className="
                absolute
                left-2.5
                top-2.5
                rounded-md
                bg-[#B86F52]
                px-1.5
                py-1
                text-[8px]
                font-bold
                uppercase
                tracking-wider
                text-white
                shadow-sm
              "
            >
              {product.badge}
            </span>
          )}

          {!mobile && (
            <span
              className="
                absolute
                bottom-3
                right-3
                rounded-full
                bg-[#FFFDF7]/90
                px-2.5
                py-1
                text-[9px]
                font-semibold
                text-[#29332B]
                opacity-0
                backdrop-blur-sm
                transition-opacity
                duration-300
                group-hover:opacity-100
              "
            >
              View details
            </span>
          )}
        </button>

        {/* CONTENT */}

        <div
          className={
            mobile
              ? 'p-2.5'
              : 'p-4'
          }
        >

          {/* PRODUCT NAME */}

          <button
            type="button"
            onClick={() =>
              openProduct(product)
            }
            className="
              block
              w-full
              text-left
            "
          >
            <h3
              className={`
                font-serif-heading
                font-bold
                leading-tight
                text-[#29332B]
                transition-colors
                group-hover:text-[#667A61]

                ${
                  mobile
                    ? 'text-xs line-clamp-1'
                    : 'text-base'
                }
              `}
            >
              {product.titleEn}
            </h3>

            {!mobile &&
              product.titleMl && (
                <p
                  className="
                    mt-0.5
                    text-xs
                    font-medium
                    text-[#667A61]
                  "
                >
                  {product.titleMl}
                </p>
              )}
          </button>

          {/* DESCRIPTION */}

          {!mobile && (
            <p
              className="
                mt-2
                line-clamp-2
                text-xs
                leading-relaxed
                text-[#5A635A]
              "
            >
              {product.desc}
            </p>
          )}

          {/* PRICE + SIZE */}

          <div
            className={`
              flex
              items-end
              justify-between
              gap-2
              border-t
              border-[#E1D9C9]

              ${
                mobile
                  ? 'mt-2 pt-2'
                  : 'mt-4 pt-3'
              }
            `}
          >

            <div className="min-w-0">

              <span
                className="
                  mb-1
                  block
                  text-[8px]
                  font-bold
                  uppercase
                  tracking-wider
                  text-[#8A8F87]
                "
              >
                Pack
              </span>

              <select
                value={currentWeight || ''}
                onChange={(event) =>
                  handleWeightChange(
                    product.id,
                    event.target.value,
                    event
                  )
                }
                className="
                  max-w-full
                  cursor-pointer
                  rounded-lg
                  border
                  border-[#E1D9C9]
                  bg-[#EAE2D2]
                  px-2
                  py-1.5
                  text-[9px]
                  font-semibold
                  text-[#29332B]
                  outline-none
                  transition-colors
                  hover:border-[#667A61]
                  focus:border-[#667A61]
                  focus:ring-1
                  focus:ring-[#667A61]/30
                  sm:text-xs
                "
              >
                {product.sizes?.map(
                  (weight) => (
                    <option
                      key={weight}
                      value={weight}
                    >
                      {weight}
                    </option>
                  )
                )}
              </select>

            </div>

            <div className="shrink-0 text-right">

              <span
                className="
                  block
                  text-[8px]
                  uppercase
                  tracking-wider
                  text-[#8A8F87]
                "
              >
                Price
              </span>

              {/* NORMAL PRICE FONT */}
              <span
                className={`
                  font-sans-body
                  font-semibold
                  text-[#29332B]

                  ${
                    mobile
                      ? 'text-sm'
                      : 'text-lg'
                  }
                `}
              >
                {displayPrice}
              </span>

            </div>

          </div>

          {/* ACTION */}

          {mobile ? (
            <button
              type="button"
              onClick={() =>
                handleQuickAdd(
                  product,
                  currentWeight
                )
              }
              className={`
                mt-2
                flex
                h-8
                w-full
                items-center
                justify-center
                gap-1.5
                rounded-full
                text-[10px]
                font-bold
                transition-all
                duration-200
                active:scale-[0.96]

                ${
                  isAdded
                    ? 'bg-[#29332B] text-white'
                    : 'bg-[#667A61] text-white'
                }
              `}
            >
              {isAdded ? (
                <>
                  <Check
                    className="
                      h-3.5
                      w-3.5
                      text-[#C7A15A]
                    "
                  />
                  Added
                </>
              ) : (
                <>
                  <Plus
                    className="
                      h-3.5
                      w-3.5
                    "
                  />
                  Add
                </>
              )}
            </button>
          ) : (
            <div className="mt-3 flex gap-2">

              <button
                type="button"
                onClick={() =>
                  openProduct(product)
                }
                className="
                  flex
                  flex-1
                  items-center
                  justify-center
                  gap-1.5
                  rounded-full
                  border
                  border-[#E1D9C9]
                  bg-transparent
                  px-3
                  py-2
                  text-xs
                  font-semibold
                  text-[#29332B]
                  transition-all
                  hover:border-[#667A61]
                  hover:bg-[#EAE2D2]
                "
              >
                <ShoppingBag
                  className="
                    h-3.5
                    w-3.5
                  "
                />

                Details
              </button>

              <button
                type="button"
                onClick={() =>
                  handleQuickAdd(
                    product,
                    currentWeight
                  )
                }
                className={`
                  flex
                  flex-1
                  items-center
                  justify-center
                  gap-1.5
                  rounded-full
                  px-3
                  py-2
                  text-xs
                  font-bold
                  text-white
                  shadow-sm
                  transition-all
                  active:scale-[0.98]

                  ${
                    isAdded
                      ? 'bg-[#29332B]'
                      : 'bg-[#667A61] hover:bg-[#52644E]'
                  }
                `}
              >
                {isAdded ? (
                  <>
                    <Check
                      className="
                        h-3.5
                        w-3.5
                        text-[#C7A15A]
                      "
                    />
                    Added
                  </>
                ) : (
                  <>
                    <Plus
                      className="
                        h-3.5
                        w-3.5
                      "
                    />
                    Quick Add
                  </>
                )}
              </button>

            </div>
          )}

        </div>

      </article>
    );
  };

  /*
   * =========================================================
   * RENDER
   * =========================================================
   */

  return (
    <>
      <section
        id="products"
        className="
          relative
          overflow-hidden
          bg-[#F7F3E8]
          py-10
          sm:py-12
          lg:py-16
        "
      >

        {/* BACKGROUND */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
          "
        >
          <div
            className="
              absolute
              -right-40
              top-20
              h-[400px]
              w-[400px]
              rounded-full
              bg-[#667A61]/[0.035]
              blur-3xl
            "
          />

          <div
            className="
              absolute
              -left-40
              bottom-20
              h-[350px]
              w-[350px]
              rounded-full
              bg-[#B86F52]/[0.025]
              blur-3xl
            "
          />
        </div>

        <div
          className="
            relative
            mx-auto
            max-w-[1280px]
            px-4
            sm:px-6
            lg:px-10
          "
        >

          {/* HEADER */}

          <div
            className="
              mx-auto
              mb-6
              max-w-2xl
              text-center
              sm:mb-8
            "
          >

            <div
              className="
                mb-2.5
                flex
                items-center
                justify-center
                gap-3
              "
            >
              <span
                className="
                  h-px
                  w-8
                  bg-[#B86F52]/50
                  sm:w-12
                "
              />

              <span
                className="
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-[#B86F52]
                  sm:text-[10px]
                "
              >
                {t?.products?.tag ||
                  'Our Products & Services'}
              </span>

              <span
                className="
                  h-px
                  w-8
                  bg-[#B86F52]/50
                  sm:w-12
                "
              />
            </div>

            <h2
              className="
                font-serif-heading
                text-2xl
                font-bold
                leading-tight
                tracking-tight
                text-[#29332B]
                sm:text-3xl
                lg:text-4xl
              "
            >
              {t?.products?.heading ||
                'Pure & Fresh Products'}
            </h2>

            <p
              className="
                mx-auto
                mt-2
                max-w-lg
                text-xs
                leading-relaxed
                text-[#5A635A]
                sm:text-sm
              "
            >
              {lang === 'ml'
                ? 'പരമ്പരാഗത രീതിയിൽ പുതുമയോടെ തയ്യാറാക്കിയ ഉൽപ്പന്നങ്ങൾ.'
                : 'Freshly processed products made with traditional care and honest ingredients.'}
            </p>

          </div>

          {/* CATEGORY NAV */}

          <div className="mb-6 sm:mb-8">

            <div
              className="
                flex
                items-center
                gap-2
                overflow-x-auto
                pb-2
                scrollbar-hide
                sm:flex-wrap
                sm:justify-center
              "
            >

              <div
                className="
                  flex
                  shrink-0
                  items-center
                  text-[#8A8F87]
                  sm:hidden
                "
              >
                <SlidersHorizontal
                  className="
                    h-3.5
                    w-3.5
                  "
                />
              </div>

              {categories.map(
                (category) => {
                  const active =
                    activeCategory ===
                    category.id;

                  return (
                    <button
                      key={category.id}
                      type="button"
                      onClick={() =>
                        setActiveCategory(
                          category.id
                        )
                      }
                      className={`
                        shrink-0
                        rounded-full
                        px-3.5
                        py-2
                        text-[10px]
                        font-semibold
                        transition-all
                        duration-200
                        sm:px-4
                        sm:py-2
                        sm:text-xs

                        ${
                          active
                            ? 'bg-[#667A61] text-white shadow-sm'
                            : 'border border-[#E1D9C9] bg-[#EAE2D2] text-[#29332B] hover:border-[#667A61]/40'
                        }
                      `}
                    >
                      {category.label}
                    </button>
                  );
                }
              )}

            </div>

          </div>

          {/* MOBILE */}

          <div
            className="
              grid
              grid-cols-2
              gap-2.5
              sm:hidden
            "
          >
            {filteredProducts.map(
              (product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  mobile
                />
              )
            )}
          </div>

          {/* DESKTOP */}

          <div
            className="
              hidden
              sm:grid
              sm:grid-cols-2
              lg:grid-cols-3
              xl:grid-cols-4
              gap-5
              lg:gap-6
            "
          >
            {filteredProducts.map(
              (product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              )
            )}
          </div>

          {/* EMPTY */}

          {filteredProducts.length === 0 && (
            <div
              className="
                rounded-2xl
                border
                border-dashed
                border-[#DCD5C6]
                bg-[#EAE2D2]/40
                py-12
                text-center
              "
            >
              <ShoppingBag
                className="
                  mx-auto
                  mb-3
                  h-8
                  w-8
                  text-[#667A61]/60
                "
              />

              <p
                className="
                  font-serif-heading
                  text-base
                  font-bold
                  text-[#29332B]
                "
              >
                {lang === 'ml'
                  ? 'ഉൽപ്പന്നങ്ങൾ ലഭ്യമല്ല'
                  : 'No products found'}
              </p>

              <p
                className="
                  mt-1
                  text-xs
                  text-[#5A635A]
                "
              >
                {lang === 'ml'
                  ? 'മറ്റൊരു വിഭാഗം തിരഞ്ഞെടുക്കുക.'
                  : 'Try selecting another category.'}
              </p>
            </div>
          )}

          {/* BOTTOM NOTE */}

          <div
            className="
              mt-6
              flex
              items-center
              justify-center
              gap-2
              text-center
              sm:mt-8
            "
          >
            <span
              className="
                h-px
                w-6
                bg-[#DCD5C6]
              "
            />

            <p
              className="
                text-[9px]
                font-medium
                tracking-wide
                text-[#8A8F87]
                sm:text-[10px]
              "
            >
              {lang === 'ml'
                ? 'പുതുതായി പൊടിച്ച് • ശുചിത്വത്തോടെ തയ്യാറാക്കി'
                : 'Freshly milled • Carefully processed'}
            </p>

            <span
              className="
                h-px
                w-6
                bg-[#DCD5C6]
              "
            />
          </div>

        </div>

        {/* BOTTOM BLEND */}

        <div
          className="
            pointer-events-none
            absolute
            bottom-0
            left-0
            w-full
            overflow-hidden
            leading-none
          "
        >
          <svg
            className="
              relative
              block
              h-8
              w-full
              sm:h-10
            "
            viewBox="0 0 1200 80"
            preserveAspectRatio="none"
          >
            <path
              d="
                M0,45
                C140,70 240,20 380,40
                C520,60 600,72 740,40
                C880,10 1010,65 1200,30
                L1200,80
                L0,80
                Z
              "
              fill="#EAE2D2"
            />
          </svg>
        </div>

      </section>

      {/* =====================================================
          PRODUCT DETAIL MODAL
          ===================================================== */}

      {selectedProduct && (
        <ProductDetailModal
          product={selectedProduct}
          onClose={closeProduct}
          lang={lang}
          onQuickAdd={onQuickAdd}
        />
      )}
    </>
  );
};

export default Products;