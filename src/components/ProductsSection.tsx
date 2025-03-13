
import React, { useState } from 'react';
import AnimatedCard from './AnimatedCard';
import PulsatingButton from './PulsatingButton';
import { Input } from './ui/input';
import { Form, FormField, FormItem, FormLabel, FormControl } from './ui/form';
import { Switch } from './ui/switch';

interface ProductItem {
  image: string;
  name: string;
  price: string;
  delay: number;
}

const ProductsSection: React.FC = () => {
  const [products, setProducts] = useState<ProductItem[]>([
    { image: '/lovable-uploads/12f112d3-5a8a-4110-985a-0cfa54687a48.png', name: 'Maquiagem', price: 'A partir de R$ 2,00', delay: 0 },
    { image: '/lovable-uploads/19ce3a54-cc0a-416c-b250-9572f2f8d7c3.png', name: 'iPhones', price: 'Todos os modelos disponíveis', delay: 100 },
    { image: '/lovable-uploads/459eaa7f-5d19-4fa0-a22c-aa73d7b472a0.png', name: 'Eletrônicos', price: 'A partir de R$ 25,00', delay: 200 },
    { image: '/lovable-uploads/4e9cb375-accd-4976-b36e-e2a2402ddb61.png', name: 'Importados', price: 'A partir de R$ 25,00', delay: 300 },
    { image: '/lovable-uploads/7600dcc8-1521-4787-8cba-098c5a2d7f48.png', name: 'Bolsas', price: 'A partir de R$ 10,00', delay: 400 },
    { image: '/lovable-uploads/bc380230-ef0a-48ef-91cb-a503853e20d7.png', name: 'Camisas de Futebol', price: 'A partir de R$ 30,00', delay: 500 },
    { image: '/lovable-uploads/e005766f-61ac-4300-b444-8093cb4e53d0.png', name: 'Relógios', price: 'A partir de R$ 10,00', delay: 600 },
    { image: '/lovable-uploads/12f112d3-5a8a-4110-985a-0cfa54687a48.png', name: 'Calçados', price: 'A partir de R$ 30,00', delay: 700 },
    { image: '/lovable-uploads/19ce3a54-cc0a-416c-b250-9572f2f8d7c3.png', name: 'Perfumes', price: 'A partir de R$ 70,00', delay: 800 },
    { image: '/lovable-uploads/459eaa7f-5d19-4fa0-a22c-aa73d7b472a0.png', name: 'Moda Feminina', price: 'A partir de R$ 10,00', delay: 900 },
    { image: '/lovable-uploads/4e9cb375-accd-4976-b36e-e2a2402ddb61.png', name: 'Semijoias', price: 'A partir de R$ 5,00', delay: 1000 },
    { image: '/lovable-uploads/7600dcc8-1521-4787-8cba-098c5a2d7f48.png', name: 'Brinquedos', price: 'A partir de R$ 1,50', delay: 1100 },
  ]);
  
  const [editMode, setEditMode] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);
  const [newImageUrl, setNewImageUrl] = useState("");
  
  const handleImageUpdate = (index: number) => {
    if (newImageUrl.trim() !== "") {
      const updatedProducts = [...products];
      updatedProducts[index] = {
        ...updatedProducts[index],
        image: newImageUrl
      };
      setProducts(updatedProducts);
      setNewImageUrl("");
      setSelectedProduct(null);
    }
  };

  const handleProductCardClick = (index: number) => {
    if (editMode) {
      setSelectedProduct(index);
      setNewImageUrl(products[index].image);
    }
  };

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
          
          <div className="mt-4 flex items-center justify-center">
            <FormItem className="flex items-center space-x-2">
              <FormLabel className="text-sm">Modo de Edição</FormLabel>
              <Switch 
                checked={editMode} 
                onCheckedChange={setEditMode} 
              />
            </FormItem>
          </div>
        </div>

        {selectedProduct !== null && editMode && (
          <div className="mb-8 p-4 bg-white rounded-lg shadow-md max-w-xl mx-auto">
            <h3 className="text-lg font-medium mb-4">Editar imagem: {products[selectedProduct].name}</h3>
            <div className="flex flex-col space-y-4">
              <div className="flex justify-center mb-4">
                <img 
                  src={products[selectedProduct].image} 
                  alt={products[selectedProduct].name} 
                  className="h-24 object-contain"
                />
              </div>
              <FormItem>
                <FormLabel>URL da nova imagem</FormLabel>
                <Input
                  type="text"
                  value={newImageUrl}
                  onChange={(e) => setNewImageUrl(e.target.value)}
                  placeholder="Insira a URL da imagem"
                />
              </FormItem>
              <div className="flex space-x-2">
                <button 
                  className="px-4 py-2 bg-pink-600 text-white rounded-md hover:bg-pink-700"
                  onClick={() => handleImageUpdate(selectedProduct)}
                >
                  Atualizar
                </button>
                <button 
                  className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
                  onClick={() => setSelectedProduct(null)}
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <AnimatedCard 
              key={index} 
              className={`p-6 h-full ${editMode ? 'cursor-pointer hover:ring-2 hover:ring-pink-400' : ''}`}
              delay={product.delay}
              onClick={() => handleProductCardClick(index)}
            >
              <div className="h-full flex flex-col">
                <div className="mb-4 h-16 flex items-center justify-center">
                  <img src={product.image} alt={product.name} className="h-full object-contain" />
                </div>
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
