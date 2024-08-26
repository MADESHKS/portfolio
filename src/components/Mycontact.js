import React from 'react'
const Mycontact = () => {
     const config={
          email:'madeshmaddy994@gmail.com',
          phone :'9345475255'
     }
  return (<section id='contact' className='flex  flex-col bg-primary px-5 py-32'>
    <div  className=' flex flex-col items-center text-white'>
     
     <h1 className='text-3xl border-b-4 border-secondary mb-4 w-[110px] font-bold'>Contact</h1>
     <p className='text-2xl mb-2'>If you want to discuss more in detail, please contact me </p>
     <p className='py-2'><span className='font-bold'>Email : </span> {config.email}</p>
     <p className='py-2'><span className='font-bold'>Phone No : </span>{config.phone}</p>
    </div>
    </section>
  )
}

export default Mycontact