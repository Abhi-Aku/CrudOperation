import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import Registration from './Components/Registration';
import Dashbord from './Components/Dashbord';
import Login from './Components/Login';
import Table from './Table';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashbord' element={<Dashbord />}>
          <Route path='registration' element={<Registration />} />
          <Route path='login' element={<Login />} />
          <Route path='table' element={<Table />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
