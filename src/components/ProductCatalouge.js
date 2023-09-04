import "./ProductCatalouge.css";
import { useState, useEffect } from "react";
import Spinner from "./Spinner";
// import { ProductData } from "./ProductData";

import React from 'react';
import Product from "./Product";

const ProductCatalouge = () => {
  const [productData, setProductData] = useState();
  const [loading, setLoading] = useState(true);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(500);
  const [filters, setFilters] = useState(false);
  const [filterData, setFilterData] = useState([]);
  const [form, setForm] = useState({
    name: "",
    category: "",
  });

  useEffect(() => {
    getProductData();
  }, [])

  async function getProductData() {
    setLoading(true);
    await fetch("/seller/products", {
      method: "GET",
      headers: {
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setProductData(data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const applyFilters = async(e) => {
    e.preventDefault();
    setLoading(true);
    setFilters(true);

    const formData = new FormData(e.target);
    const filterrrData = {
      name: formData.get("name"),
      category: formData.get("category"),
      minPrice: minPrice,
      maxPrice: maxPrice,
    };

    // console.log(filterData);
    await fetch("seller/products/filter", {
      method:"POST",
          headers:{'content-type':'application/json'},
          body:JSON.stringify(filterrrData)
    })
      .then((response) => response.json())
      .then((data) => {
        setFilterData(data);
        setLoading(false);
        // console.log(data);
      })
      .catch((error) => console.log(error));
  }

  const resetFilters = () => {
    setFilters(false);
    setFilterData([]);
  }

  if (loading) {
    return (<Spinner speed={5} customText={"Loading..."} />)
  }

  if(filters){
    return(
      <div className="main-container">
      <div className="sidebar">
        <form className="filter-form" onSubmit={applyFilters}>
          <h3>Filters</h3>
          <span className="filter-form-span">
            <label for="name" className="filter-label">
              Name:
            </label>
            <input type="text" name="name" onChange={handleChange}/>
          </span>
          <span className="filter-form-span">
            <label for="category" className="filter-label">
              Category:
            </label>
            <input type="text" name="category" onChange={handleChange}/>
          </span>
          <span className="filter-form-span">
            <label for="minPrice">
              Min Price
            </label>
            <span className="filter-slider">
              <input
                type="range" min="0" max="500" name="minPrice" value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
              />
              <p id="rangeValue">{minPrice}</p>
            </span>
          </span>
          <span className="filter-form-span">
            <label for="maxPrice">
              Max Price
            </label>
            <span className="filter-slider">
              <input
                type="range" min="0" max="500" name="maxPrice" value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
              />
              <p id="rangeValue">{maxPrice}</p>
            </span>
          </span>
          <button className="apply-button">Apply Filters</button>
        </form>
          <button className="reset-button" onClick={resetFilters}>Reset Filters</button>
      </div>
      <div className="product-cat-container">
        {filterData.map((item, index) => {
          return (
            <Product key={index} title={item.name} image={item.image} desc={item.description} price={item.price} email={item.email} />
          )
        })}
      </div>
    </div>
    )
  }

  return (
    <div className="main-container">
      <div className="sidebar">
        <form className="filter-form" onSubmit={applyFilters}>
          <h3>Filters</h3>
          <span className="filter-form-span">
            <label for="name" className="filter-label">
              Name:
            </label>
            <input type="text" name="name" onChange={handleChange}/>
          </span>
          <span className="filter-form-span">
            <label for="category" className="filter-label">
              Category:
            </label>
            <input type="text" name="category" onChange={handleChange}/>
          </span>
          <span className="filter-form-span">
            <label for="minPrice">
              Min Price
            </label>
            <span className="filter-slider">
              <input
                type="range" min="0" max="500" name="minPrice" value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
              />
              <p id="rangeValue">{minPrice}</p>
            </span>
          </span>
          <span className="filter-form-span">
            <label for="maxPrice">
              Max Price
            </label>
            <span className="filter-slider">
              <input
                type="range" min="0" max="500" name="maxPrice" value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
              />
              <p id="rangeValue">{maxPrice}</p>
            </span>
          </span>
          <button className="apply-button">Apply Filters</button>
        </form>
          <button className="reset-button" onClick={resetFilters}>Reset Filters</button>
      </div>
      <div className="product-cat-container">
        {productData.map((item, index) => {
          return (
            <Product key={index} title={item.name} image={item.image} desc={item.description} price={item.price} email={item.email} />
          )
        })}
      </div>
    </div>
  )
}

export default ProductCatalouge
