
import React, { useState, useRef, useEffect } from 'react';
import { ArrowLeft, ArrowRight, MessageSquare, Star, Phone } from 'lucide-react';
import AnimatedCard from './AnimatedCard';

interface Testimonial {
  id: number;
  content: string;
  author: string;
  rating: number;
}

interface WhatsAppProof {
  id: number;
  image: string;
  name: string;
  location: string;
}

const TestimonialsSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      content: "Comprei a lista e estou faturando muito! Os fornecedores são realmente confiáveis e os preços são ótimos para revenda.",
      author: "Maria S.",
      rating: 5
    },
    {
      id: 2,
      content: "Realmente são fornecedores confiáveis, já fiz várias compras! Consegui montar minha loja online e estou crescendo a cada dia.",
      author: "João P.",
      rating: 5
    },
    {
      id: 3,
      content: "Antes eu pagava muito caro, agora compro direto da fonte! Recomendo muito para quem quer começar a empreender.",
      author: "Ana C.",
      rating: 5
    },
    {
      id: 4,
      content: "A lista é incrível! Encontrei fornecedores de qualidade para o meu nicho e já estou tendo lucro no primeiro mês!",
      author: "Carlos R.",
      rating: 5
    }
  ];

  const whatsappProofs: WhatsAppProof[] = [
    {
      id: 1,
      image: "/lovable-uploads/19ce3a54-cc0a-416c-b250-9572f2f8d7c3.png",
      name: "Bruno SP",
      location: "São Paulo"
    },
    {
      id: 2,
      image: "/lovable-uploads/bc380230-ef0a-48ef-91cb-a503853e20d7.png",
      name: "Emerson",
      location: "Cliente"
    },
    {
      id: 3,
      image: "/lovable-uploads/459eaa7f-5d19-4fa0-a22c-aa73d7b472a0.png",
      name: "Marcelo",
      location: "Brasília"
    },
    {
      id: 4,
      image: "/lovable-uploads/4e9cb375-accd-4976-b36e-e2a2402ddb61.png",
      name: "Lucas",
      location: "Alencar"
    },
    {
      id: 5,
      image: "/lovable-uploads/7600dcc8-1521-4787-8cba-098c5a2d7f48.png",
      name: "Breno",
      location: "Paraíba"
    },
    {
      id: 6,
      image: "/lovable-uploads/12f112d3-5a8a-4110-985a-0cfa54687a48.png",
      name: "Vitor",
      location: "Sergipe"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentWhatsAppIndex, setCurrentWhatsAppIndex] = useState(0);
  const maxIndex = Math.ceil(testimonials.length / 2) - 1;
  const maxWhatsAppIndex = Math.ceil(whatsappProofs.length / 2) - 1;
  const testimonialRef = useRef<HTMLDivElement>(null);
  const whatsappRef = useRef<HTMLDivElement>(null);

  const nextTestimonial = () => {
    setCurrentIndex(prev => (prev === maxIndex ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrentIndex(prev => (prev === 0 ? maxIndex : prev - 1));
  };

  const nextWhatsAppProof = () => {
    setCurrentWhatsAppIndex(prev => (prev === maxWhatsAppIndex ? 0 : prev + 1));
  };

  const prevWhatsAppProof = () => {
    setCurrentWhatsAppIndex(prev => (prev === 0 ? maxWhatsAppIndex : prev - 1));
  };

  useEffect(() => {
    const testimonialInterval = setInterval(() => {
      nextTestimonial();
    }, 5000);

    const whatsappInterval = setInterval(() => {
      nextWhatsAppProof();
    }, 6000);

    return () => {
      clearInterval(testimonialInterval);
      clearInterval(whatsappInterval);
    };
  }, []);

  return (
    <section className="section-padding bg-gradient-to-b from-pink-50 to-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-pink-300/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-300/10 rounded-full blur-3xl" />
      
      <div className="max-container relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-pink-100 text-pink-800 rounded-full text-sm font-medium mb-4">
            CLIENTES SATISFEITOS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            DEPOIMENTOS DOS <span className="text-gradient-pink">CLIENTES</span>
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-700">
            Veja o que nossos clientes estão falando sobre a Lista de Fornecedores Nacionais:
          </p>
        </div>

        <div className="relative mb-16">
          <div 
            ref={testimonialRef}
            className="overflow-hidden"
          >
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {Array.from({ length: Math.ceil(testimonials.length / 2) }).map((_, pageIndex) => (
                <div key={pageIndex} className="w-full flex-shrink-0 grid md:grid-cols-2 gap-6">
                  {testimonials.slice(pageIndex * 2, pageIndex * 2 + 2).map((testimonial) => (
                    <div 
                      key={testimonial.id} 
                      className="glass-card p-6 h-full flex flex-col"
                    >
                      <div className="mb-4 flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                      <div className="mb-4 flex-grow">
                        <MessageSquare className="h-8 w-8 text-pink-500 mb-2 opacity-20" />
                        <p className="italic text-gray-700">"{testimonial.content}"</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-pink-600">{testimonial.author}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Navigation controls */}
          <div className="flex justify-center mt-8 items-center space-x-4">
            <button 
              onClick={prevTestimonial}
              className="h-10 w-10 rounded-full bg-white shadow-md flex items-center justify-center text-pink-600 hover:bg-pink-50 transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            
            <div className="flex space-x-2">
              {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                <button
                  key={i}
                  className={`h-2 rounded-full transition-all ${
                    i === currentIndex ? 'w-8 bg-pink-500' : 'w-2 bg-pink-200'
                  }`}
                  onClick={() => setCurrentIndex(i)}
                />
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial}
              className="h-10 w-10 rounded-full bg-white shadow-md flex items-center justify-center text-pink-600 hover:bg-pink-50 transition-colors"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* WhatsApp Social Proof Section */}
        <div className="mt-16 pt-8 border-t border-pink-100">
          <div className="text-center mb-12">
            <span className="inline-flex items-center px-4 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
              <Phone className="w-4 h-4 mr-2" /> CONVERSAS REAIS
            </span>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              VEJA OS <span className="text-gradient-pink">RESULTADOS REAIS</span>
            </h3>
            <p className="max-w-3xl mx-auto text-lg text-gray-700">
              Conversas no WhatsApp de clientes que já estão lucrando com a nossa lista de fornecedores:
            </p>
          </div>

          {/* WhatsApp screenshots carousel */}
          <div className="relative mb-8 overflow-hidden">
            <div 
              ref={whatsappRef}
              className="overflow-hidden"
            >
              <div 
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentWhatsAppIndex * 100}%)` }}
              >
                {Array.from({ length: Math.ceil(whatsappProofs.length / 2) }).map((_, pageIndex) => (
                  <div key={pageIndex} className="w-full flex-shrink-0 grid md:grid-cols-2 gap-6">
                    {whatsappProofs.slice(pageIndex * 2, pageIndex * 2 + 2).map((proof, i) => (
                      <AnimatedCard 
                        key={proof.id} 
                        className="p-4 flex flex-col items-center h-full"
                        delay={i * 100}
                      >
                        <div className="mb-3 flex items-center justify-center w-full bg-green-600 text-white rounded-t-lg py-2 px-4">
                          <Phone className="w-4 h-4 mr-2" />
                          <p className="font-medium">{proof.name} - {proof.location}</p>
                        </div>
                        <div className="relative w-full hover:-translate-y-1 transition-transform duration-300">
                          <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-purple-500/10 opacity-0 hover:opacity-100 transition-opacity rounded-lg"></div>
                          <img 
                            src={proof.image} 
                            alt={`Depoimento de ${proof.name}`} 
                            className="w-full h-auto rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-all" 
                          />
                        </div>
                      </AnimatedCard>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* WhatsApp navigation controls */}
            <div className="flex justify-center mt-8 items-center space-x-4">
              <button 
                onClick={prevWhatsAppProof}
                className="h-10 w-10 rounded-full bg-white shadow-md flex items-center justify-center text-green-600 hover:bg-green-50 transition-colors"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
              
              <div className="flex space-x-2">
                {Array.from({ length: maxWhatsAppIndex + 1 }).map((_, i) => (
                  <button
                    key={i}
                    className={`h-2 rounded-full transition-all ${
                      i === currentWhatsAppIndex ? 'w-8 bg-green-500' : 'w-2 bg-green-200'
                    }`}
                    onClick={() => setCurrentWhatsAppIndex(i)}
                  />
                ))}
              </div>
              
              <button 
                onClick={nextWhatsAppProof}
                className="h-10 w-10 rounded-full bg-white shadow-md flex items-center justify-center text-green-600 hover:bg-green-50 transition-colors"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
