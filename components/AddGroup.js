import React, { Component, PropTypes } from 'react'

// Presentational component
const AddGroup = ({ handleChange, submitGroup, text, groups }) => {
  return (
    <div className="container">
      <input 
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="add group"
      />
      <button className="add" onClick={submitGroup}>Add</button>
      <div className="group-count">Groups: {groups}</div>
    </div>
  )
}

export default AddGroup

// propTypes
AddGroup.propTypes = {
  handleChange: PropTypes.func,
  submitGroup: PropTypes.func,
  text: PropTypes.string,
  groups: PropTypes.number
}