// import React from "react";
// import "./App.css";
// import rice from "./Assets/Images/rice.webp"
// import one from "./Assets/Images/Image_showcasing_sourcing_of_raw_materials_emph (1).webp"
// import two from "./Assets/Images/Design_an_infographic_showcasing_the_diverse_app.webp"
// import three from "./Assets/Images/Positive_customer_testimonials_displayed_on_a_sc.webp"
// import four from "./Assets/Images/sumleaf_Company_employees_planting_trees_or_part.webp"
// import five from "./Assets/Images/Handshake_image_representing_partnership_and_col.webp"
// import six from "./Assets/Images/Image_of_Guar_Gum_products_contributing_to_a_pos.webp"
// import { Routes, Router, Route, Link } from 'react-router-dom';

// function AboutUs() {
//   return (
//     <div className="main-container container d-flex align-items-center justify-content-center z-2">
//       <h1 className="fw-bold text-center" >About Us</h1>
//       <p className="fs-5 text-center" >
        
//       </p>
//       <div className="hero-section d-flex flex-column flex-md-row justify-content-around">
//         <div className="content text-center">
//           <h1>Our Journey</h1>
          
//         </div>
//       </div>

//       <div className="hero-section d-flex flex-column-reverse flex-md-row justify-content-around">
//         <div className="content text-center">
//           <h1>Our Products</h1>
          
//         </div>
//       </div>

//       <div className="hero-section d-flex flex-column flex-md-row justify-content-around">
//         <div className="content text-center">
//           <h1>Our Commitment to Quality</h1>
          
//         </div>
//       </div>

//       <div className="hero-section d-flex flex-column-reverse flex-md-row justify-content-around">
//         <div className="content text-center">
//           <h1>Why Choose Us?</h1>
          
//         </div>
//       </div>

//       <div className="hero-section d-flex flex-column flex-md-row justify-content-around">
//         <div className="content text-center">
//           <h1>Join Us in Promoting Natural Sweeteners Worldwide r</h1>
          
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AboutUs;


import React, { useEffect } from "react";
import "./App.css";
import rice from "./Assets/Images/rice.webp";
import one from "./Assets/Images/Image_showcasing_sourcing_of_raw_materials_emph (1).webp";
import two from "./Assets/Images/Design_an_infographic_showcasing_the_diverse_app.webp";
import three from "./Assets/Images/Positive_customer_testimonials_displayed_on_a_sc.webp";
import four from "./Assets/Images/sumleaf_Company_employees_planting_trees_or_part.webp";
import five from "./Assets/Images/Handshake_image_representing_partnership_and_col.webp";
import six from "./Assets/Images/Image_of_Guar_Gum_products_contributing_to_a_pos.webp";

function AboutUs() {

  return (
    <div className="main-container container d-flex flex-column align-items-center justify-content-center z-2">
      <h1
        className="fw-bold text-center overflow-hidden stylish-heading"
        data-aos="fade-down"
      >
        About Us
      </h1>
      <p className="fs-5 text-center" data-aos="fade-up">
        Welcome to Sureshwar Exim, your trusted partner in the export of
        premium-quality dates and jaggery. With a deep commitment to excellence,
        authenticity, and sustainability, we specialize in delivering the finest
        natural sweeteners to global markets, ensuring that customers worldwide
        experience the true richness of nature.
      </p>

      <div className="hero-section d-flex flex-column flex-md-row justify-content-around">
        <div className="content text-center" data-aos="fade-right">
          <h1 className="stylish-heading">Our Journey</h1>
          <p>
            Our story began with a vision to bridge the gap between traditional,
            nutrient-rich products and the growing global demand for wholesome,
            natural alternatives. Recognizing the increasing need for healthy,
            chemical-free sweeteners, we embarked on a mission to source,
            process, and export the finest dates and jaggery from the most
            reputable farms.
          </p>
          <p>
            From humble beginnings, we have grown into a trusted name in the
            industry, known for our unwavering dedication to quality and
            customer satisfaction. Every step of our journey is guided by our
            passion for providing authentic, farm-fresh products that preserve
            the essence of nature.
          </p>
        </div>
      </div>

      <div className="hero-section d-flex flex-column-reverse flex-md-row justify-content-around">
        <div className="content text-center" data-aos="fade-left">
          <h1 className="stylish-heading">Our Products</h1>
          <p>
            At Sureshwar Exim, we take pride in offering a diverse selection of
            premium-quality dates and jaggery sourced directly from the best
            farms. Our products are carefully selected, processed, and packaged
            to retain their natural flavor, texture, and nutritional benefits.
          </p>
          <p className="text-start">
            <b>Jaggery</b> is a natural sweetener that retains essential
            minerals and nutrients, making it a healthier alternative to refined
            sugar. We export:<br></br>
            <br></br>• Jaggery – Pure, unprocessed sugarcane or date palm
            jaggery in its raw form. <br></br>• Jaggery Cubes – Conveniently
            shaped cubes, perfect for easy use in cooking and beverages.
            <br></br>• Jaggery Powder – Finely ground jaggery for smooth
            blending in food and drink preparations.<br></br>
          </p>
          <p className="text-start">
            <b>Dates</b> our premium-quality dates are rich in natural
            sweetness, fiber, and essential nutrients. We offer: <br></br>
            <br></br>• Medjool Dates – Large, soft, and rich in caramel-like
            sweetness.
            <br></br>• Ajwa Dates – Dark, soft-textured dates known for their
            unique flavor and health benefits. <br></br>• Safawi Dates –
            Semi-dry, mildly sweet, and packed with energy.<br></br>• Zahidi
            Dates – Golden-colored, chewy, and slightly nutty in flavor.
          </p>
        </div>
      </div>

      <div className="hero-section d-flex flex-column flex-md-row justify-content-around">
        <div className="content text-center" data-aos="zoom-in">
          <h1 className="stylish-heading">Our Commitment to Quality</h1>
          <p className="text-start">
            Quality is at the heart of everything we do. We follow stringent
            quality control measures at every stage of the supply chain, from
            sourcing to packaging and logistics. Our commitment includes:
            <br></br>
            <br></br> • Direct Sourcing from Trusted Farms – We partner with
            farmers who use sustainable and ethical farming practices, ensuring
            that our products are grown without harmful chemicals or additives.
            <br></br>• Adherence to International Standards – We comply with
            global food safety and hygiene regulations, guaranteeing that our
            exports meet the highest industry benchmarks. <br></br>•
            State-of-the-Art Processing & Packaging – Our processing units
            maintain optimal conditions to preserve the freshness, purity, and
            nutritional integrity of our products.
          </p>
        </div>
      </div>

      <div className="hero-section d-flex flex-column-reverse flex-md-row justify-content-around">
        <div className="content text-center" data-aos="fade-up">
          <h1 className="stylish-heading">Why Choose Us?</h1>
          <p className="text-start">
            With a customer-centric approach, we go the extra mile to ensure
            that our clients receive the best quality products at competitive
            prices with hassle-free logistics. Here’s why businesses worldwide
            trust us: <br></br>✔ Uncompromised Quality – We maintain the highest
            standards of purity and freshness. <br></br>✔ Reliable Export
            Solutions – We offer efficient shipping and timely deliveries to
            international markets. <br></br>✔ Custom Packaging & Bulk Supply –
            We cater to diverse customer needs, from wholesalers to retailers.{" "}
            <br></br>✔ Competitive Pricing – Our direct farm-to-market approach
            allows us to provide cost-effective solutions. <br></br>✔ Customer
            Satisfaction Guaranteed – We prioritize long-term partnerships and
            strive for excellence in service.
          </p>
        </div>
      </div>

      <div className="hero-section d-flex flex-column flex-md-row justify-content-around">
        <div className="content text-center" data-aos="flip-left">
          <h1 className="stylish-heading">
            Join Us in Promoting Natural Sweeteners Worldwide
          </h1>
          <p>
            At Sureshwar Exim, we believe in the power of nature’s goodness. As
            more people seek healthier dietary choices, we are proud to play a
            role in delivering nutrient-rich, natural sweeteners to homes and
            businesses worldwide. Whether you are a wholesaler, distributor, or
            retailer, we are here to support your import needs with top-tier
            products, seamless logistics, and exceptional service. 📩 Contact us
            today to explore exciting export opportunities and bring the finest
            dates and jaggery to your market!
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
