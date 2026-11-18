import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination, EffectFade } from "swiper/modules"

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/effect-fade"

import { motion } from "framer-motion"
import { FaWhatsapp } from "react-icons/fa"

function Hero() {

  const slides = [
    {
      image:
        "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop",
      title: "Capturing Beautiful Memories",
      subtitle: "Professional Photography & Customized Gifts",
    },
    {
      image:
        "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=2070&auto=format&fit=crop",
      title: "Creative Wedding Shoots",
      subtitle: "Luxury Photography Experience",
    },
    {
      image:
        "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2070&auto=format&fit=crop",
      title: "Personalized Gift Collections",
      subtitle: "Frames • Mugs • Pillows • LED Gifts",
    },
  ]

  return (
    <section
      id="home"
      className="relative h-screen overflow-hidden"
    >

      {/* Background Slider */}
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        effect="fade"
        loop={true}
        pagination={{ clickable: true }}
        className="h-full"
      >

        {slides.map((slide, index) => (

          <SwiperSlide key={index}>

            <div
              className="w-full h-screen bg-cover bg-center relative"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/70"></div>

              {/* Glow Effect */}
              <div className="absolute w-[400px] h-[400px] bg-yellow-500/20 blur-3xl rounded-full top-20 left-10"></div>

              {/* Content */}
              <div className="relative z-10 flex items-center h-full">

                <div className="max-w-7xl mx-auto px-5 lg:px-10 w-full">

                  <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="max-w-3xl"
                  >

                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="text-yellow-400 uppercase tracking-[4px] mb-4 text-sm md:text-base"
                    >
                      Malavika Studio & Gifts
                    </motion.p>

                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6">

                      {slide.title}

                    </h1>

                    <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">

                      {slide.subtitle}

                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-5">

                      <a
                        href="#services"
                        className="bg-yellow-400 hover:bg-yellow-300 text-black px-8 py-4 rounded-full font-bold text-center transition duration-300"
                      >
                        Explore Services
                      </a>

                      <a
                        href="https://wa.me/919700555120"
                        target="_blank"
                        className="border border-white/30 hover:border-yellow-400 hover:text-yellow-400 px-8 py-4 rounded-full font-bold flex items-center justify-center gap-3 transition duration-300"
                      >
                        <FaWhatsapp className="text-2xl" />
                        WhatsApp Us
                      </a>

                    </div>

                  </motion.div>

                </div>

              </div>

            </div>

          </SwiperSlide>

        ))}

      </Swiper>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-20"></div>

    </section>
  )
}

export default Hero