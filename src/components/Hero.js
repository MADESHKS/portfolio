import React from 'react'
import heroimg from '../assets/hero.png'

const Hero = () => {
  return (
    <section className='flex flex-col md:flex-row px-5 py-36 bg-primary justify-center'>
    <div className='md:w-1/2 flex-col'>
     <h1 className=' text-6xl text-white font-hero-font ' > Hi,<br/>Im Madesh k
     <p className='text-4xl mt-2'>Im a Front End Developer</p>
     <p className='text-2xl mt-4'>my skill set in the field of Front-end developer with a strong foundation in REACT and JAVASCRIPT</p>
     </h1>
     <div>

     </div>
     </div>
     <img className='md:w-1/3 ' src ={heroimg} alt='image'/>
    </section>
  )
}

export default Hero