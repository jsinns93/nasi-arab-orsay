
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';

const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; text: string }[]>([
    { role: 'bot', text: 'Ahlan wa Sahlan! Saya Chef Orsay. Ada yang bisa saya bantu untuk memilih menu hari ini?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMsg,
        config: {
          systemInstruction: `Anda adalah Chef Orsay, koki ahli masakan fusi Timur Tengah dan Indonesia. 
          Menu kami: 
          1. Nasi Arab Original (Nasi rempah dengan ayam/kambing juicy, chutney khas).
          2. Nasi Kebuli (Nasi aromatik dimasak lambat dengan kismis & kacang).
          3. Ayam Kebab (Ayam panggang bumbu rempah smoky).
          4. Side dishes: Sambal, Sup, Minuman segar.
          Jawablah dengan sopan, ramah, dan gunakan bahasa Indonesia yang hangat. Sesekali gunakan salam Arab. 
          Berikan rekomendasi berdasarkan suasana hati atau preferensi pelanggan jika ditanya.`,
          temperature: 0.7,
        },
      });

      const botText = response.text || "Maaf, Chef sedang sedikit sibuk di dapur. Bisa ulangi lagi?";
      setMessages(prev => [...prev, { role: 'bot', text: botText }]);
    } catch (error) {
      console.error("Chef Error:", error);
      setMessages(prev => [...prev, { role: 'bot', text: "Aduh, ada kendala di dapur digital kami. Coba lagi nanti ya!" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-32 right-6 md:bottom-28 md:right-8 z-50 flex flex-col items-end">
      {isOpen && (
        <div className="w-[320px] md:w-[380px] bg-brand-dark border border-gold/30 rounded-2xl shadow-2xl overflow-hidden mb-4 animate-fade-in-up">
          <div className="bg-gold p-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-brand-dark flex items-center justify-center text-gold">
                <i className="fa-solid fa-hat-chef"></i>
              </div>
              <div>
                <h4 className="text-brand-dark font-bold text-sm">Chef Orsay</h4>
                <div className="flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></span>
                  <span className="text-[10px] text-brand-dark/70 font-bold uppercase">Online</span>
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-brand-dark hover:rotate-90 transition-transform">
              <i className="fa-solid fa-xmark text-xl"></i>
            </button>
          </div>

          <div ref={scrollRef} className="h-80 overflow-y-auto p-4 space-y-4 bg-brand-brown/10">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                  msg.role === 'user' 
                    ? 'bg-gold text-brand-dark font-medium rounded-tr-none' 
                    : 'bg-brand-brown border border-gold/10 text-brand-beige rounded-tl-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-brand-brown p-3 rounded-2xl rounded-tl-none flex gap-1">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full animate-bounce"></span>
                  <span className="w-1.5 h-1.5 bg-gold rounded-full animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-1.5 h-1.5 bg-gold rounded-full animate-bounce [animation-delay:0.4s]"></span>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 bg-brand-brown/40 border-t border-gold/10 flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Tanya rekomendasi menu..."
              className="flex-1 bg-brand-dark border border-gold/20 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-gold transition-colors text-brand-beige"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading}
              className="w-10 h-10 bg-gold text-brand-dark rounded-full flex items-center justify-center hover:scale-105 active:scale-95 transition-all disabled:opacity-50"
            >
              <i className="fa-solid fa-paper-plane"></i>
            </button>
          </div>
        </div>
      )}

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110 active:scale-95 border-2 ${
          isOpen ? 'bg-brand-dark border-gold text-gold rotate-90' : 'bg-gold border-gold text-brand-dark'
        }`}
      >
        <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-comment-dots'} text-2xl`}></i>
      </button>
    </div>
  );
};

export default AIChat;
