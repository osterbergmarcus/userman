import React, { Component, PropTypes } from 'react'

//Stateful presentation component
class AddUser extends Component {
  constructor(props) {
    super(props)
    this.state = { inputText: '' }
    
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  
  handleChange(e) { 
    this.setState({ inputText: e.target.value }) 
  }
  
  handleSubmit() {
    const { userRef } = this.props
    userRef.push({ name: this.state.inputText })
    this.setState({ inputText: '' })
  }
  
  render() {
    return (
      <div>
        <input 
          type="text"
          value={this.state.inputText}
          onChange={this.handleChange}
          placeholder="add user"
        />
        <button onClick={this.handleSubmit}>Add</button>
      </div>
    )
  }
}

export default AddUser

//propTypes
AddUser.propTypes = {
  userRef: PropTypes.object
}
