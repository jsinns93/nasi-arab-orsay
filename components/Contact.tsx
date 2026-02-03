
import React from 'react';

const Contact: React.FC = () => {
  const socials = [
    { name: 'Chat WhatsApp', icon: 'fa-whatsapp', color: 'bg-[#25D366]', href: '#' },
    { name: 'Instagram', icon: 'fa-instagram', color: 'bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888]', href: '#' },
    { name: 'TikTok', icon: 'fa-tiktok', color: 'bg-[#000000]', href: '#' },
  ];

  return (
    <div className="py-24 border-t border-gold/10">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Hubungi Kami</h2>
          <p className="text-xl text-brand-beige/70 mb-12">
            Hubungi kami langsung atau follow untuk update promo menarik setiap minggunya.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            {socials.map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                className={`${social.color} px-8 py-4 rounded-full flex items-center gap-3 font-bold transition-transform hover:scale-105 shadow-lg min-w-[200px] justify-center`}
              >
                <i className={`fa-brands ${social.icon} text-2xl`}></i>
                {social.name}
              </a>
            ))}
          </div>

          <div className="mt-16 p-8 bg-brand-brown/20 rounded-2xl w-full border border-gold/5">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <i className="fa-solid fa-location-dot text-gold text-2xl mb-4"></i>
                <h4 className="font-bold mb-2">Lokasi</h4>
                <p className="text-brand-beige/60">Jl. Contoh No. 123, Jakarta Selatan</p>
              </div>
              <div>
                <i className="fa-solid fa-clock text-gold text-2xl mb-4"></i>
                <h4 className="font-bold mb-2">Jam Buka</h4>
                <p className="text-brand-beige/60">Setiap Hari: 10:00 - 21:00</p>
              </div>
              <div>
                <i className="fa-solid fa-envelope text-gold text-2xl mb-4"></i>
                <h4 className="font-bold mb-2">Email</h4>
                <p className="text-brand-beige/60">halo@nasiaraborsay.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
