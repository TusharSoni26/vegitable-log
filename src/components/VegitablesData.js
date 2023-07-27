import "./Vegitable.css"

import React from 'react'

const VegitablesData = (props) => {
  return (
    <div className="v-card">
      <div className="v-image">
        <img src={props.image} alt="vegitable-image" />
      </div>
      <h4>{props.heading}</h4>
      <p>{props.text}</p>
    </div>
  )
}

export default VegitablesData
