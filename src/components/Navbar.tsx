import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'; // Importe o CSS

const Navbar: React.FC = () => {

  useEffect(() => {
    const title = document.querySelector('.navbar-title');

    if (title) {
      setTimeout(() => {
        title.classList.add('show')
      }, 300);
    }

  }, []);
  


  
  return (
    <nav className="navbar">
  <div className="navbar-container">
    <ul className='navbar-links left-links'>
      <li>
        <NavLink 
        to="/contact" className={({isActive}) => isActive ? 'active' : ''}>Contato</NavLink></li>

    </ul>

    <h1 className="navbar-title"> <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>LILDIGS</NavLink></h1>

    <ul className="navbar-links right-links">
      
    <li><NavLink to="/about"className={({ isActive }) => isActive ? 'active' : ''}>Sobre</NavLink></li>
    </ul>
  </div>
</nav>
);
};

export default Navbar;