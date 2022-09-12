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

        <li className="flight-meal">
          <p>Baggage 20kg </p>
          <p>In-flight Meal </p>
        </li>

        <li className="flight-price">
          <p>1326000</p>
          <p>1322000</p>
        </li>
        <li className="flight-choose">
          <button>Choose</button>
        </li>
      </ul>

      <ul>
        <li>F</li>
      </ul>
    </div>
  );
}

export default FlightInfor;
