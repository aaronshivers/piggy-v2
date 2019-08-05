import React, { useEffect, useState, useContext } from 'react'
import { Form, Button } from 'react-bootstrap'
import BudgetContext from '../context/budget-context'
import UserContext from '../context/user-context'
import { addIncome } from '../actions/budget'

const IncomeForm = () => {
  // const { state, dispatch } = useContext(BudgetContext)
  const { uid } = useContext(UserContext)
  const [ validated, setValidated ] = useState(false)
  const [ income, setIncome ] = useState('')

  const handleFormSubmit = () => {
    const form = event.currentTarget
    event.preventDefault()

    if (form.checkValidity() === false) {
      event.stopPropagation()
    } else if (income !== '') {
      addIncome({ income })(dispatch)(uid)
    }

    setValidated(true)
  }

  // Reset Form after state change
  useEffect(() => {
    setIncome('')
    setValidated(false)
  }, [])

  return (
    <Form noValidate validated={ validated } onSubmit={ handleFormSubmit }>
      <Form.Group controlId="income">
        <Form.Label>Income</Form.Label>
        <Form.Control
          required
          type="text"
          placeholder="Income..."
          value={ income }
          onChange={ e => setIncome(e.target.value) }
        />
        <Form.Control.Feedback type="invalid">Please enter the income.</Form.Control.Feedback>
      </Form.Group>
      <Button
        variant="outline-primary"
        type="submit"
        size="lg"
        block
      >
        Add Income
      </Button>
    </Form>
  )
}

export default IncomeForm
