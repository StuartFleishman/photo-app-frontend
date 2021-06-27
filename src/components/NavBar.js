import React, { Component } from 'react'
import {NavLink} from "react-router-dom"
import {connect} from 'react-redux'
import {logout} from '../actions/usersAction'
import * as ReactBootStrap from "react-bootstrap"

class NavBar extends Component {
  render() {
    return (
      <div>
        <ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <ReactBootStrap.Navbar.Brand href="#home">Stu's Photo App</ReactBootStrap.Navbar.Brand>
  <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
    <ReactBootStrap.Nav className="mr-auto">
    <NavLink exact to="/signup">
            Signup
        </NavLink>
        <NavLink className="nav-item" exact to="/login">
            Login
        </NavLink>
        <NavLink className="nav-item" to="" onClick={ () => this.props.logout()}>
            Logout
        </NavLink>
        <NavLink exact to="/pictures/new">
            Create A Picture
        </NavLink>
        <NavLink exact to="/pictures">
            Pictures
        </NavLink>
        <NavLink exact to="/users">
            Users
        </NavLink>
        <NavLink exact to="/">
            Home
        </NavLink>
      <ReactBootStrap.Nav.Link href="pictures">Pictures</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link href="pictures/new">Create A Picture</ReactBootStrap.Nav.Link>
      <ReactBootStrap.NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <ReactBootStrap.NavDropdown.Item href="#action/3.1">Action</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.2">Another action</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.3">Something</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Divider />
        <ReactBootStrap.NavDropdown.Item href="#action/3.4">Separated link</ReactBootStrap.NavDropdown.Item>
      </ReactBootStrap.NavDropdown>
    </ReactBootStrap.Nav>
    <ReactBootStrap.Nav>
      <ReactBootStrap.Nav.Link href="#deets">More deets</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link eventKey={2} href="#memes">
        Dank memes
      </ReactBootStrap.Nav.Link>
    </ReactBootStrap.Nav>
  </ReactBootStrap.Navbar.Collapse>
</ReactBootStrap.Navbar>
      </div>
    )
  }
}

export default connect(null, {logout})(NavBar)
