import { Outlet } from 'react-router-dom'
import { NavBar } from './components'

function App() {
  return (
    <>
      <div className="background-svg" />
      <div className='backdrop-blur-3xl'>
        <NavBar />
        <Outlet />
      </div>
    </>
  )
}

export default App
