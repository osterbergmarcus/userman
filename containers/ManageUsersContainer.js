import React, { Component, PropTypes } from 'react'
import {
  AddUser,
  AddGroup,
  UserList,
  GroupList
} from '../components'

const rootRef = new Firebase('https://usrmgmt.firebaseio.com/')
const userRef = rootRef.child('users')
const groupRef = rootRef.child('groups')

class ManageUsers extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      userInputText: '',
      groupInputText: '',
      users: [],
      groups: []
   }
    
    this.handleChange = this.handleChange.bind(this)
    this.submitUser = this.submitUser.bind(this)
    this.submitGroup = this.submitGroup.bind(this)
  }
  
  handleChange(event) {
    if (event.target.id === 'user') {
      this.setState({ userInputText: event.target.value })
    } else {
      this.setState({ groupInputText: event.target.value })
    }
  }
  
  submitUser() {
    userRef.push({
      name: this.state.userInputText,
      groups: false,
      date: Date()
    })
    this.setState({ userInputText: '' })
  }
  
  submitGroup() { 
    let key = this.state.groupInputText
    let newGroup = {}
    newGroup[key] = {  
      'group': this.state.groupInputText
    }
    groupRef.update(newGroup)
    this.setState({ groupInputText: '' })
  }
  
  componentDidMount() {
    // Request groups and listen to new events
    groupRef.on('value', (snapshot) => {
      let groups = []
      snapshot.forEach((child) => { 
        groups.push({ group: child.val().group })
      })
      
      this.setState({ groups })
      groups = []
    })
      
    // Request users and listen to new events
    userRef.on('value', (snapshot) => {
      let users = []
      snapshot.forEach((child) => { 
        users.push({ 
          name: child.val().name,
          groups: child.val().groups,
          uid: child.key(),
          date: child.val().date
        })
      })
      this.setState({ users })
      users = []
    })
  }
  
  render() {
    return (
      <div>
        <AddUser
          handleChange={this.handleChange}
          submitUser={this.submitUser}
          text={this.state.userInputText}
          users={this.state.users.length}
        />
        <AddGroup
          handleChange={this.handleChange}
          submitGroup={this.submitGroup}
          text={this.state.groupInputText}
          groups={this.state.groups.length}
        />
        <GroupList groups={this.state.groups} />
        <UserList users={this.state.users} />
      </div>
    )
  }
}

export default ManageUsers