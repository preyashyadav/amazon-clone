import React from "react";
import "./Home.css";
import Product from "./Product.js";
function Home() {
  return (
    <div className="home">
      <div className="home-container">
        <img
          className="home-image"
          src="https://vertexbazaar.com/wp-content/uploads/2022/04/amazon-prime-video-banner.jpg"
        />
      </div>
      <div className="home-row">
        <Product />
        <Product />
      </div>
      <div className="home-row">
        <Product />
        <Product />
        <Product />
      </div>
      <div className="home-row">
        <Product />
      </div>
    </div>
  );
}

export default Home;
