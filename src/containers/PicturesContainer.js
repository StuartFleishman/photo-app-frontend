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





class PicturesContainer extends Component {

  state = {
    pictures: this.props.pictures
  }


  componentDidMount() {
    this.props.fetchPictures()
    this.props.fetchCategories()
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
    const pObj = {...pictureObj, likes: pictureObj.likes + 1}
    this.props.updateLikes(pObj)

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


  render() {

  
   
    return (
      <div>
        
       
        <Switch>
          <Route exact path="/pictures">
              <Pictures currentUserId={this.props.auth.currentUser.id} likedPictures={this.props.likedPictures} categories={this.props.categories} hanldeFilterCategories={this.hanldeFilterCategories} pictures={this.state.pictures} handleLikes={this.handleLikes} />
          </Route>
              <Route path="/pictures/:id" component={(routeData) => <PictureShow routeData={routeData} />
               
                // const id = parseInt(routeData.match.params)
                // const picture = this.props.pictures.find(picture => picture.id === id)
                // return !!picture ? <PictureShow picture={picture}/> : <div>404</div>
              
              }/>  
        </Switch>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
 
  // const picArray = state.pictures.pictures.map( pic => pic )
 
  return {
    auth: state.auth,
    pictures: state.pictures,
    categories: state.categories,
    likedPictures: state.likedPictures,
    loading: state.loading
  }
}

export default connect(mapStateToProps, {fetchPictures, fetchCategories, updateLikes})(PicturesContainer)