import React, { useState, useRef } from 'react';
import AnimatedCard from './AnimatedCard';
import PulsatingButton from './PulsatingButton';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Switch } from './ui/switch';
import { Button } from './ui/button';
import { Upload } from 'lucide-react';

interface ProductItem {
  image: string;
  name: string;
  price: string;
  delay: number;
}

const ProductsSection: React.FC = () => {
  const [products, setProducts] = useState<ProductItem[]>([{
    image: '/lovable-uploads/61bdfa79-c8ec-4a99-8a51-fb20359904f9.png',
    name: 'Maquiagem',
    price: 'A partir de R$ 2,00',
    delay: 0
  }, {
    image: '/lovable-uploads/91146925-fb0c-4a42-96ef-9de1fa39f3aa.png',
    name: 'iPhones',
    price: 'Todos os modelos disponíveis',
    delay: 100
  }, {
    image: '/lovable-uploads/23e3f3d4-f34c-47f5-8174-13ffd1881d1c.png',
    name: 'Eletrônicos',
    price: 'A partir de R$ 25,00',
    delay: 200
  }, {
    image: '/lovable-uploads/836d92f0-fb2b-499f-8db4-9b46902609b5.png',
    name: 'Importados',
    price: 'A partir de R$ 25,00',
    delay: 300
  }, {
    image: '/lovable-uploads/ee33d379-b9d6-4601-bb8e-c98d00680b80.png',
    name: 'Bolsas',
    price: 'A partir de R$ 10,00',
    delay: 400
  }, {
    image: '/lovable-uploads/70760189-6587-4126-8d8b-8db00dd1f8bd.png',
    name: 'Camisas de Futebol',
    price: 'A partir de R$ 30,00',
    delay: 500
  }, {
    image: '/lovable-uploads/9214b50c-74ed-4664-bbe0-2be38d154c1b.png',
    name: 'Relógios',
    price: 'A partir de R$ 10,00',
    delay: 600
  }, {
    image: '/lovable-uploads/da8c79b9-983e-4a19-98db-9c3a3a936957.png',
    name: 'Calçados',
    price: 'A partir de R$ 30,00',
    delay: 700
  }, {
    image: '/lovable-uploads/ac5f1d4d-0604-4c3d-919c-cf723381182b.png',
    name: 'Perfumes',
    price: 'A partir de R$ 70,00',
    delay: 800
  }, {
    image: '/lovable-uploads/99752724-afe8-41e6-952c-0af46c47cc27.png',
    name: 'Moda Feminina',
    price: 'A partir de R$ 10,00',
    delay: 900
  }, {
    image: '/lovable-uploads/aff80d80-9693-417f-a1d6-4320c48a06b2.png',
    name: 'Semijoias',
    price: 'A partir de R$ 5,00',
    delay: 1000
  }, {
    image: '/lovable-uploads/ff7976f9-c547-4e25-a294-b70d3f2e929a.png',
    name: 'Brinquedos',
    price: 'A partir de R$ 1,50',
    delay: 1100
  }]);

  const [editMode, setEditMode] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);
  const [newImageUrl, setNewImageUrl] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUrlUpdate = (index: number) => {
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

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = e => {
        const result = e.target?.result as string;
        const updatedProducts = [...products];
        updatedProducts[index] = {
          ...updatedProducts[index],
          image: result
        };
        setProducts(updatedProducts);
        setSelectedProduct(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const handleProductCardClick = (index: number) => {
    if (editMode) {
      setSelectedProduct(index);
      setNewImageUrl(products[index].image);
    }
  };

  return <section id="fornecedores" className="section-padding bg-gradient-to-b from-white to-pink-50">
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
          
          <div className="flex items-center justify-center mt-6 gap-2">
            <Label htmlFor="edit-mode" className="cursor-pointer">Modo de Edição</Label>
            <Switch id="edit-mode" checked={editMode} onCheckedChange={setEditMode} />
          </div>
        </div>

        {selectedProduct !== null && editMode && <div className="mb-8 p-4 bg-white rounded-lg shadow-md max-w-xl mx-auto">
            <h3 className="text-lg font-medium mb-4">Editar imagem: {products[selectedProduct].name}</h3>
            <div className="flex flex-col space-y-4">
              <div className="flex justify-center mb-4">
                <img src={products[selectedProduct].image} alt={products[selectedProduct].name} className="h-24 object-contain" />
              </div>
              
              <div className="flex flex-col space-y-4">
                <div>
                  <Label htmlFor="imageUrl">URL da nova imagem</Label>
                  <Input id="imageUrl" type="text" value={newImageUrl} onChange={e => setNewImageUrl(e.target.value)} placeholder="Insira a URL da imagem" />
                </div>
                
                <div className="flex flex-col space-y-2">
                  <Label>Ou faça upload de uma imagem</Label>
                  <input type="file" ref={fileInputRef} accept="image/*" className="hidden" onChange={e => handleFileUpload(e, selectedProduct)} />
                  <Button onClick={triggerFileInput} className="w-full bg-gray-100 text-gray-800 hover:bg-gray-200" variant="outline">
                    <Upload className="mr-2 h-4 w-4" /> Escolher imagem
                  </Button>
                </div>
              </div>
              
              <div className="flex space-x-2">
                <button className="px-4 py-2 bg-pink-600 text-white rounded-md hover:bg-pink-700" onClick={() => handleImageUrlUpdate(selectedProduct)}>
                  Atualizar URL
                </button>
                <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400" onClick={() => setSelectedProduct(null)}>
                  Cancelar
                </button>
              </div>
            </div>
          </div>}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product, index) => <AnimatedCard key={index} className={`p-6 h-full ${editMode ? 'cursor-pointer hover:ring-2 hover:ring-pink-400' : ''}`} delay={product.delay} onClick={() => handleProductCardClick(index)}>
              <div className="h-full flex flex-col">
                <div className="mb-4 h-16 flex items-center justify-center">
                  <img src={product.image} alt={product.name} className="h-full object-contain" />
                </div>
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-pink-600 font-medium mt-auto">{product.price}</p>
              </div>
            </AnimatedCard>)}
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
    </section>;
};

export default ProductsSection;
