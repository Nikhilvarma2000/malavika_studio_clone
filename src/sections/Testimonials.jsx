import { motion } from "framer-motion"

function Testimonials() {

  const reviews = [
    {
      name: "Rahul",
      review:
        "Amazing photography and very professional service. Highly recommended.",
    },
    {
      name: "Sneha",
      review:
        "Customized gifts quality was superb and delivery was fast.",
    },
    {
      name: "Karthik",
      review:
        "Wedding shoot output exceeded our expectations.",
    },
  ]

  return (
    <section className="py-24 bg-black">

      <div className="max-w-7xl mx-auto px-5 lg:px-10">

        <div className="text-center mb-20">

          <p className="text-yellow-400 uppercase tracking-[4px] mb-4 text-sm">
            Testimonials
          </p>

          <h2 className="text-4xl md:text-6xl font-bold">

            What Our
            <span className="text-yellow-400"> Clients Say</span>

          </h2>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {reviews.map((review, index) => (

            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="bg-white/5 border border-white/10 backdrop-blur-xl p-8 rounded-[30px]"
            >

              <div className="text-yellow-400 text-5xl mb-5">
                "
              </div>

              <p className="text-gray-300 leading-relaxed mb-8">
                {review.review}
              </p>

              <h3 className="text-xl font-bold">
                {review.name}
              </h3>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default Testimonials