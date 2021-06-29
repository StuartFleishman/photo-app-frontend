import React, { Component } from 'react'
import { connect } from 'react-redux'
import UserCard from './UserCard'


class PictureShow extends Component {

  findPic() {
    const id = parseInt(this.props.routeData.match.params.id)
    const picture = this.props.pictures.find(pic => pic.id == id ? pic : pic.message)
    return !!picture ? 
    <div>
      <div>
      <img src={picture.image_url}/>
      </div>
      <br/>
    {picture.title}
    </div> 
    : <div>Please select a category & picture title when creating a picture</div>
  }

  
  render() {
  
    return (
      <div>
        {this.findPic()}
      </div>
    )
  }
}

const mapState = state => {

  

  return {
    pictures: state.pictures
  }
}

export default connect(mapState)(PictureShow)
