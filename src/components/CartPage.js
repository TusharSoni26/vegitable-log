import React, { useEffect, useState } from 'react'
import CartProduct from "./CartProduct";
import Spinner from "./Spinner";
import "./CartPage.css"

const CartPage = () => {
  const [cartData, setCartData] = useState();
  const [loading, setLoading] = useState(true);
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    getCartData();
  }, [])

  async function getCartData() {
    const userEmail = localStorage.getItem("userEmail");
    const url = "/customer/cart/" + userEmail;
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
      // console.log(data);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }

  const handleQuantityChange = (newAmount) => {
    // console.log("The new amount in CartPage is ", newAmount);
    setAmount(parseInt(newAmount));
  }

  const getAmountValue = () => {
    // console.log("GetAmountFunctionCalled")
    return amount;
  }

  if (loading) {
    return (<Spinner speed={2} customText={"Loading..."} />)
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

        <button className='checkout-button'>Proceed to Buy</button>
      </div>
    </div>
  )
}

export default CartPage
