import React from 'react'

const Projects = () => {
  return (
    <div className='h-screen bg-green-500 text-center'>
      <h2 className='py-10'>Recent Projects</h2>
      <div className="grid grid-cols-1 gap-10 justify-center md:grid-cols-2 sm:grid-cols-2">
        <div className='bg-slate-500 mx-10 h-24'>A</div>
        <div className='bg-slate-500 mx-10 h-24'>B</div>
        <div className='bg-slate-500 mx-10 h-24'>C</div>
        <div className='bg-slate-500 mx-10 h-24'>D</div>
      </div>
    </div>
  )
}

export default Projects
