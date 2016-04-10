import React, { Component, PropTypes } from 'react'
import User                            from './User'

// Presentational component
class UserList extends Component {
  constructor(props) {
    super(props)
      this.state = {
        editing: false
      }
      
    this.editUser = this.editUser.bind(this)
  }
  
  editUser() {
    this.setState({ editing: !this.state.editing })
    console.log(this.state.editing)
  }
  
  render() {
    const { users } = this.props
    return (
      <div className="container" id="users">
        <table>
          <thead>
            <tr>
              <th>User ID</th>
              <th>User Name</th>
            </tr>
          </thead>
          <tbody>
          {users.map((user) => (
              <User key={user.uid} editUser={this.editUser} {...user} />
          ))}
          </tbody>
        </table>
      </div>
    )
  }
}

export default UserList

UserList.propTypes = {
  users: PropTypes.array
}
