import React, { Component } from 'react'
import {connect} from 'react-redux'
import {fetchPictures} from '../actions/picturesAction'

class Home extends Component {
  

  
  componentDidMount() {
    this.props.fetchPictures()
  }

  setUserPics() { 
   
    // const pic = this.props.pictures.pictures.map(picture => picture.user_id === this.props.user.id ? <h1><img src={picture.image_url}/>{picture.title}</h1> : <h1></h1>)
    const picArray = this.props.pictures.pictures.map(pic => pic)
    return picArray.map(picture => picture.user_id === this.props.user.id ? <h1><img src={picture.image_url}/>{picture.title}</h1> : <h1></h1>)
  }


  
 
  
  
  render() {
    return (
      <div>
        Welcome Dude!
        {this.props.user.name}
        {this.setUserPics()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {

  
  return {
    user: state.auth.currentUser,
    pictures: state.pictures
  }
}


export default connect(mapStateToProps, {fetchPictures})(Home)
