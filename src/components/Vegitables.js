import "./Vegitable.css"

import React from 'react'
import VegitablesData from "./VegitablesData"

const Vegitables = () => {
  return (
    <div className="vegitables">
      <h1>Purchase Vegetables</h1>
      <p>Buy exoticaly fresh vegetables from below category</p>

      <div className="vegi-data">
        <VegitablesData 
            image="https://images.unsplash.com/photo-1586288415925-d7affaf2d1f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z3JlZW4lMjBsZWFmeSUyMHZlZ2V0YWJsZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
            heading="Leafy Vegetables"
            text="Leafy green vegetables, also known as leafy greens, are a group of vegetables that are primarily valued for their edible leaves. These greens are highly nutritious, providing essential vitamins, minerals, antioxidants, and dietary fiber, making them an important part of a healthy and balanced diet."
        />
        <VegitablesData 
            image="https://images.unsplash.com/photo-1614336215203-05a588f74627?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YnJvY29saXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
            heading="Flower Vegetables"
            text="Flower vegetables, also known as edible flowers or flowering vegetables, are a unique category of vegetables where the blossoms of certain plants are consumed as part of culinary dishes. These flowers not only add vibrant colors and aesthetic appeal to meals but also offer distinctive flavors that can range from sweet to tangy or even slightly spicy."
        />
        <VegitablesData 
            image="https://images.unsplash.com/photo-1528505086635-4c69d5f10908?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJvb3QlMjB2ZWdldGFibGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
            heading="Root Vegetables"
            text="Root vegetables are a diverse group of vegetables that are grown for their edible underground parts, which typically store essential nutrients and energy for the plant. These vegetables have been a crucial part of human diets for thousands of years, providing sustenance in various cultures and climates."
        />
      </div>
    </div>
  )
}

export default Vegitables