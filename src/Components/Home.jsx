import React from "react";
import NavBar from "./NavBar";
import { AiOutlineHeart } from "react-icons/ai";
import { BiCalendarStar } from "react-icons/bi";
import MobileNav from "./MobileNav";
import "../CSS/Home.css";

function Home() {
  return (
    <div className="home">
      <NavBar />
      <MobileNav />
      <div className="text_home">
        <h1>Cari Cari</h1>
        <p>
          Live from their sofa to yours. Get closer to your favourite
          artists,and never miss out.
        </p>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="progress_Home">
          <div className="mainProgressCon_Home">
            <div className="subProgressCon_Home">
              <AiOutlineHeart className="Icon_Home" />
              <h5>0</h5>
              <p>Label</p>
            </div>
          </div>
          <div className="mainProgressCon_Home">
            <div className="subProgressCon_Home">
              <BiCalendarStar className="Icon_Home" style={{ color: "#fff" }} />
              <h5>0</h5>
              <p>Label</p>
            </div>
          </div>
          <div className="mainProgressCon_Home">
            <div className="subProgressCon_Home">
              <BiCalendarStar className="Icon_Home" style={{ color: "#fff" }} />
              <h5>0</h5>
              <p>Label</p>
            </div>
          </div>
          <div className="mainProgressCon_Home">
            <div className="subProgressCon_Home">
              <BiCalendarStar className="Icon_Home" style={{ color: "#fff" }} />
              <h5>0</h5>
              <p>Label</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
