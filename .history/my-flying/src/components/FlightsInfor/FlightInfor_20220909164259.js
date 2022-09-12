import React from "react";
import "./FlightInfor.css";

function FlightInfor() {
  return (
    <div className="flight-container">
      <ul>
        <li>logo</li>
        <li className="flight-name"></li>
        <li className="flight-time">
          <p>21:40</p>
          <p>DAD</p>
        </li>

        <li className="flight-direc">
          <p>1h30m</p>
          <p></p>
          <p>Direct</p>
        </li>
        <li className="flight-time">
          <p>23:10</p>
          <p>DAD</p>
        </li>

        <li className="flight-">
          <p>23:10</p>
          <p>DAD</p>
        </li>
      </ul>
    </div>
  );
}

export default FlightInfor;
