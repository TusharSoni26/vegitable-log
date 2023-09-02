import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./ProfileLogo.css"

const ProfileLogo = () => {
    const [click, setClick] = useState(false);
    const navigate = useNavigate();

    function handleClick(){
        setClick(!click);
    }

    function handleLogout(){
        setClick(false);
        localStorage.setItem("isLoggedIn", false);
        localStorage.removeItem("userEmail");
        navigate("/auth");
    }
  return (
    <div>
      <img src='images/my_pic.jpeg' className='user-pic' onClick={handleClick}/>
      <div className={click?"sub-menu-wrap open-menu":"sub-menu-wrap"}>
        <div className='sub-menu'>
            <div className='user-info'>
                <img src='images/my_pic.jpeg' className='user-pic' />
                <h2>Tushar Soni</h2>
            </div>
            <hr />
            <div className='sub-menu-link'>
                <i class="fa-solid fa-key"></i>
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
