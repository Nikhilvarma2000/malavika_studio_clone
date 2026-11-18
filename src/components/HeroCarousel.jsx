import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination, EffectFade } from "swiper/modules"

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/effect-fade"

function HeroCarousel({ slides }) {

  return (
    <Swiper
      modules={[Autoplay, Pagination, EffectFade]}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      effect="fade"
      pagination={{ clickable: true }}
      loop={true}
      className="h-full"
    >

      {slides.map((slide, index) => (

        <SwiperSlide key={index}>

          <div
            className="w-full h-screen bg-cover bg-center"
            style={{
              backgroundImage: `url(${slide.image})`,
            }}
          />

        </SwiperSlide>

      ))}

    </Swiper>
  )
}

export default HeroCarousel