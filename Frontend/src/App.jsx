import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './Components/Dashbord';
import Registration from './Components/Registration';
import Home from './Components/Home';
import Login from './Components/Login';
import Profile from './Components/Profile ';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/registration" element={<Registration />} />
         <Route path="/login" element={<Login />} />
         <Route path="/profile" element={<Profile/> } />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
