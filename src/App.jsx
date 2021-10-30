import React from 'react'
import {Switch,HashRouter,Route} from 'react-router-dom'
import './App.css'
import {Home} from './pages/Home'

function App() {
  return (
    <div className='App'>
      <HashRouter>
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </HashRouter>
    </div>
  )
}

export default App
