import { useState } from "react"

import { motion, AnimatePresence } from "framer-motion"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"

import {
  FaExpand,
  FaImages,
} from "react-icons/fa"

import "swiper/css"

import {
  PhotoProvider,
  PhotoView,
} from "react-photo-view"

import "react-photo-view/dist/react-photo-view.css"

function Gallery() {

  const categories = [
    "All",
    "Wedding",
    "Gifts",
    "Frames",
    "Printing",
  ]

  const [active, setActive] = useState("All")

  const images = [
    {
      category: "Wedding",
      image:
        "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2070&auto=format&fit=crop",
    },
    {
      category: "Wedding",
      image:
        "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=2070&auto=format&fit=crop",
    },
    {
      category: "Gifts",
      image:
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?q=80&w=2070&auto=format&fit=crop",
    },
    {
      category: "Frames",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2070&auto=format&fit=crop",
    },
    {
      category: "Printing",
      image:
        "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=2070&auto=format&fit=crop",
    },
    {
      category: "Gifts",
      image:
        "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=2070&auto=format&fit=crop",
    },
  ]

  const filteredImages =
    active === "All"
      ? images
      : images.filter(
          (item) => item.category === active
        )

  return (
    <section
      id="gallery"
      className="relative py-20 md:py-28 bg-black overflow-hidden"
    >

      {/* BACKGROUND EFFECTS */}
      <div className="absolute inset-0 pointer-events-none">

        {/* Glow Left */}
        <div className="absolute left-0 top-20 w-72 md:w-[500px] h-72 md:h-[500px] bg-yellow-500/10 blur-3xl rounded-full"></div>

        {/* Glow Right */}
        <div className="absolute right-0 bottom-0 w-72 md:w-[500px] h-72 md:h-[500px] bg-yellow-400/5 blur-3xl rounded-full"></div>

        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.7)_1px,transparent_1px)] bg-[size:70px_70px]"></div>

      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* HEADING */}
        <motion.div
          initial={{
            opacity: 0,
            y: 80,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
          viewport={{ once: true }}
          className="text-center mb-14 md:mb-20"
        >

          <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-5 py-2 rounded-full backdrop-blur-xl mb-6">

            <FaImages className="text-yellow-400" />

            <p className="text-yellow-400 uppercase tracking-[3px] text-xs sm:text-sm font-semibold">

              Gallery Showcase

            </p>

          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black leading-tight mb-6">

            Our Creative
            <span className="text-yellow-400">
              {" "}Collection
            </span>

          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed px-2">

            Explore our premium photography, customized gifts,
            luxury frames and unforgettable moments crafted beautifully.

          </p>

        </motion.div>

        {/* TOP PREMIUM SLIDER */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.95,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1,
          }}
          viewport={{ once: true }}
          className="mb-14 md:mb-20"
        >

          <Swiper
            modules={[Autoplay]}
            autoplay={{
              delay: 2200,
              disableOnInteraction: false,
            }}
            speed={1000}
            loop={true}
            breakpoints={{
              0: {
                slidesPerView: 1.1,
                spaceBetween: 15,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 25,
              },
            }}
          >

            {images.map((item, index) => (

              <SwiperSlide key={index}>

                <motion.div
                  whileHover={{
                    y: -10,
                  }}
                  className="relative overflow-hidden rounded-[28px] border border-white/10 group"
                >

                  {/* Image */}
                  <img
                    src={item.image}
                    alt=""
                    className="h-[260px] sm:h-[320px] md:h-[380px] w-full object-cover group-hover:scale-110 transition duration-1000"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"></div>

                  {/* Category */}
                  <div className="absolute top-5 left-5 bg-black/50 border border-white/10 backdrop-blur-xl px-4 py-2 rounded-full text-xs uppercase tracking-[2px] text-yellow-400">

                    {item.category}

                  </div>

                  {/* Bottom Content */}
                  <div className="absolute bottom-0 left-0 w-full p-6">

                    <h3 className="text-xl md:text-2xl font-bold mb-2">

                      Premium {item.category}

                    </h3>

                    <p className="text-gray-300 text-sm">

                      Cinematic & creative visual collection.

                    </p>

                  </div>

                </motion.div>

              </SwiperSlide>

            ))}

          </Swiper>

        </motion.div>

        {/* FILTER BUTTONS */}
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-5 mb-12 md:mb-16">

          {categories.map((category, index) => (

            <motion.button
              key={index}
              whileTap={{ scale: 0.95 }}
              whileHover={{ y: -3 }}
              onClick={() => setActive(category)}
              className={`relative overflow-hidden px-5 md:px-7 py-3 rounded-full border font-semibold text-sm md:text-base transition duration-300 backdrop-blur-xl ${
                active === category
                  ? "bg-yellow-400 text-black border-yellow-400 shadow-[0_0_30px_rgba(212,175,55,0.25)]"
                  : "bg-white/5 border-white/10 text-white hover:border-yellow-400 hover:text-yellow-400"
              }`}
            >

              {category}

            </motion.button>

          ))}

        </div>

        {/* MASONRY GALLERY */}
        <PhotoProvider>

          <motion.div
            layout
            className="columns-1 sm:columns-2 lg:columns-3 gap-5 md:gap-6 space-y-5 md:space-y-6"
          >

            <AnimatePresence>

              {filteredImages.map((item, index) => (

                <motion.div
                  key={`${item.image}-${index}`}
                  layout
                  initial={{
                    opacity: 0,
                    y: 60,
                    scale: 0.95,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.05,
                  }}
                  whileHover={{
                    y: -8,
                  }}
                  className="relative break-inside-avoid overflow-hidden rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl group cursor-pointer"
                >

                  <PhotoView src={item.image}>

                    <div className="relative overflow-hidden">

                      {/* IMAGE */}
                      <img
                        src={item.image}
                        alt=""
                        className="w-full object-cover rounded-[28px] group-hover:scale-110 transition duration-1000"
                      />

                      {/* DARK OVERLAY */}
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/40 transition duration-500"></div>

                      {/* LIGHT SWEEP */}
                      <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition duration-1000"></div>

                      {/* TOP CATEGORY */}
                      <div className="absolute top-4 left-4 bg-black/50 border border-white/10 backdrop-blur-xl px-4 py-2 rounded-full text-[11px] uppercase tracking-[2px] text-yellow-400">

                        {item.category}

                      </div>

                      {/* EXPAND BUTTON */}
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition duration-500">

                        <div className="w-11 h-11 rounded-full bg-black/60 border border-white/10 backdrop-blur-xl flex items-center justify-center text-white">

                          <FaExpand />

                        </div>

                      </div>

                      {/* BOTTOM INFO */}
                      <div className="absolute bottom-0 left-0 w-full p-5 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-500">

                        <h3 className="text-lg md:text-xl font-bold mb-1">

                          Premium {item.category}

                        </h3>

                        <p className="text-gray-300 text-sm">

                          Creative & luxury collection.

                        </p>

                      </div>

                    </div>

                  </PhotoView>

                </motion.div>

              ))}

            </AnimatePresence>

          </motion.div>

        </PhotoProvider>

      </div>

    </section>
  )
}

export default Gallery