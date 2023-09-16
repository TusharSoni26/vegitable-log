import "./OrderPage.css";
import React, { useEffect, useState } from 'react'
import OrderProduct from "./OrderProduct";
import Spinner from "./Spinner";

const OrderPage = () => {
  const [orderData, setOrderData] = useState();
  const [loading, setLoading] = useState(true);
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    getOrderData();
  }, [])

  async function getOrderData() {
    const userEmail = localStorage.getItem("userEmail");
    const url = "customer/orderDetails/" + userEmail;
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {}
      });

      if (!response.ok) {
        throw new Error("Failed to fetch cart data");
      }

      const data = await response.json();
      setOrderData(data);
      console.log(data);

      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }


  if (loading) {
    return (<Spinner speed={2} customText={"Loading..."} />)
  }

  return (
    <div className='order-container'>
      <h1>Your Orders</h1>
      <div className='order-show-product'>
        {orderData.map((item, index) => {
          return (
            <OrderProduct key={index} title={item.name} image={item.image} desc={item.description} price={item.price} email={item.email} quantity={item.Quantity}/>
          )
        })}
      </div>
    </div>
  )
}

export default OrderPage

