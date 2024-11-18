
import { Link } from 'react-router-dom';
import './navbar.css';
const Navbar=()=>{

return(
    <nav className="nav-container">
      <ul className="nav-list">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/">About</Link></li>
        <li><Link to="/">Services</Link></li>
        <li><Link to="/">Services</Link></li>
        <li ><Link to="/"><span className='rightcolor'>Trainings</span></Link></li>
        <li ><Link to="/"><span className='rightcolor'>Contact</span></Link></li>
      </ul>
    </nav>
)
}

export default Navbar