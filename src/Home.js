import React from "react";
import "./App.css";
import jaggerys from "./Assets/Images/jaggerys.jpg"
import jaggeryc from "./Assets/Images/jaggery-cubes.jpg"
import jaggeryp from "./Assets/Images/jaggery-powder.jpeg";
import ajwa from "./Assets/Images/ajwa.jpeg"
import mejdool from "./Assets/Images/mejdool.jpeg"
import zahidi from "./Assets/Images/zahidi.jpeg"
import safawi from "./Assets/Images/safawi.jpeg";

import { Routes, Router, Route, Link } from 'react-router-dom';
import Fab from '@mui/material/Fab';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { height } from "@mui/system";

function Home() {
  return (
    <div className="main-container z-2">
      <div
        className="hero-section min-vh-100 d-flex flex-column flex-md-row justify-content-around"
        id="main-c"
      >
        <div className="content text-end">
          <h1 className="overflow-hidden text-white">
            <span className="highlight">Sureshwar Exim</span>
            <br></br> welcomes you
          </h1>
          <p className="text-white">
            A leading exporter of high-quality Jaggery and Dates. We specialize
            <br></br>
            in providing premium quality products to clients worldwide,
            <br></br>
            catering to diverse industries and applications.
          </p>
          <div className="buttons overflow-visible">
            <button className="contact-btn m-2">
              <a href="#contactus" className="text-white">
                Contact Us
              </a>
            </button>
            <button className="know-more-btn m-2">Know More</button>
          </div>
        </div>
      </div>

      <div className="hero-section min-vh-100 d-flex flex-column flex-md-row justify-content-around about-us-bg">
        <div className="content fs-5">
          <h1 className="fw-bold text-white">About Us</h1>
          <p className="text-white">
            Welcome to <b className="text-danger">Sureshwar Exim</b>, your
            trusted partner in the export of premium-quality dates and jaggery.
            With a commitment to excellence and authenticity, we specialize in
            delivering the finest natural sweeteners to global markets. Our
            journey began with a vision to bridge the gap between traditional,
            nutrient-rich products and international demand. Sourced directly
            from the best farms, our dates and jaggery are carefully selected,
            processed, and packaged to ensure freshness, purity, and superior
            taste. At
            <b className="text-danger"> Sureshwar Exim</b> quality is our
            priority. We follow strict quality control measures and adhere to
            international standards, ensuring that every shipment meets the
            expectations of our valued customers. Whether you’re a wholesaler,
            distributor, or retailer, we provide seamless export solutions,
            timely deliveries, and competitive pricing. Join us in promoting
            natural and healthy alternatives worldwide. Experience the richness
            of nature with our premium dates and jaggery. Contact us today to
            explore export opportunities!
          </p>
          <div className="buttons">
            <button className="contact-btn">Read More</button>
          </div>
        </div>
      </div>
      <section className="products-section container overflow-visible">
        <h2>Our Products</h2>
        <p>
          We provide a wide selection of Jaggery and Dates crafted to meet
          global standards.
        </p>
        <div className="products-grid overflow-visible m-2">
          {/* Jaggery Products */}
          <Link to="/photos?category=Jaggery" className="product-card">
            <img src={jaggerys} alt="Guar Churi" />
            <h3>Jaggery</h3>
          </Link>
          <Link to="/photos?category=Jaggery" className="product-card">
            <img src={jaggeryc} alt="Guar Gum Powder" />
            <h3>Jaggery Cubes</h3>
          </Link>
          <Link to="/photos?category=Jaggery_Powder" className="product-card">
            <img src={jaggeryp} alt="Guar Korma" />
            <h3>Jaggery Powder</h3>
          </Link>
        </div>
        <div className="products-grid overflow-visible m-2">
          {/* Dates Products */}
          <Link to="/photos?category=Mejdool" className="product-card">
            <img src={mejdool} alt="Guar Split" />
            <h3>Medjool Dates</h3>
          </Link>
          <Link to="/photos?category=Safawi" className="product-card">
            <img src={safawi} alt="Guar Split" />
            <h3>Safawi Dates</h3>
          </Link>
          <Link to="/photos?category=Ajwa" className="product-card">
            <img src={ajwa} alt="Guar Split" />
            <h3>Ajwa Dates</h3>
          </Link>
          <Link to="/photos?category=Zihadi" className="product-card">
            <img src={zahidi} alt="Guar Split" />
            <h3>Zihadi Dates</h3>
          </Link>
        </div>

        <button className="view-industries-btn">
          <Link className="text-white" to="/industries">
            View All Industries
          </Link>
        </button>
      </section>

      <section className="contact-section container" id="contactus">
        <h2>Contact Us</h2>
        <div className="d-flex flex-column flex-md-row gap-5 overflow-visible">
          <div className="contact-container flex-grow-1">
            <form className="contact-form">
              <input type="text" placeholder="Name" required />
              <input type="email" placeholder="Email" required />
              <input type="text" placeholder="Phone Number" required />
              <textarea placeholder="Message" rows="4" required></textarea>
              <button type="submit" className="view-industries-btn">
                Send
              </button>
            </form>
          </div>
          {/* <div className="map-container flex-grow-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d7400.9561192465335!2d70.796294!3d21.954608!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjHCsDU3JzE2LjYiTiA3MMKwNDcnNTUuOSJF!5e0!3m2!1sen!2sin!4v1732254171752!5m2!1sen!2sin"
              height="450"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div> */}
        </div>
      </section>
    </div>
  );
}

export default Home;
