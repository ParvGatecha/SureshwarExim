import React from "react";
import "./App.css";
import sunleaf from "./Assets/Images/logo.png"
import { Routes, Router, Route, Link } from 'react-router-dom';
import Home from "./Home";
import AboutUs from "./AboutUs";
import Industries from "./Industries";
import ContactUs from "./ContactUs";
import PhotoGallery from "./ProductGallery";

function App() {

  const openLink = (url) => {
    window.open(url, '_blank');
  };
  return (
    <div className="main-container position-relative">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/photos" element={<PhotoGallery />} />
      </Routes>

      <footer className="footer-section">
        <div className="footer-container">
          <h3>Sureshwar Exim</h3>
          <p>&copy; 2023 Sureshwar Exim</p>
          <div className="footer-details">
            <p>Address</p>
            <p>+91 8733037337</p>
            <p>info@sureshwarexim.com</p>
          </div>
          <div className="social-icons">
            <a>Facebook</a>
            <a>LinkedIn</a>
            <a>Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
