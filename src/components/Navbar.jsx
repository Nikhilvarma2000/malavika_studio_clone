import { useEffect, useState } from "react"

import {
  HiMenuAlt3,
  HiX,
} from "react-icons/hi"

import {
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa"

import {
  motion,
  AnimatePresence,
} from "framer-motion"

function Navbar() {

  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {

    const handleScroll = () => {

      setScrolled(window.scrollY > 30)

      const sections = [
        "home",
        "about",
        "services",
        "gallery",
        "contact",
      ]

      sections.forEach((section) => {

        const element = document.getElementById(section)

        if (element) {

          const top = element.offsetTop - 120
          const height = element.offsetHeight

          if (
            window.scrollY >= top &&
            window.scrollY < top + height
          ) {
            setActiveSection(section)
          }

        }

      })

    }

    window.addEventListener("scroll", handleScroll)

    return () =>
      window.removeEventListener("scroll", handleScroll)

  }, [])

  useEffect(() => {

    if (menuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

  }, [menuOpen])

  const navLinks = [
    "Home",
    "About",
    "Services",
    "Gallery",
    "Contact",
  ]

  return (
    <>
      {/* NAVBAR */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        className={`fixed top-0 left-0 w-full z-[9999] transition-all duration-500 ${
          scrolled
            ? "bg-black/50 backdrop-blur-2xl border-b border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.4)]"
            : "bg-transparent"
        }`}
      >

        {/* Glow Line */}
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-yellow-400/40 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

          <div className="flex items-center justify-between h-[75px] md:h-[90px]">

            {/* LOGO */}
            <motion.a
              href="#home"
              whileHover={{
                scale: 1.03,
              }}
              className="relative z-10"
            >

              <h1 className="text-2xl sm:text-3xl font-black tracking-[4px]">

                <span className="text-white">
                  MALAVIKA
                </span>

              </h1>

              <p className="text-[10px] sm:text-xs tracking-[4px] text-yellow-400 mt-1">

                STUDIO & GIFTS

              </p>

            </motion.a>

            {/* DESKTOP MENU */}
            <div className="hidden lg:flex items-center gap-10">

              {navLinks.map((link, index) => {

                const section = link.toLowerCase()

                return (
                  <a
                    key={index}
                    href={`#${section}`}
                    className={`relative text-sm font-semibold tracking-wide transition duration-300 ${
                      activeSection === section
                        ? "text-yellow-400"
                        : "text-white hover:text-yellow-400"
                    }`}
                  >

                    {link}

                    {activeSection === section && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute -bottom-2 left-0 w-full h-[2px] bg-yellow-400 rounded-full"
                      />
                    )}

                  </a>
                )

              })}

            </div>

            {/* RIGHT CTA */}
            <div className="hidden lg:flex items-center gap-4">

              {/* WhatsApp */}
              <a
                href="https://wa.me/919700555120"
                target="_blank"
                className="w-12 h-12 rounded-full border border-green-500/40 bg-green-500/10 hover:bg-green-500 hover:scale-110 flex items-center justify-center text-green-400 hover:text-white transition duration-300"
              >

                <FaWhatsapp className="text-xl" />

              </a>

              {/* Call Button */}
              <a
                href="tel:+919700555120"
                className="group relative overflow-hidden bg-yellow-400 hover:bg-yellow-300 text-black px-7 py-3 rounded-full font-bold transition duration-300 shadow-[0_0_30px_rgba(212,175,55,0.25)]"
              >

                <span className="relative z-10 flex items-center gap-3">

                  <FaPhoneAlt />

                  Call Now

                </span>

              </a>

            </div>

            {/* MOBILE BUTTON */}
            <button
              onClick={() => setMenuOpen(true)}
              className="lg:hidden w-12 h-12 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl flex items-center justify-center text-white text-3xl"
            >

              <HiMenuAlt3 />

            </button>

          </div>

        </div>

      </motion.nav>

      {/* MOBILE MENU */}
      <AnimatePresence>

        {menuOpen && (

          <>
            {/* BACKDROP */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[9998]"
            />

            {/* MENU PANEL */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                duration: 0.4,
                ease: "easeInOut",
              }}
              className="fixed top-0 right-0 w-[85%] sm:w-[70%] h-screen bg-[#050505]/95 backdrop-blur-2xl border-l border-white/10 z-[9999] overflow-y-auto"
            >

              {/* TOP */}
              <div className="flex items-center justify-between p-6 border-b border-white/10">

                <div>

                  <h2 className="text-2xl font-black tracking-[3px]">
                    MALAVIKA
                  </h2>

                  <p className="text-xs tracking-[4px] text-yellow-400 mt-1">
                    STUDIO & GIFTS
                  </p>

                </div>

                <button
                  onClick={() => setMenuOpen(false)}
                  className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-3xl"
                >

                  <HiX />

                </button>

              </div>

              {/* LINKS */}
              <div className="flex flex-col px-6 py-10">

                {navLinks.map((link, index) => {

                  const section = link.toLowerCase()

                  return (
                    <motion.a
                      key={index}
                      href={`#${section}`}
                      initial={{
                        opacity: 0,
                        x: 40,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay: index * 0.08,
                      }}
                      onClick={() => setMenuOpen(false)}
                      className={`flex items-center justify-between py-5 border-b border-white/10 text-lg font-semibold transition duration-300 ${
                        activeSection === section
                          ? "text-yellow-400"
                          : "text-white hover:text-yellow-400"
                      }`}
                    >

                      {link}

                      <span className="text-yellow-400">
                        0{index + 1}
                      </span>

                    </motion.a>
                  )

                })}

              </div>

              {/* MOBILE CTA */}
              <div className="px-6 pb-10 space-y-5">

                {/* Call */}
                <a
                  href="tel:+919700555120"
                  className="flex items-center justify-center gap-3 bg-yellow-400 hover:bg-yellow-300 text-black py-4 rounded-2xl font-bold text-lg transition duration-300 shadow-[0_0_30px_rgba(212,175,55,0.2)]"
                >

                  <FaPhoneAlt />

                  Call Now

                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/919700555120"
                  target="_blank"
                  className="flex items-center justify-center gap-3 border border-green-500/30 bg-green-500/10 hover:bg-green-500 text-green-400 hover:text-white py-4 rounded-2xl font-bold text-lg transition duration-300"
                >

                  <FaWhatsapp />

                  WhatsApp Chat

                </a>

              </div>

            </motion.div>
          </>
        )}

      </AnimatePresence>
    </>
  )
}

export default Navbar