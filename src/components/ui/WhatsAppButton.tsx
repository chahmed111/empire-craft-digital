import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const phoneNumber = "44123456789"; // Replace with actual WhatsApp business number
  const message = encodeURIComponent("Hi! I'm interested in your doors and windows services. Could you please provide more information?");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={24} />
    </a>
  );
};

export default WhatsAppButton;