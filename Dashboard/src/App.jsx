import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import router from './router'
import UserContext from './UserContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UserContext>
        <RouterProvider router={router} />
      </UserContext>
    </>
  )
}

export default App
