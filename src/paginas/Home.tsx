import BannerCarousel from "../componentes/BannerCarrousel";
import ProductList from "../componentes/ListaDeProdutos"

const Home = () => {
    return (
      <div className="bg-gray-800 text-white w-full">
          <div className="mt-4 h-26 rounded-lg">
            <BannerCarousel/>
          </div>
          <div className="flex justify-center mt-4">
          </div>
          <div className="mt-8">
            <ProductList />
          </div>
      </div>
    );
  };
  
export default Home;
