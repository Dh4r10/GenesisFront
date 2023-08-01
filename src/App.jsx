import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <form action="">
          <label htmlFor="p1">Hola : </label>
          <input type="text" placeholder='Ingrese tipo de perfil' id='p1' />
        </form>
      </div>
    </>
  )
}

export default App
