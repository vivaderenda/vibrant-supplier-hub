
import React from 'react';
import { Shield, CreditCard, Lock, Mail, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="max-container">
        <div className="mb-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="flex flex-col items-center">
            <Shield className="h-8 w-8 text-pink-600 mb-3" />
            <p className="text-sm text-gray-600">Compra 100% Segura</p>
          </div>
          <div className="flex flex-col items-center">
            <CreditCard className="h-8 w-8 text-pink-600 mb-3" />
            <p className="text-sm text-gray-600">Pagamento Facilitado</p>
          </div>
          <div className="flex flex-col items-center">
            <Lock className="h-8 w-8 text-pink-600 mb-3" />
            <p className="text-sm text-gray-600">Site Seguro</p>
          </div>
          <div className="flex flex-col items-center">
            <Mail className="h-8 w-8 text-pink-600 mb-3" />
            <p className="text-sm text-gray-600">Suporte por Email</p>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 pb-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">Formas de Pagamento</h3>
              <div className="flex flex-wrap gap-2">
                <div className="h-8 w-12 bg-gray-200 rounded"></div>
                <div className="h-8 w-12 bg-gray-200 rounded"></div>
                <div className="h-8 w-12 bg-gray-200 rounded"></div>
                <div className="h-8 w-12 bg-gray-200 rounded"></div>
                <div className="h-8 w-12 bg-gray-200 rounded"></div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Segurança</h3>
              <div className="flex flex-wrap gap-2">
                <div className="h-12 w-20 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-500">SSL</div>
                <div className="h-12 w-20 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-500">Seguro</div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Atendimento</h3>
              <div className="flex items-center mb-2">
                <Mail className="h-4 w-4 text-pink-600 mr-2" />
                <p className="text-sm text-gray-600">suporte@listafornecedores.com</p>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 text-pink-600 mr-2" />
                <p className="text-sm text-gray-600">Seg-Sex: 9h às 18h</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-500 mb-4">
            A Lista de Fornecedores Nacionais é um produto informativo. Os resultados podem variar de acordo com cada pessoa, 
            seu empenho, dedicação e também outros fatores externos. Ao adquirir, você concorda com nossos Termos de Uso.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <a href="#" className="text-xs text-gray-500 hover:text-pink-600 transition-colors">Políticas de Privacidade</a>
            <a href="#" className="text-xs text-gray-500 hover:text-pink-600 transition-colors">Termos de Uso</a>
            <a href="#" className="text-xs text-gray-500 hover:text-pink-600 transition-colors">Política de Cookies</a>
          </div>
          
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} Lista de Fornecedores Nacionais. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
