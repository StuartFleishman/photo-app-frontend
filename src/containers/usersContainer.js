import React, { Component } from 'react'
import {connect} from 'react-redux'
import {fetchUsers} from '../actions/usersAction'
import Users from '../components/Users'
import {Switch,Route} from "react-router-dom";
import UserShow from '../components/UserShow'
import {fetchPictures, updateLikes} from '../actions/picturesAction'



class UsersContainer extends Component {

  state = {
    users: [],
    pictures: []
  }

  handleLikes = id => {
    const pictureObj = this.props.pictures.find(pic => pic.id === id)
   

    const pObj = {...pictureObj, likes: pictureObj.likes + 1}
    this.props.updateLikes(pObj)

    this.setState((prevState) => {
      const newPictureState = prevState.pictures.map(pic => {
        if (pic.id === id) {
            return {...pic, likes: pic.likes + 1}
        } else {
            return pic
        }
        })
        return {pictures: newPictureState}
    })

  }



  componentDidMount() {
    this.props.fetchUsers()
    this.props.fetchPictures()
  }




  render() {
    return (
      <div>
            <Switch>
          <Route exact path="/users">
              <Users  users={this.props.users}/>
          </Route>
              <Route path="/users/:id" component={(routeData) => {
               
                const id = parseInt(routeData.match.params.id)
                const user= this.props.users.find(user => user.id === id)
              
              
                return !!user ? <UserShow handleLikes={this.handleLikes} pictures={this.props.pictures} routeData={routeData} user={user} /> : <div>404</div>
              }
              }/>  
        </Switch>
      </div>
    )
  }
}


const mapStateToProps = (state) => {

  return {
    users: state.users,
    pictures: state.pictures
  }
}

export default connect(mapStateToProps, {fetchUsers, fetchPictures, updateLikes})(UsersContainer)