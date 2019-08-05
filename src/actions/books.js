import database from '../db/firebase'

const addBook = bookData => dispatch => uid => {

  const { title, author, isbn } = bookData

  const book = {
    title,
    author,
    isbn,
    createdAt: Date.now()
  }

  return database
    .ref(`users/${ uid }/books`)
    .push(book)
    .then(
      ref => dispatch({
        type: 'ADD_BOOK', book: {
          id: ref.key,
          ...book
        }
      })
    )
}

const deleteBook = id => dispatch => uid => {
  return database
    .ref(`users/${ uid }/books/${ id }`)
    .remove()
    .then(() => dispatch({ type: 'DELETE_BOOK', id }))
}

const getBooks = () => dispatch => uid => {

  return database
    .ref(`users/${ uid }/books`)
    .once('value')
    .then(snapshot => {
      const books = []

      snapshot.forEach(childSnapshot => {
        books.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        })
      })

      return books
    }).then(
      books => dispatch({ type: 'POPULATE_BOOKS', books })
    )
}

export {
  addBook,
  deleteBook,
  getBooks
}
