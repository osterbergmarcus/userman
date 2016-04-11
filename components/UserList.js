import React, { PropTypes } from 'react'
import User                 from './User'

// Presentational component
const UserList = ({ users }) => {
  return (
    <div className="container" id="users">
      <table>
        <thead>
          <tr>
            <th>User ID</th>
            <th>User Name</th>
            <th></th>
          </tr>
        </thead>
        {users.map((user) => {
          return (
            <User
              key={user.uid}
              {...user}
            />
          )
        })}
      </table>
    </div>
  )
}

export default UserList

UserList.propTypes = {
  users: PropTypes.array
}
