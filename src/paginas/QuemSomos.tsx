import { Mail, Phone } from 'lucide-react';

const QuemSomos = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white pt-24 sm:pt-24 md:pt-8">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h1 className="text-4xl font-bold mb-8 text-lime-500">Quem Somos</h1>
          <p className="text-lg mb-4">
            Bem-vindo à <strong>M3 Caminhões</strong>, onde tradição e inovação se encontram no mundo dos veículos pesados. Somos uma empresa especializada na venda de caminhões novos e usados, oferecendo sempre as melhores soluções para nossos clientes.
          </p>
          
          <section className="mb-8">
            <h2 className="text-3xl font-semibold mb-4">Nossa Missão</h2>
            <p>
              Nossa missão é fornecer caminhões de alta qualidade que atendam às necessidades diversas dos nossos clientes, contribuindo para o sucesso de seus negócios e promovendo a segurança e eficiência no transporte de cargas.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-semibold mb-4">Nossa Visão</h2>
            <p>
              Ser reconhecida como a principal fornecedora de caminhões novos e usados no mercado nacional, inovando constantemente e proporcionando excelência no atendimento e suporte ao cliente.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-semibold mb-4">Nossos Valores</h2>
            <ul className="list-disc list-inside ml-4">
              <li>Integridade</li>
              <li>Compromisso com o Cliente</li>
              <li>Inovação</li>
              <li>Qualidade</li>
              <li>Sustentabilidade</li>
            </ul>
          </section>
        </div>

        <div>
          <section className="mb-8">
            <h2 className="text-3xl font-semibold mb-4">Nossos Produtos</h2>
            <p>
              Oferecemos uma vasta gama de caminhões novos e usados de diversas marcas e modelos. Cada veículo passa por rigorosas inspeções para garantir que nossos clientes recebam apenas os melhores produtos.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-semibold mb-4">Por que Escolher a M3 Caminhões?</h2>
            <ul className="list-disc list-inside ml-4">
              <li>Equipe de especialistas pronta para atender todas as suas necessidades.</li>
              <li>Veículos de alta qualidade com garantia de procedência.</li>
              <li>Facilidade no financiamento e condições especiais de pagamento.</li>
              <li>Atendimento personalizado e suporte pós-venda.</li>
            </ul>
          </section>
        </div>
      </div>

      {/* Seção de Contato centralizada */}
      <section className="mt-8 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">Contato</h2>
        <p>
          Estamos sempre à disposição para esclarecer dúvidas e ajudar você a encontrar o caminhão ideal para suas necessidades. 
          Entre em contato conosco por:
        </p>
        <div className="flex justify-center items-center mt-4">
          <Mail className="w-6 h-6 mr-2" />
          <a href="mailto:vendas@m3caminhoes.com.br" className="text-lime-500">vendas@m3caminhoes.com.br</a>
        </div>
        <div className="flex justify-center items-center mt-2">
          <Phone className="w-6 h-6 mr-2" />
          <a href="tel:+553599761-8038" className="text-lime-500">(35) 99761-8038</a>
        </div>
      </section>
    </div>
  );
};

export default QuemSomos;
