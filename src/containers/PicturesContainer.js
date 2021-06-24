import React, { Component } from 'react'
import {connect} from 'react-redux'
import {fetchPictures, updateLikes} from '../actions/picturesAction'
import {fetchCategories} from '../actions/categoriesAction'
import Pictures from '../components/Pictures'
import PictureForm from '../components/PictureForm'



class PicturesContainer extends Component {

  state = {
    pictures: []
  }


  componentDidMount() {
    this.props.fetchPictures()
    this.props.fetchCategories()
  }

  hanldeFilterCategories = (event) => {
    console.log(event.target.value)
    const pictures = this.props.pictures.filter(pic => {
    return pic.category_id === parseInt(event.target.value)
    })

    this.setState({
      pictures: pictures
    }, () => console.log(this.state))
  }

  handleLikes = id => {
   //add likedPictures: pass in picture id
    
    const pictureObj = this.state.pictures.find(pic => pic.id === id)
    const pObj = {...pictureObj, likes: pictureObj.likes + 1, likedPictures: this.props.auth.currentUser.id}
    this.props.updateLikes(pObj)
  }

  renderCategories = () => {
    return this.props.categories.map(category => <option key={category.id} value={category.id} name={category.id}>{category.name}</option>)
  }




  render() {
    return (
      <div>
        <select onChange={this.hanldeFilterCategories}>
          <option value="">Filter Categories</option>
        {this.renderCategories()}
        </select>
        <Pictures pictures={this.state.pictures} handleLikes={this.handleLikes} />
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  console.log(state)
  return {
    auth: state.auth,
    pictures: state.pictures,
    categories: state.categories
  }
}

export default connect(mapStateToProps, {fetchPictures, fetchCategories, updateLikes})(PicturesContainer)