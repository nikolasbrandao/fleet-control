import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Header from './components/Header'

import LoginPage from './pages/Login'
import FrotaPage from './pages/Frota'

function App() {
  return (
    <Switch>
      <Route path='/login'>
        <LoginPage />
      </Route>
      <BrowserRouter>
        <Header />
        <Route path='/veiculos'>
          <FrotaPage />
        </Route>
      </BrowserRouter>
    </Switch>
  )
}

export default App
