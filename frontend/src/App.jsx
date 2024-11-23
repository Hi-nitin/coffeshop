import { useState } from 'react'
import Home from './component/home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Add_item from './admin/add_item'
import Aboutus from './component/aboutus';
import ShowItem from './admin/show_item';
import Placeorder from './component/placeorder';

function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/aboutus" element={<Aboutus />}/>
      <Route path="/placeorder" element={<Placeorder />}/>


      <Route path="/admin/add-item" element={<Add_item />}/>
      <Route path="/admin/show-item" element={<ShowItem />}/>
    
    </Routes>
  </BrowserRouter>
  )
}

export default App
