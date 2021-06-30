import React, { Component } from 'react'
import {connect} from 'react-redux'
import {fetchUsers} from '../actions/usersAction'
import Users from '../components/Users'
import UserForm from '../components/UserForm'
import Login from '../components/Login'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import User from '../components/User'
import UserShow from '../components/UserShow'



class UsersContainer extends Component {


  componentDidMount() {
    this.props.fetchUsers()
  }




  render() {
    return (
      <div>
            <Switch>
          <Route exact path="/users">
              <Users  users={this.props.users}/>
          </Route>
              <Route path="/users/:id" component={(routeData) => {
               
                const id = parseInt(routeData.match.params.id)
                const user= this.props.users.find(user => user.id === id)
              
              
                return !!user ? <UserShow pictures={this.props.pictures} routeData={routeData} user={user} /> : <div>404</div>
              }
              }/>  
        </Switch>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  console.log(state)
  return {
    users: state.users,
    pictures: state.pictures
  }
}

export default connect(mapStateToProps, {fetchUsers})(UsersContainer)
