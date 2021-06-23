import React, { Component } from 'react'
import { connect } from 'react-redux'

class PicFilter extends Component {
  render() {
    const pic = this.props.pictures.filterCat.map(pic => pic.name)
    return (
      <div>
        {pic}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    pictures: state.pictures
  }
}

export default connect(mapStateToProps)(PicFilter)
