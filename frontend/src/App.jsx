import { useState } from 'react'
import Home from './component/home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Add_item from './admin/add_item'

function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/admin/add-item" element={<Add_item />}/>
    
    </Routes>
  </BrowserRouter>
  )
}

export default App
