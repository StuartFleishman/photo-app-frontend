import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const User = ({name, id}) => {
  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <ul>
      <Link to={`/users/${id}`}>{name}</Link>
      </ul>
    </div>
  )
}

export default User
