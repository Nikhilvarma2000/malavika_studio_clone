import { useEffect, useState } from "react"

function CursorGlow() {

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  })

  useEffect(() => {

    const moveCursor = (e) => {

      setPosition({
        x: e.clientX,
        y: e.clientY,
      })

    }

    window.addEventListener("mousemove", moveCursor)

    return () => window.removeEventListener("mousemove", moveCursor)

  }, [])

  return (
    <div
      className="hidden md:block fixed top-0 left-0 pointer-events-none z-[9999]"
      style={{
        transform: `translate(${position.x - 100}px, ${position.y - 100}px)`,
      }}
    >

      <div className="w-[200px] h-[200px] bg-yellow-400/10 blur-3xl rounded-full"></div>

    </div>
  )
}

export default CursorGlow