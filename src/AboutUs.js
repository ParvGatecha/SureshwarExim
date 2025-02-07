import React from "react";
import "./App.css";
import rice from "./Assets/Images/rice.webp"
import one from "./Assets/Images/Image_showcasing_sourcing_of_raw_materials_emph (1).webp"
import two from "./Assets/Images/Design_an_infographic_showcasing_the_diverse_app.webp"
import three from "./Assets/Images/Positive_customer_testimonials_displayed_on_a_sc.webp"
import four from "./Assets/Images/sumleaf_Company_employees_planting_trees_or_part.webp"
import five from "./Assets/Images/Handshake_image_representing_partnership_and_col.webp"
import six from "./Assets/Images/Image_of_Guar_Gum_products_contributing_to_a_pos.webp"
import { Routes, Router, Route, Link } from 'react-router-dom';

function AboutUs() {
  return (
    <div className="main-container container d-flex align-items-center justify-content-center z-2" data-aos='fade-in'>
      <h1 className="fw-bold text-center">About Us</h1>
      <p className="fs-5 text-center">Welcome to our company, a leading manufacturer and exporter of Guar Gum! With a commitment to excellence and a dedication to providing high-quality products, we have established ourselves as a trusted name in the industry.</p>
      <div className="hero-section d-flex flex-column flex-md-row justify-content-around">
        <div className="content text-center" data-aos="slide-right">
          <h1>
          Manufacturing
          </h1>
          <p>
          At our state-of-the-art manufacturing facility, we employ cutting-edge technology and adhere to strict quality control measures to ensure that our Guar Gum meets the highest standards. Our experienced team of professionals oversees the entire production process, from sourcing the finest raw materials to the final packaging, ensuring consistency and purity in every batch.
          </p>
        </div>
        <div className="image-container" data-aos="slide-left">
          <img
            src={one}
            alt="Guar Gum"
            className="hero-image"
          />
        </div>
      </div>

      <div className="hero-section d-flex flex-column-reverse flex-md-row justify-content-around">
        <div className="image-container" data-aos="slide-right">
            <img
                src={two}
                alt="Guar Gum"
                className="hero-image"
            />
        </div>
        <div className="content text-center" data-aos="slide-left">
          <h1>
          The Versatility of Guar Gum
          </h1>
          <p>
          Guar Gum, derived from the seeds of the guar plant, has gained immense popularity as a versatile ingredient in various industries. Its exceptional thickening, stabilizing, and binding properties make it an essential component in sectors such as food, pharmaceuticals, cosmetics, textiles, and more. With a wide range of applications, Guar Gum has become an indispensable additive in countless products worldwide.
          </p>
        </div>
      </div>

      <div className="hero-section d-flex flex-column flex-md-row justify-content-around">
        <div className="content text-center" data-aos="slide-right">
          <h1>
          Global Reach and Customer Focus
          </h1>
          <p className="text-center">
          As an exporter, we take great pride in delivering our Guar Gum products to clients around the globe. Our robust supply chain network ensures timely and efficient delivery, allowing us to cater to the diverse needs of international markets. We prioritize customer satisfaction and strive to build long-term relationships based on trust, reliability, and exceptional service.
          </p>
        </div>
        <div className="image-container" data-aos="slide-left">
          <img
            src={three}
            alt="Guar Gum"
            className="hero-image"
          />
        </div>
      </div>

      <div className="hero-section d-flex flex-column-reverse flex-md-row justify-content-around">
        <div className="image-container" data-aos="slide-right">
            <img
                src={four}
                alt="Guar Gum"
                className="hero-image"
            />
        </div>
        <div className="content text-center" data-aos="slide-left">
          <h1>
          Sustainable Practices
          </h1>
          <p>
          In addition to our dedication to quality and customer satisfaction, we are also committed to sustainable practices. We recognize the importance of environmental responsibility and actively work towards minimizing our carbon footprint. From efficient energy consumption to responsible waste management, we are continuously seeking ways to contribute to a greener future.
          </p>
        </div>
      </div>

      <div className="hero-section d-flex flex-column flex-md-row justify-content-around">
        <div className="content text-center" data-aos="slide-right">
          <h1>
          Your Trusted Partner
          </h1>
          <p>
          Partner with us, and you can expect the highest level of product quality, exceptional service, and a reliable supply chain. Whether you are a food manufacturer, a pharmaceutical company, or any other industry seeking top-grade Guar Gum, we are here to fulfill your requirements.
          </p>
        </div>
        <div className="image-container" data-aos="slide-left">
          <img
            src={five}
            alt="Guar Gum"
            className="hero-image"
          />
        </div>
      </div>

      <div className="hero-section d-flex flex-column-reverse flex-md-row justify-content-around">
        <div className="image-container" data-aos="slide-right">
            <img
                src={six}
                alt="Guar Gum"
                className="hero-image"
            />
        </div>
        <div className="content text-center" data-aos="slide-left">
          <h1>
          Choose Us, Shape the Future
          </h1>
          <p>
          Choose us as your trusted Guar Gum manufacturer and exporter, and experience the perfect blend of quality, reliability, and customer-centric approach. Together, let's create a successful partnership and shape a brighter future.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
