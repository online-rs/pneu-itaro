
import React, { useState, useEffect } from 'react';
import AIImage from './AIImage';

const PURCHASE_LINK = "https://mercadolivre.com/sec/2pqWezZ";

const LandingPage: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(3600);

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="flex flex-col w-full max-w-2xl mx-auto bg-white shadow-xl overflow-hidden pb-40">
      {/* Top Warning Bar */}
      <div className="bg-red-600 text-white py-2 px-4 text-center text-xs sm:text-sm font-bold flex items-center justify-center gap-2 sticky top-0 z-[60]">
        <span className="blink text-lg">🚨</span> ALERTA DE PROMOÇÃO IMPERDÍVEL! <span className="blink text-lg">🚨</span>
      </div>

      {/* Hero Section */}
      <section className="relative bg-zinc-950 text-white py-12 px-6 text-center">
        {/* Background Gerado por IA */}
        <div className="absolute top-0 left-0 w-full h-full opacity-40">
           <AIImage 
             prompt="Cinematic shot of a high-speed sports car driving on a rainy highway at night, neon lights reflecting on wet asphalt, motion blur, 8k resolution, professional photography." 
             className="w-full h-full rounded-none"
             aspectRatio="16:9"
             alt="Background Automotivo"
           />
        </div>

        <div className="relative z-10">
          <h2 className="text-yellow-400 font-heading text-4xl italic uppercase leading-none tracking-tighter">
            Oferta <br />
            <span className="text-white text-5xl">Relâmpago!</span>
          </h2>
          
          <div className="mt-8 flex justify-center">
             <div className="relative">
                {/* Imagem Principal do Produto Gerada por IA */}
                <AIImage 
                  prompt="Professional studio product photography of a stack of 4 brand new car tires, brand name Itaro IT203 visible on the sidewall, deep tread patterns, matte black rubber, white studio background, high contrast, sharp focus, 8k resolution."
                  className="w-72 h-72 border-4 border-yellow-400 object-contain bg-white p-2"
                  aspectRatio="1:1"
                  alt="Kit 4 Pneus Itaro"
                />
                <div className="absolute -bottom-5 -right-5 bg-red-600 text-white p-4 rounded-full font-heading text-2xl shadow-2xl border-2 border-white leading-none flex flex-col items-center">
                   <span className="text-[10px] font-bold">KIT COM</span>
                   <span className="text-4xl">4</span>
                </div>
             </div>
          </div>

          <h1 className="mt-12 text-3xl font-heading uppercase leading-tight">
            Kit 4 Pneus <br />
            <span className="text-yellow-400">Itaro IT203 Aro 15</span>
          </h1>
          <div className="mt-3 flex justify-center gap-2">
             <span className="bg-zinc-800 text-zinc-300 px-2 py-1 rounded text-[10px] font-bold border border-zinc-700">195/55R15</span>
             <span className="bg-zinc-800 text-zinc-300 px-2 py-1 rounded text-[10px] font-bold border border-zinc-700">ÍNDICE V (240KM/H)</span>
             <span className="bg-zinc-800 text-zinc-300 px-2 py-1 rounded text-[10px] font-bold border border-zinc-700">UTQG 420</span>
          </div>
        </div>
      </section>

      {/* Price Section */}
      <section className="py-10 px-6 text-center bg-gray-50 border-b border-gray-200">
        <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-4 py-1.5 rounded-full text-xs font-bold uppercase mb-6 border border-yellow-200">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.944-.209.387-.357.84-.451 1.348-.19 1.017-.183 2.112.147 3.012l.147.411a2.12 2.12 0 01-1.47 2.768l-2.015.54a1 1 0 00-.73 1.216l.75 3.195a1 1 0 101.933-.455l-.75-3.195a1 1 0 00-.73-1.216l1.233-.33c.31-.083.593-.242.822-.46a1 1 0 001.45.385c.345-.23.614-.558.822-.944.209-.387.357-.84.451-1.348.19-1.017.183-2.112-.147-3.012l-.147-.411a2.12 2.12 0 011.47-2.768l2.015-.54a1 1 0 00.73-1.216l-.75-3.195a1 1 0 10-1.933.455l.75 3.195a1 1 0 00.73 1.216l-1.233.33c-.31.083-.593.242-.822.46z" clipRule="evenodd"></path></svg>
          Economia de R$ 400,00 HOJE
        </div>
        
        <div className="text-gray-400 line-through text-xl">De R$ 1.400,00</div>
        <div className="flex items-center justify-center gap-1 mt-1">
           <span className="text-2xl font-bold self-start mt-2">R$</span>
           <span className="text-green-600 font-heading text-7xl tracking-tighter">1.000</span>
           <div className="flex flex-col items-start leading-none self-center">
              <span className="text-green-600 font-bold text-3xl">,00</span>
              <span className="text-gray-600 text-[10px] font-black uppercase">À VISTA</span>
           </div>
        </div>

        <div className="mt-8 bg-red-600 text-white p-4 rounded-2xl shadow-xl shadow-red-100 flex flex-col items-center">
           <div className="text-[10px] font-bold uppercase opacity-80 mb-1">A promoção expira em:</div>
           <div className="text-4xl font-heading tracking-[0.2em]">{formatTime(timeLeft)}</div>
           <div className="mt-2 text-[10px] font-bold text-red-200">RESTAM APENAS 7 UNIDADES NO ESTOQUE</div>
        </div>
      </section>

      {/* Benefits with AI Visuals */}
      <section className="py-12 px-6 bg-white">
        <h3 className="text-xl font-black mb-10 text-center uppercase italic border-b-4 border-yellow-400 inline-block mx-auto w-full">Performance Comprovada</h3>
        
        <div className="space-y-10">
          <div className="flex flex-col gap-4">
             <AIImage 
               prompt="Macro close up of car tire treads on wet black asphalt with water splashing, high speed, extreme detail, safety concept, professional photography." 
               className="w-full h-48 rounded-2xl" 
               aspectRatio="16:9" 
               alt="Segurança na Chuva"
             />
             <div>
                <h4 className="font-bold text-lg text-gray-900 flex items-center gap-2">
                   <span className="bg-green-100 text-green-600 p-1 rounded">✅</span> Segurança Máxima
                </h4>
                <p className="text-gray-600 text-sm mt-1">Desenvolvido para oferecer aderência superior em pistas molhadas e frenagem precisa em altas velocidades.</p>
             </div>
          </div>

          <div className="flex flex-col gap-4">
             <AIImage 
               prompt="View of a car odometer showing 100,000 km, hands on steering wheel, interior of a modern car, durability concept, sunlight streaming through windshield." 
               className="w-full h-48 rounded-2xl" 
               aspectRatio="16:9" 
               alt="Durabilidade"
             />
             <div>
                <h4 className="font-bold text-lg text-gray-900 flex items-center gap-2">
                   <span className="bg-blue-100 text-blue-600 p-1 rounded">✅</span> O Favorito dos Apps
                </h4>
                <p className="text-gray-600 text-sm mt-1">Com UTQG 420, o Itaro IT203 é a escolha número 1 de motoristas da Uber e 99 pela sua quilometragem estendida.</p>
             </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="bg-zinc-900 text-white p-8">
        <div className="flex items-center gap-4 mb-6">
            <div className="flex -space-x-3">
                {[12,25,31,44].map(i => (
                    <img key={i} src={`https://i.pravatar.cc/150?u=${i}`} className="w-10 h-10 rounded-full border-2 border-zinc-900" alt="cliente" />
                ))}
            </div>
            <div className="text-xs">
               <div className="font-bold text-yellow-400 uppercase">Campeão de Vendas</div>
               <div className="text-zinc-400">4.9/5 estrelas (2.4k avaliações)</div>
            </div>
        </div>
        <div className="bg-zinc-800 p-4 rounded-xl italic text-sm text-zinc-300 relative">
            <span className="absolute -top-3 left-4 text-4xl text-zinc-700 leading-none">"</span>
            "Melhor custo-benefício que já encontrei. Os pneus são silenciosos e o carro ficou muito mais macio. Entrega do Mercado Livre foi em 24h!"
            <div className="mt-3 font-bold text-white not-italic flex items-center gap-2">
               — Marcos Oliveira <span className="text-[10px] bg-green-900 text-green-400 px-2 py-0.5 rounded uppercase font-black">Comprador Verificado</span>
            </div>
        </div>
      </section>

      {/* Trust & Badges */}
      <section className="py-12 px-6 text-center bg-gray-50">
         <div className="flex justify-center gap-8 mb-8 grayscale opacity-70">
            <img src="https://logodownload.org/wp-content/uploads/2018/10/mercado-livre-logo-3.png" className="h-8" alt="ML" />
            <img src="https://logodownload.org/wp-content/uploads/2014/05/inmetro-logo.png" className="h-8" alt="Inmetro" />
         </div>
         <p className="text-xs text-gray-500 max-w-sm mx-auto leading-relaxed">
            Sua compra está protegida pelo <strong>Mercado Pago</strong>. Receba o produto que está esperando ou devolvemos o seu dinheiro.
         </p>
      </section>

      {/* Final Footer Tags */}
      <footer className="py-12 px-6 text-center text-[10px] text-gray-400 uppercase tracking-widest bg-white">
        <p className="mb-4">#Pneus #OfertaRelampago #Aro15 #Itaro #CustoBeneficio #MercadoLivre</p>
        <p>© 2024 REVENDEDOR AUTORIZADO ITARO. TODOS OS DIREITOS RESERVADOS.</p>
      </footer>

      {/* Floating Sticky CTA */}
      <div className="fixed bottom-0 left-0 w-full p-4 bg-white/95 backdrop-blur-md shadow-[0_-20px_40px_rgba(0,0,0,0.15)] z-[100] max-w-2xl mx-auto left-1/2 -translate-x-1/2 rounded-t-3xl border-t border-gray-100">
        <a 
          href={PURCHASE_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-green-600 hover:bg-green-700 active:scale-95 transition-all text-white py-4 rounded-2xl shadow-xl shadow-green-100 flex items-center justify-center gap-4"
        >
          <div className="flex flex-col items-center justify-center text-center">
            <span className="font-semibold text-xs sm:text-sm uppercase tracking-wider opacity-90 leading-none mb-1">COMPRAR KIT NO</span>
            <span className="font-heading text-2xl sm:text-3xl leading-none">MERCADO LIVRE</span>
          </div>
          <svg className="w-8 h-8 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
        </a>
        <div className="mt-3 flex justify-around items-center text-[9px] font-black text-gray-400 uppercase tracking-tighter">
           <span className="flex items-center gap-1"><span className="text-green-500 text-lg">⚡</span> ENVIO FULL</span>
           <span className="flex items-center gap-1"><span className="text-green-500 text-lg">💳</span> ATÉ 12X</span>
           <span className="flex items-center gap-1"><span className="text-green-500 text-lg">🛡️</span> COMPRA GARANTIDA</span>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
