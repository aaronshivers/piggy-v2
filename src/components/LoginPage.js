import React from 'react'
import { Container, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPiggyBank } from '@fortawesome/free-solid-svg-icons'
import LoginLogoutButton from './LoginLogoutButton'

const LoginPage = () => (
  <div className="login-page">
    <Container>
    <Col xs={ { span: 6, offset: 3 } }>
      <div className="text-center">
        <h1>
          <FontAwesomeIcon icon={ faPiggyBank } className="mr-1 text-primary" />
          Piggy
        </h1>
        <LoginLogoutButton />
      </div>
    </Col>
    </Container>
  </div>
)

export default LoginPage
