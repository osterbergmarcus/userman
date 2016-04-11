import React, { Component, PropTypes } from 'react'
import Group                           from './Group'

// Presentational component
const GroupList = ({ groups }) => {
  return (
    <div className="container" id="groups">
      <table>
        <thead>
          <tr>
            <th>Group names and members</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {groups.map((group, index) => (
            <Group
              key={index}
              {...group}
            /> 
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default GroupList

// propTypes
GroupList.propTypes = {
  groups: PropTypes.array
}