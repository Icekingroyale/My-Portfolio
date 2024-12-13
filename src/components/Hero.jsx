import React from 'react'
import hero from "../assets/Hero.jpeg";


const Hero = () => {
  return (
    <div className="grid gap-8 md:grid-cols-2 h-screen bg-blue-500">
    <div className="hero-text w-96">
      <h1 className="text-red-600 text-6xl text">Hi I'm Chimaobi</h1>
      <p className="text-3xl text-yellow-300">
        I'm a skilled software engineer specializing in creating fficient
        and user-friendly web applications.
      </p>
    </div>
    <figure className="">
      <img src={hero} alt="traditional man" className="h-96 rounded" />
    </figure>
  </div>

  )
}

export default Hero
