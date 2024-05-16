'use client'
import React from 'react'
import './Header.css';
import { Button } from 'antd';
import mls from '../assets/mls.svg'
const Header = () => {
  return (
    <header>
        <div className="logo">
            <img src={mls.src}/> <span>| Marissa Leigh Sweitzer</span>
        </div>
        <button>Donate</button>
    </header>
  )
}

export default Header;