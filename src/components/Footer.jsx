import {
  FaInstagram,
  FaWhatsapp,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa"

function Footer() {

  return (
    <footer className="relative bg-black border-t border-white/10 overflow-hidden">

      {/* Glow */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[400px] h-[400px] bg-yellow-500/10 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-5 lg:px-10 py-20 relative z-10">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div>

            <h2 className="text-3xl font-bold mb-5 tracking-[3px]">
              MALAVIKA
            </h2>

            <p className="text-gray-400 leading-relaxed mb-6">

              Professional photography and customized gifts
              designed to create unforgettable memories.

            </p>

            <div className="flex items-center gap-4">

              <a
                href="#"
                className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-yellow-400 hover:text-black transition duration-300"
              >
                <FaInstagram />
              </a>

              <a
                href="https://wa.me/919700555120"
                target="_blank"
                className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-green-500 transition duration-300"
              >
                <FaWhatsapp />
              </a>

            </div>

          </div>

          {/* Quick Links */}
          <div>

            <h3 className="text-2xl font-bold mb-6">
              Quick Links
            </h3>

            <div className="flex flex-col gap-4 text-gray-400">

              <a href="#home" className="hover:text-yellow-400 transition">
                Home
              </a>

              <a href="#about" className="hover:text-yellow-400 transition">
                About
              </a>

              <a href="#services" className="hover:text-yellow-400 transition">
                Services
              </a>

              <a href="#gallery" className="hover:text-yellow-400 transition">
                Gallery
              </a>

              <a href="#contact" className="hover:text-yellow-400 transition">
                Contact
              </a>

            </div>

          </div>

          {/* Services */}
          <div>

            <h3 className="text-2xl font-bold mb-6">
              Services
            </h3>

            <div className="flex flex-col gap-4 text-gray-400">

              <p>Wedding Photography</p>
              <p>Pre Wedding Shoots</p>
              <p>Customized Gifts</p>
              <p>Frames & Printing</p>
              <p>LED Gifts</p>

            </div>

          </div>

          {/* Contact */}
          <div>

            <h3 className="text-2xl font-bold mb-6">
              Contact Info
            </h3>

            <div className="flex flex-col gap-5">

              <div className="flex items-start gap-4">

                <FaPhoneAlt className="text-yellow-400 mt-1" />

                <a
                  href="tel:+919700555120"
                  className="text-gray-400 hover:text-yellow-400 transition"
                >
                  +91 9700555120
                </a>

              </div>

              <div className="flex items-start gap-4">

                <FaWhatsapp className="text-green-400 mt-1" />

                <a
                  href="https://wa.me/919700555120"
                  target="_blank"
                  className="text-gray-400 hover:text-green-400 transition"
                >
                  WhatsApp Chat
                </a>

              </div>

              <div className="flex items-start gap-4">

                <FaMapMarkerAlt className="text-yellow-400 mt-1" />

                <p className="text-gray-400">
                  MALAVIKA PHOTO STUDIO & PRINTERS, Revenue Colony Rd, Revenue Colony, Prakashreddypet, Hanamkonda, Telangana 506001, India
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-5">

          <p className="text-gray-500 text-center md:text-left">
            © 2026 GrowUp. All Rights Reserved.
          </p>

          <p className="text-gray-500 text-center md:text-right">
            Designed with ❤️ for unforgettable memories
          </p>

        </div>

      </div>

    </footer>
  )
}

export default Footer