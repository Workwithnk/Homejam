import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { IoTicketOutline } from "react-icons/io5";
import UserData from "../data/UserData";
import "../CSS/Upcoming.css";

function UpComing() {
  return (
    <div className="Upcoming">
      <div className="title_Upcoming">
        <h1>Upcoming Shows</h1>
        <p>View all</p>
      </div>
      <div className="cardCon_Upcoming">
        {UserData.map((item) => {
          return (
            <div key={item.id} className="cardConatiner_Upcoming">
              <div className="card_Upcoming">
                <div className="imageCon_Upcoming">
                  <img src={item.image} alt="image" />
                </div>
                <div className="cardDetail_UpComing">
                  <div className="name_UpComing">
                    <p>{item.profession}</p>
                    <h3>{item.name}</h3>
                  </div>
                  <div className="save_Upcoming">
                    <p>
                      More Info <BsArrowRight className="rightIcon" />
                    </p>
                    <IoTicketOutline className="saveIcon" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default UpComing;
