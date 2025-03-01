import React, { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./ProductGallery.css";

const productCategories = {
  Jaggery: [
    require("./Assets/Images/Jaggery/1.jpg"),
    require("./Assets/Images/Jaggery/2.jpg"),
    require("./Assets/Images/Jaggery/3.jpg"),
    require("./Assets/Images/Jaggery/4.jpg"),
    require("./Assets/Images/Jaggery/5.jpg"),
    require("./Assets/Images/Jaggery/6.jpg"),
    require("./Assets/Images/Jaggery/7.jpg"),
    require("./Assets/Images/Jaggery/8.jpg"),
    require("./Assets/Images/Jaggery/9.jpg"),
  ],
  Jaggery_Powder: [
    require("./Assets/Images/Jaggery-Powder/1.jpg"),
    require("./Assets/Images/Jaggery-Powder/2.jpg"),
    require("./Assets/Images/Jaggery-Powder/3.jpg"),
    require("./Assets/Images/Jaggery-Powder/4.jpg"),
    require("./Assets/Images/Jaggery-Powder/5.jpg"),
  ],
  Mejdool: [
    require("./Assets/Images/Mejdool/1.jpg"),
    require("./Assets/Images/Mejdool/2.jpg"),
    require("./Assets/Images/Mejdool/3.jpg"),
    require("./Assets/Images/Mejdool/4.jpg"),
    require("./Assets/Images/Mejdool/5.jpg"),
  ],
  Safawi: [
    require("./Assets/Images/Safawi/1.jpg"),
    require("./Assets/Images/Safawi/2.jpg"),
    require("./Assets/Images/Safawi/3.jpg"),
    require("./Assets/Images/Safawi/4.jpg"),
    require("./Assets/Images/Safawi/5.jpg"),
  ],
  Ajwa: [
    require("./Assets/Images/Ajwa/1.jpg"),
    require("./Assets/Images/Ajwa/2.jpg"),
    require("./Assets/Images/Ajwa/3.jpg"),
    require("./Assets/Images/Ajwa/4.jpg"),
    require("./Assets/Images/Ajwa/5.jpg"),
  ],
  Zihadi: [
    require("./Assets/Images/Zihadi/1.jpg"),
    require("./Assets/Images/Zihadi/2.jpg"),
    require("./Assets/Images/Zihadi/3.jpg"),
    require("./Assets/Images/Zihadi/4.jpg"),
    require("./Assets/Images/Zihadi/5.jpg")
  ],
};

const names = ['Jaggery and Jaggery Cubes','Jaggery Powder','Mejdool Dates','Safari Dates','Ajwa Dates','Zihadi dates'];

function ProductGallery() {
  const refs = useRef(
    Object.keys(productCategories).reduce((acc, category) => {
      acc[category] = React.createRef();
      return acc;
    }, {})
  );

  const location = useLocation();

  // Scroll to the section if category is passed in URL
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const targetCategory = params.get("category");

    if (targetCategory && refs.current[targetCategory]) {
      refs.current[targetCategory].current?.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  }, [location]);

  return (
    <div className="gallery-container">
      <h1 className="gallery-title">Our Product Categories</h1>
      {Object.keys(productCategories).map((category, index) => (
        <div key={category} className="category-section" ref={refs.current[category]}>
          <h2 className="category-title">{names[index]}</h2>
          <div className="category-grid">
            {productCategories[category].map((imageSrc, idx) => (
              <div key={idx} className="gallery-item">
                <img src={imageSrc} alt={`${category} ${idx + 1}`} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductGallery;
