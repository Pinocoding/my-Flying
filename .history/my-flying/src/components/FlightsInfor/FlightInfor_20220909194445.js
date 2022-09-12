import React from "react";
import { BsBagCheck } from "react-icons/bs";
import { ImSpoonKnife } from "react-icons/im";
import "./FlightInfor.css";

function FlightInfor({ img, name }) {
  const blueText = {
    color: `rgba(77, 70, 250, 1)`,
    fontFamily: `SVN-Biennale`,
    fontStyle: `normal`,
    fontWeight: `600`,
    fontSize: `14px`,
    lineHeight: `21px`,
  };
  const meal = {
   marginRight: ``
  };

  return (
    <div className="flight-container">
      <div className="flight-list-container">
        <ul className="flight-list">
          <li>
            <div className="flight-img">
              <img src={img} alt="#" />
            </div>
          </li>
          <li className="flight-name">{name}</li>
        </ul>
        <ul className="flight-stuff">
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
        </ul>

        <ul className="flight-eat">
          <li className="flight-meal">
            <p>
              <BsBagCheck style={}/>
              Baggage <span style={blueText}>20kg</span>
            </p>
            <p>
              <ImSpoonKnife />
              In-Flight <span style={blueText}>Meal</span>
            </p>
          </li>
          <li className="flight-price">
            <p className="flight-old">1326000</p>
            <p className="flight-new">1322000</p>
          </li>
        </ul>

        <button className="flight-choose">Choose</button>
      </div>

      <ul className="flight-details">
        <li>Flight detail</li>
        <li>Fare info</li>
      </ul>
    </div>
  );
}

export default FlightInfor;
