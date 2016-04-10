import React, { PropTypes } from 'react'

const Group = ({ group }) => ( <option value={group}>{group}</option> )

export default Group

Group.propTypes = {
  group: PropTypes.string,
}