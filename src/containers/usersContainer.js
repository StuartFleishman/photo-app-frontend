import React, { Component } from 'react'
import {connect} from 'react-redux'
import {fetchUsers} from '../actions/usersAction'
import Users from '../components/Users'
import UserForm from '../components/UserForm'


class UsersContainer extends Component {


  componentDidMount() {
    this.props.fetchUsers()
  }




  render() {
    return (
      <div>
        <Users users={this.props.users} />
        <UserForm />
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
