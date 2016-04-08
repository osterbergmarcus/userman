import React, { Component, PropTypes } from 'react'

class AddGroup extends Component {
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
    const { groupRef } = this.props
    let key = this.state.inputText
    let newGroup = {}
    newGroup[key] = { 'members': false }
    groupRef.update(newGroup)
    // temp.update(newGroup)
    this.setState({ inputText: '' })
  }
  
  render() {
    return (
      <div>
        <input 
          type="text"
          value={this.state.inputText}
          onChange={this.handleChange}
          placeholder="add group"
        />
        <button onClick={this.handleSubmit}>Add</button>
      </div>
    )
  }
}

export default AddGroup

//propTypes
AddGroup.propTypes = {
  groupRef: PropTypes.object
}