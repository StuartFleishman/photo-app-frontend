import React, {Component} from 'react'
import {login} from '../actions/usersAction'
import {connect} from 'react-redux'



class Login extends Component {

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

  handleSubmit = (event) => {
    event.preventDefault()
 
    this.props.login(this.state, this.props.history)
    this.setState({
      name: "",
      email: "",
      password: "",
      password_confirmation: ''
    })
  }

  render() {
    console.log(this.props.error)
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
        <input type="submit" value="login" />
       {!this.props.auth.error ? <h1>Please Log In</h1> : <h1>Please Try Again</h1>}
      </form>
      
    )
  }

}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    auth: state.auth
  }
}



export default connect(mapStateToProps , {login})(Login)