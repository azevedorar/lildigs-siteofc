import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// NAVBAR
import Navbar from './components/Navbar';
import Home from './components/Pages/Home';
import Contact from './components/Pages/Contact';
import About from './components/Pages/About';
import './components/responsive.css';
import Footer from './components/Footer'; // Importação do Footer

const App: React.FC = () => {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />{/* Exibe o rodapé apenas se não estiver na Home */}
    </>
  );
};

const AppWrapper: React.FC = () => (
  <Router basename='/lildigs-siteofc/'>
    <App />
  </Router>
);

export default AppWrapper;