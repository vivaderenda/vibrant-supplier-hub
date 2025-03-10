import React from 'react';
import { Check, Flame } from 'lucide-react';
import PulsatingButton from './PulsatingButton';
import CountdownTimer from './CountdownTimer';
const PricingSection: React.FC = () => {
  return <section id="pricing" className="section-padding relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-pink-50 to-white z-0" />
      <div className="absolute -left-40 top-40 w-80 h-80 bg-pink-500/5 rounded-full blur-3xl" />
      <div className="absolute -right-40 bottom-40 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
      
      <div className="max-container relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-red-100 text-red-800 rounded-full mb-4">
            <Flame className="h-5 w-5 mr-2" />
            <span className="font-medium">OFERTA ESPECIAL POR TEMPO LIMITADO!</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-gradient-pink">Últimos dias</span> de desconto!
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-700 mb-8">
            A oportunidade de ter acesso a mais de 300 fornecedores confiáveis pelo menor preço está acabando!
          </p>
        </div>

        <div className="glass-card max-w-3xl mx-auto overflow-hidden relative">
          {/* Promotional badge */}
          <div className="absolute -right-12 top-10 transform rotate-45 bg-neonYellow text-black font-bold py-2 px-12 shadow-neon text-sm">
            OFERTA LIMITADA
          </div>

          <div className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-6">Lista de Fornecedores Nacionais</h3>
                <ul className="space-y-4 mb-8">
                  <Feature text="Mais de 300 fornecedores verificados" />
                  <Feature text="Acesso imediato e vitalício" />
                  <Feature text="Fornecedores com nota fiscal" />
                  <Feature text="Todos os nichos e segmentos" />
                  <Feature text="Suporte pós-compra" />
                  <Feature text="3 bônus exclusivos" />
                </ul>
                
                <CountdownTimer className="mb-8" />
              </div>
              
              <div className="bg-gradient-to-br from-pink-50 to-white p-6 rounded-xl">
                <p className="text-gray-500 text-sm mb-2">Preço normal:</p>
                <p className="line-through text-gray-500 text-xl mb-4">R$ 97,00</p>
                
                <div className="relative mb-8">
                  <div className="absolute inset-0 bg-pink-500/10 blur-md rounded-xl"></div>
                  <div className="relative bg-white rounded-xl p-6 border border-pink-100 shadow-sm">
                    <p className="text-pink-600 mb-1 font-bold text-base">Oferta especial:</p>
                    <p className="text-4xl font-bold text-pink-600 mb-2">R$ 47,00</p>
                    <p className="text-sm text-gray-500">ou 5x de R$ 9,90</p>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="mb-6">
                    <span className="inline-block px-4 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium animate-pulse">
                      ACESSO IMEDIATO!
                    </span>
                  </div>
                  <PulsatingButton variant="primary" className="w-full" onClick={() => window.open('https://pay.kiwify.com.br/KaHkPAE', '_blank')}>
                    Quero minha lista agora!
                  </PulsatingButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
const Feature: React.FC<{
  text: string;
}> = ({
  text
}) => <li className="flex items-start gap-3">
    <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-0.5">
      <Check className="h-4 w-4 text-green-600" />
    </div>
    <span>{text}</span>
  </li>;
export default PricingSection;