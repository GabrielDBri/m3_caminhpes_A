

interface ModalConfirmacaoProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalConfirmacao = ({ isOpen, onClose }: ModalConfirmacaoProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="bg-gray-800 text-white p-6 rounded-md z-10">
        <h2 className="text-2xl font-bold mb-4">Mensagem Enviada!</h2>
        <p>Sua mensagem foi enviada com sucesso. Entraremos em contato em breve.</p>
        <button
          onClick={onClose}
          className="mt-4 bg-red-600 px-4 py-2 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
        >
          Fechar
        </button>
      </div>
    </div>
  );
};

export default ModalConfirmacao;
