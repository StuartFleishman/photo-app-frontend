import React, { Component } from 'react'
import {connect} from 'react-redux'

class UsersContainer extends Component {
  render() {
    return (
      <div>
        hi
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}

export default connect(mapStateToProps, mapDisptachToProps)(UsersContainer)
