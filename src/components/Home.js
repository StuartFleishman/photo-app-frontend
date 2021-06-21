import React from 'react'
import {connect} from 'react-redux'

const Home = ({user}) => {
return <h1>Welcome {user.name}</h1>
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    user: state.auth.currentUser,
  }
}

export default connect(mapStateToProps)(Home)
