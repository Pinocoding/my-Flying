import React, { useState } from "react";
import homeBackGround from "../../assets/images/homebackground.jpg";
import Header from "../Header/Header";
import TravelBooking from "../TravelBooking/TravelBooking";
// import Footer from "../Footer/Footer";
import "./Home.css";

const textColor = {
  color: `rgba(76, 70, 250, 1)`,
  fontWeight: "600",
};
function Home() {
  const [show, setShow] = useState(false);
  const [showBusiness, setShowBusiness] = useState(false);

  const handleShow = (e) => {
    setShow(true);
  };
  const handleHide = (e) => {
    setShow(false);
  };
  const handleShowBesiness = (e) => {
    setShowBusiness(true);
  };
  const handleHideBesiness = (e) => {
    {
      setShowBusiness(false);
    }
  };
  return (
    <div className="home">
      <div>
        <Header />
      </div>
      <div className="home-hero">
        <p>Hello!</p>
        <p>Where are</p>
        <p>
          you <span style={textColor}>flying</span> to ...
        </p>
      </div>
      <div className="home-img">
        <img src={homeBackGround} alt="/#" />
      </div>
      <TravelBooking
        handleHide={handleHide}
        handleShow={handleShow}
        show={show}
        showBusiness={showBusiness}
      />
    </div>
  );
}

export default Home;
