import React, { Component } from 'react'
import {NavLink} from "react-router-dom"
import {connect} from 'react-redux'
import {logout} from '../actions/usersAction'


class NavBar extends Component {
  render(){

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid d-flex flex-row bd-highlight mb-3">
  

     <ul className="navbar-nav">
       <li className="nav-item">
        <NavLink exact to="/">
            Home
        </NavLink>
        </li>
        <li className="nav-item">
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
        <NavLink exact to="/signup">
            Signup
        </NavLink>
        <li>
        <NavLink className="nav-item" exact to="/login">
            Login
        </NavLink>
        </li>
        <li>
        <NavLink className="nav-item" to="" onClick={ () => this.props.logout()}>
            Logout
        </NavLink>
        </li>
        </ul>
    </div>
    </nav>
  )
  }
}

export default connect(null, {logout})(NavBar)
