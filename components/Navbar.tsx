import React from 'react'
import AuthMenu from './AuthMenu'
function Navbar() {
  return (
    <nav className="bg-slate-950 border-slate-800 shadow-lg">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
        <svg className="w-10 h-10 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 6H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1Zm7 11-6-2V9l6-2v10Z"/>
</svg>

        <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">HireMeet</span>
    </a>
    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        <AuthMenu />

    </div>
    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-slate-800 rounded-lg bg-slate-950 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
        <li>
            <a href="#" className="block py-2 px-3 md:p-0 text-white  rounded-sm " aria-current="page">Home</a>
        </li>
        <li>
            <a href="#" className="block py-2 px-3 md:p-0 text-blue-700 rounded-sm hover:text-white">About</a>
        </li>
        <li>
            <a href="#" className="block py-2 px-3 md:p-0 text-blue-700 rounded-sm hover:text-white">Services</a>
        </li>
        <li>
            <a href="#" className="block py-2 px-3 md:p-0 text-blue-700 rounded-sm hover:text-white">Contact</a>
        </li>
        </ul>
    </div>
    </div>
    </nav>
)}

export default Navbar
