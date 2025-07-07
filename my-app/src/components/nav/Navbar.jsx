import { Link, useLocation,useNavigate } from 'react-router-dom';
import './Navbar.css';
import profilePic from '../../assests/profilePic.jpg'

const navItems = [
    { name: 'Discover', path: '/plan' },     
  { name: 'My Plans', path: '/my-plans' },
  { name: 'Recommendation', path: '/recommendation' },
];

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleHomeNavigate = () => {
    navigate('/');
  }
  
  return (
    <nav className="navbar">
      <div className="navbar-logo" onClick={handleHomeNavigate}>
        PLAN<span>HATTAN</span>
      </div>

      {/* Nav Links */}
      <div className="navbar-links">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`navbar-link ${
              location.pathname === item.path
                ? 'active'
                : ''
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>

      {/* User Profile */}
      <div className="navbar-user">
        <img
          src= {profilePic}
          alt="User"
        />
      </div>
    </nav>
  );
}

export default Navbar;
