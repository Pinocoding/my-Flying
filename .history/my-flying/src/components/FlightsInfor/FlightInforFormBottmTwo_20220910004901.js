import React from "react";
import "./FlightInforFormBottmTwo.css";
function FlightInforFormBottmTwo({ img }) {
  const styleText = {
    fontFamily: `SVN-Biennale`,
    fontStyle: `normal`,
    fontWeight: `600`,
    fontSize: `14px`,
    lineHeight: `24px`,

    /* identical to box height */
  };
  return (
    <div className="FlightInforFormBottmTwo">
      <div className="conditions">
        <div style={styleText}>CONDITIONS</div>
        <div className="yourflights-brand">
          <div className="yourflights-brandlogo">
            <img src={img} alt="" />
          </div>
          <div>
            <div className="yourflights-dateBottom">Bamboo Airways</div>
            <div className="yourflights-datedetailsBottom ">QH-183 Economy</div>
          </div>
        </div>

        <div className="from-to">
          <p className="from-location">Da Nang</p>

          <p className="to-location">Ho Chi Minh City</p>
        </div>
        <div
          style={{
            color: "rgba(77, 70, 250, 1)",
            fontWeight: "400",
            fonSize: "12px",
          }}
        >
          Economy
        </div>
        <div style={{mt}}>Non - Refundable</div>
      </div>
      <div className="price-details">
        <div style={styleText}>PRICE DETAILS</div>
        <div className="price-details-container">
          <div className="price-details-left">
            <p>Adult Basic Fare (x1)</p>
            <p>Tax </p>
            <p>Regular Total Price</p>
            <p style={{ color: "rgba(240, 99, 54, 1)" }}>Save</p>
          </div>
          <div className="price-details-right">
            <p style={styleText}>1,326,000 vnd </p>
            <p>included</p>
            <p>1,326,000 vnd</p>
            <p>-4,000 vnd</p>
          </div>
        </div>
        <div className="price-detailspay">
          <p>You pay</p>
          <p className="price-detailspay-right">1,322,000 vnd</p>
        </div>
      </div>
    </div>
  );
}

export default FlightInforFormBottmTwo;
