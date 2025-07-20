import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="headerSection">
      <div className="left">Shopping Mall</div>

      <div className="center">
        <ul>
          <li>Woman</li>
          <li>Men</li>
          <li>Children</li>
          <li>Beauty</li>
        </ul>
      </div>

      <div className="search">
        <input type="text" placeholder="Search..." />
      </div>

      <div className="right">
        <div>Signin / Signup</div>
        <div>Cart</div>
      </div>
    </div>
  );
};

export default Header;
