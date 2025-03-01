import React from 'react';
import Dashboard from './Components/Dashbord';
import Registration from './Components/Registration';
import {Home}from './Components/Home'; // Ensure correct import
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashbord" element={<Dashboard />}>
          {/* Fix: Remove leading '/' in the nested path */}
          <Route path="registration" element={<Registration />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
