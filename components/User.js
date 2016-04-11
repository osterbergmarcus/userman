import React, { Component, PropTypes } from 'react'

// Firebase reference
const userRef = new Firebase('https://usrmgmt.firebaseio.com/').child('users')
const groupRef = new Firebase('https://usrmgmt.firebaseio.com/').child('groups')

// Stateful component
class User extends Component { 
  constructor(props) {
    super(props)
      this.state = {
        editing: false,
        groupNames: []
      }
      
    this.editUser = this.editUser.bind(this)
    this.removeUser = this.removeUser.bind(this)
  }
      
  editUser() {
    this.setState({ editing: !this.state.editing })
    
    groupRef.on('value', (snapshot) => {
      let groupNames = []
      snapshot.forEach((child) => { 
        groupNames.push(child.val().group)
      })
      this.setState({ groupNames })
    })
  }
  
  removeUser(uid) {
    userRef.child(uid).remove()
  }

  render() {
    const { uid, name } = this.props
    
   let groupNames = this.state.groupNames.map((group, key) => {
       return <option key={key} value={group}>{group}</option>
     })
  
    return (
      <tbody>
      {this.state.editing ? 
        <tr>
          <td>Assign {name} to
            <select
              ref="group-select"
              defaultValue="">
              <option defaultValue="">Select group</option>
              {groupNames}
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
