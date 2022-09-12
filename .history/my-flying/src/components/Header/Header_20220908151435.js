import React from "react";
import "./Header.css";

function Header() {
  return <div className="header">
    <div className="header-logo"></div>
    <div className="header-nav">
      <ul>
        <li><a href="">Promotion</a></li>
        <li><a href="">Flight Schedule</a></li>
      <li><a href=""></a></li>
      </ul>
    </div>
  <button className="header-booking">Booking now</button>
  </div>;
}

export default Header;
