import { motion } from "framer-motion"

function SectionTitle({ subtitle, title, highlight, desc }) {

  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="text-center mb-20"
    >

      <p className="text-yellow-400 uppercase tracking-[4px] mb-4 text-sm">
        {subtitle}
      </p>

      <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6">

        {title}
        <span className="text-yellow-400"> {highlight}</span>

      </h2>

      <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">

        {desc}

      </p>

    </motion.div>
  )
}

export default SectionTitle