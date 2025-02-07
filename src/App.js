import React from "react";
import "./App.css";
import sunleaf from "./Assets/Images/logo.png"
import { Routes, Router, Route, Link } from 'react-router-dom';
import Home from "./Home";
import AboutUs from "./AboutUs";
import Industries from "./Industries";

function App() {

  const openLink = (url) => {
    window.open(url, '_blank');
  };
  return (
    <div className="main-container position-relative" data-aos="fade-in">
      

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/industries" element={<Industries />} />
      </Routes>

      <footer className="footer-section">
        <div className="footer-container">
          <h3>Sunleaf International LLP</h3>
          <p>&copy; 2023 Sunleaf International LLP</p>
          <div className="footer-details">
            <p>Naman, 15/20 Bhojrajpara, Vrundavan Nagar, Gondal - 360311</p>
            <p>+91 87583 40601 | +91 91065 13214</p>
            <p>info@sunleaf.com</p>
          </div>
          <div className="social-icons">
            <a href="https://www.facebook.com/profile.php?id=61565181540103&mibextid=LQQJ4d">
              Facebook
            </a>
            <a href="https://www.linkedin.com/in/sunleaf-international-llp-bb2499326?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
              LinkedIn
            </a>
            <a href="https://www.instagram.com/sunleaf_international?igsh=djFyaHFsaWZoMTk1">
              Instagram
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
