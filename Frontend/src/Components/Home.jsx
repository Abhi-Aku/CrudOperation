import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  

  return (
    <>
      {/* Navbar Section */}
      <section className="fixed top-0 left-0 w-full flex justify-around items-center bg-cyan-500 p-10 shadow-md">
        {/* Logo */}
        <div className="font-bold text-xl">Logo</div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center h-10 border-2 rounded-3xl border-black px-10">
  <ul className="flex space-x-5">
    <NavLink to="/" className="hover:font-black cursor-pointer">
      <li>Home</li>
    </NavLink>
    <NavLink to="/registration" className="hover:font-black cursor-pointer">
      <li >Registration</li>
    </NavLink>
    <NavLink to="" className="hover:font-black cursor-pointer">
      <li>Profile</li>
    </NavLink>
    <NavLink to="" className="hover:font-black cursor-pointer">
      <li>Settings</li>
    </NavLink>
  </ul>
</nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <MdClose /> : <GiHamburgerMenu />}
        </button>
      </section>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav className="absolute top-14 left-0 w-full bg-cyan-600 p-5 shadow-md md:hidden">
          <ul className="flex flex-col space-y-4 text-center">
            <li className="hover:font-black cursor-pointer">Home</li>
            <li className="hover:font-black cursor-pointer">Registration</li>
            <li className="hover:font-black cursor-pointer">Profile</li>
            <li className="hover:font-black cursor-pointer">Settings</li>
          </ul>
        </nav>
      )}

     
    </>
  );
};

export default Home;
