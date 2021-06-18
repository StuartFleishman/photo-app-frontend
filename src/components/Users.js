import React from 'react'
import User from './User'

const Users = ({users}) => (
  <div>
    {users.map(user => <User key={user.id} name={user.name} />)}
  </div>
)

export default Users
