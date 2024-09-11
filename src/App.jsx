// import { useState } from 'react'
import {Header} from './header.jsx'

function App() {
 
  const filter = ()=>{
    <button className='bg-red'>ChangeColor</button>
  }
  return (
    <>
      <Header
      filter = {filter} />
    </>
  )
}

export default App
