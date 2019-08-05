export default (state, action) => {
  switch (action.type) {
    case 'ADD_BOOK':
      return [ ...state, action.book ]
    case 'DELETE_BOOK':
      return state.filter(({ id }) => id !== action.id)
    case 'POPULATE_BOOKS':
      return action.books
    default:
      return state
  }
}
