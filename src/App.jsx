import { useState } from 'react'


import FNOLForm from './components/FNOLForm'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div> <FNOLForm></FNOLForm> </div>
      
    </>
  )
}

export default App
