import React,{useState,useEffect} from 'react'
import {Link} from "react-router-dom"
import { useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();

  const [nav,setNav] = useState(false)

  const handleNav = () => {
    setNav(prevValue => !prevValue);
  }

  useEffect(() => {
      return () => {
        setNav(false);
      };
    }, [location]);

    const handleMarketClick = () => {
      window.scrollTo({
        top: document.getElementById('home-market').offsetTop,
        behavior: 'smooth'
      });
    };

    const handleChooseClick = () => {
      window.scrollTo({
        top: document.getElementById('home-choose-us').offsetTop,
        behavior: 'smooth'
      });
    };

    const handleJoinClick = () => {
      window.scrollTo({
        top: document.getElementById('home-join').offsetTop,
        behavior: 'smooth'
      });
    };

  return (
    <header>
        <nav>
          <div className="nav-logo">
            <p>CoinWise</p>
          </div>
          <ul id="menu" className={nav ? "menu active" : "menu"}>
            <li>
              <a href="#" onClick={handleMarketClick}>Market</a>
            </li>
            <li>
              <a href="#" onClick={handleChooseClick}>Choose us</a>
            </li>
            <li>
              <a href="#" onClick={handleJoinClick}>Join</a>
            </li>
          </ul>
          <div className="nav-socials">
            <div className="nav-social">
              <a href="https://www.instagram.com/" target='_blank'>
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
            </div>
            <div className="nav-social">
              <a href="https://discord.com/" target='_blank'>
                <ion-icon name="logo-discord"></ion-icon>
              </a>
            </div>
          </div>
          <div className={nav ? "hamburger active": "hamburger"} onClick={handleNav}>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            </div>
        </nav>
    </header>
  )
}
