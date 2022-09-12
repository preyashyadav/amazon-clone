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
          alt=""
        />
      </div>
      <div className="home-row">
        <Product
          title="Vibrant Green Two Layer Bamboo Plant, Syngonium Plant, Sansevieria Plant, Jade Plant , Money Plant in Multicolor Plastic Pot | Indoor Plants | Airpurifying Plants | Gift for Birthday Home Decor"
          image="https://m.media-amazon.com/images/I/61nBfzfh2dL._SX522_.jpg"
          price={19.99}
          rating={5}
        />
        <Product
          title="Apple iPhone 12 (128GB) - Blue"
          image="https://images-eu.ssl-images-amazon.com/images/I/41xssMLI2DL._SY445_SX342_QL70_FMwebp_.jpg"
          price={999.99}
          rating={4}
        />
      </div>
      <div className="home-row">
        <Product
          title="Noise Pulse Go Buzz Advanced Bluetooth Calling Smart Watch with 1.69inch Display, 500 NITS Brightness, Noise Health Suite, 150+ Cloud Watch Face, 100 Sports Mode, Music & Camera Control-(Midnight Blue)
Visit the Noise Store"
          image="https://m.media-amazon.com/images/I/61oDV-EKLyL._SX679_.jpg"
          price={49.99}
          rating={3}
        />
        <Product
          title="SteelSeries Arctis 9X Wireless Gaming Headset – Integrated Xbox Wireless + Bluetooth – 20+ Hour Battery Life – for Xbox One, Series X & PC"
          image="https://m.media-amazon.com/images/I/71inNhAFnDL._SY879_.jpg"
          price={29.99}
          rating={4}
        />
        <Product
          title="Zebronics Zeb-Transformer-M Optical USB Gaming Mouse with LED Effect(Black)"
          image="https://m.media-amazon.com/images/I/81tioCUVf4L._SX679_.jpg"
          price={12.99}
          rating={2}
        />
      </div>
      <div className="home-row">
        <Product
          title="PHILIPS Brilliance 499P9H1/75 124.46 cm (49-inch) Curved SuperWide Dual QHD LCD Display with Pop-Up Webcam with Windows Hello"
          image="https://5.imimg.com/data5/HE/TU/MY-61621138/50-500x500.jpg"
          price={499.99}
          rating={4}
        />
      </div>
    </div>
  );
}

export default Home;
