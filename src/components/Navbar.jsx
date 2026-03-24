import React, { useState } from 'react'
import logo from '../assets/medslotifynow.png'
import { NavLink, useNavigate } from 'react-router-dom'
import profile_pic from '../assets/profile_pic.png'
import { assets } from '../assets/assets'

const Navbar = () => {

  const navigate = useNavigate();

const [showMenu, setShowMenu] = useState(false)
const [token, setToken] = useState(true)
  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
      <img onClick={()=>navigate('/')} src={logo} alt='medslotifynow' className='w-40 cursor-pointer' />  
      <ul className='hidden md:flex items-start gap-5 font-medium'>
          <NavLink to='/'>
            <li className='py-1 cursor-pointer'>HOME</li>
            <hr className='border-none outline-none h-0.5 bg-blue-500 w-3/5 mx-auto hidden'/>
          </NavLink>
          <NavLink to='/doctors'>
            <li className='py-1 cursor-pointer'>ALL DOCTORS</li>
            <hr className='border-none outline-none h-0.5 bg-blue-500 w-3/5 mx-auto hidden'/>
          </NavLink>
          <NavLink to='/about'>
            <li className='py-1 cursor-pointer'>ABOUT</li>
            <hr className='border-none outline-none h-0.5 bg-blue-500 w-3/5 mx-auto hidden'/>
          </NavLink>
          <NavLink to='/contact'>
            <li className='py-1 cursor-pointer'>CONTACT</li>
            <hr className='border-none outline-none h-0.5 bg-blue-500 w-3/5 mx-auto hidden'/>
          </NavLink>
         
      </ul>

      <div className='flex items-center gap-4'>
      {token ? (
  <div className="relative group">

    {/* Profile Image */}
    <img
      className="w-8 rounded-full cursor-pointer"
      src={profile_pic}
      alt=""
    />

    {/* Dropdown Menu */}
    <div className="absolute hidden group-hover:block top-8 right-0 bg-white border shadow-md rounded w-40">

      <p
        onClick={() => navigate('/my-profile')}
        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
      >
        My Profile
      </p>

      <p
        onClick={() => navigate('/my-appointments')}
        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
      >
        My Appointments
      </p>

      <p onClick={()=>setToken(false)} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
        Logout
      </p>

    </div>

  </div>
) : (
  <button
    onClick={() => navigate('/login')}
    className="bg-blue-500 text-white px-5 py-2 rounded-full"
  >
    Create Account
  </button>
)}
 <img onClick={()=>setShowMenu(true)} className='w-6 md:hidden' src={assets.menu_icon} alt="" />
 {/* ----Mobile Menu---- */}
 <div className={`${showMenu ? 'fixed w-full' : 'h-0 w-0' } md:hidden right-0 top-0 bottom-0 z-0 overflow-hidden bg-white transition-all`}>
  <div className='flex items-center justify-between px-5 py-6'>
    <img className='w-36' src={assets.medslotifynow} alt="" />
    <img className='w-7' onClick={()=>setShowMenu(false)} src={assets.cross_icon} alt="" />
  </div>
  <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
    <NavLink  onClick={()=>setShowMenu(false)} to='/'><p className='px-4 py-2 rounded inline-block'>HOME</p></NavLink>
    <NavLink  onClick={()=>setShowMenu(false)} to='/doctors'><p className='px-4 py-2 rounded inline-block'>ALL DOCTORS</p></NavLink>
    <NavLink  onClick={()=>setShowMenu(false)} to='/about'><p className='px-4 py-2 rounded inline-block'>ABOUT</p></NavLink>
    <NavLink  onClick={()=>setShowMenu(false)} to='/contact'><p className='px-4 py-2 rounded inline-block'>CONTACT</p></NavLink>
  </ul>
 </div>
      </div>
    </div>
  )
}

export default Navbar