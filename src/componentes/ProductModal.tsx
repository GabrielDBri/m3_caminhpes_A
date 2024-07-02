import React, { useState } from 'react';
import { send } from 'emailjs-com';

export interface Product {
  id: number;
  name: string;
  brand: string;
  price: number;
  images: string[]; // Alteração para suportar múltiplas imagens
  description: string;
  additionalInfo: string; // Informações adicionais sobre o produto
}

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

const ProductModal = ({ product, onClose }: ProductModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % product.images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + product.images.length) % product.images.length);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
      productName: product.name,
    };

    send('your_service_id', 'your_template_id', templateParams, 'your_user_id')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        onClose();
      })
      .catch((err) => {
        console.error('FAILED...', err);
      });
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-gray-800 p-8 rounded border shadow-lg max-w-3xl w-full relative flex flex-col md:flex-row">
        {/* Carrossel de imagens */}
        <div className="md:w-1/2 mb-4 md:mb-0">
          <div className="relative">
            <button onClick={handlePrevImage} className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-200 px-2 py-1 rounded-l-md">
              Anterior
            </button>
            <button onClick={handleNextImage} className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-200 px-2 py-1 rounded-r-md">
              Próxima
            </button>
            <img src={product.images[currentImageIndex]} alt={product.name} className="w-full rounded-md" />
          </div>
        </div>
        
        {/* Informações adicionais e formulário */}
        <div className="md:w-1/2 p-4">
          <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
          <p>{product.description}</p>
          <p className="mt-4">{product.additionalInfo}</p>
          
          <form onSubmit={handleSubmit} className="mt-4">
            <input
              type="text"
              name="name"
              placeholder="Seu nome"
              value={formData.name}
              onChange={handleChange}
              className="border p-2 w-full mb-2"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Seu email"
              value={formData.email}
              onChange={handleChange}
              className="border p-2 w-full mb-2"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Seu telefone"
              value={formData.phone}
              onChange={handleChange}
              className="border p-2 w-full mb-2"
              required
            />
            <textarea
              name="message"
              placeholder="Sua proposta"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="border p-2 w-full mb-2"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
            >
              Enviar Proposta
            </button>
          </form>
        </div>
        
        {/* Botão de fechar modal */}
        <button onClick={onClose} className="absolute top-2 right-2 text-red-600 text-3xl">
          &times;
        </button>
      </div>
    </div>
  );
};

export default ProductModal;
