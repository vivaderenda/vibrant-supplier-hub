import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProductsSection from '@/components/ProductsSection';
import BenefitsSection from '@/components/BenefitsSection';
import BonusSection from '@/components/BonusSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import PricingSection from '@/components/PricingSection';
import GuaranteeSection from '@/components/GuaranteeSection';
import Footer from '@/components/Footer';
const Index = () => {
  useEffect(() => {
    // Intersection Observer for reveal animations
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, {
      threshold: 0.1
    });
    document.querySelectorAll('.reveal-on-scroll').forEach(el => {
      observer.observe(el);
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href')?.substring(1);
        if (!targetId) return;
        const targetElement = document.getElementById(targetId);
        if (!targetElement) return;
        window.scrollTo({
          top: targetElement.offsetTop - 100,
          behavior: 'smooth'
        });
      });
    });
    return () => {
      document.querySelectorAll('.reveal-on-scroll').forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);
  return <div className="min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <HeroSection />

      <div className="relative py-16 overflow-hidden">
        <div className="max-container">
          <div className="glass-card p-8 md:p-12 reveal-on-scroll">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
              PRODUTOS EM <span className="text-gradient-pink">ATACADO E VAREJO</span>
            </h2>
            <div className="space-y-6 text-gray-700">
              <p>
                Você sabia que é possível ter acesso a uma lista de fornecedores de roupas selecionados e confiáveis para realizar suas compras? 
                São peças a partir de <span className="font-medium text-pink-600">R$ 5,00 no atacado</span>.
              </p>
              <p>
                <span className="text-pink-600 font-medium">💡 Esses são os mesmos fornecedores</span> que os grandes lojistas e sacoleiras usam para 
                comprar roupas muito baratas direto da fábrica!
              </p>
              <p>
                Poucas pessoas sabem disso, mas essa é a melhor forma de ter acesso aos Top Fornecedores do mercado brasileiro. 
                A lista inclui contatos já testados e selecionados, com fornecedores de todo o Brasil e de diversos nichos.
              </p>
              <p className="font-medium">
                A seguir, explicamos como funciona a Lista de Fornecedores Nacionais, o que você recebe e como adquirir a sua:
              </p>
            </div>
          </div>
        </div>
      </div>

      <ProductsSection />
      <BenefitsSection />
      <BonusSection />
      <TestimonialsSection />
      <PricingSection />
      <GuaranteeSection />
      <Footer />

      {/* Floating CTA */}
      <div className="fixed bottom-6 right-6 z-50">
        
      </div>
    </div>;
};
export default Index;