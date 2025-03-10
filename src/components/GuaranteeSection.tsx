
import React from 'react';
import { BadgeCheck, Shield } from 'lucide-react';
import PulsatingButton from './PulsatingButton';

const GuaranteeSection: React.FC = () => {
  return (
    <section id="garantia" className="section-padding bg-gradient-to-b from-white to-pink-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-white/50" />
      <div className="absolute -bottom-40 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-pink-300/10 rounded-full blur-3xl" />
      
      <div className="max-container relative z-10">
        <div className="glass-card max-w-4xl mx-auto p-8 md:p-12 relative">
          <div className="grid md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-2 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-pink-500/10 rounded-full blur-xl animate-pulse"></div>
                <div className="relative animate-float">
                  <Shield className="h-48 w-48 text-pink-600" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-lg font-bold text-white">GARANTIA</p>
                      <p className="text-2xl font-bold text-white">15 DIAS</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-3">
              <div className="mb-6">
                <BadgeCheck className="h-10 w-10 text-pink-600 mb-4" />
                <h2 className="text-3xl font-bold mb-6">Garantia de Reembolso</h2>
                <p className="text-gray-700 mb-6">
                  <span className="font-medium">📌 O Código de Defesa do Consumidor (Art. 49)</span> garante 7 dias para solicitar reembolso caso não fique satisfeito.
                </p>
                <p className="text-gray-700 mb-8">
                  <span className="text-pink-600 font-medium">💡 Mas nós confiamos tanto em nossa seleção de fornecedores que oferecemos 15 DIAS DE GARANTIA INCONDICIONAL!</span>
                </p>
                
                <div className="p-4 bg-green-50 border border-green-100 rounded-lg mb-8">
                  <p className="text-sm text-green-800">
                    Caso você não fique satisfeito com a lista, por qualquer motivo, basta solicitar o reembolso dentro do prazo de 15 dias e devolveremos 100% do seu dinheiro. Sem perguntas!
                  </p>
                </div>
                
                <PulsatingButton>
                  Garanta já sua lista de fornecedores e comece a lucrar!
                </PulsatingButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
