import React, { Component } from 'react'
import {connect} from 'react-redux'
import {fetchPictures, deletePicture} from '../actions/picturesAction'
import UserCard from './UserCard'
import CardColumns from 'react-bootstrap/CardColumns';


class Home extends Component {
  
  componentDidMount() {
    this.props.fetchPictures()
  }

  setUserPics() { 
    const picArray = this.props.pictures.map(pic => pic)
    const userPics = picArray.filter(picture => picture.user_id === this.props.user.id )
    return userPics.map(picture => <UserCard key={picture.id} id={picture.id} image={picture.image_url} title={picture.title} deletePicture={this.props.deletePicture} /> )
  }

  render() {

    return (
      <div>
        <br></br>
        <br></br>
        <br></br>
        {this.props.auth.loggedIn ? <h1> {this.props.user.name}'s Collection </h1> : <h1>Log in or Sign up</h1> }
        <CardColumns>
        {this.setUserPics()}
        </CardColumns>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.currentUser,
    pictures: state.pictures,
    auth: state.auth
  }
}


export default connect(mapStateToProps, {fetchPictures, deletePicture})(Home)
