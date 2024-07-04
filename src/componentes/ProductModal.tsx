import React, { useState } from 'react';
import { send } from 'emailjs-com';
import Draggable from 'react-draggable';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import ModalConfirmacao from './ModalConfirmacao'; // Importar o componente ModalConfirmacao

export interface Product {
  id: number;
  name: string;
  brand: string;
  ano: string;
  km: string;
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

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
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
        setIsModalOpen(true);  // Abre o modal de confirmação ao enviar com sucesso
      })
      .catch((err) => {
        console.error('FAILED...', err);
      });

    // Resetar o formulário depois de enviar
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
  };

  const closeConfirmationModal = () => {
    setIsModalOpen(false);
    onClose(); // Fechar o ProductModal
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
      <Draggable handle=".modal-header">
        <div className="bg-gray-800 p-8 rounded border shadow-lg w-full max-w-5xl h-full max-h-screen overflow-y-auto relative flex flex-col md:flex-row">
          <div className="modal-header cursor-move mb-4 md:mb-0 text-white">
            <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
          </div>
          {/* Carrossel de imagens com Swiper */}
          <div className="md:w-3/5 mb-4 md:mb-0 overflow-hidden relative">
            <Swiper
              modules={[Navigation, Autoplay, Pagination]}
              className="w-full h-full"
              slidesPerView={1}
              pagination={{ clickable: true }}
              navigation
              autoplay={{ delay: 3000 }}
            >
              {product.images.map((image, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-contain max-h-96 md:max-h-screen"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          
          {/* Informações adicionais e formulário */}
          <div className="md:w-2/5 p-4 overflow-y-auto max-h-full">
            <p>{product.description}</p>
            <p className="mt-4">{product.additionalInfo}</p>
            <p className="mt-4">Ano: {product.ano}</p>
            <p className="mt-4">KM: {product.km}</p>
            
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

      {/* Modal de confirmação */}
      <ModalConfirmacao isOpen={isModalOpen} onClose={closeConfirmationModal} />
    </div>
  );
};

export default ProductModal;
