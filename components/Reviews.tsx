
import React from 'react';

const Reviews: React.FC = () => {
  const testimonials = [
    {
      text: "Rasanya kaya rempah, porsinya besar! Beneran worth it buat makan siang bareng keluarga.",
      author: "Siti Rahma",
      rating: 5
    },
    {
      text: "Delivery cepat, makanannya mantap. Ayam kebabnya juicy banget, bumbunya meresap sampai ke dalam.",
      author: "Budi Santoso",
      rating: 5
    },
    {
      text: "Nasi Arab terbaik yang pernah saya coba di sekitar sini. Sambalnya itu lho, nagih banget!",
      author: "Jessica Wijaya",
      rating: 5
    }
  ];

  return (
    <div className="py-24 bg-brand-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold mb-4">Kata Pelanggan</h2>
          <p className="text-brand-beige/60">Pengalaman nyata dari pecinta Nasi Arab Orsay</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((review, idx) => (
            <div key={idx} className="bg-brand-brown/30 p-8 rounded-3xl border border-gold/10 relative">
              <div className="absolute -top-4 left-8 text-6xl text-gold/20 font-serif">“</div>
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <i key={i} className="fa-solid fa-star text-gold text-sm"></i>
                ))}
              </div>
              <p className="text-lg italic text-brand-beige/80 mb-8 leading-relaxed">
                {review.text}
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center text-gold font-bold">
                  {review.author[0]}
                </div>
                <span className="font-bold text-gold">{review.author}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
