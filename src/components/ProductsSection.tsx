
import React from 'react';
import AnimatedCard from './AnimatedCard';
import PulsatingButton from './PulsatingButton';

interface ProductItem {
  icon: string;
  name: string;
  price: string;
  delay: number;
}

const ProductsSection: React.FC = () => {
  const products: ProductItem[] = [
    { icon: '💄', name: 'Maquiagem', price: 'A partir de R$ 2,00', delay: 0 },
    { icon: '📱', name: 'iPhones', price: 'Todos os modelos disponíveis', delay: 100 },
    { icon: '⚡', name: 'Eletrônicos', price: 'A partir de R$ 25,00', delay: 200 },
    { icon: '🌎', name: 'Importados', price: 'A partir de R$ 25,00', delay: 300 },
    { icon: '👜', name: 'Bolsas', price: 'A partir de R$ 10,00', delay: 400 },
    { icon: '⚽', name: 'Camisas de Futebol', price: 'A partir de R$ 30,00', delay: 500 },
    { icon: '⌚', name: 'Relógios', price: 'A partir de R$ 10,00', delay: 600 },
    { icon: '👟', name: 'Calçados', price: 'A partir de R$ 30,00', delay: 700 },
    { icon: '🌿', name: 'Perfumes', price: 'A partir de R$ 70,00', delay: 800 },
    { icon: '👗', name: 'Moda Feminina', price: 'A partir de R$ 10,00', delay: 900 },
    { icon: '💍', name: 'Semijoias', price: 'A partir de R$ 5,00', delay: 1000 },
    { icon: '🧸', name: 'Brinquedos', price: 'A partir de R$ 1,50', delay: 1100 },
  ];

  return (
    <section id="fornecedores" className="section-padding bg-gradient-to-b from-white to-pink-50">
      <div className="max-container">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-pink-100 text-pink-800 rounded-full text-sm font-medium mb-4">
            MAIS DE 300 FORNECEDORES
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            OS MELHORES <span className="text-gradient-pink">FORNECEDORES</span>
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-700">
            Na lista de fornecedores, você terá acesso a mais de 300 fornecedores de diferentes tipos de produtos. 
            <span className="text-pink-600 font-medium"> Você pode escolher trabalhar apenas com um segmento ou comprar de vários para revender!</span>
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <AnimatedCard 
              key={index} 
              className="p-6 h-full"
              delay={product.delay}
            >
              <div className="h-full flex flex-col">
                <div className="text-4xl mb-4">{product.icon}</div>
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-pink-600 font-medium mt-auto">{product.price}</p>
              </div>
            </AnimatedCard>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-700 mb-8">
            <span className="text-pink-600 font-medium">🎯 Esses são apenas alguns exemplos</span> do que você receberá ao ter acesso à lista de fornecedores secretos.
          </p>
          <PulsatingButton onClick={() => window.open('https://pay.kiwify.com.br/KaHkPAE', '_blank')}>
            📌 Quero ter acesso aos fornecedores secretos!
          </PulsatingButton>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
