import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
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
      {/* <li><Link to="/">Home</Link></li> */}
      {/* <li><Link to="/musics">Musics</Link></li> */}
      <li><Link to="/contact">Contact</Link></li>

    </ul>

    <h1 className="navbar-title"> <Link to="/">LILDIGS</Link></h1>

    <ul className="navbar-links right-links">
      
    <li><Link to="/about">About</Link></li>
    </ul>
  </div>
</nav>
);
};

export default Navbar;