import React from 'react'
import bepositive from '../assets/bepositive.png'
import './BePositiveBanner.css';
import Menu from './Menu';
const BePostiveBanner = () => {
  return (
    <section className="dark-bg">
        <Menu/>
        <img className="bepositive" src={bepositive.src}/>
      
    </section>

  )
}

export default BePostiveBanner;
