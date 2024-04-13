import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>Nourish your body with nature's bounty</h1>
        <p>
        To grow evergreen vegetables in 
        commercial quantities that are 
        organic and promote organic 
        agriculture. To offer a fantastic,
        first-rate, and secure environment for the growing, storing and distributing vegetables.
        </p>
        <button className='btn'>Explore more <img src={dark_arrow} alt="" /> </button>
      </div>
    </div>
  )
}

export default Hero
