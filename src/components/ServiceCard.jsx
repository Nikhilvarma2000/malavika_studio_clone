import { motion } from "framer-motion"

function ServiceCard({ icon, title, desc }) {

  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="group relative bg-white/5 border border-white/10 backdrop-blur-xl p-8 rounded-[30px] overflow-hidden hover:border-yellow-400/40 transition duration-500"
    >

      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/0 via-yellow-400/0 to-yellow-400/10 opacity-0 group-hover:opacity-100 transition duration-500"></div>

      <div className="relative z-10 text-yellow-400 text-5xl mb-6">
        {icon}
      </div>

      <h3 className="relative z-10 text-2xl font-bold mb-4">
        {title}
      </h3>

      <p className="relative z-10 text-gray-400 leading-relaxed mb-8">
        {desc}
      </p>

      <a
        href="#contact"
        className="relative z-10 inline-block bg-yellow-400 hover:bg-yellow-300 text-black px-6 py-3 rounded-full font-semibold transition duration-300"
      >
        Consult Now
      </a>

    </motion.div>
  )
}

export default ServiceCard