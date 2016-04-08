import React, { Component, PropTypes } from 'react'

//Presentation component
const AddUser = ({ handleChange, handleSubmit, text }) => {
    return (
      <div>
        <input 
          type="text"
          id="user"
          value={text}
          onChange={(event) => handleChange(event)}
          placeholder="add user"
        />
        <button onClick={handleSubmit}>Add</button>
      </div>
    )
}

export default AddUser

//propTypes
AddUser.propTypes = {
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  text: PropTypes.string
}
