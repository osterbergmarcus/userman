import React, { Component, PropTypes } from 'react'

// Firebase reference
const userRef = new Firebase('https://usrmgmt.firebaseio.com/users')
const groupRef = new Firebase('https://usrmgmt.firebaseio.com/groups')

// Stateful component
class User extends Component { 
  constructor(props) {
    super(props)
      this.state = {
        editing: false,
        groupNames: []
      }
      
    this.editUser = this.editUser.bind(this)
    this.stopEditing = this.stopEditing.bind(this)
    this.removeUser = this.removeUser.bind(this)
    this.assignUser = this.assignUser.bind(this)
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
  
  stopEditing() {
    this.setState({ editing: !this.state.editing })
  }
  
  removeUser(uid) {
    userRef.child(uid).remove()
  }
  
  assignUser(event) {
    const { uid, name } = this.props
    groupRef.child(event.target.value).child('members').child(uid).set({ name, uid })
    this.setState({ editing: !this.state.editing })
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
              defaultValue=""
              onChange={(event) => this.assignUser(event)}>
              <option defaultValue="">Select group</option>
              {groupNames}
            </select>
          </td>
          <td></td>
          <td>
            <button className="edit" onClick={this.stopEditing}>Cancel</button>
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
