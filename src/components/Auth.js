import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Auth.css';
import Spinner from './Spinner';

const initialState = { name: '', email: '', password: '', conformPassword: '' };

const Auth = () => {
  const [form, setForm] = useState(initialState);
  const [isSignUp, setIsSignUp] = useState(false);
  const [loading, setLoading] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [uName, setUName] = useState("");
  const navigate = useNavigate();

  var strClass = "form-group";
  const findName = async() => {
    const url = "https://veggies-xzv7.onrender.com/customer/details/" + localStorage.getItem("userEmail");
    const response = await fetch(url, {
      method: "GET",
      headers: {}
    });
// console.log(url)
    if (response.ok) {
      
    const data = await response.json();
    localStorage.setItem("userName", data.name);
    // console.log(data);
    }
  }

  const switchMode = (e) => {
    e.preventDefault();

    setForm(initialState);
    setIsSignUp((prevIsSignUp) => !prevIsSignUp);
    setShowPassword(false);
  }

  const handleChange = (e) => {
    const {name, value} = e.target;
    setForm({...form, [name]:value});
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    setClicked(true);
    const allFormValue = {"name": form.fullName, "email":form.email, "password":form.password, "confirmPassword":form.confirmPassword}

    if(isSignUp){
      try{
        let res = await fetch("https://veggies-xzv7.onrender.com/customer/register", {
          // mode: 'no-cors',
          method:"POST",
          headers:{'content-type':'application/json'},
          body:JSON.stringify(allFormValue)
        });

        if(res.status == 200){
          setLoading(false);
          localStorage.setItem("isLoggedIn", true);
          localStorage.setItem("userEmail", allFormValue.email);
          localStorage.setItem("userName", allFormValue.name);
          navigate('/');
        }
        else{
          localStorage.setItem("isLoggedIn", false);
        }
      } catch(error) {
        console.log(error.message);
      }
    }
    else{
      const loginFormValue = {"email":form.email, "password":form.password}
      // console.log(loginFormValue);
      try{
        let res = await fetch("https://veggies-xzv7.onrender.com/customer/login", {
          // mode: 'no-cors',
          method:"POST",
          headers:{'content-type':'application/json'},
          body:JSON.stringify(loginFormValue)
        });

        if(res.status == 200){
          setLoading(false);
          localStorage.setItem("isLoggedIn", true);
          localStorage.setItem("userEmail", allFormValue.email);

          findName();
          navigate('/');
        }
        else{
          localStorage.setItem("isLoggedIn", false);
        }
      } catch(error) {
        console.log(error.message);
      }
    }
  }

  const handleShowPassword = () => setShowPassword(!showPassword);

  if(loading && clicked){
    return (<Spinner speed={1} customText={"Loading..."}/>);
  }

  return (
    <div className='wrapper'>
      <div className='container'>
        <h1>{isSignUp ? 'Sign Up' : 'Sign In'}</h1>
        <div className='lock-icon'>
        <i className="fa-solid fa-lock fa-2xl"></i>
        </div>
        <form className='form-ele' method='POST' onSubmit={handleSubmit}>
          {isSignUp && (
            <div className='first-row'>
              <div className="form-group">
                <input name="fullName" className='form-input' onChange={handleChange} autoFocus/>
                <label>Full Name*</label>
              </div>
            </div>
          )
          }
          <div className='form-group'>
            <input name="email" className='form-input' type="email" onChange={handleChange} />
            <label>Email*</label>
          </div>
          <div className='form-group spe'>
            <input name="password" className='form-input' type={showPassword ? 'text' : 'password'} onChange={handleChange}/>
            <label>Password*</label>
            <div className='icon-eye' onClick={handleShowPassword}>
              <i className={showPassword ? "fa-solid fa-eye-slash" : "fa-solid fa-eye"} ></i>
            </div>
          </div>
          {
            isSignUp && (
              <div className='form-group'>
                <input name='confirmPassword' className='form-input' type="password" onChange={handleChange}/>
                <label>Confirm Password*</label>
              </div>
            )
          }

          <button type='submit' className='form-btn signin'>
            {isSignUp?"SignUp":"SignIn"}
          </button>
          {isSignUp?"":
          <button className='form-btn  acc-change'>
            Forgot Password?
          </button>}
          <button onClick={switchMode} className='form-btn  fg-pass'>
            {isSignUp ? 'Already have an account? Sign In' : "Dont't have an account? Sign Up"}
          </button>
        </form >
      </div >
    </div>
  )
}

export default Auth
