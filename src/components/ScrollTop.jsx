import { useEffect, useState } from "react"

import { FaArrowUp } from "react-icons/fa"

function ScrollTop() {

  const [visible, setVisible] = useState(false)

  useEffect(() => {

    const toggleVisibility = () => {

      if (window.scrollY > 500) {
        setVisible(true)
      } else {
        setVisible(false)
      }

    }

    window.addEventListener("scroll", toggleVisibility)

    return () =>
      window.removeEventListener("scroll", toggleVisibility)

  }, [])

  const scrollToTop = () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })

  }

  return (
    <>
      {visible && (

        <button
          onClick={scrollToTop}
          className="fixed bottom-24 right-5 z-[9999] w-14 h-14 rounded-full bg-yellow-400 hover:bg-yellow-300 text-black flex items-center justify-center shadow-2xl transition duration-300 hover:scale-110"
        >

          <FaArrowUp />

        </button>

      )}
    </>
  )
}

export default ScrollTop