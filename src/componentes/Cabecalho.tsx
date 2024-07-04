import { useEffect } from 'react';
import { Tabs, TabsList, TabsTrigger } from '@radix-ui/react-tabs';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import { Instagram, Facebook } from 'lucide-react';

const Cabecalho = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Rolagem para o topo quando a localização (URL) mudar
  }, [location]);

  return (
    <header className="bg-gradient-to-b from-gray-700 to-black text-white p-4 flex flex-col md:flex-row items-center justify-between w-full fixed top-0 left-0 z-50">
      {/* Logo e ícones de redes sociais à esquerda */}
      <div className="flex items-center justify-between w-full md:w-auto mb-4 md:mb-0">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Logo" className="h-16 w-36 md:h-20 md:w-48" />
        </Link>
        <div className="flex items-center md:hidden ml-4">
          <a href="https://www.instagram.com/m3caminhoes" target="_blank" rel="noopener noreferrer" className="flex items-center text-white">
            <span className="text-xl mr-2">Siga nos:</span>
            <Instagram className="h-8 w-8 cursor-pointer" />
          </a>
          <a href="https://www.facebook.com/seufacebook" target="_blank" rel="noopener noreferrer" className="ml-4">
            <Facebook className="h-8 w-8 cursor-pointer" />
          </a>
        </div>
      </div>

      {/* Navegação principal */}
      <nav className="hidden md:flex w-full md:w-auto">
        <Tabs className="flex space-x-4">
          <TabsList className="flex items-center justify-center">
            <TabsTrigger value="quem-somos" asChild>
              <Link 
                to="/quem-somos" 
                className="text-white text-xl md:text-2xl hover:text-gray-300 px-3 md:px-5 border-b-2 border-transparent hover:border-red-500"
              >
                Quem Somos
              </Link>
            </TabsTrigger>
            <TabsTrigger value="Home" asChild>
              <Link 
                to="/" 
                className="text-white text-xl md:text-2xl hover:text-gray-300 px-3 md:px-5 border-b-2 border-transparent hover:border-red-500"
              >
                Home  
              </Link>
            </TabsTrigger>
            <TabsTrigger value="fale-conosco" asChild>
              <Link 
                to="/fale-conosco" 
                className="text-white text-xl md:text-2xl hover:text-gray-300 px-3 md:px-5 border-b-2 border-transparent hover:border-red-500"
              >
                Fale Conosco
              </Link>
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </nav>

      {/* Ícones de redes sociais à direita em dispositivos maiores */}
      <div className="hidden md:flex items-center justify-end space-x-4">
        <a href="https://www.instagram.com/m3caminhoes" target="_blank" rel="noopener noreferrer" className="flex items-center text-white">
          <span className="text-xl mr-2">Siga nos:</span>
          <Instagram className="h-8 w-8 cursor-pointer" />
        </a>
        <a href="https://www.facebook.com/seufacebook" target="_blank" rel="noopener noreferrer" className="ml-4">
          <Facebook className="h-8 w-8 cursor-pointer" />
        </a>
      </div>

      {/* Navegação para dispositivos menores */}
      <nav className="md:hidden w-full mt-4">
        <Tabs className="flex space-x-4 justify-center">
          <TabsList className="flex w-full justify-center">
            <TabsTrigger value="quem-somos" asChild>
              <Link 
                to="/quem-somos" 
                className="text-white text-xl hover:text-gray-300 px-3 border-b-2 border-transparent hover:border-red-500"
              >
                Quem Somos
              </Link>
            </TabsTrigger>
            <TabsTrigger value="Home" asChild>
              <Link 
                to="/" 
                className="text-white text-xl hover:text-gray-300 px-3 border-b-2 border-transparent hover:border-red-500"
              >
                Home
              </Link>
            </TabsTrigger>
            <TabsTrigger value="fale-conosco" asChild>
              <Link 
                to="/fale-conosco" 
                className="text-white text-xl hover:text-gray-300 px-3 border-b-2 border-transparent hover:border-red-500"
              >
                Fale Conosco
              </Link>
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </nav>
    </header>
  );
};

export default Cabecalho;
