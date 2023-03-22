import { NavLink } from 'react-router-dom'

export default function NavLinks() {
  return (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/contact/1">Contact</NavLink>
      </li>
    </>
  )
}
