import { useState } from 'react'
import Container from '../layouts/Container'
import db from '../../db/db.json'
const { education } = db

export default function Studies() {
  const [steps, setSteps] = useState(['', '', '', ''])

  const handleStep = (index) => () => {
    const newSteps = [...steps]
    newSteps[index] = 'step-secondary'
    setSteps(newSteps)
  }

  return (
    <Container>
      <h1 className="mt-5 text-4xl font-bold">
        Education
      </h1>
      <ul className="relative -top-[80px] steps steps-vertical">
        {education?.map((study, index) => (
          <li
            key={study.id}
            data-content="📚"
            onMouseOver={handleStep(index)}
            className={`step ${steps[index]}`}
          >
            <div className="relative top-[130px] w-96 h-[280px] prettyscroll  mb-8 pr-4 overflow-y-auto text-left">
              <h3 className="text-lg font-semibold">{study.title}</h3>
              <p className="text-secondary text-right text-sm mb-2">
                {study.center}
              </p>
              <p className="text-sm">{study.description}</p>
              <p>{study.id}</p>
              <div className="divider" />
            </div>
          </li>
        ))}
      </ul>
    </Container>
  )
}
