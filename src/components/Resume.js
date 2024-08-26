import React from 'react'
import resumeimg from '../assets/resume.jpg'


const Resume = () => {
     const config={
          link:'/RESUME MADESHK.pdf'
     }
     
  return (<section id='resume' className='flex  flex-col md:flex-row bg-secondary px-5 py-15'>
    <div className=' py-5 md:w-1/2 flex justify-center md:justify-end'>
      <img  className='w-[400px]'src={resumeimg}/>
    </div>
    <div  className='md:w-1/2 flex justify-center text-white'>
    <div className='flex flex-col  justify-center'>
    <h1 className='text-3xl border-b-4 border-primary mb-4 w-[130px] font-bold'>Resume</h1>
    <p className='text-2xl mb-2'>you can view my resume <span className='mt-5 mb-5'><a className='btn 'href={config.link} >Download</a></span></p>
    
    </div>
    </div>
    </section>
  )
}

export default Resume