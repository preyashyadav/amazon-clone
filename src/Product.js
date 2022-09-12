import React from "react";
import "./Product.css";
function Product() {
  return (
    <div className="product">
      <div className="product-info">
        <p>
          Pothos are such popular houseplants for a reason, its golden streaks
          on the leaves as they trail along a wall, shelf.
        </p>
        <p className="product-price">
          <small>$</small>
          <strong>9.99</strong>
        </p>
        <div className="product-rating">
          <div>⭐</div>
        </div>
      </div>
      <img src="https://m.media-amazon.com/images/I/61nBfzfh2dL._AC_UL480_FMwebp_QL65_.jpg" />
      <button>Add to basket</button>
    </div>
  );
}

export default Product;
