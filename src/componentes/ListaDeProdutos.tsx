import React, { useState, useMemo } from 'react';
import {
  ColumnDef,
  useReactTable,
  getCoreRowModel,
} from '@tanstack/react-table';
import ProductModal from './ProductModal'; // Verifique o caminho do import conforme necessário
import { products, Product } from '../caminhões/products';

const ProductList = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Filtros de estado
  const [filterType, setFilterType] = useState('');
  const [filterBrand, setFilterBrand] = useState('');
  const [filterModel, setFilterModel] = useState('');
  const [filterValue, setFilterValue] = useState('');

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      return (
        (filterType === '' || product.type.includes(filterType)) &&
        (filterBrand === '' || product.brand.includes(filterBrand)) &&
        (filterModel === '' || product.model.includes(filterModel)) &&
        (filterValue === '' || parseFloat(product.price) <= parseFloat(filterValue))
      );
    });
  }, [filterType, filterBrand, filterModel, filterValue]);

  const columns = useMemo<ColumnDef<Product>[]>(
    () => [
      {
        accessorKey: 'images',
        header: 'Image',
        Cell: ({ value }: { value: string[] }) => (
          <img src={value[0]} alt={`Image of ${value[0]}`} className="w-full h-48 object-cover" />
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
        Cell: ({ value }: { value: string }) => <p className="text-red-600">{value}</p>,
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

  const handleFilterModelChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterModel(e.target.value);
  };

  const handleFilterValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterValue(e.target.value);
  };

  return (
    <div>
      <div className="flex justify-between items-center border border-black p-4 text-black shadow-md">
        <div className="flex-grow flex items-center">
          <i className="fa fa-search text-red-500 mr-2"></i>
          <select
            value={filterType}
            onChange={handleFilterTypeChange}
            className="flex-grow p-2 border border-gray-300 text-black"
          >
            <option value="">Tipo</option>
            {/* Adicione as opções de tipo aqui */}
          </select>
        </div>
        <div className="flex-grow ml-2">
          <select
            value={filterBrand}
            onChange={handleFilterBrandChange}
            className="w-full p-2 border border-gray-300 text-black"
          >
            <option value="">Marca</option>
            <option value="Ford">Ford</option>
            <option value="Iveco">Iveco</option>
          </select>
        </div>
        <div className="flex-grow ml-2">
          <select
            value={filterModel}
            onChange={handleFilterModelChange}
            className="w-full p-2 border border-black text-black"
          >
            <option value="">Modelo</option>
            
          </select>
        </div>
        <div className="flex-grow ml-2">
          <input
            type="text"
            placeholder="Preço Maximo"
            value={filterValue}
            onChange={handleFilterValueChange}
            className="w-full p-2 border border-gray-300 rounded-md text-black"
          />
        </div>
      </div>
      <header className="w-full text-left text-white py-7">
        <h1 className="text-4xl font-bold">Nosso Estoque:</h1>
      </header>
      <section className="p-4">
        <div className="grid grid-cols-4 gap-4">
          {table.getRowModel().rows.map(row => (
            <article key={row.id} className="border p-4 bg-gray-700">
              <img src={row.original.images[0]} alt={`Image of ${row.original.name}`} className="w-full h-48 object-cover" />
              <h2 className="text-lg font-semibold mt-2">{row.original.name}</h2>
              <p className="text-gray-500">{row.original.brand}</p>
              <p className="text-red-600">{row.original.price}</p>
              <button
                className="bg-blue-500 text-white py-2 px-4 mt-2"
                onClick={() => setSelectedProduct(row.original)}
              >
                Ver Detalhes
              </button>
            </article>
          ))}
        </div>
        {selectedProduct && (
          <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
        )}
      </section>
    </div>
  );
};

export default ProductList;