
import React from 'react';
import { Gift } from 'lucide-react';
import AnimatedCard from './AnimatedCard';

interface BonusItem {
  title: string;
  description: string;
  value: string;
  icon: React.ReactNode;
  delay: number;
}

const BonusSection: React.FC = () => {
  const bonuses: BonusItem[] = [
    {
      title: 'Cartões Interativos',
      description: 'Crie apresentações profissionais para suas redes sociais!',
      value: 'R$ 47,00',
      icon: '📌',
      delay: 0
    },
    {
      title: 'Pack de Templates',
      description: 'Poste no Instagram como um profissional!',
      value: 'R$ 47,00',
      icon: '📌',
      delay: 200
    },
    {
      title: 'Planilhas Excel',
      description: 'Organização total para seu negócio!',
      value: 'R$ 59,00',
      icon: '📌',
      delay: 400
    },
  ];

  return (
    <section id="bonus" className="section-padding bg-gradient-to-b from-white to-pink-50 relative overflow-hidden">
      {/* Abstract shapes */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-pink-500/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />
      
      <div className="max-container relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full mb-4">
            <Gift className="h-5 w-5 mr-2" />
            <span className="font-medium">BÔNUS EXCLUSIVOS</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            BÔNUS <span className="text-gradient-pink">INCRÍVEIS</span> 🎁
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-700 mb-8">
            Ao adquirir a lista de fornecedores, você também receberá estes bônus exclusivos para impulsionar ainda mais o seu negócio:
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {bonuses.map((bonus, index) => (
            <AnimatedCard 
              key={index} 
              delay={bonus.delay}
              className="p-8 flex flex-col items-center text-center"
            >
              <div className="text-4xl mb-4">{bonus.icon}</div>
              <h3 className="text-xl font-bold mb-2">{bonus.title}</h3>
              <p className="text-gray-600 mb-4">{bonus.description}</p>
              <div className="mt-auto">
                <span className="bg-pink-100 text-pink-800 px-4 py-1 rounded-full font-medium">
                  Valor: {bonus.value}
                </span>
              </div>
            </AnimatedCard>
          ))}
        </div>

        <div className="mt-16 glass-card p-8 bg-gradient-to-r from-yellow-400/10 to-yellow-600/10 border border-yellow-200">
          <div className="md:flex items-center justify-between">
            <div className="mb-6 md:mb-0 md:w-2/3">
              <h3 className="text-2xl font-bold mb-2">Valor Total dos Bônus:</h3>
              <div className="text-3xl font-bold text-pink-600 animate-pulse">
                R$ 153,00 em bônus GRÁTIS!
              </div>
            </div>
            <div className="md:w-1/3">
              <div className="relative">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-pink-500 to-highlight animate-pulse blur opacity-30"></div>
                <div className="relative rounded-xl bg-white/50 backdrop-blur-sm p-4 text-center">
                  <p className="text-lg font-medium mb-1">Você recebe tudo:</p>
                  <p className="text-xl font-bold text-pink-600">Lista + Bônus</p>
                  <p className="text-gray-600 text-sm mt-1">Acesso imediato após o pagamento</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BonusSection;
