import React from 'react'
import User from './User'

const Users = ({users}) => (
  <div>
    {users.map(user => <User name={user.name} />)}
  </div>
)

export default Users
