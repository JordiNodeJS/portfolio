import db from '../../db/db.json'
import Container from '../layouts/Container'
export default function Home() {
  const {
    presentation: { name, title, description }
  } = db

  return (
    <Container>
      <h2 className="mb-2">{title}</h2>
      <h1 className="mb-5 text-5xl font-bold">{name}</h1>
      <p className="mb-5 text-left text-neutral-300">{description}</p>
      <button className="btn btn-secondary bg-opacity-40 hover:bg-opacity-70">
        Get Started
      </button>
    </Container>
  )
}
