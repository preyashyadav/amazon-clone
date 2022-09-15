import React from "react";
import Subtotal from "./Subtotal";

import "./Checkout.css";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout-left">
        <img
          className="checkout-ad"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonBusiness/JanArt/Gateway/MainBanner_1500_300_1701.jpg"
          alt=""
        />
        <div className="checkout-title">
          <h2>Your shopping basket</h2>
          {/* Shopping Basket */}
          {/* Shopping Basket */}
          {/* Shopping Basket */}
          {/* Shopping Basket */}
          {/* Shopping Basket */}
        </div>
      </div>
      <div className="checkout-right">
        {/* <h2>Your subtotal is: $429.00</h2> */}
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
