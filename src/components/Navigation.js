import React, { useContext } from 'react'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPiggyBank } from '@fortawesome/free-solid-svg-icons'
import UserContext from '../context/user-context'
import LoginLogoutButton from './LoginLogoutButton'

const Navigation = () =>{
  const { uid } = useContext(UserContext)

  return (
    <Navbar>
      <Navbar.Brand className="mr-auto">
        <FontAwesomeIcon icon={ faPiggyBank } className="mr-1 text-primary" />
        Piggy
      </Navbar.Brand>
      <LoginLogoutButton uid={ uid } />
    </Navbar>
  )
}

export default Navigation
