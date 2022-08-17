import { NavLink } from "react-router-dom"

export default function Header () {
    return(
    <header>
      <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/products'>Products</NavLink>
        {/* <NavLink to='/NotFound'>NotFound</NavLink> */}
      </nav>
    </header>
  )};