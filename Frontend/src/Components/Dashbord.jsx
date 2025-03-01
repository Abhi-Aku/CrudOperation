import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <section className="flex h-screen p-5">
      <div className="w-1/5 bg-red-600 text-white p-5 rounded-md">
        <h1 className="text-center text-2xl mb-5">Welcome to Dashboard</h1>
        <ul className="space-y-3">
          <li>
            <NavLink to="/registration" className="block px-4 py-2 hover:bg-red-700 rounded">Registration</NavLink>
          </li>
          <li>
            <NavLink to="" className="block px-4 py-2 hover:bg-red-700 rounded">Profile</NavLink>
          </li>
          <li>
            <NavLink to="" className="block px-4 py-2 hover:bg-red-700 rounded">Settings</NavLink>
          </li>
        </ul>
      </div>

      <main className="w-4/5 p-5 bg-gray-100">
        <Outlet />
      </main>
    </section>
  );
};

export default Dashboard;
