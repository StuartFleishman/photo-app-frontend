import React, { Component } from 'react'
import {connect} from 'react-redux'
import {fetchPictures} from '../actions/picturesAction'
import Pictures from '../components/Pictures'
import PictureForm from '../components/PictureForm'


class PicturesContainer extends Component {


  componentDidMount() {
    this.props.fetchPictures()
  }




  render() {
    return (
      <div>
        <PictureForm />
        <Pictures pictures={this.props.pictures} />
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  console.log(state)
  return {
    pictures: state.pictures
  }
}

export default connect(mapStateToProps, {fetchPictures})(PicturesContainer)