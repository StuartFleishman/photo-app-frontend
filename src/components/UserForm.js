import React, {Component} from 'react'
import {createUser} from '../actions/usersAction'
import {connect} from 'react-redux'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'


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
      <Form onSubmit={this.handleSubmit}>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>User Name:</Form.Label>
      <Form.Control onChange={this.handleChange} value={this.state.title} name="name" type="text" placeholder="Enter Name" />
    </Form.Group>
    </Form.Row>

    <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email:</Form.Label>
      <Form.Control onChange={this.handleChange} value={this.state.title} name="email" type="email" placeholder="Enter Email" />
    </Form.Group>
    </Form.Row>

    <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Password:</Form.Label>
      <Form.Control onChange={this.handleChange} value={this.state.title} name="password" type="password" placeholder="Enter Password" />
    </Form.Group>
    </Form.Row>

    <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Password Confirmation:</Form.Label>
      <Form.Control onChange={this.handleChange} value={this.state.title} name="password_confirmation" type="password" placeholder="Enter Password Confirmation" />
    </Form.Group>
    </Form.Row>




  <Button variant="primary" type="submit">
    Submit
  </Button>
  {this.props.auth.message.map((m, idx)=> <h1 key={idx}>{m}</h1>)}
</Form>
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