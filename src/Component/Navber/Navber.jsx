import React from 'react';
import { Link } from 'react-router';
import Logo from '../../assets/logo.png'
import { FaGithub } from 'react-icons/fa';
import { NavLink } from 'react-router';

const Navber = () => {
    const navLink = <>
    <NavLink  to="/">Home</NavLink>
    <NavLink to="/apps">Apps</NavLink>
    <NavLink to="/installation">Installation</NavLink>
    
    </>
    return (
<div className="navbar justify-around bg-base-100 shadow-sm">
  <div className="navbar-center">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       <div className='text-2xl font-semibold flex flex-col  gap-5 items-center justify-center '>
         {
            navLink
        }
       </div>
      </ul>
    </div>
    <Link to="/" className='flex items-center justify-center'>
    <img className='w-10 h-auto' src={Logo} />
    <span className='text-xl font-bold text-purple-500'>HERO.IO</span>
</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 ">
      <div className='text-xl font-semibold flex gap-5 items-center justify-center [&_a.active]:text-purple-600 [&_a.active]:underline'>
        {
        navLink
      }
      </div>
    </ul>
  </div>
  <div>
       <button className='btn flex items-center gap-2 px-5 py-2 rounded-lg 
                 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] 
        text-white font-semibold shadow-md hover:opacity-90 transition '><a className='flex items-center justify-center gap-2' href="https://github.com/siamkhan7426" target='_blank'><FaGithub />Contribute</a>
        </button>
  </div>
</div>
    );
};

export default Navber;