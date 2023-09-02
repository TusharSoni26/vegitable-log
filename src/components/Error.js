import React from 'react'
import { Link } from 'react-router-dom'
import "./Error.css"
import Navbar from './Navbar'

const Error = () => {
  return (
    <>
    <Navbar />
    <div className='error-container'>
      <h1>404</h1>
      <h2>UH OH! You're lost.</h2>
      <p>The page you are looking for, does not exist. How you got here is a mystery. But you can click the button below to go back to the homepage.</p>
      <Link to="/" className="show">
        Home
      </Link>
    </div>
    </>
  )
}

export default Error
