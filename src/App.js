import "./styles.css"
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './routes/Home'
import Services from './routes/Services'
import Cart from './routes/Cart'
import About from './routes/About'
import Contact from './routes/Contact'
import Signin from "./routes/Signin"
import Catalouge from "./routes/Catalouge"
import Orders from "./routes/Orders"
import Payment from "./routes/Payment"
import Error from "./components/Error"

const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/service' element={<Services />}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/auth' element={<Signin />}/>
        <Route path='/catalouge' element={<Catalouge />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/Payment' element={<Payment />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </div>
  )
}

export default App
