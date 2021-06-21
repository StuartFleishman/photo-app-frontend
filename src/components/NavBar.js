import React from 'react'
import {NavLink} from "react-router-dom"

function NavBar() {
  return (
    <div>
   

     <ul>
        <li>
        <NavLink exact to="/">
            Home
        </NavLink>
        </li>
        <li>
        <NavLink exact to="/users">
            Users
        </NavLink>
        </li>
        <li>
        <NavLink exact to="/pictures">
            Pictures
        </NavLink>
        </li>
        <li>
        <NavLink exact to="/signup">
            Signup
        </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default NavBar
