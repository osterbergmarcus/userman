import React, { PropTypes } from 'react'
import User                 from './User'

//Stateless presentational component
const UserList = ({ users }) => {
  return (
    <div class="container" id="users">
      <ul>
        {users.map((user) => {
          return (
            <User key={user.uid} {...user} /> 
          )
        })}
      </ul>
    </div>
  )
}

export default UserList

UserList.propTypes = {
  users: PropTypes.array
}
