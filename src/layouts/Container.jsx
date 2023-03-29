export default function Container({ children }) {
  return (
    <div
      className="height-min"
      // style={{
      //   backgroundImage: 'url("azamat.jpg")'
      // }}
      // max-w-sm md:max-w-md lg:max-w-2xl
    >
      <div className="flex justify-center text-center">
        <div className="w-full">{children}</div>
      </div>
    </div>
  )
}
