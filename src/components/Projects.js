import React from 'react'

import projectimg from '../assets/project.png'

const Projects = () => {
     const config={
          project:[
               {
               id:1,
               image:projectimg,
               title:'TODO LIST',
               description:'Creating the app using a JavaScript and Html-css',
               link:'https://madeshks.github.io/TODO-LIST/'
          },
               {
                    id:2,
                    image:projectimg,
                    title:'QR CODE GENERATOR',
                    description:'Creating the app using a React and css',
                    link:'https://madeshks.github.io/QR-code-generator/'
               },
               {
                    id:3,
                    image:projectimg,
                    title:'BOOKYS',
                    description:'Creating the app using a React and Html-css',
                    link:'https://madeshks.github.io/BOOKSY/'
               },
               {
                    id:4,
                    image:projectimg,
                    title:'TEXT TO SPEECH',
                    description:'Creating the app using a JavaScript and Html-css',
                    link:'https://madeshks.github.io/Text-To-Speech/'
               },

          ]
     }

  return (
     <section id='projectss' className='flex flex-col py-24 px-5 justify-center bg-primary text-white'>
          <div className='w-full'>
          <div className='flex flex-col py-5 px-10'>
              <h1 className='text-3xl border-b-4 border-secondary mb-4 w-[125px] font-bold'>Projects</h1>
              <p className='mb-4'> These are some of my best projects ,I have built these with React and JavaScript. check them out</p>
          </div>
          </div>

          <div className='w-full'>
          <div className='flex flex-col md:flex-row px-10 gap-6'>
               {config.project.map(projectsss=>(
               <div className='relative' key={projectsss.id} >
               <img  className='h-[200px] w-[300px]'src={projectsss.image} />
               <div className='project-desc'>
               <p className='text-center mt-2'> {projectsss.title}</p>
                    <p className='text-center px-5 py-5'> {projectsss.description}</p>
                    <div className='flex justify-center'>
                    <a className='btn' target='blank' href={projectsss.link}>View Project</a>
                    </div>
               </div> 
               </div>))}
          </div>
          </div>
     </section>
  )
}

export default Projects