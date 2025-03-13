import React from 'react'
import facebook from "../assets/facebook.svg";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";
import X from "../assets/x.svg";




//03-02-2025
//TODO - The social media icons should drop in with an animation just like it's container



const LgMenuDrop = () => {
  return (
    <>
      <div className='bg-gray-600 w-60 absolute top-0 right-0 z-10 hidden md:flex md:flex-col items-center py-10 gap-20 border'>
        <a href="https://www.linkedin.com/in/chimaobi-okeh" target="_blank">
          <img src={linkedin} alt="linkedin logo" className="h-10 invert" />
        </a>
        <a href="https://github.com/Icekingroyale" target="_blank">
          <img src={github} alt="github logo" className="h-10 invert" />
        </a>
        <a href="https://x.com/Icekingroyale" target="_blank">
          <img src={X} alt="X logo" className="h-10 invert" />
        </a>
        <a href="https://www.facebook.com/Icekingroyale/" target="_blank">
          <img src={facebook} alt="facebook logo" className="h-10 invert" />
        </a>
      </div>
    </>
  )
}

export default LgMenuDrop