import Container from '../layouts/Container'
import db from '../../db/db.json'
const { projects } = db

export default function Projects() {
  return (
    <Container>
      <h1 className="mb-5 text-5xl font-bold">Projects</h1>
      {projects.map((project) => (
        <ul key={project.id}>
          <li>{project.title}</li>
          <li>{project.description}</li>
          {project.tags?.map((tag) => (
            <div key={project.id + tag} className="badge badge-info gap-2 mr-2">{tag}</div>
          ))}
        </ul>
      ))}
    </Container>
  )
}
