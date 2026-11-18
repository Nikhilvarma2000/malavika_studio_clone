import { motion } from "framer-motion"

function PageWrapper({ children }) {

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 1,
      }}
    >

      {children}

    </motion.div>
  )
}

export default PageWrapper