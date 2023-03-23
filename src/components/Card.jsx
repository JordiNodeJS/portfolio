import { useState } from 'react'

const FlipCard = () => {
  const [isFlipped, setIsFlipped] = useState(false)

  const handleFlip = () => {
    setIsFlipped(!isFlipped)
  }

  return (
    <div
      className={`bg-transparent w-72 h-96 perspective-1000 font-sans ${
        isFlipped ? 'flipped' : ''
      }`}
      onMouseEnter={handleFlip}
      onMouseLeave={handleFlip}
    >
      <div className="relative w-full h-full text-center transition-transform transform-style-preserve-3d">
        <div className="bg-gradient-to-b from-bisque via-rgb(255, 231, 222) to-rgb(255, 211, 195) text-coral shadow-md absolute flex flex-col justify-center w-full h-full backface-visibility-hidden rounded-lg border border-coral">
          <p className="text-2xl font-bold text-center m-0">FLIP CARD</p>
          <p>Hover Me</p>
        </div>
        <div className="bg-gradient-to-b from-rgb(255, 174, 145) via-coral to-bisque text-white shadow-md absolute flex flex-col justify-center w-full h-full backface-visibility-hidden rounded-lg border border-coral transform rotate-y-180">
          <p className="text-2xl font-bold text-center m-0">BACK</p>
          <p>Leave Me</p>
        </div>
      </div>
    </div>
  )
}

export default FlipCard
