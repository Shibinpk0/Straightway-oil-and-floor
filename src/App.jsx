import React, { useState } from 'react';
import { Analytics } from "@vercel/analytics/react";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyChooseSection from './components/WhyChooseSection';
import HowToOrderSection from './components/HowToOrderSection';
import Products from './components/Products';
import DeliverySection from './components/DeliverySection';
import BulkOrdersSection from './components/BulkOrdersSection';
import FaqSection from './components/FaqSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import CoconutDryerSection from './components/CoconutDryerSection';

function App() {
  // --- NEW: Auto-detect language logic ---
  const getInitialLang = () => {
    // 1. Check if the user has manually selected a language before
    const savedLang = localStorage.getItem('pks_lang');
    if (savedLang) return savedLang;

    // 2. If no manual choice, check the browser/phone's default language
    const browserLang = navigator.language || navigator.userLanguage;
    if (browserLang.toLowerCase().includes('ml')) {
      return 'ml'; // Set to Malayalam if browser is in Malayalam
    }
    
    // 3. Default to English
    return 'en';
  };

  const [activeTab, setActiveTab] = useState('home');
  const [lang, setLang] = useState(getInitialLang); // Initialize with the detected language

  // --- NEW: Wrapper function to save the language when toggled manually ---
  const handleSetLang = (newLang) => {
    setLang(newLang);
    localStorage.setItem('pks_lang', newLang); // Remember the user's manual choice
  };

  const scrollToSection = (id) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FFFDF8] font-sans-body selection:bg-[#1D4F2B] selection:text-white flex flex-col justify-between overflow-x-hidden">
      <div>
        {/* Sticky Header with Language Switcher */}
        <Navbar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          lang={lang}
          setLang={handleSetLang} // Passed the new wrapper function here
        />

        {/* Hero Section */}
        <Hero
          onExploreClick={() => scrollToSection('products')}
          onContactClick={() => scrollToSection('contact')}
          lang={lang}
        />

        {/* Why Choose Straightway (4 Core Value Pillars) */}
        <WhyChooseSection lang={lang} />

        {/* Products Showcase & Custom Grinding */}
        <Products lang={lang} />

        {/* 4-Step How to Order Section */}
        <HowToOrderSection lang={lang} />

        {/* Coconut Dryer Section */}
        <CoconutDryerSection lang={lang} />

        {/* Delivery & Doorstep Logistics */}
        <DeliverySection lang={lang} />

        {/* Bulk Orders & Wholesale Estimator */}
        <BulkOrdersSection lang={lang} />

        {/* About Section */}
        <AboutSection lang={lang} />

        {/* FAQ Accordion Section */}
        <FaqSection lang={lang} />

        {/* Contact Section & Shop Working Hours */}
        <ContactSection lang={lang} />
      </div>

      {/* Footer */}
      <Footer setActiveTab={setActiveTab} lang={lang} />

      {/* Instant Floating Action Buttons (Call + WhatsApp) */}
      <WhatsAppFloat />
    </div>
  );
}

export default App;