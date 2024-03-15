import React from 'react'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

const App = () => {
  
  return (
    <div>
      <h1 className='text-xl text-center font-bold mt-3 leading-tighter tracking-tight'>What TO-DO</h1>
      
      <AddTodo/>
      <Todos/>
    </div>
  )
}

export default App