import { useState } from 'react'
import Home from './component/home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Add_item from './admin/add_item'
import Aboutus from './component/aboutus';
import ShowItem from './admin/show_item';
import Placeorder from './component/placeorder';
import Login from './component/login';
import Signup from './component/signup'
import Customerorder from './admin/customerorder';
import Myorder from './component/myorder'
import AdminHome from './admin/home';
import Service from './component/service';
import AdminLogin from './admin/login';

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/placeorder" element={<Placeorder />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/myorder" element={<Myorder />} />
        <Route path="/service" element={<Service />} />


        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/home" element={<AdminHome />} />
        <Route path="/admin/add-item" element={<Add_item />} />
        <Route path="/admin/show-item" element={<ShowItem />} />
        <Route path="/admin/customer-order" element={<Customerorder />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
