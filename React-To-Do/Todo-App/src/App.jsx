import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Headers from './components/header'
import './App.css'

function App() {
  const [todo, setTodo] = useState([])
  const [input, setInput] = useState("")

  function nameChange(name) {
    setInput(name)
  }

  function addToDo() {
    if (input.length > 0) {
      setTodo([...todo, input])
      setInput("")
    }
  }

  function edit(index) {
    let prompt = window.prompt("Edit Todo")
    let array = [...todo]
    array.splice(index, 1, prompt)
    setTodo([...array])
  }

  function remove(index) {
    let array = [...todo]
    array.splice(index, 1 )
    setToDo([...array])
  }

  return (
    <>
      
      <h1>Just Do It</h1>
      
      <Headers value={input} change={() => nameChange(event.target.value)} btnFunc={addToDo}></Headers>
      {
        todo.map((item, index) => {
          return(<p>{item} <button onClick={()=>edit(index)}>Edit</button><button onClick={()=>remove(index)}>Delete</button></p>)

        })
      }

    </>
  )
}

export default App
