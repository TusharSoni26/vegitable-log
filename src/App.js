import "./styles.css"
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './routes/Home'
import Services from './routes/Services'
import Cart from './routes/Cart'
import About from './routes/About'
import Contact from './routes/Contact'

const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/service' element={<Services />}/>
        <Route path='/cart' element={<Cart />}/>
      </Routes>
    </div>
  )
}

export default App
