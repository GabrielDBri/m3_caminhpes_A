import { Helmet } from 'react-helmet-async';
import { AppRouter } from './Router';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Helmet>
        <title> Caminhões</title>
        <meta name="description" content="Venda de caminhões em itajuba" />
        <meta name="keywords" content="venda, produto, caminhões, empresa, blog" />
        <meta property="og:title" content="Minha Página Inicial" />
        <meta property="og:description" content="Bem-vindo à minha página inicial, onde você encontra informações incríveis sobre nosso serviço." />
        <meta property="og:image" content="https://www.exemplo.com/imagem.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Minha Página Inicial" />
        <meta name="twitter:description" content="Bem-vindo à minha página inicial, onde você encontra informações incríveis sobre nosso serviço." />
        <meta name="twitter:image" content="https://www.exemplo.com/imagem.jpg" />
      </Helmet>
      <AppRouter />
    </div>
  );
}

export default App;
