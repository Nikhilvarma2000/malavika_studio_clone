import { motion } from "framer-motion"

function Loader() {

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center overflow-hidden z-[99999]">

      {/* Glow */}
      <div className="absolute w-[500px] h-[500px] bg-yellow-500/10 blur-3xl rounded-full"></div>

      {/* Outer Ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 5,
          ease: "linear",
        }}
        className="absolute w-40 h-40 border border-yellow-400/20 rounded-full"
      />

      {/* Middle Ring */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          repeat: Infinity,
          duration: 3,
          ease: "linear",
        }}
        className="absolute w-28 h-28 border-t-4 border-yellow-400 rounded-full"
      />

      {/* Inner Ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: "linear",
        }}
        className="absolute w-16 h-16 border-l-4 border-white rounded-full"
      />

      {/* Brand */}
      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
        }}
        className="absolute mt-52 text-center"
      >

        <h1 className="text-4xl md:text-5xl font-bold tracking-[8px]">

          MALAVIKA

        </h1>

        <p className="text-yellow-400 tracking-[5px] mt-3 text-sm">

          STUDIO & GIFTS

        </p>

      </motion.div>

    </div>
  )
}

export default Loader