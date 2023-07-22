import './PricingCardStyles.css'

import React from 'react'
import { Link } from 'react-router-dom'



const PricingCard = () => {
  return (
    <div className='pricing'>
    <div className='card-container'>
     <div className='card1'>
      <h3> Medium </h3>
       <span className='bar'></span>
       <p className='btc'>$ 200</p>
       <p> 90 Days </p>  
       <p> 2 session per day</p>
       <p> Transformation Guaranteed </p>
       <p> Startig Calesthenics </p>
       <Link to="/contact" className='btn'> PURCHASE NOW</Link>
     </div>

     <div className='card2'>
      <h3> Basic </h3>
       <span className='bar'></span>
       <p className='btc'>$ 100</p>
       <p> 60 Days </p>
       <p> 1 session per day</p>
       <p> Better than Before </p>
       <p> For Beginners </p>
       <Link to="/contact" className='btn'> PURCHASE NOW</Link>
     </div>

     <div className='card3'>
      <h3> Advanced </h3>
       <span className='bar'></span>
       <p className='btc'>$ 400</p>
       <p> 120 Days </p>
       <p> 2 session per day + Meal Plan</p>
       <p> Transformation Guaranteed </p>
       <p> Calesthenics Pro </p>
       <Link to="/contact" className='btn'> PURCHASE NOW</Link>
     </div>
    </div>
    </div>
  )
}

export default PricingCard
