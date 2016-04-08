import React, { Component, PropTypes } from 'react'
import UserList                        from '../components/UserList'
import AddUser                         from '../components/AddUser'
import AddGroup                        from '../components/AddGroup'

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
      groups: {}  
   }
    
    this.handleChange = this.handleChange.bind(this)
    this.handleUserSubmit = this.handleUserSubmit.bind(this)
    this.handleGroupSubmit = this.handleGroupSubmit.bind(this)
  }
  
  handleChange(event) { 
    if (event.target.id === 'user') {
      this.setState({ userInputText: event.target.value })
    } else {
      this.setState({ groupInputText: event.target.value })
    }
  }
  
  handleUserSubmit() {
    userRef.push({ name: this.state.userInputText })
    this.setState({ userInputText: '' })
  }
  
  handleGroupSubmit() { 
    let key = this.state.groupInputText
    let newGroup = {}
    newGroup[key] = { 'members': false }
    groupRef.update(newGroup)
    this.setState({ groupInputText: '' })
  }
  
  componentDidMount() {
    
    //Reqeust users from firebase database
    userRef.once('value', (snapshot) => {
      let users = []
      snapshot.forEach((child) => { 
        users.push({ 
          name: child.val().name, 
          uid: child.key()
        })
      })
      this.setState({ users })
      console.log(this.state.users)
      users = []
    })
  }
  
  render() {
    return (
      <div>
        <AddUser
          handleChange={this.handleChange}
          handleUserSubmit={this.handleUserSubmit}
          text={this.state.userInputText}
        />
        <AddGroup
          handleChange={this.handleChange}
          handleGroupSubmit={this.handleGroupSubmit}
          text={this.state.groupInputText}
        />
        <UserList users={this.state.users} />
      </div>
    )
  }
}

export default ManageUsers