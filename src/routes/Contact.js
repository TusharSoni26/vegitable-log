import React from 'react'
import Footer from '../components/Footer'
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import ContactForm from "../components/ContactForm"

const Contact = () => {
  return (
    <div>
      <Navbar />
      {/* <Hero 
        cName="hero"
        heroImg="https://plus.unsplash.com/premium_photo-1686529591640-876ef71ab2ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjF8fHZlZ2V0YWJsZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
        title="Contact Us"
        text = ""
        url = "/"
        btnClass="show"
        btnText = "Subscribe to NewsLetter"
       /> */}
      <ContactForm />
      <Footer />
    </div>
  )
}

export default Contact