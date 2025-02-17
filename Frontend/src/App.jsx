import React from 'react'
import Navbar from './Components/Navbar'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <div className='max-w-screen-xl mx-auto px-10 '>
      <Navbar/>
      <main className=' mt-8 min-h-screen '>
        <Outlet/>
      </main>
      
      <footer className="border-t mt-32 pt-12 pb-32 px-4 lg:px-0 text-black font-bold ">
    <div className="flex">

      <div className="w-full md:w-1/3 lg:w-1/4">
        <h6 className="font-semibold text-gray-700 mb-4">Company</h6>
        <ul>
          <li> <a href="#" className="block text-gray-600 py-2">Team</a> </li>
          <li> <a href="#" className="block text-gray-600 py-2">About us</a> </li>
          <li> <a href="#" className="block text-gray-600 py-2">Press</a> </li>
        </ul>
      </div>

      <div className="w-full md:w-1/3 lg:w-1/4">
        <h6 className="font-semibold text-gray-700 mb-4">Content</h6>
        <ul>
          <li> <a href="#" className="block text-gray-600 py-2">Blog</a> </li>
          <li> <a href="#" className="block text-gray-600 py-2">Privacy Policy</a> </li>
          <li> <a href="#" className="block text-gray-600 py-2">Terms & Conditions</a> </li>
          <li> <a href="#" className="block text-gray-600 py-2">Documentation</a> </li>
        </ul>
      </div>

    </div>
  </footer>

    </div>
  )
}

export default App
