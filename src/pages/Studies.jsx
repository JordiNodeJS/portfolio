import { useState } from 'react'
import Container from '../layouts/Container'

export default function Studies() {
  const [steps, setSteps] = useState(['', '', '', ''])

  const handleStep = (index) => () => {
    const newSteps = [...steps]
    newSteps[index] = 'step-secondary'
    setSteps(newSteps)
  }

  return (
    <Container>
      <ul className="steps steps-vertical">
        <li
          data-content="📚"
          onMouseOver={handleStep(0)}
          className={`step ${steps[0]} relative`}
        >
          <div className="">
            <div>Register</div>
            <div>Register</div>
            <div>Register</div>
            <div>Register</div>
            <div>Register</div>
            <div>Register</div>
            <div>Register</div>
            <div>Register</div>
            <div>Register</div>
            <div>Register</div>
            <div>Register</div>
          </div>
        </li>
        <li
          data-content="📚"
          onMouseOver={handleStep(1)}
          className={`step ${steps[1]}`}
        >
          Choose plan
        </li>
        <li
          data-content="📚"
          onMouseOver={handleStep(2)}
          className={`step ${steps[2]}`}
        >
          Purchase
        </li>
        <li
          data-content="📚"
          onMouseOver={handleStep(3)}
          className={`step ${steps[3]}`}
        >
          Receive Product
        </li>
      </ul>
    </Container>
  )
}
