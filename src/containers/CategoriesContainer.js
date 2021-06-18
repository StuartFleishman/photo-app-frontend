import React, { Component } from 'react'
import {connect} from 'react-redux'
import {fetchCategories} from '../actions/categoriesAction'
import Categories from '../components/Categories'

class CategoriesContainer extends Component {


  componentDidMount() {
    this.props.fetchCategories()
  }




  render() {
    return (
      <div>
        <Categories />
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    categories: state.categories
  }
}

export default connect(mapStateToProps, {fetchCategories})(CategoriesContainer)