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
    
    return(
      <div>
        <br></br>
        <br></br>
        <br></br>
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
      </form>
      {this.props.auth.message}
      </div>
      
    )
  }

}

const mapStateToProps = (state) => {


 
  return {
    auth: state.auth
  }
}



export default connect(mapStateToProps , {login})(Login)