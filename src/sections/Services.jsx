import { motion } from "framer-motion"

import {
  FaCamera,
  FaRing,
  FaGift,
  FaImages,
  FaTshirt,
  FaVideo,
} from "react-icons/fa"

function Services() {

  const services = [
    {
      icon: <FaCamera />,
      title: "Wedding Photography",
      desc: "Cinematic wedding shoots with premium photography experience.",
    },
    {
      icon: <FaRing />,
      title: "Pre Wedding Shoots",
      desc: "Creative outdoor couple shoots and romantic memories.",
    },
    {
      icon: <FaVideo />,
      title: "Drone & LED Coverage",
      desc: "Professional drone camera coverage and LED wall setups.",
    },
    {
      icon: <FaGift />,
      title: "Customized Gifts",
      desc: "Personalized mugs, pillows, frames and LED gifts.",
    },
    {
      icon: <FaImages />,
      title: "Photo Frames & Prints",
      desc: "Premium quality photo frames and customized printing.",
    },
    {
      icon: <FaTshirt />,
      title: "T-Shirt Printing",
      desc: "Creative customized t-shirt printing with unique designs.",
    },
  ]

  return (
    <section
      id="services"
      className="relative py-24 bg-[#050505] overflow-hidden"
    >

      {/* Background Glow */}
      <div className="absolute top-20 right-10 w-80 h-80 bg-yellow-500/10 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-5 lg:px-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >

          <p className="text-yellow-400 uppercase tracking-[4px] mb-4 text-sm">
            Our Services
          </p>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6">

            Premium Photography &
            <span className="text-yellow-400"> Customized Gifts</span>

          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">

            We provide creative photography services and unique personalized gifts
            designed to create unforgettable memories.

          </p>

        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
              }}
              className="group relative bg-white/5 border border-white/10 backdrop-blur-xl p-8 rounded-[30px] overflow-hidden hover:border-yellow-400/40 transition duration-500"
            >

              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/0 via-yellow-400/0 to-yellow-400/10 opacity-0 group-hover:opacity-100 transition duration-500"></div>

              {/* Icon */}
              <div className="relative z-10 text-yellow-400 text-5xl mb-6">

                {service.icon}

              </div>

              {/* Title */}
              <h3 className="relative z-10 text-2xl font-bold mb-4">

                {service.title}

              </h3>

              {/* Description */}
              <p className="relative z-10 text-gray-400 leading-relaxed mb-8">

                {service.desc}

              </p>

              {/* Button */}
              <a
                href="https://wa.me/919700555120"
                target="_blank"
                className="relative z-10 inline-block bg-yellow-400 hover:bg-yellow-300 text-black px-6 py-3 rounded-full font-semibold transition duration-300"
              >
                Consult Now
              </a>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default Services