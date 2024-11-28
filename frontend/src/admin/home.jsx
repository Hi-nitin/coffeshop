import Navbar from './navbar';

import React from 'react';
import './home.css'; // The CSS file we will modify

const AdminHome = () => {
  return (
    <>
    <Navbar/>
    <div className="admin-home">
      <div className="background"></div>
      <div className="welcome-container">
        <h1>Welcome to the Admin Panel</h1>
        <p>Manage your platform with ease.</p>
      </div>
    </div>
    </>

  );
};

export default AdminHome;
