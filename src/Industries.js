import React from "react";
import "./App.css";
import tooth from "./Assets/Images/toothbrush.png"
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
  return (
    <div className="main-container container d-flex align-items-center justify-content-center overflow-visible" data-aos='fade-in'>
      <h1 className="fw-bold">Industries</h1>
      <div className="row d-flex flex-wrap row-cols-lg-4 row-cols-md-3 row-cols-2  overflow-visible">
        <div className="d-flex flex-column justify-content-center align-items-center mobile-animate" data-aos='fade-up' data-aos-offset="100">
            <div className="card d-flex justify-content-center align-items-center border-0">
                <div className="z-3 bg-white rounded-circle card-w d-flex align-items-center justify-content-center shadow p-3 overflow-visible">

                <svg xmlns="http://www.w3.org/2000/svg" className="logo z-3" viewBox="0 0 448 512"><path d="M367.1 160c.6-5.3 .9-10.6 .9-16C368 64.5 303.5 0 224 0S80 64.5 80 144c0 5.4 .3 10.7 .9 16l-.9 0c-26.5 0-48 21.5-48 48s21.5 48 48 48l53.5 0 181 0 53.5 0c26.5 0 48-21.5 48-48s-21.5-48-48-48l-.9 0zM96 288L200.8 497.7c4.4 8.8 13.3 14.3 23.2 14.3s18.8-5.5 23.2-14.3L352 288 96 288z"/></svg>
                </div>
                
                <div className="bg-warning card-bg position-absolute">

                </div>
            </div>
            <p>Confectionery</p>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center mobile-animate" data-aos='fade-up' data-aos-offset="100">
            <div className="card d-flex justify-content-center align-items-center border-0">
                <div className="z-3 bg-white rounded-circle card-w d-flex align-items-center justify-content-center shadow p-3">

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M432 240c53 0 96-43 96-96s-43-96-96-96c-35.5 0-66.6 19.3-83.2 48l-52.6 0C316 40.1 369.3 0 432 0c79.5 0 144 64.5 144 144s-64.5 144-144 144c-27.7 0-53.5-7.8-75.5-21.3l35.4-35.4c12.2 5.6 25.8 8.7 40.1 8.7zM1.8 142.8C5.5 133.8 14.3 128 24 128l368 0c9.7 0 18.5 5.8 22.2 14.8s1.7 19.3-5.2 26.2l-177 177L232 464l64 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-88 0-88 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l64 0 0-118.1L7 169c-6.9-6.9-8.9-17.2-5.2-26.2z"/></svg></div>
                
                <div className="bg-warning card-bg position-absolute">

                </div>
            </div>
            <p>Beverages</p>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center mobile-animate" data-aos='fade-up' data-aos-offset="100">
            <div className="card d-flex justify-content-center align-items-center border-0">
                <div className="z-3 bg-white rounded-circle card-w d-flex align-items-center justify-content-center shadow p-3">

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M96 224l0 32 0 160c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l0-88.2c9.9 6.6 20.6 12 32 16.1l0 24.2c0 8.8 7.2 16 16 16s16-7.2 16-16l0-16.9c5.3 .6 10.6 .9 16 .9s10.7-.3 16-.9l0 16.9c0 8.8 7.2 16 16 16s16-7.2 16-16l0-24.2c11.4-4 22.1-9.4 32-16.1l0 88.2c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l0-160 32 32 0 49.5c0 9.5 2.8 18.7 8.1 26.6L530 427c8.8 13.1 23.5 21 39.3 21c22.5 0 41.9-15.9 46.3-38l20.3-101.6c2.6-13-.3-26.5-8-37.3l-3.9-5.5 0-81.6c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 14.4-52.9-74.1C496 86.5 452.4 64 405.9 64L272 64l-16 0-64 0-48 0C77.7 64 24 117.7 24 184l0 54C9.4 249.8 0 267.8 0 288l0 17.6c0 8 6.4 14.4 14.4 14.4C46.2 320 72 294.2 72 262.4l0-6.4 0-32 0-40c0-24.3 12.1-45.8 30.5-58.9C98.3 135.9 96 147.7 96 160l0 64zM560 336a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zM166.6 166.6c-4.2-4.2-6.6-10-6.6-16c0-12.5 10.1-22.6 22.6-22.6l178.7 0c12.5 0 22.6 10.1 22.6 22.6c0 6-2.4 11.8-6.6 16l-23.4 23.4C332.2 211.8 302.7 224 272 224s-60.2-12.2-81.9-33.9l-23.4-23.4z"/></svg></div>
                
                <div className="bg-warning card-bg position-absolute">

                </div>
            </div>
            <p>Dairy Products</p>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center mobile-animate" data-aos='fade-up' data-aos-offset="100">
            <div className="card d-flex justify-content-center align-items-center border-0">
                <div className="z-3 bg-white rounded-circle card-w d-flex align-items-center justify-content-center shadow p-3">

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M112 96c-26.5 0-48 21.5-48 48l0 112 96 0 0-112c0-26.5-21.5-48-48-48zM0 144C0 82.1 50.1 32 112 32s112 50.1 112 112l0 224c0 61.9-50.1 112-112 112S0 429.9 0 368L0 144zM554.9 399.4c-7.1 12.3-23.7 13.1-33.8 3.1L333.5 214.9c-10-10-9.3-26.7 3.1-33.8C360 167.7 387.1 160 416 160c88.4 0 160 71.6 160 160c0 28.9-7.7 56-21.1 79.4zm-59.5 59.5C472 472.3 444.9 480 416 480c-88.4 0-160-71.6-160-160c0-28.9 7.7-56 21.1-79.4c7.1-12.3 23.7-13.1 33.8-3.1L498.5 425.1c10 10 9.3 26.7-3.1 33.8z"/></svg></div>
                
                <div className="bg-warning card-bg position-absolute">

                </div>
            </div>
            <p>Pharmaceuticals</p>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center mobile-animate" data-aos='fade-up' data-aos-offset="100">
            <div className="card d-flex justify-content-center align-items-center border-0">
                <div className="z-3 bg-white rounded-circle card-w d-flex align-items-center justify-content-center shadow p-3">

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M309.6 158.5L332.7 19.8C334.6 8.4 344.5 0 356.1 0c7.5 0 14.5 3.5 19 9.5L392 32l52.1 0c12.7 0 24.9 5.1 33.9 14.1L496 64l56 0c13.3 0 24 10.7 24 24l0 24c0 44.2-35.8 80-80 80l-32 0-16 0-21.3 0-5.1 30.5-112-64zM416 256.1L416 480c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-115.2c-24 12.3-51.2 19.2-80 19.2s-56-6.9-80-19.2L160 480c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-230.2c-28.8-10.9-51.4-35.3-59.2-66.5L1 167.8c-4.3-17.1 6.1-34.5 23.3-38.8s34.5 6.1 38.8 23.3l3.9 15.5C70.5 182 83.3 192 98 192l30 0 16 0 159.8 0L416 256.1zM464 80a16 16 0 1 0 -32 0 16 16 0 1 0 32 0z"/></svg></div>
                
                <div className="bg-warning card-bg position-absolute">

                </div>
            </div>
            <p>Pet Food</p>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center mobile-animate" data-aos='fade-up' data-aos-offset="100">
            <div className="card d-flex justify-content-center align-items-center border-0">
                <div className="z-3 bg-white rounded-circle card-w d-flex align-items-center justify-content-center shadow p-3">

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M393.4 9.4c12.5-12.5 32.8-12.5 45.3 0l64 64c12.5 12.5 12.5 32.8 0 45.3c-11.8 11.8-30.7 12.5-43.2 1.9l-9.5 9.5-48.8 48.8c-9.2 9.2-11.5 22.9-8.6 35.6c9.4 40.9-1.9 85.6-33.8 117.5L197.3 493.3c-25 25-65.5 25-90.5 0l-88-88c-25-25-25-65.5 0-90.5L180.2 153.3c31.9-31.9 76.6-43.1 117.5-33.8c12.6 2.9 26.4 .5 35.5-8.6l48.8-48.8 9.5-9.5c-10.6-12.6-10-31.4 1.9-43.2zM99.3 347.3l65.4 65.4c6.2 6.2 16.4 6.2 22.6 0l97.4-97.4c6.2-6.2 6.2-16.4 0-22.6l-65.4-65.4c-6.2-6.2-16.4-6.2-22.6 0L99.3 324.7c-6.2 6.2-6.2 16.4 0 22.6z"/></svg></div>
                
                <div className="bg-warning card-bg position-absolute">

                </div>
            </div>
            <p>Ketchup and Pickles</p>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center mobile-animate" data-aos='fade-up' data-aos-offset="100">
            <div className="card d-flex justify-content-center align-items-center border-0">
                <div className="z-3 bg-white rounded-circle card-w d-flex align-items-center justify-content-center shadow p-3">

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M208 64a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM9.8 214.8c5.1-12.2 19.1-18 31.4-12.9L60.7 210l22.9-38.1C99.9 144.6 129.3 128 161 128c51.4 0 97 32.9 113.3 81.7l34.6 103.7 79.3 33.1 34.2-45.6c6.4-8.5 16.6-13.3 27.2-12.8s20.3 6.4 25.8 15.5l96 160c5.9 9.9 6.1 22.2 .4 32.2s-16.3 16.2-27.8 16.2l-256 0c-11.1 0-21.4-5.7-27.2-15.2s-6.4-21.2-1.4-31.1l16-32c5.4-10.8 16.5-17.7 28.6-17.7l32 0 22.5-30L22.8 246.2c-12.2-5.1-18-19.1-12.9-31.4zm82.8 91.8l112 48c11.8 5 19.4 16.6 19.4 29.4l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-74.9-60.6-26-37 111c-5.6 16.8-23.7 25.8-40.5 20.2S-3.9 486.6 1.6 469.9l48-144 11-33 32 13.7z"/></svg></div>
                
                <div className="bg-warning card-bg position-absolute">

                </div>
            </div>
            <p>Mining and Construction</p>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center mobile-animate" data-aos='fade-up' data-aos-offset="100">
            <div className="card d-flex justify-content-center align-items-center border-0">
                <div className="z-3 bg-white rounded-circle card-w d-flex align-items-center justify-content-center shadow p-3">

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M448 32l0 11c0 38.2 15.2 74.8 42.2 101.8l21 21c21 21 32.8 49.5 32.8 79.2l0 11c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-11c0-12.7-5.1-24.9-14.1-33.9l-21-21C405.9 151.1 384 98.1 384 43l0-11c0-17.7 14.3-32 32-32s32 14.3 32 32zM576 256l0-11c0-38.2-15.2-74.8-42.2-101.8l-21-21c-21-21-32.8-49.5-32.8-79.2l0-11c0-17.7 14.3-32 32-32s32 14.3 32 32l0 11c0 12.7 5.1 24.9 14.1 33.9l21 21c39 39 60.9 91.9 60.9 147.1l0 11c0 17.7-14.3 32-32 32s-32-14.3-32-32zM0 416c0-35.3 28.7-64 64-64l352 0c17.7 0 32 14.3 32 32l0 96c0 17.7-14.3 32-32 32L64 512c-35.3 0-64-28.7-64-64l0-32zm224 0l0 32 160 0 0-32-160 0zm288-64c17.7 0 32 14.3 32 32l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96c0-17.7 14.3-32 32-32zm96 0c17.7 0 32 14.3 32 32l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96c0-17.7 14.3-32 32-32z"/></svg></div>
                
                <div className="bg-warning card-bg position-absolute">

                </div>
            </div>
            <p>Tobacco Industry</p>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center mobile-animate" data-aos='fade-up' data-aos-offset="100">
            <div className="card d-flex justify-content-center align-items-center border-0">
                <div className="z-3 bg-white rounded-circle card-w d-flex align-items-center justify-content-center shadow p-3 overflow-visible">

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M96 0C43 0 0 43 0 96L0 416c0 53 43 96 96 96l288 0 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-64c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L384 0 96 0zm0 384l256 0 0 64L96 448c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16zm16 48l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/></svg> </div>
                
                <div className="bg-warning card-bg position-absolute">

                </div>
            </div>
            <p>Paper Industry</p>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center mobile-animate" data-aos='fade-up' data-aos-offset="100">
            <div className="card d-flex justify-content-center align-items-center border-0">
                <div className="z-3 bg-white rounded-circle card-w d-flex align-items-center justify-content-center shadow p-3">

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M528.3 61.3c-11.4-42.7-55.3-68-98-56.6L414.9 8.8C397.8 13.4 387.7 31 392.3 48l24.5 91.4L308.5 167.5l-6.3-18.1C297.7 136.6 285.6 128 272 128s-25.7 8.6-30.2 21.4l-13.6 39L96 222.6 96 184c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 264-16 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l512 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-137.3 0L340 257.5l-62.2 16.1L305.3 352l-66.6 0L265 277l-74.6 19.3L137.3 448 96 448l0-159.2 337.4-87.5 25.2 94c4.6 17.1 22.1 27.2 39.2 22.6l15.5-4.1c42.7-11.4 68-55.3 56.6-98L528.3 61.3zM205.1 448l11.2-32 111.4 0 11.2 32-133.8 0z"/></svg></div>
                
                <div className="bg-warning card-bg position-absolute">

                </div>
            </div>
            <p>Oil Drilling</p>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center mobile-animate" data-aos='fade-up' data-aos-offset="100">
            <div className="card d-flex justify-content-center align-items-center border-0">
                <div className="z-3 bg-white rounded-circle card-w d-flex align-items-center justify-content-center shadow p-3">

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M211.8 0c7.8 0 14.3 5.7 16.7 13.2C240.8 51.9 277.1 80 320 80s79.2-28.1 91.5-66.8C413.9 5.7 420.4 0 428.2 0l12.6 0c22.5 0 44.2 7.9 61.5 22.3L628.5 127.4c6.6 5.5 10.7 13.5 11.4 22.1s-2.1 17.1-7.8 23.6l-56 64c-11.4 13.1-31.2 14.6-44.6 3.5L480 197.7 480 448c0 35.3-28.7 64-64 64l-192 0c-35.3 0-64-28.7-64-64l0-250.3-51.5 42.9c-13.3 11.1-33.1 9.6-44.6-3.5l-56-64c-5.7-6.5-8.5-15-7.8-23.6s4.8-16.6 11.4-22.1L137.7 22.3C155 7.9 176.7 0 199.2 0l12.6 0z"/></svg></div>
                
                <div className="bg-warning card-bg position-absolute">

                </div>
            </div>
            <p>Textile Industry</p>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center mobile-animate" data-aos='fade-up' data-aos-offset="100">
            <div className="card d-flex justify-content-center align-items-center border-0">
                <div className="z-3 bg-white rounded-circle card-w d-flex align-items-center justify-content-center shadow">
                <img src={tooth} className="logo"></img>
                </div>
                
                <div className="bg-warning card-bg position-absolute">

                </div>
            </div>
            <p>Toothpaste</p>
        </div>
      </div>
    

    
    </div>
  );
}

export default Industries;


