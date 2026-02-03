
import React, { useState } from 'react';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Order', href: '#order' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-brand-dark/95 backdrop-blur-md py-2 shadow-2xl border-b border-white/5' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 group">
          <div className="bg-gold p-1 rounded-lg transform group-hover:scale-105 transition-transform">
             {/* Using a placeholder that represents your logo structure: Yellow background with black text */}
             <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-gold overflow-hidden rounded-md">
                <img 
                  src="https://raw.githubusercontent.com/stackblitz/stackblitz-images/main/nasi-arab-orsay-logo-placeholder.png" 
                  alt="Nasi Arab Orsay Logo" 
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML = '<span class="text-[10px] font-bold text-black leading-tight text-center">NASI ARAB<br/>ORSAY</span>';
                  }}
                />
             </div>
          </div>
          <div className="hidden sm:block">
            <span className="block text-lg font-bold font-serif gold-text-gradient tracking-widest leading-none">ORSAY</span>
            <span className="block text-[10px] uppercase tracking-[0.3em] text-white/50">Arabian Cuisine</span>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-bold uppercase tracking-[0.2em] hover:text-gold transition-all relative group"
            >
              {link.name}
              <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-gold transition-all group-hover:w-full"></span>
            </a>
          ))}
          <a
            href="#order"
            className="bg-gold hover:bg-white text-brand-dark px-7 py-2.5 rounded-full font-bold transition-all hover:shadow-[0_0_20px_rgba(255,193,7,0.4)] text-sm"
          >
            PESAN SEKARANG
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden w-10 h-10 flex items-center justify-center text-gold text-2xl border border-gold/20 rounded-lg"
          onClick={() => setIsOpen(!isOpen)}
        >
          <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars-staggered'}`}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden absolute top-full left-0 right-0 bg-brand-dark/98 backdrop-blur-xl transition-all duration-500 overflow-hidden border-b border-gold/10 ${
        isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="flex flex-col p-10 space-y-8 text-center items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xl font-bold uppercase tracking-widest hover:text-gold transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#order"
            className="w-full max-w-xs bg-gold text-brand-dark py-4 rounded-xl font-bold text-lg shadow-xl"
            onClick={() => setIsOpen(false)}
          >
            Pesan Sekarang
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
