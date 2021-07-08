import React, { Component } from 'react'
import { connect } from 'react-redux'
import {fetchPictures} from '../actions/picturesAction'
import {fetchCategories} from '../actions/categoriesAction'
import RatedCard from './RatedCard'
import {fetchUsers} from '../actions/usersAction'


class TopRated extends Component {

  componentDidMount() {
    this.props.fetchPictures()
    this.props.fetchCategories()
    this.props.fetchUsers()
  }

  ratedPictures = () => {
    return this.props.ratedPics.map(pic => <RatedCard key={pic.id} categories={this.props.categories} users={this.props.users} categoryId={pic.category_id} userId={pic.user_id} id={pic.id} image={pic.image_url} title={pic.title} likes={pic.likes} />)
  }
  

  
  render() {
  
  
    return (
      <div>
        {this.ratedPictures()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {

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