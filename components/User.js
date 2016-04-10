import React, { Component, PropTypes } from 'react'

// Firebase reference
const userRef = new Firebase('https://usrmgmt.firebaseio.com/').child('users')

// Stateful component
class User extends Component { 
  constructor(props) {
    super(props)
      this.state = {
        editing: false
      }
      
    this.editUser = this.editUser.bind(this)
    this.removeUser = this.removeUser.bind(this)
  }

  editUser() {
    this.setState({ editing: !this.state.editing })
    console.log(this.state.editing)
  }
  
  removeUser(uid) {
    userRef.child(uid).remove()
  }

  render() {
    const { uid, name } = this.props
    return (
      <tbody>
      {this.state.editing ? 
        <tr>
          <td>Assign {name} to
            <select>
              <option>1</option>
            </select>
          </td>
        </tr>
      :
        <tr>
          <td>{uid}</td>
          <td>{name}</td>
          <td>
            <button className="edit" onClick={this.editUser}>Edit</button>
            <button className="edit" onClick={() => this.removeUser(uid)}>Remove</button>    
          </td>
        </tr>
      }
      </tbody>
    )
  }
}

export default User

// propTypes
User.propTypes = {
  uid: PropTypes.string,
  name: PropTypes.string
}
