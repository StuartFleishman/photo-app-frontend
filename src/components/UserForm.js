import React, {Component} from 'react'
import {createUser} from '../actions/usersAction'
import {connect} from 'react-redux'


class UserForm extends Component {

  state = {
    name: "",
    email: "",
    password: ""
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.createUser(this.state)
    this.setState({
      name: "",
      email: "",
      password: ""
    })
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <label >UserName:</label>
        <input onChange={this.handleChange} type="text" name="name" value={this.state.name} />
        <label>Email:</label>
        <input onChange={this.handleChange} type="email" name="email" value={this.state.email} />
        <label>Password:</label>
        <input onChange={this.handleChange} type="password" name="password" value={this.state.password} />
        <input type="submit" />
      </form>
    )
  }

}

export default connect(null, {createUser})(UserForm)