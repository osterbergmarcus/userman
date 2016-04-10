import React, { Component, PropTypes } from 'react'

// Presentational component
const User = ({ uid, name, editUser }) => { 
  return (
    <tr>
      <td>{uid}</td>
      <td>{name}</td>
      <td><button onClick={editUser}>Edit</button></td>
    </tr>
  )
}

export default User

// propTypes
User.propTypes = {
  uid: PropTypes.string,
  name: PropTypes.string,
  editUser: PropTypes.func
}
