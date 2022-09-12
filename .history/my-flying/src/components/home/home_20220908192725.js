import React from "react";
import homeBackGround from "../../assets/images/homebackground.jpg";
import Header from "../Header/Header";
import "./Home.css";



const textColor = {
  color: gba(77, 70, 250, 1)
} 
function Home() {
  return (
    <div className="home">
      <div>
        <Header />
      </div>
      <div className="home-hero">
        <p>Hello</p>
        <p>Where are</p>
        <p>you <span style={textColor}>flying</span>to ...</p>
      </div>
      <div className="home-img">
        <img src={homeBackGround} alt="/#" />
      </div>
    </div>
  );
}

export default Home;
