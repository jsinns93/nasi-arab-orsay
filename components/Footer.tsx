
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark py-20 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gold flex items-center justify-center rounded-lg overflow-hidden">
                <img 
                  src="https://raw.githubusercontent.com/stackblitz/stackblitz-images/main/nasi-arab-orsay-logo-placeholder.png" 
                  alt="Logo" 
                  className="w-8 h-8 object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML = '<span class="font-black text-brand-dark text-[8px]">ORSAY</span>';
                  }}
                />
              </div>
              <div>
                <h3 className="text-2xl font-serif font-bold gold-text-gradient tracking-widest">ORSAY</h3>
                <p className="text-brand-beige/50 text-[10px] uppercase tracking-[0.3em]">Premium Arabian Cuisine</p>
              </div>
            </div>
            <p className="text-brand-beige/60 leading-relaxed max-w-sm">
              Membawa kehangatan rempah Timur Tengah langsung ke meja makan Anda. Kami melayani pesanan harian, catering, dan acara spesial.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-brand-beige/50 hover:text-gold transition-colors text-sm">Home</a></li>
              <li><a href="#about" className="text-brand-beige/50 hover:text-gold transition-colors text-sm">Our Story</a></li>
              <li><a href="#menu" className="text-brand-beige/50 hover:text-gold transition-colors text-sm">Menu Favorit</a></li>
              <li><a href="#contact" className="text-brand-beige/50 hover:text-gold transition-colors text-sm">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-brand-beige/50 text-sm">
                <i className="fa-solid fa-phone text-gold"></i>
                0812-1417-4433
              </li>
              <li className="flex items-center gap-3 text-brand-beige/50 text-sm">
                <i className="fa-solid fa-location-dot text-gold"></i>
                Jakarta, Indonesia
              </li>
              <li className="flex items-center gap-3 text-brand-beige/50 text-sm">
                <i className="fa-brands fa-instagram text-gold"></i>
                @nasiaraborsay
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-brand-beige/30 text-[10px] uppercase tracking-widest">
            &copy; 2026 NASI ARAB ORSAY. Dibuat dengan cinta & rempah.
          </p>
          <div className="flex gap-6">
             <a href="#" className="text-brand-beige/30 hover:text-gold text-lg transition-all"><i className="fa-brands fa-instagram"></i></a>
             <a href="#" className="text-brand-beige/30 hover:text-gold text-lg transition-all"><i className="fa-brands fa-tiktok"></i></a>
             <a href="#" className="text-brand-beige/30 hover:text-gold text-lg transition-all"><i className="fa-brands fa-whatsapp"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
