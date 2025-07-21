import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Calculator from './pages/Calculator'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='d-flex justify-content-center align-items-center vh-100'>
        <Calculator />
      </div>
    </>
  )
}

export default App
