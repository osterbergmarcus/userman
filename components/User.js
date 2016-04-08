import React, { Component, PropTypes } from 'react'

const User = ({ name }) => ( <li>{name}</li> )

export default User

User.propTypes = {
  name: PropTypes.string,
}