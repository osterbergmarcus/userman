import React, { Component, PropTypes } from 'react'

// Presentational component
const AddUser = ({ handleChange, submitUser, text, users }) => {
    return (
      <div className="container">
        <input 
          type="text"
          id="user"
          value={text}
          onChange={(event) => handleChange(event)}
          placeholder="add user"
        />
        <button className="add" onClick={submitUser}>Add</button>
        <div className="user-count">Users: {users}</div>
      </div>
    )
}

export default AddUser

// propTypes
AddUser.propTypes = {
  handleChange: PropTypes.func,
  submitUser: PropTypes.func,
  text: PropTypes.string,
  users: PropTypes.number
}
