import { useState } from 'react'
import './App.css'
import Mycomponent from './component/Mycomponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>Hello world</div>
      < Mycomponent />
    </>
  )
}

export default App
