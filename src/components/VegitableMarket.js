import React from 'react'
import "./vegy.css"
import VegyMarketData from './VegyMarketData'

const VegitableMarket = () => {
    return (
        <div className='vegitables-market'>
            <div className='extra'>
                <h1>Popular Vegetable Markets</h1>
                <p>Browse Some Popular Vegetable Markets of Country</p>
            </div>

            <VegyMarketData
                cName="first-desc"
                heading="Azadpur Mandi, Delhi"
                text="Talk about India’s top sabzi mandis and the Azadpur mandi of Delhi would be the first anyone would name. Azadpur mandi is the country’s and Asia’s largest fruit and vegetable mandi. Every day, 4000 to 5000 trucks of fruits and vegetables are bought here by farmers from different parts of the country. This market is also known as ‘Choudhary Hira Singh Wholesale Vegetable Market, Azadpur, Delhi’."
                url1="https://images.unsplash.com/photo-1579113800032-c38bd7635818?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dmVnZXRhYmxlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                url2="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRppffz2Fzp-Kf9ErUxqcaYgxArLUJz0Ml15g&usqp=CAU"
            />
            <VegyMarketData
                cName="first-desc-reverse"
                heading="Ghazipur Mandi, Delhi"
                text="After Azadpur mandi comes another important sabzi mandi of Delhi – Ghazipur mandi. Ghazipur mandi is in close proximity to the Ghaziabad border of Uttar Pradesh. Ghazipur Mandi is spread over about 38 acres. There are around 600 shops and 500 vendors here. About one lakh people visit this vegetable mandi on a daily basis. The market is popularly known as the ‘Fruit and Vegetable Market, Ghazipur’. "
                url1="https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dmVnZXRhYmxlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                url2="https://plus.unsplash.com/premium_photo-1675798983878-604c09f6d154?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHZlZ2V0YWJsZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
            />
        </div>
    )
}

export default VegitableMarket
