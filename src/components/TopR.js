import React, { Component } from 'react'
import { connect } from 'react-redux'
import {fetchPictures, updateLikes} from '../actions/picturesAction'
import {fetchCategories} from '../actions/categoriesAction'
import Picture from './Picture'
import RatedCard from './RatedCard'
import {fetchUsers} from '../actions/usersAction'


class TopRated extends Component {

  componentDidMount() {
    this.props.fetchPictures()
    this.props.fetchCategories()
    this.props.fetchUsers()
  }
  
sortedArray = () => {
  return this.props.pictures.sort((a, b) => b.likes - a.likes) 
}
  
  render() {
  
  
    return (
      <div>
        <ol>
    {this.props.ratedPics.map(pic => <RatedCard users={this.props.users} categoryId={pic.category_id} userId={pic.user_id} id={pic.id} image={pic.image_url} title={pic.title} likes={pic.likes} />)}
       </ol>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {

  const ratedPics = state.pictures.sort((a, b) => b.likes - a.likes)


  return {
    auth: state.auth,
    users: state.users,
    pictures: state.pictures,
    categories: state.categories,
    ratedPics: ratedPics
  }
}





export default connect(mapStateToProps, {fetchCategories, fetchPictures, fetchUsers})(TopRated)
