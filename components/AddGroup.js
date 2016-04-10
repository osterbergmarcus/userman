import React, { Component, PropTypes } from 'react'

// Presentational component
const AddGroup = ({ handleChange, submitGroup, text }) => {
  return (
    <div className="container">
      <input 
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="add group"
      />
      <button onClick={submitGroup}>Add</button>
    </div>
  )
}

export default AddGroup

// propTypes
AddGroup.propTypes = {
  handleChange: PropTypes.func,
  submitGroup: PropTypes.func,
  text: PropTypes.string
}