import { Outlet } from 'react-router-dom'
import { NavBar } from './components'

function App() {
  return (
    <div className='background'>
      <NavBar />
      <Outlet />
    </div>
  )
}

export default App
