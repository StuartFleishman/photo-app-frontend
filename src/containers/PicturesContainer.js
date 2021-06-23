import React, { Component } from 'react'
import {connect} from 'react-redux'
import {fetchPictures} from '../actions/picturesAction'
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
        <Pictures pictures={this.state.pictures} />
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  console.log(state)
  return {
    pictures: state.pictures,
    categories: state.categories
  }
}

export default connect(mapStateToProps, {fetchPictures, fetchCategories})(PicturesContainer)