import React, { Component } from 'react'

export default class PictureForm extends Component {
  
  
  
  
  render() {
    return (
      <div>
        <form>
          <label>Picture Title:</label>
          <input type="text" />
          <input type="file" />
          <input type="submit" />
        </form>
      </div>
    )
  }
}
