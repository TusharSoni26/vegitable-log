import React from 'react'
import "./OrderProduct.css"
import { ImageUrl } from './ImageUrl'

const OrderProduct = (props) => {
    return (
        <div className='order-product-container'>
            <div className='order-product-image'>
                <img src={ImageUrl[props.title]} className="" />
            </div>
            <div className='order-product-info'>
                <h1 className='order-pro-title'>{props.title}</h1>
                <span className='order-quant-amount'>
                <p className='order-pro-desc'>Quantity in Kgs <span className='special-item' >{props.quantity}</span></p>
                <p className='order-pro-price'>Price Rs. <span className='special-item' >{props.price} </span> /kg</p>
                </span>
                <p className='order-pro-total-price'>Total amount Payable Rs. <span className='special-item' >{props.quantity * props.price}</span></p>
            </div>
        </div>
    )
}

export default OrderProduct
