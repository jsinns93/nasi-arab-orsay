
import React from 'react';

const Gallery: React.FC = () => {
  const photos = [
    "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?q=80&w=800",
    "https://images.unsplash.com/photo-1541529086526-db283c563270?q=80&w=800",
    "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800",
    "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=800",
    "https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=800",
    "https://images.unsplash.com/photo-1606491956689-2ea8c5369511?q=80&w=800"
  ];

  return (
    <div className="py-24 bg-brand-brown/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h4 className="text-gold font-bold tracking-widest uppercase mb-4">Galeri Kami</h4>
            <h2 className="text-4xl font-serif font-bold">Pesta untuk Mata</h2>
          </div>
          <a href="#" className="mt-4 md:mt-0 text-gold border-b border-gold hover:text-brand-beige hover:border-brand-beige transition-colors font-semibold">
            Follow Instagram @nasiaraborsay
          </a>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {photos.map((src, idx) => (
            <div key={idx} className={`relative overflow-hidden group rounded-xl ${idx === 0 || idx === 5 ? 'row-span-2' : ''}`}>
              <img 
                src={src} 
                alt={`Food ${idx}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-brand-dark/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <i className="fa-brands fa-instagram text-4xl text-gold"></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
