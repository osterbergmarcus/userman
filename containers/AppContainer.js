import React, { Component, PropTypes } from 'react'
import { ManageUsers, Nav }            from './'

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <ManageUsers />
      </div>
      )
  }
}

export default App