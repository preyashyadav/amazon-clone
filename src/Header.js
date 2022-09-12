import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
function Header() {
  return (
    <div className="header">
      <div>
        <img
          className="header-logo"
          src="https://pnggrid.com/wp-content/uploads/2021/05/Amazon-Logo-Transparent-1024x310.png"
        />
      </div>
      <div className="header-search">
        <input className="header-search-input" type="text"></input>
        <SearchIcon className="header-search-icon" />
      </div>
      <div className="header-nav">
        <div className="header-option">
          <span className="header-option-line-one">Hello Guest!</span>
          <span className="header-option-line-two">Sign in</span>
        </div>
        <div className="header-option">
          <span className="header-option-line-one">Returns</span>
          <span className="header-option-line-two">& Orders</span>
        </div>
        <div className="header-option">
          <span className="header-option-line-one">Your</span>
          <span className="header-option-line-two">Prime</span>
        </div>
        <div className="header-option-basket">
          <ShoppingCartIcon />
          <span className="header-option-line-two basket-count">0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
