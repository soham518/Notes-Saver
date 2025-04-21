import React from 'react';
import { NavLink } from 'react-router-dom';
// import './Navbar.css'; // Import the CSS file
import notebook from '../assets/notebook.png'
const Navbar = () => {
  return (
    <nav className="navbar">
    <div className='headingLogo'>
    <img src={notebook} alt="App Logo" className="logo" />
    <h2>Welcome to Paste — A Notes Saver Application</h2> 
    </div>
     
      <div className="nav-links">
        <NavLink to="/" activeClassName="active-link">Home</NavLink>
        <NavLink to="/pastes" activeClassName="active-link">Pastes</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;