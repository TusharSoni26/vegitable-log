import "./Footer.css"

import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
            <h1>Veggies</h1>
            <p>Purchase Your Favourite Vegetables</p>
        </div>
        <div>
            <a href="/">
                <i className="fa-brands fa-square-facebook"></i>
            </a>
            <a href="/">
                <i className="fa-brands fa-square-instagram"></i>
            </a>
            <a href="/">
                <i className="fa-brands fa-square-twitter"></i>
            </a>
            <a href="/">
                <i className="fa-brands fa-square-behance"></i>
            </a>
        </div>
      </div>

      <div className="bottom">
        <div>
            <h4>Projects</h4>
            <a href="/">ChangeLog</a>
            <a href="/">Status</a>
            <a href="/">License</a>
            <a href="/">All Version</a>
        </div>
        <div>
            <h4>Community</h4>
            <a href="/">Github</a>
            <a href="/">Issues</a>
            <a href="/">Project</a>
            <a href="/">Twitter</a>
        </div>
        <div>
            <h4>Help</h4>
            <a href="/">Support</a>
            <a href="/">TroubleShooting</a>
            <a href="/">Contact us</a>
        </div>
      </div>
    </div>
  )
}

export default Footer
