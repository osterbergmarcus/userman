import React, { Component, PropTypes } from 'react'
import UserList                        from '../components/UserList'
import AddUser                         from '../components/AddUser'
import AddGroup                        from '../components/AddGroup'

const rootRef = new Firebase('https://usrmgmt.firebaseio.com/')
const userRef = rootRef.child('users')
const groupRef = rootRef.child('groups')

class ManageUsers extends Component {
  constructor(props) {
    super(props);
      this.state = {
        users: [],
        groups: {}
      }
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
        <AddUser userRef={userRef} />
        <AddGroup groupRef={groupRef} />
        <UserList users={this.state.users} />
      </div>
      )
  }
}

export default ManageUsers