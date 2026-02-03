
import React from 'react';

const Menu: React.FC = () => {
  const menuItems = [
    {
      name: "Nasi Arab Original",
      description: "Nasi rempah kaya rasa dengan pilihan ayam atau kambing yang lembut dan chutney khas Orsay.",
      price: "Rp 45.000",
      image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=800",
      tag: "Best Seller"
    },
    {
      name: "Nasi Kebuli",
      description: "Nasi aromatik dimasak perlahan dengan rempah pilihan, kismis manis, dan taburan kacang gurih.",
      price: "Rp 50.000",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800",
      tag: "Signature"
    },
    {
      name: "Ayam Kebab",
      description: "Ayam marinasi panggang yang juicy dengan aroma smoky rempah Timur Tengah yang autentik.",
      price: "Rp 35.000",
      image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?q=80&w=800"
    },
    {
      name: "Extra & Sides",
      description: "Lengkapi hidanganmu dengan Sambal pedas segar, sup rempah hangat, atau minuman pilihan.",
      price: "Rp 10.000+",
      image: "https://images.unsplash.com/photo-1534422298391-e4f8c170db06?q=80&w=800"
    }
  ];

  return (
    <div className="py-32 bg-brand-dark overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <div className="max-w-xl">
            <h4 className="text-gold font-bold tracking-[0.3em] uppercase mb-4 text-sm">Delicious Heritage</h4>
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-brand-beige leading-tight">
              Menu Favorit <br />
              <span className="gold-text-gradient italic">Andalan Kami</span>
            </h2>
          </div>
          <p className="mt-8 md:mt-0 md:max-w-xs text-brand-beige/50 text-sm leading-relaxed">
            Setiap hidangan dibuat dengan resep rahasia keluarga yang telah disempurnakan untuk lidah Indonesia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {menuItems.map((item, idx) => (
            <div key={idx} className="group relative flex flex-col bg-brand-brown/40 border border-gold/10 rounded-3xl overflow-hidden hover:border-gold/40 transition-all duration-500 hover:-translate-y-2">
              <div className="h-72 overflow-hidden relative">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 to-transparent"></div>
                {item.tag && (
                  <span className="absolute top-4 left-4 bg-gold text-brand-dark text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">
                    {item.tag}
                  </span>
                )}
              </div>
              
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-serif font-bold text-gold mb-3 group-hover:gold-text-gradient transition-all">
                  {item.name}
                </h3>
                <p className="text-brand-beige/60 text-sm mb-8 leading-relaxed flex-1">
                  {item.description}
                </p>
                
                <div className="flex items-center justify-between mt-auto border-t border-gold/10 pt-6">
                   <div className="flex flex-col">
                     <span className="text-[10px] uppercase text-gold/60 font-bold tracking-widest">Mulai dari</span>
                     <span className="text-xl font-bold text-brand-beige">{item.price}</span>
                   </div>
                   <button className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-brand-dark transition-all duration-300 transform group-hover:rotate-90">
                     <i className="fa-solid fa-arrow-right"></i>
                   </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-brand-beige/40 italic text-sm">
            * Harga dapat berubah sewaktu-waktu sesuai dengan platform pemesanan.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
