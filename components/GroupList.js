import React, { Component, PropTypes } from 'react'
import Group                           from './Group'

const GroupList = ({ groups, removeGroup }) => {
  return (
    <div>
    <select onChange={(event) => removeGroup(event)}>
    <option value="selected">List groups</option>
      {groups.map((group, index) => {
        return (
          <Group key={index} {...group} /> 
        )
      })}
    </select>
    </div>
  )
}

export default GroupList

//propTypes
GroupList.propTypes = {
  groups: PropTypes.array,
  removeGroup: PropTypes.func
}