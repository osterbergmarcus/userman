import React, { PropTypes } from 'react'

// Presentational component
const Group = ({ group }) => { 
  return (
    <tr>
      <td>{group}</td>
    </tr>
  )
}

export default Group

// propTypes
Group.propTypes = {
  group: PropTypes.string,
}