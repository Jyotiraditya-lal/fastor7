import React from 'react';
import './App.css';
import { Routes,Route } from 'react-router';
import Login from './components/login/login';
import Verify from './components/login/verify-otp';
import Restaurants from './components/resturants/restaurants';
import Detail from './components/resturants/detail';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/verify' element={<Verify />} />
      <Route path='/resturants' element={<Restaurants />} />
      <Route path='/details/:restaurant_name' element={<Detail />} />
    </Routes>
  );
}

export default App;
