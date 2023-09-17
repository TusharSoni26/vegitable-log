import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./ProfileLogo.css"

const ProfileLogo = () => {
  const [click, setClick] = useState(false);
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  function handleClick() {
    setClick(!click);
    setUserName(localStorage.getItem("userName"));
    // console.log(userName);
  }

  function handleOrderPage() {
    navigate("/orders");
  }

  async function handleLogout() {
    setClick(false);
    localStorage.setItem("isLoggedIn", false);
    localStorage.removeItem("userEmail");
    navigate("/auth");

    const res = await fetch("/customer/logout", {
      method: "GET",
      headers: {}
    });

    if(res.status == 200){
      console.log("logout Success");
    }
    // console.log(res)
  }
  return (
    <div>
      <div className="user-pic" onClick={handleClick}>
        <i className='fa-solid fa-user fa-xl'></i>
      </div>
      {/* <img src='images/my_pic.jpeg' className='user-pic' onClick={handleClick}/> */}
      <div className={click ? "sub-menu-wrap open-menu" : "sub-menu-wrap"}>
        <div className='sub-menu'>
          <div className='user-info'>
            <div className="user-pic">
              <i className='fa-solid fa-user fa-xl'></i>
            </div>
            <h2>{userName}</h2>
          </div>
          <hr />
          <div className='sub-menu-link' onClick={handleOrderPage}>
            <i class="fa-solid fa-key"></i>
            <p>Your Orders</p>
            <span>{'>'}</span>
          </div>
          <div className='sub-menu-link'>
            <i class="fa-solid fa-passport"></i>
            <p>Update Password</p>
            <span>{'>'}</span>
          </div>
          <div className='sub-menu-link' onClick={handleLogout}>
            <i class="fa-solid fa-right-from-bracket"></i>
            <p>Log Out</p>
            <span>{'>'}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileLogo
