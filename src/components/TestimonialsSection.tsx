
import React, { useState, useRef, useEffect } from 'react';
import { ArrowLeft, ArrowRight, MessageSquare, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  content: string;
  author: string;
  rating: number;
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

  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = Math.ceil(testimonials.length / 2) - 1;
  const testimonialRef = useRef<HTMLDivElement>(null);

  const nextTestimonial = () => {
    setCurrentIndex(prev => (prev === maxIndex ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrentIndex(prev => (prev === 0 ? maxIndex : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => clearInterval(interval);
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

        <div className="relative">
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
      </div>
    </section>
  );
};

export default TestimonialsSection;
