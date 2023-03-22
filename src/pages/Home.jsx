import db from '../../db/db.json'
export default function Home() {
  const {
    presentation: { name, title, description }
  } = db

  return (
    <div
      className="hero height-min"
      // style={{
      //   backgroundImage: 'url("azamat.jpg")'
      // }}
    >
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h2 className="mb-2">{title}</h2>
          <h1 className="mb-5 text-5xl font-bold">{name}</h1>
          <p className="mb-5 text-left text-neutral-300">{description}</p>
          <button className="btn btn-secondary bg-opacity-40 hover:bg-opacity-70">
            Get Started
          </button>
        </div>
      </div>
    </div>
  )
}
