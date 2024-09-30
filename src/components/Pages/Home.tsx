import React from 'react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className='home-container'>
      <video autoPlay muted loop className='background-video'>
      <source src='/lildigs-siteofc/video/clip.mp4' type='video/mp4' />

      </video>

      <div className='overlay'>
      <h1>ESSENCE </h1>
      <p>Em breve...</p>
      </div>
      
 
    </div>
  );
};

export default Home;