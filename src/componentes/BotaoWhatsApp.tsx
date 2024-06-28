import logowhats from "../assets/logowhats.png";

const BotaoWhatsApp = () => {
  return (
    <a href="https://wa.me/5535997618038" className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-full shadow-lg">
      <img src={logowhats} alt="WhatsApp" className="w-12 h-12" />
    </a>
  );
};

export default BotaoWhatsApp;
