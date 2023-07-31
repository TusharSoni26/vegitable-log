import React, { useState } from 'react'
import './Auth.css';

const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };

const Auth = () => {
  const [form, setForm] = useState(initialState);
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  var strClass = "form-group";

  const switchMode = (e) => {
    e.preventDefault();

    setForm(initialState);
    setIsSignUp((prevIsSignUp) => !prevIsSignUp);
    setShowPassword(false);
  }

  function handleChange(e){
    console.log(e.target.value);
  }

  const handleShowPassword = () => setShowPassword(!showPassword);

  return (
    <div className='wrapper'>
      <div className='container'>
        <h1>{isSignUp ? 'Sign Up' : 'Sign In'}</h1>
        <div className='lock-icon'>
        <i className="fa-solid fa-lock fa-2xl"></i>
        </div>
        <form className='form-ele'>
          {isSignUp && (
            <div className='first-row'>
              <div className="form-group">
                <input name="firstName" className='form-input' onchange={handleChange} autoFocus/>
                <label>First Name*</label>
              </div>
              <div className='form-group'>
                <input name="lastName" className='form-input'  onchange={handleChange} />
                <label>Last Name*</label>
              </div>
            </div>
          )
          }
          <div className='form-group'>
            <input name="email" className='form-input' type="email" onchange={handleChange} />
            <label>Email*</label>
          </div>
          <div className='form-group spe'>
            <input name="password" className='form-input' type={showPassword ? 'text' : 'password'} onchange={handleChange}/>
            <label>Password*</label>
            <div className='icon-eye' onClick={handleShowPassword}>
              <i className={showPassword ? "fa-solid fa-eye-slash" : "fa-solid fa-eye"} ></i>
            </div>
          </div>
          {
            isSignUp && (
              <div className='form-group'>
                <input name='confirmPassword' className='form-input' type="password" onchange={handleChange}/>
                <label>Confirm Password*</label>
              </div>
            )
          }

          <button type='submit' className='form-btn signin'>
            {isSignUp?"SignUp":"SignIn"}
          </button>

          <button onClick={switchMode} className='form-btn  acc-change'>
            {isSignUp ? 'Already have an account? Sign In' : "Dont't have an account? Sign Up"}
          </button>
        </form >
      </div >
    </div>
  )
}

export default Auth
