import React, { useState } from 'react';
import { ShoppingBag, Star, Sparkles, MessageCircle, Info } from 'lucide-react';
import ProductDetailModal from './ProductDetailModal';
import { translations } from '../translations';

// Asset Images
import spicesImg from '../assets/images/spices.png';
import flourImg from '../assets/images/flour.png';
import riceImg from '../assets/images/rice.png';
import grainsImg from '../assets/images/grains.png';
import realMillImg from '../assets/images/pks_mill_real.png';

const Products = ({ lang }) => {
  const t = translations[lang] || translations.en;
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const productList = [
    // Oils
    {
      id: 1,
      category: 'oil',
      title: lang === 'ml' ? 'ശുദ്ധമായ നാടൻ വെളിച്ചെണ്ണ' : 'Pure Country Coconut Oil',
      subtitle: lang === 'ml' ? 'തേങ്ങ ഡ്രയറിൽ ഉണക്കി ആട്ടുന്നു' : 'Highland Coconuts • Hot-Air Dryer',
      desc: lang === 'ml' ? 'ഉണക്ക തേങ്ങ ഹൈജീനിക് ഡ്രയറിൽ ഉണക്കി ആട്ടിയെടുത്ത 100% മായമില്ലാത്ത നാടൻ വെളിച്ചെണ്ണ.' : '100% pure country coconut oil extracted from sun-dried coconuts using hygienic hot-air dryers.',
      price: '₹220',
      unit: '/ Ltr',
      image: realMillImg,
      badge: lang === 'ml' ? 'ഫ്രഷ് ബാച്ച്' : 'Best Seller',
      rating: '5.0',
      isCustom: false,
    },
    // Spice Powders
    {
      id: 2,
      category: 'spices',
      title: lang === 'ml' ? 'കഴുകി ഉണക്കിയ മുളകുപൊടി' : 'Pure Chilli Powder',
      subtitle: lang === 'ml' ? 'കഴുകി വെയിലിൽ ഉണക്കിയത്' : 'Thoroughly Washed & Sun-Dried',
      desc: lang === 'ml' ? 'കഴുകി ഉണക്കിയ ഉത്തമമായ ചുവന്ന മുളക് സാവധാനം പൊടിച്ചത്. മായമില്ലാത്ത നിറവും എരിവും.' : 'Rich red chilli powder slow-milled from thoroughly washed and dried red chillies.',
      price: '₹140',
      unit: '/ 500g',
      image: spicesImg,
      badge: lang === 'ml' ? 'ശുചിത്വ ഗ്യാരന്റി' : 'Washed & Dried',
      rating: '5.0',
      isCustom: false,
    },
    {
      id: 3,
      category: 'spices',
      title: lang === 'ml' ? 'കഴുകി ഉണക്കിയ മഞ്ഞൾപ്പൊടി' : 'Turmeric Powder (നാടൻ മഞ്ഞൾ)',
      subtitle: lang === 'ml' ? 'ഉയർന്ന കുർകുമിൻ അളവ്' : 'High Curcumin • 100% Pure',
      desc: lang === 'ml' ? 'നാടൻ മഞ്ഞൾ കഴുകി ഉണക്കി പൊടിച്ചത്. പ്രകൃതിദത്ത നിറവും ഉത്തമ രോഗപ്രതിരോധ ശേഷിയും.' : 'High-curcumin golden turmeric powder washed & milled from natural turmeric roots.',
      price: '₹120',
      unit: '/ 500g',
      image: spicesImg,
      badge: lang === 'ml' ? 'ഹെൽത്തി' : 'High Curcumin',
      rating: '4.9',
      isCustom: false,
    },
    {
      id: 4,
      category: 'spices',
      title: lang === 'ml' ? 'കഴുകി ഉണക്കിയ മല്ലിപ്പൊടി' : 'Coriander Powder (മല്ലിപ്പൊടി)',
      subtitle: lang === 'ml' ? 'സുഗന്ധമുള്ള നാടൻ മല്ലി' : 'Aromatic & Slow Ground',
      desc: lang === 'ml' ? 'വൃത്തിയാക്കി കഴുകിയ മല്ലി മിതമായ ചൂടിൽ പൊടിച്ചത്. കറികൾക്ക് മികച്ച സുഗന്ധം.' : 'Pure aromatic coriander powder slow-ground to preserve essential spice oils.',
      price: '₹110',
      unit: '/ 500g',
      image: spicesImg,
      badge: lang === 'ml' ? 'ഫ്രഷ് സുഗന്ധം' : 'Aromatic',
      rating: '4.9',
      isCustom: false,
    },
    {
      id: 5,
      category: 'spices',
      title: lang === 'ml' ? 'കുരുമുളക് പൊടി' : 'Pepper Powder (നാടൻ കുരുമുളക്)',
      subtitle: lang === 'ml' ? 'വയനാടൻ കറുത്ത കുരുമുളക്' : 'Pure Wayanad Black Pepper',
      desc: lang === 'ml' ? 'മികച്ച കറുത്ത കുരുമുളക് ഫ്രഷായി പൊടിച്ചത്. നല്ല എരിവും മണവും.' : 'Freshly ground premium black pepper powder with authentic spice punch.',
      price: '₹180',
      unit: '/ 250g',
      image: spicesImg,
      badge: lang === 'ml' ? 'പ്രീമിയം' : 'Premium',
      rating: '5.0',
      isCustom: false,
    },
    {
      id: 6,
      category: 'spices',
      title: lang === 'ml' ? 'ജീരകപ്പൊടി & പെരുംജീരകപ്പൊടി' : 'Cumin & Fennel Powder',
      subtitle: lang === 'ml' ? 'നല്ല ജീരകം ഫ്രഷായി പൊടിച്ചത്' : 'Pure Cumin & Fennel Blends',
      desc: lang === 'ml' ? 'ജീരകവും പെരുംജീരകവും ആവശ്യമനുസരിച്ച് ഫ്രഷായി പൊടിച്ചു നൽകുന്നു.' : 'Freshly milled cumin and fennel powder for digestive health and flavor.',
      price: '₹95',
      unit: '/ 250g',
      image: spicesImg,
      badge: lang === 'ml' ? 'ഫ്രഷ്' : 'Fresh',
      rating: '4.8',
      isCustom: false,
    },
    // Flours
    {
      id: 7,
      category: 'flour',
      title: lang === 'ml' ? 'വറുത്ത അരിപ്പൊടി & പുട്ടുപൊടി' : 'Roasted Rice Flour / Puttu Podi',
      subtitle: lang === 'ml' ? 'ഇടിയപ്പപ്പൊടി, പത്തിരിപ്പൊടി' : 'Authentic Kerala Breakfast',
      desc: lang === 'ml' ? 'അരി കഴുകി ഉണക്കി പാകത്തിന് വറുത്തു പൊടിച്ച ഫ്രഷ് പുട്ടുപൊടിയും പത്തിരിപ്പൊടിയും.' : 'Finely ground roasted rice flour for soft puttu, idiyappam, and pathiri.',
      price: '₹70',
      unit: '/ 1kg',
      image: riceImg,
      badge: lang === 'ml' ? 'ട്രഡീഷണൽ' : 'Breakfast Special',
      rating: '4.9',
      isCustom: false,
    },
    {
      id: 8,
      category: 'flour',
      title: lang === 'ml' ? 'വറുത്തു പൊടിച്ച ആട്ട (Wheat Flour)' : 'Roasted Whole Wheat Flour (Atta)',
      subtitle: lang === 'ml' ? 'മൃദുവായ ചപ്പാത്തിക്ക്' : '100% Whole Grain Whole Wheat',
      desc: lang === 'ml' ? 'ഗോതമ്പ് കഴുകി മിതമായി വറുത്ത് കല്ലിൽ പൊടിച്ച ശുദ്ധമായ ആട്ട. സോഫ്റ്റ് ചപ്പാത്തി ഉറപ്പ്.' : 'Slow-roasted whole wheat chakki flour for soft, nutritious rotis.',
      price: '₹65',
      unit: '/ 1kg',
      image: flourImg,
      badge: lang === 'ml' ? 'സോഫ്റ്റ് ചപ്പാത്തി' : '100% Whole Wheat',
      rating: '5.0',
      isCustom: false,
    },
    {
      id: 9,
      category: 'flour',
      title: lang === 'ml' ? 'മൈദ (Maida Flour)' : 'Maida Flour (ഹൈജീനിക്)',
      subtitle: lang === 'ml' ? 'ബേക്കിംഗ് & വിഭവങ്ങൾക്ക്' : 'Premium All-Purpose Baking Flour',
      desc: lang === 'ml' ? 'ബേക്കിംഗിനും പലഹാരങ്ങൾക്കുമായി ഫ്രഷായി ലഭ്യമാക്കുന്ന മൈദ.' : 'Hygienically packed premium all-purpose flour for baking and dishes.',
      price: '₹55',
      unit: '/ 1kg',
      image: flourImg,
      badge: lang === 'ml' ? 'ബേക്കിംഗ്' : 'Baking Grade',
      rating: '4.8',
      isCustom: false,
    },
    // Grains
    {
      id: 10,
      category: 'grains',
      title: lang === 'ml' ? 'മൾട്ടിഗ്രൈൻ & ഹെൽത്ത് മിക്സ്' : 'Multi Grain & Health Mix Powder',
      subtitle: lang === 'ml' ? 'നവധാന്യപ്പൊടി' : 'Traditional Multi-Grain Nutrition',
      desc: lang === 'ml' ? 'റാഗി, മില്ലറ്റ്, ചെറുപയർ തുടങ്ങി ധാന്യങ്ങൾ മുളപ്പിച്ച് വറുത്തു പൊടിച്ച നവധാന്യപ്പൊടി.' : 'Sprouted multi-grain and millet health mix for wholesome daily nourishment.',
      price: '₹160',
      unit: '/ 500g',
      image: grainsImg,
      badge: lang === 'ml' ? 'നവധാന്യം' : 'Superfood',
      rating: '5.0',
      isCustom: false,
    },
    {
      id: 11,
      category: 'grains',
      title: lang === 'ml' ? 'റാഗി & മില്ലറ്റ് പൊടി' : 'Pure Ragi & Millet Flour',
      subtitle: lang === 'ml' ? 'പ്രകൃതിദത്ത പോഷകം' : '100% Natural Finger Millet',
      desc: lang === 'ml' ? 'കാൽസ്യം സമൃദ്ധമായ റാഗിയും മില്ലറ്റുകളും ശുചിത്വത്തോടെ പൊടിച്ചെടുത്തത്.' : 'Pure calcium-rich ragi and finger millet flour for healthy porridge & rotis.',
      price: '₹90',
      unit: '/ 500g',
      image: grainsImg,
      badge: lang === 'ml' ? 'കാൽസ്യം' : 'Rich Calcium',
      rating: '4.9',
      isCustom: false,
    },
    // Custom Processing
    {
      id: 12,
      category: 'custom',
      title: lang === 'ml' ? 'നിങ്ങളുടെ സ്വന്തം ധാന്യങ്ങൾ പൊടിക്കാം' : 'Bring Your Own Ingredients (Custom Grinding)',
      subtitle: lang === 'ml' ? 'അരി, ഗോതമ്പ്, മസാലകൾ, തേങ്ങ' : 'Rice, Wheat, Spices, Coconuts',
      desc: lang === 'ml' ? 'നിങ്ങളുടെ സ്വന്തം വീട്ടിലെ തേങ്ങ, ഗോതമ്പ്, അരി, മുളക്, മഞ്ഞൾ കൊണ്ടുതന്നാൽ ആവശ്യാനുസരണം പൊടിച്ചു നൽകുന്നു.' : 'Bring your raw grains, chillies, turmeric, or cut coconuts for custom grinding and drying.',
      price: '₹15',
      unit: '/ Kg service',
      image: realMillImg,
      badge: lang === 'ml' ? 'കസ്റ്റം മില്ലിംഗ്' : 'Custom Service',
      rating: '5.0',
      isCustom: true,
    },
  ];

  const categories = [
    { id: 'all', label: t?.products?.filterAll || 'All Products' },
    { id: 'oil', label: t?.products?.catOils || 'Edible Oils' },
    { id: 'spices', label: t?.products?.catSpices || 'Spice Powders' },
    { id: 'flour', label: t?.products?.catFlour || 'Flour' },
    { id: 'grains', label: t?.products?.catGrains || 'Grain Powders' },
    { id: 'custom', label: t?.nav?.customGrinding || 'Custom Grinding' },
  ];

  const filteredProducts = activeCategory === 'all'
    ? productList
    : productList.filter((p) => p.category === activeCategory);

  return (
    <section id="products" className="bg-[#FFFDF8] py-20 md:py-28 relative">
      <div className="max-w-[1280px] mx-auto px-5 md:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-3 text-[#D8A43A]">
            <span className="h-[1px] w-12 bg-[#D8A43A]/40"></span>
            <span className="font-serif-heading font-semibold text-xs sm:text-sm tracking-wider uppercase">
              {t?.products?.tag || "✦ OUR PRODUCTS & SERVICES ✦"}
            </span>
            <span className="h-[1px] w-12 bg-[#D8A43A]/40"></span>
          </div>

          <h2 className="font-serif-heading text-3xl sm:text-4xl md:text-[42px] font-bold text-[#12351D] leading-tight">
            {t?.products?.heading || "Pure & Fresh Products"}
          </h2>

          <p className="font-sans-body text-sm sm:text-base text-[#666666] leading-relaxed">
            {t?.products?.subtitle || "Freshly pressed pure oils, ground spices, and custom grain processing for your family."}
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`font-button text-xs sm:text-sm px-5 py-2.5 rounded-full transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-[#1D4F2B] text-white shadow-md font-bold'
                  : 'bg-[#F6F1E7] text-[#12351D] hover:bg-[#E8E2D6] border border-[#E8E2D6]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 text-left">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-[24px] border border-[#E8E2D6] overflow-hidden shadow-premium-soft hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
            >
              {/* Product Image Box */}
              <div className="relative h-48 sm:h-52 bg-[#F6F1E7] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Badge */}
                <div className="absolute top-3 left-3 bg-[#12351D]/90 backdrop-blur-sm text-[#D8A43A] text-[10px] font-button font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-[#D8A43A]/30">
                  {product.badge}
                </div>

                {/* Rating */}
                <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-xs font-bold text-[#12351D] flex items-center gap-1 shadow-sm">
                  <Star className="w-3.5 h-3.5 fill-[#D8A43A] text-[#D8A43A]" />
                  <span>{product.rating}</span>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif-heading text-base sm:text-lg font-bold text-[#12351D] leading-snug">
                    {product.title}
                  </h3>
                  <p className="text-[11px] font-sans-body text-[#D8A43A] font-semibold mt-0.5">
                    {product.subtitle}
                  </p>
                  <p className="text-xs text-[#666666] line-clamp-2 mt-2 leading-relaxed">
                    {product.desc}
                  </p>
                </div>

                {/* Price & Action */}
                <div className="pt-3 border-t border-[#E8E2D6] flex items-center justify-between gap-2">
                  <div>
                    <span className="font-serif-heading text-lg font-bold text-[#12351D]">
                      {product.price}
                    </span>
                    <span className="text-[11px] text-[#666666] ml-1">
                      {product.unit}
                    </span>
                  </div>

                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="font-button text-xs bg-[#1D4F2B] hover:bg-[#12351D] text-white px-4 py-2 rounded-full flex items-center gap-1.5 transition-colors shadow-sm"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>{t?.products?.btnViewDetails || "View Details"}</span>
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Modal Popup */}
      {selectedProduct && (
        <ProductDetailModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          lang={lang}
        />
      )}
    </section>
  );
};

export default Products;
