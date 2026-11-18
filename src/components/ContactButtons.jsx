import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa"

function ContactButtons() {

  return (
    <div className="flex flex-col sm:flex-row gap-5">

      <a
        href="tel:+919700555120"
        className="bg-yellow-400 hover:bg-yellow-300 text-black px-8 py-4 rounded-full font-bold text-center transition duration-300"
      >
        <div className="flex items-center justify-center gap-3">
          <FaPhoneAlt />
          Call Now
        </div>
      </a>

      <a
        href="https://wa.me/919700555120"
        target="_blank"
        className="border border-white/20 hover:border-green-400 hover:text-green-400 px-8 py-4 rounded-full font-bold text-center transition duration-300"
      >
        <div className="flex items-center justify-center gap-3">
          <FaWhatsapp />
          WhatsApp
        </div>
      </a>

    </div>
  )
}

export default ContactButtons