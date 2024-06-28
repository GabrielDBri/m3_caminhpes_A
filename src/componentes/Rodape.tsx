// src/componentes/Rodape.tsx
const Rodape = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4 mt-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-red-500 text-lg font-bold">CONTATOS</h3>
          <ul className="mt-4 space-y-2">
            <li>Ligação: (35) 99761-8038</li>
          </ul>
        </div>

        <div>
          <h3 className="text-red-500 text-lg font-bold">ENDEREÇO</h3>
          <p className="mt-4">
            Avenida Presidente Tancredo de Almeida Neves, 434 <br />
            Avenida - Itajuba - MG.
          </p>
        </div>

        <div>
          <h3 className="text-red-500 text-lg font-bold">HORÁRIO DE ATENDIMENTO</h3>
          <p className="mt-4">
            De Segunda a Sexta, <br />
            das 8h às 18h
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Rodape;
