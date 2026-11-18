import { motion } from "framer-motion"

import {
  FaCameraRetro,
  FaGift,
  FaUsers,
  FaAward,
} from "react-icons/fa"

function About() {

  const features = [
    {
      icon: <FaCameraRetro />,
      title: "Professional Photography",
      desc: "Cinematic wedding shoots and unforgettable photography experiences.",
    },
    {
      icon: <FaGift />,
      title: "Customized Gifts",
      desc: "Luxury personalized gifts crafted creatively with premium quality.",
    },
    {
      icon: <FaUsers />,
      title: "Happy Customers",
      desc: "Hundreds of customers trusted our services and memorable creations.",
    },
    {
      icon: <FaAward />,
      title: "Premium Quality",
      desc: "Modern printing solutions and professional creative services.",
    },
  ]

  return (
    <section
      id="about"
      className="relative py-20 md:py-28 bg-black overflow-hidden"
    >

      {/* BACKGROUND EFFECTS */}
      <div className="absolute inset-0 pointer-events-none">

        {/* Glow Left */}
        <div className="absolute top-20 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-yellow-500/10 blur-3xl rounded-full"></div>

        {/* Glow Right */}
        <div className="absolute bottom-0 right-0 w-[300px] md:w-[450px] h-[300px] md:h-[450px] bg-yellow-400/5 blur-3xl rounded-full"></div>

        {/* Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.7)_1px,transparent_1px)] bg-[size:70px_70px]"></div>

      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* LEFT SIDE */}
          <motion.div
            initial={{
              opacity: 0,
              x: -80,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1,
            }}
            viewport={{ once: true }}
            className="relative"
          >

            {/* Main Image */}
            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl group">

              <img
                src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=2070&auto=format&fit=crop"
                alt="About"
                className="w-full h-[350px] sm:h-[450px] md:h-[600px] object-cover group-hover:scale-110 transition duration-[1200ms]"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>

              {/* Light Sweep */}
              <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition duration-1000"></div>

            </div>

            {/* Floating Stats Card */}
            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 4,
              }}
              className="absolute -bottom-6 md:-bottom-10 left-1/2 md:left-auto md:right-[-20px] -translate-x-1/2 md:translate-x-0 w-[90%] md:w-[280px] bg-black/60 border border-white/10 backdrop-blur-2xl p-6 rounded-[28px] shadow-[0_0_40px_rgba(212,175,55,0.12)]"
            >

              <div className="flex items-center justify-between mb-5">

                <div>

                  <h2 className="text-4xl md:text-5xl font-black text-yellow-400">

                    500+

                  </h2>

                  <p className="text-gray-300 text-sm mt-1">

                    Happy Clients

                  </p>

                </div>

                <div className="w-16 h-16 rounded-full bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center text-yellow-400 text-2xl">

                  <FaUsers />

                </div>

              </div>

              <div className="w-full h-[6px] bg-white/10 rounded-full overflow-hidden">

                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "92%" }}
                  transition={{
                    duration: 2,
                  }}
                  className="h-full bg-yellow-400 rounded-full"
                />

              </div>

              <p className="text-gray-400 text-sm mt-3 leading-relaxed">

                Trusted photography & gift studio delivering premium experiences.

              </p>

            </motion.div>

          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{
              opacity: 0,
              x: 80,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1,
            }}
            viewport={{ once: true }}
          >

            {/* Badge */}
            <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-5 py-2 rounded-full backdrop-blur-xl mb-6">

              <span className="w-2 h-2 rounded-full bg-yellow-400"></span>

              <p className="text-yellow-400 uppercase tracking-[3px] text-xs sm:text-sm font-semibold">

                About Us

              </p>

            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black leading-tight mb-7">

              Creating Memories &
              <span className="text-yellow-400">
                {" "}Luxury Gifts
              </span>

            </h2>

            {/* Description */}
            <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed mb-10">

              Malavika Studio & Gift Shop specializes in premium photography,
              customized gifts, luxury printing solutions, LED frames,
              wedding shoots and unforgettable cinematic experiences
              crafted beautifully with creativity and passion.

            </p>

            {/* FEATURES */}
            <div className="grid sm:grid-cols-2 gap-5 md:gap-6">

              {features.map((item, index) => (

                <motion.div
                  key={index}
                  whileHover={{
                    y: -8,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="group relative overflow-hidden bg-white/5 border border-white/10 backdrop-blur-2xl p-5 md:p-6 rounded-[28px] hover:border-yellow-400/40 transition duration-500"
                >

                  {/* Glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-yellow-400/10 via-transparent to-transparent transition duration-500"></div>

                  {/* Icon */}
                  <div className="relative z-10 w-16 h-16 rounded-2xl bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center text-yellow-400 text-3xl mb-5">

                    {item.icon}

                  </div>

                  {/* Title */}
                  <h3 className="relative z-10 text-lg md:text-xl font-bold mb-3">

                    {item.title}

                  </h3>

                  {/* Desc */}
                  <p className="relative z-10 text-gray-400 text-sm md:text-base leading-relaxed">

                    {item.desc}

                  </p>

                </motion.div>

              ))}

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  )
}

export default About