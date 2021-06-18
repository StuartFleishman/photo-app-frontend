import React, { Component } from 'react'
import {connect} from 'react-redux'
import {fetchUsers} from '../actions/usersAction'

class UsersContainer extends Component {


  componentDidMount() {
    this.props.fetchUsers()
  }


  render() {
    return (
      <div>
        {this.props.users.name}
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

export default connect(mapStateToProps, {fetchUsers})(UsersContainer)
