import { motion } from "framer-motion"

function FloatingParticles() {

  const particles = [
    {
      size: "w-3 h-3",
      color: "bg-yellow-400/80",
      top: "10%",
      left: "15%",
      duration: 6,
      delay: 0,
    },
    {
      size: "w-2 h-2",
      color: "bg-white/70",
      top: "25%",
      left: "75%",
      duration: 8,
      delay: 1,
    },
    {
      size: "w-4 h-4",
      color: "bg-yellow-400/60",
      top: "65%",
      left: "12%",
      duration: 7,
      delay: 2,
    },
    {
      size: "w-2 h-2",
      color: "bg-white/60",
      top: "82%",
      left: "58%",
      duration: 9,
      delay: 1.5,
    },
    {
      size: "w-3 h-3",
      color: "bg-yellow-400/70",
      top: "18%",
      left: "48%",
      duration: 5,
      delay: 0.5,
    },
    {
      size: "w-5 h-5",
      color: "bg-yellow-500/40",
      top: "50%",
      left: "88%",
      duration: 10,
      delay: 2,
    },
    {
      size: "w-2 h-2",
      color: "bg-white/50",
      top: "78%",
      left: "35%",
      duration: 7,
      delay: 0.8,
    },
    {
      size: "w-3 h-3",
      color: "bg-yellow-300/60",
      top: "35%",
      left: "5%",
      duration: 8,
      delay: 1.2,
    },
  ]

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">

      {/* Gradient Glow Top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-yellow-500/10 blur-3xl rounded-full"></div>

      {/* Gradient Glow Bottom */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-yellow-400/5 blur-3xl rounded-full"></div>

      {/* Animated Particles */}
      {particles.map((particle, index) => (

        <motion.div
          key={index}
          initial={{
            y: 0,
            opacity: 0.3,
            scale: 0.8,
          }}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            opacity: [0.2, 0.8, 0.2],
            scale: [0.9, 1.2, 0.9],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: particle.delay,
          }}
          className={`absolute rounded-full blur-[1px] ${particle.size} ${particle.color}`}
          style={{
            top: particle.top,
            left: particle.left,
          }}
        >

          {/* Glow Ring */}
          <div className="absolute inset-0 rounded-full animate-ping opacity-40 bg-inherit"></div>

        </motion.div>

      ))}

      {/* Floating Lines */}
      <motion.div
        animate={{
          opacity: [0.05, 0.12, 0.05],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="absolute top-[20%] left-[30%] w-[200px] h-[1px] bg-gradient-to-r from-transparent via-yellow-400 to-transparent rotate-12"
      />

      <motion.div
        animate={{
          opacity: [0.03, 0.1, 0.03],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute bottom-[20%] right-[20%] w-[250px] h-[1px] bg-gradient-to-r from-transparent via-white to-transparent -rotate-12"
      />

      {/* Noise Texture */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle,white_1px,transparent_1px)] bg-[size:24px_24px]"></div>

    </div>
  )
}

export default FloatingParticles