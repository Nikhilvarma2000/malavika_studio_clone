import { useState } from "react"

import { motion } from "framer-motion"

import {
  FaPhoneAlt,
  FaWhatsapp,
  FaMapMarkerAlt,
} from "react-icons/fa"

import toast from "react-hot-toast"

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  })

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })

  }

  const handleSubmit = async (e) => {

    e.preventDefault()

    toast.success("Inquiry Sent Successfully 🔥")

    setFormData({
      name: "",
      phone: "",
      service: "",
      message: "",
    })

  }

  return (
    <section
      id="contact"
      className="relative py-20 md:py-24 bg-[#050505] overflow-hidden"
    >

      {/* Glow */}
      <div className="absolute right-0 top-10 w-60 md:w-80 h-60 md:h-80 bg-yellow-500/10 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-14 md:mb-20"
        >

          <p className="text-yellow-400 uppercase tracking-[3px] md:tracking-[4px] mb-4 text-xs sm:text-sm">
            Contact Us
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 leading-tight">

            Let’s Create Something
            <span className="text-yellow-400"> Beautiful</span>

          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed px-2">

            Contact us for photography services, customized gifts,
            printing solutions and memorable creative experiences.

          </p>

        </motion.div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="space-y-6 md:space-y-8"
          >

            {/* Call Card */}
            <div className="bg-white/5 border border-white/10 backdrop-blur-xl p-5 sm:p-6 md:p-8 rounded-[24px] md:rounded-[30px]">

              <div className="flex items-start sm:items-center gap-4 mb-5">

                <div className="min-w-[55px] min-h-[55px] md:min-w-[65px] md:min-h-[65px] rounded-full bg-yellow-400 text-black flex items-center justify-center text-xl md:text-2xl">
                  <FaPhoneAlt />
                </div>

                <div>
                  <h3 className="text-xl md:text-2xl font-bold">
                    Call Us
                  </h3>

                  <p className="text-gray-400 text-sm md:text-base">
                    Quick support and consultation
                  </p>
                </div>

              </div>

              <a
                href="tel:+919700555120"
                className="text-yellow-400 text-lg md:text-xl font-semibold break-all hover:underline"
              >
                +91 9700555120
              </a>

            </div>

            {/* WhatsApp Card */}
            <div className="bg-white/5 border border-white/10 backdrop-blur-xl p-5 sm:p-6 md:p-8 rounded-[24px] md:rounded-[30px]">

              <div className="flex items-start sm:items-center gap-4 mb-5">

                <div className="min-w-[55px] min-h-[55px] md:min-w-[65px] md:min-h-[65px] rounded-full bg-green-500 text-white flex items-center justify-center text-xl md:text-2xl">
                  <FaWhatsapp />
                </div>

                <div>
                  <h3 className="text-xl md:text-2xl font-bold">
                    WhatsApp Chat
                  </h3>

                  <p className="text-gray-400 text-sm md:text-base">
                    Chat instantly with us
                  </p>
                </div>

              </div>

              <a
                href="https://wa.me/919700555120"
                target="_blank"
                className="text-green-400 text-lg md:text-xl font-semibold hover:underline"
              >
                Open WhatsApp
              </a>

            </div>

            {/* Address Card */}
            <div className="bg-white/5 border border-white/10 backdrop-blur-xl p-5 sm:p-6 md:p-8 rounded-[24px] md:rounded-[30px]">

              <div className="flex items-start gap-4 mb-5">

                <div className="min-w-[55px] min-h-[55px] md:min-w-[65px] md:min-h-[65px] rounded-full bg-yellow-400 text-black flex items-center justify-center text-xl md:text-2xl">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <h3 className="text-xl md:text-2xl font-bold">
                    Visit Our Shop
                  </h3>

                  <p className="text-gray-400 text-sm md:text-base">
                    Malavika Studio & Printers
                  </p>
                </div>

              </div>

              <p className="text-gray-300 leading-relaxed text-sm sm:text-base break-words">
                MALAVIKA PHOTO STUDIO & PRINTERS,
                Revenue Colony Rd,
                Revenue Colony,
                Prakashreddypet,
                Hanamkonda,
                Telangana 506001,
                India
              </p>

              <a
                href="https://maps.app.goo.gl/sSB2wyzDf7xFdxyE7"
                target="_blank"
                className="inline-block mt-5 text-yellow-400 hover:underline text-sm md:text-base"
              >
                Open In Google Maps
              </a>

            </div>

          </motion.div>

          {/* FORM */}
          <motion.form
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="bg-white/5 border border-white/10 backdrop-blur-xl p-5 sm:p-6 md:p-8 rounded-[24px] md:rounded-[30px] h-fit"
          >

            <div className="grid gap-5">

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-black/40 border border-white/10 rounded-2xl px-4 md:px-5 py-3 md:py-4 text-sm md:text-base outline-none focus:border-yellow-400 transition"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="bg-black/40 border border-white/10 rounded-2xl px-4 md:px-5 py-3 md:py-4 text-sm md:text-base outline-none focus:border-yellow-400 transition"
              />

              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="bg-black/40 border border-white/10 rounded-2xl px-4 md:px-5 py-3 md:py-4 text-sm md:text-base outline-none focus:border-yellow-400 transition"
              >

                <option value="">Select Service</option>

                <option>Wedding Photography</option>
                <option>Pre Wedding Shoot</option>
                <option>Customized Gifts</option>
                <option>Frames & Printing</option>
                <option>LED Gifts</option>

              </select>

              <textarea
                rows="5"
                name="message"
                placeholder="Write Your Message"
                value={formData.message}
                onChange={handleChange}
                className="bg-black/40 border border-white/10 rounded-2xl px-4 md:px-5 py-3 md:py-4 text-sm md:text-base outline-none focus:border-yellow-400 transition resize-none"
              ></textarea>

              <button
                type="submit"
                className="bg-yellow-400 hover:bg-yellow-300 text-black py-3 md:py-4 rounded-2xl font-bold text-base md:text-lg transition duration-300"
              >
                Send Inquiry
              </button>

            </div>

          </motion.form>

        </div>

        {/* MAP */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-14 md:mt-20 overflow-hidden rounded-[24px] md:rounded-[30px] border border-white/10"
        >

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60716.041506060355!2d79.46608543395992!3d17.990243914380358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a334f99e627ab59%3A0x631503848fef61ec!2sMALAVIKA%20PHOTO%20STUDIO%20%26%20PRINTERS!5e0!3m2!1sen!2sin!4v1779373473071!5m2!1sen!2sin"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full md:h-[450px]"
          ></iframe>

        </motion.div>

      </div>

    </section>
  )
}

export default Contact