import React from 'react'
import Navbar from "../components/Navbar"
import Hero from '../components/Hero'
import VegitableMarket from '../components/VegitableMarket'
import Vegitables from '../components/Vegitables'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero 
        cName="hero"
        heroImg="https://images.unsplash.com/photo-1518843875459-f738682238a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dmVnZXRhYmxlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
        title="Your Health Our Priority"
        text = "Start Purchasing Vegetable Below"
        url = "/"
        btnClass="show"
        btnText = "Purchase"
       />
       <VegitableMarket />
       <Vegitables />
       <Footer />
    </div>
  )
}

export default Home
