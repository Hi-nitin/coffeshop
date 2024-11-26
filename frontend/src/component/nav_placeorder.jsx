
import { Link } from 'react-router-dom';
import './navbar.css';
const Navbar = () => {

  return (
    <nav className="nav-container">
      <ul className="nav-list">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Signup</Link></li>
    
           </ul>
    </nav>
  )
}

export default Navbar