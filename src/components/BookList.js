import React, { useEffect, useContext } from 'react'
import { Table } from 'react-bootstrap'
import BooksContext from '../context/books-context'
import UserContext from '../context/user-context'
import DeleteButton from './DeleteButton'
import { getBooks } from '../actions/books'

const BookList = () => {
  const { state, dispatch } = useContext(BooksContext)
  const { uid } = useContext(UserContext)

  // Populate books on page load
  useEffect(() => {
    getBooks()(dispatch)(uid)
  }, [])

  return (
    <Table striped hover className="mt-3">
      <thead className="table-secondary">
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>ISBN #</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {
          state && state.map(({ id, title, author, isbn }) => (
            <tr key={ id }>
              <td className="text-break align-middle">{ title }</td>
              <td className="text-break align-middle">{ author }</td>
              <td className="text-break align-middle">{ isbn }</td>
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

export default BookList
