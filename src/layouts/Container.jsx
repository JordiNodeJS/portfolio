export default function Container({ children }) {
  return (
    <div
      className="hero height-min"
      // style={{
      //   backgroundImage: 'url("azamat.jpg")'
      // }}
    >
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">{children}</div>
      </div>
    </div>
  )
}
