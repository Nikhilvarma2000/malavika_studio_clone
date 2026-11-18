import { FaWhatsapp } from "react-icons/fa"

function WhatsAppFloat() {

  return (
    <div className="fixed bottom-5 right-5 z-[9999]">

      {/* Pulse Ring */}
      <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-30"></div>

      <a
        href="https://wa.me/919700555120"
        target="_blank"
        className="relative flex items-center justify-center w-16 h-16 rounded-full bg-green-500 hover:bg-green-400 text-white text-4xl shadow-2xl transition duration-300 hover:scale-110"
      >

        <FaWhatsapp />

      </a>

    </div>
  )
}

export default WhatsAppFloat