import React from 'react'

const Contact = () => {
  return (
    <div className="min-h-screen bg-green-700 bg-[url('https://www.transparenttextures.com/patterns/brushed-alum-dark.png')] flex flex-col items-center justify-center gap-10">
        <h2>Contact Me</h2>
      <form className='flex flex-col gap-10 mx-5 my-5 justify-center w-80 md:w-3/5 md:mx-auto'>
      <div className='flex flex-col md:flex-row gap-10 md:gap-5'>
        <input type="text" placeholder='Name' className='h-10 rounded-xl px-4 md:w-1/2 w-full'/> 
        <input type="email" placeholder='Email Address' className='h-10 rounded-xl px-4 md:w-1/2 w-full'/> 
      </div>
        <textarea placeholder='Write me a Message...' className='h-60 rounded-xl px-4'/>
        <button type="submit" className='w-1/2 md:w-full mx-auto h-10 text-white bg-gray-800 rounded-md hover:bg-gray-950'>Send</button>
      </form>
      
      
    </div>
  )
}

export default Contact
