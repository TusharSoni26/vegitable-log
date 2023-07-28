import { Component } from "react";
import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems";
import "./Navbar.css"

import React from 'react'

class Navbar extends Component {
    state = { clicked: false };
    handleclick = () => {
        this.setState({ clicked: !this.state.clicked })
    }
    render() {
        return (
            <nav className="NavbarItems">
                <h1 className="navbar-logo">Veggies</h1>

                <div className="menu-icons" onClick={this.handleclick}>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>

                <ul className={this.state.clicked? "nav-menu active":"nav-menu"}>
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
                    <Link to="/auth">
                        <button>Sign Up</button>
                    </Link>
                </ul>
            </nav>
        );
    }
}

export default Navbar;