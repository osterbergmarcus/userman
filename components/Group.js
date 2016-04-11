import React, { Component, PropTypes } from 'react'

// Firebase reference
const groupRef = new Firebase('https://usrmgmt.firebaseio.com/groups')

// Stateful component
class Group extends Component { 
  constructor(props) {
    super(props)
      this.state = {
        editing: false,
        members: []
      }
      
    this.removeUser = this.removeUser.bind(this)
    this.removeGroup = this.removeGroup.bind(this)
  }
  
  removeUser(uid) {
    const { group } = this.props
    groupRef.child(group).child('members').child(uid).remove()
  }
  
  removeGroup(group) {
    if (this.state.members.length === 0) {
      groupRef.child(group).remove()
    } else {
      console.log('Please delete existing users before removing group')
    }
  }
  
  componentDidMount() {
    groupRef.child(this.props.group).child('members').on('value', (snapshot) => {
      let members = []
      snapshot.forEach((child) => {
        members.push({ name: child.val().name, uid: child.val().uid})
      })
      this.setState({ members })
    })
  }
  
  render() {
    const { group, uid }  = this.props
    let members = this.state.members.map((member, key) => {
      return (
        <span
          className="group-user"
          key={member.uid}
          onClick={() => this.removeUser(member.uid)}>
          {`${member.name}, `}
        </span>
      )
    })
    
    return (
      <tr>
        <td>{group}</td>
        <td>{members}</td>
        <td><button className="edit" onClick={() => this.removeGroup(group)}>Remove</button></td>
      </tr>
    )
  }
}

export default Group

// propTypes
Group.propTypes = {
  group: PropTypes.string,
  uid: PropTypes.string
}