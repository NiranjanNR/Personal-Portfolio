import React from 'react';
import './Nav.css';

const Nav = () => {
  return (
    <div className="bg-white text-slate-900 text-center text-lg flex justify-end ">
      <h2 className="items-end mr-auto p-1 font-semibold">Niranjan Ramachandran</h2>
      <div className="hidden md:flex items-center">
        <a href={"index.js"} className="px-4 p-1 mx-2 border-b border-indigo-600 ">Home</a>
        <a href={{}} className="hover-underline-animation px-4 p-1 mx-2 ">Contact</a>
        <a href={{}} className="px-5 mx-3 bg-indigo-600 hover:bg-indigo-700 text-neutral-100 p-1">Hire me</a>
      </div>
      <div className="md:hidden">
        <svg viewBox='0 0 12.5 8' width='40' height='40'>
          Í<path d='M1 1h8M1 4h 8M1 7h8'
            stroke='rgb(79 70 229)'
            stroke-width='1.5'
            stroke-linecap='round' />
        </svg>
      </div>
    </div>
  ); 
}

export default Nav;