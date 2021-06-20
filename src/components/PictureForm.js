import React, { Component } from 'react'
import {createPicture} from '../actions/picturesAction'
import {connect} from 'react-redux'

class PictureForm extends Component {

  state = {
    title: "",
    image_url: {},
    category_id: "",
    user_id: 1
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    }, () => console.log(this.state))
  }

  hanldeCategoryId = (event) => {
    this.setState({
      category_id: parseInt(event.target.value)
    }, () => console.log(this.state))
  }

  handleImage = (event) => {
    this.setState({
      image_url: event.target.files[0]
    }, () => console.log(this.state))
  }
  
  
  handleSubmit = event => {
    event.preventDefault()
    const formData = new FormData()
    formData.append('title', this.state.title);
    formData.append('category_id', this.state.category_id);
    formData.append('image_url', this.state.image_url);
    formData.append('user_id', this.state.user_id);

    this.props.createPicture(formData)

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
        <form onSubmit={this.handleSubmit}>
        <select onChange={this.hanldeCategoryId}>
        {this.renderCategories()}
        </select>
          <label>Picture Title:</label>
          <input onChange={this.handleChange} value={this.state.title} name="title" type="text" />
          <input onChange={this.handleImage} name="image_url" type="file" />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories
  }
}

export default connect(mapStateToProps, {createPicture})(PictureForm)
