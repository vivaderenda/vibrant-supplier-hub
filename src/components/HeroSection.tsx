import React from 'react';
import PulsatingButton from './PulsatingButton';
const HeroSection: React.FC = () => {
  return <section className="relative min-h-screen pt-24 overflow-hidden flex items-center">
      {/* Background gradient with subtle animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-white to-purple-50 z-0" />
      
      {/* Animated background elements */}
      <div className="absolute top-40 -left-24 w-64 h-64 rounded-full bg-pink-500/10 animate-float blur-3xl" />
      <div className="absolute bottom-40 -right-24 w-80 h-80 rounded-full bg-purple-500/10 animate-float blur-3xl" style={{
      animationDelay: '1s'
    }} />
      
      <div className="max-container relative z-10 pt-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="flex flex-col space-y-6">
            <div className="inline-flex items-center space-x-2 bg-pink-100 text-pink-800 px-4 py-1 rounded-full text-sm font-medium animate-fade-in">
              <span className="h-2 w-2 rounded-full bg-pink-500 animate-pulse"></span>
              <span>ACESSO EXCLUSIVO 2025</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight lg:text-6xl">
              Descubra os <span className="text-gradient-pink">Melhores Fornecedores</span> Nacionais para Revenda!
            </h1>
            
            <p className="text-lg md:text-xl text-gray-700 font-extrabold">
              LISTA DE FORNECEDORES PRODUTOS EM ATACADO E VAREJO!
            </p>
            
            <div className="mt-8 space-y-4 font-display">
              <div className="flex items-center space-x-3">
                <div className="bg-pink-100 w-8 h-8 rounded-full flex items-center justify-center shrink-0">
                  <span className="text-pink-600 text-lg">🔥</span>
                </div>
                <p className="text-gray-600 font-extrabold text-2xl">De <span className="line-through text-gray-500">R$ 97,00</span> por apenas:</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="bg-green-100 w-8 h-8 rounded-full flex items-center justify-center shrink-0">
                  <span className="text-green-600 text-lg">✓</span>
                </div>
                <p className="text-green-600 font-extrabold text-6xl">5x de R$ 9,90</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="bg-green-100 w-8 h-8 rounded-full flex items-center justify-center shrink-0">
                  <span className="text-green-600 text-lg">✓</span>
                </div>
                <p className="text-xl font-bold text-green-600">ou R$ 47,00 à vista</p>
              </div>
            </div>
            
            <div className="pt-6">
              <PulsatingButton variant="primary" className="w-full sm:w-auto" onClick={() => window.open('https://pay.kiwify.com.br/KaHkPAE', '_blank')}>
                Quero ter acesso aos Fornecedores Nacionais
              </PulsatingButton>
            </div>
            
            {/* Mobile image - visible only on smaller screens */}
            <div className="md:hidden mt-8 relative">
              <div className="glass-card p-4 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="absolute -top-4 -right-4 bg-yellow-300 text-yellow-800 px-3 py-1 text-xs font-bold rounded-lg transform rotate-12 shadow-lg">
                  ACESSO!
                </div>
                <img alt="Fornecedores Nacionais" className="w-full h-auto rounded-lg shadow-lg" src="/lovable-uploads/e005766f-61ac-4300-b444-8093cb4e53d0.png" />
              </div>
            </div>
          </div>
          
          <div className="hidden md:block relative">
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-pink-300/20 rounded-full animate-pulse blur-3xl" />
            <div className="relative glass-card p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500 px-[30px] py-[30px]">
              <div className="absolute -top-6 -right-6 bg-yellow-300 text-yellow-800 px-6 py-3 font-bold rounded-lg transform rotate-12 shadow-lg">
                ACESSO IMEDIATO!
              </div>
              <img alt="Fornecedores Nacionais" className="w-full h-auto rounded-xl shadow-lg" src="/lovable-uploads/e005766f-61ac-4300-b444-8093cb4e53d0.png" />
              <div className="mt-4 text-left">
                <h3 className="text-xl font-bold">Lista Completa de Fornecedores</h3>
                <p className="text-gray-600 mt-2">Mais de 300 fornecedores verificados para diversos nichos de mercado.</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="tag bg-pink-100 text-pink-800">Roupas</span>
                  <span className="tag bg-blue-100 text-blue-800">Eletrônicos</span>
                  <span className="tag bg-purple-100 text-purple-800">Acessórios</span>
                  <span className="tag bg-green-100 text-green-800">Cosméticos</span>
                  <span className="tag bg-yellow-100 text-yellow-800">E muito mais</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;