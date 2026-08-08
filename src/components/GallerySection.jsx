import React, { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import heroImg from '../assets/images/hero.png';
import spicesImg from '../assets/images/spices.jpg';
import flourImg from '../assets/images/flour.jpg';
import grainsImg from '../assets/images/grains.jpg';
import riceImg from '../assets/images/rice.jpg';
import storefrontImg from '../assets/images/storefront.jpg';
import realMillImg from '../assets/images/pks_mill_real.png';
import { translations } from '../translations';

const GallerySection = ({ lang }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeImage, setActiveImage] = useState(null);

  const t = translations[lang] || translations.en;

  const galleryItems = [
    {
      id: 1,
      src: realMillImg,
      title: 'PKS Straightway Mill Storefront',
      titleMl: 'PKS സ്ട്രെയിറ്റ് വേ മിൽ ഫ്രണ്ട് കാഴ്ച',
      category: 'Storefront',
      desc: 'Vakeelppadi - Karulai shopfront with signage and products board.',
      descMl: 'വക്കീൽപ്പടി - കരുളായി മിൽ സൈൻ ബോർഡും പ്രധാന ബോർഡും.',
    },
    {
      id: 2,
      src: heroImg,
      title: 'Traditional Stone Chakki Milling',
      titleMl: 'പരമ്പരാഗത ചാക്കി ആട്ടൽ',
      category: 'Mill Process',
      desc: 'Freshly ground spices in rustic wooden bowls.',
      descMl: 'ഫ്രഷായി ആട്ടിയ നാടൻ പൊടികൾ.',
    },
    {
      id: 3,
      src: spicesImg,
      title: 'Washed & Dried Spice Powders',
      titleMl: 'കഴുകി ഉണക്കിയ സുഗന്ധവ്യഞ്ജന പൊടികൾ',
      category: 'Products',
      desc: 'Turmeric, chilli, coriander, and pepper powders.',
      descMl: 'മഞ്ഞൾ, മുളക്, മല്ലി, കുരുമുളക് പൊടികൾ.',
    },
    {
      id: 4,
      src: flourImg,
      title: 'Roasted Wheat & Whole Grain Flour',
      titleMl: 'വറുത്ത് പൊടിച്ച ആട്ട & അരിപ്പൊടി',
      category: 'Products',
      desc: 'Custom roasted wheat flour for fluffy rotis.',
      descMl: 'വറുത്ത ഗോതമ്പ് പൊടിയും അരിപ്പൊടിയും.',
    },
    {
      id: 5,
      src: grainsImg,
      title: 'Nutritious Multigrain Powders',
      titleMl: 'പോഷകഗുണമുള്ള ധാന്യപ്പൊടികൾ',
      desc: 'Ragi, navadhanya, and health mix grains.',
      descMl: 'റാഗി, നവധാന്യങ്ങൾ, ഹെൽത്ത് മിക്സ്.',
    },
    {
      id: 6,
      src: storefrontImg,
      title: 'Store Interior & Grain Sacks',
      titleMl: 'മില്ലിന്റെ അകം കാഴ്ചകൾ',
      category: 'Storefront',
      desc: 'Authentic neighborhood mill ambience.',
      descMl: 'വിശ്വസ്ത പ്രാദേശിക മിൽ അന്തരീക്ഷം.',
    },
  ];

  const categories = ['All', 'Storefront', 'Products', 'Mill Process'];

  const filteredItems = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter((i) => i.category === activeCategory);

  return (
    <section id="gallery" className="bg-[#FFFDF8] py-8 sm:py-20 md:py-28 relative">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-5 md:px-8 space-y-6 sm:space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-2 sm:space-y-4 max-w-2xl mx-auto">
          <div className="hidden sm:flex items-center justify-center gap-3 text-[#D8A43A]">
            <span className="h-[1px] w-12 bg-[#D8A43A]/40"></span>
            <span className="font-serif-heading font-semibold text-xs sm:text-sm tracking-wider uppercase">
              {t?.gallery?.tag || "✦ GALLERY & PHOTOS ✦"}
            </span>
            <span className="h-[1px] w-12 bg-[#D8A43A]/40"></span>
          </div>

          <h2 className="font-serif-heading text-xl sm:text-3xl md:text-[42px] font-bold text-[#12351D]">
            {t?.gallery?.heading || "A Glimpse of Our Mill & Products"}
          </h2>

          <p className="hidden sm:block font-sans-body text-sm sm:text-base text-[#666666]">
            {t?.gallery?.subtitle || "Explore our storefront, traditional chakki milling, washed spices, and custom products."}
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="hidden sm:flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-button transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-[#1D4F2B] text-white shadow-md'
                  : 'bg-[#F6F1E7] text-[#666666] hover:bg-[#E8E2D6] hover:text-[#12351D]'
              }`}
            >
              {cat === 'All' ? t.products.filterAll : cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {filteredItems.map((item) => {
            const itemTitle = lang === 'ml' && item.titleMl ? item.titleMl : item.title;
            const itemDesc = lang === 'ml' && item.descMl ? item.descMl : item.desc;

            return (
              <div
                key={item.id}
                onClick={() => setActiveImage(item)}
                className="bg-white rounded-[20px] overflow-hidden border border-[#E8E2D6] shadow-premium-soft hover:shadow-premium-hover transition-all duration-300 transform hover:-translate-y-1.5 cursor-pointer group text-left"
              >
                <div className="relative h-36 sm:h-64 overflow-hidden">
                  <img
                    src={item.src}
                    alt={itemTitle}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                      <ZoomIn className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="absolute top-3 left-3 bg-[#12351D]/90 backdrop-blur-sm text-[#FFFDF8] px-3 py-1 rounded-full text-[10px] font-button font-bold border border-[#D8A43A]">
                    {item.category}
                  </div>
                </div>

                <div className="p-3 sm:p-5 space-y-1">
                  <h3 className="font-serif-heading text-xs sm:text-lg font-bold text-[#12351D] group-hover:text-[#1D4F2B] transition-colors leading-tight line-clamp-2">
                    {itemTitle}
                  </h3>
                  <p className="font-sans-body text-xs text-[#666666]">
                    {itemDesc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-[#FFFDF8] rounded-[24px] max-w-3xl w-full border border-[#E8E2D6] shadow-2xl overflow-hidden relative p-4 sm:p-6 text-left space-y-4">
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white border border-[#E8E2D6] flex items-center justify-center text-[#202020] hover:bg-[#1D4F2B] hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="rounded-2xl overflow-hidden border border-[#E8E2D6] max-h-[70vh]">
              <img
                src={activeImage.src}
                alt={activeImage.title}
                className="w-full h-full object-contain max-h-[70vh]"
              />
            </div>

            <div>
              <h3 className="font-serif-heading text-xl font-bold text-[#12351D]">
                {lang === 'ml' && activeImage.titleMl ? activeImage.titleMl : activeImage.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#666666] mt-1">
                {lang === 'ml' && activeImage.descMl ? activeImage.descMl : activeImage.desc}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
