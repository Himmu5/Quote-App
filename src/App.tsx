import { useState } from 'react'
import './App.css'
import Nav from './Component/Ui-Component/Nav'
import Home from './Component/Page/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-purple-800 h-screen '>
      <Nav />
      
      <Home />
    </div>
  )
}

export default App
