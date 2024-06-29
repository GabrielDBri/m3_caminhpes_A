import { HashRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './componentes/AppLayout';
import Home from './paginas/Home';
import FaleConosco from './paginas/FaleConosco';
import QuemSomos from './paginas/QuemSomos';
import ErrorPage from './paginas/ErrorPage';

export const AppRouter = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="quem-somos" element={<QuemSomos />} />
          <Route path="fale-conosco" element={<FaleConosco />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};
