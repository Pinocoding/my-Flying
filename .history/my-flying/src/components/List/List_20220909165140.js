import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./List.css";
import FlightInfor from "../FlightsInfor/FlightInfor";
function List() {
  return (
    <div>
      <Header />

      <div className="list-container">
        <div classname></div>
        <div className="list-filter">filter here</div>
        <div className="list-row">
          <FlightInfor />
        </div>
        <div className="list-userFlight">blem</div>
      </div>
      <Footer />
    </div>
  );
}

export default List;
