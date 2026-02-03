
import React from 'react';

const Order: React.FC = () => {
  return (
    <div className="py-24 relative">
       <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1593504049359-74330189a345?q=80&w=1600" 
            alt="Delivery Background" 
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-brand-dark/80"></div>
       </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Nikmati di Mana Saja</h2>
          <p className="text-xl text-brand-beige/70 mb-12 max-w-2xl mx-auto">
            Pilih platform favoritmu dan nikmati Nasi Arab Orsay hari ini. Hangat, lezat, dan cepat sampai ke depan pintu rumahmu.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <a 
              href="#" 
              className="flex items-center justify-center gap-4 bg-emerald-600 hover:bg-emerald-700 p-8 rounded-2xl transition-all hover:-translate-y-2 group shadow-xl"
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center p-2">
                 <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Grab_logo_transparent_white_background.png" alt="Grab" className="w-10 grayscale brightness-0 group-hover:grayscale-0" />
              </div>
              <div className="text-left">
                <span className="block text-sm uppercase tracking-widest text-emerald-200">Pesan via</span>
                <span className="text-2xl font-bold text-white">GrabFood</span>
              </div>
            </a>

            <a 
              href="#" 
              className="flex items-center justify-center gap-4 bg-red-600 hover:bg-red-700 p-8 rounded-2xl transition-all hover:-translate-y-2 group shadow-xl"
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center p-2">
                 <img src="https://upload.wikimedia.org/wikipedia/commons/9/9e/Gojek_logo_2019.svg" alt="GoFood" className="w-10" />
              </div>
              <div className="text-left">
                <span className="block text-sm uppercase tracking-widest text-red-200">Pesan via</span>
                <span className="text-2xl font-bold text-white">GoFood</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
