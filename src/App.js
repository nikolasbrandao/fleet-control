import React from 'react'
import { Switch, Route } from 'react-router-dom'

import LoginPage from './pages/Login'
import FrotaPage from './pages/Frota'

function App() {
  return (
    <Switch>
      <Route path='/login'>
        <LoginPage />
      </Route>
      <Route path='/frota'>
        <FrotaPage />
      </Route>
    </Switch>
  )
}

export default App
