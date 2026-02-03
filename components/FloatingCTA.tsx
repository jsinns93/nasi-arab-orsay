
import React from 'react';

const FloatingCTA: React.FC = () => {
  const whatsappNumber = "6281214174433"; // Updated from logo image

  return (
    <>
      {/* Sticky Mobile CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 px-6 py-4 bg-gradient-to-t from-brand-dark via-brand-dark to-transparent">
        <a 
          href="#order"
          className="block w-full bg-gold text-brand-dark text-center font-bold py-4 rounded-xl shadow-2xl active:scale-95 transition-transform uppercase tracking-widest"
        >
          Pesan Sekarang
        </a>
      </div>

      {/* Floating WhatsApp Button */}
      <a 
        href={`https://wa.me/${whatsappNumber}`} 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-24 right-6 md:bottom-8 md:right-8 z-50 bg-[#25D366] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-[0_5px_15px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform group"
      >
        <i className="fa-brands fa-whatsapp text-3xl"></i>
        <div className="absolute right-full mr-4 bg-brand-dark text-white text-[10px] px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:flex flex-col items-end border border-gold/20">
          <span className="font-bold">Chat Chef Orsay</span>
          <span className="opacity-70">0812-1417-4433</span>
        </div>
      </a>
    </>
  );
};

export default FloatingCTA;
