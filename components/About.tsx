
import React from 'react';

const About: React.FC = () => {
  const points = [
    { icon: 'fa-mosque', title: 'Resep Timur Tengah autentik' },
    { icon: 'fa-leaf', title: 'Bahan segar berkualitas' },
    { icon: 'fa-utensils', title: 'Porsi besar & mengenyangkan' },
    { icon: 'fa-bolt', title: 'Bisa pesan online dengan mudah' },
  ];

  return (
    <div className="py-24 bg-brand-brown/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image Side */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1200" 
                alt="Fresh Ingredients" 
                className="w-full h-[500px] object-cover"
              />
            </div>
            {/* Decoration */}
            <div className="absolute -top-6 -right-6 w-32 h-32 border-t-2 border-r-2 border-gold opacity-50"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border-b-2 border-l-2 border-gold opacity-50"></div>
          </div>

          {/* Text Side */}
          <div className="w-full lg:w-1/2">
            <h4 className="text-gold font-bold tracking-widest mb-4 uppercase">Siapa Kami</h4>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">
              Kelezatan Berawal dari <br />
              <span className="text-gold">Rempah Pilihan</span>
            </h2>
            <p className="text-brand-beige/70 text-lg leading-relaxed mb-8">
              Nasi Arab Orsay hadir untuk membawa cita rasa Arab otentik dengan rempah pilihan dan bahan segar setiap hari. 
              Dari dapur kami langsung ke meja kamu — setiap porsi dibuat dengan resep tradisional penuh rasa.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {points.map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 p-4 rounded-xl bg-brand-dark/40 border border-gold/10 hover:border-gold/30 transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-brand-dark transition-all">
                    <i className={`fa-solid ${item.icon}`}></i>
                  </div>
                  <span className="font-semibold">{item.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
