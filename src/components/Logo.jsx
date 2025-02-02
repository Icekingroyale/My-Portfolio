import React from 'react'
import logo from '../assets/Logo.png'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <div>
         <Link to="/"><img src={logo} alt="site logo" className="sticky h-14 " /></Link>

    </div>
  )
}

export default Logo
