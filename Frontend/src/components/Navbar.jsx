import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import feather from 'feather-icons'; // feather-icons installed

const Navbar = () => {
  useEffect(() => {
    feather.replace(); // Load feather icons after render
  }, []);

  return (
    <div className="navbar"> 
      <nav className="menu" id="nav">
        <span className="nav-item">
          
          <NavLink to="/" end>Badmaash Beards</NavLink>
        </span>
        <span className="nav-item">
          
          <NavLink to="/" end>Home</NavLink>
        </span>
        <span className="nav-item">
          <NavLink to="/UserForm">Quiz</NavLink>
        </span>

        <span className="nav-item">
          <NavLink to="/Products">Products</NavLink>
        </span>
        
  <span className="nav-item">
          <NavLink to="/Profile">Profile</NavLink>
        </span>

      </nav>
    </div>
  );
};

export default Navbar;