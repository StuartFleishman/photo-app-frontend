import React, { Component } from 'react'
import { connect } from 'react-redux'
import {fetchPictures, updateLikes} from '../actions/picturesAction'
import {fetchCategories} from '../actions/categoriesAction'
import Picture from './Picture'
import RatedCard from './ratedCard'


class topRated extends Component {

  componentDidMount() {
    this.props.fetchPictures()
    this.props.fetchCategories()
  }
  
sortedArray = () => {
  return this.props.pictures.sort((a, b) => b.likes - a.likes) 
}
  
  render() {
  
  
    return (
      <div>
        <ol>
    {this.props.ratedPics.map(pic => <RatedCard image={pic.image_url} title={pic.title} likes={pic.likes} />)}
       </ol>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {

  const ratedPics = state.pictures.sort((a, b) => b.likes - a.likes)


  return {
    auth: state.auth,
    pictures: state.pictures,
    categories: state.categories,
    ratedPics: ratedPics
  }
}





export default connect(mapStateToProps, {fetchCategories, fetchPictures})(topRated)
