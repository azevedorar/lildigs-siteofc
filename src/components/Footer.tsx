import React from 'react';
import './Footer.css';
import { FaSoundcloud, FaSpotify, FaYoutube } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className='footer'>
      <p>Ouça em:</p>
      <div className='social-icons'>
        <a href='https://soundcloud.com/lil_digs' target='_blank' rel='noopener noreferrer'>
          <FaSoundcloud />
        </a>
        <a href='https://open.spotify.com/intl-pt/artist/0yfdAr078PqUlyTh4lQ0i1?si=jySMMmPATyG3XENSRcSvKw' target='_blank' rel='noopener noreferrer'>
          <FaSpotify />
        </a>
        <a href='https://www.youtube.com/@lil_digs' target='_blank' rel='noopener noreferrer'>
          <FaYoutube />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
