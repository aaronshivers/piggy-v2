import React from 'react'
import { render } from 'react-dom'
import { firebase } from './db/firebase'
import UserContext from './context/user-context'
import AppRouter from './components/AppRouter'
import LoginPage from './components/LoginPage'
import './styles/styles.scss'

firebase.auth().onAuthStateChanged(user => {

  const jsx = !user ?
    <LoginPage /> :
    <UserContext.Provider value={ { uid: user.uid } }>
      <AppRouter />
    </UserContext.Provider>

  render(jsx, document.getElementById('app'))
})