import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPiggyBank } from '@fortawesome/free-solid-svg-icons'

const Header = () => (
  <h2>
    <FontAwesomeIcon icon={ faPiggyBank } className="mr-1 text-primary" />
    Piggy
  </h2>
)

export default Header