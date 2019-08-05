import React from 'react'
import { Container } from 'react-bootstrap'
import Navigation from './Navigation'
import IncomeForm from './IncomeForm'
import IncomeList from './IncomeList'

const IncomePage = () => (
  <Container>
    <Navigation />
    <h1>Income</h1>
    <IncomeForm />
    <IncomeList />
  </Container>
)

export default IncomePage
