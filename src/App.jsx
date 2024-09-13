// import { useState } from 'react'
import {Header} from './header.jsx'
import { Hero } from './hero.jsx'

function App() {
 
  const filter = ()=>{
    <button className='bg-red'>ChangeColor</button>
  }
  return (
    <>
      <Header
      filter = {filter} />
      <Hero/>
    </>
  )
}

export default App
