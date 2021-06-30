import React, { Component } from 'react'
import {NavLink, Link} from "react-router-dom"
import {connect} from 'react-redux'
import {logoutUser} from '../actions/usersAction'
import * as ReactBootStrap from "react-bootstrap"




class NavBar extends Component {

  handleClick = e => {
    debugger
  }


  render() {
    return (
      <div>
        <ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <ReactBootStrap.Navbar.Brand href="#home">Stu's Photo App</ReactBootStrap.Navbar.Brand>
  <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
    <ReactBootStrap.Nav className="mr-auto">
    
   
      {this.props.loggedIn ?  
        <>
        <ReactBootStrap.Nav.Link as={Link} href="/" to="/" >Home</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link as={Link} href="/toprated" to="/toprated" >Top Rated</ReactBootStrap.Nav.Link> 
      <ReactBootStrap.Nav.Link as={Link} href="/pictures" to="/pictures" >Pictures</ReactBootStrap.Nav.Link>
      
      <ReactBootStrap.Nav.Link as={Link} href="/pictures/new" to="/pictures/new" >Create A Picture</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link as={Link} href="/users" to="/users" >Users</ReactBootStrap.Nav.Link>
    
     
      <ReactBootStrap.Nav.Link onClick={() => this.props.logoutUser()} as={Link} href="/" to="/"   >Logout</ReactBootStrap.Nav.Link>
      
      </>
      : 
      <>
      <ReactBootStrap.Nav.Link as={Link} href="/signup" to="/signup" >SignUp</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link as={Link} href="/login" to="/login" >Login</ReactBootStrap.Nav.Link>
      </>}
 
     
    </ReactBootStrap.Nav>
  </ReactBootStrap.Navbar.Collapse>
</ReactBootStrap.Navbar>

      </div>
    )
  }
}

const mapStateToProps = state => {

  return {
    loggedIn: state.auth.loggedIn
  }
}

export default connect(mapStateToProps, {logoutUser})(NavBar)
