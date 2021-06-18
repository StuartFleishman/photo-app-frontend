import React, { Component } from 'react'
import {connect} from 'react-redux'
import {fetchCategories} from '../actions/categoriesAction'
import Category from '../components/Category'

class CategoriesContainer extends Component {


  componentDidMount() {
    this.props.fetchCategories()
  }

  renderCategories = () => {
    return this.props.categories.map(category => <Category name={category.name} />)
  }


  render() {
    return (
      <select>
        {this.renderCategories()}
      </select>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    categories: state.categories
  }
}

export default connect(mapStateToProps, {fetchCategories})(CategoriesContainer)