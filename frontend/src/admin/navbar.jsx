import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();  // Initialize useNavigate

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    // Replace this with your actual logout logic
    alert("Logged out!");
    
    // Redirect to the '/admin' page after logout
    navigate('/admin');
  };

  return (
    <header>
      <nav className="navbar">
        <div className="logo">
       
        </div>
        <div className={`menu ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            <li><a href="/admin/home">Home</a></li>
            <li><a href="/admin/add-item">Add-item</a></li>
            <li><a href="/admin/customer-order">Customer-order</a></li>
            <li><a href="/admin/add-place">Add place</a></li>
            <li><a href="/admin/show-item">Show-item</a></li>
          </ul>
        </div>
        <div className="navbar-right">
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          &#9776;
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
