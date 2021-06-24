import React, { Component } from 'react'
import {NavLink} from "react-router-dom"
import {connect} from 'react-redux'
import {logout} from '../actions/usersAction'

class NavBar extends Component {
  render(){

  return (
    <div class="container">
   

     
        <NavLink class="navbar-brand" exact to="/">
            Home
        </NavLink>
        <NavLink class="navbar-brand" exact to="/users">
            Users
        </NavLink>
       
        <NavLink class="navbar-brand" exact to="/pictures/new">
            Create A Picture
        </NavLink>
        
        <NavLink class="navbar-brand" exact to="/pictures">
            Pictures
        </NavLink>
       
        <NavLink class="navbar-brand" exact to="/signup">
            Signup
        </NavLink>
        
        <NavLink class="navbar-brand" exact to="/login">
            Login
        </NavLink>
       
        <NavLink class="navbar-brand" to="" onClick={ () => this.props.logout()}>
            Logout
        </NavLink>
       
    </div>
  )
  }
}

export default connect(null, {logout})(NavBar)
