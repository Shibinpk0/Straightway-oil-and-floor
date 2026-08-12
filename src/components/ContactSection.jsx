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
    const text = encodeURIComponent(`Hello PKS Straightway Mill!\nName: ${name}\nPhone: ${phone}\nMessage: ${message}`);
    window.open(`https://wa.me/918714348348?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="bg-[#FFFDF7] py-12 md:py-16 lg:py-20 relative">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-5 md:px-8 space-y-8 md:space-y-10">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-3 text-[#B86F52]">
            <span className="h-[1px] w-12 bg-[#B86F52]/40"></span>
            <span className="font-serif-heading font-semibold text-xs sm:text-sm tracking-wider uppercase">{t?.contact?.tag || "✦ CONTACT US ✦"}</span>
            <span className="h-[1px] w-12 bg-[#B86F52]/40"></span>
          </div>
          <h2 className="font-serif-heading text-xl sm:text-3xl font-bold text-[#29332B]">{t?.contact?.heading || "Get in Touch With Us"}</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5 bg-[#EAE2D2] rounded-2xl p-5 sm:p-6 border border-[#E1D9C9] space-y-4 text-left shadow-premium-soft">
            <div className="flex items-center justify-between">
              <h3 className="font-serif-heading text-xl font-bold text-[#29332B]">{t?.contact?.getInTouch || "Contact Details"}</h3>
              <div className="bg-[#FFFDF7] border border-[#E1D9C9] px-2.5 py-1 rounded-full flex items-center gap-1">
                <Star className="w-3.5 h-3.5 fill-[#C7A15A] text-[#C7A15A]" />
                <span className="text-xs font-bold text-[#29332B]">5.0</span>
              </div>
            </div>

            <a href={t?.mapsUrl || "https://maps.app.goo.gl/ddsHNEFHqwWLMnDS6"} target="_blank" rel="noopener noreferrer" className="w-full font-button text-xs bg-[#FFFDF7] border border-[#B86F52] hover:bg-[#B86F52] hover:text-white text-[#29332B] py-2.5 px-4 rounded-lg flex items-center justify-center gap-2 transition-all font-semibold shadow-sm">
              <Star className="w-4 h-4 fill-[#C7A15A] text-[#C7A15A]" />
              <span>{t?.contact?.reviewsBtn || "Read Our Google Reviews"}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <div className="space-y-3 text-sm text-[#29332B] pt-2 border-t border-[#E1D9C9]">
              <a href="tel:+918714348348" className="flex items-start gap-3 p-3 rounded-lg bg-[#FFFDF7] border border-[#E1D9C9] hover:border-[#667A61] transition-colors group">
                <div className="w-9 h-9 rounded-lg bg-[#667A61]/10 text-[#667A61] flex items-center justify-center shrink-0 group-hover:bg-[#667A61] group-hover:text-white transition-colors">
                  <Phone className="w-4 h-4 text-[#B86F52]" />
                </div>
                <div>
                  <span className="block text-[11px] font-semibold text-[#5A635A] uppercase">Phone Numbers</span>
                  <span className="font-sans-body font-bold text-[#29332B] text-sm">{t?.phone1 || "+91 8714 348 348"} / {t?.phone2 || "+91 9447 534 834"}</span>
                </div>
              </a>

              <a href="https://wa.me/918714348348" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 p-3 rounded-lg bg-[#FFFDF7] border border-[#E1D9C9] hover:border-[#25D366] transition-colors group">
                <div className="w-9 h-9 rounded-lg bg-[#25D366]/10 text-[#25D366] flex items-center justify-center shrink-0 group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[11px] font-semibold text-[#5A635A] uppercase">Direct WhatsApp</span>
                  <span className="font-sans-body font-bold text-[#29332B] text-sm">{t?.phone1 || "+91 8714 348 348"}</span>
                </div>
              </a>

              <div className="flex items-start gap-3 p-3 rounded-lg bg-[#FFFDF7] border border-[#E1D9C9]">
                <div className="w-9 h-9 rounded-lg bg-[#667A61]/10 text-[#667A61] flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-[#B86F52]" />
                </div>
                <div className="space-y-0.5">
                  <span className="block text-[11px] font-semibold text-[#5A635A] uppercase">Shop Location</span>
                  <span className="font-sans-body text-xs text-[#29332B] block">{t?.contact?.addressText || "Pulliyil, Nilambur - Karulai Rd, Vakkeelpadi, Karulai, Kerala 679330"}</span>
                  <span className="text-[10px] font-mono text-[#C7A15A] font-semibold block">Plus Code: 77QM+6J Karulai, Kerala</span>
                </div>
              </div>
            </div>

            <div className="space-y-2 pt-1">
              <div className="hidden sm:block rounded-xl overflow-hidden border border-[#E1D9C9] h-40 relative bg-white shadow-sm">
                <iframe title="Straight Way Oil & Flour Mill Location Karulai" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.8051759628045!2d76.2840269!3d11.288094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba6356770e286bb%3A0xb3551522851cf57a!2sStraight%20Way%20Oil%20%26%20Flour%20Mill!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" className="w-full h-full border-0" allowFullScreen="" loading="lazy"></iframe>
              </div>
              <a href={t?.mapsUrl || "https://maps.app.goo.gl/ddsHNEFHqwWLMnDS6"} target="_blank" rel="noopener noreferrer" className="w-full font-button text-xs bg-[#FFFDF7] hover:bg-[#667A61] text-[#29332B] hover:text-white border border-[#E1D9C9] hover:border-[#667A61] py-2.5 px-4 rounded-lg flex items-center justify-center gap-2 transition-all font-semibold shadow-sm">
                <span>{t?.contact?.openInMaps || "Open in Google Maps"}</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#B86F52]" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 bg-[#FFFDF7] rounded-2xl p-5 sm:p-6 border border-[#E1D9C9] shadow-premium-soft text-left space-y-4">
            <h3 className="font-serif-heading text-xl font-bold text-[#29332B]">{t?.contact?.sendMessage || "Send Us a Message"}</h3>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label className="block text-[11px] font-semibold text-[#29332B] uppercase tracking-wider mb-1.5">Your Name</label>
                <input type="text" name="name" required placeholder="Enter your name" className="w-full bg-[#F7F3E8] border border-[#E1D9C9] rounded-lg px-4 py-2.5 text-sm text-[#29332B] focus:outline-none focus:border-[#667A61]" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold text-[#29332B] uppercase tracking-wider mb-1.5">Phone Number</label>
                  <input type="tel" name="phone" required placeholder="+91 Mobile number" className="w-full bg-[#F7F3E8] border border-[#E1D9C9] rounded-lg px-4 py-2.5 text-sm text-[#29332B] focus:outline-none focus:border-[#667A61]" />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-[#29332B] uppercase tracking-wider mb-1.5">Subject</label>
                  <input type="text" name="subject" placeholder="Product inquiry / Custom Milling" className="w-full bg-[#F7F3E8] border border-[#E1D9C9] rounded-lg px-4 py-2.5 text-sm text-[#29332B] focus:outline-none focus:border-[#667A61]" />
                </div>
              </div>
              <div>
                <label className="block text-[11px] font-semibold text-[#29332B] uppercase tracking-wider mb-1.5">Your Message</label>
                <textarea name="message" rows="3" required placeholder="How can we help you?" className="w-full bg-[#F7F3E8] border border-[#E1D9C9] rounded-lg px-4 py-2.5 text-sm text-[#29332B] focus:outline-none focus:border-[#667A61]"></textarea>
              </div>
              <button type="submit" className="w-full font-button text-xs sm:text-sm bg-[#667A61] hover:bg-[#52644E] text-white py-3 px-6 rounded-lg flex items-center justify-center gap-2 shadow-md transition-colors">
                <Send className="w-4 h-4 text-[#C7A15A]" />
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