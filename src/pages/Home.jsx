export default function Home() {
  return (
    <div
      className="hero height-min"
      style={{
        backgroundImage: 'url("azamat.jpg")'
      }}
    >
      <div className="hero-overlay bg-opacity-90 background"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h2 className="">FrontEnd React Developer</h2>
          <h1 className="mb-5 text-5xl font-bold">JORGe&apos;s web</h1>
          <p className="mb-5 text-left text-neutral-300">
            + 2 years of experience in the programming world, specializing in
            React. Committed to developing accessible and high-performance user
            experiences.
          </p>
          <button className="btn btn-secondary bg-opacity-40 hover:bg-opacity-70">
            Get Started
          </button>
        </div>
      </div>
    </div>
  )
}
