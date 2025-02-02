import React from 'react'
import Header from '../Header'
import Footer from '../Footer'

const Contact = () => {
  return (
    <div className="bg-[#EFE9D5] bg-[url('https://www.transparenttextures.com/patterns/brushed-alum-dark.png')]">
      <Header/>
        <h2 className='text-center'>Contact Me</h2>
      <form action="#" className='flex flex-col gap-5 mx-5 my-5 justify-center md:w-3/5 md:mx-auto'>
      <div className='md:flex md:gap-5'>
        <input type="text" placeholder='Name' className='h-10 rounded-xl px-4 md:w-1/2 w-full'/> 
        <input type="email" placeholder='Email Address' className='h-10 rounded-xl px-4 md:w-1/2 w-full'/> 
      </div>
        <textarea placeholder='Write me a Message...' className='h-60 rounded-xl px-4'/>
        <button type="submit" className='h-10 text-white bg-gray-800 rounded-md hover:bg-gray-950'>Send</button>
      </form>
      <Footer/>
      
      
    </div>
  )
}

export default Contact
