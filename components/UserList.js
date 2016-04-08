import React, { PropTypes } from 'react'
import User                 from './User'

//Stateless presentational component
const UserList = ({ users }) => {
  return (
    <ul>
      {users.map((user) => {
        return (
          <User key={user.uid} {...user} /> 
        )
      })}
    </ul>
  )
}

export default UserList

UserList.propTypes = {
  users: PropTypes.array
}
