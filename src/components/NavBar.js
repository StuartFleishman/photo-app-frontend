import React, { Component } from 'react'
import {NavLink} from "react-router-dom"
import {connect} from 'react-redux'
import {logout} from '../actions/usersAction'

class NavBar extends Component {
  render(){

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
        <NavLink exact to="/pictures/new">
            Create A Picture
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
        <li>
        <NavLink exact to="/login">
            Login
        </NavLink>
        </li>
        <li>
        <NavLink to="" onClick={ () => this.props.logout()}>
            Logout
        </NavLink>
        </li>
      </ul>
    </div>
  )
  }
}

export default connect(null, {logout})(NavBar)
