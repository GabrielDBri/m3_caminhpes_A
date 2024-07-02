import React, { useState } from 'react';
import { send } from 'emailjs-com';
import Draggable from 'react-draggable';

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
      productname: product.name, // Nome do produto
    };

    send('service_8me3ten', 'template_m6p1d6b', templateParams, 'T80AufAu-uOSR4VAy')
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
      <Draggable handle=".modal-header">
        <div className="bg-gray-800 p-8 rounded border shadow-lg w-full max-w-5xl h-full max-h-screen overflow-y-auto relative flex flex-col md:flex-row">
          <div className="modal-header cursor-move mb-4 md:mb-0 text-white">
            <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
          </div>
          {/* Carrossel de imagens */}
          <div className="md:w-3/5 mb-4 md:mb-0 overflow-hidden relative">
            <div className="relative w-full h-full">
              <button onClick={handlePrevImage} className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-400 px-1 py-1 rounded-l-md z-10">
                Anterior
              </button>
              <button onClick={handleNextImage} className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-400 px-1 py-1 rounded-r-md z-10">
                Próxima
              </button>
              <img src={product.images[currentImageIndex]} alt={product.name} className="w-full h-full object-contain max-h-96 md:max-h-screen" />
            </div>
          </div>
          
          {/* Informações adicionais e formulário */}
          <div className="md:w-2/5 p-4 overflow-y-auto max-h-full">
            <p>{product.description}</p>
            <p className="mt-4">{product.additionalInfo}</p>
            
            <form onSubmit={handleSubmit} className="mt-4 text-black">
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
      </Draggable>
    </div>
  );
};

export default ProductModal;
