
import React, { useRef, useEffect } from 'react';
import { Check } from 'lucide-react';

interface Benefit {
  title: string;
  description: string;
}

const BenefitsSection: React.FC = () => {
  const benefits: Benefit[] = [
    { 
      title: 'LUCRATIVO', 
      description: 'Margens de lucro de 100% até 400% nos produtos'
    },
    { 
      title: 'MAIS DE 300 FORNECEDORES', 
      description: 'Todos testados e selecionados para você'
    },
    { 
      title: 'SEGURO', 
      description: 'Fornecedores confiáveis e com Nota Fiscal'
    },
    { 
      title: 'COMODIDADE', 
      description: 'Os fornecedores enviam os pedidos diretamente para sua casa'
    },
  ];

  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = sectionRef.current?.querySelectorAll('.reveal-on-scroll');
            elements?.forEach((el, i) => {
              setTimeout(() => {
                el.classList.add('active');
              }, i * 200);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="beneficios" ref={sectionRef} className="section-padding bg-gradient-to-b from-pink-50 to-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-pink-300/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-300/10 rounded-full blur-3xl" />
      
      <div className="max-container relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-pink-100 text-pink-800 rounded-full text-sm font-medium mb-4">
            POR QUE ESCOLHER NOSSA LISTA
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            BENEFÍCIOS DA <span className="text-gradient-pink">LISTA SECRETA</span>
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-700">
            Nossa lista de fornecedores foi meticulosamente construída pensando no seu sucesso. Conheça os benefícios exclusivos:
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="reveal-on-scroll glass-card p-8 flex items-start gap-5 hover:shadow-pink transition-shadow duration-300"
            >
              <div className="h-12 w-12 rounded-full bg-pink-100 flex items-center justify-center shrink-0">
                <Check className="h-6 w-6 text-pink-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-700">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 glass-card reveal-on-scroll bg-gradient-to-r from-pink-500/10 to-purple-500/10">
          <div className="md:flex items-center justify-between">
            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold mb-4">Comece seu negócio HOJE mesmo!</h3>
              <p className="text-gray-700 mb-6 md:mb-0">
                Com nossa lista completa de fornecedores, você pode começar a revender produtos de alta qualidade e aumentar sua renda rapidamente.
              </p>
            </div>
            <div className="md:w-1/3 text-center">
              <a 
                href="#pricing" 
                className="inline-flex items-center justify-center px-8 py-4 bg-pink-600 text-white font-bold rounded-full shadow-pink hover:bg-pink-700 hover:shadow-xl transition-all transform hover:scale-105 active:scale-95"
              >
                Quero garantir minha lista!
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
