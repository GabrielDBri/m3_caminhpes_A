import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './componentes/AppLayout';
import Home from './paginas/Home';
import FaleConosco from './paginas/FaleConosco';
import QuemSomos from './paginas/QuemSomos';
import ErrorPage from './paginas/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <Home /> },
      { path: 'quem-somos', element: <QuemSomos /> },
      { path: 'fale-conosco', element: <FaleConosco /> },
      // Adicione mais rotas aqui
    ],
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
