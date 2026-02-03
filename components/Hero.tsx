
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen min-h-[750px] flex items-center overflow-hidden">
      {/* Background Image with Slow Zoom */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1541529086526-db283c563270?q=80&w=2000" 
          alt="Nasi Arab Platter" 
          className="w-full h-full object-cover animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/40 to-transparent"></div>
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="max-w-4xl text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-10 reveal">
            {/* Main Brand Mark */}
            <div className="w-32 h-32 md:w-48 md:h-48 bg-gold p-4 rounded-3xl shadow-[0_10px_50px_rgba(255,193,7,0.3)] rotate-3 hover:rotate-0 transition-transform duration-500 flex items-center justify-center overflow-hidden">
                <img 
                  src="https://raw.githubusercontent.com/stackblitz/stackblitz-images/main/nasi-arab-orsay-logo-placeholder.png" 
                  alt="Nasi Arab Orsay Official Logo" 
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML = '<div class="text-center"><span class="block text-2xl font-black text-brand-dark leading-none">NASI ARAB</span><span class="block text-4xl font-black text-brand-dark leading-none mt-2">ORSAY</span></div>';
                  }}
                />
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-gold font-bold tracking-[0.4em] text-xs md:text-sm uppercase mb-4 opacity-80">
                Resep Tradisional Sejak 2026
              </h2>
              <h1 className="text-5xl md:text-8xl font-serif font-bold text-brand-beige mb-6 leading-[0.9] drop-shadow-2xl">
                Cita Rasa <br />
                <span className="gold-text-gradient italic">Timur Tengah</span>
              </h1>
              <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 text-brand-beige/70">
                <div className="flex items-center gap-2">
                  <i className="fa-brands fa-whatsapp text-gold"></i>
                  <span className="font-bold tracking-widest text-sm">0812-1417-4433</span>
                </div>
                <span className="hidden md:block opacity-30">|</span>
                <span className="text-xs uppercase tracking-widest">Menerima Pesanan Catering & Event</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-5 justify-center md:justify-start reveal" style={{ transitionDelay: '0.2s' }}>
            <a 
              href="#order" 
              className="group relative w-full sm:w-auto px-12 py-5 bg-gold text-brand-dark font-black rounded-full transition-all hover:shadow-[0_0_40px_rgba(255,193,7,0.6)] overflow-hidden text-center tracking-widest"
            >
              <span className="relative z-10">PESAN SEKARANG</span>
              <div className="absolute inset-0 bg-white/30 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-[-20deg]"></div>
            </a>
            <a 
              href="#menu" 
              className="w-full sm:w-auto px-12 py-5 border-2 border-white/20 text-white hover:border-gold hover:text-gold font-bold rounded-full transition-all text-center backdrop-blur-md uppercase tracking-widest text-sm"
            >
              Lihat Daftar Menu
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-gold to-transparent opacity-50"></div>
        <span className="text-[10px] tracking-[0.5em] uppercase text-gold font-bold">Explore</span>
      </div>
    </div>
  );
};

export default Hero;
