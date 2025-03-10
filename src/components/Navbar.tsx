
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-4',
        scrolled 
          ? 'bg-white/80 backdrop-blur-lg shadow-md' 
          : 'bg-transparent'
      )}
    >
      <div className="max-container flex items-center justify-center md:justify-between">
        <div className="text-2xl font-bold text-gradient-pink">Lista Fornecedores</div>
        <div className="hidden md:flex space-x-6">
          <a href="#fornecedores" className="text-gray-800 hover:text-pink-500 font-medium transition-colors">
            Fornecedores
          </a>
          <a href="#beneficios" className="text-gray-800 hover:text-pink-500 font-medium transition-colors">
            Benefícios
          </a>
          <a href="#bonus" className="text-gray-800 hover:text-pink-500 font-medium transition-colors">
            Bônus
          </a>
          <a href="#garantia" className="text-gray-800 hover:text-pink-500 font-medium transition-colors">
            Garantia
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
