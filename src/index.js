import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import Fab from '@mui/material/Fab';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';
import { Analytics } from "@vercel/analytics/react"

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { SpeedInsights } from "@vercel/speed-insights/react"


const root = ReactDOM.createRoot(document.getElementById('root'));
const openLink = (url) => {
  window.open(url, '_blank');
};
root.render(
  <React.StrictMode>
    <Router>
      <div>
        <Navbar
          expand="lg"
          className="position-relative w-100 bg-dark z-3 navbar-light"
        >
          <Container id="navbar">
            <Navbar.Brand>
              <Link to="/">
                {/* <img src={sunleaf} alt='sunleaf' id="logo"></img> */}
                {/* <div id="logo"></div> */}
              </Link>
            </Navbar.Brand>
            {/* <h1 className="text-danger lavishly-yours-regular">Sureshwar Exim</h1> */}
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              className="text-white border-white"
            />
            <Navbar.Collapse
              id="basic-navbar-nav"
              className="justify-content-end"
            >
              <Nav className="ms-auto">
                <Nav.Link className="text-center">
                  <Link to="/" className="text-danger fw-bold fs-5">
                    Home
                  </Link>
                </Nav.Link>
                <Nav.Link className="text-center fw-bold fs-5">
                  <Link to="/about-us" className="text-danger">
                    About Us
                  </Link>
                </Nav.Link>
                <Nav.Link className="text-center fw-bold fs-5">
                  <Link to="/contact-us" className="text-danger">
                    Contact Us
                  </Link>
                </Nav.Link>
                <Nav.Link className="text-center fw-bold fs-5">
                  <Link to="/industries" className="text-danger">
                    Industries We Serve
                  </Link>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* Instagram Button (Left) */}
        <Fab
          color="primary"
          sx={{
            position: "fixed",
            bottom: 20,
            left: 20,
            zIndex: 1000,
            color: "white",
            "&:hover": {
              backgroundColor: "white", // Set background color to white on hover
              color: "blue", // Set icon color to primary (red) on hover
            },
          }}
          onClick={() => (window.location.href = "tel:+918733037337")}
        >
          <PhoneIcon />
        </Fab>

        {/* WhatsApp Button (Right) */}
        <Fab
          sx={{
            position: "fixed",
            bottom: 20,
            right: 20,
            zIndex: 1000,
            backgroundColor: "#25D366", // Initial WhatsApp green color
            color: "white", // Initial text/icon color
            "&:hover": {
              backgroundColor: "white", // Set background color to white on hover
              color: "#25D366", // Set icon color to green on hover
            },
          }}
          onClick={() => openLink("https://wa.me/918733037337?text=")}
        >
          <WhatsAppIcon />
        </Fab>
        <App />
      </div>
    </Router>
  </React.StrictMode>
);

