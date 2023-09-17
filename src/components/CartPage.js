import React, { useEffect, useState } from 'react'
import CartProduct from "./CartProduct";
import Spinner from "./Spinner";
import "./CartPage.css"
import { computeHeadingLevel } from '@testing-library/react';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
  const [cartData, setCartData] = useState();
  const [loading, setLoading] = useState(true);
  const [amount, setAmount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    getCartData();
  }, [])

  async function getCartData() {
    const userEmail = localStorage.getItem("userEmail");
    const url = "https://veggies-xzv7.onrender.com/customer/cart/" + userEmail;
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {}
      });

      if (!response.ok) {
        throw new Error("Failed to fetch cart data");
      }

      const data = await response.json();
      setCartData(data);

      // Calculate the total amount
      const totalAmount = data.reduce((total, item) => {
        const subtotal = item.quantity * item.price;
        return total + subtotal;
      }, 0);

      setAmount(totalAmount);

      setLoading(false);
      // console.log(typeof(cartData));
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }

  const handlereq = async(data) => {
    console.log(data);
    let res = await fetch("https://veggies-xzv7.onrender.com/customer/order", {
      // mode: 'no-cors',
      method:"POST",
      headers:{'content-type':'application/json'},
      body:JSON.stringify(data)
    });

    if(res.status == 200){
      console.log("order successs");
    }
  }

  const handleUpdateQuant = async(data) =>{
    const schemaData = {"email":data.email_seller, "name":data.name, "QuantitySold":data.Quantity };
    // console.log(schemaData);
    let res = await fetch("https://veggies-xzv7.onrender.com/seller/products/updateRemainingQuantity", {
      method:"POST",
      headers:{'content-type':'application/json'},
      body:JSON.stringify(schemaData)
    });

    if(res.status == 200){
      console.log("quantity updated success");
    }
  }

  const handleCheckout = async() => {
    localStorage.setItem("totalAmount", "Rs "+amount);
    {cartData.map((item, index) => {
      const data = {"email_customer": localStorage.getItem("userEmail"),
      "email_seller" : item.email_seller,
      "name":item.name,
      "Quantity": item.quantity,
      "price" : item.price
    };
    handlereq(data);
    handleUpdateQuant(data);

    })}

    navigate("/payment");
  }

  const handleQuantityChange = (newAmount) => {
    // console.log("The new amount in CartPage is ", newAmount);
    setAmount(parseInt(newAmount));
    // localStorage.setItem("totalAmount", amount);
  }

  const getAmountValue = () => {
    // console.log("GetAmountFunctionCalled")
    return amount;
  }

  if (loading) {
    return (<Spinner speed={2} customText={"Loading..."} />)
  }
  if(Object.keys(cartData).length == 0){
    return (
      <div className='cart-container'>
        <div className='show-product'>
          <h1>Your Cart Is Currently Empty</h1>
          <h1>Add Items to Your Cart</h1>
        </div>
        <div className='checkout-sidebar'>
          <span className='header-sidebar-span'>
            <i class="fa-regular fa-circle-check" style={{color: "#7ba800"}}></i>
            <p className='header-line'>Your order is eligible for FREE Delivery. Select this option at checkout.</p>
          </span>
          <hr />
          <span className='sidebar-span'>
            <p>Prices(Your Items) </p>
            <p>₹{amount}</p>
          </span>
          <hr />
          <span className='sidebar-span'>
            <p>Delivery Charges</p>
            <p>Free</p>
          </span>
          <hr />
          <span className='sidebar-span imp-bold'>
            <p>Total Amount</p>
            <p>₹{amount}</p>
          </span>
          <hr />
  
          <button className='checkout-button' onClick={handleCheckout}>Proceed to Buy</button>
        </div>
      </div>
    )
  }

  return (
    <div className='cart-container'>
      <div className='show-product'>
        {cartData.map((item, index) => {
          return (
            <CartProduct key={index} title={item.name} image={item.image} desc={item.description} price={item.price} email={item.email} quantity={item.quantity}
              onQuantityChange={(tempAmount) => handleQuantityChange(tempAmount)}
              getAmount={() => getAmountValue()} />
          )
        })}
      </div>
      <div className='checkout-sidebar'>
        <span className='header-sidebar-span'>
          <i class="fa-regular fa-circle-check" style={{color: "#7ba800"}}></i>
          <p className='header-line'>Your order is eligible for FREE Delivery. Select this option at checkout.</p>
        </span>
        <hr />
        <span className='sidebar-span'>
          <p>Prices(Your Items) </p>
          <p>₹{amount}</p>
        </span>
        <hr />
        <span className='sidebar-span'>
          <p>Delivery Charges</p>
          <p>Free</p>
        </span>
        <hr />
        <span className='sidebar-span imp-bold'>
          <p>Total Amount</p>
          <p>₹{amount}</p>
        </span>
        <hr />

        <button className='checkout-button' onClick={handleCheckout}>Proceed to Buy</button>
      </div>
    </div>
  )
}

export default CartPage
