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

  sortedPics = () => {
    const ratedPics = this.props.pictures.sort((a, b) => b.likes - a.likes)
    return ratedPics.map(pic => <RatedCard key={pic.id} categories={this.props.categories} users={this.props.users} categoryId={pic.category_id} userId={pic.user_id} id={pic.id} image={pic.image_url} title={pic.title} likes={pic.likes} />)
  }

  
  render() {
    return (
      <div>
        {this.sortedPics()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {

  return {
    users: state.users,
    pictures: state.pictures,
    categories: state.categories
  }
}





export default connect(mapStateToProps, {fetchCategories, fetchPictures, fetchUsers})(TopRated)