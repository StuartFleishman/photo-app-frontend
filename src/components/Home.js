import React, { Component } from 'react'
import {connect} from 'react-redux'
import {fetchPictures} from '../actions/picturesAction'

class Home1 extends Component {
  

  
  componentDidMount() {
    this.props.fetchPictures()
  }

  setUserPics() { 
    return this.props.pictures.map(picture => picture.user_id === this.props.user.id ? <h1><img src={picture.image_url}/>{picture.title}</h1> : <h1></h1>)
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
  console.log(state)
  return {
    user: state.auth.currentUser,
    pictures: state.pictures 
  }
}


export default connect(mapStateToProps, {fetchPictures})(Home1)
