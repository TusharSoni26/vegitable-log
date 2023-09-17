import React, { useState } from 'react';
import axios from 'axios';
import './PredictionML.css';
import Spinner from "./Spinner";

axios.defaults.baseURL = 'https://pricepredict-48oq.onrender.com/';
export default function PredictionML() {
  const [name, setName] = useState("");
  const [season, setseason] = useState("");
  const [availability, setAvailability] = useState("");
  const [demand, setDemand] = useState("");
  const [state, setState] = useState("");
  const [output, setOutput] = useState();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name === '' || state === '' || demand === '' || season === '' || availability === '') {
      setOutput('Please Select all Fields.');
      return;
    }
    const data = {
      id: "64e55f74b4ab1204db3dc142",
      name: name,
      season: season,
      state: state,
      availability: availability,
      demand: demand
    }
    const submitedData = await axios.put('/users', data);
    console.log(submitedData);
    setLoading(true);
    fetch();

    console.log(output);
  }
  async function fetch() {
    const data = await axios.get('/users');
    console.log(data.data[0].output)
    setLoading(false);
    setOutput(data.data[0].output);
  }

  if (loading) {
    return (<Spinner speed={2} customText={"Loading..."} />)
  }
  return (
    <div className='outer-predict'>
      <div className='container-predict'>
        <div className='row-predict'>
          <h1 className='predict-h1'>Veggies</h1>
          <h2 className='predict-h2'>Price Predictor</h2>
        </div>
        <form>
          <div className='row-predict main-predict'>
            <div className='col-predict'>
              <span className='cont-span'>Vegetable Name </span>
              <select onChange={(e) => setName(e.target.value)}>
                <option value={""} name='name' selected>select</option>
                <option value={"0"} name='name'>Potato</option>
                <option value={"1"} name='name'>Onion</option>
                <option value={"2"} name='name'>Tomato</option>
                <option value={"3"} name='name'>Lady Finger</option>
                <option value={"4"} name='name'>Ginger</option>
              </select>
            </div>
            <div className='col-predict'>
              <span className='cont-span'>Season</span>
              <select onChange={(e) => setseason(e.target.value)}>
                <option value={""} name='season'>select</option>
                <option value={"0"} name='season'>Winter</option>
                <option value={"1"} name='season'>Spring</option>
                <option value={"2"} name='season'>Summer</option>
                <option value={"3"} name='season'>Monsoon</option>
                <option value={"4"} name='season'>Autumn</option>
                <option value={"5"} name='season'>Pre-Winter</option>
              </select>
            </div>
            <div className='col-predict'>
              <span className='cont-span'>Availability</span>
              <select onChange={(e) => setAvailability(e.target.value)}>
                <option value={""} name='availability'>select</option>
                <option value={"0"} name='availability'>Low</option>
                <option value={"1"} name='availability'>Moderate</option>
                <option value={"2"} name='availability'>High</option>
              </select>
            </div>
            <div className='col-predict'>
              <span className='cont-span'>Demand</span>
              <select onChange={(e) => setDemand(e.target.value)}>
                <option value={""} name='demand'>select</option>
                <option value={"0"} name='demand'>Low</option>
                <option value={"1"} name='demand'>Moderate</option>
                <option value={"2"} name='demand'>High</option>
              </select>
            </div>
            <div className='col-predict'>
              <span className='cont-span'>City</span>
              <select onChange={(e) => setState(e.target.value)}>
                <option value={""} name='demand'>select</option>
                <option value={"0"} name='demand'>Delhi</option>
                <option value={"1"} name='city'>Dehradun</option>
              </select>
            </div>
            <div className='col-predict' style={{ justifyContent: 'right' }}>
              <button className='btn-predict' onClick={handleSubmit}>Predict</button>
            </div>
          </div>
        </form>
      </div>
      <div className='hello-predict'>
        {(output === 'Please Select all Fields.' && output) || (output && `${(parseFloat(output).toFixed(2))} Rs/Kg`)}
      </div>
    </div>
  )
}