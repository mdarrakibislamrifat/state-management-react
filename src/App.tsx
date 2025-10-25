
import { useState } from 'react'
import './App.css'
import CounterWithClassComponent from './components/CounterWithClassComponent'
import CounterWithFunctionalComponent from './components/CounterWithFunctionalComponent'

function App() {

  const [count, setCount] = useState(0)


  return (
    <div className='m-10 p-10 border border-red-500'>
      <h1>Count : {count}</h1>
      {/* <CounterWithClassComponent /> */}
      <CounterWithFunctionalComponent count={count} setCount={setCount} />
    </div>
  )
}

export default App
