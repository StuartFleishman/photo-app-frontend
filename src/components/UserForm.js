import React, {Component} from 'react'
import {createUser} from '../actions/usersAction'
import {connect} from 'react-redux'


class UserForm extends Component {

  state = {
    name: "",
    email: "",
    password: "",
    password_confirmation: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.createUser(this.state, this.props.history)
    this.setState({
      name: "",
      email: "",
      password: "",
      password_confirmation: ''
    })
  }


  render() {
    const renderError = this.props.auth.message.map(m=> <h1>{m}</h1>)
    return(
      <form onSubmit={this.handleSubmit}>
        <label >UserName:</label>
        <input onChange={this.handleChange} type="text" name="name" value={this.state.name} />
        <br />
        <label>Email:</label>
        <input onChange={this.handleChange} type="email" name="email" value={this.state.email} />
        <br />
        <label>Password:</label>
        <input onChange={this.handleChange} type="password" name="password" value={this.state.password} />
        <br />
        <label>Confrim Password</label>
        <input onChange={this.handleChange} type="password" name="password_confirmation" value={this.state.password_confirmation} />
        <br />
        <input type="submit" value="signup" />
        {this.props.auth.message.map(m=> <h1>{m}</h1>)}
      </form>
    )
  }

}

const mapStateToProps = state => {
  console.log(state.auth)
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps, {createUser})(UserForm)