import { useState } from 'react'
import './App.css'
import TypewritterEffect from './component/TypewritterEffect/TypewritterEffect'

function App() {
  const [count, setCount] = useState(0)

  return (
    <TypewritterEffect />
  )
}

export default App
