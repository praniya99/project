import { useState } from 'react'

import './App.css'
import Salary from './pages/Salary/Salary'

function App() {
  const [count, setCount] = useState(0)

  return (
    
      <div>
        <Salary/>
      </div>
    
  )
}

export default App
