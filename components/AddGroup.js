import React, { Component, PropTypes } from 'react'

const AddGroup = ({ handleChange, handleGroupSubmit, text }) => {
  return (
    <div>
      <input 
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="add group"
      />
      <button onClick={handleGroupSubmit}>Add</button>
    </div>
  )
}

export default AddGroup

//propTypes
AddGroup.propTypes = {
  handleChange: PropTypes.func,
  handleGroupSubmit: PropTypes.func,
  text: PropTypes.string
}