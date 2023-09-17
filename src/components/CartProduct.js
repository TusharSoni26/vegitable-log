import React, { useEffect, useState } from 'react'
import "./CartProduct.css"

const CartProduct = (props) => {
    const [quantity, setQuantity] = useState(props.quantity);

    function decrement() {
        if (quantity > 0) {
            setQuantity(quantity - 1);
            let currAmount = props.getAmount();
            currAmount -= props.price;
            props.onQuantityChange(currAmount);
        }
    }
    function increment() {
        setQuantity(quantity + 1);
        let currAmount = props.getAmount();
        currAmount += props.price;
        props.onQuantityChange(currAmount);
    }

    function handleRemoveFromCart(){
        const removeData = {"email":localStorage.userEmail, "name":props.title};
        console.log(removeData);

        let res = fetch("https://veggies-xzv7.onrender.com/customer/deleteCart", {
            // mode: 'no-cors',
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(removeData)
        });
        window.location.reload();
        console.log(res.status)
        console.log(res.message)
        if(res.status == 200){
            console.log("delete from cart success");
        }
    }
    return (
        <div className='cart-product-container'>
            <div className='cart-product-image'>
                <img src={"images/" + props.title + ".jpg"} className="" />
            </div>
            <div className='cart-product-info'>
                <h1 className='cart-pro-title'>{props.title}</h1>
                <p className='cart-pro-desc'>{props.desc}</p>
                <p className='cart-pro-price'>Rs. {props.price}</p>
                <span className='quantity-cont'>
                    <button className='cart-inc-dec' onClick={decrement}>-</button>
                    <p id='cart-pro-quant'>{quantity}</p>
                    <button className='cart-inc-dec' onClick={increment}>+</button>
                </span>
            </div>
            <div className='cart-button'>
                <button className='RemoveFromCart' onClick={handleRemoveFromCart}><i class="fa-solid fa-trash fa-2xl" style={{color: "#ef0629"}}></i></button>
            </div>
        </div>
    )
}

export default CartProduct
