import Container from '../layouts/Container'
import db from '../../db/db.json'
const { projects } = db

const Image = ({ project, ...rest }) =>
  project?.imgCover && (
    <img
      src={project.imgCover}
      width={370}
      height={400}
      alt="project image"
      {...rest}
    />
  )

export default function Projects() {
  return (
    <Container>
      <h1 className="mb-5 text-5xl font-bold">Projects</h1>
      <section className="text-left">
        {projects.map((project) => (
          <article
            className="flex flex-col items-center bg-purple-800 bg-opacity-50 mb-7 shadow-none transition-transform duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30 hover:scale-105"
            key={project.id}
          >
            <Image project={project} className="w-full rounded-t-lg" />
            <div className="p-4">
              <h2 className="font-bold text-slate-300 text-3xl mb-4">
                {project.title}
              </h2>
              <p className="mb-2">{project.description}</p>
              <p className="mb-2">
                <a
                  className="link link-success"
                  href={project?.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  give it a star
                </a>
              </p>
              {project.tags?.map((tag) => (
                <div
                  key={project.id + tag}
                  className="badge badge-info gap-2 mr-2"
                >
                  {tag}
                </div>
              ))}
            </div>
          </article>
        ))}
      </section>
    </Container>
  )
}
