import React, { useState } from 'react';
import { ShoppingCart, X, Trash2, MessageCircle, Plus, Minus } from 'lucide-react';
import { translations } from '../translations';

const OrderList = ({ cart, removeFromCart, updateQty, lang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const t = translations[lang] || translations.en;

  // If cart is empty and modal is closed, don't render the floating button
  if (cart.length === 0 && !isOpen) return null;

  const handleSendWhatsApp = () => {
    let message = `Hello PKS Straightway Mill!\nI would like to order the following items:\n\n`;
    
    cart.forEach((item, index) => {
      message += `${index + 1}. ${item.title} (${item.selectedWeight}) - ${item.currentPrice} x ${item.qty}\n`;
    });
    
    message += `\nPlease confirm the total amount and availability. Thank you!`;
    
    const text = encodeURIComponent(message);
    window.open(`https://wa.me/918714348348?text=${text}`, '_blank');
  };

  return (
    <>
      {/* Floating Cart Button - Locked Perfect Circle for Mobile & Desktop */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-20 right-4 sm:bottom-6 sm:left-6 z-40 w-14 h-14 bg-[#C7A15A] hover:bg-[#c4922f] text-[#12351D] rounded-full shadow-2xl flex items-center justify-center shrink-0 transition-transform duration-300 transform hover:scale-105 border-2 border-white"
      >
        <ShoppingCart className="w-6 h-6" />
        <span className="absolute -top-1 -right-1 bg-[#12351D] text-white text-xs font-bold min-w-[22px] h-[22px] px-1.5 rounded-full flex items-center justify-center border-2 border-[#D8A43A]">
          {cart.length}
        </span>
      </button>

      {/* Order List Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-[#FFFDF7] rounded-[24px] w-full max-w-lg border border-[#E8E2D6] shadow-2xl overflow-hidden relative max-h-[90vh] flex flex-col">
            
            {/* Header */}
            <div className="flex items-center justify-between p-4 sm:p-6 border-b border-[#E8E2D6] bg-white">
              <h2 className="font-serif-heading text-xl sm:text-2xl font-bold text-[#12351D]">
                {lang === 'ml' ? 'ഓർഡർ ലിസ്റ്റ്' : 'My Order List'}
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-[#F6F1E7] border border-[#E8E2D6] flex items-center justify-center text-[#202020] hover:bg-[#1D4F2B] hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Cart Items List (Scrollable) */}
            <div className="p-4 sm:p-6 space-y-3 overflow-y-auto flex-grow">
              {cart.length === 0 ? (
                <p className="text-center text-[#666666] py-8">
                  {lang === 'ml' ? 'നിങ്ങളുടെ ലിസ്റ്റ് ശൂന്യമാണ്.' : 'Your order list is empty.'}
                </p>
              ) : (
                cart.map((item) => (
                  <div key={item.cartId} className="bg-white p-3 rounded-xl border border-[#E8E2D6] flex items-center gap-3">
                    <img src={item.image} alt={item.title} className="w-14 h-14 rounded-lg object-cover border border-[#E8E2D6] shrink-0" />
                    <div className="flex-grow min-w-0">
                      <h4 className="font-serif-heading text-sm font-bold text-[#12351D] leading-tight line-clamp-1">{item.title}</h4>
                      <p className="text-[11px] text-[#666666] mt-0.5">
                        {item.selectedWeight} • {item.currentPrice}
                      </p>
                      
                      {/* Quantity Controls */}
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center gap-2">
                          <button 
                            onClick={() => updateQty(item.cartId, -1)} 
                            className="w-7 h-7 rounded-md bg-[#F6F1E7] border border-[#E8E2D6] flex items-center justify-center text-[#12351D] hover:bg-[#1D4F2B] hover:text-white transition-colors"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="font-bold text-sm w-5 text-center text-[#12351D]">{item.qty}</span>
                          <button 
                            onClick={() => updateQty(item.cartId, 1)} 
                            className="w-7 h-7 rounded-md bg-[#F6F1E7] border border-[#E8E2D6] flex items-center justify-center text-[#12351D] hover:bg-[#1D4F2B] hover:text-white transition-colors"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        
                        <button
                          onClick={() => removeFromCart(item.cartId)}
                          className="text-red-500 hover:bg-red-50 p-1.5 rounded-md transition-colors flex items-center gap-1 text-[10px] font-semibold"
                          title="Remove Item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer with WhatsApp Button */}
            {cart.length > 0 && (
              <div className="p-4 sm:p-6 border-t border-[#E8E2D6] bg-white">
                <button
                  onClick={handleSendWhatsApp}
                  className="w-full font-button text-sm bg-[#25D366] hover:bg-[#20ba5a] text-white py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-md font-bold"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>{lang === 'ml' ? 'വാട്ട്സ്ആപ്പിൽ ഓർഡർ അയക്കൂ' : 'Send Order on WhatsApp'}</span>
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default OrderList;