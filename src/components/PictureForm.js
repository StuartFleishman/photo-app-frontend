import React, { Component } from 'react'

export default class PictureForm extends Component {

  state = {
    title: "",
    image_url: "",
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  
  
  handleSubmit = (event) => {
    event.preventDefault()

    this.setState({
      title: "",
      image_url: "",
    })
  }
  
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Picture Title:</label>
          <input onChange={this.handleChange} value={this.state.title} name="title" type="text" />
          <input onChange={this.handleChange} value={this.state.image_url} name="image_url" type="file" />
          <input type="submit" />
        </form>
      </div>
    )
  }
}
