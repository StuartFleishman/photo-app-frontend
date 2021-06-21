import React, {Component} from 'react'
import {createUser} from '../actions/usersAction'
import {connect} from 'react-redux'


class UserForm extends Component {

  state = {
    name: "",
    email: "",
    password_digest: "",
    password_confirmation: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.createUser(this.state)
    this.props.history.push('/')
    this.setState({
      name: "",
      email: "",
      password_digest: "",
      password_confirmation: ''
    })
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <label >UserName:</label>
        <input onChange={this.handleChange} type="text" name="name" value={this.state.name} />
        <br />
        <label>Email:</label>
        <input onChange={this.handleChange} type="email" name="email" value={this.state.email} />
        <br />
        <label>Password:</label>
        <input onChange={this.handleChange} type="password" name="password_digest" value={this.state.password_digest} />
        <br />
        <label>Confrim Password</label>
        <input onChange={this.handleChange} type="password" name="password_confirmation" value={this.state.password_confirmation} />
        <br />
        <input type="submit" value="signup" />
      </form>
    )
  }

}

export default connect(null, {createUser})(UserForm)