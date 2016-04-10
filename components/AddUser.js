import React, { Component, PropTypes } from 'react'

// Presentational component
const AddUser = ({ handleChange, submitUser, text }) => {
    return (
      <div className="container">
        <input 
          type="text"
          id="user"
          value={text}
          onChange={(event) => handleChange(event)}
          placeholder="add user"
        />
        <button class ="add" onClick={submitUser}>Add</button>
      </div>
    )
}

export default AddUser

// propTypes
AddUser.propTypes = {
  handleChange: PropTypes.func,
  submitUser: PropTypes.func,
  text: PropTypes.string
}
