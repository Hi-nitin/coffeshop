
import { Link } from 'react-router-dom';
import './navbar.css';
const Navbar = () => {

  return (
    <nav className="nav-container">
      <ul className="nav-list">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/aboutus">About</Link></li>
        <li><Link to="/service">Services</Link></li>
        <li style={{ marginTop: '-20px', paddingLeft: '1%', paddingRight: '1%' }}> <Link to="/"><img src="/coffeehome.png" alt="Deep Earth" /></Link></li>
        <li ><Link to="/training"><span className='rightcolor'>Trainings</span></Link></li>
        <li ><Link to="/contact"><span className='rightcolor'>Contact</span></Link></li>
        <li><Link to='/myorder'>   <i class="fa fa-shopping-basket fa-2x" aria-hidden="true" style={{ marginTop: '-1%', color: 'white', float: 'right' }}></i>
        </Link></li>
      </ul>

    </nav>
  )
}

export default Navbar