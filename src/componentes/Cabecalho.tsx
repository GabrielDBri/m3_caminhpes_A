import { Tabs, TabsList, TabsTrigger } from '@radix-ui/react-tabs';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { Instagram, Facebook } from 'lucide-react';

const Cabecalho = () => {
  return (
    <header className="bg-gradient-to-b from-gray-700 to-black text-white p-4 flex flex-col md:flex-row items-center justify-between w-full fixed top-0 left-0 z-50">
      <div className="flex flex-col md:flex-row items-center w-full">
        <div className="flex w-full justify-center md:justify-start mb-4 md:mb-0">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Logo" className="h-16 w-36 md:h-20 md:w-48" />
          </Link>
        </div>
        <nav className="hidden md:flex ml-auto">
          <Tabs className="flex space-x-4">
            <TabsList className="flex">
              <TabsTrigger value="quem-somos" asChild>
                <Link to="/quem-somos" className="text-white text-xl md:text-2xl hover:text-gray-300 px-3 md:px-5">Quem Somos</Link>
              </TabsTrigger>
              <TabsTrigger value="fale-conosco" asChild>
                <Link to="/fale-conosco" className="text-white text-xl md:text-2xl hover:text-gray-300 px-3 md:px-5">Fale Conosco</Link>
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </nav>
      </div>
      <div className="flex items-center w-full justify-center md:justify-end md:w-auto">
        <a href="https://www.instagram.com/m3caminhoes" target="_blank" rel="noopener noreferrer">
          <Instagram className="h-8 w-8 md:h-10 md:w-10 text-white mr-2 md:mr-4 cursor-pointer" />
        </a>
        <a href="https://www.facebook.com/seufacebook" target="_blank" rel="noopener noreferrer">
          <Facebook className="h-8 w-8 md:h-10 md:w-10 text-white cursor-pointer" />
        </a>
      </div>
      <nav className="md:hidden w-full mt-4">
        <Tabs className="flex space-x-4 justify-center">
          <TabsList className="flex w-full justify-center">
            <TabsTrigger value="quem-somos" asChild>
              <Link to="/quem-somos" className="text-white text-xl hover:text-gray-300 px-3">Quem Somos</Link>
            </TabsTrigger>
            <TabsTrigger value="fale-conosco" asChild>
              <Link to="/fale-conosco" className="text-white text-xl hover:text-gray-300 px-3">Fale Conosco</Link>
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </nav>
    </header>
  );
};

export default Cabecalho;
