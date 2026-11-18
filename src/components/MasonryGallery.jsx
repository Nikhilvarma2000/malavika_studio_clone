import { motion } from "framer-motion"

import { PhotoProvider, PhotoView } from "react-photo-view"

function MasonryGallery({ images }) {

  return (
    <PhotoProvider>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">

        {images.map((item, index) => (

          <motion.div
            key={index}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: index * 0.1,
            }}
            viewport={{ once: true }}
            className="break-inside-avoid overflow-hidden rounded-[30px] group cursor-pointer"
          >

            <PhotoView src={item.image}>

              <img
                src={item.image}
                alt=""
                className="w-full rounded-[30px] object-cover group-hover:scale-110 transition duration-700"
              />

            </PhotoView>

          </motion.div>

        ))}

      </div>

    </PhotoProvider>
  )
}

export default MasonryGallery