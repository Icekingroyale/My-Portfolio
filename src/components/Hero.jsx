import React from 'react'
import hero from "../assets/Hero.jpeg";


const Hero = () => {
  return (
    <div className="h-screen py-3 bg-blue-500 w-full border-2 border-red-500 ">
      <div className='md:flex md:py-32 md:mx-auto'>

    <div className="w-96">
      <h1 className="text-red-600 ">Hi I'm Chimaobi</h1>
      <h2 className="text-yellow-300">
        I'm a skilled software engineer specializing in creating efficient
        and user-friendly web applications.
      </h2>
    </div>
    <figure className="">
      <img src={hero} alt="traditional man" 
      className="w-52" />
    </figure>
      </div>
  </div>

  )
}

export default Hero
