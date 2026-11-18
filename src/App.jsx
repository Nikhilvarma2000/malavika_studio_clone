import { useEffect, useState } from "react"

import { Toaster } from "react-hot-toast"

import Loader from "./components/Loader"
import Navbar from "./components/Navbar"
import WhatsAppFloat from "./components/WhatsAppFloat"
import Footer from "./components/Footer"
import ScrollProgress from "./components/ScrollProgress"
import CursorGlow from "./components/CursorGlow"
import FloatingParticles from "./components/FloatingParticles"
import ScrollTop from "./components/ScrollTop"

import Hero from "./sections/Hero"
import About from "./sections/About"
import Services from "./sections/Services"
import Gallery from "./sections/Gallery"
import WhyChooseUs from "./sections/WhyChooseUs"
import Testimonials from "./sections/Testimonials"
import Contact from "./sections/Contact"

function App() {

  const [loading, setLoading] = useState(true)

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000)

    return () => clearTimeout(timer)

  }, [])

  return (
    <>
      {/* Toast Notifications */}
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          duration: 3000,
          style: {
            background: "rgba(15,15,15,0.95)",
            color: "#fff",
            border: "1px solid rgba(255,255,255,0.08)",
            backdropFilter: "blur(10px)",
            padding: "16px",
            borderRadius: "16px",
          },
        }}
      />

      {/* Scroll Progress */}
      <ScrollProgress />

      {/* Cursor Glow */}
      <CursorGlow />

      {/* Floating Particles */}
      <FloatingParticles />

      {loading ? (
        <Loader />
      ) : (
        <div className="relative bg-black text-white overflow-hidden">

          {/* Premium Background Effects */}
          <div className="absolute inset-0 pointer-events-none">

            {/* Top Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-yellow-500/10 blur-3xl rounded-full"></div>

            {/* Left Glow */}
            <div className="absolute top-[35%] -left-32 w-[400px] h-[400px] bg-yellow-400/5 blur-3xl rounded-full"></div>

            {/* Right Glow */}
            <div className="absolute bottom-0 -right-32 w-[400px] h-[400px] bg-yellow-400/5 blur-3xl rounded-full"></div>

            {/* Grid Overlay */}
            <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.7)_1px,transparent_1px)] bg-[size:80px_80px]"></div>

          </div>

          {/* Navbar */}
          <Navbar />

          {/* Main Content */}
          <main className="relative z-10">

            {/* Hero */}
            <Hero />

            {/* About */}
            <About />

            {/* Services */}
            <Services />

            {/* Gallery */}
            <Gallery />

            {/* Why Choose Us */}
            <WhyChooseUs />

            {/* Testimonials */}
            <Testimonials />

            {/* Contact */}
            <Contact />

          </main>

          {/* Footer */}
          <Footer />

          {/* Scroll To Top */}
          <ScrollTop />

          {/* Floating WhatsApp */}
          <WhatsAppFloat />

        </div>
      )}
    </>
  )
}

export default App