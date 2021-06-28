import React, { Component } from 'react'
import {connect} from 'react-redux'
import {fetchPictures, updateLikes} from '../actions/picturesAction'
import {fetchCategories} from '../actions/categoriesAction'
import Pictures from '../components/Pictures'
import PictureForm from '../components/PictureForm'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PictureShow from '../components/PictureShow'
import {createLikedPicture, updateLikedPicture, fetchLikedPictures} from '../actions/likedPicturesAction'


class PicturesContainer extends Component {

  state = {
    pictures: []
  }


  componentDidMount() {
    this.props.fetchPictures()
    this.props.fetchCategories()
    this.props.fetchLikedPictures()
  }

  hanldeFilterCategories = (event) => {
    
    const pictures = this.props.pictures.filter(pic => {
    return pic.category_id === parseInt(event.target.value)
    })

    this.setState({
      pictures: pictures
    })
  }

  handleLikes = id => {

    
    const pictureObj = this.state.pictures.find(pic => pic.id === id)
   
    
    // create a liked_pictures on backend
    // const picId = pictureObj.id
    // const ids = {picture_id: picId, user_id: this.props.auth.currentUser.id}
    // this.props.createLikedPicture(ids)
    
   //update likes on backend
    const pObj = {...pictureObj, likes: pictureObj.likes + 1}
    this.props.updateLikes(pObj)

    //update state to show likes to users
    const pictures = this.state.pictures.map(pic => {
        if (pic.id === id) {
            return {...pic, likes: pic.likes + 1}
        } else {
            return pic
        }
        })
    this.setState({
        pictures: pictures
    })

  }

  renderCategories = () => {
    return this.props.categories.map(category => <option key={category.id} value={category.id} name={category.id}>{category.name}</option>)
  }




  render() {
   
    return (
      <div>
        
       
        <Switch>
          <Route exact path="/pictures">
        <Pictures currentUserId={this.props.auth.currentUser.id} likedPictures={this.props.likedPictures} categories={this.props.categories} hanldeFilterCategories={this.hanldeFilterCategories} pictures={this.state.pictures} handleLikes={this.handleLikes} />
        </Route>
          <Route path="/pictures/:id" render={(routeData) => {
            console.log(routeData)
            const id = parseInt(routeData.match.params.id)
            const picture = this.props.pictures.find(pic => pic.id === id)
          return !!picture ? <PictureShow picture={picture} /> : <div>404</div>
          }   
        }/>
        </Switch>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  console.log(state)
  return {
    auth: state.auth,
    pictures: state.pictures,
    categories: state.categories,
    likedPictures: state.likedPictures
  }
}

export default connect(mapStateToProps, {fetchPictures, fetchCategories, updateLikes, createLikedPicture, updateLikedPicture, fetchLikedPictures})(PicturesContainer)