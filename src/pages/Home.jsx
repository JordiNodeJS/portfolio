import { Link } from 'react-router-dom'
import db from '../../public/db/db.json'
import Container from '../layouts/Container'
export default function Home() {
  const {
    presentation: { name, title, description }
  } = db

  return (
    <Container>
      <h2 className="text-accent font-bold">{title}</h2>
      <h1 className="my-14 text-5xl text-white font-bold">{name}</h1>
      <p className="mb-5 text-left text-slate-300-300">{description}</p>
      <button className="btn btn-secondary bg-opacity-40 hover:bg-opacity-70">
        <Link to="/projects">Get Started</Link>
      </button>
    </Container>
  )
}
