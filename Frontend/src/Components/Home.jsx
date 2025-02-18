import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { IoMenu } from "react-icons/io5";
import { NavLink} from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="bg-blue-600 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-white text-xl font-bold">Logo</h1>
          
          <div className="hidden md:flex space-x-6">
            <NavLink to="/" className={({ isActive }) => (isActive ? "underline" : "font-bold text-white")}>Home</NavLink>
            <NavLink to="/about" className={({ isActive }) => (isActive ? "underline" : "font-bold text-white")}>About</NavLink>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? "underline" : "font-bold text-white")}>Contact</NavLink>
          </div>
          
          <NavLink to="/register" className="hidden md:block bg-white text-blue-600 px-4 py-2 rounded-lg">Register</NavLink>
          
          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <AiOutlineClose /> : <IoMenu />}
          </button>
        </div>
        
        {isOpen && (
          <div className="md:hidden flex flex-col items-center bg-blue-500 py-4 space-y-4">
            <NavLink to="/" className="text-white hover:text-gray-300">Home</NavLink>
            <NavLink to="/about" className="text-white hover:text-gray-300">About</NavLink>
            <NavLink to="/contact" className="text-white hover:text-gray-300">Contact</NavLink>
            <NavLink to="/register" className="bg-white text-blue-600 px-4 py-2 rounded-lg">Register</NavLink>
          </div>
        )}
      </nav>
      
    </>
  );
};

export default Navbar;
