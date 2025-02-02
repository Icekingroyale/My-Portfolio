import React from 'react'



//02-02-2025
//TODO - replace the list items with Social Media Icons that bounces in from the top and jiggles on hover



const LgMenuDrop = () => {
  return (
    <>
        <div className='bg-purple-600 w-60 absolute top-0 right-0 z-10 hidden md:block'>
            <ul className='flex flex-col text-center justify-evenly gap-5 p-5 h-80 text-white' >
            <li>LinkedIn</li>
            <li>GitHub</li>
            <li>X</li>
            <li>Facebook</li>
            </ul>
        </div>
    </>
  )
}

export default LgMenuDrop