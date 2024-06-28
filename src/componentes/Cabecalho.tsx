import { Tabs, TabsList, TabsTrigger } from '@radix-ui/react-tabs';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { Instagram, Facebook } from 'lucide-react'; // Importando ícones do Lucide React

const Cabecalho = () => {
  return (
    <header className="bg-gradient-to-b from-gray-700 to-black text-white p-4 flex items-center justify-between w-full fixed top-0 left-0">
      <div className="flex items-center mr-12"> {/* Aumentado o margin-right para afastar mais o logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Logo" className="h-20 w-48" />
        </Link>
        <nav className="ml-auto"> {/* ml-auto para alinhar à direita */}
          <Tabs className="flex space-x-4">
            <TabsList className="flex">
              <TabsTrigger value="quem-somos" asChild>
                <Link to="/quem-somos" className="text-white text-2xl hover:text-gray-300 px-5">Quem Somos</Link>
              </TabsTrigger>
              <TabsTrigger value="fale-conosco" asChild>
                <Link to="/fale-conosco" className="text-white text-2xl hover:text-gray-300 px-5">Fale Conosco</Link>
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </nav>
      </div>
      <div className="flex items-center ml-auto"> {/* ml-auto para alinhar à direita */}
        <a href="https://www.instagram.com/m3caminhoes" target="_blank" rel="noopener noreferrer">
          <Instagram className="h-10 w-10 text-white mr-4 cursor-pointer" />
        </a>
        <a href="https://www.facebook.com/seufacebook" target="_blank" rel="noopener noreferrer">
          <Facebook className="h-10 w-10 text-white cursor-pointer" />
        </a>
      </div>
    </header>
  );
};

export default Cabecalho;
