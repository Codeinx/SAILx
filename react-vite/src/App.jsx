import React, { Component } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Person from './components/Person'
import Login from './components/login'
import Reg from './components/reg'
import './App.css'

class App extends Component {
  render() {
    return (
      <>
        <Person oruko="Dominion"></Person>
        <Person oruko="Dominion"></Person>
        <Person oruko="Dominion"></Person>
        <Person oruko="Dominion"></Person>
      </>
    )
  }
}

export default App