import { Outlet } from 'react-router-dom';
import Cabecalho from './Cabecalho';
import Rodape from './Rodape';
import BotaoWhatsApp from './BotaoWhatsApp';

const AppLayout = () => {
  return (
    <div className="flex flex-col min-h-screen  w-full">
      <Cabecalho />
      <div className="flex-grow pt-24 p-4 w-full"> {/* Ajuste o valor de pt conforme a altura do cabeçalho */}
        <Outlet />
      </div>
      <Rodape />
      <BotaoWhatsApp />
    </div>
  );
};

export default AppLayout;
