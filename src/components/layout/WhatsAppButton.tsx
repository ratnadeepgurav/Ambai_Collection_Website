import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  // phone number with country code (India = 91)
  const phoneNumber = '917588245983';
  const message = encodeURIComponent(
    'नमस्ते! मुझे साड़ी के बारे में जानकारी चाहिए। (Hello! I need information about sarees.)'
  );

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] text-primary-foreground px-4 py-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6 fill-current" />
      <span className="hidden sm:inline font-medium text-sm">Chat with us</span>
    </a>
  );
};

export default WhatsAppButton;
