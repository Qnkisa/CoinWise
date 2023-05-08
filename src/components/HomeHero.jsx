import React,{useState} from 'react'
import {Link} from "react-router-dom"

export default function HomeHero() {

  const handleMarketClick = () => {
    window.scrollTo({
      top: document.getElementById('home-market').offsetTop,
      behavior: 'smooth'
    });
  };

  return (
    <section className="home-hero" id='home-hero'>
        <div className="home-hero-helper">
            <h1><span>Track</span> and <span>buy</span> crypto currencies</h1>
            <a href="#" onClick={handleMarketClick}>View Prices</a>
            <div className="home-hero-currencies">
                <img src="/bitcoin-logo.png" alt="" />
                <img src="/ethereum-logo.png" alt="" />
            </div>
       </div>
    </section>
  )
}
