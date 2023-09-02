import React, { useState } from 'react'
import "./Product.css"

const Product = (props) => {
    const [quantity, setQuantity] = useState(0);
    const [cartItems, setCartItems] = useState([]);
    function decrement() {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    }
    function increment() {
        setQuantity(quantity + 1);
    }

    const handleAddToCart = async () => {
        const productData = {
            email_customer: localStorage.getItem("userEmail"),
            email_seller: props.email,
            name: props.title,
            quantity: quantity,
            price: props.price,
            description: props.desc,
            image: props.image
        };
        setCartItems([...cartItems, productData]);

        let res = await fetch("/customer/addCart", {
            // mode: 'no-cors',
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(productData)
        });

        if(res.status == 200){
            console.log("add to cart success");
        }

        // console.log(productData);
    }

    return (
        <div className='product-container'>
            <div className='product-image'>
                <img src="images/img1.jpg" className="" />
            </div>
            <h1 id='pro-title'>{props.title}</h1>
            <p id='pro-desc'>{props.desc}</p>
            <p id='pro-price'>Rs. {props.price}</p>
            <span className='quantity-cont'>
                <button className='inc-dec' onClick={decrement}>-</button>
                <p id='pro-quant'>{quantity}</p>
                <button className='inc-dec' onClick={increment}>+</button>
            </span>
            <button className='addToCart' onClick={handleAddToCart}>Add to Cart</button>
        </div>
    )
}

export default Product
