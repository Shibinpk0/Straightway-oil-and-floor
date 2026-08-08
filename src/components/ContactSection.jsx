import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, Send, ExternalLink, Star, Clock } from 'lucide-react';
import { translations } from '../translations';

const ContactSection = ({ lang }) => {
  const t = translations[lang] || translations.en;

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const phone = formData.get('phone');
    const message = formData.get('message');
    const text = encodeURIComponent(
      `Hello PKS Straightway Mill!\nName: ${name}\nPhone: ${phone}\nMessage: ${message}`
    );
    window.open(`https://wa.me/918714348348?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="bg-[#FFFDF8] py-6 sm:py-20 md:py-28 relative">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-5 md:px-8 space-y-8 sm:space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-2 sm:space-y-4 max-w-2xl mx-auto">
          <div className="hidden sm:flex items-center justify-center gap-3 text-[#D8A43A]">
            <span className="h-[1px] w-12 bg-[#D8A43A]/40"></span>
            <span className="font-serif-heading font-semibold text-xs sm:text-sm tracking-wider uppercase">
              {t?.contact?.tag || "✦ CONTACT US ✦"}
            </span>
            <span className="h-[1px] w-12 bg-[#D8A43A]/40"></span>
          </div>

          <h2 className="font-serif-heading text-xl sm:text-3xl md:text-[42px] font-bold text-[#12351D]">
            {t?.contact?.heading || "Get in Touch With Us"}
          </h2>

          <p className="hidden sm:block font-sans-body text-sm sm:text-base text-[#666666]">
            {t?.contact?.subtitle || "We are here to answer your queries and take your orders."}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Contact Details & Google Maps Card (5 cols) */}
          <div className="lg:col-span-5 bg-[#F6F1E7] rounded-2xl sm:rounded-[24px] p-4 sm:p-6 sm:p-8 border border-[#E8E2D6] space-y-4 sm:space-y-6 text-left shadow-sm">
            <div className="flex items-center justify-between">
              <h3 className="font-serif-heading text-2xl font-bold text-[#12351D]">
                {t?.contact?.getInTouch || "Contact Details"}
              </h3>

              {/* 5 Star Google Rating Badge */}
              <div className="bg-white border border-[#E8E2D6] px-3 py-1 rounded-full flex items-center gap-1">
                <Star className="w-3.5 h-3.5 fill-[#D8A43A] text-[#D8A43A]" />
                <span className="text-xs font-bold text-[#12351D]">5.0</span>
                <span className="text-[10px] text-[#666666]">(Google)</span>
              </div>
            </div>

            <div className="space-y-4 text-sm text-[#202020]">
              
              {/* Phone */}
              <a
                href="tel:+918714348348"
                className="flex items-start gap-4 p-3.5 rounded-xl bg-white border border-[#E8E2D6] hover:border-[#1D4F2B] transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#1D4F2B]/10 text-[#1D4F2B] flex items-center justify-center shrink-0 group-hover:bg-[#1D4F2B] group-hover:text-white transition-colors">
                  <Phone className="w-5 h-5 text-[#D8A43A]" />
                </div>
                <div>
                  <span className="block text-xs font-semibold text-[#666666] uppercase">
                    {lang === 'ml' ? 'ഫോൺ നമ്പർ' : 'Phone Numbers'}
                  </span>
                  <span className="font-sans-body font-bold text-[#12351D] text-sm">
                    {t?.phone1 || "+91 8714 348 348"} / {t?.phone2 || "+91 9447 534 834"}
                  </span>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/918714348348"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-3.5 rounded-xl bg-white border border-[#E8E2D6] hover:border-[#25D366] transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#25D366]/10 text-[#25D366] flex items-center justify-center shrink-0 group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs font-semibold text-[#666666] uppercase">
                    {lang === 'ml' ? 'വാട്ട്‌സ്ആപ്പ് ഓർഡറുകൾ' : 'Direct WhatsApp'}
                  </span>
                  <span className="font-sans-body font-bold text-[#12351D] text-sm">
                    {t?.phone1 || "+91 8714 348 348"}
                  </span>
                </div>
              </a>

              {/* Verified Address */}
              <div className="flex items-start gap-4 p-3.5 rounded-xl bg-white border border-[#E8E2D6]">
                <div className="w-10 h-10 rounded-lg bg-[#1D4F2B]/10 text-[#1D4F2B] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#D8A43A]" />
                </div>
                <div className="space-y-1">
                  <span className="block text-xs font-semibold text-[#666666] uppercase">
                    {t?.contact?.addressTitle || "Shop Location"}
                  </span>
                  <span className="font-sans-body text-xs sm:text-sm text-[#12351D] block">
                    {t?.contact?.addressText || "Pulliyil, Nilambur - Karulai Rd, Vakkeelpadi, Karulai, Kerala 679330"}
                  </span>
                  <span className="text-[11px] font-mono text-[#D8A43A] font-semibold block">
                    Plus Code: 77QM+6J Karulai, Kerala
                  </span>
                </div>
              </div>

              {/* Working Hours Summary Card */}
              <div id="working-hours" className="flex items-start gap-4 p-3.5 rounded-xl bg-white border border-[#E8E2D6]">
                <div className="w-10 h-10 rounded-lg bg-[#D8A43A]/10 text-[#D8A43A] flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-[#D8A43A]" />
                </div>
                <div>
                  <span className="block text-xs font-semibold text-[#666666] uppercase">
                    {lang === 'ml' ? 'പ്രവൃത്തി സമയങ്ങൾ' : 'Working Hours'}
                  </span>
                  <span className="font-sans-body font-bold text-[#12351D] text-xs sm:text-sm block">
                    {lang === 'ml' ? 'തിങ്കൾ - ശനി: 8:30 AM – 6:00 PM' : 'Monday - Saturday: 8:30 AM – 6:00 PM'}
                  </span>
                  <span className="text-[11px] text-[#666666] block">
                    {lang === 'ml' ? 'ഞായറാഴ്ച: അവധി' : 'Sunday: Closed'}
                  </span>
                </div>
              </div>

            </div>

            {/* Google Map Frame & Link Button — hidden map on mobile */}
            <div className="space-y-3">
              <div className="hidden sm:block rounded-2xl overflow-hidden border border-[#E8E2D6] h-48 sm:h-56 relative bg-white shadow-sm">
                <iframe
                  title="Straight Way Oil & Flour Mill Location Karulai"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.8051759628045!2d76.2840269!3d11.288094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba6356770e286bb%3A0xb3551522851cf57a!2sStraight%20Way%20Oil%20%26%20Flour%20Mill!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  className="w-full h-full border-0"
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>

              <a
                href={t?.mapsUrl || "https://maps.app.goo.gl/35u2ZKGgmtfE6E59A"}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full font-button text-xs bg-white hover:bg-[#1D4F2B] text-[#12351D] hover:text-white border border-[#E8E2D6] hover:border-[#1D4F2B] py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all font-semibold shadow-sm"
              >
                <span>{t?.contact?.openInMaps || "Open in Google Maps"}</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#D8A43A]" />
              </a>
            </div>

          </div>

          {/* Form Card (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl sm:rounded-[24px] p-4 sm:p-6 sm:p-8 border border-[#E8E2D6] shadow-premium-soft text-left space-y-4 sm:space-y-6">
            <h3 className="font-serif-heading text-2xl font-bold text-[#12351D]">
              {t?.contact?.sendMessage || "Send Us a Message"}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#202020] uppercase tracking-wider mb-2">
                  {t?.contact?.nameLabel || "Your Name"}
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Enter your name"
                  className="w-full bg-[#FFFDF8] border border-[#E8E2D6] rounded-xl px-4 py-3 text-sm text-[#12351D] focus:outline-none focus:border-[#1D4F2B]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#202020] uppercase tracking-wider mb-2">
                    {t?.contact?.phoneLabel || "Phone Number"}
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="+91 Mobile number"
                    className="w-full bg-[#FFFDF8] border border-[#E8E2D6] rounded-xl px-4 py-3 text-sm text-[#12351D] focus:outline-none focus:border-[#1D4F2B]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#202020] uppercase tracking-wider mb-2">
                    {t?.contact?.subjectLabel || "Subject"}
                  </label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Product inquiry / Custom Milling"
                    className="w-full bg-[#FFFDF8] border border-[#E8E2D6] rounded-xl px-4 py-3 text-sm text-[#12351D] focus:outline-none focus:border-[#1D4F2B]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#202020] uppercase tracking-wider mb-2">
                  {t?.contact?.messageLabel || "Your Message"}
                </label>
                <textarea
                  name="message"
                  rows="4"
                  required
                  placeholder="How can we help you?"
                  className="w-full bg-[#FFFDF8] border border-[#E8E2D6] rounded-xl px-4 py-3 text-sm text-[#12351D] focus:outline-none focus:border-[#1D4F2B]"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full font-button text-xs sm:text-sm bg-[#1D4F2B] hover:bg-[#12351D] text-white py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 shadow-md transition-colors"
              >
                <Send className="w-4 h-4 text-[#D8A43A]" />
                <span>{t?.contact?.btnSend || "Send via WhatsApp"}</span>
              </button>
            </form>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactSection;
