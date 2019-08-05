import React, { useReducer, useContext } from 'react'
import { Container } from 'react-bootstrap'
import BudgetContext from '../context/budget-context'
import budgetReducer from '../reducers/budget'
import Navigation from './Navigation'
import Income from './Income'
import BookForm from './BookForm'
import BookList from './BookList'

const App = () => {
  const [ state, dispatch ] = useReducer(budgetReducer, [])

  return (
    <BudgetContext.Provider value={ { state, dispatch } }>
      <Navigation />
      <Container className="mt-4 mb-4">
        <Income />
        <BookForm />
        <BookList />
      </Container>
    </BudgetContext.Provider>
  )
}

export default App
