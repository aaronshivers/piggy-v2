import React, { useEffect, useContext } from 'react'
import { Table } from 'react-bootstrap'
import BudgetContext from '../context/budget-context'
import UserContext from '../context/user-context'
import DeleteButton from './DeleteButton'
import { getIncome } from '../actions/budget'

const IncomeList = () => {
  // const { state, dispatch } = useContext(BudgetContext)
  const { uid } = useContext(UserContext)

  // Populate budget on page load
  useEffect(() => {
    getIncome()(dispatch)(uid)
  }, [])

  return (
    <Table striped hover className="mt-3">
      <thead className="table-secondary">
        <tr>
          <th>Income</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {
          state && state.map(({ id, income }) => (
            <tr key={ id }>
              <td className="text-break align-middle">{ income }</td>
              <td>
                <DeleteButton id={ id } />
              </td>
            </tr>
          ))
        }
      </tbody>
    </Table>
  )
}

export default IncomeList
