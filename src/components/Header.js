import { Bars3Icon } from '@heroicons/react/24/solid'
import React, { useState } from 'react'

const Header = () => {
     const[togglemenu,settogglemenu]=useState(false)
  return (
   <header className='flex justify-between px-5 py-3 bg-secondary'>
     <a className='font-bold text-black ' href='#'>Madesh k</a>
     <nav className='hidden md:block'>
     <ul className='flex text-black'>
          <li><a href='/'>Home</a></li>
          <li><a href='/#about'>About</a></li>
          <li><a href='/#projectss'>Projects</a></li>
          <li><a href='/#resume'>Resume</a></li>
          <li><a href='/#contact'>Contacts</a></li>
     </ul>
     </nav>
     {togglemenu && <nav className='block md:hidden mobile-nav'>
     <ul onClick={()=>settogglemenu(!togglemenu)} className='flex flex-col text-white mobile-nav'>
     <li><a href='/'>Home</a></li>
          <li><a href='/#about'>About</a></li>
          <li><a href='/#projects'>Projects</a></li>
          <li><a href='/#resume'>Resume</a></li>
          <li><a href='/#contact'>Contacts</a></li>
     </ul>
     </nav>}
     <button onClick={()=>settogglemenu(!togglemenu)} className='block md:hidden'><Bars3Icon  className='text-white h-5'/></button>
   </header>
  )
}

export default Header