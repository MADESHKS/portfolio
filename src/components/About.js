import React from 'react'
import aboutimg from '../assets/about.png'

const About = () => {
  return (<section id='about' className='flex  flex-col md:flex-row bg-secondary px-5'>
    <div className=' py-5 md:w-1/2'>
      <img src={aboutimg}/>
    </div>
    <div  className='md:w-1/2 flex justify-center text-white'>
    <div className='flex flex-col justify-center'>
    <h1 className='text-3xl border-b-4 border-primary mb-4 w-[150px] font-bold'>About Me</h1>
    <p className='text-2xl mb-2'>Hi, My Name is K Madesh. I am a Front End Developer.</p>
    <p><span className='ml-4'>As an enthusiastic and evolving Front-end Developer. </span>I am actively seeking opportunities to contribute my skills and creativity to a collaborative development team. I am particularly interested in joining a team where I can leverage my current project experience to craft intuitive and visually appealing user interfaces, while continuously expanding my skill set in the field of Front-end developer with a strong foundation in REACT and JAVASCRIPT</p>
    <p className='text-3xl border-b-4 border-primary mb-4 mt-5 w-[160px] font-bold'>MY SKILLS</p>
    <ul className='ml-5 '>
    <li>HTML 5 </li>
     <li>Tailwind CSS</li>
     <li>Java Script</li>
     <li>React.js</li>
     <li>Axios</li>
     
    </ul>
    </div>
    </div>
    </section>
  )
}

export default About