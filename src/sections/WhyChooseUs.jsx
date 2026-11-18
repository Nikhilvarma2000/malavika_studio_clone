import { motion } from "framer-motion"

import {
  FaAward,
  FaCamera,
  FaGift,
  FaUsers,
} from "react-icons/fa"

function WhyChooseUs() {

  const items = [
    {
      icon: <FaAward />,
      title: "Premium Quality",
      desc: "High quality photography and customized products.",
    },
    {
      icon: <FaCamera />,
      title: "Creative Shoots",
      desc: "Cinematic photography with creative concepts.",
    },
    {
      icon: <FaGift />,
      title: "Unique Gifts",
      desc: "Personalized gifts crafted beautifully.",
    },
    {
      icon: <FaUsers />,
      title: "Trusted Service",
      desc: "Hundreds of happy customers trust our work.",
    },
  ]

  return (
    <section className="py-24 bg-[#050505]">

      <div className="max-w-7xl mx-auto px-5 lg:px-10">

        <div className="text-center mb-20">

          <p className="text-yellow-400 uppercase tracking-[4px] mb-4 text-sm">
            Why Choose Us
          </p>

          <h2 className="text-4xl md:text-6xl font-bold">

            Experience The
            <span className="text-yellow-400"> Difference</span>

          </h2>

        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {items.map((item, index) => (

            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="bg-white/5 border border-white/10 p-8 rounded-[30px] text-center"
            >

              <div className="text-yellow-400 text-5xl mb-6 flex justify-center">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {item.title}
              </h3>

              <p className="text-gray-400 leading-relaxed">
                {item.desc}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default WhyChooseUs