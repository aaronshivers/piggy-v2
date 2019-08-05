import database from '../db/firebase'

const addIncome = moneyData => dispatch => uid => {

  const { cash } = moneyData

  const money = {
    cash,
    createdAt: Date.now()
  }

  return database
    .ref(`users/${ uid }/money`)
    .push(money)
    .then(
      ref => dispatch({
        type: 'ADD_INCOME', money: {
          id: ref.key,
          ...money
        }
      })
    )
}

const deleteIncome = id => dispatch => uid => {
  return database
    .ref(`users/${ uid }/money/${ id }`)
    .remove()
    .then(() => dispatch({ type: 'DELETE_INCOME', id }))
}

const getIncome = () => dispatch => uid => {

  return database
    .ref(`users/${ uid }/money`)
    .once('value')
    .then(snapshot => {
      const money = []

      snapshot.forEach(childSnapshot => {
        money.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        })
      })

      return money
    }).then(
      money => dispatch({ type: 'POPULATE_INCOMES', money })
    )
}

export {
  addIncome,
  deleteIncome,
  getIncome
}
