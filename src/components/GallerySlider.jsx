import { Swiper, SwiperSlide } from "swiper/react"

import {
  Autoplay,
  Pagination,
} from "swiper/modules"

import {
  motion,
} from "framer-motion"

import {
  FaImages,
} from "react-icons/fa"

import "swiper/css"
import "swiper/css/pagination"

function GallerySlider({ images }) {

  return (
    <div className="relative">

      {/* Background Glow */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-yellow-500/10 blur-3xl rounded-full pointer-events-none"></div>

      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 2200,
          disableOnInteraction: false,
        }}
        speed={1200}
        loop={true}
        pagination={{
          clickable: true,
        }}
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
        className="premium-gallery-slider"
      >

        {images.map((item, index) => (

          <SwiperSlide key={index}>

            <motion.div
              whileHover={{
                y: -10,
              }}
              transition={{
                duration: 0.4,
              }}
              className="relative overflow-hidden rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-xl group"
            >

              {/* IMAGE */}
              <div className="relative overflow-hidden">

                <img
                  src={item.image}
                  alt="gallery"
                  className="h-[260px] sm:h-[320px] md:h-[380px] w-full object-cover group-hover:scale-110 transition duration-[1200ms]"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

                {/* LIGHT SWEEP */}
                <div className="absolute inset-0 translate-x-[-120%] group-hover:translate-x-[120%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition duration-1000"></div>

                {/* TOP CATEGORY */}
                <div className="absolute top-5 left-5">

                  <div className="flex items-center gap-2 bg-black/50 border border-white/10 backdrop-blur-xl px-4 py-2 rounded-full">

                    <FaImages className="text-yellow-400 text-sm" />

                    <span className="text-[11px] uppercase tracking-[2px] text-yellow-400 font-semibold">

                      {item.category || "Gallery"}

                    </span>

                  </div>

                </div>

                {/* BOTTOM CONTENT */}
                <div className="absolute bottom-0 left-0 w-full p-6">

                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.5,
                    }}
                  >

                    <h3 className="text-xl md:text-2xl font-bold mb-2">

                      Premium Collection

                    </h3>

                    <p className="text-gray-300 text-sm leading-relaxed">

                      Cinematic photography & personalized creative moments.

                    </p>

                  </motion.div>

                </div>

              </div>

            </motion.div>

          </SwiperSlide>

        ))}

      </Swiper>

    </div>
  )
}

export default GallerySlider