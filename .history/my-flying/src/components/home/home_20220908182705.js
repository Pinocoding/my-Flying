import React from "react";
import homeBackGround from "../../assets/images/homebackground.jpg";
import "./Home.css";
import Header from "../Header/Header";
function Home() {
  return (
    <div className="home">
      <Header />
      {/* <div className="home-img">
        <img src={homeBackGround} alt="/#" />
      </div> */}
    </div>
  );
}

export default Home;
