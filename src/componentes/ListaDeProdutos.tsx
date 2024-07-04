import React, { useState, useMemo, useEffect } from 'react';
import { ColumnDef, useReactTable, getCoreRowModel } from '@tanstack/react-table';
import ProductModal from './ProductModal'; // Verifique o caminho do import conforme necessário
import { products, Product } from '../path/to/products.ts';

const ProductList = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [modalReady, setModalReady] = useState(false); // Estado para controlar o pré-carregamento do modal
  const [imagesLoaded, setImagesLoaded] = useState(0); // Contador para imagens carregadas

  // Filtros de estado
  const [filterType, setFilterType] = useState('');
  const [filterBrand, setFilterBrand] = useState('');
  const [filterValue, setFilterValue] = useState('');

  const filteredProducts = useMemo(() => {
    return products.filter((product: Product) => {
      return (
        (filterType === '' || product.type.includes(filterType)) &&
        (filterBrand === '' || product.brand.includes(filterBrand)) &&
        (filterValue === '' || product.price <= parseFloat(filterValue.replace(/[R$,.]/g, '')))
      );
    });
  }, [filterType, filterBrand, filterValue]);

  const columns = useMemo<ColumnDef<Product>[]>(
    () => [
      {
        accessorKey: 'images',
        header: 'Image',
        Cell: ({ value }: { value: string[] }) => (
          <img
            src={value[0]}
            alt={`Image of ${value[0]}`}
            className="w-full h-48 object-cover"
            onLoad={() => setImagesLoaded(prev => prev + 1)} // Atualiza o contador quando a imagem é carregada
          />
        ),
      },
      {
        accessorKey: 'name',
        header: 'Name',
        Cell: ({ value }: { value: string }) => <h3 className="text-lg font-semibold">{value}</h3>,
      },
      {
        accessorKey: 'brand',
        header: 'Brand',
        Cell: ({ value }: { value: string }) => <p className="text-gray-500">{value}</p>,
      },
      {
        accessorKey: 'price',
        header: 'Price',
        Cell: ({ value }: { value: number }) => {
          const formattedPrice = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(value);
          return <p className="text-red-600">{formattedPrice}</p>;
        },
      },
    ],
    []
  );

  const table = useReactTable({
    data: filteredProducts,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  // Handlers de filtro
  const handleFilterTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterType(e.target.value);
  };

  const handleFilterBrandChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterBrand(e.target.value);
  };

  const formatCurrency = (value: string) => {
    const numericValue = value.replace(/\D/g, '');
    if (!numericValue) return '';
    const formattedValue = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(parseFloat(numericValue) || 0);
    return formattedValue.replace('R$', 'R$ ');
  };

  const handleFilterValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    if (inputValue === '') {
      setFilterValue('');
    } else {
      const formattedValue = formatCurrency(inputValue);
      setFilterValue(formattedValue);
    }
  };

  useEffect(() => {
    // Pré-carregar as imagens dos produtos
    const imagePromises = filteredProducts.map(product => {
      return new Promise(resolve => {
        const img = new Image();
        img.src = product.images[0];
        img.onload = () => {
          setImagesLoaded(prev => prev + 1);
          resolve(undefined);
        };
      });
    });

    Promise.all(imagePromises).then(() => {
      // Marcar o modal como pronto quando pelo menos uma imagem estiver carregada
      if (imagesLoaded > 0) {
        setModalReady(true);
      }
    });
  }, [filteredProducts, imagesLoaded]);

  return (
    <div>
      <div className="flex flex-col md:flex-row border-l-4 border-red-600 justify-between items-center p-4 text-black shadow-md bg-gray-600">
        <div className="w-full md:flex-grow flex items-center mb-2 md:mb-0">
          <i className="fa fa-search text-red-500 mr-2"></i>
          <select
            value={filterType}
            onChange={handleFilterTypeChange}
            className="flex-grow p-2 border border-gray-300 text-black"
          >
            <option value="">Tipo</option>
            <option value="Caminhão">Caminhão</option>
            <option value="Automotivo">Automotivo</option>
          </select>
        </div>
        <div className="w-full md:flex-grow mb-2 md:mb-0 md:ml-2">
          <select
            value={filterBrand}
            onChange={handleFilterBrandChange}
            className="w-full p-2 border border-gray-300 text-black"
          >
            <option value="">Marca</option>
            <option value="Ford">Ford</option>
            <option value="Volkswagen">Volkswagen</option>
            <option value="Kia">Kia</option>
            <option value="Land Rover">Land Rover</option>
            <option value="Iveco">Iveco</option>
            <option value="Mercedes">Mercedes</option>
            <option value="Cruze">Cruze</option>
          </select>
        </div>
        <div className="w-full md:flex-grow md:ml-2">
          <input
            type="text"
            placeholder="Preço Máximo"
            value={filterValue}
            onChange={handleFilterValueChange}
            className="w-full p-2 border border-gray-300 rounded-md text-black"
          />
        </div>
      </div>
      <header className="w-full text-left text-white py-7">
        <h1 className="text-3xl border-l-4 border-red-600 font-bold p-4">Nosso Estoque:</h1>
      </header>
      <section className="p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {table.getRowModel().rows.map(row => (
            <article key={row.id} className="p-4 bg-gray-700">
              <img src={row.original.images[0]} alt={`Image of ${row.original.name}`} className="w-full h-48 object-cover" />
              <h2 className="text-lg font-semibold mt-2">{row.original.name}</h2>
              <p className="text-gray-500">{row.original.brand}</p>
              <p className="text-white-600">{new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(row.original.price)}</p>
              <button
                className="bg-blue-500 text-white py-2 px-4 mt-2"
                onClick={() => setSelectedProduct(row.original)}
              >
                Ver Detalhes
              </button>
            </article>
          ))}
        </div>
        {selectedProduct && modalReady && (
          <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
        )}
      </section>
    </div>
  );
};

export default ProductList;
