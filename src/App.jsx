import React, { useEffect, useState } from 'react';
import { Analytics } from "@vercel/analytics/react";
import SEO from './components/SEO';
import LocalBusinessSchema from './components/LocalBusinessSchema';
import AnnouncementBar from './components/AnnouncementBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyChooseSection from './components/WhyChooseSection';
import PromoBanner from './components/PromoBanner';
import Products from './components/Products';
import HowToOrderSection from './components/HowToOrderSection';
import CoconutDryerSection from './components/CoconutDryerSection';
import DeliverySection from './components/DeliverySection';
import BulkOrdersSection from './components/BulkOrdersSection';
import AboutSection from './components/AboutSection';
import FaqSection from './components/FaqSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import OrderList from './components/OrderList';

function App() {
  const getInitialLang = () => {
    const savedLang = localStorage.getItem('pks_lang');
    if (savedLang) return savedLang;
    const browserLang = navigator.language || navigator.userLanguage;
    if (browserLang.toLowerCase().includes('ml')) return 'ml';
    return 'en';
  };

  const [activeTab, setActiveTab] = useState('home');
  const [lang, setLang] = useState(getInitialLang);
  const [cart, setCart] = useState(() => {
    try {
      const savedCart = localStorage.getItem('pks_cart');
      return savedCart ? JSON.parse(savedCart) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('pks_cart', JSON.stringify(cart));
  }, [cart]);

  const handleSetLang = (newLang) => {
    setLang(newLang);
    localStorage.setItem('pks_lang', newLang);
  };

  const scrollToSection = (id) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const addToCart = (product, selectedWeight = '500g') => {
    const price = product.prices?.[selectedWeight] || '₹0';
    const combinedTitle = `${product.titleEn} / ${product.titleMl}`;
    
    setCart((prevCart) => {
      const existingItem = prevCart.find(item => item.id === product.id && item.selectedWeight === selectedWeight);
      if (existingItem) {
        return prevCart.map(item => 
          item.id === product.id && item.selectedWeight === selectedWeight
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, title: combinedTitle, cartId: Date.now(), selectedWeight: selectedWeight, currentPrice: price, qty: 1 }];
      }
    });
  };

  const removeFromCart = (cartId) => {
    setCart(cart.filter(item => item.cartId !== cartId));
  };

  const updateQty = (cartId, delta) => {
    setCart((prevCart) => {
      return prevCart.map(item => {
        if (item.cartId === cartId) {
          return { ...item, qty: item.qty + delta };
        }
        return item;
      }).filter(item => item.qty > 0);
    });
  };

  return (
    <div className="min-h-screen bg-[#F7F3E8] font-sans-body selection:bg-[#667A61] selection:text-white flex flex-col justify-between overflow-x-hidden">
      <div>
        <SEO lang={lang} />
        <LocalBusinessSchema />
        
        <Navbar activeTab={activeTab} setActiveTab={setActiveTab} lang={lang} setLang={handleSetLang} />
        
        <Hero onExploreClick={() => scrollToSection('products')} onContactClick={() => scrollToSection('contact')} lang={lang} />
        <WhyChooseSection lang={lang} />
        <PromoBanner lang={lang} onKnowMoreClick={() => scrollToSection('about')} />
        <Products lang={lang} onQuickAdd={addToCart} />
        <HowToOrderSection lang={lang} />
        <CoconutDryerSection lang={lang} />
        <DeliverySection lang={lang} />
        <BulkOrdersSection lang={lang} />
        <AboutSection lang={lang} />
  
        <FaqSection lang={lang} />
        <ContactSection lang={lang} />
      </div>

      <Footer setActiveTab={setActiveTab} lang={lang} />
      <WhatsAppFloat />
      <OrderList cart={cart} removeFromCart={removeFromCart} updateQty={updateQty} lang={lang} />
      <Analytics />
    </div>
  );
}

export default App;