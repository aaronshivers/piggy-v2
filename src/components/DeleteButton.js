import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import BudgetContext from '../context/budget-context'
import UserContext from '../context/user-context'
import { deleteBook } from '../actions/budget'

const BookList = ({ id }) => {
  const { dispatch } = useContext(BudgetContext)
  const { uid } = useContext(UserContext)

  return (
    <Button
      variant="danger"
      onClick={ () => deleteBook(id)(dispatch)(uid) }
    >
      <FontAwesomeIcon
        icon={ faTrashAlt }
        className="text-dark"
      />
    </Button>
  )
}

export default BookList
