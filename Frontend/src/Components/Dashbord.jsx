import React, { useEffect, useState,} from 'react';
import { NavLink, Outlet,useNavigate } from 'react-router-dom';
import Registration from './Registration';

const Dashboard = () => {
  const Navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);


  const logoutButton = () => {
    localStorage.removeItem('token');
    Navigate('/login');
    console.log('remove token');
  };


  // protect router 

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      Navigate('/login'); 
    }
  }, [Navigate]);









  return (
    <section className="flex h-screen p-5">
      <div className="w-1/5 bg-red-600 text-white p-5 rounded-md">
        <h1 className="text-center text-2xl mb-5">Welcome to Dashboard</h1>
        <ul className="space-y-3">
          <li>
            <NavLink to="" className="block px-4 py-2 hover:bg-red-700 rounded">Registration</NavLink>
          </li>
          <li>
            
            <NavLink
             
            to="/profile" className="block px-4 py-2 hover:bg-red-700 rounded">Profile</NavLink>
          </li>
          <li>
            <NavLink to="" className="block px-4 py-2 hover:bg-red-700 rounded">Settings</NavLink>
          </li>
        </ul>
      </div>

      <main className="w-4/5 p-5 bg-gray-100">
        <div className="flex justify-evenly mb-5">
          <input 
            type="text" 
            placeholder="Search..." 
            className="border px-3 py-2 rounded w-1/2" 
            value={searchTerm} 
            onChange={(event) => setSearchTerm(event.target.value)}
          />
          <button
            onClick={() => setIsOpen(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Add
          </button>
          {/* logout botton */}
          <button
          onClick={logoutButton}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Logout
          </button>
        </div>
        {isOpen && <Registration onClose={() => setIsOpen(false)} />}
          
        <Outlet />
      </main>
    </section>
  );
};

export default Dashboard;
