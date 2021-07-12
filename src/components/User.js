import React from 'react'
import {Link} from "react-router-dom";

const User = ({name, id}) => {
  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <Link to={`/users/${id}`}>{name}</Link>
    </div>
  )
}

export default User
