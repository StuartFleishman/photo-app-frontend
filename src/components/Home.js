import React, { Component } from 'react'
import {connect} from 'react-redux'
import {fetchPictures} from '../actions/picturesAction'
import UserCard from './UserCard'
import {deletePicture} from '../actions/picturesAction'

class Home extends Component {
  

  
  componentDidMount() {
    this.props.fetchPictures()
  }

  setUserPics() { 

   
    const picArray = this.props.pictures.map(pic => pic)
    return picArray.map(picture => picture.user_id === this.props.user.id ? <UserCard id={picture.id} image={picture.image_url} title={picture.title} deletePicture={this.props.deletePicture} /> : <h1></h1>)
  }


  
 
  
  
  render() {
    return (
      <div>
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


export default connect(mapStateToProps, {fetchPictures, deletePicture})(Home)
