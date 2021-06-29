import React, { Component } from 'react'
import { connect } from 'react-redux'


class PictureShow extends Component {

  findPic() {
    const id = parseInt(this.props.routeData.match.params.id)
    const picture = this.props.pictures.find(pic => pic.id == id)
    return !!picture ? <div><img src={picture.image_url}/>{picture.title}</div> : <div>Error</div>
  }

  
  render() {
  
    return (
      <div>
        Here's your pic Dude!
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
