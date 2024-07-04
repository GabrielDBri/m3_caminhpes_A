import { Helmet } from 'react-helmet-async';
import { AppRouter } from './Router';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Helmet>
        <title>M3 caminhões</title>
        <meta name="description" content="Compre e venda caminhões e carros novos e usados em Santa Rita, Itajubá. Encontre diversas marcas e modelos com garantia de qualidade e ótimos preços." />
        <meta name="keywords" content="caminhões, carros, caminhões usados, caminhões novos, carros usados, carros novos, Santa Rita, Itajubá, venda de caminhões, venda de carros, caminhões baratos, carros baratos" />
        <meta property="og:title" content="Venda de Caminhões e Carros em Santa Rita, Itajubá | M3 caminhões" />
        <meta property="og:description" content="Compre e venda caminhões e carros novos e usados em Santa Rita, Itajubá. Encontre diversas marcas e modelos com garantia de qualidade e ótimos preços." />
        <meta property="og:image" content="https://www.exemplo.com/imagem.jpg" /> {/* Substitua pela URL da sua imagem */}
        <meta property="og:url" content="https://www.exemplo.com/" /> {/* Substitua pela URL do seu site */}
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Venda de Caminhões e Carros em Santa Rita, Itajubá | M3 caminhões" />
        <meta name="twitter:description" content="Compre e venda caminhões e carros novos e usados em Santa Rita, Itajubá. Encontre diversas marcas e modelos com garantia de qualidade e ótimos preços." />
        <meta name="twitter:image" content="https://www.exemplo.com/imagem.jpg" /> {/* Substitua pela URL da sua imagem */}
      </Helmet>
      <AppRouter />
    </div>
  );
}

export default App;
