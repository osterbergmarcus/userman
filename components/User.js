import React, { Component, PropTypes } from 'react'

const User = ({ name, groups }) => { 
  return (
    <li>{name} is member of </li>
  )
}

export default User

User.propTypes = {
  name: PropTypes.string,
}