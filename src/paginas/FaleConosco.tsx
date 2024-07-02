import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const FaleConosco = () => {
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    celular: '',
    email: '',
    assunto: '',
    mensagem: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const templateParams = {
      nome: formData.nome,
      telefone: formData.telefone,
      celular: formData.celular,
      email: formData.email,
      assunto: formData.assunto,
      mensagem: formData.mensagem,
    };
    
    emailjs.send("service_8me3ten", "template_154f6vn", templateParams, "T80AufAu-uOSR4VAy")
      

    // Resetar o formulário depois de enviar
    setFormData({
      nome: '',
      telefone: '',
      celular: '',
      email: '',
      assunto: '',
      mensagem: ''
    });
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 items-center min-h-screen bg-gray-800 text-white">
      <div className=" py-16">
        <h2 className="text-2xl font-bold mb-4">Entre em Contato</h2>
        <li>Telefone: (35) 99761-8038</li>
        <p>Avenida Presidente Tancredo de Almeida Neves, 434 <br />
        Avenida - Itajuba - MG.</p>
      </div>
      {/* Coluna esquerda (formulário) */}
      <div className=" p-6 border">
        <h2 className="text-2xl font-bold mb-4">Fale Conosco</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label htmlFor="nome" className="block font-medium mb-1">Seu Nome:</label>
              <input
                type="text"
                id="nome"
                name="nome"
                placeholder="Seu nome"
                value={formData.nome}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
              />
            </div>
            <div className="w-1/2">
              <label htmlFor="email" className="block font-medium mb-1">Seu Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Digite Seu e-mail"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
              />
            </div>
          </div>
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label htmlFor="telefone" className="block font-medium mb-1">Seu Telefone:</label>
              <input
                type="text"
                id="telefone"
                name="telefone"
                placeholder="Digite Seu Telefone"
                value={formData.telefone}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
              />
            </div>
            <div className="w-1/2">
              <label htmlFor="celular" className="block font-medium mb-1">Seu Celular:</label>
              <input
                type="text"
                id="celular"
                name="celular"
                placeholder="Digite Seu Celular"
                value={formData.celular}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
              />
            </div>
          </div>
          <div>
            <label htmlFor="assunto" className="block font-medium mb-1">Assunto:</label>
            <input
              type="text"
              id="assunto"
              name="assunto"
              placeholder="Digite o Assunto"
              value={formData.assunto}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
            />
          </div>
          <div>
            <label htmlFor="mensagem" className="block font-medium mb-1">Mensagem:</label>
            <textarea
              id="mensagem"
              name="mensagem"
              placeholder="Digite A Mensagem"
              value={formData.mensagem}
              onChange={handleChange}
              rows={4}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-gray-300 text-black px-4 py-2 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default FaleConosco;
