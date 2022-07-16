import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    <div className="header">
        <div>
            <NavLink to="/">Home</NavLink>
        </div>
        <div>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/resume">Resume</NavLink>
            <NavLink to="/code">Code</NavLink>
            <NavLink to="/design">Design</NavLink>
            <NavLink to="/motion">Motion</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </div>
    </div>
  )
}

export default Header