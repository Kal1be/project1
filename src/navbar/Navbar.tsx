import { faBars, faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    const [navbar,setNavbar] = useState(false)
  return (
    <div className=''>
      <div className='flex fixed md:relative w-full z-50 bg-[#3c3ca85b] text-[#add8e6] md:justify-around justify-between items-center p-4'>
        <h2 className='md:text-3xl text-2xl font-bold flex items-center gap-2 text-orange-600'><img src="/adele1.jpg" alt="" className='h-12 w-12 rounded-full' /> Adele<span className='font-bold text-indigo-500'>Orimadji</span></h2>
        <FontAwesomeIcon icon={faBars} className='icon text-2xl' onClick={()=>{
            setNavbar(!navbar)
        }}/>
<ul className='md:flex md:gap-12 text-xl font-medium items-center' id={navbar?"nav":"hidden"}>
    <FontAwesomeIcon icon={faClose}
    className='icon absolute right-4  text-2xl bg-orange-500 text-black p-3'
    onClick={()=>{
        setNavbar(!navbar)
    }}/>
    <li onClick={()=>{setNavbar(!navbar)}}>
        <Link to="/">Home</Link>
    </li>
    <li  onClick={()=>{setNavbar(!navbar)}}>
        <a href="#about">About</a>
    </li >
    <li  onClick={()=>{setNavbar(!navbar)}}>Contact</li>
    <li  onClick={()=>{setNavbar(!navbar)}}>Service</li>
    <li  onClick={()=>{setNavbar(!navbar)}}>Work</li>
    <li className='bg-indigo-500 text-center text-white px-4 rounded-2xl py-2'>Sign-in</li>
</ul>
      </div>
    </div>
  )
}

export default Navbar
