import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import Header from './components/Header'

import LoginPage from './pages/Login'
import FrotaPage from './pages/Frota'

const RequireAuth = ({ children }) => {
  const token = localStorage.getItem('@fleet-control/token')
  if (token) {
    return children
  }
  return <Redirect to='/login' />
}

function App() {
  return (
    <Switch>
      <Route exact path='/'>
        {localStorage.getItem('@fleet-control/token') ? (
          <Redirect to='/veiculos' />
        ) : (
          <Redirect to='/login' />
        )}
      </Route>
      <Route path='/login'>
        <LoginPage />
      </Route>
      <RequireAuth>
        <BrowserRouter>
          <Header />
          <Route path='/veiculos'>
            <FrotaPage />
          </Route>
        </BrowserRouter>
      </RequireAuth>
    </Switch>
  )
}

export default App
