import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import BudgetContext from '../context/budget-context'

const Income = () => {
  const { income } = useContext(BudgetContext)

  return (
    <div>
      <div>
        <h2>Income</h2>
        <span>{ income }</span>
      </div>
      <Link
        to="/income"
        className="btn btn-primary btn-lg"
      >
        Add Income
      </Link>
    </div>
  )
}

export default Income
