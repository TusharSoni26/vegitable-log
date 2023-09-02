import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems";
import "./Navbar.css"

import React from 'react'
import ProfileLogo from "./ProfileLogo";


const Navbar = () => {
    const [isAuth, setIsAuth] = useState(false);
    const [state, setState] = useState(false);

    const handleclick = () => {
        setState(!state)
    }

    
    useEffect(() => {
        const isLoggedIn = localStorage.getItem("isLoggedIn");
        setIsAuth(isLoggedIn === "true");
    })


    return (
        <nav className="NavbarItems">
            <Link className="navbar-logo" to="/">
                <img className="nav-img" src="images/logo.jpeg" alt="logo" />
            </Link>

            <div className="menu-icons" onClick={handleclick}>
                <i className={state ? "fas fa-times" : "fas fa-bars"}></i>
            </div>

            <ul className={state ? "nav-menu active" : "nav-menu"}>
                {MenuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <Link className={item.cName} to={item.url}>
                                <i className={item.icon}>
                                </i>
                                {item.title}
                            </Link>
                        </li>
                    )
                })}

                {(isAuth)? <ProfileLogo /> : <Link to="/auth"><button className="nav-btn">Sign Up </button></Link>
                }

            </ul>
        </nav>
    );
}



export default Navbar;