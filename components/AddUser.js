import React, { Component, PropTypes } from 'react'

//Presentation component
const AddUser = ({ handleChange, submitUser, text }) => {
    return (
      <div>
        <input 
          type="text"
          id="user"
          value={text}
          onChange={(event) => handleChange(event)}
          placeholder="add user"
        />
        <button onClick={submitUser}>Add</button>
      </div>
    )
}

export default AddUser

//propTypes
AddUser.propTypes = {
  handleChange: PropTypes.func,
  submitUser: PropTypes.func,
  text: PropTypes.string
}
