
import { Link } from 'react-router-dom';
import './navbar.css';
const Navbar = () => {

  return (
    <div className='' style={{position:'fixed',width:'90%',backgroundColor:'white'}}>

<nav className="nav-container">
      <ul className="nav-list">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Signup</Link></li>
    
           </ul>
    </nav>
    </div>

  )
}

export default Navbar