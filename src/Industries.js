import React from "react";
import "./App.css";
import food from "./Assets/Images/food-preparation.jpg";
import ayurvedic from "./Assets/Images/ayurvedic.jpeg";
import bakery from "./Assets/Images/bakery.jpg";
import confectionery from "./Assets/Images/confectionery.jpg";
import health from "./Assets/Images/health.jpg";
import chocolate from "./Assets/Images/chocolate.jpg";
import farming from "./Assets/Images/farming.jpg";
import { useEffect } from 'react';
import { Routes, Router, Route, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Industries() {
    useEffect(() => {
        console.log("er")
        const applyMobileAnimations = () => {
          if (window.innerWidth <= 768) {
            document.querySelectorAll('.mobile-animate').forEach((line, lineIndex) => {
              line.querySelectorAll('[data-aos]').forEach((element, elementIndex) => {
                element.setAttribute(
                  'data-aos-delay',
                  lineIndex * 200 + elementIndex * 1000
                );
              });
            });
          }
        };
    
        applyMobileAnimations();
        window.addEventListener('resize', applyMobileAnimations);
    
        return () => window.removeEventListener('resize', applyMobileAnimations);
      }, []);
  const industries = [
    {
      name: "Food Preparation",
      image: "./Assets/Images/food-preparation.jpeg",
    },
    { name: "Ayurvedic", image: "/images/ayurvedic.jpg" },
    { name: "Bakery", image: "/images/bakery.jpg" },
    { name: "Confectionery", image: "/images/confectionery.jpg" },
    { name: "Health Products", image: "/images/health-products.jpg" },
    { name: "Chocolate", image: "/images/chocolate.jpg" },
    { name: "Farming", image: "/images/farming.jpg" },
  ];
  const images = [food,ayurvedic,bakery,confectionery,health,chocolate,farming];

  return (
    <div className="w-full">
      {industries.map((industry, index) => (
        <div
          key={index}
          className="industry-section w-full h-screen flex items-center justify-center text-white text-3xl font-bold"
          style={{
            backgroundImage: `url(${images[index]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="w-100 bg-black bg-opacity-50 px-6 py-5 rounded-lg">
            {industry.name}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Industries;


