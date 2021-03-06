import React, { Component } from 'react'
import {createPicture} from '../actions/picturesAction'
import {fetchCategories} from '../actions/categoriesAction'
import {connect} from 'react-redux'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

class PictureForm extends Component {

  componentDidMount() {
    this.props.fetchCategories()
  }

  state = {
    title: "",
    image_url: {},
    category_id: "",
    user_id: this.props.auth.currentUser.id
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  hanldeCategoryId = (event) => {
    this.setState({
      category_id: parseInt(event.target.value)
    })
  }

  handleImage = (event) => {
    this.setState({
      image_url: event.target.files[0]
    })
  }
  
  
  handleSubmit = event => {
    event.preventDefault()
    const formData = new FormData()
    formData.append('title', this.state.title);
    formData.append('category_id', this.state.category_id);
    formData.append('image_url', this.state.image_url);
    formData.append('user_id', this.state.user_id);

    

    this.props.createPicture(formData, this.props.history)

    this.setState({
      title: "",
      image_url: {},
      category_id: "",
      user_id: ""
    })

    

  }

  renderCategories = () => {
    return this.props.categories.map(category => <option key={category.id} value={category.id} name={category.id}>{category.name}</option>)
  }

  
  render() {
    return (
      <div>
        <br></br>
        <br></br>
        <br></br>
        <Container>
    <Form onSubmit={this.handleSubmit}>
        <Form.Row>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Picture Title:</Form.Label>
          <Form.Control onChange={this.handleChange} value={this.state.title} name="title" type="text" placeholder="Enter title" />
        </Form.Group>
        </Form.Row>
        <Form.Row>

        <Form.Group as={Col} >
          <Form.Control onChange={this.handleImage} name="image_url" type="file" />
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Category</Form.Label>
          <Form.Control onChange={this.hanldeCategoryId} as="select" defaultValue="Choose...">
          <option value="">Please Select Category</option>
              {this.renderCategories()}
          </Form.Control>
        </Form.Group>
      </Form.Row>
        <Button variant="primary" type="submit">
          Submit
        </Button>
    </Form>
    </Container>
  </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    categories: state.categories
  }
}

export default connect(mapStateToProps, {createPicture, fetchCategories})(PictureForm)