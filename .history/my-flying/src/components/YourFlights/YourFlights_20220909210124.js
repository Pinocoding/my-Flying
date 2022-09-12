import React from "react";
import "./YourFlights.css";
function YourFlights() {
  return (
    <div className="yourflights">
      <div className="yourflights-tittle">your flights</div>
      <div className="yourflights-container">
        <div className="yourflights-date">
          <div>
            <div>logo</div>
            <div>
              <div>Fri, 11 Feb, 2022</div>
              <div>Da Nang - Ho Chi Minh</div>
            </div>
          </div>
        </div>
        <div className="yourflights-brand">
          <div>
            <div>logo</div>
            <div>
              <div>Bamboo Airways</div>
              <div>Details</div>
            </div>
          </div>
        </div>
        <div className="yourflights-time">
          
          
          
        </div>
        <div className="yourflights-changeDeparture">
          Change departure flight
        </div>
      </div>
      <div className="yourflights-address"></div>
      <div className="yourflights-total"></div>
    </div>
  );
}

export default YourFlights;
