import React from 'react'
import {Link} from "react-router-dom";

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
